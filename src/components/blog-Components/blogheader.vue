
<script setup>
import { IconLink } from '@tabler/icons-vue';
</script>


<template>
    <div class="blog-header w-full h-22 place-items-center border-b border-border flex gap-2 px-5 p-2">
        <IconLink stroke={2} class="w-8"/>
        <div class="text-[30px] font-['Onest'] font-bold">
            <slot class="blog-header"></slot>
        </div>
    </div>
  </template>
  

<style scoped>
  .blog-header {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
</style>