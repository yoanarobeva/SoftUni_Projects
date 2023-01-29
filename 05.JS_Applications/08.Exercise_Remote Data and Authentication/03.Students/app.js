window.addEventListener('load', onLoad);

const formElement = document.getElementById('form');
const url = 'http://localhost:3030/jsonstore/collections/students';
const table = document.querySelector('#results tbody');

formElement.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const data = new FormData(formElement);

    let firstName = data.get('firstName');
    let lastName = data.get('lastName');
    let facultyNumber = data.get('facultyNumber');
    let grade = data.get('grade');

    if (firstName === '' || lastName === '' || facultyNumber === '' || grade === '' || isNaN(Number(grade))) {
        alert('Enter valid data!');
        return false;
    }

    formElement.reset()
    let student = { firstName, lastName, facultyNumber, grade };

    await fetch(url, {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(student),
    })

    onLoad();
})

async function onLoad() {
    table.innerHTML = ''
    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(x => {
        let row = document.createElement('tr');
        table.appendChild(row);

        let values = Object.values(x);
        values.pop();

        values.forEach(el => {
            let th = document.createElement('td');
            th.textContent = el;
            row.appendChild(th);
        })
    })
}