import { del, get, post, put } from "./api.js";

const section = document.getElementById('movie-example');
section.remove();

let ctx = null;

export function showMovieExampleView(inCtx, id) {
    ctx = inCtx;
    displayMovie(id)
    ctx.render(section);
}

async function displayMovie(id) {
    const user = sessionStorage.getItem('userId');

    const [movie, likes, ownLike] = await Promise.all([
        getMovie(id),
        getLikes(id),
        getOwnLike(id, user)
    ]);

    let fragment = document.createDocumentFragment();
    fragment.replaceChildren(createMovieCard(movie, user, likes, ownLike));

    const deleteBtn = fragment.querySelector('.btn-danger');
    const editBtn = fragment.querySelector('.btn-warning');
    const likeBtn = fragment.querySelector('.btn-primary');

    if (user) {
        let isOwner = false;
        if (user === movie._ownerId) {
            isOwner = true;
        }
        
        if (isOwner) {
            deleteBtn.style.display = 'inline';
            editBtn.style.display = 'inline';
            likeBtn.style.display = 'none'
        } else if (!isOwner) {
            deleteBtn.style.display = 'none';
            editBtn.style.display = 'none';

            if (!ownLike) {
                likeBtn.style.display = 'inline';
            } else if (ownLike) {
                likeBtn.style.display = 'none';
            }
        }
    } else {
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
        likeBtn.style.display = 'none'
    }

    deleteBtn.addEventListener('click', (e) => onDelete(e, movie._id));
    editBtn.addEventListener('click', (e) => onEdit(e, movie._id));
    likeBtn.addEventListener('click', (e) => onLike(e, movie._id));

    section.replaceChildren(fragment);
}

function onEdit(e , movieId) {
    e.preventDefault();
    ctx.goto('edit-link',movieId, getMovie);
}

function onDelete(e , movieId) {
    e.preventDefault();
    deleteMovie(movieId);
    ctx.goto('home-link');
}

async function onLike(e , movieId) {
    e.preventDefault();
    try {
        await likeMovie(movieId);
        ctx.goto('details-link', movieId);
    } catch (error) {
        alert(error.message);
    }
}

function createMovieCard(movie, user, likes, ownLike) {
    const element = document.createElement('div');
    element.className = 'container';
    element.innerHTML = `
    <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>
        <div class="col-md-8">
            <img class="img-thumbnail" src="${movie.img}" alt="Movie">
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>${movie.description}</p>
            <a class="btn btn-danger user author" href="#">Delete</a>
            <a class="btn btn-warning user author" href="#">Edit</a>
            <a class="btn btn-primary user" href="#">Like</a>
            <span class="enrolled-span">Liked ${likes}</span>
        </div>
    </div>`;

    return element;
}

async function getMovie(id) {
    const movie = await get(`/data/movies/${id}`);
    return movie;
}

async function getLikes(id) {
    const likes = await get(`/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    return likes;
}

async function getOwnLike(movieId, user) {
    if (!user) {
        return false;
    } else {
        const userId = user;
        const like = await get(`/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`)

        return like.length > 0;
    }
}

async function likeMovie(movieId) {
    const response = await post(`/data/likes`, {movieId});
    return response;
}

async function deleteMovie(movieId) {
    const res = await del(`/data/movies/${movieId}`);
    return res;
}