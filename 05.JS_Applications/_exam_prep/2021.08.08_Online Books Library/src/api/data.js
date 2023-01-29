import { post, get, del, put } from "./api.js";

export async function getAll() {
    return get('/data/books?sortBy=_createdOn%20desc'); // get all for catalog view
}

// IF MY CATALOG

export async function getMyOwn(userId) {
    return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);  // MY CATALOG IF NEEDED
}

export async function getById(id) {
    return get('/data/books/' + id); // get by id for details view,
}

export async function deleteById(id) {
    return del('/data/books/' + id); // CRUD delete operation, 
}

export async function create(body) {
    return post('/data/books', body); // CRUD create operation, 
}

export async function edit(id, body) {
    return put('/data/books/' + id, body) // CRUD update, 
}
