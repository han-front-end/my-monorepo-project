import {defineComponent, toRefs} from "vue";
import {buttonProps, ButtonProps} from "@/button/src/button-types.ts";

export default defineComponent({
  name: 'MButton',
  props: buttonProps,
  setup(props: ButtonProps,{ slots}) {
    const { type } = toRefs(props)
    const defaultSlot  = slots.default ? slots.default : '按钮'
    return () => {
      return <button class={`m-btn m-btn--${type.value}`}>{defaultSlot}</button>
    }
  }
})