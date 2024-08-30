<script setup>
import { ref } from 'vue';
import { habeshachat } from './state';
import knumpad from './knumpad.vue';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { IconX, IconMoodHappy, IconMenu2 } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';
import emoji from './emoji.vue';

let credittyped = ref("00");
let listofpeople = ref([
    {
        name: "endrias",
        status: "Online",
        lasttext: "Hello, how are you i just wanted to tell..."
    },
    {
        name: "Solomon",
        status: "Offline",
        lasttext: "I'm good, thank you!"
    },
]);

function disable_habesha_chat() {
    habeshachat.value = false;
}

let showEmojiPicker = ref(false);
let message = ref("");

function addEmoji(emoji) {
    message.value += emoji.native;
}

let messagessent = ref([
    {
        id: 1,
        message: "Hello, how are you i just wanted to tell you how much i liked you adn that i want to be a part of this streaming platform one day to support the community that gave itself to me?",
        sender: "Solomon",
        time: "12:00 PM",
        direction: "left"
    },
    {
        id: 2,
        message: "I'm good, thank you!",
        sender: "Mathias",
        time: "12:01 PM",
        direction: "right"
    },
    {
        id: 3,
        message: "What are you doing?",
        sender: "Solomon",
        time: "12:02 PM",
        direction: "left"
    },
    {
        id: 4,
        message: "I'm working on a project",
        sender: "Mathias",
        time: "12:03 PM",
        direction: "right"
    },
    {
        id: 5,
        message: "That's great!",
        sender: "Solomon",
        time: "12:04 PM",
        direction: "left"
    },
])
</script>

<template>
    <div class="bg-[#0000006e] absolute w-screen h-screen z-50 flex place-items-center justify-center" v-show="habeshachat">
        <div style="width: calc(100% - 100px); height: calc(100% - 50px)" class="bg-white border border-border shadow-lg rounded-lg p-5 flex flex-col">
            <div class="top_bar w-full h-12 border-b border-border flex place-items-center p-2 pt-0">
                <h1 class="text-lg font-['Onest']">Direct Messages</h1>
                <Button variant="outline" size="icon" class="w-8 h-8 ml-auto" @click="disable_habesha_chat">
                    <IconX stroke={2} class="w-6 h-6"/>
                </Button>
            </div>
            <div class="content w-full h-full flex">
                <div class="listofpeople w-80 h-full border-r border-border">
                    <div v-for="person in listofpeople" :key="person.name" class="person w-full border-b border-border flex gap-2 p-1 pt-2">
                        <div class="info flex h-full gap-2 place-items-center">
                            <div class="pfp w-8 h-8 bg-gray-200 rounded-full"></div>
                        </div>
                        <div class="texts flex flex-col p-1 gap-0 w-full">
                            <div class="flex h-8 place-items-center w-full">
                                <h1 class="font-['Onest'] h-8">{{ person.name }}</h1>
                                <DropdownMenu>
                                    <DropdownMenuTrigger class="ml-auto">
                                        <Button variant="ghost" size="icon" class="w-5 h-5">
                                            <IconMenu2 stroke={2} color="gray"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent class="bg-[#ffffff63] backdrop-blur-sm">
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                        <DropdownMenuItem>Block</DropdownMenuItem>
                                        <DropdownMenuItem>Report</DropdownMenuItem>
                                        <DropdownMenuSeparator></DropdownMenuSeparator>
                                        <DropdownMenuItem>Mark As Read</DropdownMenuItem>
                                        <DropdownMenuItem>Mark As Unread</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <h1 class="h-10 text-gray-400 text-sm font-['Onest'] font-light">{{ person.lasttext }}</h1>
                        </div>
                    </div>
                </div>
                <div class="vert flex flex-col w-full h-full max-h-[515px]">
                    <div class="chat_nav w-full h-12 flex bg-white place-items-center px-2 gap-2">
                        <div class="pfp w-8 h-8 bg-gray-200 rounded-full"></div>
                        <h1 class="font-['Onest']">Solomon</h1>
                        <DropdownMenu>
                            <DropdownMenuTrigger class="ml-auto">
                                <Button variant="outline" size="icon" class="h-6 w-6">
                                    <IconMenu2 stroke={2} color="gray" class="w-4 h-4"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent class="bg-[#ffffff63] backdrop-blur-sm mr-16">
                                <DropdownMenuItem>Delete Chat</DropdownMenuItem>
                                <DropdownMenuItem>Block</DropdownMenuItem>
                                <DropdownMenuItem>Report</DropdownMenuItem>
                                <DropdownMenuSeparator></DropdownMenuSeparator>
                                <DropdownMenuItem>Mark As Read</DropdownMenuItem>
                                <DropdownMenuItem>Mark As Unread</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div class="messages w-full h-full max-h-[470px] bg-gray-200 flex flex-col p-2">
                        <div class="w-full h-full mb-2 flex flex-col overflow-y-scroll p-5 mt-2">
                            <div v-for="message in messagessent" :key="message.id" class="message  w-full flex gap-2 mt-1">
                                <div v-if="message.direction === 'left'" class="message_left w-96 flex flex-col gap-1 bg-white pb-4 rounded-lg shadow-md p-3 rounded-tl-none">
                                   <div class="nav w-full h-8 flex place-items-center">
                                    <div class="pfp w-6 h-6 rounded-full bg-gray-400"></div>
                                    <h1 class="font-['Onest'] text-[15px] ml-2">{{message.sender}}</h1>
                                    <h1 class="font-['Onest'] text-[13px] ml-auto">{{message.time}}</h1>
                                   </div>
                                   <p class=" ml-4 font-['Onest'] text-[15px]">{{message.message}}</p>
                                </div>
                                <div v-else class="message_left w-96 flex flex-col gap-1 bg-white pb-4 rounded-lg shadow-md p-3 rounded-tr-none ml-auto">
                                    <div class="nav w-full h-8 flex place-items-center">
                                        <div class="pfp w-6 h-6 rounded-full bg-gray-400"></div>
                                        <h1 class="font-['Onest'] text-[15px] ml-2">{{message.sender}}</h1>
                                        <h1 class="font-['Onest'] text-[13px] ml-auto">{{message.time}}</h1>
                                    </div>
                                    <p class=" ml-4 font-['Onest'] text-[15px]">{{message.message}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="sendactions mt-auto w-full h-10 rounded flex gap-1">
                            <Input v-model="message" variant="outline" placeholder="Type your message here to send"></Input>
                            <Button class="w-20 h-full" variant="outline">
                                Send
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="outline" class="w-12 h-full" size="icon" @click="showEmojiPicker = !showEmojiPicker">
                                        <IconMoodHappy stroke={2} class="w-6 h-6" color="gray"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent class="bg-[#ffffff63] backdrop-blur-sm w-72 h-64 mr-20 mb-1 border border-border p-3">
                                    <emoji></emoji>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.buy {
    background: rgb(255,156,227);
    background: linear-gradient(135deg, rgba(255,156,227,1) 11%, rgba(255,77,205,1) 47%, rgba(132,0,193,1) 95%);
}
.messages {
    background-color: #e5e5f7;
    opacity: 0.7;
    background-image: linear-gradient(135deg, #e5e5e5 25%, transparent 25%), linear-gradient(225deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(315deg, #e5e5e5 25%, #e5e5f7 25%);
    background-position: 10px 0, 10px 0, 0 0, 0 0;
    background-size: 10px 10px;
    background-repeat: repeat;
}
</style>