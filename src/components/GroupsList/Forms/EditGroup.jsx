import React from 'react';

import FormValidation from '../../../hoc/FormValidation';

import validate from '../../../helpers/validate';

const EditGroup = (props) => {
    let { handleSubmit, dataForEdit, title, description } = props;
    
    return (
        <div>
            <h3>Edit group</h3>
            <form onSubmit={handleSubmit}>
                <input id="id" name="id" type="hidden" value={dataForEdit.id} />
                <div>
                    <input id="title" name="title" type="text" defaultValue={dataForEdit.title} onBlur={title.onBlur} onChange={title.onChange}/>
                    {title.touched && title.error && <div>{title.error}</div>}
                </div>
                <div>
                    <input id="description" name="description" type="text" defaultValue={dataForEdit.description} onBlur={description.onBlur} onChange={description.onChange}/>
                    {description.touched && description.error && <div>{description.error}</div>}
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

const validationOptions = {
    fields: ['title', 'description'],
    validate: validate
}

export default FormValidation(EditGroup, validationOptions);