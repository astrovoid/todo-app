import { combineReducers } from 'redux'

import modal from './modal';
import groups from './groups';
import todos from './todos';


const rootReducer = combineReducers({
    modal,
    groups,
    todos
})

export default rootReducer;
