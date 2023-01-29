import { deleteById, getById } from '../api/data.js';
import { donate, getDonations, getOwnDonation } from '../api/donations.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (post, donations, hasUser, canDonate, isOwner, onDelete, onDonate) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>

                ${hasUser ? html`
                <div class="btns">

                    ${isOwner ? html`
                    <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>` : null}
                    
                    ${canDonate ? html`<a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>` : null}

                </div>` : null}
            </div>
        </div>
    </div>
</section>`;


export async function showDetails(ctx) {
    const id = ctx.params.id;
    
    const requests = [                 // REQUEST FOR TWO THINGS, AT THIS CASE FOR LIKES, USUAL TAKE ONLY ONE 
        await getById(id),
        getDonations(id)
    ]
    
    const hasUser = Boolean(ctx.user);

    if (hasUser) {
        requests.push(getOwnDonation(id, ctx.user._id))
    }

    const [post, donations, hasDonation] = await Promise.all(requests);

    const isOwner = hasUser && ctx.user._id == post._ownerId;
    const canDonate = !isOwner && hasDonation == 0;

    ctx.render(detailsTemplate(post, donations, hasUser, canDonate, isOwner, onDelete, onDonate))

    async function onDelete() {
        const choice = confirm('Are you sure?');  // MODAL WINDOW
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog');  // CHANGDE REDIRECTION IF NEEDED
        }
    }

    async function onDonate() {  // LIKES, IF NEEDED
        await donate(id);
        ctx.page.redirect('/catalog/' + id);
    }
}