import { createItem } from '../api/data.js';
import { html } from '../lib.js'

const createTemplate = (onSubmit, errorMsg, errors) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
    ${errorMsg ? html`<div class="row space-top">${errorMsg}</div>`: null}
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${"form-control" + (errors.make ? ' is-invalid' : ' is-valid')} id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${"form-control" + (errors.model ? ' is-invalid' : ' is-valid')} id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${"form-control" + (errors.year ? ' is-invalid' : ' is-valid')} id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${"form-control" + (errors.description ? ' is-invalid' : ' is-valid')} id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${"form-control" + (errors.price ? ' is-invalid' : ' is-valid')} id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${"form-control" + (errors.img ? ' is-invalid' : ' is-valid')} id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class=${"form-control" + (errors.material ? ' is-invalid' : ' is-valid')} id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>`

export function createPage(ctx) {
    update(null, {});

    function update(errorMsg, errors) {
        ctx.render(createTemplate(onSubmit, errorMsg, errors));
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        let {make, model, year, description, price, img, material} = Object.fromEntries(formData);
        year = Number(year);
        price = Number(price);
        const body = {make, model, year, description, price, img, material}
    
        try {
            inputValidations(make, model, year, description, price, img, material);
            await createItem(body);
            ev.target.reset();
            ctx.page.redirect('/');
        } catch (error) {
            const message = error.message || error.error.message;
            update(message, error.errors || {});
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
