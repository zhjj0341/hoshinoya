(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd92c862"],{b301:function(t,n,i){"use strict";var e=i("d039");t.exports=function(t,n){var i=[][t];return!i||!e((function(){i.call(null,n||function(){throw 1},1)}))}},c901:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"subindex"},[i("ul",[i("li",{staticClass:"close-icon"},[i("div",[t._v("训练设置")]),i("i",{staticClass:"close-icon el-icon-close",on:{click:t.CloseModal}})]),i("li",[t._v(" 初始资产: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.trainSetting["initAmount"],expression:"trainSetting['initAmount']"}],attrs:{type:"text"},domProps:{value:t.trainSetting["initAmount"]},on:{input:function(n){n.target.composing||t.$set(t.trainSetting,"initAmount",n.target.value)}}})]),i("li",{staticStyle:{background:"#217cd9",color:"#fff"},on:{click:t.ChangeSetting}},[t._v(" 开始训练 ")])])])},o=[],a=(i("c975"),{name:"subIndex",props:["FrameID","FrameTitle"],data:function(){return{trainSetting:{initAmount:1e6}}},created:function(){},watch:{FrameID:function(t){this.FrameId=t},FrameTitle:function(t){var n=this.FrameList.indexOf(t);this.ActiveIndex=n}},methods:{CloseModal:function(){this.$emit("close",!1)},ChangeSetting:function(t){this.$emit("init",this.trainSetting),this.CloseModal()}}}),c=a,s=i("2877"),r=Object(s["a"])(c,e,o,!1,null,null,null);n["default"]=r.exports},c975:function(t,n,i){"use strict";var e=i("23e7"),o=i("4d64").indexOf,a=i("b301"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,r=a("indexOf");e({target:"Array",proto:!0,forced:s||r},{indexOf:function(t){return s?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);