function solution() {
    let allFields = document.querySelectorAll('.card');

    let addGiftsFields = allFields[0];
    let giftNameField = addGiftsFields.querySelector('input');
    let addGift = addGiftsFields.querySelector('button');

    let listOfGifts = allFields[1].querySelector('ul');
    let sentGifts = allFields[2].querySelector('ul');
    let discardedGifts = allFields[3].querySelector('ul');
    
    
    addGift.addEventListener('click', (ev) => {
        ev.preventDefault();
        add(ev, giftNameField.value);
        giftNameField.value = '';
    })

    function add(ev, gift) {
        let liContainer = elGenerator('li', gift, listOfGifts);
        liContainer.classList.add('gift');

        let sendBtn = elGenerator('button', 'Send', liContainer);
        sendBtn.id = 'sendButton';
        sendBtn.addEventListener('click', (ev) => send(ev, sendBtn, discardBtn, liContainer));

        let discardBtn = elGenerator('button', 'Discard', liContainer);
        sendBtn.id = 'dicardButton';
        discardBtn.addEventListener('click', (ev) => discard(ev, sendBtn, discardBtn, liContainer));

        Array.from(listOfGifts.querySelectorAll('li')).sort((a,b) => a.textContent.localeCompare(b.textContent)).forEach(x => listOfGifts.appendChild(x))
    }

    function send(ev, _sendBtn, _discardBtn, _liContainer) {
        sentGifts.appendChild(_liContainer);
        _sendBtn.remove();
        _discardBtn.remove();
    }

    function discard(ev, _sendBtn, _discardBtn, _liContainer) {
        discardedGifts.appendChild(_liContainer);
        _sendBtn.remove();
        _discardBtn.remove();
    }

    function elGenerator(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
    
        if (parent) {
          parent.appendChild(element);
        }
        return element;
    }
}