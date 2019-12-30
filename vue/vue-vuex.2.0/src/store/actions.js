import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODO, DELETE_FINISHED_TODO } from './mutations-type'
export default {
    addTodo: function ({ commit }, todo) {
        commit(ADD_TODO, { todo });
    },

    deleteTodo: function ({ commit }, index) {
        commit(DELETE_TODO, { index });
    },

    selectAllTodo: function ({ commit }, isCheck) {
        commit(SELECT_ALL_TODO, { isCheck });
    },

    deleteFinishedTodo: function ({ commit }) {
        commit(DELETE_FINISHED_TODO);
    }
}