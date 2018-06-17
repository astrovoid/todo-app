import React from 'react';

import TodosListItem from '../TodoListItem/TodoListItem';
import TodoDetail from '../TodoDetail/TodoDetail';

import styles from './TodoList.css';
import button from '../../styles/button.css';

const TodoList = (props) => {
    const { 
        todos, 
        todo, 
        activeTodo, 
        filter,
        openModal, 
        visibilityTodo, 
        toggleTodo, 
        showTodo, 
        deleteTodo } = props;

    function renderTodoList() {
        return (
            <React.Fragment>
                {todos.length > 0 ?
                    <ul className={styles.todoList}>
                        {todos.map(({ id, title, completed }) =>
                            <TodosListItem
                                key={id}
                                id={id}
                                title={title}

                                edit={todo}
                                completed={completed} 
                                active={activeTodo || {}}  // need to fix this

                                showTodo={showTodo}
                                deleteTodo={deleteTodo}
                                handleToggle={toggleTodo}

                                openModal={openModal}
                            />
                        )}
                    </ul>
                    :
                    <div className={styles.placeholder}>No todos</div>
                }
            </React.Fragment>
        )
    }

    function renderFilters() {
        return (
            <ul className={styles.filterGroup}>
                <li
                    className={[styles.filter, filter.visibleTodo === 'ALL' ? styles.active : ''].join(" ")}
                    onClick={() => visibilityTodo('ALL')}>
                    All
                    </li>
                <li
                    className={[styles.filter, filter.visibleTodo === 'COMPLETED' ? styles.active : ''].join(" ")}
                    onClick={() => visibilityTodo('COMPLETED')}>
                    Completed
                    </li>
                <li
                    className={[styles.filter, filter.visibleTodo === 'UNCOMPLETED' ? styles.active : ''].join(" ")}
                    onClick={() => visibilityTodo('UNCOMPLETED')}>
                    Uncompleted
                    </li>
            </ul>
        )
    }

    return (
        <div className={styles.todoSection}>
            <div className={styles.todos}>
                <div className={styles.header}>
                    <h3>Todos</h3>
                    <button
                        className={button.addButton}
                        onClick={() => openModal('ADD_TODO_MODAL')}
                    >
                        Add Todo
                    </button>
                </div>
                <div>
                    {renderFilters()}
                </div>
                <div>
                    {renderTodoList()}
                </div>
            </div>
            <div className={styles.activeTodo}>
                <div className={styles.todoViewTitle}>Todo View</div>
                {activeTodo ?
                    <TodoDetail data={activeTodo} /> :
                    <div className={styles.placeholder}>
                        <del>Vue.js </del>
                        React is the best framework ever
                    </div>
                }
            </div>
        </div>

    );
}

export default TodoList;