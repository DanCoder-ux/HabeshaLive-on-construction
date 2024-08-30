<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { buycredits } from './state';
import knumpad from './knumpad.vue';
import { Button } from './ui/button';
import { Input } from './ui/input';

let credittyped = ref("00");
</script>

<template>
    <div class="bg-[#0000006e] absolute w-screen h-screen z-50 flex place-items-center justify-center" v-show="buycredits">
        <div class="w-[600px] h-[500px] bg-white border border-border shadow-lg rounded-lg p-5 flex flex-col gap-3">
            <div class="numpad h-full w-full">
                <div class="head">
                    <h1 class="text-2xl font-bold text-[#242424] font-['Onest']">Buy Credits</h1>
                    <p class="font-['Onest'] text-sm">How much credits do you want to buy</p>
                </div>
                <div class="content flex gap-2">
                    <div class="w-full flex justify-end flex-col">
                        <p class="font-['Onest'] text-sm h-4 text-gray-500">Type if you want</p>
                        <Input variant="outline" class="w-full h-12 my-3" v-model="credittyped" type="text"></Input>
                    </div>
                    <div class="w-full">
                        <p class="font-['Onest'] text-sm h-4 text-gray-500">Converted to pts</p>
                        <Input  variant="outline" class="w-full h-12 my-3"></Input>
                    </div>
                </div>
                <knumpad btn-varaint="outline" v-model="credittyped"></knumpad>
            </div>
            <div class="actions h-10 w-full mt-auto flex gap-2">
                <Button class="ml-auto font-['Onest']" variant="ghost" @click="buycredits=!buycredits">Cancel</Button>
                <Button class="buy w-32 text-white font-bold text-lg" variant="Primary" style="font-family:'Onest';">Buy</Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.buy{
    background: rgb(255,156,227);
    background: linear-gradient(135deg, rgba(255,156,227,1) 11%, rgba(255,77,205,1) 47%, rgba(132,0,193,1) 95%);
}
</style>

