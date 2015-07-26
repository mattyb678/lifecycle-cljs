// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('graph.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20361__delegate = function (x){
if(cljs.core.truth_(graph.core.on_js_reload)){
return cljs.core.apply.call(null,graph.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'graph.core/on-js-reload' is missing");
}
};
var G__20361 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20362__i = 0, G__20362__a = new Array(arguments.length -  0);
while (G__20362__i < G__20362__a.length) {G__20362__a[G__20362__i] = arguments[G__20362__i + 0]; ++G__20362__i;}
  x = new cljs.core.IndexedSeq(G__20362__a,0);
} 
return G__20361__delegate.call(this,x);};
G__20361.cljs$lang$maxFixedArity = 0;
G__20361.cljs$lang$applyTo = (function (arglist__20363){
var x = cljs.core.seq(arglist__20363);
return G__20361__delegate(x);
});
G__20361.cljs$core$IFn$_invoke$arity$variadic = G__20361__delegate;
return G__20361;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1437876668308