# 树🌲
Tree组件基本用法，传入
:::demo 
```vue

<template>
  <m-tree :data="data"></m-tree>
</template>

<script setup>
  const data = [
    {
      label: 'docs',
      id: 'node-1',
      level: 1,
    },
    {
      label: 'packages',
      id: 'node-2',
      expanded: true,
      level: 1,
    },
    {
      label: 'vite',
      id: 'node-2-1',
      parentId: 'node-2',
      expanded: true,
      level: 2,
    },
    {
      label: 'README.md',
      id: 'node-2-1-1',
      parentId: 'node-2-1',
      isLeaf: true,
      level: 3,
    },
    {
      label: 'scripts',
      id: 'node-3',
      level: 1,
    },
    {
      label: 'pnpm-workspace.yaml',
      id: 'node-4',
      level: 1,
      isLeaf: true,
    }
  ]
</script>
```
:::