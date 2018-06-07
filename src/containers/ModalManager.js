import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom'

import CreateTodo from '../components/TodosList/Forms/CreateTodo';
import EditTodo from '../components/TodosList/Forms/EditTodo';

import * as modalActions from '../actions/modal';

import Modal from '../components/Modal/Modal';
import GroupFormContainer from './GroupFormContainer';
import TodoFormContainer from './TodoFormContainer';

const MODAL_COMPONENTS = {
    'ADD_GROUP_MODAL': GroupFormContainer,
    'EDIT_GROUP_MODAL': GroupFormContainer,
    'ADD_TODO_MODAL': TodoFormContainer,
    'EDIT_TODO_MODAL': TodoFormContainer,
    'DELETE_GROUP_MODAL': null,
    'DELETE_TODO_MODAL': null
}

class ModalManager extends Component {

    setWrapperRef = (node) => {
        let modalBackgroundRef = ReactDOM.findDOMNode(node);
        this.modalWindowRef = modalBackgroundRef ? modalBackgroundRef.firstChild : null;
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }


    handleClickOutside = (event) => {
        if (this.modalWindowRef && !this.modalWindowRef.contains(event.target)) {
            this.props.closeModal();
        }
    }

    render() {
        let modalType = this.props.modal.modalType;

        if (!modalType) return null;

        const ModalTemplate = MODAL_COMPONENTS[modalType]

        return (
            <React.Fragment>
                <Modal ref={this.setWrapperRef} {...this.props}>
                    <ModalTemplate {...this.props} />
                </Modal>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(modalActions, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalManager);
