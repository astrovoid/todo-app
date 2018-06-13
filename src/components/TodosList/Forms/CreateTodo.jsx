import React from 'react';

import FormValidation from '../../../hoc/FormValidation';

import validate from '../../../helpers/validate';

const CreateTodo = (props) => {
    const { groups, handleSubmit, title, description } = props;

    return (
        <div>
            <h3>Create todo</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" onBlur={title.onBlur} onChange={title.onChange} />
                {title.touched && title.error && <div>{title.error}</div>}
                <label htmlFor="description">Description</label>
                <input id="description" name="description" type="text" onBlur={description.onBlur} onChange={description.onChange} />
                {description.touched && description.error && <div>{description.error}</div>}
                <label htmlFor="group">Group</label>
                <select name="group" id="group">
                    { groups.length > 0 ? 
                        groups.map(({ id, title }) =>
                            <option key={id} value={id}>{title}</option>)
                    : <option value={null}>No group</option>
                    }
                </select>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

const validationOptions = {
    fields: ['title', 'description'],
    validate: validate
}

export default FormValidation(CreateTodo, validationOptions);