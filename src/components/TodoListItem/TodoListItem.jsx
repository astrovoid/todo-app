import React from 'react';

import Checkbox from '../common/Checkbox/Checkbox';

import styles from './TodoListItem.css';

import materialIcons from 'material-icons';

const TodoListItem = (props) => {
    const { 
        id, 
        title, 
        completed, 
        showTodo, 
        handleToggle, 
        deleteTodo, 
        openModal,
        active } = props;

    return (
        <li className={[styles.todo, active.id === id ? styles.active: null].join(" ")} >
            <div className={styles.checkbox}>
                <Checkbox
                    onChange={() => handleToggle(id)}
                    checked={completed} />
            </div>
            <div
                className={[styles.info, completed ? styles.completed : null].join(" ")}
                onClick={() => showTodo(id)}>{title}
            </div>
            <div className={styles.actions}>
                <button className={styles.edit} onClick={() => openModal('EDIT_TODO_MODAL', { todoId: id })}>
                    <i className={materialIcons['material-icons']}>
                        {'edit'}
                    </i>
                </button>
                <button className={styles.delete} onClick={() => deleteTodo(id)}>
                    <i className={materialIcons['material-icons']}>
                        {'delete'}
                    </i>
                </button>
            </div>
        </li>
    )
};

export default TodoListItem;