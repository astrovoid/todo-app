import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openModal } from '../actions/modal';
import { deleteTodo, toggleTodo } from '../actions/todo';
import { filterByCompleted } from '../actions/filter';

import TodosList from '../components/TodosList/TodosList';
class TodoContainer extends Component {
    state = {
        activeTodo: null
    }

    showTodo = (id) => {
        const activeTodo = this.props.todos.find((todo) => todo.id === id);

        this.setState({
            activeTodo: activeTodo
        })
    }

    handleToggle = (id) => {
        this.props.toggleTodo(id)
    }

    render() {
        return (
            <div>
                <TodosList
                    handleToggle={this.handleToggle}
                    activeTodo={this.state.activeTodo}
                    showTodo={this.showTodo}
                    {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        todos: ((state) => {

            const getFilteredTodos = (state, filter) => {
                switch (filter) {
                    case 'ALL':
                        return state;
                    case 'COMPLETED':
                        return state.filter(todo => todo.completed);
        
                    case 'UNCOMPLETED':
                        return state.filter(todo => !todo.completed);
                    default:
                        return state;
                }
            }

            let todosList = []

            if (state.filter.filterTodoByGroup)
                todosList = state.todos.filter((todo) => todo.groupId === state.filter.filterTodoByGroup)
            else
                todosList = state.todos

            todosList =  getFilteredTodos(todosList, state.filter.visibleTodo);

            return todosList;
        })(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modalType, modalProps) => dispatch(openModal(modalType, modalProps)),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        visibilityTodo: (type) => dispatch(filterByCompleted(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);