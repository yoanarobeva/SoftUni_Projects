import { deleteById, getById } from '../api/data.js';
import { like, getLikes, getOwnLike } from '../api/likes.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (book, likes, canLike, isOwner, onDelete, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${isOwner ? html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : null}

            ${canLike ? html`
            <a @click=${onLike} class="button" href="javascript:void(0)">Like</a>` : null}

            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    
    const requests = [              
        await getById(id),
        getLikes(id)
    ]
    
    const hasUser = Boolean(ctx.user);

    if (hasUser) {
        requests.push(getOwnLike(id, ctx.user._id))
    }

    const [book, likes, hasLike] = await Promise.all(requests);

    const isOwner = hasUser && ctx.user._id == book._ownerId;
    const canLike = !isOwner && hasLike == 0;

    ctx.render(detailsTemplate(book, likes, canLike, isOwner, onDelete, onLike))

    async function onDelete() {
        const choice = confirm('Are you sure?');  // MODAL WINDOW
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog');  // CHANGDE REDIRECTION IF NEEDED
        }
    }

    async function onLike() {  // LIKES, IF NEEDED
        await like(id);
        ctx.page.redirect('/catalog/' + id);
    }
}