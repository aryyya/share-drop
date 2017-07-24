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
  },
  confirmOnQuit: true
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
  },
  SET_CONFIRM_ON_QUIT (state, confirmOnQuit) {
    state.confirmOnQuit = confirmOnQuit
  }
}

export default {
  state,
  mutations
}
