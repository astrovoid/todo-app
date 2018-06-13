const initialState = {
    filterTodoByGroup: null,
    visibleTodo: 'ALL'
};

const filter = (state = initialState, action) => {
    switch(action.type){
        case('FILTER_BY_GROUP'):
            return Object.assign({}, state, {
                filterTodoByGroup: action.payload
            })
        case('FILTER_BY_COMPLETED'):
            return Object.assign({}, state, {
                visibleTodo: action.payload
            })
        default:
            return state;
    }
}

export default filter;