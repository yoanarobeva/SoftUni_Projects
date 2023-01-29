import { get } from './api.js'
import { clearUserData } from './util.js';

export function checkUserNav() {
    const email = localStorage.getItem('email');

    if (email) {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'none');
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'inline');
        //document.getElementById('welcome-msg').textContent = `Welcome, ${email}!`;
    } else {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'inline');
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'none');
    }
}

export function onLogout(ctx) {
    get('/users/logout');
    clearUserData();
    ctx.checkUserNav();
    ctx.goto('login-link');
}
