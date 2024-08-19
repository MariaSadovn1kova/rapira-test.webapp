<script lang="ts" setup>
interface IProps {
  tagText: string
}
const props = defineProps<IProps>();
</script>

<template>
  <div class="tag">
    <span class="tag__text">{{ tagText }}</span>
  </div>
</template>

<style lang="sass" scoped>
.tag
  height: 26px
  padding: 0 14px

  color: var(--tag-color)

  border-radius: 20px
  background: var(--tag-background)

.tag__text 
  font-size: 14px
  font-weight: 500
  line-height: 14px
  text-align: center

</style>