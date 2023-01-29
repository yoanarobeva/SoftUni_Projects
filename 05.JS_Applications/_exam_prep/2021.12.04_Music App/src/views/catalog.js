import { getAll } from '../api/data.js';
import { html } from '../lib.js'

const catalogTemplate = (albums, hasUser) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${albums.length !== 0 ? albums.map(m => cardTemplate(m, hasUser)) : html`<p>No Albums in Catalog!</p>`}

</section>`;

const cardTemplate = (album, hasUser) => html`
<div class="card-box">
    <img src=${album.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${hasUser ? html`
        <div class="btn-group">
            <a href="/catalog/${album._id}" id="details">Details</a>
        </div>` : null}
    </div>
</div>`;

export async function showCatalog(ctx) {
    const albums = await getAll();
    const hasUser = ctx.user;
    ctx.render(catalogTemplate(albums, hasUser)); 
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