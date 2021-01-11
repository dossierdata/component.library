<template>
  <span v-if="iconComp">
    <component :is="iconComp" :title="title" />
  </span>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'DDIcon',
  components: {
  },
  props: {
    name: {
      type: String,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    iconComp() {
      if (!this.name) {
        return null;
      }
      return Vue.component(`mdi-${this.name}`);
    },
  },
};
</script>

<style scoped>
.material-design-icon {
  display: inline-flex;
  align-self: center;
  position: relative;
  height: 1em;
  width: 1em;
}
.material-design-icon > .material-design-icon__svg {
  height: 1em;
  width: 1em;
  fill: currentColor;
  position: absolute;
  bottom: -0.125em;
}
</style>
