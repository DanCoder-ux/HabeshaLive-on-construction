<script setup>
import { IconCaretDown , IconArrowUpRight, IconBrandX, IconBrandInstagram, IconBrandFacebook,IconBrandTelegram} from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from './ui/button';
import blob from './blob.vue';
import gsap from 'gsap';
import { Vue3Spline } from 'vue3-spline'
import scrolldownind from './scrolldownind.vue';

const easingOptions = ["power1.out", "power2.out", "power3.out", "power4.out"];
const durationOptions = [0.4, 0.5, 0.8, 1];

const getRandomEasing = () => easingOptions[Math.floor(Math.random() * easingOptions.length)];
const getRandomDuration = () => durationOptions[Math.floor(Math.random() * durationOptions.length)];

const fade_to_right_before = (el) => {
  gsap.from(el, {
    x: -100,
    opacity: 0,
    duration: getRandomDuration(),
    ease: getRandomEasing(),
  });
};

const fade_to_right_after = (el) => {
  splitText(el);
  gsap.from(el.querySelectorAll('.char'), {
    x: 100,
    opacity: 0,
    duration: getRandomDuration(),
    ease: getRandomEasing(),
    stagger: 0.02,
  });
};

function splitText(el) {
  const text = el.innerText;
  const isHighlightable = el.classList.contains('highlightable');
  el.innerHTML = text.split('').map(char => {
    const spanClass = isHighlightable ? 'char highlightable' : 'char';
    return `<span class="${spanClass}">${char}</span>`;
  }).join('');
}
</script>

<template>
  <div class=" w-screen bg-[#d9d9d985] flex flex-col justify-center backdrop-blur-3xl z-10" style="height: calc(100vh );">
    <div class="horst flex w-full h-[82%] place-items-center">
      <div class="texts px-10 w-[1800px] mt-[100px]">
        <Transition appear @before-enter="fade_to_right_before" @enter="fade_to_right_after">
          <h2 class="font-bold text-lg fade_up_slower" style="font-family:'Roboto'">Get started with a Bonus</h2>
        </Transition>
        <Transition appear @before-enter="fade_to_right_before" @enter="fade_to_right_after">
          <h1 class="text-[75px] font-[800] fade_up" style="font-family: 'Onest'; line-height: 70px;">
              Where Teachers and Students <Span class="highlightable fade_up_slower">Connect</Span> in Real Time.
          </h1>
        </Transition>
        <Transition appear @before-enter="fade_to_right_before" @enter="fade_to_right_after">
          <h3 class="font-bold text-lg fade_up" style="font-family:'Roboto'">Our Goal is to</h3>
        </Transition>
        <Transition appear @before-enter="fade_to_right_before" @enter="fade_to_right_after">
          <h4 class="fade_up" style="font-family:'Roboto'">Expand to the unchartered territories in search of briliance </h4>
        </Transition>
        <div class="btns h-16 flex place-items-center gap-1 fade_up">
            <Button id="trybtn" class="trybtn font-bold w-28 hover:w-32 transition-all">Try for free</Button>
            <Button class="go hover:rounded-xl transition-all" size="icon">
                <IconArrowUpRight stroke={5} />
            </Button>
        </div>
    
      </div>
      <div class="3d w-[50%] h-[95%] mt-[100px]">
        <Vue3Spline
        class="w-full h-full"
        :scene="{
          url: 'https://prod.spline.design/bhCqgeFUcQ-tlMuv/scene.splinecode',
        }"
      />
      </div>
      <scrolldownind />
    </div>
    
    <div class="socials h-20 w-80 px-10 mt-auto fade_up_slower">
        <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon">
                    <IconBrandX stroke={2} class="w-7 h-7"/>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>X / Twitter</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="icon">
                    <IconBrandInstagram stroke={4} class="w-7 h-7"/>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="icon">
                    <IconBrandFacebook   stroke={4} class="w-7 h-7"/>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Facebook</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="icon">
                    <IconBrandTelegram    stroke={4} class="w-7 h-7"/>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Telegram</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        
    </div>
  </div>
  <blob />
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
    .highlightable{
        background: rgb(255,156,227);
        background: linear-gradient(135deg, rgba(255,156,227,1) 11%, rgba(255,77,205,1) 47%, rgba(132,0,193,1) 95%);
        color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        text-shadow: none !important;   
    }
</style>