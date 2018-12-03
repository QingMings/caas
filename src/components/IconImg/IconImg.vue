<template>
    <img :class="classes" :src="url" :style="styles" @click="handleClick" />
</template>

<script>
const prefixCls = 'ivu-icon';
export default {
  name: 'IconImg',
  props: {
    size: [Number, String],
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`
      ];
    },
    styles() {
      const style = {};

      if (this.size) {
        style['font-size'] = `${this.size}px`;
      }

      if (this.color) {
        style.color = this.color;
      }

      return style;
    }
  }

};
</script>

<style scoped>

</style>
