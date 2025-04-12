<template>
  <div id="layout-base" class="flex min-h-screen flex-col">
    <MyHeader />
    <MyMain />
    <MyFooter />
  </div>
</template>

<script setup lang="ts">
import MyHeader from '@/components/MyHeader.vue'
import MyMain from '@/components/MyMain.vue'
import MyFooter from '@/components/MyFooter.vue'
</script>

<style scoped>
#layout-base {
  @apply bg-[var(--color-bg)] text-[var(--color-text)];
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
