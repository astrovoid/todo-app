import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateTodo from '../components/TodoList/Forms/CreateTodo';
import EditTodo from '../components/TodoList/Forms/EditTodo';

import { addTodo, editTodo } from '../actions/todo';

import { generateID } from '../helpers/helpers';

class TodoFormContainer extends Component {

    form = null;

    transformDataForm = (form) => {
        const formData = new FormData(form);

        let data = {}

        formData.forEach((value, key) => {
            data[key] = value;
        })
        
        return data;
    }

    handleAddSumbit = (event) => {
        event.preventDefault();

        if (!this.form.validateOnSubmit()) return;

        let data = this.transformDataForm(event.target);

        data.id = generateID();
        data.groupId = data.group;
        
        delete(data.group);

        this.props.addTodo(data);
    }

    handleUpdateSumbit = (event) => {
        event.preventDefault();

        if (!this.form.validateOnSubmit()) return;

        let data = this.transformDataForm(event.target)

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
            case ('ADD'): 
                return <CreateTodo 
                            ref={(node) => this.form = node}
                            handleSubmit={this.handleAddSumbit} 
                            groups={groups} 
                            {...this.props}/>
            case ('EDIT'): 
                return <EditTodo 
                            ref={(node) => this.form = node}
                            handleSubmit={this.handleUpdateSumbit} 
                            dataForEdit={this.getTodoData()} 
                            {...this.props}/>
            default: 
                return null;
        }
    }

    render() {
        const modalType = this.props.modal.modalType;

        return (
            <div>
                {this.renderTemplate(modalType)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        groups: state.groups,
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (data) => { dispatch(addTodo(data)) },
        editTodo: (data) => { dispatch(editTodo(data)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFormContainer);