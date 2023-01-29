function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;
    let menuList = document.getElementById('menu');

    let newItemInList = document.createElement('option');
    newItemInList.textContent = inputText
    newItemInList.value = inputValue
    menuList.appendChild(newItemInList);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}