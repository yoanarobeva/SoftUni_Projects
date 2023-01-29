import { editItem, getById } from '../api/data.js';
import { html, until } from '../lib.js'

const editTemplate = (itemPromise) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
    ${until(itemPromise, html`<p>Loading &hellip;</p>`)}
</div>`;

const formTemplate = (item, onSubmit, errorMsg, errors) => html`
<form @submit=${onSubmit}>
    ${errorMsg ? html`<div class="row space-top error">${errorMsg}</div>`: null}
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${"form-control" + (errors.make ? ' is-invalid' : ' is-valid')} id="new-make" type="text" name="make" .value=${item.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${"form-control" + (errors.model ? ' is-invalid' : ' is-valid')} id="new-model" type="text" name="model" .value=${item.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${"form-control" + (errors.year ? ' is-invalid' : ' is-valid')} id="new-year" type="number" name="year" .value=${item.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${"form-control" + (errors.description ? ' is-invalid' : ' is-valid')} id="new-description" type="text" name="description" .value=${item.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${"form-control" + (errors.price ? ' is-invalid' : ' is-valid')} id="new-price" type="number" name="price" .value=${item.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${"form-control" + (errors.img ? ' is-invalid' : ' is-valid')} id="new-image" type="text" name="img" .value=${item.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`;

export function editPage(ctx) {
    const id = ctx.params.id;
    const itemPromise = getById(id);

    update(itemPromise, null, {});

    function update(itemPromise, errorMsg, errors) {
        ctx.render(editTemplate(loadItem(itemPromise, errorMsg, errors)))
    }
    
    async function loadItem(itemPromise, errorMsg, errors) {
        const item = await itemPromise;
    
        return formTemplate(item, onSubmit, errorMsg, errors);
    }

    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target);
        let {make, model, year, description, price, img, material} = Object.fromEntries(formData);
        year = Number(year);
        price = Number(price);
        const body = {make, model, year, description, price, img, material}
        
        try {
            inputValidations(make, model, year, description, price, img, material);
            await editItem(id, body);
            ev.target.reset();
            ctx.page.redirect('/');
        } catch (error) {
            const message = error.message || error.error.message;
            update(Object.fromEntries(formData), message, error.errors || {});
        }
    }
}

function inputValidations(make, model, year, description, price, img, material) {
    if (make.length < 4) {
        throw {
            error: new Error ('Make must be at least 4 symbols'),
            errors: {
                make: true
            }
        }
    }

    if (model.length < 4) {
        throw {
            error: new Error ('Model must be at least 4 symbols'),
            errors: {
                model: true
            }
        }
    }

    if (Number(year) > 2050 || Number(year) < 1950) {
        throw {
            error: new Error ('Invalid year!'),
            errors: {
                year: true
            }
        }
    }

    if (description.length < 10) {
        throw {
            error: new Error ('Description must be at least 10 symbols'),
            errors: {
                description: true
            }
        }
    }

    if (Number(price) < 0) {
        throw {
            error: new Error ('Price cannot be negative number!'),
            errors: {
                price: true
            }
        }
    }

    if (img == '') {
        throw {
            error: new Error ('Image field is required!'),
            errors: {
                img: true
            }
        }
    }
}


