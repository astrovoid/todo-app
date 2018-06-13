import React from 'react';

import GroupsListItem from '../GroupsListItem/GroupsListItem';

import styles from './GroupsList.css';

const GroupsList = (props) => {
    const { groups, openModal, filterByGroup } = props;
    
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
            <button onClick={() => filterByGroup(null)}>All todos</button>
            <div className="groups">
                <ul className="groups-list">
                { groups.map(({ id, title, description }) => 
                    <GroupsListItem
                        key={id} 
                        id={id}
                        title={title} 
                        description={description}
                        
                        openModal={openModal}
                        filterByGroup={filterByGroup}
                        />)
                }
                </ul>
            </div>
        </div>
    );
}

export default GroupsList;