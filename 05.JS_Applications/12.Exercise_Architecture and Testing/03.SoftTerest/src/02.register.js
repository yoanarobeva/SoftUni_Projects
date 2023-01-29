import { post } from "./api.js";
import { createSubmitHandler, setUserData } from "./util.js";

createSubmitHandler
createSubmitHandler('register-form', onRegister);

const section = document.getElementById('registerPage');
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

    if (password.length < 3) {
        return alert('Password is less than 3 characters!');
    }

    if (email.length < 3) {
        return alert('Email is less than 3 characters!');
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
