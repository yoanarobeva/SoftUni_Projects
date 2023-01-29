import { deleteById, getById } from '../api/data.js';
import { like, getLikes, getOwnLike } from '../api/likes.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (event, likes, hasUser, canLike, isOwner, onDelete, onLike) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${event.title}</h1>
            <div>
                <img src=${event.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${event.description}</p>
            <h4>Date: ${event.date}</h4>
            <h4>Author: ${event.author}</h4>

            ${hasUser ? html`
            <div class="buttons">
                ${isOwner ? html`
                <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                <a class="btn-edit" href="/edit/${event._id}">Edit</a>` : null}

                ${canLike ? html`
                <a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>` : null}
            </div>` : null}
            
            <p class="likes">Likes: ${likes}</p>
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    
    const requests = [                 
        getById(id),
        getLikes(id)
    ]
    
    const hasUser = Boolean(ctx.user);

    if (hasUser) {
        requests.push(getOwnLike(id, ctx.user._id))
    }

    const [event, likes, hasLike] = await Promise.all(requests);

    const isOwner = hasUser && ctx.user._id == event._ownerId;
    const canLike = !isOwner && hasLike == 0;

    ctx.render(detailsTemplate(event, likes, hasUser, canLike, isOwner, onDelete, onLike))

    async function onDelete() {
        const choice = confirm('Are you sure?');  // MODAL WINDOW
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog');  // CHANGDE REDIRECTION IF NEEDED
        }
    }

    async function onLike() {
        like(id);
        ctx.page.redirect('/catalog/' + id);
    }
}