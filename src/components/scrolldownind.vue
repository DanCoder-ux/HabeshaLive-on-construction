<script setup>
import { IconCaretDown , IconArrowUpRight } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar  } from '@/components/ui/scroll-area'
import { ref, onMounted, onUnmounted } from 'vue';
import { Smoothie } from "vue-smoothie";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { IconEyeQuestion, IconArrowLeft,IconEye   } from '@tabler/icons-vue';
import { Input } from './ui/input';
import { Checkbox } from '@/components/ui/checkbox'
import { canRegister, canLogin,terms } from './state';

const input_ps_type = ref('password');

function togglePassword(){
    input_ps_type.value = input_ps_type.value === 'password' ? 'text' : 'password';
}
function unLogin(){
  if(terms.value){
    toggleterms(false);
  }else{
    canLogin.value = !canLogin.value;
    canRegister.value = !canRegister.value;
  }
  if(canLogin.value){
        document.getElementById("smoothi").style.overflowY = "hidden";
    }else{
        document.getElementById("smoothi").style.overflowY = "scroll";
    }
}
function login(){
    canLogin.value = !canLogin.value;
    if(canLogin.value){
        document.getElementById("smoothi").style.overflowY = "hidden";
    }else{
        document.getElementById("smoothi").style.overflowY = "scroll";
    }
}
function register(){
    canRegister.value = !canRegister.value;
    canLogin.value = !canLogin.value;
    if(canRegister.value){
        document.getElementById("smoothi").style.overflowY = "hidden !important";
    }else{
        document.getElementById("smoothi").style.overflowY = "scroll !important";
    }
}
function toggleterms(open = true){
    if (open) {
        terms.value = true;
        const sec1 = document.getElementById('sec1log');
        sec1.classList.add("w-full");
    } else {
        terms.value = false;
        const sec1 = document.getElementById('sec1log');
        sec1.classList.remove("w-full");
        sec1.classList.add("w-1/2");
    }
}
</script>

<template>
    <div class="absolute top-[75vh] left-[175vh] z-10 rotate-90 flex h-16 place-items-center w-80 gap-1">
        <h1 class="filter-none shadow-none font-bold text-lg">Scroll down to explore</h1>
        <img src="../assets/scroll_to_left_mouse.svg" alt="" class="w-16">
    </div>
</template>

<style scoped>
.gradient-background {
  background: linear-gradient(214deg,#e22abf,#6e00eb);
  background-size: 120% 120%;
  animation: gradient-animation 6s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
