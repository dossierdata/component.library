<template>
  <a-button :type="type" :disabled="disabled" @click="buttonClick">
    <span v-if="iconComp" class="icon">
      <component :is="iconComp" />
    </span>
    <slot />
  </a-button>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'DDButton',
  components: {
  },
  props: {
    type: {
      type: String,
      required: false,
      default: '',
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    iconComp() {
      if (!this.icon) {
        return null;
      }
      return Vue.component(`mdi-${this.icon}`);
    },
  },
  methods: {
    buttonClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.icon {
  padding-right: 5px;
}
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
