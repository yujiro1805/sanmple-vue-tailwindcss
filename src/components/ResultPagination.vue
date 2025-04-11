<template>
  <div class="flex justify-center items-center flex-wrap gap-2 text-sm">
    <button
      class="w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-100 transition"
      @click="$emit('change', 1)"
      :disabled="currentPage === 1"
    >
      &laquo;
    </button>
    <button
      class="w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-100 transition"
      @click="$emit('change', currentPage - 1)"
      :disabled="currentPage === 1"
    >
      &lsaquo;
    </button>

    <button
      v-for="page in pages"
      :key="page"
      class="w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-100 transition"
      :class="{ 'bg-blue-600 text-white': page === currentPage }"
      @click="$emit('change', page)"
    >
      {{ page }}
    </button>

    <button
      class="w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-100 transition"
      @click="$emit('change', currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      &rsaquo;
    </button>
    <button
      class="w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-100 transition"
      @click="$emit('change', totalPages)"
      :disabled="currentPage === totalPages"
    >
      &raquo;
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()

const pages = [...Array(9).keys()].map((i) => i + 1)
</script>
