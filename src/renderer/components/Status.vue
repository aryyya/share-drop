<template>
  <div class="status">
    <span class="status__hostname-wrapper">
      <p class="status__hostname">
        {{ shortenText(hostname, 32) }}
      </p>
      <p class="status__connection" :class="{ 'status__connection--online': isConnected }">
        {{ isConnected ? 'online' : 'offline' }}
      </p>
    </span>
    <label class="status__invisible-mode-wrapper">
      <input class="status__invisible-mode-checkbox" type="checkbox" name="status__invisible-mode-checkbox" v-model="invisibleMode"> 
      <span class="status__invisible-mode-text" :class="{'status__invisible-mode-text--enabled': invisibleMode}">hide on network</span>
      <span class="status__invisible-mode-help" @click="help">?</span>
    </label>
  </div>
</template>

<script>
export default {
  mixins: require('./mixins.js'),
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
    this.$store.commit('SET_HOSTNAME', require('os').hostname())
  }
}
</script>

<style scoped>
.status {
  background-color: #eee;
  padding: 0.35rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #3CA1CF;
  font-weight: 300;
}
.status__hostname {
  margin-bottom: 0;
}
.status__connection {
  margin-top: 0;
  font-size: 0.9rem;
  color: #DD2D4A;
}
.status__connection--online {
  color: #45CB85;
}
.status__invisible-mode-wrapper {
  display: flex;
  align-items: center;
}
.status__invisible-mode-text {
  opacity: 0.75;
  margin-left: 0.25rem;
}
.status__invisible-mode-text:hover {
  cursor: pointer;
  opacity: 1;
}
.status__invisible-mode-text--enabled {
  opacity: 1;
}
.status__invisible-mode-help {
  opacity: 0.75;
  margin-left: 1.15rem;
  text-decoration: underline;
}
.status__invisible-mode-help:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
