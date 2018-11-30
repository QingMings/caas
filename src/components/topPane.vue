<template>
  <div id="topPane">
    <div id="topMenu">
      <div class="menu-app-logo">
        <img src="../assets/image/top/logo_text2.png">
        <div class="side-toggle">
          <!--<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>-->
          <Icon @click.native="collapsedSider" type="md-menu" size="29"></Icon>
        </div>
      </div>
      <div class="menu-container">
        <!--<div class="menu-button" @click="hello">-->
        <!--<img class="menu-button-icon" src="../assets/image/top/menu/mmanager.png">-->
        <!--<span class="menu-button-text">数据管理</span>-->
        <!--</div>-->
        <div class="main-menu-container">
          <div class="menu-button" v-for="(menu, index) in menus" :key="index"
               @click="changeSubMenu(menu.children)">
            <img class="menu-button-icon" :src="menu.icon">
            <span class="menu-button-text">{{menu.title}}</span>
          </div>
        </div>
        <div class="sub-menu-container">
          <div class="sub-menu-button" v-for="(subMenu, index) in currentSubMenus" :key="index"
               @click="subMenuHandle(subMenu.name)">
            <div class="sub-menu-btn-wrapper">
            <img class="sub-menu-icon" :src="subMenu.icon">
            <span class="sub-menu-button-text">{{subMenu.title}}</span>
            </div>
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
      menus: [],
      currentSubMenus: []
    };
  },
  methods: {
    /**
     * @desc 改变子菜单
     * @param subMenus Array
     */
    changeSubMenu(subMenus) {
      this.currentSubMenus = subMenus;
    },
    subMenuHandle(subMenuName) {
      console.info(subMenuName);
    },
    collapsedSider() {
      this.$ipcRenderer.send('collapsed-sider');
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
        _vm.changeSubMenu(_vm.menus[0].children);
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
