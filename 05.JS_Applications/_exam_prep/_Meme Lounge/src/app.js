import { logout } from './api/user.js';
import {render, page, html} from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showMyProfile } from './views/profile.js';
import { showRegister } from './views/register.js';

const nav = document.querySelector('nav');  //CHANGE NAV ROOT IF NEEDED!!!

const navTemplate = (hasUser) => html`
<a href="/catalog">All Memes</a>
${hasUser ? html`
    <div class="user">
        <a href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${hasUser.email}</span>
            <a href="/my-profile">My Profile</a>
            <a href="/logout">Logout</a>
        </div>
    </div>` 
: html`
    <div class="guest">
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        <a class="active" href="/">Home Page</a>
    </div>`
}`;

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/');
}

const notification = document.getElementById('errorBox');

const main = document.querySelector('main');  //CHANGE MAIN ROOT IF NEEDED!!!

page(session);
page(decorateContext);
page(parseQuery);                 
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/my-profile', showMyProfile);
//page('/my-catalog', showCatalog);                   // IF MY CATALOG
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/logout', onLogout);
page('/register', showRegister);

// if there is additional view, add it

page.start();
page.redirect('/');

function  decorateContext(ctx, next) {
    render(navTemplate(ctx.user), nav);

    ctx.render = function (content) {
        render(content, main);
    };

    ctx.notification = function (errorMsg) {
        document.querySelector('#errorBox span').textContent = errorMsg;
        notification.style.display = 'inline-block'
    }

    ctx.hideNotification = function () {
        notification.style.display = 'none'
    }


    next();
}

function session(ctx, next) {
    const user = getUserData();

    if (user) {
        ctx.user = user;
    }

    next();
}

function parseQuery(ctx, next) {
    ctx.query = {};
    if (ctx.querystring) {
        const query = Object.fromEntries(ctx.querystring
            .split('&')
            .map(e => e.split('=')));
        Object.assign(ctx.query, query);
    }

    next();
}