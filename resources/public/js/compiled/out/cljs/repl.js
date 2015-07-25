// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25782_25794 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25783_25795 = null;
var count__25784_25796 = (0);
var i__25785_25797 = (0);
while(true){
if((i__25785_25797 < count__25784_25796)){
var f_25798 = cljs.core._nth.call(null,chunk__25783_25795,i__25785_25797);
cljs.core.println.call(null,"  ",f_25798);

var G__25799 = seq__25782_25794;
var G__25800 = chunk__25783_25795;
var G__25801 = count__25784_25796;
var G__25802 = (i__25785_25797 + (1));
seq__25782_25794 = G__25799;
chunk__25783_25795 = G__25800;
count__25784_25796 = G__25801;
i__25785_25797 = G__25802;
continue;
} else {
var temp__4425__auto___25803 = cljs.core.seq.call(null,seq__25782_25794);
if(temp__4425__auto___25803){
var seq__25782_25804__$1 = temp__4425__auto___25803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25782_25804__$1)){
var c__16854__auto___25805 = cljs.core.chunk_first.call(null,seq__25782_25804__$1);
var G__25806 = cljs.core.chunk_rest.call(null,seq__25782_25804__$1);
var G__25807 = c__16854__auto___25805;
var G__25808 = cljs.core.count.call(null,c__16854__auto___25805);
var G__25809 = (0);
seq__25782_25794 = G__25806;
chunk__25783_25795 = G__25807;
count__25784_25796 = G__25808;
i__25785_25797 = G__25809;
continue;
} else {
var f_25810 = cljs.core.first.call(null,seq__25782_25804__$1);
cljs.core.println.call(null,"  ",f_25810);

var G__25811 = cljs.core.next.call(null,seq__25782_25804__$1);
var G__25812 = null;
var G__25813 = (0);
var G__25814 = (0);
seq__25782_25794 = G__25811;
chunk__25783_25795 = G__25812;
count__25784_25796 = G__25813;
i__25785_25797 = G__25814;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25815 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16069__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25815);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25815)))?cljs.core.second.call(null,arglists_25815):arglists_25815));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25787 = null;
var count__25788 = (0);
var i__25789 = (0);
while(true){
if((i__25789 < count__25788)){
var vec__25790 = cljs.core._nth.call(null,chunk__25787,i__25789);
var name = cljs.core.nth.call(null,vec__25790,(0),null);
var map__25791 = cljs.core.nth.call(null,vec__25790,(1),null);
var map__25791__$1 = ((cljs.core.seq_QMARK_.call(null,map__25791))?cljs.core.apply.call(null,cljs.core.hash_map,map__25791):map__25791);
var doc = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25816 = seq__25786;
var G__25817 = chunk__25787;
var G__25818 = count__25788;
var G__25819 = (i__25789 + (1));
seq__25786 = G__25816;
chunk__25787 = G__25817;
count__25788 = G__25818;
i__25789 = G__25819;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25786);
if(temp__4425__auto__){
var seq__25786__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25786__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__25786__$1);
var G__25820 = cljs.core.chunk_rest.call(null,seq__25786__$1);
var G__25821 = c__16854__auto__;
var G__25822 = cljs.core.count.call(null,c__16854__auto__);
var G__25823 = (0);
seq__25786 = G__25820;
chunk__25787 = G__25821;
count__25788 = G__25822;
i__25789 = G__25823;
continue;
} else {
var vec__25792 = cljs.core.first.call(null,seq__25786__$1);
var name = cljs.core.nth.call(null,vec__25792,(0),null);
var map__25793 = cljs.core.nth.call(null,vec__25792,(1),null);
var map__25793__$1 = ((cljs.core.seq_QMARK_.call(null,map__25793))?cljs.core.apply.call(null,cljs.core.hash_map,map__25793):map__25793);
var doc = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25824 = cljs.core.next.call(null,seq__25786__$1);
var G__25825 = null;
var G__25826 = (0);
var G__25827 = (0);
seq__25786 = G__25824;
chunk__25787 = G__25825;
count__25788 = G__25826;
i__25789 = G__25827;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1437790539586