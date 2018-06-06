import React, { Component } from 'react';

import styles from './Modal.css'

class Modal extends Component {
    render() {
        let closeModal = this.props.closeModal;

        return (
            <div className={styles.modalBackground}>
                <div className={styles.modal}>
                    {this.props.children}
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