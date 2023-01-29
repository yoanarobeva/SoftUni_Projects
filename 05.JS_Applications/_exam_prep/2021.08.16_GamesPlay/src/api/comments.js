import { get, post } from './api.js'

export async function getAllComments(gameId) {
    return get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}

export async function newComment(body) {
    return post('/data/comments', body);
}