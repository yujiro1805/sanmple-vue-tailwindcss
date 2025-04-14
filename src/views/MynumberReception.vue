<template>
  <div class="bg-white min-h-screen py-10 px-4 text-gray-800">
    <div class="rounded-lg max-w-screen-xl mx-auto px-6 py-8 space-y-12">
      <h2 class="text-2xl font-bold">マイナンバーカードの受付</h2>
      <SearchForm />
      <SearchResult />

      <!-- トップへ戻るボタン -->
      <button
        @click="goToTop"
        class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
        title="トップページへ戻る"
      >
        ↑
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchForm from '@/components/SearchForm.vue'
import SearchResult from '@/components/SearchResult.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToTop = () => router.push('/')
</script>
