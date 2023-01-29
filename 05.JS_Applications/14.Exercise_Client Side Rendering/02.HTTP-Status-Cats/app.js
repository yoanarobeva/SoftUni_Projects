import { cats } from './catSeeder.js'
import { html, render } from './node_modules/lit-html/lit-html.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js'

const root = document.getElementById('allCats');

const catCard = (cats) => html`
<ul>
    ${cats.map(cat => html`
    <li>
        <img src='./images/${cat.imageLocation}.jpg' width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">${cat.clicked ? 'Hide' : 'Show'} status code</button>
            <div class="status" style=${styleMap(cat.clicked ? {display: 'block'} : {display: 'none'})} id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li> `)} 
</ul>`

cats.map(c => c.clicked = false)

root.addEventListener('click', toggle);

update();

function update() {
    render(catCard(cats), root);
}


function toggle(ev) {
    if (ev.target.tagName == 'BUTTON') {
        ev.preventDefault();
        let id = ev.target.parentElement.querySelector('div').id;
        let cat = cats.find(c => c.id == id);
        cat.clicked = !cat.clicked;
        update();
    }
}