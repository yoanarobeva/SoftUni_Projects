import { getAll } from '../api/data.js';  // ADD getMyOwn IF MY CATALOG
import { html } from '../lib.js'

//userpage IF MY CATALOG
const catalogTemplate = (memes, userpage) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${memes.length !== 0 ? memes.map(cardTemplate) : html`<p class="no-memes">No memes in database.</p>`}
    </div>
</section>`;

const cardTemplate = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/catalog/${meme._id}">Details</a>
        </div>
    </div>
</div>`;

export async function showCatalog(ctx) {
    const memes = await getAll();
    ctx.render(catalogTemplate(memes)); 
}

// FUNCTION IF MY CATALOG

/*
export async function showCatalog(ctx) {
    const userpage = ctx.pathname == '/my-catalog';
    let allData = [];

    if (userpage) {
        const userId = ctx.user._id;
        allData = await getMyOwn(userId);
    } else {
        allData = await getAll();
    }

    ctx.render(catalogTemplate(allData, userpage)); 
}
*/