<script setup lang="ts">
import MButton from "@/button/src/button.tsx";
</script>

<template>
  <m-button type="primary" size="large" block>确定</m-button>
  <m-button type="primary" size="medium">确定</m-button>
  <m-button type="primary" size="small" disabled>确定</m-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
