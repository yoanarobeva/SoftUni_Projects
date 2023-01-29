import { showDetailsView } from './details.js';

const main = document.getElementById('main')
const homeSection = document.getElementById('homeView')

const topicTitlesField = homeSection.querySelector('div.topic-title')
topicTitlesField.addEventListener('click', showDetailsView);

const form = homeSection.querySelector('#form');
form.addEventListener('submit', onSubmit)

document.querySelector('button.cancel').addEventListener('click', cancelPost)

export async function showHomeView(ev) {
    if (ev) {
        ev.preventDefault();
    }

    main.replaceChildren(homeSection);

    const data = await getPostsData();
    topicTitlesField.replaceChildren(...Object.values(data).map(createPost));
}

async function onSubmit(ev) {
    ev.preventDefault();
    const  formData = new FormData(form);

    const topicName = formData.get('topicName').trim();
    const username = formData.get('username').trim();
    const postText = formData.get('postText').trim();
    const dateCreated = new Date();

    if (topicName !== '' && username !== '' && postText !== '') {
        await sendData({ topicName, username, postText, dateCreated });
        form.reset();
        showHomeView();
    }  
}

function cancelPost(ev) {
    ev.preventDefault();
    form.reset();
}

function createPost(post) {
    let div = document.createElement('div');
    div.classList.add("topic-container");
    div.innerHTML = `<div class="topic-name-wrapper">
                            <div class="topic-name">
                                <a href="#" class="normal" id="${post._id}">
                                    <h2>${post.topicName}</h2>
                                </a>
                                <div class="columns">
                                    <div>
                                        <p>Date: <time>${post.dateCreated}</time></p>
                                        <div class="nick-name">
                                            <p>Username: <span>${post.username}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
    
    return div;
}

async function sendData(body) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body),
    });

    if (response.status !== 200) {
        throw new Error('sendData Error');
    }
}

async function getPostsData() {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error ('getPostsData Error')
    }

    const data = await response.json();

    return data;
}

