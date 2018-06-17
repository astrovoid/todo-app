import { ADD_GROUP, EDIT_GROUP } from '../actions/group';

const initialState = [];

const groups = (state = initialState, action) => {
    switch(action.type) {
        case ADD_GROUP:
            return [...state, action.payload];
        case EDIT_GROUP:
            return state.map((group) => {
                if (group.id !== action.payload.id) return group;
                
                return Object.assign({}, group, {
                    title: action.payload.title,
                    description: action.payload.description
                })
            })
        default:
            return state;
    }   
}

export default groups;
