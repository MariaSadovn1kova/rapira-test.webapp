<script lang="ts" setup>
import { computed } from 'vue';

import { RapiraTag } from '@/components';

import type { IArticle } from '@/shared';
import { dateFormatting, readingTime, commentsCount } from '@/shared';

interface IProps {
  article: IArticle
}
const props = defineProps<IProps>();

const articleFromattedDate = computed(() => { return dateFormatting(props.article.date.toISOString())});
const articleReadingTime = computed(() => { return readingTime(props.article.desc) });
const articleCommentsCount = computed(() => { return commentsCount(props.article.comments) });
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

      <div class="article__info flex items-center">

        <div class="article__info-item flex">
          <span class="flex items-center font-medium">{{ articleFromattedDate }}</span>
        </div>

        <div class="article__info-border"></div>

        <div class="article__info-item flex justify-center">
          <img class="article__info-svg" src="@/assets/svg/btns/time.svg">
          <span class="flex items-center font-medium">{{ articleReadingTime }}</span>
        </div>

        <div class="article__info-border"></div>

        <div class="article__info-item flex">
          <img class="article__info-svg" src="@/assets/svg/btns/communication.svg">
          <span class="flex items-center font-medium">{{ articleCommentsCount }}</span>
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

.article__info
  gap: 10px

.article__info-item 
  gap: 5px

  font-size: 14px
  line-height: 14px
  color: var(--article-info-color)

.article__info-svg 
  width: 20px
  height: 20px

.article__info-border
  width: 3px
  height: 3px

  background: var(--article-info-color)
  border-radius: 10px

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