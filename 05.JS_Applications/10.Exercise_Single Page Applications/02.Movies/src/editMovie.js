import { put } from "./api.js";
import { createSubmitHandler } from "./util.js";

createSubmitHandler('editMovieForm', submitEditedMovie);
let inMovieData = null;
let movieId = null;

const section = document.getElementById('edit-movie');
let fragment = document.createDocumentFragment();
fragment.replaceChildren(section);

let ctx = null;

export async function showEditMovieView(inCtx, inMovieId, getMovie) {
    ctx = inCtx;
    movieId = inMovieId;
    inMovieData = await getMovie(movieId);
    editMovieDisplay(inMovieData);

    ctx.render(fragment);
}

function editMovieDisplay(inMovieData) {
    fragment.getElementById('title').value = inMovieData.title;
    fragment.getElementById('descriptionField').textContent = inMovieData.description;
    fragment.getElementById('imageUrl').value = inMovieData.img;
}

async function submitEditedMovie({title, description, img}, ev) {
    if (title !== '' && description !== '' && img !== '') {
        const editedMovie = await put(`/data/movies/${movieId}`, {title, description, img});
        ctx.goto('details-link', movieId);
    } else {
        alert('Fill all fields!')
    }
}

