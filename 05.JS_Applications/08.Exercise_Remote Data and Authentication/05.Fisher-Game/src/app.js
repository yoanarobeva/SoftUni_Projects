//MODE Selectors:
const guestModeDiv = document.getElementById('guest');
const userModeDiv = document.getElementById('user');

//TAB Activation:
const homeTab = document.getElementById('home');
const logoutTab = document.getElementById('logout');
const loginTab = document.getElementById('login');
const registerTab = document.getElementById('register');

homeTab.classList.add('active');
logoutTab.classList.remove('active');
loginTab.classList.remove('active');
registerTab.classList.remove('active');

//CODE:
const welcome = document.querySelector('.email span');
const form = document.getElementById('addForm');

window.addEventListener('DOMContentLoaded', onLoadHtml);

function onLoadHtml() {
    const addBtn = document.querySelector('.add');
    let token;
    if (sessionStorage.getItem('userData')) {
        token = JSON.parse(sessionStorage.getItem('userData')).accessToken;
    }
    //MODE set:
    if (token) {
        userModeDiv.style.display = 'inline-block';
        guestModeDiv.style.display = 'none';
        addBtn.disabled = false;
        welcome.textContent = JSON.parse(sessionStorage.getItem('userData')).email
    } else {
        userModeDiv.style.display = 'none';
        guestModeDiv.style.display = 'inline-block';
        addBtn.disabled = true;
        welcome.textContent = 'guest'
    }

    const url = 'http://localhost:3030/data/catches';
    const fields = document.querySelector('#catches');
    const loadBtn = document.querySelector('.load');
    fields.innerHTML = '';

    loadBtn.addEventListener('click', onLoadBtn);

    async function onLoadBtn(ev) {
        document.getElementById('catches').innerHTML = ''

        const response = await fetch(url);
        const data = await response.json();

        data.forEach(x => {
            let divContainer = document.createElement('div');
            divContainer.classList.add('catch');
            fields.appendChild(divContainer);
            
            divContainer.innerHTML = `<label>Angler</label>
                                    <input type="text" class="angler" value=${x.angler}>
                                    <label>Weight</label>
                                    <input type="text" class="weight" value=${x.weight}>
                                    <label>Species</label>
                                    <input type="text" class="species" value=${x.species}>
                                    <label>Location</label>
                                    <input type="text" class="location" value=${x.location}>
                                    <label>Bait</label>
                                    <input type="text" class="bait" value=${x.bait}>
                                    <label>Capture Time</label>
                                    <input type="number" class="captureTime" value=${x.captureTime}>`

            const updateBtn = document.createElement('button');
            updateBtn.classList.add('update');
            updateBtn.setAttribute('data-id', x._id);
            updateBtn.setAttribute('id', x._ownerId);
            updateBtn.textContent = 'Update'
            divContainer.appendChild(updateBtn);
            updateBtn.addEventListener('click', onUpdate);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.setAttribute('data-id', x._id);
            deleteBtn.setAttribute('id', x._ownerId);
            deleteBtn.textContent = 'Delete'
            divContainer.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', onDelete);
            if (!token || x._ownerId !== JSON.parse(sessionStorage.getItem('userData')).id) {
                updateBtn.disabled = true;
                deleteBtn.disabled = true;
            }
        });
    }

    async function onUpdate(ev) {
        let id = ev.target.getAttribute('data-id');
        const updateUrl = url + `/${id}`;

        let inputs = Array.from(ev.target.parentNode.querySelectorAll('input'));
        inputs = inputs.map(x => x.value);
        let [angler, weight, species, location, bait, captureTime] = inputs;
        let body = {angler, weight, species, location, bait, captureTime};

        const response = await fetch(updateUrl, {
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': token,
            },
            body: JSON.stringify(body)
        })
        loadBtn.click();
    }

    function onDelete(ev) {
        let id = ev.target.getAttribute('data-id');
        ev.target.parentNode.remove();
        
        const delUrl = url + `/${id}`;
        fetch(delUrl, {method: 'delete', headers: {'X-Authorization': token}});
        loadBtn.click();
    }

    form.addEventListener('submit', onAdd)

    async function onAdd(ev) {
        ev.preventDefault();

        const dataForm = Object.fromEntries(new FormData(form));
        let {angler, weight, species, location, bait, captureTime} = dataForm;
        let body = { angler, weight, species, location, bait, captureTime };

        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': token,
            },
            body: JSON.stringify(body)
        })

        form.reset()
        loadBtn.click();
    }
}

logoutTab.addEventListener('click', onLogout);

async function onLogout() {
    const token = JSON.parse(sessionStorage.getItem('userData')).accessToken;
    const url = 'http://localhost:3030/users/logout';

    const response = await fetch(url, {
        method: 'get',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        }
    })

    sessionStorage.removeItem('userData');
    onLoadHtml()
}

