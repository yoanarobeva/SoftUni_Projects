import { getAllComments, newComment } from '../api/comments.js';
import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const detailsTemplate = (game, comments, hasUser, isOwner, onDelete, onComment) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        ${!isOwner ? html`
            <div class="details-comments">
                <h2>Comments:</h2>
                ${comments.length !== 0 ? html`
                    <ul>
                        ${comments.map(commentTemplate)}
                    </ul>` 
                : html`
                    <p class="no-comment">No comments.</p>
                `} 
            </div>` 
        : html`
            <div class="buttons">
                <a href="/edit/${game._id}" class="button">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
            </div>
        `}
    </div>

    ${hasUser && !isOwner ? html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onComment} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>` : null}

</section>`;

const commentTemplate = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    
    const requests = [                 
        await getById(id),
        await getAllComments(id)
    ]
    
    const hasUser = Boolean(ctx.user);

    const [game, comments] = await Promise.all(requests);

    const isOwner = hasUser && ctx.user._id == game._ownerId;

    ctx.render(detailsTemplate(game, comments, hasUser, isOwner, onDelete, createSubmitHandler(onComment)))

    async function onDelete() {
        const choice = confirm('Are you sure?');  // MODAL WINDOW
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/');  // CHANGDE REDIRECTION IF NEEDED
        }
    }

    async function onComment({comment}, form) {  // COMMENTS, IF NEEDED
        const body = {
            gameId: id,
            comment
        }
        await newComment(body);
        form.reset();
        ctx.page.redirect('/catalog/' + id);
    }
}