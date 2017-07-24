<template>
  <div class="settings">
    <div class="config">
      <div class="config__section config__section--a">
        <div class="config__item">
          <label>
            <input class="config__control config__control--checkbox" type="checkbox">
            <span class="config__text">Start ShareDrop on login</span>        
          </label>
        </div>
        <div class="config__item">
          <label>
            <input class="config__control config__control--checkbox" type="checkbox" v-model="confirmOnQuit" @click="flipConfirmOnQuit">
            <span class="config__text">Confirm on quit</span>
          </label>
        </div>
        <div class="config__item">
          <label>
            <input class="config__control config__control--checkbox" type="checkbox">
            <span class="config__text">Keep window on top</span>
          </label>
        </div>
        <div class="config__item">
          <label>
            <input class="config__control config__control--checkbox" type="checkbox">
            <span class="config__text">Minimize to system tray</span>
          </label>
        </div>
      </div>
      <div class="config__section config__section--b">
        <div class="config__item">
          <span class="config__label">Hostname: </span>
          <input type="text" :placeholder="hostname">
        </div>
        <div class="config__item">
          <span class="config__label">Profile image:</span>
          <input type="file">
        </div>
      </div>
      <div class="config__section config__section--a">
        <div class="config__item">
          <label>
            <input class="config__control config__control--checkbox" type="checkbox">
            <span>Stay hidden on network</span>
          </label>
        </div>
        <div class="config__item">
          <label>
            <span>Color theme:&nbsp;</span>
            <select name="" id="">
              <option value="">Light</option>
              <option value="">Dark</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mixins: require('./mixins.js'),
  methods: {
    flipConfirmOnQuit () {
      this.$store.commit('SET_CONFIRM_ON_QUIT', !this.confirmOnQuit)
    }
  }
}
</script>

<style scoped>
.settings {
}
.config {
  font-size: 0.9rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.config__section {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.config__section--a {
  background-color: #ffffff;
}
.config__section--b {
  background-color: #EEEEEE;
}
.config__item {
}
.config__control {
  margin: 0.35rem 0;
}
.config__control--checkbox {
  margin-right: 0.25rem;
  position: relative;
  top: -2px;
}
.config__label {
  display: inline-block;
  min-width: 6.25rem;
}
</style>
