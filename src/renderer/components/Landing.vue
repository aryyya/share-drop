<template>
  <div class="landing">
    <div class="landing__left-column">
      <div class="landing__header">
        <div class="landing__title-wrapper">
          <h1 class="landing__title">ShareDrop</h1>
        </div>
      </div>
      <nav-bar></nav-bar>
    </div>
    <div class="landing__right-column">
      <component class="landing__right-column-component" :is="activePage"></component>
      <status></status>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    About: require('./About.vue'),
    Hosts: require('./Hosts.vue'),
    NavBar: require('./NavBar.vue'),
    Settings: require('./Settings.vue'),
    Status: require('./Status.vue')
  },
  computed: {
    activePage () {
      return this.$store.state.App.activePage
    }
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
}
.landing__title {
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  padding: 2.5rem 0;
}
</style>
