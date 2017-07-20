const state = {
  activePage: '',
  hostname: ''
}

const mutations = {
  SET_ACTIVE_PAGE (state, activePage) {
    state.activePage = activePage
  },
  SET_HOSTNAME (state, hostname) {
    state.hostname = hostname
  },
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
