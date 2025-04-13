<template>
  <div class="flex flex-1">
    <BSidebar />

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import BSidebar from './BSidebar.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss"></style>
