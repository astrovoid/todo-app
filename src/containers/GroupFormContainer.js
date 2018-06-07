import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateGroup from '../components/GroupsList/Forms/CreateGroup';
import EditGroup from '../components/GroupsList/Forms/EditGroup';

import * as groupActions from '../actions/group';
import * as modalActions from '../actions/modal';

import { generateID } from '../helpers/helpers';

class GroupFormContainer extends Component {

    handleAddSumbit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        let data = {}

        formData.forEach((value, key) => {
            data[key] = value;
        })

        data.id = generateID();

        this.props.addGroup(data);
    }

    handleUpdateSumbit = (event, id) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        let data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        })

        this.props.editGroup(data);
    }

    getGroupData = () => {
        let groupId = this.props.modal.modalProps.groupId;

        if (!groupId) return;

        return this.props.groups.find((group) => group.id == groupId);
    }    


    renderTemplate(modalType) {
        let action = modalType.split('_')[0];

        switch (action) {
            case ('ADD'): return <CreateGroup handleSubmit={this.handleAddSumbit} {...this.props}></CreateGroup>
            case ('EDIT'): return <EditGroup groupData={this.getGroupData()} handleSubmit={this.handleUpdateSumbit} {...this.props}></EditGroup>
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
        addGroup: (data) => {dispatch(groupActions.addGroup(data))},
        editGroup: (data) => {dispatch(groupActions.editGroup(data))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupFormContainer);