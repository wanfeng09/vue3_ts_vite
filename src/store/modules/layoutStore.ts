import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layoutName', () => {
  const isCollapse = ref(false)
  // 全屏
  const ifFull = ref(false)

  const updateCollapse = (payload: boolean) => {
    isCollapse.value = payload
  }

  const updateFull = (payload: boolean) => {
    ifFull.value = payload
  }

  return {
    isCollapse,
    ifFull,
    updateCollapse,
    updateFull
  }
})
