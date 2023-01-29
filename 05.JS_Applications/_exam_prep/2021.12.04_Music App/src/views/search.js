import {searchData } from '../api/data.js';
import {html} from '../lib.js';
import { createSubmitHandler } from '../util.js';


const searchTemplate = (foundAlbums, search, onSubmit, hasUser) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSubmit} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    ${search ? html`
    <div class="search-result">
        ${foundAlbums.length !== 0 ? foundAlbums.map(m => cardTemplate(m, hasUser)) : html`<p class="no-result">No result.</p>`}  
    </div>` : null}

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

export async function showSearch(ctx) {
    ctx.render(searchTemplate());
    const search = ctx.query.search || '';
    const hasUser = Boolean(ctx.user)
    let foundAlbums = []

    ctx.render(html`<p>Loading &hellip;</p>`);
    if (search) {
        foundAlbums = await searchData(search);
    }
    
    ctx.render(searchTemplate(foundAlbums, search, onSubmit, hasUser));

    async function onSubmit() {
        const input = document.getElementById('search-input').value;
        ctx.page.redirect('/search?search=' + input);
    }
}


