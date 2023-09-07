import { defineComponent, toRefs} from "vue"
import { treeProps, TreeProps} from "./tree-type"
import {useTree} from "./composables/use-tree-ts.ts";

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps) {
    const {data} = toRefs(props)
    const { expandedTree, toggleNode } = useTree(data)
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