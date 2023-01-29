import { checkUserNav, onLogout } from "./auth.js";
import { showLoginView } from "./03.login.js";
import { showRegisterView } from "./02.register.js";
import { showHomeView } from "./01.home.js";
import { showDasboardView } from "./04.dashboard.js";
import { showDetailsView } from "./05.details.js";
import { showAddView } from "./06.add.js";

document.getElementById('navBar').addEventListener('click', onNavigate);

const views = {
    'home-link': showHomeView,
    'register-link': showRegisterView,
    'login-link': showLoginView,
    'dashboard-link': showDasboardView,
    'details-link': showDetailsView,
    'add-link': showAddView,
    'logout-link': onLogout
}

checkUserNav();

goto('home-link');

function onNavigate(ev) {
    let target = ev.target;

    if (target.tagName == 'IMG') {
        target = ev.target.parentElement;
    }

    if (target.tagName === 'A') {
        
        const id = target.id;

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

function render(fragment) {
    document.querySelector('main').replaceChildren(fragment);
}

