<script setup lang="ts">
import SearchForm from '../components/SearchForm.vue'
import SearchResult from '../components/SearchResult.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToReception() {
  console.log('受付画面に進みます')
  // router.push(...) などページ遷移にも対応可能
}
function goToTop() {
  console.log('トップページへ遷移')
  router.push('/').then(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // スムーズにスクロール
    })
  })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6 space-y-8">
    <!-- 検索フォーム -->
    <SearchForm />

    <!-- 検索結果 -->
    <SearchResult />

    <!-- 戻る・受付ボタン -->
    <div class="flex justify-between items-center">
      <!-- 左：戻るリンク -->
      <a href="#" class="text-blue-600 hover:underline text-sm">戻る</a>

      <!-- 右：受付画面に進む -->
      <button
        class="bg-blue-600 text-white text-sm px-6 py-2 rounded hover:bg-blue-700"
        @click="goToReception"
      >
        受付画面に進む
      </button>
    </div>
    <!-- トップに戻るボタン -->
    <button
      @click="goToTop"
      class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      title="トップページへ戻る"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </div>
</template>
