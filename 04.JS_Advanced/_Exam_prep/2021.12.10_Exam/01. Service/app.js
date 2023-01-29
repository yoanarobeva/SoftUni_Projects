window.addEventListener('load', solve);

function solve() {
    let productField = document.getElementById('type-product');
    let descriptionField = document.getElementById('description');
    let clientNameField = document.getElementById('client-name');
    let clientPhoneField = document.getElementById('client-phone');
    let sendBtn = document.querySelector('[type="submit"]');

    sendBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (descriptionField.value !== '' && clientNameField.value !== '' && clientPhoneField.value !== '') {
            send(ev, productField.value, descriptionField.value, clientNameField.value, clientPhoneField.value);
            clearInput();
        }
    })

    function send(ev, product, description, name, phone) {
        let parent = document.getElementById('received-orders');

        let div = elGenerator('div', '', parent);
        div.classList.add('container')
        elGenerator('h2', `Product type for repair: ${product}`, div);
        elGenerator('h3', `Client information: ${name}, ${phone}`, div);
        elGenerator('h4', `Description of the problem: ${description}`, div);

        let startBtn = elGenerator('button', 'Start repair', div);
        startBtn.classList.add('start-btn')
        startBtn.addEventListener('click', (ev) => start(ev, startBtn, finishBtn));

        let finishBtn = elGenerator('button', 'Finish repair', div);
        finishBtn.classList.add('finish-btn');
        finishBtn.disabled = true;
        finishBtn.addEventListener('click', ev => finish(ev, product, description, name, phone));
    }

    function start(ev, _startBtn, _finishBtn) {
        _startBtn.disabled = true;
        _finishBtn.disabled = false;
    }

    function finish(ev, _product, _description, _name, _phone) {
        ev.target.parentNode.remove();
        let completedField = document.getElementById('completed-orders');

        let div = elGenerator('div', '', completedField);
        div.classList.add('container')
        elGenerator('h2', `Product type for repair: ${_product}`, div);
        elGenerator('h3', `Client information: ${_name}, ${_phone}`, div);
        elGenerator('h4', `Description of the problem: ${_description}`, div);

        let clearBtn = document.querySelector('.clear-btn');
        clearBtn.addEventListener('click', (ev) => {
            Array.from(ev.target.parentNode.querySelectorAll('div .container')).forEach(x => x.remove());
        })
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
        productField.value = '';
        descriptionField.value = '';
        clientNameField.value = '';
        clientPhoneField.value = '';
    }
}