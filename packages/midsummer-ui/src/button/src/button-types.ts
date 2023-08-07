import {ExtractPropTypes, PropType} from "vue";

export type IButtonType = 'primary' | 'secondary' | 'text' | 'error'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  }
} as const

// ExtractPropTypes 魔术类型 从制定的泛型类型中抽出类型定义 从具体的常量定义中把类型反推出来
export type ButtonProps = ExtractPropTypes<typeof buttonProps>