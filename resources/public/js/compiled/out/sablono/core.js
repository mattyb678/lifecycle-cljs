// Compiled by ClojureScript 0.0-3297 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20657__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__20656 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__20656,(0),null);
var body = cljs.core.nthnext.call(null,vec__20656,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__20657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20658__i = 0, G__20658__a = new Array(arguments.length -  0);
while (G__20658__i < G__20658__a.length) {G__20658__a[G__20658__i] = arguments[G__20658__i + 0]; ++G__20658__i;}
  args = new cljs.core.IndexedSeq(G__20658__a,0);
} 
return G__20657__delegate.call(this,args);};
G__20657.cljs$lang$maxFixedArity = 0;
G__20657.cljs$lang$applyTo = (function (arglist__20659){
var args = cljs.core.seq(arglist__20659);
return G__20657__delegate(args);
});
G__20657.cljs$core$IFn$_invoke$arity$variadic = G__20657__delegate;
return G__20657;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__16823__auto__ = (function sablono$core$update_arglists_$_iter__20664(s__20665){
return (new cljs.core.LazySeq(null,(function (){
var s__20665__$1 = s__20665;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20665__$1);
if(temp__4425__auto__){
var s__20665__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20665__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__20665__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__20667 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__20666 = (0);
while(true){
if((i__20666 < size__16822__auto__)){
var args = cljs.core._nth.call(null,c__16821__auto__,i__20666);
cljs.core.chunk_append.call(null,b__20667,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__20668 = (i__20666 + (1));
i__20666 = G__20668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20667),sablono$core$update_arglists_$_iter__20664.call(null,cljs.core.chunk_rest.call(null,s__20665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20667),null);
}
} else {
var args = cljs.core.first.call(null,s__20665__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20664.call(null,cljs.core.rest.call(null,s__20665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(){
var argseq__17109__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17109__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__16823__auto__ = (function sablono$core$iter__20670(s__20671){
return (new cljs.core.LazySeq(null,(function (){
var s__20671__$1 = s__20671;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20671__$1);
if(temp__4425__auto__){
var s__20671__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20671__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__20671__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__20673 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__20672 = (0);
while(true){
if((i__20672 < size__16822__auto__)){
var style = cljs.core._nth.call(null,c__16821__auto__,i__20672);
cljs.core.chunk_append.call(null,b__20673,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__20674 = (i__20672 + (1));
i__20672 = G__20674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20673),sablono$core$iter__20670.call(null,cljs.core.chunk_rest.call(null,s__20671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20673),null);
}
} else {
var style = cljs.core.first.call(null,s__20671__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__20670.call(null,cljs.core.rest.call(null,s__20671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq20669){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20669));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to20675 = (function sablono$core$link_to20675(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to20675.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

sablono.core.link_to20675.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to20675.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20675.cljs$lang$applyTo = (function (seq20676){
var G__20677 = cljs.core.first.call(null,seq20676);
var seq20676__$1 = cljs.core.next.call(null,seq20676);
return sablono.core.link_to20675.cljs$core$IFn$_invoke$arity$variadic(G__20677,seq20676__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20675);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20678 = (function sablono$core$mail_to20678(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to20678.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

sablono.core.mail_to20678.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20681){
var vec__20682 = p__20681;
var content = cljs.core.nth.call(null,vec__20682,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16069__auto__ = content;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20678.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20678.cljs$lang$applyTo = (function (seq20679){
var G__20680 = cljs.core.first.call(null,seq20679);
var seq20679__$1 = cljs.core.next.call(null,seq20679);
return sablono.core.mail_to20678.cljs$core$IFn$_invoke$arity$variadic(G__20680,seq20679__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20678);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20683 = (function sablono$core$unordered_list20683(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__16823__auto__ = (function sablono$core$unordered_list20683_$_iter__20688(s__20689){
return (new cljs.core.LazySeq(null,(function (){
var s__20689__$1 = s__20689;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20689__$1);
if(temp__4425__auto__){
var s__20689__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20689__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__20689__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__20691 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__20690 = (0);
while(true){
if((i__20690 < size__16822__auto__)){
var x = cljs.core._nth.call(null,c__16821__auto__,i__20690);
cljs.core.chunk_append.call(null,b__20691,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20692 = (i__20690 + (1));
i__20690 = G__20692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20691),sablono$core$unordered_list20683_$_iter__20688.call(null,cljs.core.chunk_rest.call(null,s__20689__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20691),null);
}
} else {
var x = cljs.core.first.call(null,s__20689__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list20683_$_iter__20688.call(null,cljs.core.rest.call(null,s__20689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20683);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20693 = (function sablono$core$ordered_list20693(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__16823__auto__ = (function sablono$core$ordered_list20693_$_iter__20698(s__20699){
return (new cljs.core.LazySeq(null,(function (){
var s__20699__$1 = s__20699;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20699__$1);
if(temp__4425__auto__){
var s__20699__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20699__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__20699__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__20701 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__20700 = (0);
while(true){
if((i__20700 < size__16822__auto__)){
var x = cljs.core._nth.call(null,c__16821__auto__,i__20700);
cljs.core.chunk_append.call(null,b__20701,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20702 = (i__20700 + (1));
i__20700 = G__20702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20701),sablono$core$ordered_list20693_$_iter__20698.call(null,cljs.core.chunk_rest.call(null,s__20699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20701),null);
}
} else {
var x = cljs.core.first.call(null,s__20699__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list20693_$_iter__20698.call(null,cljs.core.rest.call(null,s__20699__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20693);
/**
 * Create an image element.
 */
sablono.core.image20703 = (function sablono$core$image20703(){
var G__20705 = arguments.length;
switch (G__20705) {
case 1:
return sablono.core.image20703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image20703.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image20703.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image20703.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20703);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__20707_SHARP_,p2__20708_SHARP_){
return [cljs.core.str(p1__20707_SHARP_),cljs.core.str("["),cljs.core.str(p2__20708_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__20709_SHARP_,p2__20710_SHARP_){
return [cljs.core.str(p1__20709_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20710_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field20711 = (function sablono$core$color_field20711(){
var G__20713 = arguments.length;
switch (G__20713) {
case 1:
return sablono.core.color_field20711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field20711.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.color_field20711.call(null,name__20440__auto__,null);
});

sablono.core.color_field20711.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.color_field20711.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20711);

/**
 * Creates a date input field.
 */
sablono.core.date_field20714 = (function sablono$core$date_field20714(){
var G__20716 = arguments.length;
switch (G__20716) {
case 1:
return sablono.core.date_field20714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field20714.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.date_field20714.call(null,name__20440__auto__,null);
});

sablono.core.date_field20714.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.date_field20714.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20714);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20717 = (function sablono$core$datetime_field20717(){
var G__20719 = arguments.length;
switch (G__20719) {
case 1:
return sablono.core.datetime_field20717.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field20717.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.datetime_field20717.call(null,name__20440__auto__,null);
});

sablono.core.datetime_field20717.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.datetime_field20717.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20717);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20720 = (function sablono$core$datetime_local_field20720(){
var G__20722 = arguments.length;
switch (G__20722) {
case 1:
return sablono.core.datetime_local_field20720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field20720.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.datetime_local_field20720.call(null,name__20440__auto__,null);
});

sablono.core.datetime_local_field20720.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.datetime_local_field20720.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20720);

/**
 * Creates a email input field.
 */
sablono.core.email_field20723 = (function sablono$core$email_field20723(){
var G__20725 = arguments.length;
switch (G__20725) {
case 1:
return sablono.core.email_field20723.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20723.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field20723.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.email_field20723.call(null,name__20440__auto__,null);
});

sablono.core.email_field20723.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.email_field20723.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20723);

/**
 * Creates a file input field.
 */
sablono.core.file_field20726 = (function sablono$core$file_field20726(){
var G__20728 = arguments.length;
switch (G__20728) {
case 1:
return sablono.core.file_field20726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field20726.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.file_field20726.call(null,name__20440__auto__,null);
});

sablono.core.file_field20726.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.file_field20726.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20726);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20729 = (function sablono$core$hidden_field20729(){
var G__20731 = arguments.length;
switch (G__20731) {
case 1:
return sablono.core.hidden_field20729.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20729.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field20729.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.hidden_field20729.call(null,name__20440__auto__,null);
});

sablono.core.hidden_field20729.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.hidden_field20729.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20729);

/**
 * Creates a month input field.
 */
sablono.core.month_field20732 = (function sablono$core$month_field20732(){
var G__20734 = arguments.length;
switch (G__20734) {
case 1:
return sablono.core.month_field20732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field20732.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.month_field20732.call(null,name__20440__auto__,null);
});

sablono.core.month_field20732.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.month_field20732.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20732);

/**
 * Creates a number input field.
 */
sablono.core.number_field20735 = (function sablono$core$number_field20735(){
var G__20737 = arguments.length;
switch (G__20737) {
case 1:
return sablono.core.number_field20735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field20735.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.number_field20735.call(null,name__20440__auto__,null);
});

sablono.core.number_field20735.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.number_field20735.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20735);

/**
 * Creates a password input field.
 */
sablono.core.password_field20738 = (function sablono$core$password_field20738(){
var G__20740 = arguments.length;
switch (G__20740) {
case 1:
return sablono.core.password_field20738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field20738.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.password_field20738.call(null,name__20440__auto__,null);
});

sablono.core.password_field20738.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.password_field20738.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20738);

/**
 * Creates a range input field.
 */
sablono.core.range_field20741 = (function sablono$core$range_field20741(){
var G__20743 = arguments.length;
switch (G__20743) {
case 1:
return sablono.core.range_field20741.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20741.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field20741.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.range_field20741.call(null,name__20440__auto__,null);
});

sablono.core.range_field20741.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.range_field20741.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20741);

/**
 * Creates a search input field.
 */
sablono.core.search_field20744 = (function sablono$core$search_field20744(){
var G__20746 = arguments.length;
switch (G__20746) {
case 1:
return sablono.core.search_field20744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field20744.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.search_field20744.call(null,name__20440__auto__,null);
});

sablono.core.search_field20744.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.search_field20744.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20744);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20747 = (function sablono$core$tel_field20747(){
var G__20749 = arguments.length;
switch (G__20749) {
case 1:
return sablono.core.tel_field20747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field20747.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.tel_field20747.call(null,name__20440__auto__,null);
});

sablono.core.tel_field20747.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.tel_field20747.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20747);

/**
 * Creates a text input field.
 */
sablono.core.text_field20750 = (function sablono$core$text_field20750(){
var G__20752 = arguments.length;
switch (G__20752) {
case 1:
return sablono.core.text_field20750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field20750.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.text_field20750.call(null,name__20440__auto__,null);
});

sablono.core.text_field20750.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.text_field20750.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20750);

/**
 * Creates a time input field.
 */
sablono.core.time_field20753 = (function sablono$core$time_field20753(){
var G__20755 = arguments.length;
switch (G__20755) {
case 1:
return sablono.core.time_field20753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field20753.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.time_field20753.call(null,name__20440__auto__,null);
});

sablono.core.time_field20753.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.time_field20753.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20753);

/**
 * Creates a url input field.
 */
sablono.core.url_field20756 = (function sablono$core$url_field20756(){
var G__20758 = arguments.length;
switch (G__20758) {
case 1:
return sablono.core.url_field20756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field20756.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.url_field20756.call(null,name__20440__auto__,null);
});

sablono.core.url_field20756.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.url_field20756.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20756);

/**
 * Creates a week input field.
 */
sablono.core.week_field20759 = (function sablono$core$week_field20759(){
var G__20761 = arguments.length;
switch (G__20761) {
case 1:
return sablono.core.week_field20759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field20759.cljs$core$IFn$_invoke$arity$1 = (function (name__20440__auto__){
return sablono.core.week_field20759.call(null,name__20440__auto__,null);
});

sablono.core.week_field20759.cljs$core$IFn$_invoke$arity$2 = (function (name__20440__auto__,value__20441__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20440__auto__,value__20441__auto__);
});

sablono.core.week_field20759.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20759);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20779 = (function sablono$core$check_box20779(){
var G__20781 = arguments.length;
switch (G__20781) {
case 1:
return sablono.core.check_box20779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20779.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box20779.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20779.call(null,name,null);
});

sablono.core.check_box20779.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20779.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box20779.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20779.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20779);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20783 = (function sablono$core$radio_button20783(){
var G__20785 = arguments.length;
switch (G__20785) {
case 1:
return sablono.core.radio_button20783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20783.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button20783.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20783.call(null,group,null);
});

sablono.core.radio_button20783.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20783.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button20783.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20783.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20783);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20787 = (function sablono$core$select_options20787(){
var G__20789 = arguments.length;
switch (G__20789) {
case 1:
return sablono.core.select_options20787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options20787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options20787.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options20787.call(null,coll,null);
});

sablono.core.select_options20787.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__16823__auto__ = (function sablono$core$iter__20790(s__20791){
return (new cljs.core.LazySeq(null,(function (){
var s__20791__$1 = s__20791;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20791__$1);
if(temp__4425__auto__){
var s__20791__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20791__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__20791__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__20793 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__20792 = (0);
while(true){
if((i__20792 < size__16822__auto__)){
var x = cljs.core._nth.call(null,c__16821__auto__,i__20792);
cljs.core.chunk_append.call(null,b__20793,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20796 = x;
var text = cljs.core.nth.call(null,vec__20796,(0),null);
var val = cljs.core.nth.call(null,vec__20796,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20796,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options20787.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__20799 = (i__20792 + (1));
i__20792 = G__20799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20793),sablono$core$iter__20790.call(null,cljs.core.chunk_rest.call(null,s__20791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20793),null);
}
} else {
var x = cljs.core.first.call(null,s__20791__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20797 = x;
var text = cljs.core.nth.call(null,vec__20797,(0),null);
var val = cljs.core.nth.call(null,vec__20797,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20797,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options20787.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__20790.call(null,cljs.core.rest.call(null,s__20791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,coll);
});

sablono.core.select_options20787.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20787);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20800 = (function sablono$core$drop_down20800(){
var G__20802 = arguments.length;
switch (G__20802) {
case 2:
return sablono.core.drop_down20800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20800.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down20800.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20800.call(null,name,options,null);
});

sablono.core.drop_down20800.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down20800.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20800);
/**
 * Creates a text area element.
 */
sablono.core.text_area20804 = (function sablono$core$text_area20804(){
var G__20806 = arguments.length;
switch (G__20806) {
case 1:
return sablono.core.text_area20804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area20804.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20804.call(null,name,null);
});

sablono.core.text_area20804.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area20804.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20804);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20808 = (function sablono$core$label20808(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20808);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20809 = (function sablono$core$submit_button20809(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20809);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20810 = (function sablono$core$reset_button20810(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20810);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to20811 = (function sablono$core$form_to20811(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to20811.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

sablono.core.form_to20811.cljs$core$IFn$_invoke$arity$variadic = (function (p__20814,body){
var vec__20815 = p__20814;
var method = cljs.core.nth.call(null,vec__20815,(0),null);
var action = cljs.core.nth.call(null,vec__20815,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to20811.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20811.cljs$lang$applyTo = (function (seq20812){
var G__20813 = cljs.core.first.call(null,seq20812);
var seq20812__$1 = cljs.core.next.call(null,seq20812);
return sablono.core.form_to20811.cljs$core$IFn$_invoke$arity$variadic(G__20813,seq20812__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20811);

//# sourceMappingURL=core.js.map?rel=1437792026880