import React from 'react';

import FormValidation from '../../../hoc/FormValidation';

import validate from '../../../helpers/validate';

import formStyle from '../../../styles/form.css';
import buttonStyle from '../../../styles/button.css';

const CreateTodo = (props) => {
    const { 
        groups, 
        handleSubmit, 
        title, 
        description } = props;

    return (
        <React.Fragment>
            <div className={formStyle.header}>
                <h3 className={formStyle.title}>Create todo</h3>
            </div>
            <form className={formStyle.form} onSubmit={handleSubmit}>
                
                <div className={formStyle.field}>
                    <label className={formStyle.label} htmlFor="title">Title</label>
                    <input 
                        id="title" 
                        name="title" 
                        type="text" 
                        onBlur={title.onBlur} 
                        onChange={title.onChange} />
                    {title.touched && title.error && <div className={formStyle.error}>{title.error}</div>}
                </div>

                <div className={formStyle.field}>
                <label className={formStyle.label} htmlFor="description">Description</label>
                <textarea 
                    id="description" 
                    name="description" 
                    type="text" 
                    onBlur={description.onBlur} 
                    onChange={description.onChange} />
                {description.touched && description.error && <div className={formStyle.error}>{description.error}</div>}
                </div>

                <div className={formStyle.field}>
                    <label className={formStyle.label} htmlFor="group">Group</label>
                    <select name="group" id="group">
                        <option value={'null'}>No group</option>
                        { groups.map(({ id, title }) => 
                            <option key={id} value={id}>{title}</option>
                        )}
                    </select>
                </div>

                <input className={[buttonStyle.button, buttonStyle.submit].join(" ")} type="submit" value="Create" />
            </form>
        </React.Fragment>
    );
}

const validationOptions = {
    fields: ['title', 'description'],
    validate: validate
}

export default FormValidation(CreateTodo, validationOptions);