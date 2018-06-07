import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from '../actions/modal';
import { showTodo, deleteTodo } from '../actions/todo';

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

    render() {
        return (
            <div>
                <TodosList activeTodo={this.state.activeTodo} showTodo={this.showTodo} {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => state;

let mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modalType, modalProps) => dispatch(modalActions.openModal(modalType, modalProps)),
        editTodo: () => dispatch(),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);