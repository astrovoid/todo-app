import  React, { Component } from 'react';

const EditGroup = () => {
    return (
        <div>
            <h3>Create group</h3>
            <form>
                <input id="title" name="title" type="text" />
                <input id="description" name="description" type="text" />
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};

export default EditGroup;