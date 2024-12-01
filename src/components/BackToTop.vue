<script setup>
import { IconArrowUp } from "@tabler/icons-vue";
import { ref, onMounted, onUnmounted } from "vue";

const showTopButton = ref(false);
const container = document.querySelector(".cont");

const handleScroll = () => container ? showTopButton.value = container.scrollTop > 350 : null

onMounted(() => {
  if (container) {
    container.addEventListener("scroll", handleScroll)
  }
})

onUnmounted(() => {
  if (container) {
    container.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <transition name="fade">
    <a
      v-if="showTopButton"
      href="#top"
      class="bg-pink-500 rounded-full z-20 h-12 w-12 px-2 py-2 outline-none"
    >
      <IconArrowUp stroke-width="{1}" color="white" />
    </a>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.cont {
  scroll-behavior: smooth;
}
</style>
