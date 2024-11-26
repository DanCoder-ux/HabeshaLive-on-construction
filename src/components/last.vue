<script setup>
import { IconCaretDown , IconArrowUp } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar  } from '@/components/ui/scroll-area'
import { ref, onMounted, onUnmounted } from 'vue';
import { Smoothie } from "vue-smoothie";
import { Accordion,AccordionItem, AccordionContent, AccordionTrigger } from './ui/accordion';


const defaultValue = 'item-1'
</script>

<template>
  <div class="footer px-10 p-1 w-screen h-[350px] bg-[#d9d9d985] flex flex-col z-10 mt-0 backdrop-blur-3xl">
    <div class="content flex flex-col h-full">
      <div class="row1 flex h-20 w-full place-items-center">
        <img src="../assets/habeshaLiveicon.svg" alt="" class="w-10">
        <h1 class=" text-white ml-5 text-[20px] font-bold">Habesha Live</h1>
        <img src="../assets/khubpoint.svg" alt="" class="ml-auto w-[130px]">
      </div>
      <div class="quicklinks w-full h-80 p-2 flex flex-col">
        <h1 class="text-white font-bold font-['Onest'] text-lg">Quick Links</h1>
        <div class="allContent w-full h-full flex place-items-center gap-12 mt-3">
          <div class=" list pl-0 [&>*]:text-white [&>*]:font-['Onest'] [&>*]:underline [&>*]:underline-offset-4 [&>*]:cursor-pointer">
            <h1>Home</h1>
            <h1>Live</h1>
            <h1>Teachers</h1>
            <h1>Profile</h1>
            <h1>Contact Us</h1>
          </div>
          <div class=" list pl-0 [&>*]:text-white [&>*]:font-['Onest'] [&>*]:underline [&>*]:underline-offset-4 [&>*]:cursor-pointer">
            <h1>Pricing</h1>
            <h1>How we do buisness</h1>
            <h1>Liblity</h1>
            <h1>Rules And Regulations</h1>
            <h1>Data Collection Rights</h1>
          </div>
        </div>
        
      </div>
      <div class="row2 flex h-20 w-full place-items-center flex-col mt-auto">
        <img src="../assets/line-long.svg" alt="">
        <div class="subrow2 w-full h-10 flex place-items-center [&>h1]:text-white">
          <h1>© all rights reserved</h1>
          <div class="separator w-[2px] h-[70%] bg-white mx-5"></div>
          <h1>Terms of Service</h1>
          <div class="separator w-[2px] h-[70%] bg-white mx-5"></div>
          <h1>Privacy Policy</h1>
          <h1 class="ml-auto">2024</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .footer{
    background: rgb(255,135,221);
    background: linear-gradient(135deg, rgba(255,135,221,1) 5%, rgba(255,77,205,1) 47%, rgba(140,5,194,1) 89%, rgba(132,0,193,1) 95%);
  }
  /* * { outline: 1px solid white } */
</style>
