import React, { Component } from 'react';

import GroupsListItem from '../GroupsListItem/GroupsListItem';

import styles from './GroupsList.css';

const GroupsList = (props) => {
    let openModal = props.openModal;
    
    return (
        <div>
            <div className={styles.groupAction}>
            <button
                className={styles.groupsButton}
                onClick={() => openModal('ADD_GROUP_MODAL')}
            >
                Add group
            </button>
            </div>
            <div className="groups">
                <ul className="groups-list">
                {props.groups.map(({id, title, description}) => 
                    <GroupsListItem
                        key={id} 
                        id={id}
                        title={title} 
                        description={description}
                        
                        openModal={props.openModal}
                        />)
                }
                </ul>
            </div>
           
        </div>
    );
}

export default GroupsList;


{/* <div className={styles.groupsList}>
<ul className="default-groups">
    <li>All Notes</li>
    <li>Completed</li>
    <li>Uncompleted</li>
</ul>
</div> */}