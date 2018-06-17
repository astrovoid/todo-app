import React from 'react';

import GroupsListItem from '../GroupsListItem/GroupsListItem';

import styles from './GroupsList.css';
import button from '../../styles/button.css';

const GroupsList = props => {
    const { 
        groups, 
        openModal, 
        filterByGroup, 
        filter } = props;

    function renderGroupsList() {
        return (
            <React.Fragment>
                { groups.length > 0 ?
                    <ul className={styles.groupsList}>
                        {groups.map(({ id, title, description }) =>
                            <GroupsListItem
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                active={filter.filterTodoByGroup === id}

                                openModal={openModal}
                                filterByGroup={filterByGroup}
                            />)
                        }
                    </ul> :
                    <div className={styles.placeholder}>No groups</div>
                }
            </React.Fragment>
        )
    }

    return (
        <div className={styles.groupSection}>
            <div className={styles.header}>
                <h3>Groups</h3>
                <button
                    className={button.addButton}
                    onClick={() => openModal('ADD_GROUP_MODAL')}>
                    Add group
                </button>
            </div>
            <div>
                <div
                    className={styles.allTodos}
                    onClick={() => filterByGroup(null)}>
                    All todos
                </div>
                <div>
                    {renderGroupsList()}
                </div>
            </div>
        </div>
    );
}

export default GroupsList;