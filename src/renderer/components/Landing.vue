<template>
  <div class="landing">
    <div class="landing__left-column">
      <div class="landing__header">
        <div class="landing__header-icon-wrapper">
          <img src="src/renderer/assets/logo-icon.svg" class="landing__header-icon">
        </div>
        <div class="landing__title-wrapper">
          <h1 class="landing__title">ShareDrop</h1>
        </div>
      </div>
      <nav-bar></nav-bar>
    </div>
    <div class="landing__right-column">
      <transition name="fade" mode="out-in">
        <component class="landing__right-column-component" :is="activePage"></component>
      </transition>
      <status></status>
    </div>
    <modal></modal>
  </div>
</template>

<script>
export default {
  mixins: require('./mixins.js'),
  components: {
    About: require('./About.vue'),
    Hosts: require('./Hosts.vue'),
    Modal: require('./Modal.vue'),
    NavBar: require('./NavBar.vue'),
    Settings: require('./Settings.vue'),
    Status: require('./Status.vue')
  }
}
</script>

<style scoped>
.landing {
  display: flex;
  height: 100vh;
}
.landing__left-column {
  background-color: #323644;
  color: #ffffff;
  width: 240px;
}
.landing__right-column {
  background-color: #ffffff;
  width: 480px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.landing__right-column-component {
  height: 100%;
  position: relative;
}
.landing__header {
  background-color: #3CA1CF;
  box-shadow: inset -4px 0 9px -7px black;
  display: flex;
  align-items: center;
}
.landing__header-icon-wrapper {
  padding: 2.35rem 1.95rem;
  background-color: #2388B6;
  box-shadow: inset -2px 0 9px -7px black;
}
.landing__header-icon {
  width: 1.7rem;
}
.landing__title-wrapper {
  flex: 1;
}
.landing__title {
  font-weight: 300;
  font-size: 1.15rem;
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
