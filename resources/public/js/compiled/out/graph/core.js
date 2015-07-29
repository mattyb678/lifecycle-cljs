// Compiled by ClojureScript 0.0-3297 {}
goog.provide('graph.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('graph.chart');
cljs.core.enable_console_print_BANG_.call(null);
graph.core.transitionDuration = (2000);
graph.core.margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"right","right",-452581833),(20),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(30),new cljs.core.Keyword(null,"left","left",-399115937),(40)], null);
graph.core.width = (((1000) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(graph.core.margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(graph.core.margin));
graph.core.height = (((500) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(graph.core.margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(graph.core.margin));
graph.core.generate_data = (function graph$core$generate_data(rows){
return cljs.core.map.call(null,(function (p1__20674_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Id","Id",-2148601),new cljs.core.Keyword(null,"Value","Value",388561431)],[p1__20674_SHARP_,cljs.core.rand_int.call(null,(20))]);
}),cljs.core.take.call(null,rows,cljs.core.range.call(null)));
});
if(typeof graph.core.app_state !== 'undefined'){
} else {
graph.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),graph.core.margin,new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645),graph.core.transitionDuration,new cljs.core.Keyword(null,"width","width",-384071477),graph.core.width,new cljs.core.Keyword(null,"height","height",1025178622),graph.core.height], null));
}
om.core.root.call(null,(function (data,owner){
if(typeof graph.core.t20675 !== 'undefined'){
} else {

/**
* @constructor
*/
graph.core.t20675 = (function (data,owner,meta20676){
this.data = data;
this.owner = owner;
this.meta20676 = meta20676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
graph.core.t20675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20677,meta20676__$1){
var self__ = this;
var _20677__$1 = this;
return (new graph.core.t20675(self__.data,self__.owner,meta20676__$1));
});

graph.core.t20675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20677){
var self__ = this;
var _20677__$1 = this;
return self__.meta20676;
});

graph.core.t20675.prototype.om$core$IDidMount$ = true;

graph.core.t20675.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return setInterval(((function (this$__$1){
return (function (){
var new_data = graph.core.generate_data.call(null,(20));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new_data);
});})(this$__$1))
,((3) * graph.core.transitionDuration));
});

graph.core.t20675.prototype.om$core$IInitState$ = true;

graph.core.t20675.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),graph.core.generate_data.call(null,(20))], null);
});

graph.core.t20675.prototype.om$core$IRenderState$ = true;

graph.core.t20675.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.core.build.call(null,graph.chart.draw_chart,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
});

graph.core.t20675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20676","meta20676",-2061541492,null)], null);
});

graph.core.t20675.cljs$lang$type = true;

graph.core.t20675.cljs$lang$ctorStr = "graph.core/t20675";

graph.core.t20675.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"graph.core/t20675");
});

graph.core.__GT_t20675 = (function graph$core$__GT_t20675(data__$1,owner__$1,meta20676){
return (new graph.core.t20675(data__$1,owner__$1,meta20676));
});

}

return (new graph.core.t20675(data,owner,cljs.core.PersistentArrayMap.EMPTY));
}),graph.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
graph.core.on_js_reload = (function graph$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1437922903165