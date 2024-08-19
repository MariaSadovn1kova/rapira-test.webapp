<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';

</script>

<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal__content">
        ffdsf
      </div>
    </div>
  </Teleport>
</template>

<style lang="sass" scoped>
.modal
  width: 100vw
  height: 100vh

  position: fixed

  top: 0
  left: 0

  z-index: 4

  background: rgba( #000000, 0.3)
  animation: app-overlay 0.3s
  animation-fill-mode: forwards

.modal__content 
  position: relative
  background: white
  border-radius: 32px

</style>