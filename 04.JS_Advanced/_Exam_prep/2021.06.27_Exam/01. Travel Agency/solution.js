window.addEventListener('load', solution);

function solution() {
  let nameField = document.getElementById('fname');
  let mailField = document.getElementById('email');
  let phoneField = document.getElementById('phone');
  let addressField = document.getElementById('address');
  let postField = document.getElementById('code');

  let infoPreview = document.getElementById('infoPreview');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (nameField.value !== '' &&  mailField.value !== '') {
      submit(ev, nameField.value, mailField.value, phoneField.value, addressField.value, postField.value);
      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
      clearInput();
    }
  })

  function submit(ev, name, mail, phone, address, post) {
    elGenerator('li', `Full Name: ${name}`, infoPreview);
    elGenerator('li', `Email: ${mail}`, infoPreview);
    elGenerator('li', `Phone Number: ${phone}`, infoPreview);
    elGenerator('li', `Address: ${address}`, infoPreview);
    elGenerator('li', `Postal Code: ${post}`, infoPreview);

    editBtn.addEventListener('click', (ev) => editB(ev, name, mail, phone, address, post))
    continueBtn.addEventListener('click', (ev) => continueB())
  }

  function editB(ev, _name, _mail, _phone, _address, _post) {
    editBtn.disabled = true;
    continueBtn.disabled = true;
    submitBtn.disabled = false;

    nameField.value = _name;
    mailField.value = _mail;
    phoneField.value = _phone;
    addressField.value = _address;
    postField.value = _post;

    infoPreview.innerHTML = '';
  }

  function continueB() {
    let div = document.getElementById('block');
    div.innerHTML = '';
    elGenerator('h3', "Thank you for your reservation!", div);
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
    nameField.value = '';
    mailField.value = '';
    phoneField.value = '';
    addressField.value = '';
    postField.value = '';
  }
}
