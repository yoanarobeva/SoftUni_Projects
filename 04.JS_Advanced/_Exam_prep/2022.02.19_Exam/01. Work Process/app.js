function solve() {
    let firstNameField = document.getElementById('fname');
    let lastNameField = document.getElementById('lname');
    let mailField = document.getElementById('email');
    let birthDateField = document.getElementById('birth');
    let positionField = document.getElementById('position');
    let salaryField = document.getElementById('salary');

    let sumField = document.getElementById('sum');
    let sum = 0;
    let hireBtn = document.getElementById('add-worker');

    hireBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (
        firstNameField.value !== '' && 
        lastNameField.value !== '' && 
        mailField.value !== '' &&
        birthDateField.value !== '' &&
        positionField.value !== '' &&
        salaryField.value !== ''
        ) {
            hire(
            ev, 
            firstNameField.value, 
            lastNameField.value, 
            mailField.value, 
            birthDateField.value, 
            positionField.value, 
            salaryField.value);

            clearInput();
        }
    })

    function hire(ev, firstN, lastN, mail, birth, position, salary) {
        let hireField = document.getElementById('tbody');

        let rowParent = elGenerator('tr', '', hireField);
        elGenerator('td', firstN, rowParent);
        elGenerator('td', lastN, rowParent);
        elGenerator('td', mail, rowParent);
        elGenerator('td', birth, rowParent);
        elGenerator('td', position, rowParent);
        elGenerator('td', salary, rowParent);
        let btnHolder = elGenerator('td', '', rowParent);

        let firedBtn = elGenerator('button', 'Fired', btnHolder);
        firedBtn.classList.add('fired');
        firedBtn.addEventListener('click', (ev) => fired(ev, salary));

        let editBtn = elGenerator('button', 'Edit', btnHolder);
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', (ev => edit(ev, firstN, lastN, mail, birth, position, salary)));
        
        sum += Number(salary);
        sumField.textContent = sum.toFixed(2);
    }

    function fired(ev, _salary) {
        sum -= Number(_salary);
        sumField.textContent = sum.toFixed(2);

        ev.target.parentNode.parentNode.remove();
    }

    function edit(ev, _firstN, _lastN, _mail, _birth, _position, _salary) {
        firstNameField.value = _firstN;
        lastNameField.value = _lastN;
        mailField.value = _mail;
        birthDateField.value = _birth;
        positionField.value = _position;
        salaryField.value = _salary;

        sum -= Number(_salary);
        sumField.textContent = sum.toFixed(2);

        ev.target.parentNode.parentNode.remove();
    }

    function elGenerator(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
    
        if (parent) {
          parent.appendChild(element);
        }
        return element;
    }

    function clearInput() {
        firstNameField.value = '';
        lastNameField.value = '';
        mailField.value = '';
        birthDateField.value = '';
        positionField.value = '';
        salaryField.value = '';
    }
}
solve()