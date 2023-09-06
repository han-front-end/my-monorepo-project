import type { IInnerTreeNode, ITreeNode } from './tree-type.ts'


export function generateInnerTree(tree: ITreeNode[], level = 0, path = [] as IInnerTreeNode[]): IInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    const o = {...cur} as IInnerTreeNode
    o.level = level

    // 记录调用栈
    if (path.length > 0 && path[path.length - 1].level >= o.level) {
      console.log(path[path.length - 1].label,o.label)
    }
    if (path.length > 0 && path[path.length - 1].level >= o.level) {
      // 记录 子 => 父
      path = path.filter(item => item.level <= o.level)
      path.pop()
    }
    // 记录 父 => 子
    path.push(o)

    //获取parentNode
    const parentNode = path[path.length - 2]
    if (parentNode) {
      o.parentId = parentNode.id
    }

    // 判断cur是否存在children，如果存在则递归遍历
    if (o.children) {
      // 如果存在子节点，将都有的子节点拼接上
      const childrenNode = generateInnerTree(o.children, level, path)
      delete o.children
      return prev.concat(o, childrenNode)
    } else {
      // 叶子节点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}