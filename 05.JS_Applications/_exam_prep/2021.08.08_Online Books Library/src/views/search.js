//SEARCH

/*
import {csearchData } from '../api/data.js';
import {html} from '../lib.js';
import { createSubmitHandler } from '../util.js';


const searchTemplate = (foundShoes, search, onSubmit, hasUser) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
    <input
        id="#search-input"
        type="text"
        name="search"
        placeholder="Search here..."
        .value=${search}
        required
    />
    <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
    ${search ? html`
    <div id="search-container">
    <ul class="card-wrapper">
        ${foundShoes.length !== 0 ? 
            foundShoes.map(s => cardTemplate(s, hasUser)) 
        : html`
            <h2>There are no results found.</h2>
        `}
    </ul>
    </div>` : null}  
</section>`;

const cardTemplate = (shoe, hasUser) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p>
    <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
    <strong>Model: </strong
    ><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    ${hasUser ? html`<a class="details-btn" href="/catalog/${shoe._id}">Details</a>` : null}
</li>`;

export async function showSearch(ctx) {
    const search = ctx.query.search || '';
    const hasUser = Boolean(ctx.user)
    let foundShoes = []

    ctx.render(html`<p>Loading &hellip;</p>`);
    if (search) {
        foundShoes = await searchData(search);
    }
    
    ctx.render(searchTemplate(foundShoes, search, createSubmitHandler(onSubmit), hasUser));

    async function onSubmit(data, form) {
        ctx.page.redirect('/search?search=' + data.search);
    }
}
*/

