<script lang="ts" setup>
import { computed } from 'vue';

interface IProps {
  modelValue: string
  width?: string
  placeholder?: strin
  hasError?: boolean
}

const props = defineProps<IProps>();
const emit = defineEmits(['update:modelValue']);

const modelStr = computed({
  get() { return props.modelValue },
  set(val) { emit('update:modelValue', val) }
});

const wrapperStyles = computed(() => ({
  width: props.width ? `${props.width}` : `auto`
}));

const clearInput = () => {
  modelStr.value = ''
}
</script>

<template>

  <div 
    class="input"
    :style="wrapperStyles"
  >

    <textarea
      v-model="modelStr"
      class="input__field h-full w-full custom-scroll"
      :class="[{ 'input__field--active' : modelStr.length }, { 'input__field--has-error' : hasError }]"
      :placeholder="placeholder || 'Введите текст...'"
    />

    <button
      v-if="modelStr.length"
      class="input__clear-btn"
      @click="clearInput"
    >
      <img 
        src="@/assets/svg/btns/cross.svg"
        class="article-modal__close-btn"
      >
    </button>

  </div>

</template>

<style lang="sass" scoped>
.input
  position: relative

.input__field
  height: 52px
  padding: 12px 45px 15px 15px
  resize: none
  
  border-radius: 6px
  border: 1px solid var(--color-text-area-border)
  transition: var(--transition)

.input__field--active 
  height: 130px

.input__field--has-error 
  border-color: var(--color-error) !important

.input__field--has-error:focus 
  box-shadow: 0px 0px 0px 2px #F1416C52 !important

.input__field::placeholder 
  color: var(--placeholder-color)

.input__field:focus 
  height: 130px
  box-shadow: 0px 0px 0px 2px #3E97FF52
  border-color: var(--color-input-border)
  outline: none !important

.input__clear-btn
  position: absolute
  top: 10px
  right: 10px
</style>