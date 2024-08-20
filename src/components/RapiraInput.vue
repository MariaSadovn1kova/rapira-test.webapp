<script lang="ts" setup>
import { computed } from 'vue';

interface IProps {
  modelValue: string
  height?: string
  width?: string
  bgColor?: string
  withStartIcon?: boolean
  borderColor?: string
  placeholder?: string
}

const props = defineProps<IProps>();
const emit = defineEmits(['update:modelValue']);

const modelStr = computed({
  get() { return props.modelValue },
  set(val) { emit('update:modelValue', val) }
});

const wrapperStyles = computed(() => ({
  height: props.height ? `${props.height}` : `auto`,
  width: props.width ? `${props.width}` : `auto`
}));

const inputStyles = computed(() => ({
  background: props.bgColor ? props.bgColor : 'var(--color-input-bg-default)',
  padding: props.withStartIcon ? `15px 34px` : `15px 34px 15px 15px`,
  border: props.borderColor ? `1px solid ${props.borderColor}` : `1px solid transparent`
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

    <div 
      v-if="withStartIcon"
      class="input__start-icon h-full flex content-center flex-wrap"
    >
      <div class="input__start-icon-content">
        <slot />
      </div>
    </div>

    <input 
      v-model="modelStr"
      type="text"
      class="input__field h-full w-full"
      :placeholder="placeholder || 'Введите текст...'"
      :style="inputStyles"
    >

    <button
      v-if="modelStr.length"
      class="input__clear-btn h-full"
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

.input__start-icon
  position: absolute
  top: 0
  left: 10px

.input__start-icon-content
  width: 14px
  height: 14px

.input__field
  border-radius: 6px

input:focus 
  border-color: red
  outline: none !important

.input__clear-btn
  position: absolute
  top: 0
  right: 10px
</style>