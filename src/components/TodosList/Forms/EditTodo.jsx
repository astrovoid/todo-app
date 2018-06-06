import React, { Component } from 'react';

const EditNote = () => {  
    return (
        <div>
            <h3>Edit note</h3>
            <form>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" />

                <label htmlFor="description">Description</label>
                <input id="description" name="description" type="text" />

                <br />
                <label htmlFor="group">Group</label>
                <select name="group" id="group">
                </select>

                <br />
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

export default EditNote;