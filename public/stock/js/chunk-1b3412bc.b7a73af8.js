(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b3412bc"],{"92ab":function(t,a,e){},c2d8:function(t,a,e){"use strict";var s=e("92ab"),c=e.n(s);c.a},fcde:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"isshow"},[e("div",{staticClass:"show-hide"},[e("div",{staticClass:"exchangeInfoT"},[e("table",[e("tbody",[e("tr",[e("td",[t._v("委差")]),e("td",[e("span",{staticClass:"pe"},[t._v(t._s(t.StockData.BookDiffer.Text))])]),e("td",{staticClass:"clear"},[e("span",{staticClass:"name"},[t._v("委比")]),e("span",{staticClass:"flowMarketV"},[t._v(t._s(t.StockData.BookRate.Text)+"%")])]),e("td",[t._v("量比")]),e("td",[e("span",{staticClass:"flowMarketV"},[t._v(t._s(t.StockData.Volratio.Text))])])]),e("tr",[e("td",[t._v("PE")]),e("td",[e("span",{staticClass:"pe"},[t._v(t._s(t.StockData.Pe.Text))])]),e("td",{staticClass:"clear"},[e("span",{staticClass:"name"},[t._v("振幅")]),e("span",{staticClass:"amplitude"},[t._v(t._s(t.StockData.Amplitude.Text)+"%")])]),e("td",[t._v("PB")]),e("td",[e("span",{staticClass:"pb"},[t._v(t._s(t.StockData.Pb.Text))])])]),e("tr",[e("td",[t._v("EPS")]),e("td",[e("span",{staticClass:"eps"},[t._v(t._s(t.StockData.Eps.Text))])]),e("td",{staticClass:"clear"},[e("span",{staticClass:"name"},[t._v("滚动EPS")]),e("span",{staticClass:"scrollEPS"},[t._v(t._s(t.StockData.ScrollEPS.Text))])]),e("td",[t._v("ROE")]),e("td",[e("span",{staticClass:"roe"},[t._v(t._s(t.StockData.Roe.Text))])])]),e("tr",[e("td",[t._v("总市值")]),e("td",{staticClass:"clear"},[t._v(t._s(t.StockData.MarketV.Text))]),e("td",[e("span",{staticClass:"name"},[t._v("流通市值")]),e("span",{staticClass:"flowMarketV"},[t._v(t._s(t.StockData.FlowMarketV.Text))])]),e("td",[t._v("换手")]),e("td",[e("span",{staticClass:"marketV"},[t._v(t._s(t.StockData.Excahngerate.Text)+"%")])])])])])]),e("div",{staticClass:"exchangeInfoT"},[e("table",[e("tbody",[e("tr",[e("td",{staticStyle:{width:"14%"}},[t._v("涨停")]),e("td",{staticClass:"clear",class:t.StockData.MaxPrice.Color,staticStyle:{width:"24%"}},[t._v(" "+t._s(t.StockData.MaxPrice.Text)+" ")]),e("td",{staticStyle:{width:"36%"}},[e("span",{staticClass:"name",staticStyle:{}},[t._v("跌停")]),e("span",{staticClass:"flowMarketV",class:t.StockData.MinPrice.Color},[t._v(t._s(t.StockData.MinPrice.Text))])]),e("td"),e("td")])])])])])])},c=[];function l(){}l.GetStockData=function(){var t={Name:{Text:""},Price:{Text:"",Color:"PriceNull"},RiseFallPrice:{Text:"",Color:"PriceNull"},Increase:{Text:"",Color:"PriceNull"},High:{Text:"",Color:"PriceNull"},Low:{Text:"",Color:"PriceNull"},Open:{Text:"",Color:"PriceNull"},MaxPrice:{Text:"",Color:"PriceNull"},MinPrice:{Text:"",Color:"PriceNull"},YClose:{Text:""},Excahngerate:{Text:"",Color:"PriceNull"},Amount:{Text:""},Vol:{Text:""},Pe:{Text:""},Roe:{Text:""},MarketV:{Text:""},FlowMarketV:{Text:""},Eps:{Text:""},ScrollEPS:{Text:""},Pb:{Text:""},Amplitude:{Text:""},BookRate:{Text:""},BookDiffer:{Text:""},Volratio:{Text:""},CapitalTatol:{Text:""},CapitalA:{Text:""},Down:{Text:""},Up:{Text:""},Unchanged:{Text:""},Stop:{Text:""},HK:{Symbol:"",Name:""},IsMargin:!1,IsSHHK:!1,IsHK:!1,SellerFive:[],BuyerFive:[],Dealer:[]};return t};var o={name:"showHide",props:["StockDataF"],data:function(){return{StockData:l.GetStockData()}},created:function(){},watch:{StockDataF:function(t){this.StockData=t}},methods:{}},i=o,r=(e("c2d8"),e("2877")),n=Object(r["a"])(i,s,c,!1,null,null,null);a["default"]=n.exports}}]);