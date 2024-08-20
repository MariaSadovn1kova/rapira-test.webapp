<script lang="ts" setup>
import { 
  RapiraModal, 
  RapiraComment, 
  RapiraArticleInfo, 
  RapiraArticleTags,
} from '@/components';
import type { IArticle } from '@/shared';

interface IProps {
  isOpen: boolean
  article: IArticle
}

const props = defineProps<IProps>();
const emit = defineEmits(['onArticleModalClose']);

const closeArticleModal = () => {
  emit('onArticleModalClose');
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
            class="flex items-start"
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

      <RapiraArticleTags 
        :tags="article.tags"
      />

      <p class="article-modal__desc">{{ article.desc }}</p>

      <div class="article-modal__comms">
        <p class="article-modal__comms-title">
          Комментариев <span class="article-modal__comms-count">{{ article.comments.length }}</span> 
        </p>

        <div>
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
  font-size: 24px
  font-weight: 600
  line-height: 24px

.article-modal__img
  width: 100%
  height: 373px

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