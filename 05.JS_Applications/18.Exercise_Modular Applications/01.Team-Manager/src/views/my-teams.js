import { getMyTeams } from "../data/data.js";
import { html, until } from "../lib.js";

const myTeamsTemplate = (itemPromise, hasUser) => html`
<section id="my-teams">

    <article class="pad-med">
        <h1>My Teams</h1>
    </article>

    <article class="layout narrow">
        <div class="pad-med">
            <p>You are not a member of any team yet.</p>
            <p><a href="#">Browse all teams</a> to join one, or use the button bellow to cerate your own
                team.</p>
        </div>
        <div class=""><a href="#" class="action cta">Create Team</a></div>
    </article>

    ${until(itemPromise, html`<p>Loading &hellip;</p>`)}

</section>`;

const itemTemplate = (item) => html`
<article class="layout">
    <img src=${item.logoUrl} class="team-logo left-col">
    <div class="tm-preview">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <span class="details">${item.memberCount} Members</span>
        <div><a href=${(`/details/${item._id}`)} class="action">See details</a></div>
    </div>
</article>`;

export function myTeamsPage(ctx) {
    ctx.render(myTeamsTemplate(loadItems(), ctx.user))
}

async function loadItems() {
    const teams = await getMyTeams();
    return teams.map(itemTemplate)
}

