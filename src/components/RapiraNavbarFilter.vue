<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

import { RapiraNavbarFilterTag } from '@/components';
import { useArticleStore } from '@/entities';

const articleStore = useArticleStore();

const { activeTags } = storeToRefs(articleStore);

const isOpenTags = ref(false);

const setTags = ():void => {
  isOpenTags.value = !isOpenTags.value;
}

const filterBtnText = computed(() => { return isOpenTags.value ? 'Скрыть фильтр' : 'Фильтр' });
const filterBtnIconUrl = computed(() => { return isOpenTags.value ? '@/assets/svg/btns/up.svg' : '@/assets/svg/btns/down.svg' });
</script>

<template>
  
  <div class="navbar-filter flex justify-center">
    <div class="navbar-filter__wrapper flex justify-between">
      <h1>Блог</h1>
      <button 
        @click="setTags()"
        class="navbar-filter__button flex items-center"
      >
        <span>{{ filterBtnText }}</span>
        <img 
          :style="isOpenTags ? 'transform: rotate(180deg); transition-duration: 0.5s' : 'transform: rotate(0deg); transition-duration: 0.5s'"
          src="@/assets/svg/btns/down.svg"
        >
      </button>
    </div>
  </div>

  <div 
    class="flex justify-center"
    :class="isOpenTags ? 'navbar-filter__tags--open' : 'navbar-filter__tags--hidden'"
  >
    <div class="navbar-filter__wrapper navbar-filter__tags-container flex">
      <RapiraNavbarFilterTag
        v-for="tag in activeTags"
        :key="`filter-tag__${tag}`"
        :tagText="tag"
      />
    </div>
  </div>

</template>

<style lang="sass" scoped>
.navbar-filter
  background: var(--color-filter-background)
  padding: var(--nav-filter-padding)

.navbar-filter__wrapper 
  width: var(--nav-filter-width)

.navbar-filter__button
  gap: 4px

  color: var(--sub-btn-color)
  font-size: 14px
  font-weight: 500
  line-height: 14px

.navbar-filter__tags--open
  background: var(--color-filter-background)
  padding: var(--nav-filter-tags-padding)

  transition: var(--transition)
  height: 72px

.navbar-filter__tags--hidden
  height: 0

  padding: 0

  opacity: 0
  overflow: hidden
  transition: var(--transition)

.navbar-filter__tags-container
  gap: 8px
</style>