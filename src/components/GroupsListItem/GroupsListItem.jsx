import React from 'react';

import styles from './GroupsListItem.css';

import materialIcons from 'material-icons';

const GroupsListItem = (props) => {
    const { 
        id, 
        title, 
        description, 
        filterByGroup, 
        openModal, 
        active } = props;

    return (
        <li className={[styles.group, active ? styles.active: null].join(" ")}>
            <div
                className={styles.info} 
                onClick={() => filterByGroup(id)}>
                <div>
                    <span className={styles.infoTitle}>Title: </span>
                    {title}
                </div>
                <div>
                    <span className={styles.infoTitle}>Description: </span>
                    {description}
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.edit} onClick={() => openModal('EDIT_GROUP_MODAL', { groupId: id })}>
                    <i className={materialIcons['material-icons']}>
                        {'edit'}
                    </i>
                </button>
            </div>
        </li>
    );
}


export default GroupsListItem;