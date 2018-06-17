import React, { Component } from 'react';

import styles from './Header.css';

class Header extends Component {    
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.logo}>ToDo App</div>
            </header>
        )
    }
}

export default Header;