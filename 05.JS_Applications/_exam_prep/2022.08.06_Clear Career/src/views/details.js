import { deleteById, getById } from '../api/data.js';
import { apply, getApplications, getOwnApplication } from '../api/applications.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (offer, applications, hasUser, canApply, isOwner, onDelete, onApply) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
            <h4>Description</h4>
            <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
            <h4>Requirements</h4>
            <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${applications}</strong></p>

        ${hasUser ? html`
        <div id="action-buttons">

            ${isOwner ? html`
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
            ${canApply ? html`<a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>` : null}
        </div>` 
        : null}
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    
    const requests = [                 // REQUEST FOR TWO THINGS, AT THIS CASE FOR LIKES, USUAL TAKE ONLY ONE 
        await getById(id),
        getApplications(id)
    ]
    
    const hasUser = Boolean(ctx.user);

    if (hasUser) {
        requests.push(getOwnApplication(id, ctx.user._id))
    }

    const [offer, applications, hasApplication] = await Promise.all(requests);

    const isOwner = hasUser && ctx.user._id == offer._ownerId;
    const canApply = !isOwner && hasApplication == 0;

    ctx.render(detailsTemplate(offer, applications, hasUser, canApply, isOwner, onDelete, onApply))

    async function onDelete() {
        const choice = confirm('Are you sure?');  // MODAL WINDOW
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog');  // CHANGDE REDIRECTION IF NEEDED
        }
    }

    async function onApply() {  // LIKES, IF NEEDED
        await apply(id);
        ctx.page.redirect('/catalog/' + id);
    }
}