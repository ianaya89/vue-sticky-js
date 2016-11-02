<template lang='pug'>
  .container.data-sticky-container
    div(v-s)
      p Sticky Element
</template>

<script>
  import stickyDirectice from '../src/sticky';

  export default {
    name: 'App',

    directives: {
      s: stickyDirectice
    }
  };
</script>

<style lang='scss'>
  .container {
    height: 2000px;
  }
</style>
