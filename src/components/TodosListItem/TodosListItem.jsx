import React from 'react';

import Checkbox from '../common/checkbox';

const TodosListItem = (props) => {
    const { id, title, completed, showTodo, handleToggle, deleteTodo, openModal } = props;

    return (
        <li style={{ padding: '10px', borderBottom: '1px solid #000', cursor: 'pointer' }} onClick={() => showTodo(id)}>
            <Checkbox onChange={() => handleToggle(id)} checked={completed}/>
            <div>{title}</div>
            <button onClick={() => openModal('EDIT_TODO_MODAL', { todoId: id })}>Edit</button>
            <button onClick={() => deleteTodo(id)}>X</button>
        </li>
    )
};

export default TodosListItem;