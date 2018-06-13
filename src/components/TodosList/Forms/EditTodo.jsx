import React from 'react';

import FormValidation from '../../../hoc/FormValidation';

import validate from '../../../helpers/validate';

const EditNote = (props) => {
    const { handleSubmit, dataForEdit, groups, title, description } = props;

    return (
        <div>
            <h3>Edit todo</h3>
            <form onSubmit={handleSubmit}>
                <input id="id" name="id" type="hidden" value={dataForEdit.id} />
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" defaultValue={dataForEdit.title} onBlur={title.onBlur} onChange={title.onChange} />
                { title.touched && title.error && <div>{title.error}</div>}
                <label htmlFor="description">Description</label>
                <input id="description" name="description" type="text" defaultValue={dataForEdit.description} onBlur={description.onBlur} onChange={description.onChange} />
                { description.touched && description.error && <div>{description.error}</div> }
                <label htmlFor="group">Group</label>
                <select name="group" id="group" defaultValue={dataForEdit.groupId}>
                    {groups.map(({ id, title }) =>
                        <option key={id} value={id}>{title}</option>
                    )}
                </select>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
}

const validationOptions = {
    fields: ['title', 'description'],
    validate: validate
}

export default FormValidation(EditNote, validationOptions);