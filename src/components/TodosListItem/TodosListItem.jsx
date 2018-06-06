import React, { Component } from 'react';

const TodoListItem = (props) => {
    return (
        <li style={{ padding: '10px', borderBottom: '1px solid #000', cursor: 'pointer' }} >
            {props.title}
            <button>Edit</button>
            <button>X</button>
        </li>
    )
};

export default TodosListItem;