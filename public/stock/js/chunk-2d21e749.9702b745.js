(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e749"],{d645:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":""},on:{change:e.OriginChange},model:{value:e.origin,callback:function(n){e.origin=n},expression:"origin"}},[i("el-option",{attrs:{label:"重置",value:""}}),e._l(e.origins,(function(e){return i("el-option",{key:e.url,attrs:{label:e.label+" ("+e.name+")",value:e.name}})}))],2),i("el-button",{attrs:{type:"primary"},on:{click:e.handleClick}},[e._v("确定")]),e._v(" 可以手动输入ip/域名 ")],1)},l=[],o={data:function(){return{origin:localStorage.origin||"",origins:[]}},methods:{OriginChange:function(e){e?localStorage.origin=e:localStorage.removeItem("origin")},handleClick:function(){location.href="/"}},created:function(){}},a=o,r=i("2877"),c=Object(r["a"])(a,t,l,!1,null,null,null);n["default"]=c.exports}}]);