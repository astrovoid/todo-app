import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from '../actions/modal';

import TodosList from '../components/TodosList/TodosList';

let mapStateToProps = (state) => state;

let mapDispatchToProps = (dispatch) => 
    bindActionCreators(modalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);