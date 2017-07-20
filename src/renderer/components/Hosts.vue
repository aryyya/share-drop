<template>
  <div class="hosts">
    <div class="sonar">
      <div class="sonar__inner"></div>
    </div>
    <div class="host-wrapper">
      <img class="host__image" src="src/renderer/assets/hosts-icon.svg">
      <p class="host__text">Scanning for ShareDrop network hosts...</p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.hosts {
  position: relative;
  width: 100%;
  height: 412px;
}
.sonar {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: #3CA1CF;
  width: 20px;
  height: 20px;
  animation: sonar-outer 2s ease infinite;
}
.sonar__inner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: white;
  animation: sonar 2s ease infinite;
}
@keyframes sonar {
  from {}
  to {
    width: 410px;
    height: 410px;
  }
}
@keyframes sonar-outer {
  from {}
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
