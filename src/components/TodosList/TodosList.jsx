import React from 'react';

import styles from './TodosList.css';
import TodosListItem from '../TodosListItem/TodosListItem';
import TodoDetail from '../TodoDetail/TodoDetail';

const TodosList = (props) => {
    const { todos, activeTodo, openModal, visibilityTodo, handleToggle, todo, showTodo, deleteTodo, filter } = props;

    return (
        <div className={styles.todoSection}>
            <div className={styles.todoList}>
                <div className={styles.todoAction}>
                    <button
                        className={styles.todoButton}
                        onClick={() => openModal('ADD_TODO_MODAL')}
                    >
                        Add Todo
                </button>
                </div>
                <div>
                    <ul className={styles.filterTodo}>
                        <li className={filter.visibleTodo === 'ALL' ? styles.active: ''} onClick={() => visibilityTodo('ALL')}>All</li>
                        <li className={filter.visibleTodo === 'COMPLETED' ? styles.active: ''} onClick={() => visibilityTodo('COMPLETED')}>Completed</li>
                        <li className={filter.visibleTodo === 'UNCOMPLETED' ? styles.active: ''} onClick={() => visibilityTodo('UNCOMPLETED')}>Uncompleted</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.todoList}>
                        { todos.length > 0 ? todos.map(({ id, title, completed }) =>
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
                        ): 
                        <li>No todos</li>
                    }
                    </ul>
                </div>
            </div>
            <div className={styles.activeTodo}>
            <div className={styles.todoViewTitle}>Todo View</div>
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