import { defineComponent as i, toRefs as p, createVNode as c } from "vue";
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
}, n = /* @__PURE__ */ i({
  name: "MButton",
  props: f,
  setup(e, {
    slots: t
  }) {
    const {
      type: a,
      size: l,
      disabled: o,
      block: s
    } = p(e), u = t.default ? t.default() : "按钮", d = s.value ? "m-btn--block" : "";
    return () => c("button", {
      disabled: o.value,
      class: `m-btn m-btn--${a.value} m-btn--${l.value} ${d}`
    }, [u]);
  }
}), m = {
  install(e) {
    e.component(n.name, n);
  }
}, r = [m], y = {
  install(e) {
    r.forEach((t) => e.use(t));
  }
};
export {
  n as Button,
  y as default
};
