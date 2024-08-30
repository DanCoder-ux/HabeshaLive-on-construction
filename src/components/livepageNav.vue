
<script setup>
import { Input } from './ui/input';
import { Button } from './ui/button';
import { IconMessage, IconPlus,IconUserCircle } from '@tabler/icons-vue';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { buycredits, livepage, canLogin, canRegister, habeshachat } from './state';
const accountholder = "Mathias";
const accounttype = "Admin";

function enablebuycredit(){
    buycredits.value = !buycredits.value;
    console.log(buycredits.value);
}

function backHome(){
    livepage.value = false;
    canLogin.value = false;
    canRegister.value = false;
}
function enablehabeshalive(){
    habeshachat.value = !habeshachat.value;
    console.log(habeshachat.value);
}
</script>

<template>
    <div class="livenav w-full flex place-items-center px-10" style="height: 60px;">
        <img src="../assets/habeshaLiveicon.svg" alt="" class=" w-10 h-10 cursor-pointer">
        <h1 class=" text-center font-bold w-24 text-[#242424] cursor-pointer" style="font-family:'Onest';" @click="backHome">Home</h1>
        <div class="search flex gap-1 w-1/2">
            <Input placeholder="Search" class="w-full" />
            <Button variant="outline">Search</Button>
        </div>
        <div class="actions ml-auto flex gap-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button variant="outline" size="icon" @click="enablehabeshalive">
                            <IconMessage stroke={2} class="w-6 h-6"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Messages</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div class="credit-cont bg-white w-28 h-10 border border-border rounded-lg flex place-items-center px-2 justify-between">
                <h1 style="font-family:'onest';" class=" font-bold text-sm">200Pt's</h1>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger class=" h-full flex place-items-center">
                            <Button variant="outline" size="icon" class="w-6 h-6" @click="enablebuycredit">
                                <IconPlus stroke={2} class="w-6 h-6"/>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Buy Credit</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div class="account cursor-pointer w-32 h-10 bg-white border border-border rounded-lg flex place-items-center px-3 justify-between">
                <div class="flex flex-col">
                    <h1 class="text-sm font-bold" style="font-family:'onest';">{{accountholder}}</h1>
                    <h2 class="text-[10px]" style="font-family:'Roboto';">{{accounttype}}</h2>
                </div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Avatar class="w-8 h-8">
                                <AvatarImage src="#" alt="@radix-vue" />
                                <AvatarFallback>
                                    PR
                                </AvatarFallback>
                            </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
       
    </div>
</template>
