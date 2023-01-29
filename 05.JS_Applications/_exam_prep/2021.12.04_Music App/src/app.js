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
import { showSearch } from './views/search.js'; 

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`
<nav>
    <img src="./images/headphones.png">
    <a href="/">Home</a>
    <ul>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        ${hasUser ? html `
        <li><a href="/create">Create Album</a></li>
        <li><a href="/logout">Logout</a></li>`
        : html `
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>`}
    </ul>
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
page('/search', showSearch);        

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
