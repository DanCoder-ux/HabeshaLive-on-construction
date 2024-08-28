<script setup>
import navbar from './components/navbar.vue';
import hero from './components/hero.vue';
import livenow from './components/livenow.vue';
import { Smoothie } from "vue-smoothie";
import { Weight } from 'lucide-vue-next';
import Creditexp from './components/Creditexp.vue';
import faq from './components/faq.vue';
import last from './components/last.vue';
import follower from './components/follower.vue';
import Register from './components/Register.vue';
import login from './components/login.vue';
import scrolldownind from './components/scrolldownind.vue';

</script>

<template>
  <Smoothie class="container p-0" :Weight="0.10" id="smoothi">
    <scrolldownind />
    <login />
    <Register />
    <follower />
    <navbar />
    <hero />
    <livenow />
    <Creditexp />
    <faq />
    <last />
  </Smoothie>
  
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden !important;
  position: relative;
}
</style>
