import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateTodo from '../components/TodosList/Forms/CreateTodo';
import EditTodo from '../components/TodosList/Forms/EditTodo';

import { getGroups } from '../actions/group';
import * as todoActions from '../actions/todo';
import * as modalActions from '../actions/modal';

import { generateID } from '../helpers/helpers';

class TodoFormContainer extends Component {

    handleAddSumbit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        let data = {}

        formData.forEach((value, key) => {
            data[key] = value;
        })

        data.id = generateID();
        data.groupId = data.group;

        delete(data.group);

        this.props.addTodo(data);
    }

    handleUpdateSumbit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        let data = {}

        formData.forEach((value, key) => {
            data[key] = value;
        })

        data.groupId = data.group;

        delete(data.group);

        this.props.editTodo(data);
    }

    getTodoData = () => {
        let todoId = this.props.modal.modalProps.todoId;

        if (!todoId) return;
   
        return this.props.todos.find((todo) => todo.id === todoId);
    }

    renderTemplate(modalType) {
        let action = modalType.split('_')[0],
            groups = this.props.groups;

        switch (action) {
            case ('ADD'): return <CreateTodo handleSubmit={this.handleAddSumbit} groups={groups} {...this.props}></CreateTodo>
            case ('EDIT'): return <EditTodo handleSubmit={this.handleUpdateSumbit} todoData={this.getTodoData()} {...this.props}></EditTodo>
        }
    }

    render() {
        return (
            <div>
                {this.renderTemplate(this.props.modal.modalType)}
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (data) => {dispatch(todoActions.addTodo(data))},
        editTodo: (data) => {dispatch(todoActions.editTodo(data))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFormContainer);