function addItem() {
    let inputField = document.getElementById('newItemText');
    let outputList = document.getElementById('items');

    let newItem = document.createElement('li')
    newItem.textContent = inputField.value;
    outputList.appendChild(newItem);
    inputField.value = '';

}