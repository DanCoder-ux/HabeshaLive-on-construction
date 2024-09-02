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
import LivePage from './components/LivePage.vue';
import { livepage } from './components/state';
import buycredit from './components/buycredit.vue';
import habeshachat from './components/habeshachat.vue';
import Aboutus from './components/Aboutus.vue';

</script>

<template>
  <Smoothie class="cont p-0" :Weight="0.10" id="smoothi">
    <Aboutus />
    <habeshachat />
    <buycredit />
    <LivePage />
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
.cont {
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden !important;
  position: relative;
}
</style>
