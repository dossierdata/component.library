<template>
  <a-card :title="title" :loading="loading" :bordered="true">
    <slot />
  </a-card>
</template>

<script>

export default {
  name: 'DDCard',
  components: {},
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style>
.ant-card {
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease-in-out;
  border: 0;
}

.ant-card-head {
  border: 0;
  padding: 0 1.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
}
.ant-card-head-title {
  padding: 8px 0;
  align-items: center;
}

.ant-card-body {
  padding: 1.5rem;
}
</style>
