import { getAll, getMyOwn } from '../api/data.js'; 
import { html } from '../lib.js'

const catalogTemplate = (books, userpage) => html`
${!userpage ? html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length !== 0 ? html`
        <ul class="other-books-list">
            ${books.map(cardTemplate)}
        </ul>` 
    : html`<p class="no-books">No books in database!</p>`}
</section>` 
: html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length !== 0 ? html`
    <ul class="my-books-list">
        ${books.map(cardTemplate)}
    </ul>` 
    : html`<p class="no-books">No books in database!</p>`}
</section>`}`;

const cardTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/catalog/${book._id}">Details</a>
</li>`;


export async function showCatalog(ctx) {
    const userpage = ctx.pathname == '/my-books';
    let books = [];

    if (userpage) {
        const userId = ctx.user._id;
        books = await getMyOwn(userId);
    } else {
        books = await getAll();
    }

    ctx.render(catalogTemplate(books, userpage)); 
}
