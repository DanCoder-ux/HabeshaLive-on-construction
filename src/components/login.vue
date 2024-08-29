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
import { canRegister, canLogin,terms, livepage } from './state';

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
function showlivepage(){
    livepage.value = !livepage.value;
    if(livepage.value){
        document.getElementById("smoothi").style.overflowY = "hidden";
    }
}

function validateLoginForm(){
  showlivepage();
}
</script>

<template>
  <div class=" p-10 w-screen h-screen bg-[#ffffff] flex flex-col justify-center mt-0 backdrop-blur-3xl absolute z-20" v-show="canLogin">
    <div class="login w-full h-full bg-gray-100 rounded-2xl flex p-3 gap-3 shadow-2xl ">
        <div id="sec1log" class="sec1 w-1/2 gradient-background rounded-2xl p-20 flex flex-col pt-10 pb-10 " style="transition: 0.7s ease-in-out">
            <Button variant="primary" size="icon" @click="unLogin">
                <IconArrowLeft stroke={2} color="white"/>
            </Button>
            <h1 class="mt-5 text-white flex place-items-center text-[50px] font-[800]" style="font-family:'Roboto'; line-height: 50px;">Welcome To Habesha live</h1>
            <h3 class="text-white mt-3">wlecome back to your habesha live account sign back in and continue your joureny</h3>
            <Card v-show="!terms" class="w-48 h-16 mt-2 bg-[#ffffff6b] backdrop-blur-3xl border-none flex place-items-center justify-center cursor-pointer hover:scale-[0.95] transition-all">
                <CardContent class="flex place-items-center justify-start p-2 gap-3 ">
                        <IconEyeQuestion stroke={2} color="white" class="w-14 h-14"/>
                    <h1 class="flex place-items-center text-sm text-white">Want to see where your data goes</h1>
                </CardContent>
            </Card>
            <div class="more mt-auto flex w-full [&>*]:cursor-pointer">
                <h1 class="text-white ml-auto">Privacy Policy</h1>
            </div>
        </div>
        <div class="sec2 w-1/2 h-full flex-col p-20 py-20 gap-6" >
            <h1 class="text-[50px] font-[600]">Login</h1>
            <Label>Phone Number</Label>
            <Input placeholder="phone" class="w-full h-12"/>
            <Label>Password</Label>
            <div class="pass flex gap-1">
                <Input placeholder="Password" :type="input_ps_type" class="w-full h-12">
                    
                </Input>
                <Button variant="outline" size="icon" class="h-12 w-16" @click="togglePassword">
                    <IconEye stroke={2} color="gray" class="w-8 h-8"/>
                </Button>
            </div>
            <div class="flex items-center space-x-2 mt-8">
                <Checkbox id="terms" />
                <label
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            <Button class="w-full h-12 gradient-background text-lg text-white mt-3 hover:text-white hover:shadow-xl transition-all" variant="outline" @click="validateLoginForm">Login</Button>
            <h1 class="w-full text-center mt-3" style="font-family: 'Roboto';">Dont have an account <Span @click="register" class="text-[#e22abf] cursor-pointer">Get started</Span></h1>
        </div>
    </div>
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
