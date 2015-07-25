// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('graph.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19742__delegate = function (x){
if(cljs.core.truth_(graph.core.on_js_reload)){
return cljs.core.apply.call(null,graph.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'graph.core/on-js-reload' is missing");
}
};
var G__19742 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19743__i = 0, G__19743__a = new Array(arguments.length -  0);
while (G__19743__i < G__19743__a.length) {G__19743__a[G__19743__i] = arguments[G__19743__i + 0]; ++G__19743__i;}
  x = new cljs.core.IndexedSeq(G__19743__a,0);
} 
return G__19742__delegate.call(this,x);};
G__19742.cljs$lang$maxFixedArity = 0;
G__19742.cljs$lang$applyTo = (function (arglist__19744){
var x = cljs.core.seq(arglist__19744);
return G__19742__delegate(x);
});
G__19742.cljs$core$IFn$_invoke$arity$variadic = G__19742__delegate;
return G__19742;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1437792006029