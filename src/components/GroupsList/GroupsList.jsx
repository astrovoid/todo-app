import React from 'react';

import GroupsListItem from '../GroupsListItem/GroupsListItem';

import styles from './GroupsList.css';

const GroupsList = props => {
    const { groups, openModal, filterByGroup } = props;
    
    return (
        <div className={styles.groupSection}>
            <div className={styles.groupAction}>
            <button
                className={styles.groupsButton}
                onClick={() => openModal('ADD_GROUP_MODAL')}
            >
                Add group
            </button>
            </div>
            <div className={styles.allTodos} onClick={() => filterByGroup(null)}>All todos</div>
            <div>
                <ul className={styles.groupsList}>
                { groups.length > 0 ? groups.map(({ id, title, description }) => 
                    <GroupsListItem
                        key={id} 
                        id={id}
                        title={title} 
                        description={description}
                        
                        openModal={openModal}
                        filterByGroup={filterByGroup}
                        />)
                : <li>No groups</li>
                }
                </ul>
            </div>
        </div>
    );
}

export default GroupsList;