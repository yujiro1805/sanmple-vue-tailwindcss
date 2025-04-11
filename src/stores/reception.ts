import { defineStore } from 'pinia'

export const useReceptionStore = defineStore('reception', {
  state: () => ({
    startDate: '',
    endDate: '',
    name: '',
    kana: '',
    birthDate: '',
    gender: '',
  }),
  actions: {
    setToday() {
      const today = new Date().toISOString().split('T')[0]
      this.startDate = today
      this.endDate = today
    },
  },
})
