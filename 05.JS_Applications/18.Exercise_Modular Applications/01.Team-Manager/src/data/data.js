import { getUserData } from '../util.js';
import * as api from './api.js';

export async function allMembers() {
    return api.get('/data/members?where=status%3D%22member%22');
}

export async function getAll() {
    const teams = await api.get('/data/teams');
    const members = await getMembers(teams.map(t => t._id));
    teams.forEach(t => t.memberCount = members.filter(m => m.teamId == t._id).length);
    return teams;
}

export async function getMyTeams() {
    const userId = getUserData()._id;
    const teamMembership = await api.get(`/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`)
    const teams = teamMembership.map(r => r.team);
    const members = await getMembers(teams.map(t => t._id));
    teams.forEach(t => t.memberCount = members.filter(m => m.teamId == t._id).length);
    return teams;
}

export async function getDetails(id) {
    return await api.get('/data/teams/' + id);
}

export async function createTeam(team) {
    const result = await api.post('/data/teams', team);
    const request = await requestToJoin(result._id);
    await approveMembership(request);

    return result;
}

export async function editTeam(id, team) {
    return await api.put('/data/teams/' + id, team);
}

export async function deleteTeam(id) {
    return await api.del('/data/teams/' + id);
}

export async function requestToJoin(teamId) {
    const body = { teamId };
    return await api.post('/data/members', body);
}


// Members Collection

export async function getDetailsMembers(teamId) {
    return await api.get(`/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`);
}

export async function getMembers(teamIds) {
    const query = encodeURIComponent(`teamId IN ("${teamIds.join('", "')}") AND status="member"`);
    return await api.get(`/data/members?where=${query}`);
}

export async function cancelMembership(memberId) {
    return await api.del('/data/members/' + memberId);
}

export async function approveMembership(member) {
    const body = {
        teamId: member.teamId,
        status: 'member'
    };
    return await api.put('/data/members/' + member._id, body);
}


//firstTeam id: 34a1cab1-81f1-47e5-aec3-ab6c9810efe1, ownerId: "35c62d76-8152-4626-8712-eeb96381bea8" /Peter/
/*
[
    { 
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8", 
        "teamId": "34a1cab1-81f1-47e5-aec3-ab6c9810efe1", 
        "status": "member", "_createdOn": 1616236790262, 
        "_updatedOn": 1616236792930, 
        "_id": "cc9b0a0f-655d-45d7-9857-0a61c6bb2c4d", 
        "user": 
        { 
            "email": "peter@abv.bg", 
            "username": "Peter", 
            "_id": "35c62d76-8152-4626-8712-eeb96381bea8" 
        } 
    }, 
    { 
        "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc", 
        "teamId": "34a1cab1-81f1-47e5-aec3-ab6c9810efe1", 
        "status": "member", "_createdOn": 1616237272948, 
        "_updatedOn": 1616237293676, 
        "_id": "e797fa57-bf0a-4749-8028-72dba715e5f8", 
        "user": 
        { 
            "email": "admin@abv.bg", 
            "username": "Admin", 
            "_id": "60f0cf0b-34b0-4abd-9769-8c42f830dffc" 
        } 
    }
]
*/

//secondTeam id: dc888b1a-400f-47f3-9619-07607966feb8, ownerId: "847ec027-f659-4086-8032-5173e2f9c93a" /George/

/*
[
    { 
        "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a", 
        "teamId": "dc888b1a-400f-47f3-9619-07607966feb8", 
        "status": "member", 
        "_createdOn": 1616237188183, 
        "_updatedOn": 1616237189016, 
        "_id": "61a19986-3b86-4347-8ca4-8c074ed87591", 
        "user": 
        { 
            "email": "george@abv.bg", 
            "username": "George", 
            "_id": "847ec027-f659-4086-8032-5173e2f9c93a" 
        } 
    }, 
    { 
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8", 
        "teamId": "dc888b1a-400f-47f3-9619-07607966feb8", 
        "status": "member", 
        "_createdOn": 1616237231299, 
        "_updatedOn": 1616237235713, 
        "_id": "9be3ac7d-2c6e-4d74-b187-04105ab7e3d6", 
        "user": 
        { 
            "email": "peter@abv.bg", 
            "username": "Peter", 
            "_id": "35c62d76-8152-4626-8712-eeb96381bea8" 
        } 
    }, 
    { 
        "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc", 
        "teamId": "dc888b1a-400f-47f3-9619-07607966feb8", 
        "status": "member", 
        "_createdOn": 1616237257265, 
        "_updatedOn": 1616237278248, 
        "_id": "280b4a1a-d0f3-4639-aa54-6d9158365152", 
        "user": 
        { 
            "email": "admin@abv.bg", 
            "username": "Admin", 
            "_id": "60f0cf0b-34b0-4abd-9769-8c42f830dffc" 
        } 
    }
]
*/