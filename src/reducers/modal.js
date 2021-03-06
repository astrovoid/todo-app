import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal'; 

const initialState = {
    modalType: null,
    modalProps: null
}

const modal = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_MODAL:
            return action.payload
        case CLOSE_MODAL:
            return action.payload
        default:
            return state;
    }   
}

export default modal;