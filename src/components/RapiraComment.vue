<script lang="ts" setup>
import { computed } from 'vue';

import type { IComment } from '@/shared';
import { dateFormattingWithTime } from '@/shared';

interface IProps {
  comment: IComment
}
const props = defineProps<IProps>();

const formattedTime = computed(() => { return dateFormattingWithTime(props.comment.date.toISOString()) });
</script>

<template>
  <div class="article-comment flex">
    <div class="article-comment__user-img">
      <img 
        class="article-comment__user-img-content" 
        :src="comment.userImg"
      >
    </div>

    <div class="article-comment__content flex flex-col">
      <p class="article-comment__user-name text-nowrap text-ellipsis overflow-hidden">{{ comment.userName }}</p>
      <p class="article-comment__user-comment text-nowrap text-ellipsis overflow-hidden">{{ comment.commentText }}</p>
      <p class="article-comment__date">{{ formattedTime }}</p>
    </div>

  </div>
</template>

<style lang="sass" scoped>
.article-comment
  width: 100%
  padding: 12px
  gap: 12px

.article-comment__user-img
  width: 38px
  height: 38px

  overflow: hidden
  border-radius: 100px

.article-comment__user-img-content
  width: 100%
  height: 100%

  object-fit: cover
  object-position: center

.article-comment__user-name
  width: var(--article-comment-width)

  color: var(--color-comment-user-name)
  font-size: 16px
  font-weight: 600
  line-height: 16px

.article-comment__user-comment
  width: var(--article-comment-width)

  color: var(--color-comment-text)
  font-size: 14px
  font-weight: 500
  line-height: 14px

.article-comment__content 
  gap: 6px

.article-comment__date
  color: var(--color-comment-date)
  font-size: 12px
  font-weight: 500
  line-height: 12px
</style>