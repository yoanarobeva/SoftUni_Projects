import { login } from '../data/auth.js';
import { html } from '../lib.js'

const loginTemplate = (onSubmit, errorMsg) => html`
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit=${onSubmit} id="login-form" class="main-form pad-large">
            ${errorMsg ? html`<div class="error">${errorMsg}</div>` : null}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>`;

export function loginPage(ctx) {
    update();

    function update(errorMsg) {
        ctx.render(loginTemplate(onSubmit, errorMsg));
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        const formdata = new FormData(ev.target);

        const email = formdata.get('email').trim();
        const password = formdata.get('password').trim();

        try {
            
            if (email == '' || password == '') {
                throw new Error ('All fields are required!');
            }

            await login(email, password);
            ctx.updateUserNav();
            ev.target.reset();
            ctx.page.redirect('/my-teams');
            
        } catch (err) {
            update(err.message)
        }
    }
}