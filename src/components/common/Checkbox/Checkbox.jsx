import React from 'react';
import PropTypes from 'prop-types';

import materialIcons from 'material-icons';

import styles from './Checkbox.css';

const Checkbox = (props) => {
    return (
        <button className={styles.icon} onClick={props.onChange}>
            <i className={materialIcons['material-icons']}>
                { props.checked ? 'check_box': 'check_box_outline_blank'}
            </i>
        </button>
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;