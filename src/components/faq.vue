<script setup>
import { IconCaretDown , IconArrowUpRight } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar  } from '@/components/ui/scroll-area'
import { ref, onMounted, onUnmounted } from 'vue';
import { Smoothie } from "vue-smoothie";
import { Accordion,AccordionItem, AccordionContent, AccordionTrigger } from './ui/accordion';


const defaultValue = 'item-1'

const accordionItems = [
  { value: 'item-1', title: 'I can\'t login to my account. What should I do?', content: 'In most cases, not being able to login to your account is related to the account being banned. However, if you believe this is a mistake, you can reach out to us at support@habeshalive.com.' },
  { value: 'item-2', title: 'I am having trouble watching livestreams.', content: 'If you are having difficulties watching livestreams, there might be some ongoing maintenance. We kindly request you to be patient, and you will be notified when our service is back online.' },
  { value: 'item-3', title: 'Can I refund my credit?', content: 'Yes! While there are circumstances for it, it is possible to refund your credit. Some of the conditions include that the credit should not have been used, donated to anyone, or transferred from another user. You can read more about our refund policy on our About Us page.' },
  { value: 'item-4', title: 'How can I donate my credit to someone else?', content: 'To donate your credit to someone else, you can go to the Donate page, enter the amount of credit you want to donate, and the username of the person you want to donate to.' },
  { value: 'item-5', title: 'How can I watch a stream?', content: 'To watch a stream, you can go to the Live Now page, scroll to see who is live, and click on the stream you want to watch. You will be redirected to the stream page.' },
  { value: 'item-6', title: 'How can I go live?', content: 'To go live, you can go to the Go Live page, click on the Go Live button, and you will be redirected to the Go Live page where you can start streaming.' },
  { value: 'item-7', title: 'How can I purchase credit?', content: 'To purchase credit, you can go to the Purchase Credit page, enter the amount of credit you want to purchase, select the payment method, and you will be redirected to the payment page.' }
];
</script>

<template>
  <div class=" px-10 w-screen h-screen bg-[#d9d9d985] flex flex-col z-10 mt-0 backdrop-blur-3xl place-items-center justify-center" style="height: calc(100vh + 400px);">
    <h3 class="w-[1000px] text-[20px] font-bold" style="font-family: 'Roboto'">Here Are The Most common Questions That Reach Us</h3>
    <h1 class=" w-[1000px] text-[130px] font-bold h-22" style="line-height: 110px;">FAQ</h1>
    <Accordion type="single" class="w-[1000px] mt-12" collapsible :default-value="defaultValue">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
          <AccordionTrigger class=" bg-transparent border-b border-black px-5 hover:no-underline hover:bg-gray-200">{{ item.title }}</AccordionTrigger>
          <AccordionContent class=" p-5 font-semibold">
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  </div>
</template>

<style scoped>

</style>
