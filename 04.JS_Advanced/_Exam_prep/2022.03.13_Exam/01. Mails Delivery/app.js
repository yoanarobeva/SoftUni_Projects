function solve() {

    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    resetBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (recipient.value === '' || title.value === '' || message.value === '') {
            return;
        }
        clearInput();
    });

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (!(recipient.value === '' || title.value === '' || message.value === '')) {
            add(ev, recipient.value, title.value, message.value);
            clearInput();
        }
    })
       
    function add(ev, recipient, title, message) {
        let list = document.getElementById('list');
        let newLi = document.createElement('li');
        list.appendChild(newLi)

        addHtmlEl('h4', newLi, `Title: ${title}`);
        addHtmlEl('h4', newLi, `Recipient Name: ${recipient}`);
        addHtmlEl('span', newLi, message);

        let newDivForBtns = document.createElement('div');
        newLi.appendChild(newDivForBtns);
        newDivForBtns.id = 'list-action';

        let sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';
        newDivForBtns.appendChild(sendBtn)

        sendBtn.addEventListener('click', (ev) => onSend(ev, recipient, title, message));

        let deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';
        newDivForBtns.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', (ev) => deleteOnClick(ev, recipient, title, message));
    }

    function onSend(ev, _recipient, _title, _message) {
        let parent = ev.target.parentNode.parentNode;
        parent.remove();
        let sentField = document.querySelector('ul.sent-list');

        let sentLi = document.createElement('li');
        sentField.appendChild(sentLi);

        addHtmlEl('span', sentLi, `To: ${_recipient}`);
        addHtmlEl('span', sentLi, `Title: ${_title}`);
        
        let divSubmitBtn = document.createElement('div');
        divSubmitBtn.classList.add('btn');
        sentLi.appendChild(divSubmitBtn);

        let submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.classList.add('delete');
        submitBtn.textContent = 'Delete';
        divSubmitBtn.appendChild(submitBtn);

        submitBtn.addEventListener('click', (ev) => deleteOnClick(ev, _recipient, _title, _message));
    }

    function deleteOnClick(ev, _recipient, _title, _message) {
        ev.target.parentNode.parentNode.remove()
        let delList = document.getElementsByClassName('delete-list')[0];
            
        let deleteLi = document.createElement('li');
        delList.appendChild(deleteLi);

        addHtmlEl('span', deleteLi, `To: ${_recipient}`);
        addHtmlEl('span', deleteLi, `Title: ${_title}`)
    }

    function clearInput() {
        recipient.value = '';
        title.value = '';
        message.value = '';
    }

    function addHtmlEl(type, parent, textContent) {
        let newEl = document.createElement(type);
        newEl.textContent = textContent;
        parent.appendChild(newEl);
    }
}

solve();

