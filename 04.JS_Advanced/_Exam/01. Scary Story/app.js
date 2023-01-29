window.addEventListener("load", solve);

function solve() {
  let firstNameField = document.getElementById('first-name');
  let lastNameField = document.getElementById('last-name');
  let ageField = document.getElementById('age');
  let titleField = document.getElementById('story-title');
  let genreField = document.getElementById('genre');
  let storyField = document.getElementById('story');

  let previewList = document.getElementById('preview-list');
  let all = document.getElementById('main');

  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (
      firstNameField.value !== '' &&
      lastNameField.value !== '' &&
      ageField.value !== '' &&
      titleField.value !== '' &&
      storyField.value !== ''
    ) {
      publishF(
        ev, 
        firstNameField.value, 
        lastNameField.value,
        ageField.value,
        titleField.value,
        genreField.value,
        storyField.value
      );
      clearInput();
      publishBtn.disabled = true;
    }
  })

  function publishF(ev, firstName, lastName, age, title, genre, story) {
    let list = elGenerator('li', '', previewList);
    list.classList.add('story-info');

    let article = elGenerator('article', '', list);
    elGenerator('h4', `Name: ${firstName} ${lastName}`, article);
    elGenerator('p', `Age: ${age}`, article);
    elGenerator('p', `Title: ${title}`, article);
    elGenerator('p', `Genre: ${genre}`, article);
    elGenerator('p', story, article);

    let saveBtn = elGenerator('button', 'Save Story', list);
    saveBtn.classList.add('save-btn');
    saveBtn.addEventListener('click', saveF);

    let editBtn = elGenerator('button', 'Edit Story', list);
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', (ev) => editF(ev, firstName, lastName, age, title, genre, story, list));

    let deleteBtn = elGenerator('button', 'Delete Story', list);
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', (ev) => deleteF(ev, list));
  }

  function editF(ev, _firstName, _lastName, _age, _title, _genre, _story, _list) {
    firstNameField.value = _firstName;
    lastNameField.value = _lastName;
    ageField.value = _age;
    titleField.value = _title;
    genreField.value = _genre;
    storyField.value = _story;

    _list.remove();
    publishBtn.disabled = false;
  }

  function saveF() {
    all.innerHTML = ''
    elGenerator('h1', 'Your scary story is saved!', all);
  }

  function deleteF(ev, _list) {
    _list.remove();
    publishBtn.disabled = false;
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
    firstNameField.value = '';
    lastNameField.value = '';
    ageField.value = '';
    titleField.value = '';
    genreField.value = '';
    storyField.value = '';
  }
}
