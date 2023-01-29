async function solution() {
    const main = document.getElementById('main');

    const articlesData  = await getArticles();
    console.log(articlesData);

    articlesData.forEach(async (x) => {
        let article = x.title;
        let id = x._id;

        const details = await getDetails(id);

        let text = details.content;

        createArticle(article, id, text)
    })

    function createArticle(_article, _id, _text) {
        let divContainer = elCreate('div', '', [['class', 'accordion']]);
        main.appendChild(divContainer);

        let divHead = elCreate('div', '', [['class', 'head']]);
        divContainer.appendChild(divHead);

        divHead.appendChild(elCreate('span', _article));

        let btn = elCreate('button', 'More', [['class', 'button'], ['id', _id]]);
        divHead.appendChild(btn);
        btn.addEventListener('click', (ev) => toggle(ev, btn, divExtra));

        let divExtra= elCreate('div', '', [['class', 'extra']]);
        divContainer.appendChild(divExtra);

        divExtra.appendChild(elCreate('p', _text));
        
        divExtra.style.display = 'none';
    }

    function toggle(ev, _btn, _divExtra) {
        if (_btn.textContent === 'More') {
            _divExtra.style.display = 'block';
            _btn.textContent = 'Less';
        } else {
            _divExtra.style.display = 'none';
            _btn.textContent = 'More';
        }
    }

    async function getArticles() {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
        const response = await fetch(url);
        const data = response.json();

        return data;
    }

    async function getDetails(_id) {
        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${_id}`;
        const response = await fetch(url);
        const data = response.json();

        return data;
    }

    function elCreate(type, text, attributes) {
        let element = document.createElement(type);
        element.textContent = text;
        if (attributes) {
            attributes.forEach(x => element.setAttribute(x[0], x[1]));
        }
        return element;
    } 
}

solution();