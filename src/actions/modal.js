export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const ADD_GROUP_MODAL = 'ADD_GROUP_MODAL';
export const EDIT_GROUP_MODAL = 'EDIT_GROUP_MODAL';
export const ADD_NOTE_MODAL = 'ADD_NOTE_MODAL';
export const EDIT_NOTE_MODAL = 'EDIT_NOTE_MODAL';

export const openModal = (modalType) => {
    return {
        type: OPEN_MODAL,
        payload: {
            modalType: modalType,
            opened: true
        }
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
        payload: {
            modalType: null,
            opened: false
        }
    }
}