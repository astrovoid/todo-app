import React, { Component } from 'react';

import styles from './Modal.css'

import materialIcons from 'material-icons';
class Modal extends Component {
    render() {
        const { 
            closeModal, 
            children } = this.props;
            
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    {children}
                    <button
                        onClick={() => closeModal()}
                        className={styles.close}
                    >
                        <i className={materialIcons['material-icons']}>{'close'}</i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Modal;   