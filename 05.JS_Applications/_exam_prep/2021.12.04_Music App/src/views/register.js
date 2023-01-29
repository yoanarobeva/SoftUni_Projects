import { register } from '../api/user.js';
import {html} from '../lib.js'
import { createSubmitHandler } from '../util.js';

const registerTemplate = (onRegister) => html`
<section id="registerPage">
    <form @submit=${onRegister}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister(formData) {
        const email = formData.email;
        const password = formData.password;
        const repeatPassword = formData['conf-pass'];

        if (email == '' || password == '' || repeatPassword == '') {
            return alert('All fields are required!');
        }

        if (password !== repeatPassword) {
            return alert('Passwords don\'t match!')
        }

        await register(email, password);
        
        ctx.page.redirect('/');
    }
}