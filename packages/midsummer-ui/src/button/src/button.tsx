import {defineComponent, toRefs} from "vue";
import {buttonProps, ButtonProps} from "./button-types.ts";

export default defineComponent({
  name: 'MButton',
  props: buttonProps,
  setup(props: ButtonProps,{ slots}) {
    const { type, size, disabled, block} = toRefs(props)
    // 默认插槽
    const defaultSlot  = slots.default ? slots.default() : '按钮'
    // block
    const blockCls = block.value ? 'm-btn--block' : ''
    return () => {
      return <button disabled={disabled.value} class={`m-btn m-btn--${type.value} m-btn--${size.value} ${blockCls}`}>{defaultSlot}</button>
    }
  }
})