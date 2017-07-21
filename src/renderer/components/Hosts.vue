<template>
  <div class="hosts">
    <div class="sonar" v-show="isConnected">
      <div class="sonar__inner"></div>
    </div>
    <div class="host-wrapper">
      <img class="host__image" src="src/renderer/assets/hosts-icon.svg">
      <p style="font-size: 0.75rem;margin: 0;">{{ shortenText(hostname, 32) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  mixins: require('./mixins.js'),
  computed: {
    hostname () {
      return this.$store.state.App.hostname
    }
  }
}
</script>

<style scoped>
.sonar,
.sonar__inner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  border-radius: 50%;
}
.sonar {
  width: 20px;
  height: 20px;
  background-color: #3CA1CF;
  animation: sonar-outer 2s ease infinite;
}
.sonar__inner {
  width: 5px;
  height: 5px;
  background-color: white;
  animation: sonar 2s ease infinite;
}
@keyframes sonar {
  to {
    width: 410px;
    height: 410px;
  }
}
@keyframes sonar-outer {
  to {
    width: 412px;
    height: 412px;
    opacity: 0;
  }
}
.host-wrapper {
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  text-align: center;
}
.host__image {
  filter: invert(100%);
  opacity: 0.75;
}
.host__text {
  font-size: 0.75rem;
  font-weight: 300;
  color: #3CA1CF;
}
</style>
