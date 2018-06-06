const initialState = [];

const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TODOS': 
            return state
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'EDIT_TODO':
            return action.payload
        case 'DELETE_TODO':
            return state;
        default:
            return state;
    }   
}

export default todos;
