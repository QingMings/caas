<template>
  <div class="home">
    <top-pane></top-pane>
    <viewer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Viewer from '@/components/Viewer.vue';
import TopPane from '@/components/topPane.vue';

export default {
  name: 'home',
  components: {
    TopPane,
    Viewer
  }
};
</script>
