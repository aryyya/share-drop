<template>
  <transition name="fade">
    <div v-show="showModal" class="modal">
      <div class="modal__content">
        <p class="modal__main-text" v-show="mc.mainText">{{ mc.mainText }}</p> 
        <p class="modal__sub-text" v-show="mc.subText">{{ mc.subText }}</p>
        <div class="modal__buttons-wrapper" v-show="mc.confirmText || mc.cancelText">
          <button class="modal__button modal__button--confirm" v-if="mc.confirmText && mc.confirmCallback" @click="mc.confirmCallback">{{ mc.confirmText }}</button>
          <button class="modal__button modal__button--cancel" v-if="mc.cancelText && mc.cancelCallback" @click="mc.cancelCallback">{{ mc.cancelText }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  mixins: require('./mixins.js'),
  computed: {
    mc () {
      return this.modalConfig
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100vw;
  height: 100vh;
  z-index: 999;
}
.modal--hidden {
}
.modal__content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-weight: 300;
  padding: 0 5rem;
}
.modal__text {
}
.modal__main-text {
  font-weight: 300;
  font-size: 1.25rem;
}
.modal__button {
  font-size: 1.15rem;
  font-weight: 300;
  border-radius: 2.5px;
  border: none;
  margin: 0;
  padding: 0.5rem 0.75rem;
  color: white;
  width: 7rem;
}
.modal__button:focus {
  outline: 0;
}
.modal__button:hover {
  cursor: pointer;
}
.modal__button--confirm {
  background-color: #00D742;
}
.modal__button--cancel {
  background-color: #FF3541;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
