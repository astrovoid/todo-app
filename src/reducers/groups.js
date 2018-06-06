const initialState = [];

const groups = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_GROUPS': 
            return state
        case 'ADD_GROUP':
            return [...state, action.payload];
        case 'EDIT_GROUP':
            return action.payload
        case 'DELETE_GROUP':
            return state;
        default:
            return state;
    }   
}

export default groups;
