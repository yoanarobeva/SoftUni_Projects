import { get } from "./api.js";

const noUser = document.getElementById('noUser');
noUser.remove()

const section = document.getElementById('dashboard-holder');
section.remove();

let ctx = null;

export async function showDasboardView(inCtx) {
    ctx = inCtx;
    displayIdeas();
    if (await getIdeas()) {
        ctx.render(section);
    } else {
        ctx.render(noUser)
    }
}

async function displayIdeas() {
    const data = await getIdeas();
    const cards = data.map(createIdea);
    section.replaceChildren(...cards)

    Array.from(section.querySelectorAll('.btn')).forEach(x => x.addEventListener('click', (ev) => loadDetails(ev, x.id)));
}

function loadDetails(ev, id) {
    console.log(ev.target);
    ev.preventDefault();
    ctx.goto('details-link', id);
}

function createIdea({_id, title, img}) {
    let div = document.createElement('div');
    div.classList.add('card', 'overflow-hidden', 'current-card', 'details');
    div.style.width = '20rem';
    div.style.height = '18rem';
    
    let divNested = document.createElement('div');
    divNested.classList.add('card-body');
    divNested.innerHTML = `<p class="card-text">${title}</p>`
    div.appendChild(divNested);

    let imgEl = document.createElement('img');
    imgEl.classList.add('card-image');
    imgEl.src = img;
    imgEl.alt = 'Card image cap';
    div.appendChild(imgEl);

    let a = document.createElement('a');
    a.classList.add('btn');
    a.id = _id
    a.href = '';
    a.textContent = 'Details';
    div.appendChild(a);

    return div;
}

async function getIdeas() {
    const ideas = await get(`/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`)
    return ideas;
}
