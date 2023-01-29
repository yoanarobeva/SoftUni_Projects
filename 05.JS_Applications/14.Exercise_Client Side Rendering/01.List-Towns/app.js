import {html, render} from './node_modules/lit-html/lit-html.js'

let towns = [];

const form = document.querySelector('form')
form.addEventListener('submit', onSubmit);

const root = document.getElementById('root');

const listTemplate = (data) =>html`
<ul>
    ${data.map(e => html`
    <li>${e}</li>`)}
</ul>`

function onSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(form);
    towns = formData.get('towns');
    if (towns !== '') {
        towns = towns.split(', ');

        render(listTemplate(towns), root);
        form.reset;
    }
}

