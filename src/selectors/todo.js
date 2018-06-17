import { createSelector } from 'reselect'

const todoSelector = state => state.todos;
const visibilityFilter = state => state.filter.visibleTodo;
const todoFilterByGroup = state => state.filter.filterTodoByGroup;

export const getGroupTodo = createSelector(
    [todoFilterByGroup, todoSelector],
    (todoFilterByGroup, todos) => {
        return todoFilterByGroup ? todos.filter(({ groupId }) => groupId === todoFilterByGroup): todos;
    }
)

export const getTodos = createSelector(
    [visibilityFilter, getGroupTodo],
    (visibleTodo, todos) => {
        switch (visibleTodo) {
            case 'ALL':
                return todos;
            case 'COMPLETED':
                return todos.filter(todo => todo.completed);
            case 'UNCOMPLETED':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    }
)