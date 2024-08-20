<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useArticleStore } from '@/entities';

interface IProps {
  tagText: string
}
const props = defineProps<IProps>();

const articleStore = useArticleStore();
const { filteredTags } = storeToRefs(articleStore);

const isActive = computed(() => { return filteredTags.value.includes(props.tagText) });

const toggleTag = ():void => {
  articleStore.toggleTag(props.tagText);
}
</script>

<template>
  <button 
    class="navbar-filter-tag flex items-center cursor-pointer"
    :class="{ 'navbar-filter-tag--active': isActive }"
    @click="toggleTag()"
  >
    <p class="font-medium">{{ tagText }}</p>
    <div class="navbar-filter-tag__image">
      <img v-if="isActive" src="@/assets/svg/btns/check.svg">
      <img v-else src="@/assets/svg/btns/plus.svg">
    </div>
  </button>
</template>

<style lang="sass" scoped>
.navbar-filter-tag
  height: 32px

  padding: 6px 16px
  gap: 6px

  transition: var(--transition)
  border-radius: 20px
  background: var(--tag-background)
  color: var(--tag-color)

.navbar-filter-tag--active 
  background: var(--tag-background-active)
  color: var(--tag-color-active)

.navbar-filter-tag__image
  width: 20px
  height: 20px
</style>