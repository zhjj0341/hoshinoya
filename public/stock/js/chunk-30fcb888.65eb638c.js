(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30fcb888"],{"390f":function(t,a,e){"use strict";var n=e("50b6"),o=e.n(n),r=o.a.Chart.JSChart.GetResource();r.FrameLogo.Text="",o.a.Chart.JSChart.SetDomain("https://opensource.zealink.com/"),o.a.Chart.JSComplier.SetDomain("https://opensource.zealink.com/"),o.a.Stock.JSStock.SetDomain("https://opensource.zealink.com/"),a["a"]=o.a},fd2c:function(t,a,e){"use strict";e.d(a,"b",(function(){return u})),e.d(a,"a",(function(){return l}));var n=e("1157"),o=e.n(n),r=e("390f"),c=r["a"].Stock,i="https://opensource.zealink.com";function u(){var t=c.JSStockInit();return t}function s(t){var a=t.url,e=t.type,n=void 0===e?"post":e,r=t.callback;o.a.ajax({url:a,type:n,success:function(t){r(t)}})}function l(t,a){switch(t.PreventDefault=!0,console.log("[NetworkFilter] data",t),t.Name){case"KLineChartContainer::ReqeustHistoryMinuteData":s({url:i+"/API/KLine3",callback:a});break;case"MinuteChartContainer::RequestMinuteData":s({url:i+"/API/RequestMinuteData",callback:a});break;case"MinuteChartContainer::RequestHistoryMinuteData":s({url:i+"/API/StockMinuteData",callback:a});break;case"KLineChartContainer::RequestHistoryData":s({url:i+"/API/KLine2",callback:a});break;case"KLineChartContainer::RequestFlowCapitalData":s({url:i+"/API/StockHistoryDay",callback:a});break;default:console.log("[NetworkFilter] data",t)}}}}]);