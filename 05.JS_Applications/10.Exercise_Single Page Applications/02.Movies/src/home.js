import { get } from "./api.js";

const section = document.getElementById('home-page');
section.remove();


let ctx = null;

export async function showHomeView(inCtx) { 
    ctx = inCtx;
    const movies = await getAllMovies();
    ctx.render(section);
    displayMovie(movies);

    const addMovieBtn = document.getElementById('addbtn');
    addMovieBtn.addEventListener('click', addMovie);

    const detailsBtns = document.querySelectorAll('.card-footer');
    [...detailsBtns].forEach(x => x.addEventListener('click', details));
}

function addMovie(ev) {
    ev.preventDefault();
    ctx.goto('addMovie-link');
}

function details (ev) {
    ev.preventDefault();
    const id = ev.target.dataset.id;
    ctx.goto('details-link', id);
}

function displayMovie(movies) {
    const cards = movies.map(createMoviePreview);

    const fragment = document.createDocumentFragment();

    for (let item of cards) {
        fragment.appendChild(item);
    }
    const movieList = document.getElementById('movies-list');
    movieList.replaceChildren(fragment);
}

function createMoviePreview(movie) {
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    const element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="javascript:void(0)">
            <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>`;
    li.appendChild(element)
    return li;
}

async function getAllMovies() {
    const movies = await get('/data/movies');
    return movies;
}

