import {defineComponent, toRefs} from "vue"
import {treeProps, TreeProps} from "./tree-type"

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data: innerData } = toRefs(props)
    return () => {
      return <div class="m-tree">{
        innerData.value.map(treeNode => treeNode.label)
      }</div>
    }
  }
})