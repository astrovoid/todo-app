const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const GET_TODOS = 'GET_TODOS';

export function addTodo ({ id, title, description, groupId }) {
    return {
        type: 'ADD_TODO',
        payload: {
            id,
            title,
            description,
            groupId
        }
    }
}

export function getTodos () {
    return {
        type: GET_TODOS
    }
}