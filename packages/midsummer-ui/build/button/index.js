import { defineComponent as p, toRefs as i, createVNode as m } from "vue";
const b = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  }
}, a = /* @__PURE__ */ p({
  name: "MButton",
  props: b,
  setup(e, {
    slots: t
  }) {
    const {
      type: o,
      size: l,
      disabled: n,
      block: s
    } = i(e), d = t.default ? t.default() : "按钮", u = s.value ? "m-btn--block" : "";
    return () => m("button", {
      disabled: n.value,
      class: `m-btn m-btn--${o.value} m-btn--${l.value} ${u}`
    }, [d]);
  }
}), r = {
  install(e) {
    e.component(a.name, a);
  }
};
export {
  a as Button,
  r as default
};
