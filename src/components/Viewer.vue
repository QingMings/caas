<style scoped>

</style>
<template>
  <div id="viewer" class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="0" :width="250" v-model="isCollapsed">
        <left-pane></left-pane>
      </Sider>
      <Layout>
        <div id="cesium-container"></div>
      </Layout>
    </Layout>
  </div>

</template>

<script>
import 'cesium/Widgets/widgets.css';
import Cesium from 'cesium/Cesium';
import LeftPane from '@/components/leftPane.vue';

export default {
  name: 'Viewer',
  components: { LeftPane },
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    onRequestBack() {
      const _vm = this;
      this.$ipcRenderer.on('collapsed-sider', (data) => {
        console.info("Toggle")
        _vm.$refs.side1.toggleCollapse();
      });
    }
  },
  mounted() {
    this.onRequestBack();
    const viewer = new Cesium.Viewer('cesium-container');
  }
};
</script>
