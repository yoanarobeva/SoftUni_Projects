import { allMembers, getAll} from '../data/data.js';
import { html, until, nothing } from '../lib.js'
import { getUserData, loadMembers } from '../util.js';

const catalogTemplate = (itemPromise, user) => html`
<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>

    ${user ? html`
    <article class="layout narrow">
        <div class="pad-small"><a href="#" class="action cta">Create Team</a></div>
    </article>` : nothing}

    ${until(itemPromise, html`<p>Loading &hellip;</p>`)}
</section>`;

const itemTemplate = (item, count) => html`
<article class="layout">
    <img src=${item.logoUrl} class="team-logo left-col">
    <div class="tm-preview">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <span class="details">${until(count, html`<p>Loading &hellip;</p>`)} Members</span>
        <div><a href=${(`/details/${item._id}`)} class="action">See details</a></div>
    </div>
</article>`;

export function catalogPage(ctx) {
    ctx.render(catalogTemplate(loadItems(), ctx.user))
}

async function loadItems() {
    const items = await getAll();
    const members = await loadMembers();
    return items.map(x => itemTemplate(x, members[x._id]))
}

