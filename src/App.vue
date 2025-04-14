<template>
  <div class="min-h-screen bg-white max-w-screen">
    <HeaderBar />
    <main class="max-w-screen-lg mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
</script>
