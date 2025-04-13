<template>
  <div id="layout-base" class="flex min-h-screen flex-col">
    <BHeader />
    <BMain />
    <BFooter />
  </div>
</template>

<script setup lang="ts">
import BHeader from './BHeader.vue'
import BMain from './BMain.vue'
import BFooter from './BFooter.vue'
</script>

<style scoped>
#layout-base {
  @apply bg-[var(--color-bg)] text-[var(--color-text)];
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
