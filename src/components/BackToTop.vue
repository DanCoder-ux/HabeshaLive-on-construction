<script setup>
import { IconArrowUp } from "@tabler/icons-vue";
import { onMounted, onUnmounted } from "vue"

var showTopButton = true

const scrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}

// const handelScroll = () => showTopButton.value = window.scrollY > 300

// onMounted(() => {
//     window.addEventListener("scroll", handelScroll)
// })

// onUnmounted(() => {
//     window.removeEventListener("scroll", handelScroll)
// })

</script>

<template>
  <button v-show="showTopButton" @click="scrollToTop" class="outline-none border-none bg-pink-500 rounded-full z-20 h-12 w-12 px-2 py-2">
    <IconArrowUp stroke="{2}" color="white"></IconArrowUp>
  </button>
</template>
