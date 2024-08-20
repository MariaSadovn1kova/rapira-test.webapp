<script lang="ts" setup>
import type { IComment } from '@/shared';

interface IProps {
  comment: IComment
}
const props = defineProps<IProps>();
</script>

<template>
  <div>{{ comment }}</div>
</template>

<style>

</style>