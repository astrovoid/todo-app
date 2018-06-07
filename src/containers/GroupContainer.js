import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import React, { Component } from 'react';

import { getGroups, editGroup } from '../actions/group';
import { openModal } from '../actions/modal';

import GroupsList from '../components/GroupsList/GroupsList';
class GroupContainer extends Component {
    render() {
        return (
            <div>
                <GroupsList {...this.props}></GroupsList>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modalType, modalProps) => dispatch(openModal(modalType, modalProps)),
        editGroup: (data) => dispatch(editGroup(data))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(GroupContainer);