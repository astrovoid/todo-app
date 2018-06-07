import React, { Component } from 'react';

const TodosListItem = (props) => {
    const id = props.id;

    return (
        <li style={{ padding: '10px', borderBottom: '1px solid #000', cursor: 'pointer' }} onClick={() => props.showTodo(props.id)}>
            {props.title}
            <button onClick={() => props.openModal('EDIT_TODO_MODAL', { todoId: id })}>Edit</button>
            <button onClick={() => props.deleteTodo(id)}>X</button>
        </li>
    )
};

export default TodosListItem;