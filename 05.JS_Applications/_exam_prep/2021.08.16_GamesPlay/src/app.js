import { logout } from './api/user.js';
import {render, page, html} from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`
<h1><a class="home" href="/">GamesPlay</a></h1>
<nav>
    <a href="/catalog">All games</a>
    ${hasUser ? html`
        <div id="user">
            <a href="/create">Create Game</a>
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
    ctx.page.redirect('/');
}

const main = document.querySelector('main');

page(session);
page(decorateContext);
page(parseQuery);                 
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
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
