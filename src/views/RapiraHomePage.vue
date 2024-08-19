<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { RapiraArticle, RapiraModal, RapiraNavbarFilter } from '@/components';
import { useArticleStore } from '@/entities';

const articleStore = useArticleStore();

const { activeArticles } = storeToRefs(articleStore);

const isOpenModal = ref(false);

const openModal = ():void => {
  isOpenModal.value = true;
}
</script>

<template>
  <RapiraNavbarFilter />
  <div class="home-wrapper">
    
    <div class="home-container">
      
      <RapiraModal v-if="isOpenModal" />

      <RapiraArticle 
        v-for="article in activeArticles"
        :key="article.id"
        :article="article"
        @click="openModal()"
      />

    </div>

  </div>
</template>

<style lang="sass" scoped>
.home-wrapper 
  display: flex
  justify-content: center

  padding: var(--wrapper-padding)

.home-container 
  max-width: 1400px

  display: grid
  grid-template-columns: var(--container-columns)
  grid-column-gap: var(--container-column-gap)
  grid-row-gap: var(--container-row-gap)

  padding: var(--container-padding)

  border-radius: var(--container-radius)
  background: var(--container-background)

  transition: var(--transition)
</style>