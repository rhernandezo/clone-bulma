<template>
  <button
    class="absolute bottom-4 right-4 button-circle rounded-full w-12 h-12"
    @click="toggleDarkMode"
  >
    <span v-if="esDark" class="icon text-sm">
      <i class="fa-solid fa-moon"></i>
    </span>
    <span v-else class="icon text-sm">
      <i class="fa-solid fa-sun"></i>
    </span>
  </button>
  <LayoutBase :class="esDark ? 'dark' : ''" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import LayoutBase from './components/layouts/LayoutBase.vue'

const esDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

const toggleDarkMode = () => {
  esDark.value = !esDark.value
}
</script>

<style lang="scss">
@use './styles/app.scss';
</style>
