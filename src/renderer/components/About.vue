<template>
  <div class="about">
    <p>ShareDrop is a multi-platform network file sharing app.</p>
    <p class="about__link" @click="openLink('https://github.com/aryyya/share-drop')">https://github.com/aryyya/share-drop</p>
    <p>Powered by Vue.js and Electron.</p>
    <p class="about__copyright">ShareDrop &copy; 2017</p>
  </div>
</template>

<script>
export default {
  methods: {
    openLink (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 2rem;
  text-align: center;
}
.about__link {
  color: #3CA1CF;
  font-weight: 300;
}
.about__link:hover {
  cursor: pointer;
}
.about__copyright {
  font-size: 0.85rem;
}
</style>
