import React, { Component } from 'react';

import styles from './TodosList.css';
import TodosListItem from '../TodosListItem/TodosListItem';


const TodosList = (props) => {
    let openModal = props.openModal;

    return (
        <div className={styles.notesList}>
            <div className={styles.notesAction}>
                <button
                    className={styles.notesButton}
                    onClick={() => openModal('ADD_NOTE_MODAL')}
                >
                    Add Todo
            </button>
            </div>
            <div>
                <ul className="todoList">
                    {props.todos.map(({ id, title }) =>
                        <TodosListItem id={id} title={title}/>
                    )}
                </ul>
            </div>

        </div>
    );
}

export default TodosList;