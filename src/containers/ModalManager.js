import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import { openModal, closeModal } from '../actions/modal';

import Modal from '../components/Modal/Modal';
import GroupFormContainer from './GroupFormContainer';
import TodoFormContainer from './TodoFormContainer';

const MODAL_COMPONENTS = {
    'ADD_GROUP_MODAL': GroupFormContainer,
    'EDIT_GROUP_MODAL': GroupFormContainer,
    'ADD_TODO_MODAL': TodoFormContainer,
    'EDIT_TODO_MODAL': TodoFormContainer
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
                <Modal ref={this.setWrapperRef} closeModal={this.props.closeModal}>
                    <ModalTemplate {...this.props} />
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    }
}
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalManager);
