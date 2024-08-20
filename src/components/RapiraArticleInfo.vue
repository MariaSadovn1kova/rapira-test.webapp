<script lang="ts" setup>
import { computed } from 'vue';

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
</template>

<style lang="sass" scoped>
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
</style>