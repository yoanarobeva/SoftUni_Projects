function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const ulPhones = document.getElementById('phonebook');
    const createBtn = document.getElementById('btnCreate');

    const personField = document.getElementById('person');
    const phoneField = document.getElementById('phone');

    const url = 'http://localhost:3030/jsonstore/phonebook';

    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate)

    async function onLoad() {
        ulPhones.innerHTML = '';
        const response = await fetch(url);
        const data = await response.json();

        let contactsArr = Object.values(data);

        contactsArr.forEach(x => {
            let id = x._id;
            let li = document.createElement('li');
            li.textContent = (`${x.person}: ${x.phone}`);
            ulPhones.appendChild(li);

            let delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', (ev) => deleteF(li, id))
            li.appendChild(delBtn);
        })
    }

    function deleteF(_li, _id) {
        _li.remove();
        const deleteUrl = url + `/${_id}`

        fetch(deleteUrl, { method: 'DELETE'});
    }

    async function onCreate() {
       if (personField.value !== '' && phoneField.value !== '') {
            const data = {
                'person': personField.value,
                'phone': phoneField.value
            }

            await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify(data),
            })

            personField.value = '';
            phoneField.value = '';
            
            loadBtn.click();
        }
    }
}

attachEvents();