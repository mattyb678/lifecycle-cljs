// Compiled by ClojureScript 0.0-3297 {}
goog.provide('graph.chart');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
graph.chart.xScale = (function graph$chart$xScale(chart_data,width){
return d3.scale.ordinal().rangeRoundBands([(0),width],.1,(1)).domain(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__20862_SHARP_){
return new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(p1__20862_SHARP_);
}),chart_data)));
});
graph.chart.yScale = (function graph$chart$yScale(chart_data,height){
return d3.scale.linear().range([height,(0)]).domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),d3.max(cljs.core.clj__GT_js.call(null,chart_data),(function (d){
return d.Value;
}))], null)));
});
graph.chart.create_svg = (function graph$chart$create_svg(el,margin){
return d3.select(el).append("svg").attr({"viewBox": [cljs.core.str((0)),cljs.core.str(" "),cljs.core.str((0)),cljs.core.str(" "),cljs.core.str((960)),cljs.core.str(" "),cljs.core.str((500))].join('')}).append("g").attr({"transform": [cljs.core.str("translate("),cljs.core.str(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(")")].join('')});
});
graph.chart.setUpAxes = (function graph$chart$setUpAxes(svg,xScale,yScale,height){
var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
var yAxis = d3.svg.axis().scale(yScale).orient("left");
svg.append("g").attr({"class": "x axis", "transform": [cljs.core.str("translate(0,"),cljs.core.str(height),cljs.core.str(")")].join('')}).call(xAxis);

return svg.append("g").attr({"class": "y axis"}).call(yAxis);
});
graph.chart.draw = (function graph$chart$draw(el,margin,chart_data,duration,width,height){
var svg = graph.chart.create_svg.call(null,el,margin);
var xScale = graph.chart.xScale.call(null,chart_data,width);
var yScale = graph.chart.yScale.call(null,chart_data,height);
svg.selectAll(".bar").data(cljs.core.clj__GT_js.call(null,chart_data)).enter().append("rect").attr({"class": "bar", "width": xScale.rangeBand(), "height": (0), "y": ((function (svg,xScale,yScale){
return (function (d){
return cljs.core.nth.call(null,yScale.range(),(0));
});})(svg,xScale,yScale))
, "x": ((function (svg,xScale,yScale){
return (function (d){
return xScale.call(null,d.Id);
});})(svg,xScale,yScale))
}).style({"fill": "#2ECC40"}).transition().duration(duration).attr({"height": ((function (svg,xScale,yScale){
return (function (d){
return (height - yScale.call(null,d.Value));
});})(svg,xScale,yScale))
, "y": ((function (svg,xScale,yScale){
return (function (d){
return yScale.call(null,d.Value);
});})(svg,xScale,yScale))
});

return graph.chart.setUpAxes.call(null,svg,xScale,yScale,height);
});
graph.chart.draw_chart = (function graph$chart$draw_chart(props,owner){
var container = "responsiveContainer";
if(typeof graph.chart.t20866 !== 'undefined'){
} else {

/**
* @constructor
*/
graph.chart.t20866 = (function (draw_chart,props,owner,container,meta20867){
this.draw_chart = draw_chart;
this.props = props;
this.owner = owner;
this.container = container;
this.meta20867 = meta20867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
graph.chart.t20866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (container){
return (function (_20868,meta20867__$1){
var self__ = this;
var _20868__$1 = this;
return (new graph.chart.t20866(self__.draw_chart,self__.props,self__.owner,self__.container,meta20867__$1));
});})(container))
;

graph.chart.t20866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (container){
return (function (_20868){
var self__ = this;
var _20868__$1 = this;
return self__.meta20867;
});})(container))
;

graph.chart.t20866.prototype.om$core$IRender$ = true;

graph.chart.t20866.prototype.om$core$IRender$render$arity$1 = ((function (container){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.createElement("div",{"id": self__.container});
});})(container))
;

graph.chart.t20866.prototype.om$core$IDidMount$ = true;

graph.chart.t20866.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (container){
return (function (_){
var self__ = this;
var ___$1 = this;
var chart_data = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206));
return graph.chart.draw.call(null,[cljs.core.str("#"),cljs.core.str(self__.container)].join(''),new cljs.core.Keyword(null,"margin","margin",-995903681).cljs$core$IFn$_invoke$arity$1(self__.props),chart_data,new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645).cljs$core$IFn$_invoke$arity$1(self__.props),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.props),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.props));
});})(container))
;

graph.chart.t20866.getBasis = ((function (container){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"draw-chart","draw-chart",-269361694,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"meta20867","meta20867",1700596949,null)], null);
});})(container))
;

graph.chart.t20866.cljs$lang$type = true;

graph.chart.t20866.cljs$lang$ctorStr = "graph.chart/t20866";

graph.chart.t20866.cljs$lang$ctorPrWriter = ((function (container){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"graph.chart/t20866");
});})(container))
;

graph.chart.__GT_t20866 = ((function (container){
return (function graph$chart$draw_chart_$___GT_t20866(draw_chart__$1,props__$1,owner__$1,container__$1,meta20867){
return (new graph.chart.t20866(draw_chart__$1,props__$1,owner__$1,container__$1,meta20867));
});})(container))
;

}

return (new graph.chart.t20866(graph$chart$draw_chart,props,owner,container,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=chart.js.map?rel=1437882542746