<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { RapiraNavbarFilterTag, RapiraInput } from '@/components';
import { useArticleStore } from '@/entities';

const articleStore = useArticleStore();

const { activeTags } = storeToRefs(articleStore);

const isOpenTags = ref(false);
const filtertTitle = ref('');

const setTags = ():void => {
  isOpenTags.value = !isOpenTags.value;
}

const clearTags = ():void => {
  articleStore.clearFilterTags()
}

const filterBtnText = computed(() => { return isOpenTags.value ? 'Скрыть фильтр' : 'Фильтр' });

watch(() => filtertTitle.value, (newVal) => {
  articleStore.setFilterTitleStr(newVal)
});
</script>

<template>

  <div class="navbar-filter flex justify-center">
    <div class="navbar-filter__wrapper flex">

      <div class="navbar-filter__header flex">
        <div class="flex justify-between">
          <h1>Блог</h1>
          <div class="navbar-filter__btns-headers">
            <button
              @click="clearTags()"
              class="navbar-filter__button-clear"
            >
              Очистить
            </button>
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
        <RapiraInput 
          v-model="filtertTitle"
          height="40px"
          width="var(--nav-input-width)"
          :bgColor="`var(--color-input-bg)`"
          placeholder="Поиск"
          withStartIcon
        >
          <img src="@/assets/svg/btns/magnifier.svg" >
        </RapiraInput>
      </div>

      <div class="navbar-filter__btns">
        <button
          @click="clearTags()"
          class="navbar-filter__button-clear"
        >
          Очистить
        </button>
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
  </div>

  <div 
    class="flex justify-center"
    :class="isOpenTags ? 'navbar-filter__tags--open' : 'navbar-filter__tags--hidden'"
  >
    <div class="navbar-filter__tags-container flex flex-wrap">
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
  flex-direction: var(--nav-filter-flex-direction)
  justify-content: var(--nav-filter-content)

.navbar-filter__header
  gap: var(--nav-filter-header-gap)
  flex-direction: var(--nav-filter-header-flex-direction)

.navbar-filter__button
  gap: 4px

  color: var(--sub-btn-color)
  font-size: 14px
  font-weight: 500
  line-height: 14px

.navbar-filter__button-clear
  color: var(--sub-btn-color-alt)
  font-size: 14px
  font-weight: 500
  line-height: 14px

.navbar-filter__btns
  display: var(--mobile-hidden)
  gap: 10px

.navbar-filter__btns-headers
  display: var(--mobile-show)
  gap: 10px

.navbar-filter__tags--open
  background: var(--color-filter-background)
  padding: var(--nav-filter-tags-padding)

  transition: var(--transition)
  min-height: 72px
  height: auto

.navbar-filter__tags--hidden
  height: 0

  padding: 0

  opacity: 0
  overflow: hidden
  transition: var(--transition)

.navbar-filter__tags-container
  width: var(--nav-filter-width)
  gap: 8px
</style>