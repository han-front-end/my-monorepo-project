//创建样式文件的模板
export default function genStyleTemplate(name: string) {
  return `\
.m-${name} {
  /* your component style */
  
}
`
}