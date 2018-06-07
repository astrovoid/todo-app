import  React, { Component } from 'react';

const EditGroup = ({ handleSubmit, groupData}) => {

    return (
        <div>
            <h3>Edit group</h3>
            <form onSubmit={handleSubmit}>
                <input id="id" name="id" type="hidden" value={groupData.id}/>
                <input id="title" name="title" type="text" defaultValue={groupData.title}/>
                <input id="description" name="description" type="text" defaultValue={groupData.description}/>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditGroup;