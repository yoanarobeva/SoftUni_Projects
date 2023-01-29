import {html, render} from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('menu');
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'

const form = document.querySelector('form');

form.addEventListener('submit', addItem)

const dropDownTemplate = (data) => html`
${data.map(x => html`
<option value=${x._id}>${x.text}</option>`
)}`

update();

async function update() {
    const dropDownData = await getData();
    render(dropDownTemplate(dropDownData), root);
}


function addItem(e) {
    e.preventDefault();

    const textField = document.getElementById('itemText');
    const text = textField.value;

    if (text !== '') {
        sendData({'text': text});
        update();
        textField.value = ''
    }
}

async function getData() {
    const response = await fetch(url)
    const data = await response.json();
    return Object.values(data);
}

async function sendData(body) {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

