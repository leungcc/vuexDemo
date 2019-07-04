import Vue from 'vue'
import Vuex from 'vuex'
import * as MUTATION from '@/vuex/mutation-types';

Vue.use(Vuex)

export default new Vuex.Store({
  // -- 整个应用组件都能共享的状态------------------
  state: {
    token: Math.random()*Math.pow(10, 16),      // token
    surname: '',                                // 姓
    name: ''                                    // 名
  },
  // -- 有依赖 state 的变化（类似 computed）----------------
  getters: {
    fullname(state, getters) {
      return state.surname + ' ' + state.name;
    }
  },
  // -- state 只能通过 Mutation 进行修改 ----------------
  mutations: {
    [MUTATION.CHANGE_SURNAME](state, payload) {
      state.surname = payload.surname;
    },
    [MUTATION.CHANGE_NAME](state, payload) {
      state.name = payload.name;
    },
  },
  actions: {

  }
})
