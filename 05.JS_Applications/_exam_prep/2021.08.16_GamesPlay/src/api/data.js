import { post, get, del, put } from "./api.js";

export async function getAll() {
    return get('/data/games?sortBy=_createdOn%20desc'); // get all for catalog view
}


export async function getLatest() {
    return get(`/data/games?sortBy=_createdOn%20desc&distinct=category`);
}

export async function getById(id) {
    return get('/data/games/' + id); // get by id for details view, 
}

export async function deleteById(id) {
    return del('/data/games/' + id); // CRUD delete operation, 
}

export async function create(body) {
    return post('/data/games', body); // CRUD create operation,
}

export async function edit(id, body) {
    return put('/data/games/' + id, body) // CRUD update, 
}
