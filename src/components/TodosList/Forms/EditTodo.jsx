import React, { Component } from 'react';

const EditNote = ({ handleSubmit, todoData, groups }) => {  
    return (
        <div>
            <h3>Edit todo</h3>
            <form onSubmit={handleSubmit}>
                <input id="id" name="id" type="hidden" value={todoData.id}/>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" defaultValue={todoData.title} />

                <label htmlFor="description">Description</label>
                <input id="description" name="description" type="text" defaultValue={todoData.description}/>

                <br />
                <label htmlFor="group">Group</label>
                <select name="group" id="group" defaultValue={todoData.groupId}>
                    {groups.map(({ id, title}) => 
                            <option key={id} value={id}>{title}</option>
                    )}
                </select>

                <br />
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

export default EditNote;