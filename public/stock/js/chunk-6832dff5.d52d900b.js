(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6832dff5","chunk-05c76c33"],{"390f":function(e,t,a){"use strict";var n=a("50b6"),o=a.n(n),i=o.a.Chart.JSChart.GetResource();i.FrameLogo.Text="",window.a=o.a,console.log(o.a,"=============================="),t["a"]=o.a},"444b":function(e,t,a){var n={"./GetVersion":["f6a3","data-GetVersion"],"./GetVersion.json":["f6a3","data-GetVersion"],"./KLine2":["6d2a","data-KLine2"],"./KLine2.json":["6d2a","data-KLine2"],"./KLine3":["6548c","data-KLine3"],"./KLine3.json":["6548c","data-KLine3"],"./RequestBaseData":["62da","data-RequestBaseData"],"./RequestBaseData.json":["62da","data-RequestBaseData"],"./RequestBuySellData":["b171","data-RequestBuySellData"],"./RequestBuySellData.json":["b171","data-RequestBuySellData"],"./RequestDealData":["711a","data-RequestDealData"],"./RequestDealData.json":["711a","data-RequestDealData"],"./RequestDerivativeData":["8a05","data-RequestDerivativeData"],"./RequestDerivativeData.json":["8a05","data-RequestDerivativeData"],"./RequestFinanceData":["ef24","data-RequestFinanceData"],"./RequestFinanceData.json":["ef24","data-RequestFinanceData"],"./RequestMinuteData":["9ba3","data-RequestMinuteData"],"./RequestMinuteData.json":["9ba3","data-RequestMinuteData"],"./Stock":["9cc6","data-Stock"],"./Stock.json":["9cc6","data-Stock"],"./Stock6":["3c2b","data-Stock6"],"./Stock6.json":["3c2b","data-Stock6"],"./StockHK":["2b18","data-StockHK"],"./StockHK.json":["2b18","data-StockHK"],"./StockHistoryDay":["7901","data-StockHistoryDay"],"./StockHistoryDay.json":["7901","data-StockHistoryDay"],"./StockMinuteData":["1a32","data-StockMinuteData"],"./StockMinuteData.json":["1a32","data-StockMinuteData"],"./StockShortTerm":["4eff","data-StockShortTerm"],"./StockShortTerm.json":["4eff","data-StockShortTerm"]};function o(e){var t=n[e];return t?a.e(t[1]).then((function(){var e=t[0];return a.t(e,3)})):Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}o.keys=function(){return Object.keys(n)},o.id="444b",e.exports=o},"6b1e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"subindex"},[a("ul",[a("li",{staticClass:"close-icon"},[a("div",[e._v("k线设置")]),a("i",{staticClass:"close-icon el-icon-close",on:{click:e.CloseModal}})]),a("li",{staticClass:"radio_type"},[a("span",{staticClass:"label"},[e._v(" K线类型:")]),a("div",{staticClass:"item"},[e._l(e.KLINE_DRAW_TYPE,(function(t,n){return[a("div",{key:n,class:{selected:e.trainSetting["KLineDrawType"]===n},on:{click:function(t){return e.drawTypeChange(n)}}},[e._v(" "+e._s(t)+" ")])]}))],2)])])])},o=[],i=a("c6d3"),r={name:"subIndex",props:["Kline"],data:function(){return{KLINE_DRAW_TYPE:i["d"],trainSetting:{KLineDrawType:0}}},created:function(){this.trainSetting["KLineDrawType"]=this.Kline.JSChart?this.Kline.JSChart.JSChartContainer.KLineDrawType:this.Kline.Option.KLine.DrawType},methods:{drawTypeChange:function(e){this.trainSetting["KLineDrawType"]=e,this.Kline.JSChart.JSChartContainer.ChangeKLineDrawType(e),i["f"]["KLineDrawType"]=e,localStorage.setItem(i["g"],JSON.stringify(i["f"]))},CloseModal:function(){this.$emit("close",!1)}}},u=r,s=a("2877"),c=Object(s["a"])(u,n,o,!1,null,null,null);t["default"]=c.exports},c6d3:function(e,t,a){"use strict";a.d(t,"d",(function(){return u})),a.d(t,"h",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return D})),a.d(t,"j",(function(){return h})),a.d(t,"k",(function(){return f})),a.d(t,"b",(function(){return C})),a.d(t,"a",(function(){return T})),a.d(t,"e",(function(){return k})),a.d(t,"i",(function(){return K}));a("a4d3"),a("e01a"),a("d28b"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0");var n,o=a("ade3"),i=a("390f"),r=a("fd2c"),u=(a("2ef0"),{0:"实心K线",1:"收盘价线",2:"美国线",3:"空心K线",4:"收盘价面积图",5:"订单流",6:"完全空心K线"}),s={BUY:0,SELL:1},c="G_S_D_K",l=function(){var e={KLineDrawType:0};try{e=Object.assign(e,JSON.parse(localStorage.getItem(c)))}catch(t){}return e}(),S="G_S_I_D_K",d=["MA","BOLL","BBI","MIKE","PBX","ENE","MACD","VOL","RSI","KDJ","DMA","BIAS","DMI","WR","PSY","ATR","VR","FSL"],D=function(){var e={};try{e=Object.assign(e,JSON.parse(localStorage.getItem(S)))}catch(c){e=null}if(!e){e={};var t=!0,a=!1,n=void 0;try{for(var o,r=d[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var u=o.value,s=i["a"].Chart.JSIndexScript.prototype[u];s&&(s=s(),e[s["Name"]]=s)}}catch(l){a=!0,n=l}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}return h(e),e}();function h(e){localStorage.setItem(S,JSON.stringify(e))}function f(e){for(var t in e.JSChartContainer.WindowIndex){var a=e.JSChartContainer.WindowIndex[t],n=D[a["Name"]];if(n&&(n=n["Args"]),n&&n.length)for(var o in a.Arguments)o in n&&(a.Arguments[o].Value=n[o]["Value"])}}function C(e){var t=[{Index:"MA",Modify:!0,Change:!1,IsDrawTitleBG:!0},{Index:"VOL",Modify:!1,Change:!1,Close:!1,IsDrawTitleBG:!0},{Index:"MACD",Modify:!1,Change:!1,Close:!1,IsDrawTitleBG:!0}],a={NetworkFilter:r["a"],Type:"K线训练",Windows:t,Symbol:e,IsAutoUpate:!0,IsShowRightMenu:!1,CorssCursorInfo:{Left:2,Right:0,Bottom:1,IsShowCorss:!0,PressTime:100},IsCorssOnlyDrawKLine:!0,CorssCursorTouchEnd:!1,IsClickShowCorssCursor:!0,KLine:{DragMode:3,Right:0,Period:0,MaxReqeustDataCount:1e3,MaxRequestMinuteDayCount:15,PageSize:50,IsShowTooltip:!1,RightSpaceCount:3,DrawType:l["KLineDrawType"]||0},KLineTitle:{IsShowName:!1,IsShowSettingInfo:!1,IsShowDateTime:!0},Border:{Left:0,Right:1,Top:1},Frame:[{SplitCount:5,SplitType:1,IsShowLeftText:!1,IsShowRightText:!0,Custom:[{Type:0,Position:"left"}]},{SplitCount:3,StringFormat:0,IsShowLeftText:!1,IsShowRightText:!0},{SplitCount:3,StringFormat:0,IsShowLeftText:!1,IsShowRightText:!0}],ExtendChart:[{Name:"背景图",FrameID:0}],Train:{DataCount:200}};return console.log(a,"-=-==-=-=a-sdasdasdasdasd"),a}var T={GetStockData:function(){var e={Name:{Text:""},Price:{Text:"",Color:"PriceNull"},RiseFallPrice:{Text:"",Color:"PriceNull"},Increase:{Text:"",Color:"PriceNull"},High:{Text:"",Color:"PriceNull"},Low:{Text:"",Color:"PriceNull"},Open:{Text:"",Color:"PriceNull"},MaxPrice:{Text:"",Color:"PriceNull"},MinPrice:{Text:"",Color:"PriceNull"},YClose:{Text:""},Excahngerate:{Text:"",Color:"PriceNull"},Amount:{Text:""},Vol:{Text:""},Pe:{Text:""},Roe:{Text:""},MarketV:{Text:""},FlowMarketV:{Text:""},Eps:{Text:""},ScrollEPS:{Text:""},Pb:{Text:""},Amplitude:{Text:""},BookRate:{Text:""},BookDiffer:{Text:""},Volratio:{Text:""},CapitalTatol:{Text:""},CapitalA:{Text:""},Down:{Text:""},Up:{Text:""},Unchanged:{Text:""},Stop:{Text:""},HK:{Symbol:"",Name:""},IsMargin:!1,IsSHHK:!1,IsHK:!1,SellerFive:[],BuyerFive:[],Dealer:[]};return e},GetPeriodData:function(e){var t=new Map([["分时",{Value:1,KLineShow:!1,MinuteShow:!0}],["五日",{Value:5,KLineShow:!1,MinuteShow:!0}],["日线",{Value:0,KLineShow:!0,MinuteShow:!1}],["周线",{Value:1,KLineShow:!0,MinuteShow:!1}],["月线",{Value:2,KLineShow:!0,MinuteShow:!1}],["年线",{Value:3,KLineShow:!0,MinuteShow:!1}],["1分钟",{Value:4,KLineShow:!0,MinuteShow:!1}],["5分钟",{Value:5,KLineShow:!0,MinuteShow:!1}],["15分钟",{Value:6,KLineShow:!0,MinuteShow:!1}],["30分钟",{Value:7,KLineShow:!0,MinuteShow:!1}],["60分钟",{Value:8,KLineShow:!0,MinuteShow:!1}]]);return t.has(e)?t.get(e):null}},k={STOCK:1,FUTURE:2},w=(n={COMMOM:{CLOSE_POSITION:"平仓",BACKHAND:"反手",STOCK:"股票",FUTURE:"期货"}},Object(o["a"])(n,k["STOCK"],{BUY:"买入",SELL:"卖出",KEEP:"持有",SKIP:"观望",CLOSE_POSITION:"清仓"}),Object(o["a"])(n,k["FUTURE"],{BUY:"开多",SELL:"开空",KEEP:"持有",SKIP:"观望",CLOSE_POSITION:"平仓"}),n);function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"COMMOM";return w[t][e]||w["COMMOM"][e]||e}},fd2c:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));a("d3b7"),a("1276"),a("1157");var n=a("390f"),o=n["a"].Stock,i="https://opensource.zealink.com";function r(){var e=o.JSStockInit();return e.NetworkFilter=s,e}function u(e){var t=e.url,n=(e.type,e.callback),o=t.split("/").pop();a("444b")("./".concat(o)).then((function(e){n(e)}))}function s(e,t){switch(e.PreventDefault=!0,console.log("[JSStockNetworkFilter] data",e),e.Name){case"JSStock::RequestBuySellData":u({url:i+"/API/RequestBuySellData",callback:t});break;case"JSStock::RequestBaseData":u({url:i+"/API/RequestBaseData",callback:t});break;case"JSStock::RequestDealData":u({url:i+"/API/RequestDealData",callback:t});break;case"JSStock::RequestDerivativeData":u({url:i+"/API/RequestDerivativeData",callback:t});break;case"JSStock::RequestFinanceData":u({url:i+"/API/RequestFinanceData",callback:t});break;default:console.log("[JSStock NetworkFilter] data",e)}}function c(e,t){switch(e.PreventDefault=!0,console.log("[NetworkFilter] data",e),e.Name){case"KLineChartContainer::ReqeustHistoryMinuteData":u({url:i+"/API/KLine3",callback:t});break;case"MinuteChartContainer::RequestMinuteData":u({url:i+"/API/RequestMinuteData",callback:t});break;case"MinuteChartContainer::RequestHistoryMinuteData":u({url:i+"/API/StockMinuteData",callback:t});break;case"KLineChartContainer::RequestHistoryData":u({url:i+"/API/KLine2",callback:t});break;case"KLineChartContainer::RequestFlowCapitalData":u({url:i+"/API/StockHistoryDay",callback:t});break;default:console.log("[NetworkFilter] data",e)}}}}]);