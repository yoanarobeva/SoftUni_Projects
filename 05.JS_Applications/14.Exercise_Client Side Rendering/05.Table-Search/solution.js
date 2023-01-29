import {html, render} from './node_modules/lit-html/lit-html.js'

const inputField = document.getElementById('searchField');
const url = 'http://localhost:3030/jsonstore/advanced/table';
const root = document.querySelector('tbody');

const template = (x) => html`
<tr id=${x._id}>
      <td>${x.firstName} ${x.lastName}</td>
      <td>${x.email}</td>
      <td>${x.course}</td>
</tr>
`

async function update() {
   const data = await getData();
   render(data.map(x => template(x)), root);
}

update();

document.querySelector('#searchBtn').addEventListener('click', onClick);

async function onClick(ev) {
   ev.preventDefault();

   let idS = []
   let input = inputField.value;
   inputField.value = '';
   if (input !== '') {
      const data = await getData();
      
      Object.values(data).forEach(x => document.getElementById(x._id).classList.remove('select'));
      
      data.forEach(x => {
         let current = Object.values(x);
         current.forEach(x => {
            if (x.includes(input)) {
               idS.push(current[4])
            }
         })
      });

      idS.forEach(x => document.getElementById(x).classList.add('select'));
   }
}

async function getData() {
   const response = await fetch(url);
   const data = await response.json();
   return Object.values(data);
}