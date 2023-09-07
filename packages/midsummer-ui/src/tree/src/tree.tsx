import {computed, defineComponent, ref, toRefs} from "vue"
import {IInnerTreeNode, treeProps, TreeProps} from "./tree-type"
import {generateInnerTree} from "./utils.ts";

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps) {
    const {data} = toRefs(props)
    const innerData = ref(generateInnerTree(data.value))
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
    return () => {
      return <div class="m-tree">{
        expandedTree.value.map(treeNode => {
          return (
            <div
              class="m-tree-node flex"
              style={{paddingLeft: `${24 * (treeNode.level - 1)}px`}}
            >
              {/*{折叠图标}*/}
              {/*{判断当前节点是否是叶子节点}*/}
              {
                treeNode.isLeaf ?
                  <span style={{display: 'inline-block', width: '24px'}}></span> :
                  <svg style={{transform: `${treeNode.expanded ? 'rotate(90deg)' : ''}`}} t="1694021114640" class="icon"
                       viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1686"
                       data-darkreader-inline-fill="" width="24" height="24"
                       onClick={() => toggleNode(treeNode)}
                  >
                    <path d="M755.974268 512 268.025732 146.975708l0 730.048584L755.974268 512" p-id="1687"></path>
                  </svg>

              }
              {/*{标签}*/}
              {treeNode.label}
            </div>
          )
        })
      }</div>
    }
  }
})