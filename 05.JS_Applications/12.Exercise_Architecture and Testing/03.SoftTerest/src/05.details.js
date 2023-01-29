import { del, get } from "./api.js";

const section = document.getElementById('detailsPage');
section.remove();

let ctx = null;

let ideaId = null;
let userId = localStorage.getItem('userId');
let ownerId = null;


export async function showDetailsView(inCtx, ideaIdIN) {
    ctx = inCtx;
    ideaId = ideaIdIN;
    userId = localStorage.getItem('userId')

    section.replaceChildren(await displayDetails());
    
    let delBtn = section.querySelector('#deleteBtn')
    let delBtnContainer = delBtn.parentElement;
    delBtnContainer.remove();

    if (userId === ownerId) {
        section.appendChild(delBtnContainer);
        delBtn.addEventListener('click', onDelete);
    } 
    ctx.render(section);
}

function onDelete(ev) {
    ev.preventDefault();
    
    deleteIdea();
    ctx.goto('dashboard-link');
}

async function displayDetails() {
    const idea = await getDetails();
    let rendered = createDetails(idea);

   return rendered;
}

function createDetails({ title, description, img, _ownerId }) {
    ownerId = _ownerId;
    let div = document.createElement('div');
    div.setAttribute = ('id', _ownerId);
    div.innerHTML = `
    <img class="det-img" src=${img} />
        <div class="desc">
            <h2 class="display-5">${title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${description}</p>
        </div>
        <div class="text-center">
            <a id="deleteBtn" class="btn detb" href="">Delete</a>
        </div>`

    return div;
}

async function getDetails() {
    const idea = await get(`/data/ideas/${ideaId}`);
    return idea;
}

async function deleteIdea() {
    const res = await del(`/data/ideas/${ideaId}`);
    return res;
}