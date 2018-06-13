const initialState = []

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]

        case 'EDIT_TODO':
            return state.map((todo) => {
                if (todo.id !== action.payload.id) return todo;

                return Object.assign({}, todo, {
                    title: action.payload.title,
                    description: action.payload.description,
                    groupId: action.payload.groupId
                })
            })
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id !== action.payload) return todo;

                return Object.assign({}, todo, {
                    completed: !todo.completed
                })
            })

        case 'DELETE_TODO':
            const index = state.findIndex(todo => todo.id === action.payload)

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default:
            return state;
    }
}

export default todos;