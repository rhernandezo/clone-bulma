<template>
  <header class="header p-4">
    <div class="flex flex-1">
      <h1 class="text-2xl font-bold">Clone Bulma</h1>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  @apply p-4;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
}
</style>
