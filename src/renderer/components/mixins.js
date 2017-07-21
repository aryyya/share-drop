module.exports = [{
  methods: {
    shortenText (text, length) {
      return text.length > length ? `${text.substring(0, length)}...` : text
    }
  },
  computed: {
    isConnected () {
      return this.$store.state.App.isConnected
    }
  }
}]
