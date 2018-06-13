const ADD_GROUP = 'ADD_GROUP';
const EDIT_GROUP = 'EDIT_GROUP';

export function addGroup ({ id, title, description }) {
    return {
        type: ADD_GROUP,
        payload: {
            description,
            id,
            title
        }
    }
}

export function editGroup({ id, title, description }) {
    return {
        type: EDIT_GROUP,
        payload: {
            id,
            title,
            description
        }
    }
}