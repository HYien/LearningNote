// import { createStore } from 'vuex'
import { createStore } from './mini-vuex'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  getters: {
    double(state) {
      return state.count * 2
    }
  },
  mutations: {
    add (state) {
      state.count++
    }
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 100);
    }
  }
})

export default store