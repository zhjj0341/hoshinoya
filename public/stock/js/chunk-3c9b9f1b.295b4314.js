(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c9b9f1b","chunk-30fcb888"],{"22bd":function(t,e,a){},"390f":function(t,e,a){"use strict";var o=a("50b6"),i=a.n(o),r=i.a.Chart.JSChart.GetResource();r.FrameLogo.Text="",i.a.Chart.JSChart.SetDomain("https://opensource.zealink.com/"),i.a.Chart.JSComplier.SetDomain("https://opensource.zealink.com/"),i.a.Stock.JSStock.SetDomain("https://opensource.zealink.com/"),e["a"]=i.a},5384:function(t,e,a){"use strict";var o=a("ff33"),i=a.n(o);i.a},b64b:function(t,e,a){var o=a("23e7"),i=a("7b0b"),r=a("df75"),l=a("d039"),s=l((function(){r(1)}));o({target:"Object",stat:!0,forced:s},{keys:function(t){return r(i(t))}})},d19b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.Minute.IsShow,expression:"Minute.IsShow"}],ref:"minute",staticStyle:{"margin-left":"28px"},attrs:{id:"minuteChart"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.Kline.IsShow,expression:"Kline.IsShow"}],ref:"kline",staticStyle:{"margin-left":"28px"},attrs:{id:"kline"}}),a("div",{staticClass:"topSwiper"},t._l(t.PeriodList,(function(e,o){return a("div",{key:o,staticClass:"oneItem",class:{activeTopSwiper:t.TabTextIndex==o},on:{click:function(a){return t.ChangeChartTab(e.Name,o)}}},[a("span",[t._v(t._s(e.Name))])])})),0),a("div",{staticClass:"symbolInfo"},[a("div",{staticClass:"symbolContent"},[a("div",{staticClass:"symbol_left"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.Kline.IsShow,expression:"Kline.IsShow"}],staticClass:"symbol_left_Kline"},[a("div",{staticClass:"nameCss-kline"},[t._v(t._s(t.StockData.Name.Text))]),a("div",{staticClass:"symbolCss-kline"},[t._v(t._s(t.Symbol))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.Minute.IsShow,expression:"Minute.IsShow"}],staticClass:"symbol_left_1"},[a("div",{staticClass:"symbolCss"},[t._v(t._s(t.Symbol))]),a("div",{staticClass:"nameCss"},[t._v(t._s(t.StockData.Name.Text))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.Minute.IsShow,expression:"Minute.IsShow"}],staticClass:"symbol_left_2",class:t.MinuteTooltip.Data.Increase.Color},[t._v(" "+t._s(t.MinuteTooltip.Data.AvPrice.Text)+" ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.Kline.IsShow,expression:"Kline.IsShow"}],staticClass:"symbol_right"},[a("div",{staticClass:"symbol_right_1"},[a("div",{staticClass:"topCss1"},[a("span",{staticClass:"titleCss"},[t._v("低")]),a("span",{class:t.Tooltip.Data.Low.Color},[t._v(t._s(t.Tooltip.Data.Low.Text))])]),a("div",{staticClass:"bottomCss1"},[a("span",{staticClass:"titleCss"},[t._v("高")]),a("span",{class:t.Tooltip.Data.High.Color},[t._v(t._s(t.Tooltip.Data.High.Text))])])]),a("div",{staticClass:"symbol_right_1"},[a("div",{staticClass:"topCss1"},[a("span",{staticClass:"titleCss"},[t._v("收")]),a("span",[t._v(t._s(t.Tooltip.Data.Close.Text))])]),a("div",{staticClass:"bottomCss1"},[a("span",{staticClass:"titleCss"},[t._v("开")]),a("span",{class:t.Tooltip.Data.Open.Color},[t._v(t._s(t.Tooltip.Data.Open.Text))])])]),a("div",{staticClass:"symbol_right_1 symbol_right_3"},[a("div",{staticClass:"topCss1"},[a("span",{staticClass:"titleCss"},[t._v("成交额")]),a("span",[t._v(t._s(t.Tooltip.Data.Amount.Text))])]),a("div",{staticClass:"bottomCss1"},[a("span",{staticClass:"titleCss"},[t._v("成交量")]),a("span",[t._v(t._s(t.Tooltip.Data.Vol.Text))])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.Minute.IsShow,expression:"Minute.IsShow"}],staticClass:"symbol_right symbol_right_minute"},[a("div",{staticClass:"symbol_right_1",staticStyle:{height:"24%"}},[a("div",{staticClass:"topCss1"},[a("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Increase.Text))])]),a("div",{staticClass:"bottomCss1"},[a("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Risefall.Text))])])]),a("div",{staticClass:"symbol_right_1"},[a("div",{staticClass:"topCss1"},[a("span",{staticClass:"titleCss"},[t._v("低")]),a("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Low.Text))])]),a("div",{staticClass:"bottomCss1"},[a("span",{staticClass:"titleCss"},[t._v("高")]),a("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.High.Text))])])]),a("div",{staticClass:"symbol_right_1"},[a("div",{staticClass:"topCss1"},[a("span",{staticClass:"titleCss"},[t._v("收")]),a("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Close.Text))])]),a("div",{staticClass:"bottomCss1"},[a("span",{staticClass:"titleCss"},[t._v("开")]),a("span",{class:t.MinuteTooltip.Data.Increase.Color},[t._v(t._s(t.MinuteTooltip.Data.Open.Text))])])]),a("div",{staticClass:"symbol_right_1 symbol_right_3"},[a("div",{staticClass:"topCss1"},[a("span",{staticClass:"titleCss"},[t._v("成交额")]),a("span",[t._v(t._s(t.MinuteTooltip.Data.Amount.Text))])]),a("div",{staticClass:"bottomCss1"},[a("span",{staticClass:"titleCss"},[t._v("成交量")]),a("span",[t._v(t._s(t.MinuteTooltip.Data.Vol.Text))])])])])]),a("div",{staticClass:"closeCss",on:{click:t.GoBack}},[a("span",{staticClass:"hq_iconfont icon-suoxiao",staticStyle:{"font-size":"22px"}})])])])])},i=[];a("c975"),a("4ec9"),a("b680"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("99af"),a("4e82"),a("a9e3"),a("b64b"),a("e25e"),a("4d63"),a("466d"),a("5319"),a("841c"),a("1276");var r=a("1157"),l=a.n(r),s=(a("22bd"),a("390f")),n=(a("309c"),a("df44"),a("fd2c")),S=s["a"].Chart,u=s["a"].Stock;function C(){}C.GetStockData=function(){var t={Name:{Text:""},Price:{Text:"",Color:"PriceNull"},RiseFallPrice:{Text:"",Color:"PriceNull"},Increase:{Text:"",Color:"PriceNull"},High:{Text:"",Color:"PriceNull"},Low:{Text:"",Color:"PriceNull"},Open:{Text:"",Color:"PriceNull"},MaxPrice:{Text:"",Color:"PriceNull"},MinPrice:{Text:"",Color:"PriceNull"},YClose:{Text:""},Excahngerate:{Text:"",Color:"PriceNull"},Amount:{Text:""},Vol:{Text:""},Pe:{Text:""},Roe:{Text:""},MarketV:{Text:""},FlowMarketV:{Text:""},Eps:{Text:""},ScrollEPS:{Text:""},Pb:{Text:""},Amplitude:{Text:""},BookRate:{Text:""},BookDiffer:{Text:""},Volratio:{Text:""},CapitalTatol:{Text:""},CapitalA:{Text:""},Down:{Text:""},Up:{Text:""},Unchanged:{Text:""},Stop:{Text:""},HK:{Symbol:"",Name:""},IsMargin:!1,IsSHHK:!1,IsHK:!1,SellerFive:[],BuyerFive:[],Dealer:[]};return t},C.GetMinuteOption=function(t){var e={NetworkFilter:n["a"],Type:"分钟走势图横屏",Symbol:t,IsAutoUpate:!0,IsShowRightMenu:!1,IsShowCorssCursorInfo:!1,DayCount:1,CorssCursorTouchEnd:!0,CorssCursorInfo:{Left:2,Right:2,Bottom:1,IsShowCorss:!0},Border:{Left:20,Right:1,Top:1,Bottom:1},KLineTitle:{IsShowName:!1,IsShowSettingInfo:!1},Frame:[{SplitCount:5,StringFormat:0},{SplitCount:3,StringFormat:0}]};return e},C.GetKlineOption=function(t){var e={NetworkFilter:n["a"],Type:"历史K线图横屏",Windows:[{Index:"均线",Modify:!1,Change:!1},{Index:"VOL",Modify:!1,Change:!1,IsDrawTitleBG:!1},{Index:"MACD",Modify:!1,Change:!1,IsDrawTitleBG:!1}],Symbol:t,IsAutoUpate:!0,CorssCursorTouchEnd:!0,IsShowRightMenu:!1,CorssCursorInfo:{Left:2,Right:0,Bottom:1,IsShowCorss:!0},KLine:{DragMode:1,Right:1,Period:0,MaxReqeustDataCount:1e3,MaxRequestMinuteDayCount:15,PageSize:50,IsShowTooltip:!1},KLineTitle:{IsShowName:!1,IsShowSettingInfo:!1},Border:{Left:20,Right:1,Top:1,Bottom:1},Frame:[{SplitCount:4,IsShowLeftText:!1,IsShowRightText:!0,Custom:[{Type:0,Position:"left"}]},{SplitCount:3,StringFormat:0,IsShowLeftText:!1,IsShowRightText:!0},{SplitCount:3,StringFormat:0,IsShowLeftText:!1,IsShowRightText:!0}]};return e},C.GetPeriodData=function(t){var e=new Map([["分时",{Value:1,KLineShow:!1,MinuteShow:!0}],["五日",{Value:5,KLineShow:!1,MinuteShow:!0}],["日线",{Value:0,KLineShow:!0,MinuteShow:!1}],["周线",{Value:1,KLineShow:!0,MinuteShow:!1}],["月线",{Value:2,KLineShow:!0,MinuteShow:!1}],["年线",{Value:3,KLineShow:!0,MinuteShow:!1}],["1分钟",{Value:4,KLineShow:!0,MinuteShow:!1}],["5分钟",{Value:5,KLineShow:!0,MinuteShow:!1}],["15分钟",{Value:6,KLineShow:!0,MinuteShow:!1}],["30分钟",{Value:7,KLineShow:!0,MinuteShow:!1}],["60分钟",{Value:8,KLineShow:!0,MinuteShow:!1}]]);return e.has(t)?e.get(t):null};var T={name:"TabList",data:function(){return{PeriodList:[{Name:"分时",Value:1},{Name:"五日",Value:5},{Name:"日线",Value:0},{Name:"周线",Value:1},{Name:"月线",Value:2},{Name:"5分钟",Value:5}],Minute:{JSChart:null,IsShow:!0,Option:C.GetMinuteOption(this.Symbol)},Kline:{JSChart:null,IsShow:!1,Option:C.GetKlineOption(this.Symbol)},Symbol:"600000.sh",TabTextIndex:0,Name:"",StockData:C.GetStockData(),Tooltip:{IsshowTooltip:!1,Data:{Date:{Text:""},Open:{Text:"",Color:""},High:{Text:"",Color:""},Low:{Text:"",Color:""},Close:{Text:"",Color:""},YClose:{Text:""},Vol:{Text:""},Amount:{Text:""}}},MinuteTooltip:{IsshowTooltip:!1,Data:{Time:{Text:""},AvPrice:{Text:"",Color:""},Open:{Text:"",Color:""},High:{Text:"",Color:""},Low:{Text:"",Color:""},Close:{Text:"",Color:""},Increase:{Text:"",Color:""},Risefall:{Text:"",Color:""},Vol:{Text:""},Amount:{Text:""}}}}},created:function(){var t=this.$route.query;if(t["symbol"]&&(console.log("Tools.getURLParams::::::",t["symbol"]),this.Symbol=t["symbol"]),t["index"]){this.TabTextIndex=t["index"];var e=t["index"];this.Name=this.PeriodList[e].Name}},mounted:function(){this.OnSize();var t=this;window.onresize=function(){t.OnSize()},this.JSStock=Object(n["b"])(),this.InitalStock(),this.JSStock.RequestData(),this.ChangeChartTab(this.Name,this.TabTextIndex)},watch:{},methods:{OnSize:function(){var t=window.innerWidth-76,e=window.innerHeight;l()("#minuteChart").width(t),l()("#minuteChart").height(e),l()("#kline").width(t),l()("#kline").height(e)},ChangeChartTab:function(t,e){this.TabTextIndex=e;var a=C.GetPeriodData(t);a&&(a.KLineShow&&this.ChangeKLinePeriod(a.Value),this.Kline.IsShow=a.KLineShow,a.MinuteShow&&this.ChangeMinutePeriod(a.Value),this.Minute.IsShow=a.MinuteShow)},ChangeKLinePeriod:function(t){this.Kline.JSChart?this.Kline.JSChart.ChangePeriod(t):(this.Kline.Option.KLine.Period=t,this.CreateKLineChart())},CreateKLineChart:function(){var t=this;if(!this.Kline.JSChart){this.Kline.Option.Symbol=this.Symbol;var e=S.JSChart.Init(this.$refs.kline),a=S.HQChartStyle.GetStyleConfig(S.STYLE_TYPE_ID.BLACK_ID);S.JSChart.SetStyle(a),this.$refs.kline.style.backgroundColor="#1a1c30",e.SetOption(this.Kline.Option),e.AddEventCallback({event:S.JSCHART_EVENT_ID.ON_CLICK_INDEXTITLE,callback:this.OnClickIndexTitle}),e.AddEventCallback({event:S.JSCHART_EVENT_ID.ON_TITLE_DRAW,callback:function(e,a,o){t.UpdateTitle(e,a,o)}}),this.Kline.JSChart=e}},UpdateTitle:function(t,e,a){var o={Date:{Text:""},Open:{Text:"",Color:""},High:{Text:"",Color:""},Low:{Text:"",Color:""},Close:{Text:"",Color:""},YClose:{Text:""},Vol:{Text:""},Amount:{Text:""}};e=e.Draw;o.Date=e.Date.toString().substring(0,4)+"-"+e.Date.toString().substring(4,6)+"-"+e.Date.toString().substring(6,8),o.High.Text=S.IFrameSplitOperator.FormatValueString(e.High,2),o.High.Color=S.IFrameSplitOperator.FormatValueColor(e.High,e.YClose),o.Low.Text=S.IFrameSplitOperator.FormatValueString(e.Low,2),o.Low.Color=S.IFrameSplitOperator.FormatValueColor(e.Low,e.YClose),o.Open.Text=S.IFrameSplitOperator.FormatValueString(e.Open,2),o.Open.Color=S.IFrameSplitOperator.FormatValueColor(e.Open,e.YClose),o.Close.Text=S.IFrameSplitOperator.FormatValueString(e.Close,2),o.Close.Color=S.IFrameSplitOperator.FormatValueColor(e.Close,e.YClose),o.YClose.Text=S.IFrameSplitOperator.FormatValueString(e.YClose,2),o.Vol.Text=S.IFrameSplitOperator.FormatValueString(e.Vol,2),o.Amount.Text=S.IFrameSplitOperator.FormatValueString(e.Amount,2),this.Tooltip.Data=o,this.Tooltip.IsshowTooltip=!1,1==this.Kline.JSChart.JSChartContainer.IsOnTouch&&"DrawDynamicInfo"==t.FunctionName&&(this.Tooltip.IsshowTooltip=!0)},CreateMinuteChart:function(){var t=this;if(!this.Minute.JSChart){this.Minute.Option.Symbol=this.Symbol;var e=S.JSChart.Init(this.$refs.minute),a=S.HQChartStyle.GetStyleConfig(S.STYLE_TYPE_ID.BLACK_ID);a.FrameTitleBGColor="#1a1c30",S.JSChart.SetStyle(a),this.$refs.minute.style.backgroundColor="#1a1c30",e.SetOption(this.Minute.Option),e.AddEventCallback({event:S.JSCHART_EVENT_ID.ON_TITLE_DRAW,callback:function(e,a,o){t.UpdateMinuteTitle(e,a,o)}}),this.Minute.JSChart=e}},UpdateMinuteTitle:function(t,e,a){console.log("[UpdateMinuteTitle]  data",e);var o={Time:{Text:""},AvPrice:{Text:"",Color:""},Open:{Text:"",Color:""},High:{Text:"",Color:""},Low:{Text:"",Color:""},Close:{Text:"",Color:""},Increase:{Text:"",Color:""},Risefall:{Text:"",Color:""},Vol:{Text:""},Amount:{Text:""}};e=e.Draw;null!=e&&(e.Time>=1e3?o.Time=e.Time.toString().substring(0,2)+":"+e.Time.toString().substring(2,4):o.Time=e.Time.toString().substring(0,1)+":"+e.Time.toString().substring(1,3),o.AvPrice.Text=S.IFrameSplitOperator.FormatValueString(e.AvPrice,2),o.High.Text=S.IFrameSplitOperator.FormatValueString(e.High,2),o.Low.Text=S.IFrameSplitOperator.FormatValueString(e.Low,2),o.Open.Text=S.IFrameSplitOperator.FormatValueString(e.Open,2),o.Close.Text=S.IFrameSplitOperator.FormatValueString(e.Close,2),o.Increase.Text=S.IFrameSplitOperator.FormatValueString(e.Increase,2)+"%",o.Increase.Color=S.IFrameSplitOperator.FormatValueColor(e.Increase),o.Risefall.Text=S.IFrameSplitOperator.FormatValueString(e.Risefall,2),o.Risefall.Color=S.IFrameSplitOperator.FormatValueColor(e.Risefall),o.Vol.Text=S.IFrameSplitOperator.FormatValueString(e.Vol,2),o.Amount.Text=S.IFrameSplitOperator.FormatValueString(e.Amount,2),this.MinuteTooltip.Data=o,this.MinuteTooltip.IsshowTooltip=!1,1==this.Minute.JSChart.JSChartContainer.IsOnTouch&&"DrawDynamicInfo"==t.FunctionName&&(this.MinuteTooltip.IsshowTooltip=!0))},ChangeMinutePeriod:function(t){this.Minute.JSChart?(1==t?this.IsFiveminute=!1:5==t&&(this.IsFiveminute=!0),this.OnSize(),this.Minute.JSChart.OnSize(),this.Minute.JSChart.ChangeDayCount(t)):(this.Minute.Option.DayCount=t,this.CreateMinuteChart())},GoBack:function(){this.$router.push({name:this.$rns["stockHq"],query:{symbol:this.Symbol,index:this.TabTextIndex}})},UpdateData:function(t,e,a,o){if(t==this.ID){var i=this.IsSHSZIndex(),r=o.GetStockRead(this.ID,this.UpdateData);if(!(e.indexOf(this.Symbol)<0)){var l={};l.Name={Text:r.Get(this.Symbol,u.STOCK_FIELD_NAME.NAME)};var s=r.Get(this.Symbol,u.STOCK_FIELD_NAME.DATE),n=r.Get(this.Symbol,u.STOCK_FIELD_NAME.TIME);null!=s&&null!=n&&(l.Date=s.toString().substring(4,6)+"-"+s.toString().substring(6,8),5==n.toString().length?l.Time=0+n.toString().substring(0,1)+":"+n.toString().substring(1,3)+":"+n.toString().substring(3,5):l.Time=n.toString().substring(0,2)+":"+n.toString().substring(2,4)+":"+n.toString().substring(4,6)),l.Price={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.PRICE),Color:"",Text:"--"},l.RiseFallPrice={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.RISE_FALL_PRICE)},l.Increase={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.INCREASE),Color:"",Text:"--"},l.High={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.HIGH),Color:"",Text:"--"},l.Low={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.LOW),Color:"",Text:"--"},l.Open={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.OPEN),Color:"",Text:"--"},l.Amount={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.AMOUNT),Text:"--"},l.Vol={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.VOL),Text:"--"},l.BookRate={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.BOOK_RATE),Text:"--"},l.BookDiffer={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.BOOK_DIFFER),Text:"--"},l.Volratio={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.VOLRATIO),Text:"--"},l.CapitalTatol={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.CAPITAL_TOTAL),Text:"--"},l.CapitalA={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.CAPITAL_A),Text:"--"},l.MaxPrice={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.MAX_PRICE),Text:"--"},l.MinPrice={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.MIN_PRICE),Text:"--"};var C=r.Get(this.Symbol,u.STOCK_FIELD_NAME.YCLOSE);l.YClose={Value:C,Text:"--"};var T=r.Get(this.Symbol,u.STOCK_FIELD_NAME.SELL5),c=r.Get(this.Symbol,u.STOCK_FIELD_NAME.BUY5),h=r.Get(this.Symbol,u.STOCK_FIELD_NAME.DEAL);if(T&&5==T.length){var m=[];for(var p in T){var I=T[p],_=["卖五","卖四","卖三","卖二","卖一"];m.push({name:_[4-p],dataPrice:null!=I.Price?0!=I.Price?I.Price.toFixed(2):"":"--",dataVol:0!=I.Vol?I.Vol:"",color:S.IFrameSplitOperator.FormatValueColor(I.Price,C)})}l.SellerFive=m.reverse()}if(c&&5==c.length){var F=[];for(var p in c){var E=c[p];_=["买一","买二","买三","买四","买五"];F.push({name:_[p],dataPrice:null!=E.Price?0!=E.Price?E.Price.toFixed(2):"":"--",dataVol:0!=E.Vol?E.Vol:"",color:S.IFrameSplitOperator.FormatValueColor(E.Price,C)})}l.BuyerFive=F}if(void 0!=h){var x=[];for(var p in h){var O,D,V=h[p],M=V.Time;M=M.toString(),5==M.length?O="0"+M:6==M.length&&(O=M),D=O.substring(0,2)+":"+O.substring(2,4),x.push({timer:D,dataPrice:null!=V.Price?0!=V.Price?V.Price.toFixed(2):"":"--",dataVol:0!=V.Vol?V.Vol:"",color:S.IFrameSplitOperator.FormatValueColor(V.Price,C)})}l.Dealer=x}if(l.Price.Text=S.IFrameSplitOperator.FormatValueString(l.Price.Value,2),l.Price.Color=S.IFrameSplitOperator.FormatValueColor(l.Price.Value,C),this.PageBackColor=this.FormatBackColor(l.Price.Value,C),0==l.RiseFallPrice.Value?l.RiseFallPrice.Text="0.00":l.RiseFallPrice.Text=S.IFrameSplitOperator.FormatValueString(l.RiseFallPrice.Value,2),l.RiseFallPrice.Color=S.IFrameSplitOperator.FormatValueColor(l.RiseFallPrice.Value,0),0==l.Increase.Value?l.Increase.Text="0.00%":l.Increase.Text=S.IFrameSplitOperator.FormatValueString(l.Increase.Value,2)+"%",l.Increase.Color=S.IFrameSplitOperator.FormatValueColor(l.Increase.Value,0),l.High.Text=S.IFrameSplitOperator.FormatValueString(l.High.Value,2),l.High.Color=S.IFrameSplitOperator.FormatValueColor(l.High.Value,C),l.Low.Text=S.IFrameSplitOperator.FormatValueString(l.Low.Value,2),l.Low.Color=S.IFrameSplitOperator.FormatValueColor(l.Low.Value,C),l.Open.Text=S.IFrameSplitOperator.FormatValueString(l.Open.Value,2),l.Open.Color=S.IFrameSplitOperator.FormatValueColor(l.Open.Value,C),l.MaxPrice.Text=S.IFrameSplitOperator.FormatValueString(l.MaxPrice.Value,2),l.MaxPrice.Color=S.IFrameSplitOperator.FormatValueColor(l.MaxPrice.Value,C),l.MinPrice.Text=S.IFrameSplitOperator.FormatValueString(l.MinPrice.Value,2),l.MinPrice.Color=S.IFrameSplitOperator.FormatValueColor(l.MinPrice.Value,C),l.YClose.Text=S.IFrameSplitOperator.FormatValueString(l.YClose.Value,2),l.Amount.Text=S.IFrameSplitOperator.FormatValueString(l.Amount.Value,2),l.Vol.Text=S.IFrameSplitOperator.FormatValueString(l.Vol.Value,2),l.BookRate.Text=S.IFrameSplitOperator.FormatValueString(l.BookRate.Value,2),l.BookDiffer.Text=S.IFrameSplitOperator.FormatValueString(l.BookDiffer.Value,2),l.Volratio.Text=S.IFrameSplitOperator.FormatValueString(l.Volratio.Value,2),l.CapitalTatol.Text=S.IFrameSplitOperator.FormatValueString(l.CapitalTatol.Value,2),l.CapitalA.Text=S.IFrameSplitOperator.FormatValueString(l.CapitalA.Value,2),i){l.Down={Text:""},l.Up={Text:""},l.Unchanged={Text:""},l.Stop={Text:""};var g=r.Get(this.Symbol,u.STOCK_FIELD_NAME.INDEXTOP);g&&(l.Down.Text=S.IFrameSplitOperator.FormatValueString(g.Down,0),l.Up.Text=S.IFrameSplitOperator.FormatValueString(g.Up,0),l.Unchanged.Text=S.IFrameSplitOperator.FormatValueString(g.Unchanged,0),l.Stop.Text=S.IFrameSplitOperator.FormatValueString(g.Stop,0))}else{l.Excahngerate={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.EXCHANGE_RATE),Color:"",Text:"--"},l.Pe={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.PE),Text:"--"},l.MarketV={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.MARKET_VALUE),Text:"--"},l.FlowMarketV={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.FLOW_MARKET_VALUE),Text:"--"},l.Eps={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.FINANCE_PERSEARNING),Text:"--"},l.ScrollEPS={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.FINANCE_EPS),Text:"--"},l.Roe={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.ROE),Color:"",Text:"--"},l.Pb={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.PB),Text:"--"},l.Amplitude={Value:r.Get(this.Symbol,u.STOCK_FIELD_NAME.AMPLITUDE),Text:"--"},l.Roe.Text=S.IFrameSplitOperator.FormatValueString(l.Roe.Value,2),l.Roe.Color=S.IFrameSplitOperator.FormatValueColor(l.Roe.Value,C),l.Excahngerate.Text=S.IFrameSplitOperator.FormatValueString(l.Excahngerate.Value,2),l.Excahngerate.Color=S.IFrameSplitOperator.FormatValueColor(l.Excahngerate.Value,C),l.MarketV.Text=S.IFrameSplitOperator.FormatValueString(l.MarketV.Value,0),l.FlowMarketV.Text=S.IFrameSplitOperator.FormatValueString(l.FlowMarketV.Value,0),l.Pe.Text=S.IFrameSplitOperator.FormatValueString(l.Pe.Value,2),l.Eps.Text=S.IFrameSplitOperator.FormatValueString(l.Eps.Value,2),l.ScrollEPS.Text=S.IFrameSplitOperator.FormatValueString(l.ScrollEPS.Value,2),l.Pb.Text=S.IFrameSplitOperator.FormatValueString(l.Pb.Value,2),l.Amplitude.Text=S.IFrameSplitOperator.FormatValueString(l.Amplitude.Value,2);var L=r.Get(this.Symbol,u.STOCK_FIELD_NAME.EVENTS);L&&(console.log("[StockInfo::UpdateData] events data ",this.Symbol,L),l.HK=L.HK,l.IsMargin=L.IsMargin,l.IsHK=L.IsHK,l.IsSHHK=L.IsSHHK)}this.StockData=l}}},FormatBackColor:function(t,e){return null!=t&&null==e?0==t?"BackNull":t>0?"BackUp":"BackDown":null==t||null==e?"BackNull":t==e?"BackNull":t>e?"BackUp":"BackDown"},InitalStock:function(){var t=this.JSStock.GetStockRead(this.ID,this.UpdateData),e=[u.STOCK_FIELD_NAME.NAME,u.STOCK_FIELD_NAME.DATE,u.STOCK_FIELD_NAME.TIME,u.STOCK_FIELD_NAME.PRICE,u.STOCK_FIELD_NAME.RISE_FALL_PRICE,u.STOCK_FIELD_NAME.INCREASE,u.STOCK_FIELD_NAME.HIGH,u.STOCK_FIELD_NAME.LOW,u.STOCK_FIELD_NAME.OPEN,u.STOCK_FIELD_NAME.YCLOSE,u.STOCK_FIELD_NAME.EXCHANGE_RATE,u.STOCK_FIELD_NAME.AMOUNT,u.STOCK_FIELD_NAME.VOL,u.STOCK_FIELD_NAME.PE,u.STOCK_FIELD_NAME.MARKET_VALUE,u.STOCK_FIELD_NAME.FLOW_MARKET_VALUE,u.STOCK_FIELD_NAME.FINANCE_PERSEARNING,u.STOCK_FIELD_NAME.FINANCE_EPS,u.STOCK_FIELD_NAME.ROE,u.STOCK_FIELD_NAME.PB,u.STOCK_FIELD_NAME.AMPLITUDE,u.STOCK_FIELD_NAME.EVENTS,u.STOCK_FIELD_NAME.SELL5,u.STOCK_FIELD_NAME.BUY5,u.STOCK_FIELD_NAME.DEAL],a=[u.STOCK_FIELD_NAME.NAME,u.STOCK_FIELD_NAME.DATE,u.STOCK_FIELD_NAME.TIME,u.STOCK_FIELD_NAME.PRICE,u.STOCK_FIELD_NAME.RISE_FALL_PRICE,u.STOCK_FIELD_NAME.INCREASE,u.STOCK_FIELD_NAME.HIGH,u.STOCK_FIELD_NAME.LOW,u.STOCK_FIELD_NAME.OPEN,u.STOCK_FIELD_NAME.YCLOSE,u.STOCK_FIELD_NAME.AMOUNT,u.STOCK_FIELD_NAME.VOL,u.STOCK_FIELD_NAME.INDEXTOP];this.IsSHSZIndex()?t.SetQueryField(this.Symbol,a):t.SetQueryField(this.Symbol,e)},IsSHSZIndex:function(){return S.MARKET_SUFFIX_NAME.IsSHSZIndex(this.Symbol)},IsShowChangeSymbol:function(){this.IsChangeSymbol=!0}}},c=T,h=(a("5384"),a("2877")),m=Object(h["a"])(c,o,i,!1,null,null,null);e["default"]=m.exports},fd2c:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return C}));var o=a("1157"),i=a.n(o),r=a("390f"),l=r["a"].Stock,s="https://opensource.zealink.com";function n(){var t=l.JSStockInit();return t.NetworkFilter=u,t}function S(t){var e=t.url,a=t.type,o=void 0===a?"post":a,r=t.callback;i.a.ajax({url:e,type:o,success:function(t){r(t)}})}function u(t,e){switch(t.PreventDefault=!0,console.log("[JSStockNetworkFilter] data",t),t.Name){case"JSStock::RequestBuySellData":S({url:s+"/API/RequestBuySellData",callback:e});break;case"JSStock::RequestBaseData":S({url:s+"/API/RequestBaseData",callback:e});break;case"JSStock::RequestDealData":S({url:s+"/API/RequestDealData",callback:e});break;case"JSStock::RequestDerivativeData":S({url:s+"/API/RequestDerivativeData",callback:e});break;case"JSStock::RequestFinanceData":S({url:s+"/API/RequestFinanceData",callback:e});break;default:console.log("[JSStock NetworkFilter] data",t)}}function C(t,e){switch(t.PreventDefault=!0,console.log("[NetworkFilter] data",t),t.Name){case"KLineChartContainer::ReqeustHistoryMinuteData":S({url:s+"/API/KLine3",callback:e});break;case"MinuteChartContainer::RequestMinuteData":S({url:s+"/API/RequestMinuteData",callback:e});break;case"MinuteChartContainer::RequestHistoryMinuteData":S({url:s+"/API/StockMinuteData",callback:e});break;case"KLineChartContainer::RequestHistoryData":S({url:s+"/API/KLine2",callback:e});break;case"KLineChartContainer::RequestFlowCapitalData":S({url:s+"/API/StockHistoryDay",callback:e});break;default:console.log("[NetworkFilter] data",t)}}},ff33:function(t,e,a){}}]);