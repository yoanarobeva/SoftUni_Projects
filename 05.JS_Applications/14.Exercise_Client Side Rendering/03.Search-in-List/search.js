import { towns } from './towns.js';
import { render, html, nothing } from './node_modules/lit-html/lit-html.js'
import { classMap } from './node_modules/lit-html/directives/class-map.js'

const searchBtn = document.querySelector('button');
const root = document.getElementById('towns');

const resultField = document.getElementById('result');

const searchTemplate = (towns, wantedTown) => html`
<ul>
   ${towns.map(t => html`<li class=${t.includes(wantedTown) ? classMap({active: true}) : nothing}>${t}</li>`)}   
</ul>`

render(searchTemplate(towns), root);

searchBtn.addEventListener('click', search);

function search(ev) {
   ev.preventDefault();
   let counter = 0;
   const wantedTown = document.getElementById('searchText');

   towns.forEach(x => {
      if (x.includes(wantedTown.value)) {
         counter++;
      }
   });

   render(searchTemplate(towns, wantedTown.value, counter), root);

   resultField.textContent = `${counter} matches found`;
   wantedTown.value = '';
}
