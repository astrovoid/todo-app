import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openModal } from '../actions/modal';
import { deleteTodo, toggleTodo } from '../actions/todo';
import { filterByCompleted } from '../actions/filter';

import TodoList from '../components/TodoList/TodoList';

import { getTodos } from '../selectors/todo';

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

    render() {
        return (
            <TodoList
                toggleTodo={this.props.toggleTodo}
                activeTodo={this.state.activeTodo}
                showTodo={this.showTodo}
                {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        todos: getTodos(state),
        filter: state.filter
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