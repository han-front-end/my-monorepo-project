(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e["midsummer-ui"]={},e.Vue))})(this,function(e,t){"use strict";const l={type:{type:String,default:"secondary"},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1}},u=t.defineComponent({name:"MButton",props:l,setup(n,{slots:o}){const{type:d,size:a,disabled:f,block:p}=t.toRefs(n),c=o.default?o.default():"按钮",m=p.value?"m-btn--block":"";return()=>t.createVNode("button",{disabled:f.value,class:`m-btn m-btn--${d.value} m-btn--${a.value} ${m}`},[c])}}),s=[{install(n){n.component(u.name,u)}}],i={install(n){s.forEach(o=>n.use(o))}};e.Button=u,e.default=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
