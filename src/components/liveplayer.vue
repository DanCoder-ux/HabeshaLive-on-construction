<script setup>
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from './ui/button';
import { IconBell, IconBrandTelegram, IconSend } from '@tabler/icons-vue';
import { ScrollArea } from './ui/scroll-area';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { Smoothie } from "vue-smoothie";
import Input from './ui/input/Input.vue';

let timetracker = Date.now();

function updatetime() {
    timetracker = Date.now();
}

const activeUserTracker = ref({
    name: "Mathias",
    status: "Online"
});

const messages = ref([
    {
        id: 1,
        message: "Hello, how are you i just wanted to tell you how much i liked you adn that i want to be a part of this streaming platform one day to support the community that gave itself to me?",
        sender: "Solomon",
        time: "12:00 PM"
    },
    {
        id: 2,
        message: "I'm good, thank you!",
        sender: "Mathias",
        time: "12:01 PM"
    },
    {
        id: 3,
        message: "What are you doing?",
        sender: "Solomon",
        time: "12:02 PM"
    },
    {
        id: 4,
        message: "I'm working on a project",
        sender: "Mathias",
        time: "12:03 PM"
    },
    {
        id: 5,
        message: "That's great!",
        sender: "Solomon",
        time: "12:04 PM"
    },
    {
        id: 6,
        message: "Yes, it is!",
        sender: "Mathias",
        time: "12:05 PM"
    },
    {
        id: 7,
        message: "I'm glad to hear that",
        sender: "Solomon",
        time: "12:06 PM"
    },
    {
        id: 8,
        message: "Thank you!",
        sender: "Mathias",
        time: "12:07 PM"
    },
    {
        id: 9,
        message: "You're welcome!",
        sender: "Solomon",
        time: "12:08 PM"
    },
    {
        id: 10,
        message: "Goodbye!",
        sender: "Mathias",
        time: "12:09 PM"
    },
])
let typedmessage = ref("");
let liveMessageScrollArea = ref(null)

function sendMessage(msg) {
    updatetime();
    messages.value.push({
        id: messages.value.length + 1,
        message: msg,
        sender: activeUserTracker.value.name,
        time: new Date(timetracker).toLocaleString([], { hour: '2-digit', minute: '2-digit' }),
    });
    if (liveMessageScrollArea.value) {
        liveMessageScrollArea.value.scrollTop = liveMessageScrollArea.value.scrollHeight;
    }
    typedmessage.value = ""; // Clear the typed message
}
</script>

<template>
    <div class="w-screen h-screen flex p-5 px-10 gap-5">
        <div class="player flex flex-col w-[60%] h-full">
            <div class="video bg-white w-full h-[420px] rounded"></div>
            <div class="disc flex-col flex mt-2">
                <div class="account h-12 w-full flex place-items-center gap-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Avatar class="w-10 h-10">
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
                    <h1 class=" font-bold text-lg" style="font-family: 'Onest', sans-serif;">Solomon Mandefro</h1>
                    <Button variant="outline" size="icon" class="ml-auto border border-border">
                        <IconBell stroke={2} class="w-6 h-6" color="black" />
                    </Button>
                    <Button variant="outline" class="w-28">
                        Follow
                    </Button>
                    <Button class="donate w-28">
                        Donate
                    </Button>
                </div>
                <div class="words p-5 flex flex-col gap-1">
                    <h1 class="font-bold" style="font-family: 'Onest', sans-serif;">Discription</h1>
                    <ScrollArea class="h-[120px]">

                        <p style="font-family: 'Onest', sans-serif;" class="text-sm">
                            Welcome to the live streaming session on Calculus! In this session, our experienced teacher
                            will guide you through the fundamental concepts and techniques of calculus, helping you
                            develop a strong foundation in this important branch of mathematics.
                        </p>
                    </ScrollArea>
                </div>
            </div>
        </div>
        <div class="livechat w-[480px] h-[540px] bg-white rounded flex flex-col p-5 ml-auto">
            <div class="head w-full h-10 flex p-2">
                <h1 class="font-bold text-[21px]" style="font-family: 'Onest', sans-serif;">Live Chat</h1>
            </div>
            <div class="livemessages h-full smooth-wrapper ">
                <div ref="liveMessageScrollArea" class="h-[400px] smooth-content pr-5 overflow-y-scroll">
                    <div v-for="msg in messages" :key="msg.id" class="message flex flex-col gap-1 rounded-lg my-5 p-2">
                        <div class="sender h-8 flex place-items-center gap-2">
                            <Avatar class="w-6 h-6">
                                <AvatarImage src="#" alt="@radix-vue" />
                                <AvatarFallback>
                                    PR
                                </AvatarFallback>
                            </Avatar>
                            <h1 class="font-semibold" style="font-family: 'Onest';">{{ msg.sender }}</h1>
                            <h2 class="text-[10px]" style="font-family: 'Onest';">{{ msg.time }}</h2>
                        </div>
                        <div class="messagebody px-2 py-2">
                            <p style="font-family: 'Onest', sans-serif;" class="text-[15px]">{{ msg.message }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sender h-12 flex gap-2">
                <Input 
                    type="text" 
                    class="w-full h-10 border border-border rounded p-2"
                    placeholder="Type your message here" 
                    v-model="typedmessage"
                    @keyup.enter="sendMessage(typedmessage)" 
                />
                <Button 
                    variant="primary" 
                    size="icon" 
                    class="donate hover:w-16 transition-all"
                    @click="sendMessage(typedmessage)"> <IconSend stroke={2} class="w-6 h-6" color="white" /> 
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.donate {
    background: rgb(255, 156, 227);
    background: linear-gradient(135deg, rgba(255, 156, 227, 1) 11%, rgba(255, 77, 205, 1) 47%, rgba(132, 0, 193, 1) 95%);
}
</style>
