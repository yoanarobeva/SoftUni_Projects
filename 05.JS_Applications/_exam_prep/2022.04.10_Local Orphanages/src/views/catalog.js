import { getAll, getMyOwn } from '../api/data.js';
import { html } from '../lib.js'

const catalogTemplate = (posts, userpage) => html`
${userpage ? html`
    <section id="my-posts-page">
        <h1 class="title">My Posts</h1>
        
        ${posts.length !== 0 ? html`
            <div class="my-posts">
                ${posts.map(x => cardTemplate(x, userpage))}
            </div>` 
        : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
    </section>` 
: html`
    <section id="dashboard-page">
        <h1 class="title">All Posts</h1>
        
        ${posts.length !== 0 ? html`
            <div class="all-posts">
                ${posts.map(x => cardTemplate(x, userpage))}
            </div>` 
        : html`<h1 class="title no-posts-title">No posts yet!</h1>`}
    </section>`
}`;

const cardTemplate = (post, userpage) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/catalog/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

export async function showCatalog(ctx) {
    const userpage = ctx.pathname == '/my-posts';
    let posts = [];

    if (userpage) {
        const userId = ctx.user._id;
        posts = await getMyOwn(userId);
    } else {
        posts = await getAll();
    }

    ctx.render(catalogTemplate(posts, userpage)); 
}