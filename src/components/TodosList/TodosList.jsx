import React, { Component } from 'react';

import styles from './TodosList.css';
import TodosListItem from '../TodosListItem/TodosListItem';
import TodoDetail from '../TodoDetail/TodoDetail';

const TodosList = (props) => {
    let openModal = props.openModal,
        activeTodo = props.activeTodo;

    return (
        <div className={styles.notesList}>
            <div className={styles.notesAction}>
                <button
                    className={styles.notesButton}
                    onClick={() => openModal('ADD_TODO_MODAL')}
                >
                    Add Todo
            </button>
            </div>
            <div>
                <ul className="todoList">
                    {props.todos.map(({ id, title }) =>
                        <TodosListItem
                            key={id}
                            id={id}
                            title={title}
                            deleteTodo={props.deleteTodo}
                            edit={props.todo}

                            showTodo={props.showTodo}
                            openModal={props.openModal}
                        />
                    )}
                </ul>
            </div>
            <div>
                { activeTodo ? 
                    <TodoDetail data={activeTodo}/>: 
                    <div><del>Vue.js</del> React is the best framework ever</div>    
                }
            </div>
        </div>

    );
}

export default TodosList;