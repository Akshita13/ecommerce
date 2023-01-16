<template>
   <router-view />
</template>

<script lang="ts">

import { defineComponent } from "vue";
// import "../node_modules/"
export default defineComponent({
  name: 'App',
})
</script>

<style lang='scss'>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
