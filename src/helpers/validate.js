const validate = fields => {
    for (let field in fields) {
        fields[field].error = ''
    }

    let title = fields.title,
        description = fields.description;

    if (!title.value) {
        title.error = 'Required'
    } else if (title.value.length > 20) {
        title.error = 'Title must be less than 20 characters'
    }

    if (!description.value) {
        description.error = 'Required'
    }

    return fields;
}

export default validate;