// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('graph.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20366__delegate = function (x){
if(cljs.core.truth_(graph.core.on_js_reload)){
return cljs.core.apply.call(null,graph.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'graph.core/on-js-reload' is missing");
}
};
var G__20366 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20367__i = 0, G__20367__a = new Array(arguments.length -  0);
while (G__20367__i < G__20367__a.length) {G__20367__a[G__20367__i] = arguments[G__20367__i + 0]; ++G__20367__i;}
  x = new cljs.core.IndexedSeq(G__20367__a,0);
} 
return G__20366__delegate.call(this,x);};
G__20366.cljs$lang$maxFixedArity = 0;
G__20366.cljs$lang$applyTo = (function (arglist__20368){
var x = cljs.core.seq(arglist__20368);
return G__20366__delegate(x);
});
G__20366.cljs$core$IFn$_invoke$arity$variadic = G__20366__delegate;
return G__20366;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1438203144116