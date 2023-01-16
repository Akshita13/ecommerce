<template>
<div class="overflow-hidden h-100 w-100 d-flex flex-column">
  <top-bar></top-bar>
  <router-view/>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from '@/components/common/topbar.vue'
export default defineComponent({
    name:'AppShell',
    components:{
      TopBar
    }
})
</script>

<style>

</style>