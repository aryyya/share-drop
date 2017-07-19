<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'share-drop'
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
