<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { RapiraArticle, RapiraArticleModal, RapiraNavbarFilter } from '@/components';
import { useArticleStore } from '@/entities';
import type { IArticle } from '@/shared';

const articleStore = useArticleStore();

const { filteredArticles } = storeToRefs(articleStore);

const isOpenModal = ref(false);
const activeArticle = ref<IArticle | null>(null);

const openModal = (article: IArticle):void => {
  activeArticle.value = article;
  isOpenModal.value = true;
}

const closeModal = ():void => {
  activeArticle.value = null;
  isOpenModal.value = false;
}
</script>

<template>
  <RapiraNavbarFilter />
  <div class="home-wrapper flex justify-center">
    
    <div 
      v-if="filteredArticles.length"
      class="home-container home-container--grid"
    >
      <RapiraArticleModal 
        v-if="activeArticle"
        :isOpen="isOpenModal"
        :article="activeArticle"
        @onArticleModalClose="closeModal"
      />

      <RapiraArticle 
        v-for="article in filteredArticles"
        :key="article.id"
        :article="article"
        @click="openModal(article)"
      />

    </div>

    <div 
      v-else
      class="home-container home-container--empty flex justify-center"
    >
      <div class="empty-warning flex flex-col justify-center items-center">

        <div class="empty-warning__img">
          <img 
            class="w-full h-full"
            src="@/assets/svg/files-folders.svg"
          >
        </div>

        <div class="empty-warning__message flex flex-col justify-center items-center">
          <p class="empty-warning__message-title">Поиск не дал результатов</p>
          <p class="empty-warning__message-desc text-center">Повторите поиск или используйте фильтр для структуризации контента</p>
        </div>

      </div>
    </div>

  </div>
</template>

<style lang="sass" scoped>
.home-wrapper 
  padding: var(--wrapper-padding)

.home-container 
  max-width: 1400px
  padding: var(--container-padding)
  border-radius: var(--container-radius)
  background: var(--container-background)
  transition: var(--transition)

.home-container--grid
  display: grid
  grid-template-columns: var(--container-columns)
  grid-column-gap: var(--container-column-gap)
  grid-row-gap: var(--container-row-gap)

.home-container--empty
  width: var(--nav-width)
  padding: 65px 0

.empty-warning
  width: 330px
  padding: 20px

.empty-warning__img
  width: 46px
  height: 46px

.empty-warning__message
  margin-top: 8px
  gap: 4px

.empty-warning__message-title
  color: var(--message-title-color)
  font-size: 14px
  font-weight: 500
  line-height: 14px

.empty-warning__message-desc
  color: var(--message-desc-color)
  font-size: 12px
  font-weight: 500
  line-height: 20px

</style>