import { post, get, del, put } from "./api.js";

export async function getAll() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name'); // get all for catalog view
}

// IF MY CATALOG
/*
export async function getMyOwn(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);  // MY CATALOG IF NEEDED, change URI
}
*/

export async function getById(id) {
    return get('/data/albums/' + id); // get by id for details view, change URI
}

export async function deleteById(id) {
    return del('/data/albums/' + id); // CRUD delete operation, change URI
}

export async function create(body) {
    return post('/data/albums', body); // CRUD create operation, changeURI
}

export async function edit(id, body) {
    return put('/data/albums/' + id, body) // CRUD update, changeURI
}

// SEARCH
export async function searchData(query) {
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}
