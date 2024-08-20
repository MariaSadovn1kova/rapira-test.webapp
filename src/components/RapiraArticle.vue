<script lang="ts" setup>
import { computed } from 'vue';

import { RapiraArticleInfo, RapiraArticleTags } from '@/components';
import type { IArticle } from '@/shared';

interface IProps {
  article: IArticle
}
const props = defineProps<IProps>();

</script>

<template>
  <div class="article cursor-pointer">

    <div class="article__img">
      <img 
        class="article__img-content"
        :src="article.imgURL" 
        :alt="article.title"
      >
    </div>

    <div class="article__content flex flex-col">

      <RapiraArticleInfo 
        :article="article"
      />

      <h2>{{ article.title }}</h2>
      
      <p class="article__desc">{{ article.desc }}</p>

      <RapiraArticleTags 
        :tags="article.tags"
      />

    </div>

  </div>
</template>

<style lang="sass" scoped>
.article
  width: var(--article-width)

  transition: var(--transition)

.article__img 
  width: 100%
  height: var(--article-img-height)
  
  border-radius: 12px
  overflow: hidden

.article__img-content
  width: 100%
  height: 100%

  object-fit: cover
  object-position: center

.article__content 
  margin-top: 10px
  gap: 10px

.article__desc
  max-height: 50px
  overflow: hidden
  font-size: 16px
  font-weight: 500
  line-height: 25px
  text-align: left
</style>