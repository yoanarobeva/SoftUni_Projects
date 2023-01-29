window.addEventListener('load', solve);

function solve() {
    let modelField = document.getElementById('model');
    let yearField = document.getElementById('year');
    let desctiptionField = document.getElementById('description');
    let priceField = document.getElementById('price');

    let furnList = document.getElementById('furniture-list');
    let totalPrice = document.querySelector('.total-price');
    let priceSum = 0;

    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (
            modelField.value !== '' && 
            desctiptionField.value !== '' && 
            yearField.value !== '' &&
            Number(yearField.value) > 0 && 
            priceField.value !== '' &&
            Number(priceField.value) > 0
        ) {
            add(ev, modelField.value, yearField.value, desctiptionField.value, priceField.value);
            clearInput();
        }
    })

    function add(ev, model, year, desc, price) {
        year = Number(year);
        price = Number(price);
        let infoTr = elGenerator('tr', '', furnList);
        infoTr.classList.add('info');

        elGenerator('td', model, infoTr);
        elGenerator('td', `${price.toFixed(2)}`, infoTr);

        let btnTd = elGenerator('td', '', infoTr);
        let moreBtn = elGenerator('button', 'More Info', btnTd);
        moreBtn.classList.add('moreBtn');
        moreBtn.addEventListener('click', (ev) => more(ev, moreBtn, hideTr));

        let buyBtn = elGenerator('button', 'Buy it', btnTd);
        buyBtn.classList.add('buyBtn');
        buyBtn.addEventListener('click', (ev) => buy(ev, infoTr, hideTr, price));

        let hideTr = elGenerator('tr', '', furnList);
        hideTr.classList.add('hide');

        elGenerator('td', `Year: ${year}`, hideTr);
        let colspTd = elGenerator('td', `Description: ${desc}`, hideTr);
        colspTd.colSpan = '3';
    }

    function more(ev, _moreBtn, _hideTr) {
        if (_moreBtn.textContent === 'More Info') {
            _hideTr.style.display = 'contents';
            _moreBtn.textContent = 'Less Info'
        } else {
            _hideTr.style.display = 'none';
            _moreBtn.textContent = 'More Info'
        }
       
    }

    function buy(ev, _infoTr, _hideTr, _price) {
        priceSum += _price;
        totalPrice.textContent = priceSum.toFixed(2)
        _infoTr.remove();
        _hideTr.remove();
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
        modelField.value = '';
        yearField.value = '';
        desctiptionField.value = '';
        priceField.value = '';
    }
}
