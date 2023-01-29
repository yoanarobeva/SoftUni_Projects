const url = 'http://localhost:3030/jsonstore/collections/books';
let editUrl;

const table = document.querySelector('tbody')

const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', onLoad);

const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
    if (document.querySelector('form h3').textContent === 'FORM') {
        onSubmit(ev);
    } else {
        onEditSubmit(ev);
    }
})

async function onSubmit(ev) {
    ev.preventDefault();
    document.querySelector('form h3').textContent = 'FORM';

    const formData = new FormData(form);

    let author = formData.get('author');
    let title = formData.get('title')

    if (author !== '' && title !== '') {
        data = {
            'author': author,
            'title': title
        }

        await fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        })

        form.reset();
    }
};

async function onLoad() {
    table.innerHTML = '';

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(x => {
        let title = x.title;
        let author = x.author;
        let id;

        Object.keys(data).forEach(y => {
            if (data[y] === x) {
                id = y;
            }
        })

        let tr = document.createElement('tr');
        table.appendChild(tr);

        let tdTitle = document.createElement('td');
        tdTitle.textContent = title;
        tr.appendChild(tdTitle);

        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = author;
        tr.appendChild(tdAuthor);

        let tdBtn = document.createElement('td');
        tr.appendChild(tdBtn);

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        tdBtn.appendChild(editBtn);
        editBtn.addEventListener('click', (ev) => onEdit(title, author, id));

        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        tdBtn.appendChild(delBtn);
        delBtn.addEventListener('click', (ev) => onDelete(id, tr));
    })
}

function onEdit(_title, _author, _id) {
    document.querySelector('form h3').textContent = 'Edit FORM'

    form.querySelectorAll('input')[0].value = _title;
    form.querySelectorAll('input')[1].value = _author;
    
    editUrl = url + `/${_id}`
}

async function onEditSubmit(ev) {
    ev.preventDefault();
    const newformData = new FormData(form);

    let newAuthor = newformData.get('author');
    let newTitle = newformData.get('title');

    if (newAuthor !== '' && newTitle !== '') {
        data = {
            'author': newAuthor,
            'title': newTitle
        }

        await fetch(editUrl, {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        })

        form.reset();
    }
}

function onDelete(_id, _tr) {
    _tr.remove();

    let deleteUrl = url + `/${_id}`;
    fetch(deleteUrl, {
        method: 'delete'
    })
}