import { post } from "./api.js";
import { createSubmitHandler, setUserData } from "./util.js";

createSubmitHandler('register-form', onRegister);

const section = document.getElementById('form-sign-up');
section.remove();

let ctx = null;

export function showRegisterView(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onRegister({email, password, repeatPassword}) {
    if (password !== repeatPassword) {
        return alert('Passwords don\'t match!');
    }

    if (password.length < 6) {
        return alert('Password is less than 6 characters!');
    }
    
    if (email !== '' && password !== '' && repeatPassword !== '') {
        try {
            const userData = await post('/users/register', {email, password});
            setUserData(userData);
            ctx.checkUserNav();
        ctx.goto('home-link');
        } catch(err) {
            
        }
    } else {
        alert('Please, fill all fields!')
    }
}