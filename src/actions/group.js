const ADD_GROUP = 'ADD_GROUP';
const EDIT_GROUP = 'EDIT_GROUP';
const REMOVE_GROUP = 'REMOVE_GROUP';
const TOGGLE_GROUP = 'TOGGLE_GROUP';
const GET_GROUPS = 'GET_GROUPS';

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

export function getGroups () {
    return {
        type: GET_GROUPS
    }
}