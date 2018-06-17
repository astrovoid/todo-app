import React from 'react';

import styles from './Footer.css'
import materialIcons from 'material-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.info}>
                Made with
                <i className={[materialIcons['material-icons'], styles.icon].join(" ")}>
                    {'favorite'}
                </i>
                for the React.
            </span>
        </footer>
    );
};

export default Footer;