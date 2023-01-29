import { post } from "./api.js";
import { createSubmitHandler, setUserData } from "./util.js";

createSubmitHandler('login-form', onLogin)

const section = document.getElementById('loginPage');
section.remove();

let ctx = null;

export function showLoginView(inCtx) {
    ctx = inCtx;
    ctx.render(section)
}

async function onLogin({email, password}) {
    try {

        if (email !== '' && password !== '') {
            const userData = await post('/users/login', {email, password});
            setUserData(userData);
            ctx.checkUserNav();
            ctx.goto('home-link');
        } else {
            alert ('Fill all fields!')
        }
    } catch (err) {

    }
}
