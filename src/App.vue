<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
import { RapiraNavbar } from '@/components';

</script>

<template>
  <div class="app">

    <header>
      <RapiraNavbar />
    </header>
    
    <RouterView />

  </div>
</template>

<style lang="sass" scoped>
.app
  width: 100%
</style>
