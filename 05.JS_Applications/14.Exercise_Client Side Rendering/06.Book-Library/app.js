import {html, render} from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/collections/books'
const root = document.querySelector('body');
let isAdd = true;

const template = (data) => html`
<button @click=${update} id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
${addOrEditFormTemplate()}
`

const allBooksTemplate = ([id, book]) => html`
<tr id=${id}>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button @click=${onEdit}>Edit</button>
        <button @click=${onDelete}>Delete</button>
    </td>
</tr>
`

const addOrEditFormTemplate = () => html`
${isAdd ? html`    
<form @submit=${onSubmit} id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`
: html`
<form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input id="titleField" type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input id="authorField" type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>`}`

render(template(), root);

async function update(ev) {
    if (ev) {
        ev.preventDefault();
    }

    const data = Object.values(await getData());
    const rootBooks = document.querySelector('tbody');
    render(template(), root);
    render(data.map(x => allBooksTemplate(x)), rootBooks);
}

async function onSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const title = formData.get('title').trim();
    const author = formData.get('author').trim();

    if (title !== '' && author !== '') {
        const res = await addData({ title, author });
        ev.target.reset();
    }
}

async function onEdit(ev) {
    ev.preventDefault();
    isAdd = false;
    await update();
    const id = ev.target.parentElement.parentElement.id;
    const data = await getDataForElement(id);

    document.getElementById('titleField').value = data.title;
    document.getElementById('authorField').value = data.author;

    const form = document.querySelector('form').addEventListener('submit', (e) => onEditSubmit(e, id))
}

async function onEditSubmit(ev, id) {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const title = formData.get('title');
    const author = formData.get('author');

    if (title !== '' && author !== '') {
        const res = await updateData({ title, author }, id);
    }
    ev.target.reset();
}

async function onDelete(ev) {
    ev.preventDefault();
    const id =  ev.target.parentElement.parentElement.id;
    await deleteData(id);
}

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return Object.entries(data);
}

async function getDataForElement(id) {
    const response = await fetch(url + `/${id}`);
    const data = await response.json();
    return data;
}

async function addData(body) {
    const response = fetch(url, {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
    })
    return response;
}

async function updateData(body, id) {
    const response = fetch(url + `/${id}`, {
        method: 'put',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
    })
    return response;
}

async function deleteData(id) {
    const response = fetch(url + `/${id}`, {
        method: 'delete'
    })
    return response;
}