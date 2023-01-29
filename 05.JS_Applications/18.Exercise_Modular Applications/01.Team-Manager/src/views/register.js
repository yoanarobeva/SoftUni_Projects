import { register } from '../data/auth.js';
import { html } from '../lib.js'

const registerTemplate = (onSubmit, errorMsg, errors) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
            ${errorMsg ? html `<div class="error">${errorMsg}</div>` : null}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>`;

export function registerPage(ctx) {
    update();

    function update(errorMsg, errors) {
        ctx.render(registerTemplate(onSubmit, errorMsg));
    }

    async function onSubmit(ev) {
        ev.preventDefault();

        const formdata = new FormData(ev.target);

        const email = formdata.get('email').trim();
        const username = formdata.get('username').trim();
        const password = formdata.get('password').trim();
        const rePass = formdata.get('repass').trim();

        try {
            validateEmail(email);

            if (email == '' || username == '' || password == '') {
                throw new Error ('All fields are required!');     
            }

            if (password != rePass) {
                throw new Error ('Passwords don\'t match!');  
            }

            if ( username.length < 3 || password.length < 3) {
                throw new Error ('Username and/or password must be at least 3 characters/digits!');
            }

            await register(email,username, password);
            ctx.updateUserNav();
            ev.target.reset();
            ctx.page.redirect('/my-teams');
            
        } catch (error) {
            update(error.message);
        }

        function validateEmail(mail) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                return (true);
            }
            throw new Error ('You have entered an invalid email address!');
        }
    }
}