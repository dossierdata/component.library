---
to: src/<%= path %>/<%= name %>.vue
---
<template>
  <div>
    Your new awesome component: <%= name %>
  </div>
</template>

<script>
export default {
  name: '<%= name %>',
};
</script>

<style lang="scss" scoped>
@import 'dossierdata-component-library/src/styles/mixins.scss';
</style>
