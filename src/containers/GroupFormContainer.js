import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateGroup from '../components/GroupsList/Forms/CreateGroup';
import EditGroup from '../components/GroupsList/Forms/EditGroup';

import * as groupActions from '../actions/group';

import { generateID } from '../helpers/helpers';

class GroupFormContainer extends Component {

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

        this.props.addGroup(data);
    }

    handleUpdateSumbit = (event) => {
        event.preventDefault();

        if (!this.form.validateOnSubmit()) return;

        let data = this.transformDataForm(event.target)

        this.props.editGroup(data);
    }

    getGroupData = () => {
        let groupId = this.props.modal.modalProps.groupId;

        if (!groupId) return;

        return this.props.groups.find((group) => group.id === groupId);
    }    


    renderTemplate(modalType) {
        let action = modalType.split('_')[0];

        switch (action) {
            case ('ADD'):
                return <CreateGroup 
                            ref={(node) => {this.form = node}} 
                            handleSubmit={this.handleAddSumbit} 
                            {...this.props}/>
            case ('EDIT'): 
                return <EditGroup 
                            ref={(node) => {this.form = node}} 
                            dataForEdit={this.getGroupData()} 
                            handleSubmit={this.handleUpdateSumbit} 
                            {...this.props}/>
            default: 
                return null;
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

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    }
};

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