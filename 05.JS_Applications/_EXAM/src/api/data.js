import { post, get, del, put } from "./api.js";

export async function getAll() {
    return get('/data/albums?sortBy=_createdOn%20desc'); // get all for catalog view
}

export async function getById(id) {
    return get('/data/albums/' + id); // get by id for details view
}

export async function deleteById(id) {
    return del('/data/albums/' + id); // CRUD delete operation
}

export async function create(body) {
    return post('/data/albums', body); // CRUD create operation
}

export async function edit(id, body) {
    return put('/data/albums/' + id, body) // CRUD update
}