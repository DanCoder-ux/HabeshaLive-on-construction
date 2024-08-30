<script setup>
import { IconCaretDown , IconArrowUpRight } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar  } from '@/components/ui/scroll-area'
import { ref, onMounted, onUnmounted } from 'vue';
import { Smoothie } from "vue-smoothie";

let livepeoplecards = ref([
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    },
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    },
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    },
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    },
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    },
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    },
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    },
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    },
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    },
    {
        img: "../src/assets/liveperson.png",
        name: "Evans White",
        title: "Better with Calculus Than Your Teacher"
    }
])
</script>

<template>
  <div class=" px-10 w-screen h-screen bg-[#d9d9d985] flex flex-col justify-center z-10 mt-0 backdrop-blur-3xl" style="height: calc(100vh - 60px);">
    <h1 class="text-2xl font-bold" style="font-family: 'Onest', sans-serif;">Scroll To Explore</h1>
    <img src="../assets/arrow_to_left_long.svg" alt="">
    <div class="content w-full h-80 flex">
        <div class="info w-52 h-full">
            <h1 class=" text-[90px] font-[800]" style="line-height: 75px; font-family: 'Onest',sans-serif;">Live <span class="text-[#F911B7]">Now</span></h1>
            <img src="../assets/arrow_to_left_short.svg" alt="" class="mt-4">
            <p class="text-sm mt-5" style="font-family: 'Onest', sans-serif;">Scroll to see who is live now in Habesha and get started by interacting with there stream.</p>
            <img src="../assets/scroll_to_left_mouse.svg" alt="" class="w-16 h-16 mt-8">
        </div>
        <div class="w-full flex h-[320px] overflow-x-scroll ml-5 no-scrollbar mr-5">
            <div class="cardlist px-10 pt-5 flex gap-5 w-[3900px] h-[300px]">
                <div v-for="person in livepeoplecards" :key="person.name" class="card w-80 h-full bg-gray-50 rounded-lg p-2 flex flex-col place-items-center cursor-pointer border hover:bg-gray-100 hover:border-gray-300">
                    <img :src="person.img" alt="" class="w-full h-[80%] rounded">
                    <div class="flex h-full w-full place-items-center pl-2">
                        <div class="texts">
                            <h1 class="text-lg font-bold" style="font-family: 'Roboto';">{{person.name}}</h1>
                            <p class="text-sm text-center">{{person.title}}</p>
                        </div>
                        <Button variant="outline" size="icon" class="h-[50px] ml-auto">
                            <IconArrowUpRight stroke={2} />
                        </Button>
                    </div>
                    
                </div>
            </div>
            
        </div>    
        <div class="card w-52 h-[88%] my-5 bg-gray-50 rounded-lg p-2 flex flex-col place-items-center justify-center cursor-pointer border hover:bg-gray-100 hover:border-gray-300 ml-auto">
          <h1 class="text-lg font-bold " style="font-family: 'Roboto';">Browse  More</h1>
      </div>    
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
