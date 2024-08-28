<script setup>
import { IconCaretDown , IconArrowUpRight } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar  } from '@/components/ui/scroll-area'
import { ref, onMounted, onUnmounted } from 'vue';
import { Smoothie } from "vue-smoothie";

</script>

<template>
  <div class=" px-10 w-screen h-screen bg-[#d9d9d985] flex flex-col justify-center z-10 mt-0 backdrop-blur-3xl" style="height: calc(100vh - 60px);">
    <h1 class="text-2xl font-bold">Scroll To Explore</h1>
    <img src="../assets/arrow_to_left_long.svg" alt="">
    <div class="content w-full h-80 flex">
        <div class="info w-52 h-full">
            <h1 class=" text-[90px] font-[800]" style="line-height: 70px;">Live <span class="text-[#F911B7]">Now</span></h1>
            <img src="../assets/arrow_to_left_short.svg" alt="" class="mt-4">
            <p class="text-sm mt-5">Scroll to see who is live now in Habesha and get started by interacting with there stream.</p>
            <img src="../assets/scroll_to_left_mouse.svg" alt="" class="w-16 h-16 mt-8">
        </div>
        <Smoothie class="w-[800px] flex h-[320px] overflow-x-scroll ml-5 no-scrollbar mr-5" :Weight="0.10">
            <div class="cardlist px-10 pt-5 flex gap-5">
                <div class="card w-[480px] h-[300px] bg-gray-50 rounded-lg p-2 flex flex-col">
                    <img src="../assets/liveperson.png" alt="" class="rounded-lg">
                    <div class="liveinfo p-2 flex place-items-center h-full">
                        <div class="text_info">
                            <h1>Evans White</h1>
                            <h1 class="font-bold text-nowrap">Better with Calculus Than Your Teacher</h1>
                        </div>
                        <Button class="ml-auto" size="icon" variant="ghost">
                            <IconArrowUpRight stroke={5} color="#F911B7"/>
                        </Button>
                    </div>
                </div>
                <div class="card w-[480px] h-[300px] bg-gray-50 rounded-lg p-2 flex flex-col">
                    <img src="../assets/liveperson.png" alt="" class="rounded-lg">
                    <div class="liveinfo p-2 flex place-items-center h-full">
                        <div class="text_info">
                            <h1>Evans White</h1>
                            <h1 class="font-bold text-nowrap">Better with Calculus Than Your Teacher</h1>
                        </div>
                        <Button class="ml-auto" size="icon" variant="ghost">
                            <IconArrowUpRight stroke={5} color="#F911B7"/>
                        </Button>
                    </div>
                </div>
                
            </div>
            
        </Smoothie>    
        <div class="card w-40 h-full my-5 bg-gray-50 rounded-lg p-2 flex flex-col place-items-center justify-center cursor-pointer border hover:bg-gray-100 hover:border-gray-300">
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
