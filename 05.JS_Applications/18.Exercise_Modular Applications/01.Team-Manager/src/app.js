import { logout } from './data/auth.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { myTeamsPage } from './views/my-teams.js';
import { registerPage } from './views/register.js';


const root = document.querySelector('main');

page(session);
page(decorateContext);
page('/', homePage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/logout', onLogout);
page('/register', registerPage);
page('/my-teams', myTeamsPage);

updateUserNav();
page.start();
page.redirect('/');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav;
    next();
}

function session(ctx, next) {
    const user = getUserData();

    if (user) {
        ctx.user = user;
    }

    next();
}

function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        [...document.querySelectorAll('.user')].forEach(x => x.style.display = 'inline-block');
        [...document.querySelectorAll('.guest')].forEach(x => x.style.display = 'none');
    } else {
        [...document.querySelectorAll('.user')].forEach(x => x.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(x => x.style.display = 'inline-block');
    }
}

async function onLogout() {
    await logout();
    updateUserNav()
    page.redirect('/');
}
