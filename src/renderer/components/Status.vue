<template>
  <div class="status">
    <span class="status__hostname">
      {{ hostname }}
    </span>
    <label class="status__invisible-mode-wrapper">
      <input class="status__invisible-mode-checkbox" type="checkbox" name="status__invisible-mode-checkbox" v-model="invisibleMode"> 
      <span class="status__invisible-mode-text" :class="{'status__invisible-mode-text--enabled': invisibleMode}">hide on network</span>
      <img class="status__invisible-mode-help" src="src/renderer/assets/help-icon.svg" @click="help">
    </label>
  </div>
</template>

<script>
const os = require('os')

export default {
  data () {
    return {
      invisibleMode: false
    }
  },
  computed: {
    hostname () {
      return this.$store.state.App.hostname
    }
  },
  methods: {
    help (event) {
      event.preventDefault()
      window.alert('Enable the "hide on network" option to stay invisible to other ShareDrop users. You can still see and send files to other ShareDrop hosts on the network.')
    }
  },
  created () {
    this.$store.commit('SET_HOSTNAME', os.hostname())
  }
}
</script>

<style scoped>
.status {
  background-color: #eee;
  padding: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #3CA1CF;
  font-weight: 300;
}
.status__invisible-mode-wrapper {
  display: flex;
  align-items: center;
}
.status__invisible-mode-text {
  opacity: 0.5;
  margin-left: 0.25rem;
}
.status__invisible-mode-text--enabled {
  opacity: 1;
}
.status__invisible-mode-help {
  width: 1.25rem;
  opacity: 0.65;
  margin-left: 1.15rem;
}
.status__invisible-mode-help:hover {
  cursor: pointer;
}
</style>
