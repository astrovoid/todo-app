import React, { Component } from "react";

const CreateGroup = (props) => {
    return (
        <div>
            <h3>Create group</h3>
            <form onSubmit={props.handleSubmit}>
                <input id="title" name="title" type="text" />
                <input id="description" name="description" type="text" />
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

export default CreateGroup;
