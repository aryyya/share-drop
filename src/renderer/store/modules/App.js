const state = {
  activePage: '',
  hostname: '',
  isConnected: false
}

const mutations = {
  SET_ACTIVE_PAGE (state, activePage) {
    state.activePage = activePage
  },
  SET_HOSTNAME (state, hostname) {
    state.hostname = hostname
  },
  SET_IS_CONNECTED (state, isConnected) {
    state.isConnected = isConnected
  }
}

export default {
  state,
  mutations
}
