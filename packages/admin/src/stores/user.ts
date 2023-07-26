import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user',() => {
  const count = ref(0)
  function add(num: number) {
    count.value++
  }
  return {add, count}
})

// - 热更新时保持store里的状态
if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useUserStore,import.meta.hot))
}
