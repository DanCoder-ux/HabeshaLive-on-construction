<script>
import { ref, onMounted, watch } from 'vue';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default {
  setup() {
    const searchQuery = ref('');
    const emojis = ref([]);
    const filteredEmojis = ref([]);

    const fetchEmojis = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/muan/unicode-emoji-json/main/data-ordered-emoji.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        emojis.value = data;
        filteredEmojis.value = data;
      } catch (error) {
        console.error('Error fetching emoji data:', error);
      }
    };

    const filterEmojis = () => {
      if (searchQuery.value.trim() === '') {
        filteredEmojis.value = emojis.value;
      } else {
        filteredEmojis.value = emojis.value.filter(emoji =>
          emoji.includes(searchQuery.value.trim())
        );
      }
    };

    watch(searchQuery, filterEmojis);

    onMounted(() => {
      fetchEmojis();
    });

    return {
      searchQuery,
      filteredEmojis
    };
  }
};
</script>

<template>
  <div class="w-full h-full flex flex-col gap-1">
    <h1 class="text-sm font-['Onest'] text-gray-400">Emoji List</h1>
    <div class="emoji_list w-full h-full border border-border rounded overflow-y-auto flex flex-wrap">
      <div v-for="emoji in filteredEmojis" :key="emoji" class="p-2">
        <Button class="w-6 h-6" variant="outline" size="icon">
          <span>{{ emoji }}</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.emoji_list {
  max-height: 400px; /* Adjust as needed */
}
</style>