window.addEventListener("load", solve);

function solve() {
  let makefield = document.getElementById('make');
  let modelField = document.getElementById("model");
  let prodctionYearField = document.getElementById('year');
  let fuelTypeField = document.getElementById('fuel');
  let originalCostField = document.getElementById('original-cost');
  let sellingPriceField = document.getElementById('selling-price');

  let profitMade = 0;
  let publishBtn = document.getElementById('publish')

  publishBtn.addEventListener('click', (ev) => {
    if (makefield.value !== '' && modelField.value !== '' && prodctionYearField.value !== '' && fuelTypeField.value !== '' && originalCostField.value !== NaN 
    && sellingPriceField.value !== NaN && Number(originalCostField.value) < Number(sellingPriceField.value)) {
      ev.preventDefault();
      onClick
      (ev, 
      makefield.value, 
      modelField.value, 
      prodctionYearField.value, 
      fuelTypeField.value, 
      originalCostField.value, 
      sellingPriceField.value)
      clearInput()
    }
  })

  function onClick(ev, make, model, productionYear, fuelType, originalCost, sellingPrice) {
    
    let newRow = document.createElement('tr');
    newRow.classList.add('row');
    document.getElementById('table-body').appendChild(newRow);

    createRowEl(make, newRow);
    createRowEl(model, newRow);
    createRowEl(productionYear, newRow);
    createRowEl(fuelType, newRow)
    createRowEl(originalCost, newRow);
    createRowEl(sellingPrice, newRow);

    let td = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.setAttribute("class", "action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = 'Edit';
    td.appendChild(editBtn);

    editBtn.addEventListener('click', (ev) => onEdit(ev, make, model, productionYear, fuelType, originalCost, sellingPrice));

    let sellBtn = document.createElement('button');
    sellBtn.setAttribute("class", "action-btn");
    sellBtn.classList.add('class')
    sellBtn.textContent = 'Sell';
    td.appendChild(sellBtn);

    sellBtn.addEventListener('click', (ev) => onSell(ev, make, model, productionYear, fuelType, originalCost, sellingPrice))

    newRow.appendChild(td);
  }

  function onSell(ev, _make, _model, _productionYear, _fuelType, _originalCost, _sellingPrice) {
    ev.target.parentNode.parentNode.remove();

    let li = document.createElement('li');
    li.classList.add('each-list');
    document.getElementById('cars-list').appendChild(li);

    let span1 = document.createElement('span');
    span1.textContent = `${_make} ${_model}`;
    li.appendChild(span1);

    let span2 = document.createElement('span');
    span2.textContent = `${_productionYear}`;
    li.appendChild(span2);

    let span3 = document.createElement('span');
    let currentProfit = _sellingPrice - _originalCost;
    profitMade += currentProfit;
    span3.textContent = `${currentProfit}`;
    li.appendChild(span3);

    document.getElementById('profit').textContent = profitMade.toFixed(2);
  }

  function onEdit(ev, _make, _model, _productionYear, _fuelType, _originalCost, _sellingPrice) {
    makefield.value = _make;
    modelField.value = _model;
    prodctionYearField.value = _productionYear;
    fuelTypeField.value = _fuelType;
    originalCostField.value = _originalCost;
    sellingPriceField.value = _sellingPrice;

    ev.target.parentNode.parentNode.remove();
  }

  function createRowEl(inputValue, row) {
    let newtd = document.createElement('td');
    newtd.textContent = inputValue;
    row.appendChild(newtd);
  }

  function clearInput() {
    makefield.value = ''
    modelField.value = ''
    prodctionYearField.value = ''
    fuelTypeField.value = ''
    originalCostField.value = ''
    sellingPriceField.value = ''
  }
}