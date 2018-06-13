import React from 'react';

import styles from './TodosList.css';
import TodosListItem from '../TodosListItem/TodosListItem';
import TodoDetail from '../TodoDetail/TodoDetail';

const TodosList = (props) => {
    const { todos, activeTodo, openModal, visibilityTodo, handleToggle, todo, showTodo, deleteTodo} = props;

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
                <ul>
                    <li onClick={() => visibilityTodo('ALL')}>All</li>
                    <li onClick={() => visibilityTodo('COMPLETED')}>Completed</li>
                    <li onClick={() => visibilityTodo('UNCOMPLETED')}>Uncompleted</li>
                </ul>
            </div>
            <div>
                <ul className="todoList">
                    {todos.map(({ id, title, completed }) =>
                        <TodosListItem
                            key={id}
                            id={id}
                            title={title}

                            edit={todo}
                            completed={completed}
                            
                            showTodo={showTodo}
                            deleteTodo={deleteTodo}
                            handleToggle={handleToggle}

                            openModal={openModal}
                        />
                    )}
                </ul>
            </div>
            <div>
                {activeTodo ?
                    <TodoDetail data={activeTodo} /> :
                    <div>
                        <del>Vue.js </del>
                        React is the best framework ever
                    </div>
                }
            </div>
        </div>

    );
}

export default TodosList;