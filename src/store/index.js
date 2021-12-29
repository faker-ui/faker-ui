import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => {
    return {
      busy: false,
      ready: false,
      user: null
    }
  },
  mutations: {
    setBusy: (state,busy) => state.busy = !!busy,
    setReady: (state,ready) => state.ready = !!ready,
    setUser: (state, user) => state.user = user
  },
  actions: {
  },
  modules: {
  }
})
