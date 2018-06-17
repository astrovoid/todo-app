import React, { Component } from 'react';

import styles from './Main.css';

import GroupContainer from '../../containers/GroupContainer';
import TodoContainer from '../../containers/TodoContainer';
import ModalManager from '../../containers/ModalManager';

class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                <GroupContainer className={styles.groups}/>
                <TodoContainer />
                <ModalManager />
            </div>
        );
    }
}

export default Main;