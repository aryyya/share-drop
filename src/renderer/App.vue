<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const { ipcRenderer } = require('electron')

export default {
  name: 'share-drop',
  mixins: require('./components/mixins.js'),
  data () {
    return {
      enabled: true
    }
  },
  created () {
    const isConnectedRequest = () => ipcRenderer.send('is-connected')
    ipcRenderer.on('is-connected-reply', (event, arg) => {
      this.$store.commit('SET_IS_CONNECTED', arg)
      if (this.enabled) {
        window.setTimeout(isConnectedRequest, 1000)
      }
    })
    isConnectedRequest()
  },
  beforeDestroy () {
    this.enabled = false
  }
}
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  -webkit-app-region: drag;
  user-select: none;
}
body:hover {
  cursor: default;
}
</style>
