<template>
  <div class="nav-bar">
    <div class="nav-bar__items" v-for="(item, index) in items">
      <div class="nav-bar__item" :class="{'nav-bar__item--selected': item.isSelected}" @click="item.name === 'Quit' ? quit() : selectItem(index)">
        <img class="nav-bar__item-icon" :src="'src/renderer/assets/' + item.icon">
        <span class="nav-bar__item-name">{{ item.name }}</span>
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
    },
    quit () {
      require('electron').remote.getCurrentWindow().close()
    }
  }
}
</script>

<style scoped>
.nav-bar__items {
}
.nav-bar__item {
  padding: 1.95rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: left;
  filter: brightness(0.65);
}
.nav-bar__item--selected {
  background-color: #1F2433;
  filter: brightness(1);
}
.nav-bar__item:hover {
  cursor: pointer;
  background-color: #1F2433;
  filter: brightness(1);
}
.nav-bar__item-name {
  margin-left: 1.25rem;
}
.nav-bar__item-icon {
  width: 1.7rem;
  position: relative;
  top: -1px;
}
</style>
