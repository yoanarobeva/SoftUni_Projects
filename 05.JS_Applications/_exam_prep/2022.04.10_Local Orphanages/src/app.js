import { logout } from './api/user.js';
import {render, page, html} from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

const nav = document.querySelector('header');  //CHANGE NAV ROOT IF NEEDED!!!

const navTemplate = (hasUser) => html`
<h1><a href="/catalog">Orphelp</a></h1>
<nav>
    <a href="/catalog">Dashboard</a>
    ${hasUser ? html`
        <div id="user">
            <a href="/my-posts">My Posts</a>
            <a href="/create">Create Post</a>
            <a href="/logout">Logout</a>
        </div>` 
    : html`
        <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    `} 
</nav>`;

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/catalog');
}

const main = document.querySelector('main');  //CHANGE MAIN ROOT IF NEEDED!!!

page(session);
page(decorateContext);
page(parseQuery);                 
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/my-posts', showCatalog);                   // IF MY CATALOG
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/logout', onLogout);
page('/register', showRegister);
//page('/search', showSearch);              // IF SEARCH

// if there is additional view, add it

page.start();
page.redirect('/catalog')

function  decorateContext(ctx, next) {
    render(navTemplate(ctx.user), nav);

    ctx.render = function (content) {
        render(content, main);
    };

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
