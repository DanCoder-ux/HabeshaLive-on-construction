<script setup>
import { IconCaretDown, IconArrowUpRight } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { ref, onMounted, onUnmounted } from 'vue';
import { Smoothie } from "vue-smoothie";
import { showAboutUs } from './state';
import gsap from 'gsap';
import navbar from './navbar.vue';
import blogheader from './blog-Components/blogheader.vue';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';


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

    <div class="absolute w-screen h-screen bg-[#d9d9d985] flex flex-col justify-center z-30 mt-0 backdrop-blur-3xl"
        v-if="showAboutUs">
        <Smoothie class="w-full h-full p-[20px] overflow-y-scroll flex flex-col">
            <div
                class="firstsection rounded-xl h-screen flex flex-col gap-0 place-items-center justify-center w-full gradient-background">
                <Transition appear @before-enter="fade_to_right_before" @after-appear="fade_to_right_after">
                    <h1 class=" mt-auto text-[150px] font-['Onest',sans-serif] font-[600] text-white"
                        style="line-height: 160px;">About Us</h1>
                </Transition>
                <Transition appear @before-enter="fade_to_right_before" @after-appear="fade_to_right_after">
                    <p class="text-[17px] text-white font-['Onest',sans-serif] w-[600px] text-center">We are a team of
                        passionate individuals who are dedicated to providing the best streaming experience for our
                        users. We are constantly working to improve our platform and provide the best service possible.
                    </p>
                </Transition>
                <h1 class="mt-auto text-white text-lg font-['Onest']">Scrolldown To Explore</h1>
                <img src="../assets/scroll_to_left_mouse.svg" class=" rotate-90 w-16 mb-5 mt-5" alt="">
            </div>
            <div class="textcontentarea w-full p-5" style="height: 300vh;">
                <Tabs default-value="account" class="w-full flex gap-5">
                    <TabsList
                        class="w-[300px] h-[150px] grid-cols-2 flex flex-col [&>*]:w-full bg-white rounded-none [&>*]:justify-start">
                        <TabsTrigger value="guidlines">
                            Community guidlines
                        </TabsTrigger>
                        <TabsTrigger value="terms">
                            terms of use
                        </TabsTrigger>
                        <TabsTrigger value="rules">
                            Rules of models
                        </TabsTrigger>
                        <TabsTrigger value="studio">
                            Studios Rules
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="guidlines" class="w-[2000px] mt-0">
                        <div class="content w-full h-[5000px] bg-white p-5 flex flex-col place-items-center">
                            <blogheader>Community Guidlines</blogheader>
                            <div class="discription w-full h-full px-10 flex-col flex gap-3 font-['Onest'] place-items-center">
                                <p class="text-[16px]">
                                    We are committed to providing a safe, respectful, and inclusive environment for all
                                    of our users and models. The following Community Guidelines are designed to ensure
                                    the best experience for everyone as well as the legality, safety, and quality of all
                                    content. By using the Website, you agree to these guidelines and our Terms of Use.
                                </p>
                                <p class="text-[18px] mt-5 w-full">
                                    <strong>Consent & Verification</strong>

                                </p>
                                <p class="consent list w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                        We do not allow anyone to upload pictures or videos of persons without the
                                        persons’ consent and without that person being registered and verified by our
                                        Website.
                                    </li>
                                    <li>
                                        We do not allow models to broadcast with persons without that person being
                                        registered and verified by our Website.
                                    </li>
                                    <li>
                                        We will take actions against accounts if we have sufficient reason to believe
                                        they are currently using or have used non authentic/tampered documents/ before
                                    </li>
                                    <li>
                                        We will terminate any person’s account and submit a report to the relevant
                                        authorities if we have sufficient reason to believe they’re participating in any
                                        way in human trafficking
                                    </li>
                                    <li>
                                        Minor Safety: We prohibit in any way or form the sexualising of minors in all
                                        content types, including chat
                                    </li>
                                    <li>
                                        Self-Harm: We do not allow any content that promotes self-harm
                                    </li>
                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Dangerous & Regulated Goods:</Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                        We prohibit any unsafe activities, including the use of dangerous tools.
                                    </li>
                                    <li>
                                        We do not allow sharing any illegal or regulated products or services, such as
                                        illegal drugs, on our Website.
                                    </li>
                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Violent & Graphic Content:</Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                        We prohibit showing certain bodily fluids as they’re deemed disturbing for most
                                        of our users, this includes blood and human excrements.
                                    </li>
                                    <li>
                                        We also do not allow the depiction of violence on our website in any form.
                                    </li>
                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Harassment and Hate Speech:</Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                        We prohibit the propagation of hateful or hurtful language. This includes using
                                        insults with the purpose to hurt another person on our website
                                    </li>
                                    <li>
                                        We also do not allow any type of harassment against our users or models,
                                        including the use of threats, blackmail, or coercion.
                                    </li>
                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Animal Welfare:</Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                        We do not allow depicting bestiality (Sexual activity between a human and a
                                        lower animal,) on our Website.
                                    </li>
                                    <li>
                                        We also do not allow the depiction of animals while a model is naked or is
                                        performing a sexual activity.
                                    </li>
                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Protection of Privacy:</Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                        Please respect the privacy of others. We do not allow any unwanted exposure of
                                        other persons’ personal private information. This includes, but is not limited
                                        to, their full name, address, contact information, or any other piece of
                                        information that is sufficient to identify them.
                                    </li>
                                    <li>
                                        Arranging to meet in-person
                                    </li>
                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Spam & Unwanted Advertisement:</Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                        We review the Website 24/7 to ensure that it is spam free and that it is not
                                        being used as a gateway to drive users off the Website, this includes
                                        advertisements of goods or services on other websites.
                                    </li>
                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Scams & Fraud: </Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                        We do not allow any disingenuous behavior on our website, this includes but is
                                        not limited to the below:
                                    </li>
                                    <li>
                                        Fake tipping;
                                    </li>
                                    <li>
                                        Using pre-recorded content on broadcasts;
                                    </li>
                                    <li>
                                        Using other payment methods other than the ones offered by our website;
                                    </li>
                                    <li>
                                        Using Fake toys;
                                    </li>
                                    <li>
                                        Pretending to be part of our staff.
                                    </li>
                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Performance Quality & User satisfaction:</Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                         We work alongside our models to ensure that all performances are highly
                                        satisfying to our users, we do not allow:
                                    </li>
                                    <li>
                                        Depiction of unconscious persons or broadcasting while sleeping
                                    </li>
                                    <li>
                                        Empty streams;
                                    </li>
                                    <li>
                                        Begging for tips to cover personal expenses;
                                    </li>
                                    <li>
                                        Broadcasting from two accounts or more at the same time;
                                    </li>
                                    <li>
                                        Use of wrong tags or flags, or streaming in the wrong category;
                                    </li>
                                    <li>
                                        Advertising a room in other models’ rooms; and
                                    </li>
                                    <li>
                                        Advertising studios on our Website.
                                    </li>
                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Account Access and Security:</Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                         Each registered user or model on our Website is exclusively entitled to access
                                        their own account by using the credentials provided during registration. Under
                                        no circumstances should anyone seek to access, utilize, or interfere with
                                        another person’s account
                                    </li>

                                </p>
                                <p class="text-[18px] mt-5">
                                    <Strong>Prohibition of Content Use
                                    </Strong>
                                </p>
                                <p class="dangerous w-full pl-10 pt-1 flex flex-col gap-3 [&>*]:text-[15px]">
                                    <li>
                                         Users are expressly prohibited from copying, replicating, distributing,
                                        publishing, or engaging in any form of unauthorized use or exploitation of any
                                        content from our Website on any third-party websites.
                                    </li>

                                </p>
                                <p class="mt-24 font-light text-sm text-gray-500 text-center w-[70%]">
                                    Violation of these guidelines may result in temporary suspension or permanent
                                    termination of account access. We reserve the right to remove any content that
                                    breaches our Community Guidelines. For a detailed understanding of our rules and the
                                    corresponding penalties, please have a look at our Rules & Penalties.
                                    We reserve the right to modify, add to, or enhance these guidelines at our sole
                                    discretion and at any given time, as deemed necessary.
                                    Thank you for helping us uphold these standards and helping to create a welcoming
                                    and safe environment for everyone.

                                </p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Smoothie>
    </div>
</template>

<style scoped>
.gradient-background {
    background: linear-gradient(214deg, #e22abf, #6e00eb);
    background-size: 120% 120%;
    animation: gradient-animation 6s ease infinite;
}
</style>
