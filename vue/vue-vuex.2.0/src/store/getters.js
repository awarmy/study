export default {
    todosCount(state) {
        return state.todos.length;
    },
    finishedCount(state) {
        return state.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0);
    },
    isCheck(state, getters) {
        return getters.finishedCount === getters.todosCount && getters.todosCount > 0;
    }
}