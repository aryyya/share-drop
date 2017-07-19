<template>
  <div class="landing">
    <div class="landing__left-column">
      <div class="landing__header">
        <h1 class="landing__title">share-drop</h1>
      </div>
      <nav-bar></nav-bar>
    </div>
    <div class="landing__right-column">
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.landing {
  display: flex;
  height: 100vh;
}
.landing__left-column {
  flex: 0.5;
  background-color: #323644;
  color: #ffffff;
}
.landing__right-column {
  flex: 1;
  background-color: #ffffff;
}
.landing__header {
  background-color: #3CA1CF;
}
.landing__title {
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
  padding: 1.75rem;
}
</style>
