const detailsContainer = document.getElementById('detailsView')

export async function showDetailsView(ev) {
    let id = 0
    if (ev) {
        let target = ev.target;
    
        if (ev.target.tagName === 'H2') {
            target = target.parentElement;
        }
        
        ev.preventDefault();
    
        id = target.id;
    } else {
        id = document.querySelector('.theme-content').id;
    }
   
    let postData = await getPostData(id)
    detailsContainer.replaceChildren(showPost(postData));

    const form = document.querySelector('.answer form');
    form.addEventListener('submit', (ev) => onCommentSubmit(ev, id))

    let fieldToAppendComments = document.querySelector('.comment')

    let commentsData = await getCommentsData(id);
    if (commentsData.length !== 0) {
        Object.values(commentsData).forEach(c => fieldToAppendComments.appendChild(createComment(c)));
    }
}

function showPost(post) {
    document.getElementById('main').replaceChildren(detailsContainer);

    let div = document.createElement('div');
    div.classList.add('theme-content')
    div.id = post._id;
    div.innerHTML = `<div class="theme-title">
                        <div class="theme-name-wrapper">
                            <div class="theme-name">
                                <h2>${post.topicName}</h2>

                            </div>
                        </div>
                    </div>

                    <div class="comment">
                        <div class="header">
                            <img src="./static/profile.png" alt="avatar">
                            <p><span>${post.username}</span> posted on <time>${post.dateCreated}</time></p>
                    
                            <p class="post-content">${post.postText}</p>
                        </div>
                    </div>

                    <div class="answer-comment">
                        <p><span>currentUser</span> comment:</p>
                        <div class="answer">
                            <form>
                                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                                <div>
                                    <label for="username">Username <span class="red">*</span></label>
                                    <input type="text" name="username" id="username">
                                </div>
                                <button>Post</button>
                            </form>
                        </div>
                    </div>`

    return div;
}

async function getPostData(id) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function onCommentSubmit(ev, id) {
    ev.preventDefault();
    const formData = new FormData(document.querySelector('.answer form'));
    const username = formData.get('username').trim();
    const postText = formData.get('postText').trim();
    const date = new Date();
    const postId = id;

    if (username !== '' && postText !== '') {
        const body = {username, postText, date, postId};
        await sendCommentsData(body);
        document.querySelector('.answer form').reset();
        showDetailsView();
    }
}

function createComment(comment) {
    let div = document.createElement('div');
    div.id = 'user-comment';
    div.innerHTML = ` <div class="topic-name-wrapper">
                            <div class="topic-name">
                                <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
                                <div class="post-content">
                                    <p>${comment.postText}</p>
                                </div>
                            </div>
                        </div>`
    
    return div;
}

async function getCommentsData(id) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments'
    const res = await fetch(url);
    const data = await res.json();

    return Object.values(data).filter(c => c.postId === id);
}

async function sendCommentsData(body) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments'
    const res = await fetch(url, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
    });
}

