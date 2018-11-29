<template>
  <div id="topPane">
    <div id="topMenu">
      <div class="menu-app-logo"><img src="../assets/image/top/logo_text2.png"></div>
      <div class="menu-container">
        <!--<div class="menu-button" @click="hello">-->
          <!--<img class="menu-button-icon" src="../assets/image/top/menu/mmanager.png">-->
          <!--<span class="menu-button-text">数据管理</span>-->
        <!--</div>-->
        <div class="main-menu-container">
          <div class="menu-button" v-for="(menu, index) in menus" :key="index"
               @click="changeSubMenu(menu.name)">
            <img class="menu-button-icon" :src="menu.icon">
            <span class="menu-button-text">{{menu.title}}</span>
          </div>
        </div>
        <div class="sub-menu-container">
          <div class="sub-menu-button">
            <img  class="sub-menu-icon" src="" alt="">
            <span class="sub-menu-button-text"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */

export default {
  name: 'topPane',
  data() {
    return {
      menus: []
    };
  },
  methods: {
    changeSubMenu(param) {
      this.$ipcRenderer.send('hello', param);
    },
    initMenu() {
      this.$ipcRenderer.send('init-menu');
    },
    onRequestBack() {
      const _vm = this;
      this.$ipcRenderer.on('request-back', (data) => {
        console.info(data);
      });
      this.$ipcRenderer.on('response-menu', (result) => {
        console.info(result);
        _vm.menus = result.data;
      });
    }
  },
  mounted() {
    this.onRequestBack();
    this.initMenu();
  }
};
</script>

<style scoped>

</style>
