<template>
  <div class="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-semibold mb-6 border-b pb-2">マイナンバーカードの受付</h2>
    <form @submit.prevent="search" class="space-y-6">
      <!-- 受付日 -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          受付日 <span class="text-red-500">※必須</span>
        </label>
        <div class="flex items-center space-x-2">
          <input
            type="date"
            v-model="form.startDate"
            class="border rounded px-3 py-2 w-1/3 text-sm"
          />
          <span>〜</span>
          <input
            type="date"
            v-model="form.endDate"
            class="border rounded px-3 py-2 w-1/3 text-sm"
          />
          <button
            type="button"
            @click="setToday"
            class="ml-2 px-3 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
          >
            今日の日付
          </button>
        </div>
      </div>

      <!-- 氏名 -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">氏名</label>
          <input type="text" v-model="form.name" class="w-full border rounded px-3 py-2 text-sm" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">氏名（カナ）</label>
          <input type="text" v-model="form.kana" class="w-full border rounded px-3 py-2 text-sm" />
        </div>
      </div>

      <!-- 生年月日 -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">生年月日</label>
        <input
          type="date"
          v-model="form.birthDate"
          class="border rounded px-3 py-2 w-1/2 text-sm"
        />
      </div>

      <!-- 性別 -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">性別</label>
        <div class="flex space-x-6">
          <label class="inline-flex items-center">
            <input type="radio" value="" v-model="form.gender" class="form-radio" />
            <span class="ml-2">指定なし</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" value="male" v-model="form.gender" class="form-radio" />
            <span class="ml-2">男</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" value="female" v-model="form.gender" class="form-radio" />
            <span class="ml-2">女</span>
          </label>
        </div>
      </div>

      <!-- 検索ボタン -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm"
        >
          検索
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const today = new Date().toISOString().split('T')[0]

const form = reactive({
  startDate: '',
  endDate: '',
  name: '',
  kana: '',
  birthDate: '',
  gender: '',
})

function setToday() {
  form.startDate = today
  form.endDate = today
}

function search() {
  console.log('検索条件:', form)
}
</script>
