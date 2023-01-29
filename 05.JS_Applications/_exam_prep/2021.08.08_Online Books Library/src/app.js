import { logout } from './api/user.js';
import {render, page, html} from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

const nav = document.querySelector('header'); 

const navTemplate = (hasUser) => html`
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/catalog">Dashboard</a>
        ${!hasUser ? html`
            <div id="guest">
                <a class="button" href="/login">Login</a>
                <a class="button" href="/register">Register</a>
            </div>` 
        : html`
            <div id="user">
                <span>Welcome, ${hasUser.email}</span>
                <a class="button" href="/my-books">My Books</a>
                <a class="button" href="/create">Add Book</a>
                <a class="button" href="/logout">Logout</a>
            </div>
        `}   
    </section>
</nav>`;

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/catalog');
}

const main = document.querySelector('main'); 

page(session);
page(decorateContext);
page(parseQuery);                 
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/my-books', showCatalog);                  
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/logout', onLogout);
page('/register', showRegister);

page.start();
page.redirect('/catalog'); 

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
