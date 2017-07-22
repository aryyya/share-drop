<template>
  <div class="nav-bar">
    <div class="nav-bar__items" v-for="(item, index) in items">
      <div class="nav-bar__item" :class="{'nav-bar__item--selected': item.isSelected}" @click="item.name === 'Quit' ? quit() : selectItem(index)">
        <div class="nav-bar__item-icon-wrapper">
          <img class="nav-bar__item-icon" :src="'src/renderer/assets/' + item.icon">
        </div>
        <div class="nav-bar__item-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'Hosts', icon: 'hosts-icon.svg', isSelected: true },
        { name: 'Settings', icon: 'settings-icon.svg', isSelected: false },
        { name: 'About', icon: 'about-icon.svg', isSelected: false },
        { name: 'Quit', icon: 'quit-icon.svg', isSelected: false }
      ],
      selected: {}
    }
  },
  methods: {
    selectItem (index) {
      this.items.forEach(item => (item.isSelected = false))
      this.selected = this.items[index]
      this.selected.isSelected = true
      this.$store.commit('SET_ACTIVE_PAGE', this.selected.name)
    },
    quit () {
      const this_ = this
      this.$store.commit('SET_MODAL_CONFIG', {
        subText: 'Really quit ShareDrop?',
        confirmText: 'Quit',
        cancelText: 'Cancel',
        confirmCallback () {
          require('electron').remote.getCurrentWindow().close()
        },
        cancelCallback () {
          this_.$store.commit('SET_SHOW_MODAL', false)
        }
      })
      this.$store.commit('SET_SHOW_MODAL', true)
    }
  },
  created () {
    this.selectItem(0)
  }
}
</script>

<style scoped>
.nav-bar__item {
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: inset -5px 0 9px -7px black;
}
.nav-bar__item--selected {
  background-color: #1F2433;
}
.nav-bar__item:hover {
  cursor: pointer;
  background-color: #1F2433;
}
.nav-bar__item-name {
  text-align: center;
  flex: 1;
  opacity: 0.65;
}
.nav-bar__item-icon-wrapper {
  padding: 1.95rem;
  background-color: #252937;
  box-shadow: inset -2px 0 9px -7px black;
}
.nav-bar__item--selected .nav-bar__item-icon-wrapper {
  background-color: #121726;
}
.nav-bar__item:hover .nav-bar__item-icon-wrapper {
  background-color: #121726;
}
.nav-bar__item-icon {
  width: 1.7rem;
  position: relative;
  top: -1px;
  opacity: 0.65;
}
.nav-bar__item:hover .nav-bar__item-icon,
.nav-bar__item:hover .nav-bar__item-name,
.nav-bar__item--selected .nav-bar__item-icon,
.nav-bar__item--selected .nav-bar__item-name {
  opacity: 1;
}
</style>
