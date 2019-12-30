import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODO, DELETE_FINISHED_TODO } from './mutations-type'
export default {
    [ADD_TODO]: function (state, { todo }) {
        state.todos.unshift(todo);
    },
    [DELETE_TODO]: function (state, { index }) {
        state.todos.splice(index, 1);
    },
    [SELECT_ALL_TODO]: function (state, { isCheck }) {
        state.todos.forEach(todo => {
            todo.finished = isCheck;
        });
    },
    [DELETE_FINISHED_TODO]: function (state) {
        state.todos = state.todos.filter(todo => !todo.finished);
    },
}