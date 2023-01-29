import {  } from '../data/data.js';
import { html } from '../lib.js'

const createTemplate = () => html`
<section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form id="create-form" class="main-form pad-large">
            <div class="error">Error message.</div>
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team">
        </form>
    </article>
</section>`;

export function createPage(ctx) {
    update();

    function update() {
        ctx.render(createTemplate());
    }

    // async function onSubmit(ev) {
    //     ev.preventDefault();
    //     const formData = new FormData(ev.target);
    //     let {make, model, year, description, price, img, material} = Object.fromEntries(formData);
    //     year = Number(year);
    //     price = Number(price);
    //     const body = {make, model, year, description, price, img, material}
    
    //     try {
    //         inputValidations(make, model, year, description, price, img, material);
    //         await createItem(body);
    //         ev.target.reset();
    //         ctx.page.redirect('/');
    //     } catch (error) {
    //         const message = error.message || error.error.message;
    //         update(message, error.errors || {});
    //     }
    // }
}

// function inputValidations(make, model, year, description, price, img, material) {
//     if (make.length < 4) {
//         throw {
//             error: new Error ('Make must be at least 4 symbols'),
//             errors: {
//                 make: true
//             }
//         }
//     }

//     if (model.length < 4) {
//         throw {
//             error: new Error ('Model must be at least 4 symbols'),
//             errors: {
//                 model: true
//             }
//         }
//     }

//     if (Number(year) > 2050 || Number(year) < 1950) {
//         throw {
//             error: new Error ('Invalid year!'),
//             errors: {
//                 year: true
//             }
//         }
//     }

//     if (description.length < 10) {
//         throw {
//             error: new Error ('Description must be at least 10 symbols'),
//             errors: {
//                 description: true
//             }
//         }
//     }

//     if (Number(price) < 0) {
//         throw {
//             error: new Error ('Price cannot be negative number!'),
//             errors: {
//                 price: true
//             }
//         }
//     }

//     if (img == '') {
//         throw {
//             error: new Error ('Image field is required!'),
//             errors: {
//                 img: true
//             }
//         }
//     }
// }
