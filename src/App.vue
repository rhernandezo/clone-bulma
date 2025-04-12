<template>
  <button
    class="absolute bottom-4 right-4 button-circle rounded-full w-12 h-12"
    @click="toggleDarkMode"
  >
    {{ esDark ? '🌙' : '☀️' }}
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
