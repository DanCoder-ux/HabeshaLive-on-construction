<script setup>
import { livepage } from './state';
import livepageNav from './livepageNav.vue';
import liveplayer from './liveplayer.vue';
</script>

<template>
    <div class="absolute top-0 left-0 w-screen h-screen bg-gray-200 z-40 mt-0 backdrop-blur-3xl" style="height: calc(100vh);" v-show="livepage">
        <livepageNav />
        <liveplayer />
    </div>
</template>

<style scoped>

</style>