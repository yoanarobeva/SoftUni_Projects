import { post } from "./api.js";
import { createSubmitHandler, setUserData } from "./util.js";

createSubmitHandler('login-form', onLogin)

const section = document.getElementById('form-login');
section.remove();

let ctx = null;

export function showLoginView(inCtx) {
    ctx = inCtx;
    ctx.render(section)
}

async function onLogin({email, password}) {
    try {
        const userData = await post('/users/login', {email, password});
        setUserData(userData);
        ctx.checkUserNav();
        ctx.goto('home-link');
    } catch (err) {

    }
}