<style scoped>

</style>
<template>
  <div id="cesium-container"></div>
</template>

<script>
import 'cesium/Widgets/widgets.css';
import Cesium from 'cesium/Cesium';

export default {
  name: 'Viewer',
  mounted() {
    const viewer = new Cesium.Viewer('cesium-container');
  }
};
</script>
