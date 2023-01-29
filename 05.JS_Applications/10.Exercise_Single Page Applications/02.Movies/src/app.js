import { showAddMovieView } from "./addMovie.js";
import { checkUserNav, onLogout } from "./auth.js";
import { showEditMovieView } from "./editMovie.js";
import { showHomeView } from "./home.js";
import { showLoginView } from "./login.js";
import { showMovieExampleView } from "./details.js";
import { showRegisterView } from "./register.js";

document.querySelector('nav').addEventListener('click', onNavigate);

const views = {
    'home-link': showHomeView,
    'addMovie-link': showAddMovieView,
    'details-link': showMovieExampleView,
    'edit-link': showEditMovieView,
    'login-link': showLoginView,
    'register-link': showRegisterView,
    'logout-link': onLogout
}

checkUserNav();

goto('home-link');

function onNavigate(ev) {

    if (ev.target.tagName === 'A' && ev.target.href) {
        const id = ev.target.id;
        if(goto(id)) {
            ev.preventDefault();
        };
    }
}

function goto(viewName, ...params) {
    const view = views[viewName];

    if (typeof view === 'function') {
        view({
            goto,
            checkUserNav,
            render
        }, ...params);
        return true;
    }
    return false;
}

function render(section) {
    document.querySelector('#main').replaceChildren(section);
}

