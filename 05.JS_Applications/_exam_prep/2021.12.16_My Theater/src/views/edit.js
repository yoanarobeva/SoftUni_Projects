import { edit, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (event, onEdit) => html`
<section id="editPage">
    <form @submit=${onEdit} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" .value=${event.title}>
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${event.date}>
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" .value=${event.author}>
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description"
                placeholder="Description" .value=${event.description}></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${event.imageUrl}>
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const event = await getById(id);
    ctx.render(editTemplate(event, createSubmitHandler(onEdit)));

    async function onEdit({title, date, author, imageUrl, description}) {
        if (title == '' || date == '' || author == '' || imageUrl == '' || description == '') {
            return alert('All fields are required!')
        }

        await edit(id, {title, date, author, imageUrl, description});
        ctx.page.redirect('/catalog/' + id);
    }
}