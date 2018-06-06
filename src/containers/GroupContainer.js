import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import React, { Component } from 'react';

import { getGroups } from '../actions/group';
import { openModal } from '../actions/modal';

import GroupsList from '../components/GroupsList/GroupsList';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modalType) => dispatch(openModal(modalType)),
        getGroups: () => dispatch(getGroups())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(GroupsList);