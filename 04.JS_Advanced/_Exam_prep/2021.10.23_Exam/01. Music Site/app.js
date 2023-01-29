window.addEventListener('load', solve);

function solve() {
    let genreField = document.getElementById('genre');
    let nameField = document.getElementById('name');
    let authorField = document.getElementById('author');
    let dateField = document.getElementById('date');
    let likes = 0;
    
    let allSongsContainer = document.querySelector('.all-hits-container')
    let savedContainer = document.querySelector('.saved-container')
    let LikesContainer = document.querySelector('.likes p');

    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (genreField.value !== '' && nameField.value !== '' && authorField.value !== '' && dateField.value !== '') {
            add(ev, genreField.value, nameField.value, authorField.value, dateField.value);
            clearInput();
        }
    })

    function add(ev, genre, name, author, date) {

        let currentSong = elGenerator('div', '', allSongsContainer);
        currentSong.classList.add('hits-info');

        let image = elGenerator('img', '', currentSong);
        image.src = './static/img/img.png';

        elGenerator('h2', `Genre: ${genre}`, currentSong);
        elGenerator('h2', `Name: ${name}`, currentSong);
        elGenerator('h2', `Author: ${author}`, currentSong);
        elGenerator('h3', `Date: ${date}`, currentSong);

        let saveBtn = elGenerator('button', 'Save song', currentSong);
        saveBtn.classList.add('save-btn');
        saveBtn.addEventListener('click', (ev) => save(ev, saveBtn, likeBtn, deleteBtn, currentSong));

        let likeBtn = elGenerator('button', 'Like song', currentSong);
        likeBtn.classList.add('like-btn');
        likeBtn.addEventListener('click', (ev) => like(ev, likeBtn));

        let deleteBtn = elGenerator('button', 'Delete', currentSong);
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', (ev) => deleteOnClick(ev, genre, name, author, date));
    }

    function save(ev, _saveBtn, _likeBtn, _deleteBtn, _currentSong) {
        _saveBtn.remove();
        _likeBtn.remove();
        savedContainer.appendChild(_currentSong);
    }

    function like(ev, _likeBtn) {
        likes++;
        LikesContainer.textContent = `Total Likes: ${likes}`
        _likeBtn.disabled = true;
    }

    function deleteOnClick(ev) {
        ev.target.parentNode.remove();
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
        genreField.value = '';
        nameField.value = '';
        authorField.value = '';
        dateField.value = '';
    }
}