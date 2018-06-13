import { combineReducers } from 'redux'

import modal from './modal';
import groups from './groups';
import todos from './todos';
import filter from './filter';

const rootReducer = combineReducers({
    modal,
    groups,
    todos,
    filter
})

export default rootReducer;
