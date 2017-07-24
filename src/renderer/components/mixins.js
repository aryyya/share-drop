module.exports = [{
  methods: {
    shortenText (text, length) {
      return text.length > length ? `${text.substring(0, length)}...` : text
    }
  },
  computed: {
    activePage () {
      return this.$store.state.App.activePage
    },
    isConnected () {
      return this.$store.state.App.isConnected
    },
    showModal () {
      return this.$store.state.App.showModal
    },
    modalConfig () {
      return this.$store.state.App.modalConfig
    },
    hostname () {
      return this.$store.state.App.hostname
    },
    confirmOnQuit () {
      return this.$store.state.App.confirmOnQuit
    }
  }
}]
