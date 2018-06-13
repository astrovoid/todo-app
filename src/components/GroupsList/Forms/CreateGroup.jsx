import React from "react";

import FormValidation from '../../../units/FormValidation';

import validate from '../../../helpers/validate';

const CreateGroup = ({ handleSubmit, title, description }) => {
    return (
        <div>
            <h3>Create group</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" onBlur={title.onBlur} onChange={title.onChange} />
                    {title.touched && title.error && <div>{title.error}</div>}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input id="description" name="description" type="text" onBlur={description.onBlur} onChange={description.onChange} />
                    {description.touched && description.error && <div>{description.error}</div>}
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

const validationOptions = {
    fields: ['title', 'description'],
    validate: validate
}


export default FormValidation(CreateGroup, validationOptions);
