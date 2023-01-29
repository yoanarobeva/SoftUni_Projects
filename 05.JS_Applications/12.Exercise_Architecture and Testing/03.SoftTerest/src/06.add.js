import { post } from "./api.js";
import { createSubmitHandler } from "./util.js";

createSubmitHandler('add-form', onAdd);

const section = document.getElementById('addPage');
section.remove();

let ctx = null;

export function showAddView(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onAdd({ title, description, imageURL }, ev) {
    let img = imageURL;
    try {

        if (title.length < 6) {
            alert('Title must be at least 6 characters!');
        }

        if (description.length < 10) {
            alert('Description must be at least 10 characters!');
        }

        if (img.length < 5) {
            alert('Image must be at least 5 characters!');
        }

        if (title !== '' && description !== '' && img !== '') {
            const newMovie = await post('/data/ideas', { title, description, img });
            ctx.goto('dashboard-link');
        } else {
            alert('Fill all fields!')
        } 
    } catch (error) {
        alert(error.message);
    }
}
