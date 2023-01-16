<template>
<div class="overlay"></div>
    <div class="book-detail-wrapper">
        
        <div>overlay!</div>
        <button @click="closeOverlay()">close</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "BookingDetail",
    methods:{
        closeOverlay(){
            this.$emit('closeOverlay')
        }
    }
})
</script>

<style>

</style>