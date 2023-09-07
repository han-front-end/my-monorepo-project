import {computed, ref, Ref, unref} from "vue";
import {generateInnerTree} from "../utils.ts";
import {IInnerTreeNode, ITreeNode} from "../tree-type.ts";

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)))
  const toggleNode = (node: IInnerTreeNode) => {
    // 在原始列表中获取该节点
    let cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
    }
  }
  const expandedTree = computed(() => {
    let expandNodes: IInnerTreeNode[] = []
    const result = []

    // 循环列表 找出expanded
    for (const item of innerData.value) {
      // 如果节点在排除列表中就跳过
      if (expandNodes.includes(item)) {
        continue
      }
      // 如果节点折叠 那么找出所有子节点
      if (item.expanded !== true) {
        expandNodes = getChildren(item)
      }
      result.push(item)
    }
    return result
  })
  // 获取所有子节点
  const getChildren = (node: IInnerTreeNode) => {
    let result = []
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到她后面所有的子节点（level比当前节点大）
    for (let i = startIndex + 1; i < innerData.value.length && node.level < innerData.value[i].level; i++) {
      result.push(innerData.value[i])
    }
    return result
  }

  return {
    innerData,
    toggleNode,
    expandedTree,
    getChildren,
  }
}