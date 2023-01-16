<template>
  <div class="d-flex align-items-center background-img">
    <div>
      <img class="logo" src="../../assets/images/1Rhythm_logo.png" alt="">
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'LoginContainer'
})
</script>

<style>

</style>