import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styles from './GroupsListItem.css';
import { openModal } from '../../actions/modal';

const GroupsListItem = (props) => {
    const id = props.id;
    const title = props.title;
    const description = props.description;

    const deleteGroup = props.deleteGroup;
    
    return (
        <div className={styles.groupsItem}>
            <div>{title}</div>
            <div>{description}</div>
            <button onClick={() => props.openModal('EDIT_GROUP_MODAL', { groupId: id })}>Edit</button>
        </div>
    );
}


export default GroupsListItem;