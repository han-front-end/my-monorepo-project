import {defineComponent, ref, toRefs} from "vue"
import {treeProps, TreeProps} from "./tree-type"
import { generateInnerTree } from "./utils.ts";
import tree from "@/tree";

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data} = toRefs(props)
    const innerData = ref(generateInnerTree(data.value))
    console.log(innerData.value.map(treeNode => treeNode.label))
    return () => {
      return <div class="m-tree">{
        innerData.value.map(treeNode => treeNode.label)
      }</div>
    }
  }
})