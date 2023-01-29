function addItem() {
    let inputField = document.getElementById('newItemText');
    let outputList = document.getElementById('items');

    let newItem = document.createElement('li')
    newItem.textContent = inputField.value;
    outputList.appendChild(newItem);
    inputField.value = '';

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    newItem.appendChild(deleteBtn);

    outputList.addEventListener('click', deleteOnClick);

    function deleteOnClick(event) {
        let target = event.target;
        target.parentNode.parentNode.removeChild(target.parentNode);
    }
}