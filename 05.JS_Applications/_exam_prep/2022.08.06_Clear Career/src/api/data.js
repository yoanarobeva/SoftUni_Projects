import { post, get, del, put } from "./api.js";

export async function getAll() {
    return get('/data/offers?sortBy=_createdOn%20desc'); // get all for catalog view
}

export async function getById(id) {
    return get('/data/offers/' + id); // get by id for details view
}

export async function deleteById(id) {
    return del('/data/offers/' + id); // CRUD delete operation
}

export async function create(body) {
    return post('/data/offers', body); // CRUD create operation
}

export async function edit(id, body) {
    return put('/data/offers/' + id, body) // CRUD update
}

// SEARCH
/*
export async function searchData(query) {
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}
*/