<template>
  <span v-if="iconComp">
    <component :is="iconComp" :title="title" />
  </span>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'DDIcon2',
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
