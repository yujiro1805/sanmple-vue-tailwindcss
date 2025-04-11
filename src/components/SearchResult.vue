<template>
  <div class="mt-10">
    <h2 class="text-xl font-semibold mb-4">検索結果</h2>
    <p class="text-sm text-gray-500 mb-4">{{ total }}件が該当</p>

    <!-- ページネーション（上） -->
    <ResultPagination :current-page="currentPage" :total-pages="totalPages" @change="changePage" />

    <!-- テーブル -->
    <div class="overflow-x-auto border rounded-lg mt-4 shadow-sm">
      <table class="min-w-full bg-white text-sm text-center">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="p-3 border">対象</th>
            <th class="p-3 border">項番</th>
            <th class="p-3 border">受付日時</th>
            <th class="p-3 border">氏名</th>
            <th class="p-3 border">生年月日</th>
            <th class="p-3 border">年齢</th>
            <th class="p-3 border">性別</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in paginatedData" :key="index" class="hover:bg-gray-50">
            <td class="p-2 border"><input type="radio" name="selected" /></td>
            <td class="p-2 border">{{ row.id }}</td>
            <td class="p-2 border">{{ row.date }}<br />{{ row.time }}</td>
            <td class="p-2 border whitespace-pre-wrap">{{ row.fullName }}</td>
            <td class="p-2 border">{{ row.birthDate }}</td>
            <td class="p-2 border whitespace-pre-wrap">{{ row.age }}</td>
            <td class="p-2 border">{{ row.gender }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ページネーション（下） -->
    <ResultPagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @change="changePage"
      class="mt-6"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ResultPagination from './ResultPagination.vue'

interface Row {
  id: number
  date: string
  time: string
  fullName: string
  birthDate: string
  age: string
  gender: string
}

const data = ref<Row[]>(
  Array.from({ length: 99 }, (_, i) => ({
    id: i + 1,
    date: '2024/12/31',
    time: '12:00:00',
    fullName: 'ヨボク タロウ\n予防 太郎',
    birthDate: '2000/01/01',
    age: '11歳11か月\n11週1日',
    gender: '男',
  })),
)

const total = computed(() => data.value.length)
const currentPage = ref(4)
const pageSize = 10
const totalPages = computed(() => Math.ceil(total.value / pageSize))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return data.value.slice(start, start + pageSize)
})

function changePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>
