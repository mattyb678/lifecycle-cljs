// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17109__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17109__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25539_25547 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25540_25548 = null;
var count__25541_25549 = (0);
var i__25542_25550 = (0);
while(true){
if((i__25542_25550 < count__25541_25549)){
var k_25551 = cljs.core._nth.call(null,chunk__25540_25548,i__25542_25550);
e.setAttribute(cljs.core.name.call(null,k_25551),cljs.core.get.call(null,attrs,k_25551));

var G__25552 = seq__25539_25547;
var G__25553 = chunk__25540_25548;
var G__25554 = count__25541_25549;
var G__25555 = (i__25542_25550 + (1));
seq__25539_25547 = G__25552;
chunk__25540_25548 = G__25553;
count__25541_25549 = G__25554;
i__25542_25550 = G__25555;
continue;
} else {
var temp__4425__auto___25556 = cljs.core.seq.call(null,seq__25539_25547);
if(temp__4425__auto___25556){
var seq__25539_25557__$1 = temp__4425__auto___25556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25539_25557__$1)){
var c__16854__auto___25558 = cljs.core.chunk_first.call(null,seq__25539_25557__$1);
var G__25559 = cljs.core.chunk_rest.call(null,seq__25539_25557__$1);
var G__25560 = c__16854__auto___25558;
var G__25561 = cljs.core.count.call(null,c__16854__auto___25558);
var G__25562 = (0);
seq__25539_25547 = G__25559;
chunk__25540_25548 = G__25560;
count__25541_25549 = G__25561;
i__25542_25550 = G__25562;
continue;
} else {
var k_25563 = cljs.core.first.call(null,seq__25539_25557__$1);
e.setAttribute(cljs.core.name.call(null,k_25563),cljs.core.get.call(null,attrs,k_25563));

var G__25564 = cljs.core.next.call(null,seq__25539_25557__$1);
var G__25565 = null;
var G__25566 = (0);
var G__25567 = (0);
seq__25539_25547 = G__25564;
chunk__25540_25548 = G__25565;
count__25541_25549 = G__25566;
i__25542_25550 = G__25567;
continue;
}
} else {
}
}
break;
}

var seq__25543_25568 = cljs.core.seq.call(null,children);
var chunk__25544_25569 = null;
var count__25545_25570 = (0);
var i__25546_25571 = (0);
while(true){
if((i__25546_25571 < count__25545_25570)){
var ch_25572 = cljs.core._nth.call(null,chunk__25544_25569,i__25546_25571);
e.appendChild(ch_25572);

var G__25573 = seq__25543_25568;
var G__25574 = chunk__25544_25569;
var G__25575 = count__25545_25570;
var G__25576 = (i__25546_25571 + (1));
seq__25543_25568 = G__25573;
chunk__25544_25569 = G__25574;
count__25545_25570 = G__25575;
i__25546_25571 = G__25576;
continue;
} else {
var temp__4425__auto___25577 = cljs.core.seq.call(null,seq__25543_25568);
if(temp__4425__auto___25577){
var seq__25543_25578__$1 = temp__4425__auto___25577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25543_25578__$1)){
var c__16854__auto___25579 = cljs.core.chunk_first.call(null,seq__25543_25578__$1);
var G__25580 = cljs.core.chunk_rest.call(null,seq__25543_25578__$1);
var G__25581 = c__16854__auto___25579;
var G__25582 = cljs.core.count.call(null,c__16854__auto___25579);
var G__25583 = (0);
seq__25543_25568 = G__25580;
chunk__25544_25569 = G__25581;
count__25545_25570 = G__25582;
i__25546_25571 = G__25583;
continue;
} else {
var ch_25584 = cljs.core.first.call(null,seq__25543_25578__$1);
e.appendChild(ch_25584);

var G__25585 = cljs.core.next.call(null,seq__25543_25578__$1);
var G__25586 = null;
var G__25587 = (0);
var G__25588 = (0);
seq__25543_25568 = G__25585;
chunk__25544_25569 = G__25586;
count__25545_25570 = G__25587;
i__25546_25571 = G__25588;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25536){
var G__25537 = cljs.core.first.call(null,seq25536);
var seq25536__$1 = cljs.core.next.call(null,seq25536);
var G__25538 = cljs.core.first.call(null,seq25536__$1);
var seq25536__$2 = cljs.core.next.call(null,seq25536__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25537,G__25538,seq25536__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__,hierarchy__16968__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__,hierarchy__16968__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25589 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25589.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25589.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_25589.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25589);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25590,st_map){
var map__25594 = p__25590;
var map__25594__$1 = ((cljs.core.seq_QMARK_.call(null,map__25594))?cljs.core.apply.call(null,cljs.core.hash_map,map__25594):map__25594);
var container_el = cljs.core.get.call(null,map__25594__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25594,map__25594__$1,container_el){
return (function (p__25595){
var vec__25596 = p__25595;
var k = cljs.core.nth.call(null,vec__25596,(0),null);
var v = cljs.core.nth.call(null,vec__25596,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25594,map__25594__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25597,dom_str){
var map__25599 = p__25597;
var map__25599__$1 = ((cljs.core.seq_QMARK_.call(null,map__25599))?cljs.core.apply.call(null,cljs.core.hash_map,map__25599):map__25599);
var c = map__25599__$1;
var content_area_el = cljs.core.get.call(null,map__25599__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25600){
var map__25602 = p__25600;
var map__25602__$1 = ((cljs.core.seq_QMARK_.call(null,map__25602))?cljs.core.apply.call(null,cljs.core.hash_map,map__25602):map__25602);
var content_area_el = cljs.core.get.call(null,map__25602__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_25644){
var state_val_25645 = (state_25644[(1)]);
if((state_val_25645 === (1))){
var inst_25629 = (state_25644[(7)]);
var inst_25629__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25630 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25631 = ["10px","10px","100%","68px","1.0"];
var inst_25632 = cljs.core.PersistentHashMap.fromArrays(inst_25630,inst_25631);
var inst_25633 = cljs.core.merge.call(null,inst_25632,style);
var inst_25634 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25629__$1,inst_25633);
var inst_25635 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25629__$1,msg);
var inst_25636 = cljs.core.async.timeout.call(null,(300));
var state_25644__$1 = (function (){var statearr_25646 = state_25644;
(statearr_25646[(8)] = inst_25634);

(statearr_25646[(7)] = inst_25629__$1);

(statearr_25646[(9)] = inst_25635);

return statearr_25646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25644__$1,(2),inst_25636);
} else {
if((state_val_25645 === (2))){
var inst_25629 = (state_25644[(7)]);
var inst_25638 = (state_25644[(2)]);
var inst_25639 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25640 = ["auto"];
var inst_25641 = cljs.core.PersistentHashMap.fromArrays(inst_25639,inst_25640);
var inst_25642 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25629,inst_25641);
var state_25644__$1 = (function (){var statearr_25647 = state_25644;
(statearr_25647[(10)] = inst_25638);

return statearr_25647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25644__$1,inst_25642);
} else {
return null;
}
}
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto____0 = (function (){
var statearr_25651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25651[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto__);

(statearr_25651[(1)] = (1));

return statearr_25651;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto____1 = (function (state_25644){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25652){if((e25652 instanceof Object)){
var ex__19021__auto__ = e25652;
var statearr_25653_25655 = state_25644;
(statearr_25653_25655[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25656 = state_25644;
state_25644 = G__25656;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto__ = function(state_25644){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto____1.call(this,state_25644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_25654 = f__19080__auto__.call(null);
(statearr_25654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_25654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25658 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25658,(0),null);
var ln = cljs.core.nth.call(null,vec__25658,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25661 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25661,(0),null);
var file_line = cljs.core.nth.call(null,vec__25661,(1),null);
var file_column = cljs.core.nth.call(null,vec__25661,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25661,file_name,file_line,file_column){
return (function (p1__25659_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25659_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25661,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16069__auto__ = file_line;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
var and__16057__auto__ = cause;
if(cljs.core.truth_(and__16057__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16057__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25663 = figwheel.client.heads_up.ensure_container.call(null);
var map__25663__$1 = ((cljs.core.seq_QMARK_.call(null,map__25663))?cljs.core.apply.call(null,cljs.core.hash_map,map__25663):map__25663);
var content_area_el = cljs.core.get.call(null,map__25663__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_25710){
var state_val_25711 = (state_25710[(1)]);
if((state_val_25711 === (1))){
var inst_25693 = (state_25710[(7)]);
var inst_25693__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25694 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25695 = ["0.0"];
var inst_25696 = cljs.core.PersistentHashMap.fromArrays(inst_25694,inst_25695);
var inst_25697 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25693__$1,inst_25696);
var inst_25698 = cljs.core.async.timeout.call(null,(300));
var state_25710__$1 = (function (){var statearr_25712 = state_25710;
(statearr_25712[(7)] = inst_25693__$1);

(statearr_25712[(8)] = inst_25697);

return statearr_25712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(2),inst_25698);
} else {
if((state_val_25711 === (2))){
var inst_25693 = (state_25710[(7)]);
var inst_25700 = (state_25710[(2)]);
var inst_25701 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25702 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25703 = cljs.core.PersistentHashMap.fromArrays(inst_25701,inst_25702);
var inst_25704 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25693,inst_25703);
var inst_25705 = cljs.core.async.timeout.call(null,(200));
var state_25710__$1 = (function (){var statearr_25713 = state_25710;
(statearr_25713[(9)] = inst_25704);

(statearr_25713[(10)] = inst_25700);

return statearr_25713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(3),inst_25705);
} else {
if((state_val_25711 === (3))){
var inst_25693 = (state_25710[(7)]);
var inst_25707 = (state_25710[(2)]);
var inst_25708 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25693,"");
var state_25710__$1 = (function (){var statearr_25714 = state_25710;
(statearr_25714[(11)] = inst_25707);

return statearr_25714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25710__$1,inst_25708);
} else {
return null;
}
}
}
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19018__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19018__auto____0 = (function (){
var statearr_25718 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25718[(0)] = figwheel$client$heads_up$clear_$_state_machine__19018__auto__);

(statearr_25718[(1)] = (1));

return statearr_25718;
});
var figwheel$client$heads_up$clear_$_state_machine__19018__auto____1 = (function (state_25710){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25719){if((e25719 instanceof Object)){
var ex__19021__auto__ = e25719;
var statearr_25720_25722 = state_25710;
(statearr_25720_25722[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25723 = state_25710;
state_25710 = G__25723;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19018__auto__ = function(state_25710){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19018__auto____1.call(this,state_25710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19018__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19018__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_25721 = f__19080__auto__.call(null);
(statearr_25721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_25721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_25755){
var state_val_25756 = (state_25755[(1)]);
if((state_val_25756 === (1))){
var inst_25745 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25755__$1 = state_25755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25755__$1,(2),inst_25745);
} else {
if((state_val_25756 === (2))){
var inst_25747 = (state_25755[(2)]);
var inst_25748 = cljs.core.async.timeout.call(null,(400));
var state_25755__$1 = (function (){var statearr_25757 = state_25755;
(statearr_25757[(7)] = inst_25747);

return statearr_25757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25755__$1,(3),inst_25748);
} else {
if((state_val_25756 === (3))){
var inst_25750 = (state_25755[(2)]);
var inst_25751 = figwheel.client.heads_up.clear.call(null);
var state_25755__$1 = (function (){var statearr_25758 = state_25755;
(statearr_25758[(8)] = inst_25750);

return statearr_25758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25755__$1,(4),inst_25751);
} else {
if((state_val_25756 === (4))){
var inst_25753 = (state_25755[(2)]);
var state_25755__$1 = state_25755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25755__$1,inst_25753);
} else {
return null;
}
}
}
}
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto____0 = (function (){
var statearr_25762 = [null,null,null,null,null,null,null,null,null];
(statearr_25762[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto__);

(statearr_25762[(1)] = (1));

return statearr_25762;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto____1 = (function (state_25755){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_25755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e25763){if((e25763 instanceof Object)){
var ex__19021__auto__ = e25763;
var statearr_25764_25766 = state_25755;
(statearr_25764_25766[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25767 = state_25755;
state_25755 = G__25767;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto__ = function(state_25755){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto____1.call(this,state_25755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_25765 = f__19080__auto__.call(null);
(statearr_25765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_25765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1437790539542