import { post, get, del, put } from "./api.js";

export async function getAll() {
    return get('/data/memes?sortBy=_createdOn%20desc'); // get all for catalog view
}


export async function getMyOwn(userId) {
    return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);  // MY CATALOG IF NEEDED, change URI
}

export async function getById(id) {
    return get('/data/memes/' + id); // get by id for details view, 
}

export async function deleteById(id) {
    return del('/data/memes/' + id); // CRUD delete operation, 
}

export async function create(body) {
    return post('/data/memes', body); // CRUD create operation, 
}

export async function edit(id, body) {
    return put('/data/memes/' + id, body) // CRUD update, 
}

// SEARCH
/*
export async function searchData(query) {
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}
*/