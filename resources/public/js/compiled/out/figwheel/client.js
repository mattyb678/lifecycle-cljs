// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24775__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24776__i = 0, G__24776__a = new Array(arguments.length -  0);
while (G__24776__i < G__24776__a.length) {G__24776__a[G__24776__i] = arguments[G__24776__i + 0]; ++G__24776__i;}
  args = new cljs.core.IndexedSeq(G__24776__a,0);
} 
return G__24775__delegate.call(this,args);};
G__24775.cljs$lang$maxFixedArity = 0;
G__24775.cljs$lang$applyTo = (function (arglist__24777){
var args = cljs.core.seq(arglist__24777);
return G__24775__delegate(args);
});
G__24775.cljs$core$IFn$_invoke$arity$variadic = G__24775__delegate;
return G__24775;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24778){
var map__24780 = p__24778;
var map__24780__$1 = ((cljs.core.seq_QMARK_.call(null,map__24780))?cljs.core.apply.call(null,cljs.core.hash_map,map__24780):map__24780);
var message = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16069__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16057__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16057__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16057__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19079__auto___24909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___24909,ch){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___24909,ch){
return (function (state_24883){
var state_val_24884 = (state_24883[(1)]);
if((state_val_24884 === (7))){
var inst_24879 = (state_24883[(2)]);
var state_24883__$1 = state_24883;
var statearr_24885_24910 = state_24883__$1;
(statearr_24885_24910[(2)] = inst_24879);

(statearr_24885_24910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (1))){
var state_24883__$1 = state_24883;
var statearr_24886_24911 = state_24883__$1;
(statearr_24886_24911[(2)] = null);

(statearr_24886_24911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (4))){
var inst_24847 = (state_24883[(7)]);
var inst_24847__$1 = (state_24883[(2)]);
var state_24883__$1 = (function (){var statearr_24887 = state_24883;
(statearr_24887[(7)] = inst_24847__$1);

return statearr_24887;
})();
if(cljs.core.truth_(inst_24847__$1)){
var statearr_24888_24912 = state_24883__$1;
(statearr_24888_24912[(1)] = (5));

} else {
var statearr_24889_24913 = state_24883__$1;
(statearr_24889_24913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (13))){
var state_24883__$1 = state_24883;
var statearr_24890_24914 = state_24883__$1;
(statearr_24890_24914[(2)] = null);

(statearr_24890_24914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (6))){
var state_24883__$1 = state_24883;
var statearr_24891_24915 = state_24883__$1;
(statearr_24891_24915[(2)] = null);

(statearr_24891_24915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (3))){
var inst_24881 = (state_24883[(2)]);
var state_24883__$1 = state_24883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24883__$1,inst_24881);
} else {
if((state_val_24884 === (12))){
var inst_24854 = (state_24883[(8)]);
var inst_24867 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24854);
var inst_24868 = cljs.core.first.call(null,inst_24867);
var inst_24869 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24868);
var inst_24870 = console.warn("Figwheel: Not loading code with warnings - ",inst_24869);
var state_24883__$1 = state_24883;
var statearr_24892_24916 = state_24883__$1;
(statearr_24892_24916[(2)] = inst_24870);

(statearr_24892_24916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (2))){
var state_24883__$1 = state_24883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24883__$1,(4),ch);
} else {
if((state_val_24884 === (11))){
var inst_24863 = (state_24883[(2)]);
var state_24883__$1 = state_24883;
var statearr_24893_24917 = state_24883__$1;
(statearr_24893_24917[(2)] = inst_24863);

(statearr_24893_24917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (9))){
var inst_24853 = (state_24883[(9)]);
var inst_24865 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24853,opts);
var state_24883__$1 = state_24883;
if(cljs.core.truth_(inst_24865)){
var statearr_24894_24918 = state_24883__$1;
(statearr_24894_24918[(1)] = (12));

} else {
var statearr_24895_24919 = state_24883__$1;
(statearr_24895_24919[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (5))){
var inst_24853 = (state_24883[(9)]);
var inst_24847 = (state_24883[(7)]);
var inst_24849 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24850 = (new cljs.core.PersistentArrayMap(null,2,inst_24849,null));
var inst_24851 = (new cljs.core.PersistentHashSet(null,inst_24850,null));
var inst_24852 = figwheel.client.focus_msgs.call(null,inst_24851,inst_24847);
var inst_24853__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24852);
var inst_24854 = cljs.core.first.call(null,inst_24852);
var inst_24855 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24853__$1,opts);
var state_24883__$1 = (function (){var statearr_24896 = state_24883;
(statearr_24896[(8)] = inst_24854);

(statearr_24896[(9)] = inst_24853__$1);

return statearr_24896;
})();
if(cljs.core.truth_(inst_24855)){
var statearr_24897_24920 = state_24883__$1;
(statearr_24897_24920[(1)] = (8));

} else {
var statearr_24898_24921 = state_24883__$1;
(statearr_24898_24921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (14))){
var inst_24873 = (state_24883[(2)]);
var state_24883__$1 = state_24883;
var statearr_24899_24922 = state_24883__$1;
(statearr_24899_24922[(2)] = inst_24873);

(statearr_24899_24922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (10))){
var inst_24875 = (state_24883[(2)]);
var state_24883__$1 = (function (){var statearr_24900 = state_24883;
(statearr_24900[(10)] = inst_24875);

return statearr_24900;
})();
var statearr_24901_24923 = state_24883__$1;
(statearr_24901_24923[(2)] = null);

(statearr_24901_24923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24884 === (8))){
var inst_24854 = (state_24883[(8)]);
var inst_24857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24858 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24854);
var inst_24859 = cljs.core.async.timeout.call(null,(1000));
var inst_24860 = [inst_24858,inst_24859];
var inst_24861 = (new cljs.core.PersistentVector(null,2,(5),inst_24857,inst_24860,null));
var state_24883__$1 = state_24883;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24883__$1,(11),inst_24861);
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
});})(c__19079__auto___24909,ch))
;
return ((function (switch__19017__auto__,c__19079__auto___24909,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____0 = (function (){
var statearr_24905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24905[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__);

(statearr_24905[(1)] = (1));

return statearr_24905;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____1 = (function (state_24883){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_24883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e24906){if((e24906 instanceof Object)){
var ex__19021__auto__ = e24906;
var statearr_24907_24924 = state_24883;
(statearr_24907_24924[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24925 = state_24883;
state_24883 = G__24925;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__ = function(state_24883){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____1.call(this,state_24883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19018__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___24909,ch))
})();
var state__19081__auto__ = (function (){var statearr_24908 = f__19080__auto__.call(null);
(statearr_24908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___24909);

return statearr_24908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___24909,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24926_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24926_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24933 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24933){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24931 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24932 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24931,_STAR_print_newline_STAR_24932,base_path_24933){
return (function() { 
var G__24934__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24935__i = 0, G__24935__a = new Array(arguments.length -  0);
while (G__24935__i < G__24935__a.length) {G__24935__a[G__24935__i] = arguments[G__24935__i + 0]; ++G__24935__i;}
  args = new cljs.core.IndexedSeq(G__24935__a,0);
} 
return G__24934__delegate.call(this,args);};
G__24934.cljs$lang$maxFixedArity = 0;
G__24934.cljs$lang$applyTo = (function (arglist__24936){
var args = cljs.core.seq(arglist__24936);
return G__24934__delegate(args);
});
G__24934.cljs$core$IFn$_invoke$arity$variadic = G__24934__delegate;
return G__24934;
})()
;})(_STAR_print_fn_STAR_24931,_STAR_print_newline_STAR_24932,base_path_24933))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24932;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24931;
}}catch (e24930){if((e24930 instanceof Error)){
var e = e24930;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24933], null));
} else {
var e = e24930;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24933))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24937){
var map__24942 = p__24937;
var map__24942__$1 = ((cljs.core.seq_QMARK_.call(null,map__24942))?cljs.core.apply.call(null,cljs.core.hash_map,map__24942):map__24942);
var opts = map__24942__$1;
var build_id = cljs.core.get.call(null,map__24942__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24942,map__24942__$1,opts,build_id){
return (function (p__24943){
var vec__24944 = p__24943;
var map__24945 = cljs.core.nth.call(null,vec__24944,(0),null);
var map__24945__$1 = ((cljs.core.seq_QMARK_.call(null,map__24945))?cljs.core.apply.call(null,cljs.core.hash_map,map__24945):map__24945);
var msg = map__24945__$1;
var msg_name = cljs.core.get.call(null,map__24945__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24944,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24944,map__24945,map__24945__$1,msg,msg_name,_,map__24942,map__24942__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24944,map__24945,map__24945__$1,msg,msg_name,_,map__24942,map__24942__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24942,map__24942__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24949){
var vec__24950 = p__24949;
var map__24951 = cljs.core.nth.call(null,vec__24950,(0),null);
var map__24951__$1 = ((cljs.core.seq_QMARK_.call(null,map__24951))?cljs.core.apply.call(null,cljs.core.hash_map,map__24951):map__24951);
var msg = map__24951__$1;
var msg_name = cljs.core.get.call(null,map__24951__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24950,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24952){
var map__24960 = p__24952;
var map__24960__$1 = ((cljs.core.seq_QMARK_.call(null,map__24960))?cljs.core.apply.call(null,cljs.core.hash_map,map__24960):map__24960);
var on_compile_warning = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24960,map__24960__$1,on_compile_warning,on_compile_fail){
return (function (p__24961){
var vec__24962 = p__24961;
var map__24963 = cljs.core.nth.call(null,vec__24962,(0),null);
var map__24963__$1 = ((cljs.core.seq_QMARK_.call(null,map__24963))?cljs.core.apply.call(null,cljs.core.hash_map,map__24963):map__24963);
var msg = map__24963__$1;
var msg_name = cljs.core.get.call(null,map__24963__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24962,(1));
var pred__24964 = cljs.core._EQ_;
var expr__24965 = msg_name;
if(cljs.core.truth_(pred__24964.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24965))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24964.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24965))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24960,map__24960__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__,msg_hist,msg_names,msg){
return (function (state_25166){
var state_val_25167 = (state_25166[(1)]);
if((state_val_25167 === (7))){
var inst_25100 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25168_25209 = state_25166__$1;
(statearr_25168_25209[(2)] = inst_25100);

(statearr_25168_25209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (20))){
var inst_25128 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25128)){
var statearr_25169_25210 = state_25166__$1;
(statearr_25169_25210[(1)] = (22));

} else {
var statearr_25170_25211 = state_25166__$1;
(statearr_25170_25211[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (27))){
var inst_25140 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25141 = figwheel.client.heads_up.display_warning.call(null,inst_25140);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(30),inst_25141);
} else {
if((state_val_25167 === (1))){
var inst_25088 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25088)){
var statearr_25171_25212 = state_25166__$1;
(statearr_25171_25212[(1)] = (2));

} else {
var statearr_25172_25213 = state_25166__$1;
(statearr_25172_25213[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (24))){
var inst_25156 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25173_25214 = state_25166__$1;
(statearr_25173_25214[(2)] = inst_25156);

(statearr_25173_25214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (4))){
var inst_25164 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25166__$1,inst_25164);
} else {
if((state_val_25167 === (15))){
var inst_25116 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25117 = figwheel.client.format_messages.call(null,inst_25116);
var inst_25118 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25119 = figwheel.client.heads_up.display_error.call(null,inst_25117,inst_25118);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(18),inst_25119);
} else {
if((state_val_25167 === (21))){
var inst_25158 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25174_25215 = state_25166__$1;
(statearr_25174_25215[(2)] = inst_25158);

(statearr_25174_25215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (31))){
var inst_25147 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(34),inst_25147);
} else {
if((state_val_25167 === (32))){
var state_25166__$1 = state_25166;
var statearr_25175_25216 = state_25166__$1;
(statearr_25175_25216[(2)] = null);

(statearr_25175_25216[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (33))){
var inst_25152 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25176_25217 = state_25166__$1;
(statearr_25176_25217[(2)] = inst_25152);

(statearr_25176_25217[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (13))){
var inst_25106 = (state_25166[(2)]);
var inst_25107 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25108 = figwheel.client.format_messages.call(null,inst_25107);
var inst_25109 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25110 = figwheel.client.heads_up.display_error.call(null,inst_25108,inst_25109);
var state_25166__$1 = (function (){var statearr_25177 = state_25166;
(statearr_25177[(7)] = inst_25106);

return statearr_25177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(14),inst_25110);
} else {
if((state_val_25167 === (22))){
var inst_25130 = figwheel.client.heads_up.clear.call(null);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(25),inst_25130);
} else {
if((state_val_25167 === (29))){
var inst_25154 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25178_25218 = state_25166__$1;
(statearr_25178_25218[(2)] = inst_25154);

(statearr_25178_25218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (6))){
var inst_25096 = figwheel.client.heads_up.clear.call(null);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(9),inst_25096);
} else {
if((state_val_25167 === (28))){
var inst_25145 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25145)){
var statearr_25179_25219 = state_25166__$1;
(statearr_25179_25219[(1)] = (31));

} else {
var statearr_25180_25220 = state_25166__$1;
(statearr_25180_25220[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (25))){
var inst_25132 = (state_25166[(2)]);
var inst_25133 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25134 = figwheel.client.heads_up.display_warning.call(null,inst_25133);
var state_25166__$1 = (function (){var statearr_25181 = state_25166;
(statearr_25181[(8)] = inst_25132);

return statearr_25181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(26),inst_25134);
} else {
if((state_val_25167 === (34))){
var inst_25149 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25182_25221 = state_25166__$1;
(statearr_25182_25221[(2)] = inst_25149);

(statearr_25182_25221[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (17))){
var inst_25160 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25183_25222 = state_25166__$1;
(statearr_25183_25222[(2)] = inst_25160);

(statearr_25183_25222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (3))){
var inst_25102 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25102)){
var statearr_25184_25223 = state_25166__$1;
(statearr_25184_25223[(1)] = (10));

} else {
var statearr_25185_25224 = state_25166__$1;
(statearr_25185_25224[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (12))){
var inst_25162 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25186_25225 = state_25166__$1;
(statearr_25186_25225[(2)] = inst_25162);

(statearr_25186_25225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (2))){
var inst_25090 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25090)){
var statearr_25187_25226 = state_25166__$1;
(statearr_25187_25226[(1)] = (5));

} else {
var statearr_25188_25227 = state_25166__$1;
(statearr_25188_25227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (23))){
var inst_25138 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25138)){
var statearr_25189_25228 = state_25166__$1;
(statearr_25189_25228[(1)] = (27));

} else {
var statearr_25190_25229 = state_25166__$1;
(statearr_25190_25229[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (19))){
var inst_25125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25126 = figwheel.client.heads_up.append_message.call(null,inst_25125);
var state_25166__$1 = state_25166;
var statearr_25191_25230 = state_25166__$1;
(statearr_25191_25230[(2)] = inst_25126);

(statearr_25191_25230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (11))){
var inst_25114 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25114)){
var statearr_25192_25231 = state_25166__$1;
(statearr_25192_25231[(1)] = (15));

} else {
var statearr_25193_25232 = state_25166__$1;
(statearr_25193_25232[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (9))){
var inst_25098 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25194_25233 = state_25166__$1;
(statearr_25194_25233[(2)] = inst_25098);

(statearr_25194_25233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (5))){
var inst_25092 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(8),inst_25092);
} else {
if((state_val_25167 === (14))){
var inst_25112 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25195_25234 = state_25166__$1;
(statearr_25195_25234[(2)] = inst_25112);

(statearr_25195_25234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (26))){
var inst_25136 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25196_25235 = state_25166__$1;
(statearr_25196_25235[(2)] = inst_25136);

(statearr_25196_25235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (16))){
var inst_25123 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25123)){
var statearr_25197_25236 = state_25166__$1;
(statearr_25197_25236[(1)] = (19));

} else {
var statearr_25198_25237 = state_25166__$1;
(statearr_25198_25237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (30))){
var inst_25143 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25199_25238 = state_25166__$1;
(statearr_25199_25238[(2)] = inst_25143);

(statearr_25199_25238[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (10))){
var inst_25104 = figwheel.client.heads_up.clear.call(null);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(13),inst_25104);
} else {
if((state_val_25167 === (18))){
var inst_25121 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25200_25239 = state_25166__$1;
(statearr_25200_25239[(2)] = inst_25121);

(statearr_25200_25239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (8))){
var inst_25094 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25201_25240 = state_25166__$1;
(statearr_25201_25240[(2)] = inst_25094);

(statearr_25201_25240[(1)] = (7));


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
});})(c__19079__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19017__auto__,c__19079__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____0 = (function (){
var statearr_25205 = [null,null,null,null,null,null,null,null,null];
(statearr_25205[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__);

(statearr_25205[(1)] = (1));

return statearr_25205;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____1 = (function (state_25166){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25206){if((e25206 instanceof Object)){
var ex__19021__auto__ = e25206;
var statearr_25207_25241 = state_25166;
(statearr_25207_25241[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25242 = state_25166;
state_25166 = G__25242;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__ = function(state_25166){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____1.call(this,state_25166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__,msg_hist,msg_names,msg))
})();
var state__19081__auto__ = (function (){var statearr_25208 = f__19080__auto__.call(null);
(statearr_25208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_25208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__,msg_hist,msg_names,msg))
);

return c__19079__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19079__auto___25305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___25305,ch){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___25305,ch){
return (function (state_25288){
var state_val_25289 = (state_25288[(1)]);
if((state_val_25289 === (1))){
var state_25288__$1 = state_25288;
var statearr_25290_25306 = state_25288__$1;
(statearr_25290_25306[(2)] = null);

(statearr_25290_25306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (2))){
var state_25288__$1 = state_25288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25288__$1,(4),ch);
} else {
if((state_val_25289 === (3))){
var inst_25286 = (state_25288[(2)]);
var state_25288__$1 = state_25288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25288__$1,inst_25286);
} else {
if((state_val_25289 === (4))){
var inst_25276 = (state_25288[(7)]);
var inst_25276__$1 = (state_25288[(2)]);
var state_25288__$1 = (function (){var statearr_25291 = state_25288;
(statearr_25291[(7)] = inst_25276__$1);

return statearr_25291;
})();
if(cljs.core.truth_(inst_25276__$1)){
var statearr_25292_25307 = state_25288__$1;
(statearr_25292_25307[(1)] = (5));

} else {
var statearr_25293_25308 = state_25288__$1;
(statearr_25293_25308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (5))){
var inst_25276 = (state_25288[(7)]);
var inst_25278 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25276);
var state_25288__$1 = state_25288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25288__$1,(8),inst_25278);
} else {
if((state_val_25289 === (6))){
var state_25288__$1 = state_25288;
var statearr_25294_25309 = state_25288__$1;
(statearr_25294_25309[(2)] = null);

(statearr_25294_25309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (7))){
var inst_25284 = (state_25288[(2)]);
var state_25288__$1 = state_25288;
var statearr_25295_25310 = state_25288__$1;
(statearr_25295_25310[(2)] = inst_25284);

(statearr_25295_25310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (8))){
var inst_25280 = (state_25288[(2)]);
var state_25288__$1 = (function (){var statearr_25296 = state_25288;
(statearr_25296[(8)] = inst_25280);

return statearr_25296;
})();
var statearr_25297_25311 = state_25288__$1;
(statearr_25297_25311[(2)] = null);

(statearr_25297_25311[(1)] = (2));


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
});})(c__19079__auto___25305,ch))
;
return ((function (switch__19017__auto__,c__19079__auto___25305,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19018__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19018__auto____0 = (function (){
var statearr_25301 = [null,null,null,null,null,null,null,null,null];
(statearr_25301[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19018__auto__);

(statearr_25301[(1)] = (1));

return statearr_25301;
});
var figwheel$client$heads_up_plugin_$_state_machine__19018__auto____1 = (function (state_25288){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25302){if((e25302 instanceof Object)){
var ex__19021__auto__ = e25302;
var statearr_25303_25312 = state_25288;
(statearr_25303_25312[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25313 = state_25288;
state_25288 = G__25313;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19018__auto__ = function(state_25288){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19018__auto____1.call(this,state_25288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19018__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19018__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___25305,ch))
})();
var state__19081__auto__ = (function (){var statearr_25304 = f__19080__auto__.call(null);
(statearr_25304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___25305);

return statearr_25304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___25305,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_25334){
var state_val_25335 = (state_25334[(1)]);
if((state_val_25335 === (1))){
var inst_25329 = cljs.core.async.timeout.call(null,(3000));
var state_25334__$1 = state_25334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25334__$1,(2),inst_25329);
} else {
if((state_val_25335 === (2))){
var inst_25331 = (state_25334[(2)]);
var inst_25332 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25334__$1 = (function (){var statearr_25336 = state_25334;
(statearr_25336[(7)] = inst_25331);

return statearr_25336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25334__$1,inst_25332);
} else {
return null;
}
}
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____0 = (function (){
var statearr_25340 = [null,null,null,null,null,null,null,null];
(statearr_25340[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__);

(statearr_25340[(1)] = (1));

return statearr_25340;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____1 = (function (state_25334){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25341){if((e25341 instanceof Object)){
var ex__19021__auto__ = e25341;
var statearr_25342_25344 = state_25334;
(statearr_25342_25344[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25345 = state_25334;
state_25334 = G__25345;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__ = function(state_25334){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____1.call(this,state_25334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19018__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_25343 = f__19080__auto__.call(null);
(statearr_25343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_25343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25346){
var map__25352 = p__25346;
var map__25352__$1 = ((cljs.core.seq_QMARK_.call(null,map__25352))?cljs.core.apply.call(null,cljs.core.hash_map,map__25352):map__25352);
var ed = map__25352__$1;
var formatted_exception = cljs.core.get.call(null,map__25352__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25352__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25352__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25353_25357 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25354_25358 = null;
var count__25355_25359 = (0);
var i__25356_25360 = (0);
while(true){
if((i__25356_25360 < count__25355_25359)){
var msg_25361 = cljs.core._nth.call(null,chunk__25354_25358,i__25356_25360);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25361);

var G__25362 = seq__25353_25357;
var G__25363 = chunk__25354_25358;
var G__25364 = count__25355_25359;
var G__25365 = (i__25356_25360 + (1));
seq__25353_25357 = G__25362;
chunk__25354_25358 = G__25363;
count__25355_25359 = G__25364;
i__25356_25360 = G__25365;
continue;
} else {
var temp__4425__auto___25366 = cljs.core.seq.call(null,seq__25353_25357);
if(temp__4425__auto___25366){
var seq__25353_25367__$1 = temp__4425__auto___25366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25353_25367__$1)){
var c__16854__auto___25368 = cljs.core.chunk_first.call(null,seq__25353_25367__$1);
var G__25369 = cljs.core.chunk_rest.call(null,seq__25353_25367__$1);
var G__25370 = c__16854__auto___25368;
var G__25371 = cljs.core.count.call(null,c__16854__auto___25368);
var G__25372 = (0);
seq__25353_25357 = G__25369;
chunk__25354_25358 = G__25370;
count__25355_25359 = G__25371;
i__25356_25360 = G__25372;
continue;
} else {
var msg_25373 = cljs.core.first.call(null,seq__25353_25367__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25373);

var G__25374 = cljs.core.next.call(null,seq__25353_25367__$1);
var G__25375 = null;
var G__25376 = (0);
var G__25377 = (0);
seq__25353_25357 = G__25374;
chunk__25354_25358 = G__25375;
count__25355_25359 = G__25376;
i__25356_25360 = G__25377;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25378){
var map__25380 = p__25378;
var map__25380__$1 = ((cljs.core.seq_QMARK_.call(null,map__25380))?cljs.core.apply.call(null,cljs.core.hash_map,map__25380):map__25380);
var w = map__25380__$1;
var message = cljs.core.get.call(null,map__25380__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16057__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16057__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16057__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25387 = cljs.core.seq.call(null,plugins);
var chunk__25388 = null;
var count__25389 = (0);
var i__25390 = (0);
while(true){
if((i__25390 < count__25389)){
var vec__25391 = cljs.core._nth.call(null,chunk__25388,i__25390);
var k = cljs.core.nth.call(null,vec__25391,(0),null);
var plugin = cljs.core.nth.call(null,vec__25391,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25393 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25387,chunk__25388,count__25389,i__25390,pl_25393,vec__25391,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25393.call(null,msg_hist);
});})(seq__25387,chunk__25388,count__25389,i__25390,pl_25393,vec__25391,k,plugin))
);
} else {
}

var G__25394 = seq__25387;
var G__25395 = chunk__25388;
var G__25396 = count__25389;
var G__25397 = (i__25390 + (1));
seq__25387 = G__25394;
chunk__25388 = G__25395;
count__25389 = G__25396;
i__25390 = G__25397;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25387);
if(temp__4425__auto__){
var seq__25387__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25387__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__25387__$1);
var G__25398 = cljs.core.chunk_rest.call(null,seq__25387__$1);
var G__25399 = c__16854__auto__;
var G__25400 = cljs.core.count.call(null,c__16854__auto__);
var G__25401 = (0);
seq__25387 = G__25398;
chunk__25388 = G__25399;
count__25389 = G__25400;
i__25390 = G__25401;
continue;
} else {
var vec__25392 = cljs.core.first.call(null,seq__25387__$1);
var k = cljs.core.nth.call(null,vec__25392,(0),null);
var plugin = cljs.core.nth.call(null,vec__25392,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25402 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25387,chunk__25388,count__25389,i__25390,pl_25402,vec__25392,k,plugin,seq__25387__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25402.call(null,msg_hist);
});})(seq__25387,chunk__25388,count__25389,i__25390,pl_25402,vec__25392,k,plugin,seq__25387__$1,temp__4425__auto__))
);
} else {
}

var G__25403 = cljs.core.next.call(null,seq__25387__$1);
var G__25404 = null;
var G__25405 = (0);
var G__25406 = (0);
seq__25387 = G__25403;
chunk__25388 = G__25404;
count__25389 = G__25405;
i__25390 = G__25406;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__25408 = arguments.length;
switch (G__25408) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17109__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17109__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25411){
var map__25412 = p__25411;
var map__25412__$1 = ((cljs.core.seq_QMARK_.call(null,map__25412))?cljs.core.apply.call(null,cljs.core.hash_map,map__25412):map__25412);
var opts = map__25412__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25410){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25410));
});

//# sourceMappingURL=client.js.map?rel=1437790539102