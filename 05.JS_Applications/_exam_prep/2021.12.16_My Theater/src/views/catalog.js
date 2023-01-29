import { getAll } from '../api/data.js';  // ADD getMyOwn IF MY CATALOG
import { html } from '../lib.js'

//userpage IF MY CATALOG
const catalogTemplate = (events, userpage) => html`
<section class="welcomePage">
    <div id="welcomeMessage">
        <h1>My Theater</h1>
        <p>Since 1962 World Theatre Day has been celebrated by ITI Centres, ITI Cooperating Members, theatre
            professionals, theatre organizations, theatre universities and theatre lovers all over the world on
            the 27th of March. This day is a celebration for those who can see the value and importance of the
            art
            form “theatre”, and acts as a wake-up-call for governments, politicians and institutions which have
            not
            yet recognised its value to the people and to the individual and have not yet realised its potential
            for
            economic growth.</p>
    </div>
    <div id="events">
        <h1>Future Events</h1>
        <div class="theaters-container">
            ${events.length !== 0 ? events.map(cardTemplate) : html`<h4 class="no-event">No Events Yet...</h4>`}
        </div>
    </div>
</section>`;

const cardTemplate = (event) => html`
<div class="eventsInfo">
    <div class="home-image">
        <img src=${event.imageUrl}>
    </div>
    <div class="info">
        <h4 class="title">${event.title}</h4>
        <h6 class="date">${event.date}</h6>
        <h6 class="author">${event.author}</h6>
        <div class="info-buttons">
            <a class="btn-details" href="/catalog/${event._id}">Details</a>
        </div>
    </div>
</div>`;

export async function showCatalog(ctx) {
    const events = await getAll();
    ctx.render(catalogTemplate(events)); 
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