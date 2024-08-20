<script lang="ts" setup>
import { computed } from 'vue';
import { RapiraTextArea } from '@/components';

interface IProps {
  modelValue: string
  charLimitation: number
}

const props = defineProps<IProps>();
const emit = defineEmits(['update:modelValue', 'onSubmit']);

const modelStr = computed({
  get() { return props.modelValue },
  set(val) { emit('update:modelValue', val) }
});

const clearInput = () => {
  modelStr.value = ''
}

const onSubmit = () => {
  emit('onSubmit');
}

const hasError = computed(() => { return props.charLimitation < modelStr.value.length });
</script>

<template>
  <div class="comment-input">
    
    <RapiraTextArea
      v-model="modelStr"
      height="130px"
      :hasError="hasError"
      placeholder="Введите комментарий"
    />

    <div
      class="flex flex-col comment-info__sub"
      :class="{ 'comment-info__sub--active' : modelStr.length }"
    >

      <div class="comment-input__info">
        <span>
          <span :class="{ 'comment-input__info--has-error' : hasError }">{{ modelStr.length }}</span>
           из {{ charLimitation }} символов
        </span>
      </div>

      <div class="flex justify-end comment-info__btns">
        <button 
          class="comment-info__btn comment-info__btn--alt"
          @click="clearInput"
        >
          Отмена
        </button>
        <button 
          class="comment-info__btn comment-info__btn--main"
          :class="{ 'disabled' : hasError }"
          @click="onSubmit()"
        >
          Опубликовать
        </button>
      </div>

    </div>

  </div>
</template>

<style lang="sass" scoped>
.comment-info__sub
  height: 0
  opacity: 0
  overflow: hidden
  transition: var(--transition)

.comment-info__sub--active
  margin-top: 6px
  height: 54px
  opacity: 1

.comment-input__info
  color: var(--color-gray-text)
  font-size: 12px
  font-weight: 500
  line-height: 12px

.comment-input__info--has-error
  transition: var(--transition)
  color: var(--color-error)

.comment-info__btn
  padding: 12px 35px
  border-radius: 6px

  font-size: 13px
  font-weight: 700
  line-height: 14px

.comment-info__btns
  gap: 10px

.comment-info__btn--main
  background: var(--color-main-button-bg)
  color: var(--color-main-button-text)
  transition: var(--transition)

.comment-info__btn--alt
  background: var(--color-main-button-alt-bg)
  color: var(--color-main-button-alt-text)

.disabled
  pointer-events: none
  background: var(--color-button-disabled-bg)
  color: var(--color-button-disbled-color)
</style>