function solve() {
  let inputField = document.querySelectorAll('#exercise textarea')[0];
  let outputField = document.querySelectorAll('#exercise textarea')[1];
  let generateBtn = document.querySelectorAll('#exercise button')[0];
  let buyBtn = document.querySelectorAll('#exercise button')[1];
  let tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(event) {
    if (!inputField.value) {
      return;
    }

    let text = JSON.parse(inputField.value);
    text.forEach(furniture => {
      tbody.innerHTML += `<tr>
        <td><img src=${furniture.img}></td>
        <td><p>${furniture.name}</p></td>
        <td><p>${furniture.price}</p></td>
        <td><p>${furniture.decFactor}</p></td>
        <td><input type="checkbox"/></td>
        </tr>`
    })

    generateBtn.removeEventListener('click', generate);

  }

  function buy(event) {
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    let boughtItems = [];
    let totalPrice = 0;
    let decFactorSum = 0;

    for (let box of checkBoxes) {
      if (box.checked) {
        let element = box.parentElement.parentElement.querySelectorAll('td');
        let elementName = element[1].textContent;
        let elementPrice = Number(element[2].textContent);
        let decFactor = Number(element[3].textContent);
        boughtItems.push(elementName);
        totalPrice += elementPrice;
        decFactorSum += decFactor;
      }
    }

    outputField.textContent += `Bought furniture: ${boughtItems.join(", ")}\n`;
    outputField.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputField.textContent += `Average decoration factor: ${decFactorSum/boughtItems.length}`;
    buyBtn.removeEventListener('click', buy);
  }
}