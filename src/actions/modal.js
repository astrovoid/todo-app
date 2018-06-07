export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const ADD_GROUP_MODAL = 'ADD_GROUP_MODAL';
export const EDIT_GROUP_MODAL = 'EDIT_GROUP_MODAL';
export const ADD_TODO_MODAL = 'ADD_TODO_MODAL';
export const EDIT_TODO_MODAL = 'EDIT_TODO_MODAL';

export const openModal = (modalType, modalProps) => {
    return {
        type: OPEN_MODAL,
        payload: {
            modalType: modalType,
            modalProps: modalProps
        }
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
        payload: {
            modalType: null,
            modalProps: null
        }
    }
}