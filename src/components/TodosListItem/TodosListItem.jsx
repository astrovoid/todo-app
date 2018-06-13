import React from 'react';

import Checkbox from '../common/checkbox';

import styles from './TodosListItem.css';

const TodosListItem = (props) => {
    const { id, title, completed, showTodo, handleToggle, deleteTodo, openModal } = props;

    return (
        <li styles={styles.todoItem} >
            <Checkbox onChange={() => handleToggle(id)} checked={completed}/>
            <div className={styles.todoTitle}onClick={() => showTodo(id)}>{title}</div>
            <button onClick={() => openModal('EDIT_TODO_MODAL', { todoId: id })}>Edit</button>
            <button onClick={() => deleteTodo(id)}>X</button>
        </li>
    )
};

export default TodosListItem;