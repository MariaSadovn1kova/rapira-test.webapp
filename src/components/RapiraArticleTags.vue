
<script lang="ts" setup>
import { RapiraTag } from '@/components';

interface IProps {
  tags: string[]
}
const props = defineProps<IProps>();
</script>

<template>
  <div class="article__tags flex">
    <RapiraTag
      v-for="tag in tags"
      :key="`tag__${tag}`"
      :tagText="tag"
      />
  </div>
</template>

<style lang="sass" scoped>
.article__tags
  gap: 10px
</style>