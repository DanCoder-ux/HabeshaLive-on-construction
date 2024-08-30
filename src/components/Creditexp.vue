<script setup>
import { IconCaretDown , IconArrowUpRight } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar  } from '@/components/ui/scroll-area'
import { ref, onMounted, onUnmounted } from 'vue';
import { Smoothie } from "vue-smoothie";

</script>

<template>
  <div class=" px-10 w-screen h-screen bg-[#d9d9d985] flex z-10 mt-0 backdrop-blur-3xl" style="height: calc(100vh - 60px);">
    <img src="../assets/pts_toleft.png" alt="" class="w-[800px] ml-[-100px] h-[500px]">
    <div class="texts h-full flex place-items-center mt-20 ml-10">
        <div class="info w-52 h-full">
            <h3 class=" text-nowrap font-bold" style="font-family:'Roboto'">Get Started Now And Get A 300PT Bonus</h3>
            <h1 class=" text-[110px] font-[800]" style="line-height: 90px; font-family:'Roboto'">Live <span class="text-[#F911B7]">Credits</span></h1>
            <img src="../assets/arrow_to_left_short.svg" alt="" class="mt-4">
            <p class="text-lg mt-5 w-96" style="font-family:'Roboto'">Watch at anytime you see fit, with your credits you can watch streams without paying for every single one.</p>
            <div class="btns h-16 flex place-items-center gap-1">
                <Button id="purchasecredit" class="trybtn font-bold w-32 hover:w-36 transition-all">Purchase Credit</Button>
                <Button class="go hover:rounded-xl transition-all" size="icon">
                    <IconArrowUpRight stroke={5} />
                </Button>
            </div>
        </div>
    </div>
    <img src="../assets/pts_floating.png" alt="" class="w-96 h-56">
  </div>
</template>

<style scoped>
.trybtn{
    background: rgb(255,156,227);
    background: linear-gradient(135deg, rgba(255,156,227,1) 11%, rgba(255,77,205,1) 47%, rgba(132,0,193,1) 95%);
}
.go{
    background: rgb(255,156,227);
    background: linear-gradient(135deg, rgba(255,156,227,1) 11%, rgba(255,77,205,1) 47%, rgba(132,0,193,1) 95%);
}
</style>
