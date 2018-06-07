const ADD_GROUP = 'ADD_GROUP';
const EDIT_GROUP = 'EDIT_GROUP';
const DELETE_GROUP = 'DELETE_GROUP';
const TOGGLE_GROUP = 'TOGGLE_GROUP';
const GET_GROUPS = 'GET_GROUPS';
const GET_GROUP = 'GET_GROUP';

export function getGroup(id) {
    return {
        type: GET_GROUP,
        payload: id
    }
}

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

export function deleteGroup(id) {
    return {
        type: DELETE_GROUP,
        payload: id
    }
}

export function getGroups () {
    return {
        type: GET_GROUPS
    }
}