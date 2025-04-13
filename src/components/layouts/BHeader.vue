<template>
  <header class="header p-4">
    <div class="flex flex-1">
      <!-- <span class="icon text-sm">
        <i class="fa-solid fa-bars"></i>
      </span> -->

      <h1 class="text-2xl font-bold" @click="router.push('/')">Clone Bulma</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped lang="scss">
.header {
  @apply p-4;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
