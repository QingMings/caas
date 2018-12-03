<template>
  <div class="home">
    <top-pane></top-pane>
    <viewer/>
    <bottom-pane></bottom-pane>
  </div>
</template>

<script>
// @ is an alias to /src
import Viewer from '@/components/Viewer.vue';
import TopPane from '@/components/topPane.vue';
import LeftPane from '@/components/leftPane';
import BottomPane from "@/components/bottomPane";

export default {
  name: 'home',
  components: {
    BottomPane,
    LeftPane,
    TopPane,
    Viewer
  }
};
</script>
