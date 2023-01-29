import { deleteItem, getById } from '../api/data.js'
import { html, until } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (dataPromise) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
    </div>
</div>`

const itemTemplate = (data, onDelete, isOwner) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${data.img} />
        </div>
    </div>
</div>
<div class="col-md-4">
    <p>Make: <span>${data.make}</span></p>
    <p>Model: <span>${data.model}</span></p>
    <p>Year: <span>${data.year}</span></p>
    <p>Description: <span>${data.description}</span></p>
    <p>Price: <span>${data.price}</span></p>
    <p>Material: <span>${data.material}</span></p>
    ${isOwner ? html`
    <div>
        <a href=${`/edit/${data._id}`} class="btn btn-info">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
    </div>` 
    : null}
</div>`;

export function detailsPage(ctx) {
    const id = ctx.params.id;
    ctx.render(detailsTemplate(loadItem(id, ctx)))
}

async function onDelete(id, ctx) {
    const choice = confirm('Are you sure you want to delete this item?');

    if(choice) {
        await deleteItem(id);
        ctx.page.redirect('/');
    }
    
}

async function loadItem(id, ctx) {
    const data = await getById(id);
    let isOwner = false;
    const userData = getUserData();
    if (userData) {
        isOwner = userData.id == data._ownerId;
    }
    return itemTemplate(data, () => onDelete(id, ctx), isOwner);
}