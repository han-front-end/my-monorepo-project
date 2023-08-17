import { defineComponent as c, toRefs as r, createVNode as b } from "vue";
const f = {
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
}, n = /* @__PURE__ */ c({
  name: "MButton",
  props: f,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: l,
      disabled: a,
      block: s
    } = r(t), u = e.default ? e.default() : "按钮", d = s.value ? "m-btn--block" : "";
    return () => b("button", {
      disabled: a.value,
      class: `m-btn m-btn--${o.value} m-btn--${l.value} ${d}`
    }, [u]);
  }
}), i = {
  install(t) {
    t.component(n.name, n);
  }
}, p = [i], y = {
  install(t) {
    p.forEach((e) => t.use(e));
  }
};
export {
  n as Button,
  y as default
};
