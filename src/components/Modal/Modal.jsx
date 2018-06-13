import React, { Component } from 'react';

import styles from './Modal.css'
class Modal extends Component {
    render() {
        const { closeModal, children } = this.props;
            
        return (
            <div className={styles.modalBackground}>
                <div className={styles.modal}>
                    {children}
                    <button
                        onClick={() => closeModal()}
                        className={styles.closeModal}
                    >
                    X
                    </button>
                </div>
            </div>
        );
    }
}

export default Modal;   