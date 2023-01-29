import { getMyOwn } from '../api/data.js';
import {html} from '../lib.js';

const profileTemplate = (userMemes, userData) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${userMemes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${userMemes.length !== 0 ? userMemes.map(cardTemplate) : html`<p class="no-memes">No memes in database.</p>`}
    </div>
</section>`

const cardTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/catalog/${meme._id}">Details</a>
</div>`;

export async function showMyProfile(ctx) {
    const id = ctx.user._id
    const userMemes = await getMyOwn(id)
    ctx.render(profileTemplate(userMemes, ctx.user));
}