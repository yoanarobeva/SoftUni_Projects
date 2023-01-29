import {  } from '../data/data.js';
import { html, until } from '../lib.js'

const editTemplate = (itemPromise) => html`
 <section id="edit">
    <article class="narrow">
        <header class="pad-med">
            <h1>Edit Team</h1>
        </header>
        <form id="edit-form" class="main-form pad-large">
            <div class="error">Error message.</div>
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Save Changes">
        </form>
    </article>
</section>`;

export function editPage(ctx) {
    //const id = ctx.params.id;
    //const itemPromise = getById(id);

    update();

    function update() {
        ctx.render(editTemplate())
    }
    
    // async function loadItem(itemPromise, errorMsg, errors) {
    //     const item = await itemPromise;
    
    //     return formTemplate(item, onSubmit, errorMsg, errors);
    // }

    // async function onSubmit(ev) {
    //     ev.preventDefault()
    //     const formData = new FormData(ev.target);
    //     let {make, model, year, description, price, img, material} = Object.fromEntries(formData);
    //     year = Number(year);
    //     price = Number(price);
    //     const body = {make, model, year, description, price, img, material}
        
    //     try {
    //         inputValidations(make, model, year, description, price, img, material);
    //         await editItem(id, body);
    //         ev.target.reset();
    //         ctx.page.redirect('/');
    //     } catch (error) {
    //         const message = error.message || error.error.message;
    //         update(Object.fromEntries(formData), message, error.errors || {});
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


