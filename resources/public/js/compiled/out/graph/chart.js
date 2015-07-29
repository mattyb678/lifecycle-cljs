// Compiled by ClojureScript 0.0-3297 {}
goog.provide('graph.chart');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
graph.chart.xScale = (function graph$chart$xScale(chart_data,width){
return d3.scale.ordinal().rangeRoundBands([(0),width],.1,(1)).domain(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__20757_SHARP_){
return new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(p1__20757_SHARP_);
}),chart_data)));
});
graph.chart.yScale = (function graph$chart$yScale(chart_data,height){
return d3.scale.linear().range([height,(0)]).domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),d3.max(cljs.core.clj__GT_js.call(null,chart_data),(function (d){
return d.Value;
}))], null)));
});
graph.chart.create_svg = (function graph$chart$create_svg(el,margin){
var container = [cljs.core.str("#"),cljs.core.str(el)].join('');
var numNodes = document.getElementById(el).childNodes.length;
if(cljs.core._EQ_.call(null,(0),numNodes)){
return d3.select(container).append("svg").attr({"viewBox": [cljs.core.str((0)),cljs.core.str(" "),cljs.core.str((0)),cljs.core.str(" "),cljs.core.str((960)),cljs.core.str(" "),cljs.core.str((500))].join('')}).append("g").attr({"transform": [cljs.core.str("translate("),cljs.core.str(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(")")].join('')});
} else {
return d3.select(container).select("svg").select("g");
}
});
graph.chart.get_svg = (function graph$chart$get_svg(el){
var container = [cljs.core.str("#"),cljs.core.str(el)].join('');
return d3.select(container).select("svg").select("g");
});
graph.chart.reScaleAxes = (function graph$chart$reScaleAxes(yScale,duration){
var yAxisEl = d3.select(".y.axis");
var yAxis = d3.svg.axis().scale(yScale).orient("left");
return yAxisEl.transition().duration(duration).delay(duration).ease("sin-in-out").call(yAxis);
});
graph.chart.setUpAxes = (function graph$chart$setUpAxes(svg,xScale,yScale,height,duration){
var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
var yAxis = d3.svg.axis().scale(yScale).orient("left");
svg.append("g").attr({"class": "x axis", "transform": [cljs.core.str("translate(0,"),cljs.core.str(height),cljs.core.str(")")].join('')}).transition().duration(duration).call(xAxis);

return svg.append("g").attr({"class": "y axis"}).transition().duration(duration).call(yAxis);
});
graph.chart.draw = (function graph$chart$draw(el,chart_data,duration,width,height,xScale,yScale){
var svg = graph.chart.get_svg.call(null,el);
var bars = svg.selectAll(".bar").data(cljs.core.clj__GT_js.call(null,chart_data));
bars.enter().append("rect").attr({"class": "bar", "width": xScale.rangeBand(), "height": (0), "y": ((function (svg,bars){
return (function (d){
return cljs.core.nth.call(null,yScale.range(),(0));
});})(svg,bars))
, "x": ((function (svg,bars){
return (function (d){
return xScale.call(null,d.Id);
});})(svg,bars))
}).style({"fill": "#2ECC40"}).transition().duration(duration).attr({"height": ((function (svg,bars){
return (function (d){
return (height - yScale.call(null,d.Value));
});})(svg,bars))
, "y": ((function (svg,bars){
return (function (d){
return yScale.call(null,d.Value);
});})(svg,bars))
});

return bars.transition().duration(duration).delay(duration).attr({"width": xScale.rangeBand(), "x": ((function (svg,bars){
return (function (d){
return xScale.call(null,d.Id);
});})(svg,bars))
, "y": ((function (svg,bars){
return (function (d){
return yScale.call(null,d.Value);
});})(svg,bars))
, "height": ((function (svg,bars){
return (function (d){
return (height - yScale.call(null,d.Value));
});})(svg,bars))
}).each("end",((function (svg,bars){
return (function (){
var this$ = this;
return d3.select(this$).transition().duration(duration).style({"fill": "#0074D9"});
});})(svg,bars))
);
});
graph.chart.draw_chart = (function graph$chart$draw_chart(props,owner){
var container = "responsiveContainer";
if(typeof graph.chart.t20761 !== 'undefined'){
} else {

/**
* @constructor
*/
graph.chart.t20761 = (function (draw_chart,props,owner,container,meta20762){
this.draw_chart = draw_chart;
this.props = props;
this.owner = owner;
this.container = container;
this.meta20762 = meta20762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
graph.chart.t20761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (container){
return (function (_20763,meta20762__$1){
var self__ = this;
var _20763__$1 = this;
return (new graph.chart.t20761(self__.draw_chart,self__.props,self__.owner,self__.container,meta20762__$1));
});})(container))
;

graph.chart.t20761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (container){
return (function (_20763){
var self__ = this;
var _20763__$1 = this;
return self__.meta20762;
});})(container))
;

graph.chart.t20761.prototype.om$core$IRender$ = true;

graph.chart.t20761.prototype.om$core$IRender$render$arity$1 = ((function (container){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.createElement("div",{"id": self__.container});
});})(container))
;

graph.chart.t20761.prototype.om$core$IDidMount$ = true;

graph.chart.t20761.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (container){
return (function (_){
var self__ = this;
var ___$1 = this;
var chart_data = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206));
var svg = graph.chart.create_svg.call(null,self__.container,new cljs.core.Keyword(null,"margin","margin",-995903681).cljs$core$IFn$_invoke$arity$1(self__.props));
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.props);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.props);
var xScale = graph.chart.xScale.call(null,chart_data,width);
var yScale = graph.chart.yScale.call(null,chart_data,height);
graph.chart.setUpAxes.call(null,svg,xScale,yScale,height,new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645).cljs$core$IFn$_invoke$arity$1(self__.props));

return graph.chart.draw.call(null,self__.container,chart_data,new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645).cljs$core$IFn$_invoke$arity$1(self__.props),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.props),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.props),xScale,yScale);
});})(container))
;

graph.chart.t20761.prototype.om$core$IDidUpdate$ = true;

graph.chart.t20761.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (container){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var chart_data = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206));
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.props);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.props);
var xScale = graph.chart.xScale.call(null,chart_data,width);
var yScale = graph.chart.yScale.call(null,chart_data,height);
graph.chart.reScaleAxes.call(null,yScale,new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645).cljs$core$IFn$_invoke$arity$1(self__.props));

return graph.chart.draw.call(null,self__.container,chart_data,new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645).cljs$core$IFn$_invoke$arity$1(self__.props),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.props),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.props),xScale,yScale);
});})(container))
;

graph.chart.t20761.getBasis = ((function (container){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"draw-chart","draw-chart",-269361694,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"meta20762","meta20762",1456000371,null)], null);
});})(container))
;

graph.chart.t20761.cljs$lang$type = true;

graph.chart.t20761.cljs$lang$ctorStr = "graph.chart/t20761";

graph.chart.t20761.cljs$lang$ctorPrWriter = ((function (container){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"graph.chart/t20761");
});})(container))
;

graph.chart.__GT_t20761 = ((function (container){
return (function graph$chart$draw_chart_$___GT_t20761(draw_chart__$1,props__$1,owner__$1,container__$1,meta20762){
return (new graph.chart.t20761(draw_chart__$1,props__$1,owner__$1,container__$1,meta20762));
});})(container))
;

}

return (new graph.chart.t20761(graph$chart$draw_chart,props,owner,container,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=chart.js.map?rel=1438032705052