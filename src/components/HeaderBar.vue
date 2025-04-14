<template>
  <header class="bg-white border-b px-6 py-3 flex items-center text-sm text-gray-800">
    <!-- 左側：メニュー＋タイトル -->
    <div class="flex items-center space-x-3">
      <span class="text-xl border-line">≡メニュー</span>
      <h1 class="text-lg font-semibold">予予・請求システム</h1>
    </div>

    <!-- 中央：権限適用ユーザ（選択可能） -->
    <div class="flex items-center space-x-2 mx-auto">
      <label for="user-select" class="whitespace-nowrap">権限適用ユーザ：</label>
      <select
        id="user-select"
        class="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        v-model="selectedUser"
      >
        <option value="user1">接種太郎</option>
        <option value="user2">選択肢2</option>
        <option value="user3">選択肢3</option>
      </select>
    </div>

    <!-- 右側：ログインユーザ情報 -->
    <div class="flex items-center space-x-4 whitespace-nowrap">
      <span>ログインユーザ：接種花子</span>
      <span>前回ログイン：2025/01/01 00:00:00</span>
      <a href="#" class="text-blue-600 hover:underline">ログアウト</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedUser = ref('user1')
</script>
