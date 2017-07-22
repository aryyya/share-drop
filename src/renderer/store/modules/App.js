const state = {
  activePage: '',
  hostname: '',
  isConnected: false,
  showModal: false,
  modalConfig: {
    mainText: '',
    subText: '',
    confirmText: '',
    cancelText: '',
    confirmCallback: () => {},
    cancelCallback: () => {}
  }
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
  },
  SET_SHOW_MODAL (state, showModal) {
    state.showModal = showModal
  },
  SET_MODAL_CONFIG (state, modalConfig) {
    state.modalConfig = modalConfig
  }
}

export default {
  state,
  mutations
}
