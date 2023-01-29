import { post, get, del, put } from "./api.js";

export async function getAll() {
    return get('/data/theaters?sortBy=_createdOn%20desc&distinct=title'); // get all for catalog view
}

export async function getMyOwn(userId) {
    return get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);  // MY CATALOG IF NEEDED,
}

export async function getById(id) {
    return get('/data/theaters/' + id); // get by id for details view, 
}

export async function deleteById(id) {
    return del('/data/theaters/' + id); // CRUD delete operation,
}

export async function create(body) {
    return post('/data/theaters', body); // CRUD create operation, 
}

export async function edit(id, body) {
    return put('/data/theaters/' + id, body) // CRUD update, 
}

// SEARCH
/*
export async function searchData(query) {
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}
*/