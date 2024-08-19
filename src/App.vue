<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="app">

    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    
    <RouterView />

  </div>
</template>

<style lang="sass" scoped>
.app
  width: 100%
</style>
