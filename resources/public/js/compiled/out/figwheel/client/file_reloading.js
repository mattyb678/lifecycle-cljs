// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__25830_SHARP_,p2__25831_SHARP_){
var and__16057__auto__ = p1__25830_SHARP_;
if(cljs.core.truth_(and__16057__auto__)){
return p2__25831_SHARP_;
} else {
return and__16057__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16069__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16069__auto__){
return or__16069__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16069__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16069__auto__){
return or__16069__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16069__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25832){
var map__25833 = p__25832;
var map__25833__$1 = ((cljs.core.seq_QMARK_.call(null,map__25833))?cljs.core.apply.call(null,cljs.core.hash_map,map__25833):map__25833);
var file = cljs.core.get.call(null,map__25833__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25834){
var map__25835 = p__25834;
var map__25835__$1 = ((cljs.core.seq_QMARK_.call(null,map__25835))?cljs.core.apply.call(null,cljs.core.hash_map,map__25835):map__25835);
var namespace = cljs.core.get.call(null,map__25835__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25836){if((e25836 instanceof Error)){
var e = e25836;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25836;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__25838 = arguments.length;
switch (G__25838) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25840,callback){
var map__25842 = p__25840;
var map__25842__$1 = ((cljs.core.seq_QMARK_.call(null,map__25842))?cljs.core.apply.call(null,cljs.core.hash_map,map__25842):map__25842);
var file_msg = map__25842__$1;
var request_url = cljs.core.get.call(null,map__25842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25842,map__25842__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25842,map__25842__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25843){
var map__25845 = p__25843;
var map__25845__$1 = ((cljs.core.seq_QMARK_.call(null,map__25845))?cljs.core.apply.call(null,cljs.core.hash_map,map__25845):map__25845);
var file_msg = map__25845__$1;
var namespace = cljs.core.get.call(null,map__25845__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__25845__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16069__auto__ = meta_data;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16057__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16057__auto__){
var or__16069__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16069__auto____$1)){
return or__16069__auto____$1;
} else {
var and__16057__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16057__auto____$1){
var or__16069__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16069__auto____$2){
return or__16069__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16057__auto____$1;
}
}
}
} else {
return and__16057__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25846,callback){
var map__25848 = p__25846;
var map__25848__$1 = ((cljs.core.seq_QMARK_.call(null,map__25848))?cljs.core.apply.call(null,cljs.core.hash_map,map__25848):map__25848);
var file_msg = map__25848__$1;
var request_url = cljs.core.get.call(null,map__25848__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25848__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19079__auto___25935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___25935,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___25935,out){
return (function (state_25917){
var state_val_25918 = (state_25917[(1)]);
if((state_val_25918 === (1))){
var inst_25895 = cljs.core.nth.call(null,files,(0),null);
var inst_25896 = cljs.core.nthnext.call(null,files,(1));
var inst_25897 = files;
var state_25917__$1 = (function (){var statearr_25919 = state_25917;
(statearr_25919[(7)] = inst_25897);

(statearr_25919[(8)] = inst_25896);

(statearr_25919[(9)] = inst_25895);

return statearr_25919;
})();
var statearr_25920_25936 = state_25917__$1;
(statearr_25920_25936[(2)] = null);

(statearr_25920_25936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25918 === (2))){
var inst_25897 = (state_25917[(7)]);
var inst_25900 = (state_25917[(10)]);
var inst_25900__$1 = cljs.core.nth.call(null,inst_25897,(0),null);
var inst_25901 = cljs.core.nthnext.call(null,inst_25897,(1));
var inst_25902 = (inst_25900__$1 == null);
var inst_25903 = cljs.core.not.call(null,inst_25902);
var state_25917__$1 = (function (){var statearr_25921 = state_25917;
(statearr_25921[(11)] = inst_25901);

(statearr_25921[(10)] = inst_25900__$1);

return statearr_25921;
})();
if(inst_25903){
var statearr_25922_25937 = state_25917__$1;
(statearr_25922_25937[(1)] = (4));

} else {
var statearr_25923_25938 = state_25917__$1;
(statearr_25923_25938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25918 === (3))){
var inst_25915 = (state_25917[(2)]);
var state_25917__$1 = state_25917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25917__$1,inst_25915);
} else {
if((state_val_25918 === (4))){
var inst_25900 = (state_25917[(10)]);
var inst_25905 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25900);
var state_25917__$1 = state_25917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25917__$1,(7),inst_25905);
} else {
if((state_val_25918 === (5))){
var inst_25911 = cljs.core.async.close_BANG_.call(null,out);
var state_25917__$1 = state_25917;
var statearr_25924_25939 = state_25917__$1;
(statearr_25924_25939[(2)] = inst_25911);

(statearr_25924_25939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25918 === (6))){
var inst_25913 = (state_25917[(2)]);
var state_25917__$1 = state_25917;
var statearr_25925_25940 = state_25917__$1;
(statearr_25925_25940[(2)] = inst_25913);

(statearr_25925_25940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25918 === (7))){
var inst_25901 = (state_25917[(11)]);
var inst_25907 = (state_25917[(2)]);
var inst_25908 = cljs.core.async.put_BANG_.call(null,out,inst_25907);
var inst_25897 = inst_25901;
var state_25917__$1 = (function (){var statearr_25926 = state_25917;
(statearr_25926[(7)] = inst_25897);

(statearr_25926[(12)] = inst_25908);

return statearr_25926;
})();
var statearr_25927_25941 = state_25917__$1;
(statearr_25927_25941[(2)] = null);

(statearr_25927_25941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19079__auto___25935,out))
;
return ((function (switch__19017__auto__,c__19079__auto___25935,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____0 = (function (){
var statearr_25931 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25931[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__);

(statearr_25931[(1)] = (1));

return statearr_25931;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____1 = (function (state_25917){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25932){if((e25932 instanceof Object)){
var ex__19021__auto__ = e25932;
var statearr_25933_25942 = state_25917;
(statearr_25933_25942[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25943 = state_25917;
state_25917 = G__25943;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__ = function(state_25917){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____1.call(this,state_25917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___25935,out))
})();
var state__19081__auto__ = (function (){var statearr_25934 = f__19080__auto__.call(null);
(statearr_25934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___25935);

return statearr_25934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___25935,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__25944,p__25945){
var map__25948 = p__25944;
var map__25948__$1 = ((cljs.core.seq_QMARK_.call(null,map__25948))?cljs.core.apply.call(null,cljs.core.hash_map,map__25948):map__25948);
var opts = map__25948__$1;
var url_rewriter = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25949 = p__25945;
var map__25949__$1 = ((cljs.core.seq_QMARK_.call(null,map__25949))?cljs.core.apply.call(null,cljs.core.hash_map,map__25949):map__25949);
var file_msg = map__25949__$1;
var file = cljs.core.get.call(null,map__25949__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25950,opts){
var map__25953 = p__25950;
var map__25953__$1 = ((cljs.core.seq_QMARK_.call(null,map__25953))?cljs.core.apply.call(null,cljs.core.hash_map,map__25953):map__25953);
var eval_body__$1 = cljs.core.get.call(null,map__25953__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16057__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16057__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16057__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25954){var e = e25954;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25959,p__25960){
var map__26162 = p__25959;
var map__26162__$1 = ((cljs.core.seq_QMARK_.call(null,map__26162))?cljs.core.apply.call(null,cljs.core.hash_map,map__26162):map__26162);
var opts = map__26162__$1;
var before_jsload = cljs.core.get.call(null,map__26162__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26162__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__26162__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__26163 = p__25960;
var map__26163__$1 = ((cljs.core.seq_QMARK_.call(null,map__26163))?cljs.core.apply.call(null,cljs.core.hash_map,map__26163):map__26163);
var msg = map__26163__$1;
var files = cljs.core.get.call(null,map__26163__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function (state_26288){
var state_val_26289 = (state_26288[(1)]);
if((state_val_26289 === (7))){
var inst_26177 = (state_26288[(7)]);
var inst_26178 = (state_26288[(8)]);
var inst_26176 = (state_26288[(9)]);
var inst_26175 = (state_26288[(10)]);
var inst_26183 = cljs.core._nth.call(null,inst_26176,inst_26178);
var inst_26184 = figwheel.client.file_reloading.eval_body.call(null,inst_26183,opts);
var inst_26185 = (inst_26178 + (1));
var tmp26290 = inst_26177;
var tmp26291 = inst_26176;
var tmp26292 = inst_26175;
var inst_26175__$1 = tmp26292;
var inst_26176__$1 = tmp26291;
var inst_26177__$1 = tmp26290;
var inst_26178__$1 = inst_26185;
var state_26288__$1 = (function (){var statearr_26293 = state_26288;
(statearr_26293[(11)] = inst_26184);

(statearr_26293[(7)] = inst_26177__$1);

(statearr_26293[(8)] = inst_26178__$1);

(statearr_26293[(9)] = inst_26176__$1);

(statearr_26293[(10)] = inst_26175__$1);

return statearr_26293;
})();
var statearr_26294_26363 = state_26288__$1;
(statearr_26294_26363[(2)] = null);

(statearr_26294_26363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (20))){
var inst_26227 = (state_26288[(12)]);
var inst_26225 = (state_26288[(13)]);
var inst_26224 = (state_26288[(14)]);
var inst_26220 = (state_26288[(15)]);
var inst_26221 = (state_26288[(16)]);
var inst_26230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26232 = (function (){var all_files = inst_26220;
var files_SINGLEQUOTE_ = inst_26221;
var res_SINGLEQUOTE_ = inst_26224;
var res = inst_26225;
var files_not_loaded = inst_26227;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26227,inst_26225,inst_26224,inst_26220,inst_26221,inst_26230,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function (p__26231){
var map__26295 = p__26231;
var map__26295__$1 = ((cljs.core.seq_QMARK_.call(null,map__26295))?cljs.core.apply.call(null,cljs.core.hash_map,map__26295):map__26295);
var namespace = cljs.core.get.call(null,map__26295__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26295__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26227,inst_26225,inst_26224,inst_26220,inst_26221,inst_26230,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
})();
var inst_26233 = cljs.core.map.call(null,inst_26232,inst_26225);
var inst_26234 = cljs.core.pr_str.call(null,inst_26233);
var inst_26235 = figwheel.client.utils.log.call(null,inst_26234);
var inst_26236 = (function (){var all_files = inst_26220;
var files_SINGLEQUOTE_ = inst_26221;
var res_SINGLEQUOTE_ = inst_26224;
var res = inst_26225;
var files_not_loaded = inst_26227;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26227,inst_26225,inst_26224,inst_26220,inst_26221,inst_26230,inst_26232,inst_26233,inst_26234,inst_26235,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26227,inst_26225,inst_26224,inst_26220,inst_26221,inst_26230,inst_26232,inst_26233,inst_26234,inst_26235,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
})();
var inst_26237 = setTimeout(inst_26236,(10));
var state_26288__$1 = (function (){var statearr_26296 = state_26288;
(statearr_26296[(17)] = inst_26230);

(statearr_26296[(18)] = inst_26235);

return statearr_26296;
})();
var statearr_26297_26364 = state_26288__$1;
(statearr_26297_26364[(2)] = inst_26237);

(statearr_26297_26364[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (27))){
var inst_26247 = (state_26288[(19)]);
var state_26288__$1 = state_26288;
var statearr_26298_26365 = state_26288__$1;
(statearr_26298_26365[(2)] = inst_26247);

(statearr_26298_26365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (1))){
var inst_26167 = (state_26288[(20)]);
var inst_26164 = before_jsload.call(null,files);
var inst_26165 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26166 = (function (){return ((function (inst_26167,inst_26164,inst_26165,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function (p1__25955_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25955_SHARP_);
});
;})(inst_26167,inst_26164,inst_26165,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
})();
var inst_26167__$1 = cljs.core.filter.call(null,inst_26166,files);
var inst_26168 = cljs.core.not_empty.call(null,inst_26167__$1);
var state_26288__$1 = (function (){var statearr_26299 = state_26288;
(statearr_26299[(21)] = inst_26164);

(statearr_26299[(22)] = inst_26165);

(statearr_26299[(20)] = inst_26167__$1);

return statearr_26299;
})();
if(cljs.core.truth_(inst_26168)){
var statearr_26300_26366 = state_26288__$1;
(statearr_26300_26366[(1)] = (2));

} else {
var statearr_26301_26367 = state_26288__$1;
(statearr_26301_26367[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (24))){
var state_26288__$1 = state_26288;
var statearr_26302_26368 = state_26288__$1;
(statearr_26302_26368[(2)] = null);

(statearr_26302_26368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (4))){
var inst_26212 = (state_26288[(2)]);
var inst_26213 = (function (){return ((function (inst_26212,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function (p1__25956_SHARP_){
var and__16057__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25956_SHARP_);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25956_SHARP_));
} else {
return and__16057__auto__;
}
});
;})(inst_26212,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
})();
var inst_26214 = cljs.core.filter.call(null,inst_26213,files);
var state_26288__$1 = (function (){var statearr_26303 = state_26288;
(statearr_26303[(23)] = inst_26212);

(statearr_26303[(24)] = inst_26214);

return statearr_26303;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26304_26369 = state_26288__$1;
(statearr_26304_26369[(1)] = (16));

} else {
var statearr_26305_26370 = state_26288__$1;
(statearr_26305_26370[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (15))){
var inst_26202 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26306_26371 = state_26288__$1;
(statearr_26306_26371[(2)] = inst_26202);

(statearr_26306_26371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (21))){
var state_26288__$1 = state_26288;
var statearr_26307_26372 = state_26288__$1;
(statearr_26307_26372[(2)] = null);

(statearr_26307_26372[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (31))){
var inst_26255 = (state_26288[(25)]);
var inst_26265 = (state_26288[(2)]);
var inst_26266 = cljs.core.not_empty.call(null,inst_26255);
var state_26288__$1 = (function (){var statearr_26308 = state_26288;
(statearr_26308[(26)] = inst_26265);

return statearr_26308;
})();
if(cljs.core.truth_(inst_26266)){
var statearr_26309_26373 = state_26288__$1;
(statearr_26309_26373[(1)] = (32));

} else {
var statearr_26310_26374 = state_26288__$1;
(statearr_26310_26374[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (32))){
var inst_26255 = (state_26288[(25)]);
var inst_26268 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26255);
var inst_26269 = cljs.core.pr_str.call(null,inst_26268);
var inst_26270 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26269)].join('');
var inst_26271 = figwheel.client.utils.log.call(null,inst_26270);
var state_26288__$1 = state_26288;
var statearr_26311_26375 = state_26288__$1;
(statearr_26311_26375[(2)] = inst_26271);

(statearr_26311_26375[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (33))){
var state_26288__$1 = state_26288;
var statearr_26312_26376 = state_26288__$1;
(statearr_26312_26376[(2)] = null);

(statearr_26312_26376[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (13))){
var inst_26188 = (state_26288[(27)]);
var inst_26192 = cljs.core.chunk_first.call(null,inst_26188);
var inst_26193 = cljs.core.chunk_rest.call(null,inst_26188);
var inst_26194 = cljs.core.count.call(null,inst_26192);
var inst_26175 = inst_26193;
var inst_26176 = inst_26192;
var inst_26177 = inst_26194;
var inst_26178 = (0);
var state_26288__$1 = (function (){var statearr_26313 = state_26288;
(statearr_26313[(7)] = inst_26177);

(statearr_26313[(8)] = inst_26178);

(statearr_26313[(9)] = inst_26176);

(statearr_26313[(10)] = inst_26175);

return statearr_26313;
})();
var statearr_26314_26377 = state_26288__$1;
(statearr_26314_26377[(2)] = null);

(statearr_26314_26377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (22))){
var inst_26227 = (state_26288[(12)]);
var inst_26240 = (state_26288[(2)]);
var inst_26241 = cljs.core.not_empty.call(null,inst_26227);
var state_26288__$1 = (function (){var statearr_26315 = state_26288;
(statearr_26315[(28)] = inst_26240);

return statearr_26315;
})();
if(cljs.core.truth_(inst_26241)){
var statearr_26316_26378 = state_26288__$1;
(statearr_26316_26378[(1)] = (23));

} else {
var statearr_26317_26379 = state_26288__$1;
(statearr_26317_26379[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (36))){
var state_26288__$1 = state_26288;
var statearr_26318_26380 = state_26288__$1;
(statearr_26318_26380[(2)] = null);

(statearr_26318_26380[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (29))){
var inst_26254 = (state_26288[(29)]);
var inst_26259 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26254);
var inst_26260 = cljs.core.pr_str.call(null,inst_26259);
var inst_26261 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26260)].join('');
var inst_26262 = figwheel.client.utils.log.call(null,inst_26261);
var state_26288__$1 = state_26288;
var statearr_26319_26381 = state_26288__$1;
(statearr_26319_26381[(2)] = inst_26262);

(statearr_26319_26381[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (6))){
var inst_26209 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26320_26382 = state_26288__$1;
(statearr_26320_26382[(2)] = inst_26209);

(statearr_26320_26382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (28))){
var inst_26254 = (state_26288[(29)]);
var inst_26253 = (state_26288[(2)]);
var inst_26254__$1 = cljs.core.get.call(null,inst_26253,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26255 = cljs.core.get.call(null,inst_26253,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26256 = cljs.core.get.call(null,inst_26253,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26257 = cljs.core.not_empty.call(null,inst_26254__$1);
var state_26288__$1 = (function (){var statearr_26321 = state_26288;
(statearr_26321[(30)] = inst_26256);

(statearr_26321[(25)] = inst_26255);

(statearr_26321[(29)] = inst_26254__$1);

return statearr_26321;
})();
if(cljs.core.truth_(inst_26257)){
var statearr_26322_26383 = state_26288__$1;
(statearr_26322_26383[(1)] = (29));

} else {
var statearr_26323_26384 = state_26288__$1;
(statearr_26323_26384[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (25))){
var inst_26286 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26288__$1,inst_26286);
} else {
if((state_val_26289 === (34))){
var inst_26256 = (state_26288[(30)]);
var inst_26274 = (state_26288[(2)]);
var inst_26275 = cljs.core.not_empty.call(null,inst_26256);
var state_26288__$1 = (function (){var statearr_26324 = state_26288;
(statearr_26324[(31)] = inst_26274);

return statearr_26324;
})();
if(cljs.core.truth_(inst_26275)){
var statearr_26325_26385 = state_26288__$1;
(statearr_26325_26385[(1)] = (35));

} else {
var statearr_26326_26386 = state_26288__$1;
(statearr_26326_26386[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (17))){
var inst_26214 = (state_26288[(24)]);
var state_26288__$1 = state_26288;
var statearr_26327_26387 = state_26288__$1;
(statearr_26327_26387[(2)] = inst_26214);

(statearr_26327_26387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (3))){
var state_26288__$1 = state_26288;
var statearr_26328_26388 = state_26288__$1;
(statearr_26328_26388[(2)] = null);

(statearr_26328_26388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (12))){
var inst_26205 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26329_26389 = state_26288__$1;
(statearr_26329_26389[(2)] = inst_26205);

(statearr_26329_26389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (2))){
var inst_26167 = (state_26288[(20)]);
var inst_26174 = cljs.core.seq.call(null,inst_26167);
var inst_26175 = inst_26174;
var inst_26176 = null;
var inst_26177 = (0);
var inst_26178 = (0);
var state_26288__$1 = (function (){var statearr_26330 = state_26288;
(statearr_26330[(7)] = inst_26177);

(statearr_26330[(8)] = inst_26178);

(statearr_26330[(9)] = inst_26176);

(statearr_26330[(10)] = inst_26175);

return statearr_26330;
})();
var statearr_26331_26390 = state_26288__$1;
(statearr_26331_26390[(2)] = null);

(statearr_26331_26390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (23))){
var inst_26227 = (state_26288[(12)]);
var inst_26247 = (state_26288[(19)]);
var inst_26225 = (state_26288[(13)]);
var inst_26224 = (state_26288[(14)]);
var inst_26220 = (state_26288[(15)]);
var inst_26221 = (state_26288[(16)]);
var inst_26243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26246 = (function (){var all_files = inst_26220;
var files_SINGLEQUOTE_ = inst_26221;
var res_SINGLEQUOTE_ = inst_26224;
var res = inst_26225;
var files_not_loaded = inst_26227;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26227,inst_26247,inst_26225,inst_26224,inst_26220,inst_26221,inst_26243,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function (p__26245){
var map__26332 = p__26245;
var map__26332__$1 = ((cljs.core.seq_QMARK_.call(null,map__26332))?cljs.core.apply.call(null,cljs.core.hash_map,map__26332):map__26332);
var meta_data = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26227,inst_26247,inst_26225,inst_26224,inst_26220,inst_26221,inst_26243,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
})();
var inst_26247__$1 = cljs.core.group_by.call(null,inst_26246,inst_26227);
var inst_26248 = cljs.core.seq_QMARK_.call(null,inst_26247__$1);
var state_26288__$1 = (function (){var statearr_26333 = state_26288;
(statearr_26333[(19)] = inst_26247__$1);

(statearr_26333[(32)] = inst_26243);

return statearr_26333;
})();
if(inst_26248){
var statearr_26334_26391 = state_26288__$1;
(statearr_26334_26391[(1)] = (26));

} else {
var statearr_26335_26392 = state_26288__$1;
(statearr_26335_26392[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (35))){
var inst_26256 = (state_26288[(30)]);
var inst_26277 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26256);
var inst_26278 = cljs.core.pr_str.call(null,inst_26277);
var inst_26279 = [cljs.core.str("not required: "),cljs.core.str(inst_26278)].join('');
var inst_26280 = figwheel.client.utils.log.call(null,inst_26279);
var state_26288__$1 = state_26288;
var statearr_26336_26393 = state_26288__$1;
(statearr_26336_26393[(2)] = inst_26280);

(statearr_26336_26393[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (19))){
var inst_26225 = (state_26288[(13)]);
var inst_26224 = (state_26288[(14)]);
var inst_26220 = (state_26288[(15)]);
var inst_26221 = (state_26288[(16)]);
var inst_26224__$1 = (state_26288[(2)]);
var inst_26225__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26224__$1);
var inst_26226 = (function (){var all_files = inst_26220;
var files_SINGLEQUOTE_ = inst_26221;
var res_SINGLEQUOTE_ = inst_26224__$1;
var res = inst_26225__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26225,inst_26224,inst_26220,inst_26221,inst_26224__$1,inst_26225__$1,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function (p1__25958_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25958_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26225,inst_26224,inst_26220,inst_26221,inst_26224__$1,inst_26225__$1,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
})();
var inst_26227 = cljs.core.filter.call(null,inst_26226,inst_26224__$1);
var inst_26228 = cljs.core.not_empty.call(null,inst_26225__$1);
var state_26288__$1 = (function (){var statearr_26337 = state_26288;
(statearr_26337[(12)] = inst_26227);

(statearr_26337[(13)] = inst_26225__$1);

(statearr_26337[(14)] = inst_26224__$1);

return statearr_26337;
})();
if(cljs.core.truth_(inst_26228)){
var statearr_26338_26394 = state_26288__$1;
(statearr_26338_26394[(1)] = (20));

} else {
var statearr_26339_26395 = state_26288__$1;
(statearr_26339_26395[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (11))){
var state_26288__$1 = state_26288;
var statearr_26340_26396 = state_26288__$1;
(statearr_26340_26396[(2)] = null);

(statearr_26340_26396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (9))){
var inst_26207 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26341_26397 = state_26288__$1;
(statearr_26341_26397[(2)] = inst_26207);

(statearr_26341_26397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (5))){
var inst_26177 = (state_26288[(7)]);
var inst_26178 = (state_26288[(8)]);
var inst_26180 = (inst_26178 < inst_26177);
var inst_26181 = inst_26180;
var state_26288__$1 = state_26288;
if(cljs.core.truth_(inst_26181)){
var statearr_26342_26398 = state_26288__$1;
(statearr_26342_26398[(1)] = (7));

} else {
var statearr_26343_26399 = state_26288__$1;
(statearr_26343_26399[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (14))){
var inst_26188 = (state_26288[(27)]);
var inst_26197 = cljs.core.first.call(null,inst_26188);
var inst_26198 = figwheel.client.file_reloading.eval_body.call(null,inst_26197,opts);
var inst_26199 = cljs.core.next.call(null,inst_26188);
var inst_26175 = inst_26199;
var inst_26176 = null;
var inst_26177 = (0);
var inst_26178 = (0);
var state_26288__$1 = (function (){var statearr_26344 = state_26288;
(statearr_26344[(33)] = inst_26198);

(statearr_26344[(7)] = inst_26177);

(statearr_26344[(8)] = inst_26178);

(statearr_26344[(9)] = inst_26176);

(statearr_26344[(10)] = inst_26175);

return statearr_26344;
})();
var statearr_26345_26400 = state_26288__$1;
(statearr_26345_26400[(2)] = null);

(statearr_26345_26400[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (26))){
var inst_26247 = (state_26288[(19)]);
var inst_26250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26247);
var state_26288__$1 = state_26288;
var statearr_26346_26401 = state_26288__$1;
(statearr_26346_26401[(2)] = inst_26250);

(statearr_26346_26401[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (16))){
var inst_26214 = (state_26288[(24)]);
var inst_26216 = (function (){var all_files = inst_26214;
return ((function (all_files,inst_26214,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function (p1__25957_SHARP_){
return cljs.core.update_in.call(null,p1__25957_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26214,state_val_26289,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
})();
var inst_26217 = cljs.core.map.call(null,inst_26216,inst_26214);
var state_26288__$1 = state_26288;
var statearr_26347_26402 = state_26288__$1;
(statearr_26347_26402[(2)] = inst_26217);

(statearr_26347_26402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (30))){
var state_26288__$1 = state_26288;
var statearr_26348_26403 = state_26288__$1;
(statearr_26348_26403[(2)] = null);

(statearr_26348_26403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (10))){
var inst_26188 = (state_26288[(27)]);
var inst_26190 = cljs.core.chunked_seq_QMARK_.call(null,inst_26188);
var state_26288__$1 = state_26288;
if(inst_26190){
var statearr_26349_26404 = state_26288__$1;
(statearr_26349_26404[(1)] = (13));

} else {
var statearr_26350_26405 = state_26288__$1;
(statearr_26350_26405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (18))){
var inst_26220 = (state_26288[(15)]);
var inst_26221 = (state_26288[(16)]);
var inst_26220__$1 = (state_26288[(2)]);
var inst_26221__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26220__$1);
var inst_26222 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26221__$1);
var state_26288__$1 = (function (){var statearr_26351 = state_26288;
(statearr_26351[(15)] = inst_26220__$1);

(statearr_26351[(16)] = inst_26221__$1);

return statearr_26351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26288__$1,(19),inst_26222);
} else {
if((state_val_26289 === (37))){
var inst_26283 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26352_26406 = state_26288__$1;
(statearr_26352_26406[(2)] = inst_26283);

(statearr_26352_26406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (8))){
var inst_26188 = (state_26288[(27)]);
var inst_26175 = (state_26288[(10)]);
var inst_26188__$1 = cljs.core.seq.call(null,inst_26175);
var state_26288__$1 = (function (){var statearr_26353 = state_26288;
(statearr_26353[(27)] = inst_26188__$1);

return statearr_26353;
})();
if(inst_26188__$1){
var statearr_26354_26407 = state_26288__$1;
(statearr_26354_26407[(1)] = (10));

} else {
var statearr_26355_26408 = state_26288__$1;
(statearr_26355_26408[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
;
return ((function (switch__19017__auto__,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____0 = (function (){
var statearr_26359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26359[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__);

(statearr_26359[(1)] = (1));

return statearr_26359;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____1 = (function (state_26288){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26360){if((e26360 instanceof Object)){
var ex__19021__auto__ = e26360;
var statearr_26361_26409 = state_26288;
(statearr_26361_26409[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26410 = state_26288;
state_26288 = G__26410;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__ = function(state_26288){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____1.call(this,state_26288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
})();
var state__19081__auto__ = (function (){var statearr_26362 = f__19080__auto__.call(null);
(statearr_26362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_26362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__,map__26162,map__26162__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26163,map__26163__$1,msg,files))
);

return c__19079__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26413,link){
var map__26415 = p__26413;
var map__26415__$1 = ((cljs.core.seq_QMARK_.call(null,map__26415))?cljs.core.apply.call(null,cljs.core.hash_map,map__26415):map__26415);
var file = cljs.core.get.call(null,map__26415__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26415,map__26415__$1,file){
return (function (p1__26411_SHARP_,p2__26412_SHARP_){
if(cljs.core._EQ_.call(null,p1__26411_SHARP_,p2__26412_SHARP_)){
return p1__26411_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26415,map__26415__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26419){
var map__26420 = p__26419;
var map__26420__$1 = ((cljs.core.seq_QMARK_.call(null,map__26420))?cljs.core.apply.call(null,cljs.core.hash_map,map__26420):map__26420);
var match_length = cljs.core.get.call(null,map__26420__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26420__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26416_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26416_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__26422 = arguments.length;
switch (G__26422) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26424){
var map__26426 = p__26424;
var map__26426__$1 = ((cljs.core.seq_QMARK_.call(null,map__26426))?cljs.core.apply.call(null,cljs.core.hash_map,map__26426):map__26426);
var f_data = map__26426__$1;
var file = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16069__auto__ = request_url;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26427,files_msg){
var map__26449 = p__26427;
var map__26449__$1 = ((cljs.core.seq_QMARK_.call(null,map__26449))?cljs.core.apply.call(null,cljs.core.hash_map,map__26449):map__26449);
var opts = map__26449__$1;
var on_cssload = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26450_26470 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26451_26471 = null;
var count__26452_26472 = (0);
var i__26453_26473 = (0);
while(true){
if((i__26453_26473 < count__26452_26472)){
var f_26474 = cljs.core._nth.call(null,chunk__26451_26471,i__26453_26473);
figwheel.client.file_reloading.reload_css_file.call(null,f_26474);

var G__26475 = seq__26450_26470;
var G__26476 = chunk__26451_26471;
var G__26477 = count__26452_26472;
var G__26478 = (i__26453_26473 + (1));
seq__26450_26470 = G__26475;
chunk__26451_26471 = G__26476;
count__26452_26472 = G__26477;
i__26453_26473 = G__26478;
continue;
} else {
var temp__4425__auto___26479 = cljs.core.seq.call(null,seq__26450_26470);
if(temp__4425__auto___26479){
var seq__26450_26480__$1 = temp__4425__auto___26479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26450_26480__$1)){
var c__16854__auto___26481 = cljs.core.chunk_first.call(null,seq__26450_26480__$1);
var G__26482 = cljs.core.chunk_rest.call(null,seq__26450_26480__$1);
var G__26483 = c__16854__auto___26481;
var G__26484 = cljs.core.count.call(null,c__16854__auto___26481);
var G__26485 = (0);
seq__26450_26470 = G__26482;
chunk__26451_26471 = G__26483;
count__26452_26472 = G__26484;
i__26453_26473 = G__26485;
continue;
} else {
var f_26486 = cljs.core.first.call(null,seq__26450_26480__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26486);

var G__26487 = cljs.core.next.call(null,seq__26450_26480__$1);
var G__26488 = null;
var G__26489 = (0);
var G__26490 = (0);
seq__26450_26470 = G__26487;
chunk__26451_26471 = G__26488;
count__26452_26472 = G__26489;
i__26453_26473 = G__26490;
continue;
}
} else {
}
}
break;
}

var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__,map__26449,map__26449__$1,opts,on_cssload){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__,map__26449,map__26449__$1,opts,on_cssload){
return (function (state_26460){
var state_val_26461 = (state_26460[(1)]);
if((state_val_26461 === (1))){
var inst_26454 = cljs.core.async.timeout.call(null,(100));
var state_26460__$1 = state_26460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26460__$1,(2),inst_26454);
} else {
if((state_val_26461 === (2))){
var inst_26456 = (state_26460[(2)]);
var inst_26457 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26458 = on_cssload.call(null,inst_26457);
var state_26460__$1 = (function (){var statearr_26462 = state_26460;
(statearr_26462[(7)] = inst_26456);

return statearr_26462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26460__$1,inst_26458);
} else {
return null;
}
}
});})(c__19079__auto__,map__26449,map__26449__$1,opts,on_cssload))
;
return ((function (switch__19017__auto__,c__19079__auto__,map__26449,map__26449__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____0 = (function (){
var statearr_26466 = [null,null,null,null,null,null,null,null];
(statearr_26466[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__);

(statearr_26466[(1)] = (1));

return statearr_26466;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____1 = (function (state_26460){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26467){if((e26467 instanceof Object)){
var ex__19021__auto__ = e26467;
var statearr_26468_26491 = state_26460;
(statearr_26468_26491[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26492 = state_26460;
state_26460 = G__26492;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__ = function(state_26460){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____1.call(this,state_26460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__,map__26449,map__26449__$1,opts,on_cssload))
})();
var state__19081__auto__ = (function (){var statearr_26469 = f__19080__auto__.call(null);
(statearr_26469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_26469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__,map__26449,map__26449__$1,opts,on_cssload))
);

return c__19079__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1437790539880