import {defineComponent, toRefs} from "vue"
import {treeProps, TreeProps} from "./tree-type"

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps) {
    return () => {
      return (
        <div class="m-tree"></div>
      )
    }
  }
}