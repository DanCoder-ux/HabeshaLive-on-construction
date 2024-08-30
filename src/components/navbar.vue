<script setup>
import { IconCaretDown } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { canRegister, canLogin } from './state';

let navbar_Links = [
    {name: 'Home', link: '/',id:"home"},
    {name: 'Live', link: '/live',id:"live"},
    {name: 'About Us', link: '/about',id:"about"},
]

function register(){
    canRegister.value = !canRegister.value;
    if(canRegister.value){
        document.getElementById("smoothi").style.overflowY = "hidden";
    }else{
        document.getElementById("smoothi").style.overflowY = "scroll";
    }
}
</script>

<template>
  <div v-show="!canLogin || !canRegister" class=" absolute w-full bg-transparent flex place-items-center px-10 z-10 backdrop-blur-3xl" style="height: 60px;">
    <div class="logo">
        <img src="../assets/habeshaLiveicon.svg" alt="" class="w-10 h-10">
    </div>
    <div class="links ml-auto mr-5 bg-white flex h-10 place-items-center [&>a]:w-[90px] [&>a]:h-full py-1 [&>a]:place-items-center [&>a]:bg-white [&>a]:text-center gap-2 px-1 rounded [&>a]:rounded">
        <a v-for="link in navbar_Links" :key="link.name" :href="link.link" :id="link.id" class=" text-[#1a1a1a] font-semibold hover:bg-[#d9d9d985] text-[15px] transition-all flex justify-center hover:w-[110px]" style="font-family:'Roboto'">            {{ link.name }}
        </a>
        <a @click="register" id="getstarted" class=" cursor-pointer text-white hover:bg-[#d9d9d985] text-[13px] transition-all flex justify-center hover:w-[95px] font-bold w-[100px] getstarted">
            Get started
        </a>
    </div>
    <div class="language flex w-10 gap-1 place-items-center">
        <Label class=" font-bold">En</Label>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button class="w-8 h-8" variant="ghost" size="icon">
                    <IconCaretDown class="w-5 h-5"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  class=" mr-5">
                <DropdownMenuItem>Am</DropdownMenuItem>
                <DropdownMenuItem>En</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  </div>
</template>

<style scoped>
    .getstarted{
        background: rgb(255,156,227);
        background: linear-gradient(135deg, rgba(255,156,227,1) 11%, rgba(255,77,205,1) 47%, rgba(132,0,193,1) 95%);
    }
</style>
