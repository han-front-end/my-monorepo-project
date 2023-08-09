import {ExtractPropTypes, PropType} from "vue";

export type IButtonType = 'primary' | 'secondary' | 'text' | 'error'

export type IButtonSize = 'small' | 'medium' | 'large'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false,
  }
} as const

// ExtractPropTypes 魔术类型 从制定的泛型类型中抽出类型定义 从具体的常量定义中把类型反推出来
export type ButtonProps = ExtractPropTypes<typeof buttonProps>