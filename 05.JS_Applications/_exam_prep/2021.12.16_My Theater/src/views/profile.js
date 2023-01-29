import { getMyOwn } from '../api/data.js';
import { html } from '../lib.js'

const profileTemplate = (events, user) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${user.email}</h2>
    </div>
    <div class="board">
        ${events.length !== 0 ? events.map(cardTemplate) 
        : html`
            <div class="no-events">
                <p>This user has no events yet!</p>
            </div>
        `}  
    </div>
</section>`;

const cardTemplate = (event) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src=${event.imageUrl}>
        <h2>${event.title}</h2>
        <h6>${event.date}</h6>
        <a href="/catalog/${event._id}" class="details-button">Details</a>
    </div>
</div>`;

export async function showProfile(ctx) {
    const user = ctx.user;
    const events = await getMyOwn(user._id);
    ctx.render(profileTemplate(events, user)); 
}