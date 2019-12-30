import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Mutations from './mutations'
// import MutationsType from './mutations-type'
import Getters from './getters'
import Actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...State
  },
  mutations: {
    ...Mutations
  },
  actions: {
    ...Actions
  },
  modules: {
  },
  getters: {
    ...Getters
  }
})
