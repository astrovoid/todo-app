import React from 'react';

import styles from './GroupsListItem.css';

const GroupsListItem = (props) => { 
    const { id, title, description, filterByGroup, openModal} = props;
    
    return (
        <li className={styles.groupsItem} onClick={() => filterByGroup(id)}>
            <div>{title}</div>
            <div>{description}</div>
            <button onClick={() => openModal('EDIT_GROUP_MODAL', { groupId: id })}>Edit</button>
        </li>
    );
}


export default GroupsListItem;