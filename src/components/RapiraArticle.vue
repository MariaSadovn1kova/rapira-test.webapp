<script lang="ts" setup>
import { RapiraTag } from '@/components';
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

      <div class="article__info flex">
        <div class="article__info-item flex">
          <span class="font-medium">9 Апр</span>
        </div>

        <div class="article__info-item flex justify-center">
          <img src="@/assets/svg/btns/time.svg">
          <span class="font-medium">2 мин</span>
        </div>

        <div class="article__info-item flex">
          <span class="font-medium">1 комментарий</span>
        </div>
      </div>

      <h2>{{ article.title }}</h2>
      
      <p class="article__desc">{{ article.desc }}</p>

      <div class="article__tags flex">
        <RapiraTag
          v-for="tag in article.tags"
          :key="`tag__${tag}`"
          :tagText="tag"
         />
      </div>

    </div>

  </div>
</template>

<style lang="sass" scoped>
.article
  width: 400px

.article__img 
  width: 400px
  height: 250px
  
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

.article__info
  gap: 10px

.article__info-item 
  gap: 5px

  font-size: 14px
  line-height: 14px
  color: var(--article-info-color)

.article__desc
  max-height: 50px
  overflow: hidden
  font-size: 16px
  font-weight: 500
  line-height: 25px
  text-align: left

.article__tags
  gap: 10px
</style>