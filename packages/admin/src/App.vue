<script setup lang="ts">
import {useUserStore} from "@/stores/user";

const user = useUserStore()

const num = ref(0)
const add = () => {
  num.value++
}
</script>

<template>
  <router-view></router-view>
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
}
</style>