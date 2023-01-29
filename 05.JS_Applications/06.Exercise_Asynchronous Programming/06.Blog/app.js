function attachEvents() {
    const loadBtn = document.getElementById('btnLoadPosts');
    const selectField = document.getElementById('posts');
    const viewBtn = document.getElementById('btnViewPost');

    const titleField = document.getElementById('post-title');
    const bodyField = document.getElementById('post-body');
    const ulField = document.getElementById('post-comments');

    let postBody = [];

    loadBtn.addEventListener('click', async () => {
        let postData = await getPosts();

        postData.forEach(x =>{
            let body = x.body;
            let id = x.id;
            let title = x.title;

            selectField.appendChild(elCreate('option', title, [['value', id]]));
            postBody.push({id, body, title});
        })
    });

    viewBtn.addEventListener('click', async () => {
        if(selectField.value !== '') {
            let id = selectField.value;
        let commentsData = await getComments();

        titleField.innerHTML = '';
        bodyField.innerHTML = '';
        ulField.innerHTML = '';

        commentsData.forEach(x => {
            if (x.postId === id) {
                ulField.appendChild(elCreate('li', x.text));
            }
        })
        let selectedPost = postBody.filter(x => x.id === id);
        
        let title = selectedPost[0].title;
        let body = selectedPost[0].body

        titleField.textContent = title;
        bodyField.textContent = body;
        }
    })

    async function getPosts() {
        const url = 'http://localhost:3030/jsonstore/blog/posts';
        const response = await fetch(url);
        const data = await response.json();

        return Object.values(data);
    }

    async function getComments() {
        const url = `http://localhost:3030/jsonstore/blog/comments`;
        const response = await fetch(url);
        const data = await response.json();

        return Object.values(data);
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

attachEvents();