<template>
  <header class="header p-4">
    <div class="flex flex-1 items-center">
      <button class="button-icon is-white">
        <span class="icon text-sm">
          <i class="fa-solid fa-bars"></i>
        </span>
      </button>

      <h1 class="text-2xl font-bold ml-2" @click="router.push('/')">Liiiiiiiirmi</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid var(--lirmi-color-border);
  background-color: var(--lirmi-bg);
  color: var(--lirmi-color-text);
}
</style>
