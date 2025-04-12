<template>
  <div class="flex flex-1">
    <MySidebar />

    <main class="flex-1 p-4">
      <h1 class="text-primary">Main Content</h1>
      <p>Este es el contenido principal de la página.</p>
      <p>Puedes agregar más contenido aquí.</p>

      <button class="button rounded-lg px-4 py-2 font-medium">Botón</button>
    </main>
  </div>
</template>

<script setup lang="ts">
import MySidebar from '@/components/MySidebar.vue'
</script>

<style scoped lang="scss"></style>
