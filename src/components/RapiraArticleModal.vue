<script lang="ts" setup>
import { ref } from 'vue';

import { 
  RapiraModal, 
  RapiraComment, 
  RapiraArticleInfo, 
  RapiraArticleTags,
  RapiraCommentInput
} from '@/components';
import type { IArticle } from '@/shared';
import { useArticleStore } from '@/entities';

const articleStore = useArticleStore();

interface IProps {
  isOpen: boolean
  article: IArticle
}

const props = defineProps<IProps>();
const emit = defineEmits(['onArticleModalClose']);

const commentText = ref('');

const closeArticleModal = () => {
  emit('onArticleModalClose');
}

const createComment = () => {
  articleStore.addComment(commentText.value, props.article.id);
  commentText.value = '';
}
</script>

<template>
  <RapiraModal 
    v-if="isOpen" 
    @onModalClose="closeArticleModal()"
  >
  
    <div class="article-modal flex flex-col">

      <div class="article-modal__header flex flex-col">

        <div class="flex justify-between">
          <h2 class="article-modal__title">{{ article.title }}</h2>
          <button 
            class="flex items-start mt-1"
            @click="closeArticleModal"
          >
            <img 
              src="@/assets/svg/btns/cross.svg"
              class="article-modal__close-btn"
            >
          </button>
        </div>

        <RapiraArticleInfo 
          :article="article"
        />

      </div>

      <div class="article-modal__img">
        <img 
          class="article-modal__img-content"
          :src="article.imgURL"
        >
      </div>

      <p class="article-modal__desc">{{ article.desc }}</p>

      <RapiraArticleTags 
        :tags="article.tags"
      />

      <div 
        class="article-modal__comms flex flex-col"
      >
        <p class="article-modal__comms-title">
          Комментариев <span class="article-modal__comms-count">{{ article.comments.length }}</span> 
        </p>
        <RapiraCommentInput 
          v-model="commentText"
          :charLimitation="250"
          @onSubmit="createComment()"
        />
        <div 
          v-if="article.comments.length" 
          class="article-modal__comms-container"
        >
          <RapiraComment
            v-for="comment in article.comments"
            :key="comment.id"
            :comment="comment"
          />
        </div>
      </div>

    </div>

  </RapiraModal>
</template>

<style lang="sass" scoped>
.article-modal
  width: var(--article-modal-width)
  
  gap: 15px

.article-modal__header
  gap: 10px

.article-modal__title
  width: var(--article-modal-title-width)

  font-size: 24px
  font-weight: 600
  line-height: 24px

.article-modal__img
  width: 100%
  height: var(--article-modal-image-height)

  border-radius: 12px
  overflow: hidden

.article-modal__img-content
  width: 100%
  height: 100%

  object-fit: cover
  object-position: center

.article-modal__desc
  font-size: 16px
  font-weight: 500
  line-height: 25px

.article-modal__close-btn
  width: 20px
  height: 20px

.article-modal__comms
  gap: 10px

.article-modal__comms-title
  color: var(--color-black-text)
  font-size: 16px
  font-weight: 600
  line-height: 16px

.article-modal__comms-count
  color: var(--color-gray-text)
  font-size: 16px
  font-weight: 500
  line-height: 16px
</style>