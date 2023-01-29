async function lockedProfile() {
    let main = document.getElementById('main');
    main.innerHTML = ''

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const resource = await fetch(url);
    const data = await resource.json();

    console.log(data);

    Object.values(data).forEach(x => {
        createProfile(x.username, x.email, x.age);
    })

    function createProfile(_name, _email, _age) {
        let divP = createEl('div', '', [['class', 'profile']]);
        main.appendChild(divP);

        divP.appendChild(createEl('img', '', [['src', './iconProfile2.png'], ['class', 'userIcon']]));
        divP.appendChild(createEl('label', 'Lock'));

        let lock = createEl('input', '', [['type', 'radio'], ['name', 'user1Locked'], ['value', 'lock']]);
        lock.checked = true;
        divP.appendChild(lock);

        divP.appendChild(createEl('label', 'Unlock'));
        divP.appendChild(createEl('input', '', [['type', 'radio'], ['name', 'user1Locked'], ['value', 'unlock']]));
        divP.appendChild(createEl('br',''));
        divP.appendChild(createEl('hr', ''));
        divP.appendChild(createEl('label', 'Username'));

        let userName = createEl('input', '', [['type', 'text'], ['name', 'user1Username'], ['value', _name]]);
        divP.appendChild(userName);
        userName.disabled = true;
        userName.readonly = true;

        let divContainer = createEl('div', '', [['id', 'user1HiddenFields']]);
        divP.appendChild(divContainer);
        divContainer.style.display = 'none'

        divContainer.appendChild(createEl('hr', ''));
        divContainer.appendChild(createEl('label', 'Email:'));

        let mailField = createEl('input', '', [['type', 'email'], ['name', 'user1Email'], ['value', _email]]);
        mailField.disabled = true;
        mailField.readonly = true;
        divContainer.appendChild(mailField);

        divContainer.appendChild(createEl('label', 'Age:'));
        
        let ageField = createEl('input', '', [['type', 'email'], ['name', 'user1Age'], ['value', _age]]);
        ageField.disabled = true;
        ageField.readonly = true;
        divContainer.appendChild(ageField);

        let moreBtn = createEl('button', 'Show more');
        divP.appendChild(moreBtn)
        moreBtn.addEventListener('click', (ev) => showMore(ev, divContainer, moreBtn, lock))
    }

    function showMore(ev, _divContainer, _moreBtn, _lock) {

        if(_lock.checked === false) {
            if(_moreBtn.textContent === 'Show more') {
                _divContainer.style.display = 'block';
                _moreBtn.textContent = 'Hide it';
            } else {
                _divContainer.style.display = 'none';
                _moreBtn.textContent = 'Show more'
            }
            
        }
    }

    function createEl(type, text, attributes) {
        let element = document.createElement(type);
        element.textContent = text;
        if (attributes) {
            attributes.forEach(x => element.setAttribute(x[0], x[1]));
        }
        return element;
    } 
}