import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styles from './GroupsListItem.css';

class GroupsItem extends Component {
    render() {
        const id = this.props.id;
        const title = this.props.title;
        const description = this.props.description;

        const deleteGroup = this.props.deleteGroup;

        return (
            <div className={styles.groupsItem} onClick={this.props.onClick}>
                <div>{title}</div>
                <div>{description}</div>
                <button onClick={() => deleteGroup(id)}>X</button>
            </div>
        );
    }
}

GroupsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}


export default GroupsItem;