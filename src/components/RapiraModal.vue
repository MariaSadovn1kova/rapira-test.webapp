<script lang="ts" setup>
import { vOnClickOutside } from '@vueuse/components';

const emit = defineEmits(['onModalClose']);

const onClose = () => {
  emit('onModalClose');
}
</script>

<template>
  <Teleport to="body">
    <div class="modal">
      <div 
        v-on-click-outside="onClose"
        class="modal__content"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style lang="sass" scoped>
.modal
  width: 100vw
  height: 100%

  position: fixed
  display: flex
  align-items: center
  justify-content: center

  top: 0
  left: 0

  z-index: 4

  background: rgba( #000000, 0.3)
  animation: app-overlay 0.3s
  animation-fill-mode: forwards

.modal__content 
  padding: 15px
  border-radius: 15px
  background: white

</style>