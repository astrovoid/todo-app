import React, { Component } from 'react';

const CreateTodo = (props) => {
    return (
        <div>
            <h3>Create todo</h3>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" />

                <label htmlFor="description">Description</label>
                <input id="description" name="description" type="text" />
                <label htmlFor="group">Group</label>
                <select name="group" id="group">
                    {props.groups.map(({ id, title}) => 
                        <option key={id} value={id}>{title}</option>
                    )}
                </select>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

export default CreateTodo;


// handleSubmit(event) {
//     event.preventDefault()
//     const formData = new FormData(event.target);

//     let data = {}

//     formData.forEach((value, key) => {
//         data[key] = value;
//     })

//     data.id = generateID();

//     this.props.addNote(data);