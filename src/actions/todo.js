export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo({ id, title, description, groupId, completed }) {
    return {
        type: ADD_TODO,
        payload: {
            id,
            title,
            description,
            groupId,
            completed
        }

    }
}

export function editTodo({ id, title, description, groupId }) {
    return {
        type: EDIT_TODO,
        payload: {
            id,
            title,
            description,
            groupId
        }
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}