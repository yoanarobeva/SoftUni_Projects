function deleteByEmail() {
    let inputField = document.querySelector('input[type = "text"]');
    let listOfItems = document.querySelectorAll('#customers tbody tr');
    let resultField = document.getElementById('result');
    let isFound = false;

    for (let row of listOfItems) {
        if (row.textContent.includes(inputField.value)) {
            row.parentElement.removeChild(row);
            resultField.textContent = 'Deleted.'
            isFound = true;
        }
        if (!isFound) {
            resultField.textContent = 'Not found.'
        } 
    }

    inputField = '';

}