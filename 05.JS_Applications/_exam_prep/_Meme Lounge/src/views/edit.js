import { edit, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (meme, onEdit) => html`
<section id="edit-meme">
    <form @submit=${onEdit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const meme = await getById(id);
    ctx.render(editTemplate(meme, createSubmitHandler(onEdit)));

    async function onEdit({title, description, imageUrl}) {
        try {
            if (title == '' || description == '' || imageUrl == '') {
                throw new Error('All fields are required!')
            }
    
            await edit(id, {title, description, imageUrl});
            ctx.page.redirect('/catalog/' + id);
        } catch (error) {
            const message = error.message || error.error.message;
            ctx.notification(message)
            setTimeout(ctx.hideNotification, 3000);
        }
    }
}