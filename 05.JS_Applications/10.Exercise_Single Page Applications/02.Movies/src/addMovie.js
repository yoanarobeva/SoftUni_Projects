import { post } from "./api.js";
import { createSubmitHandler } from "./util.js";


createSubmitHandler('add-movie-form', onAddMovie);

const section = document.getElementById('add-movie');
section.remove();

let ctx = null;

export function showAddMovieView(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onAddMovie({ title, description, img }, ev) {
    try {
        if (title !== '' && description !== '' && img !== '') {
            const newMovie = await post('/data/movies', { title, description, img });
            ctx.goto('home-link');
        } else {
            alert('Fill all fields!')
        } 
    } catch (error) {
        alert(error.message);
    }
}