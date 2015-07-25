// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26543 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26543 = (function (fn_handler,f,meta26544){
this.fn_handler = fn_handler;
this.f = f;
this.meta26544 = meta26544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26545,meta26544__$1){
var self__ = this;
var _26545__$1 = this;
return (new cljs.core.async.t26543(self__.fn_handler,self__.f,meta26544__$1));
});

cljs.core.async.t26543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26545){
var self__ = this;
var _26545__$1 = this;
return self__.meta26544;
});

cljs.core.async.t26543.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26544","meta26544",-457536594,null)], null);
});

cljs.core.async.t26543.cljs$lang$type = true;

cljs.core.async.t26543.cljs$lang$ctorStr = "cljs.core.async/t26543";

cljs.core.async.t26543.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26543");
});

cljs.core.async.__GT_t26543 = (function cljs$core$async$fn_handler_$___GT_t26543(fn_handler__$1,f__$1,meta26544){
return (new cljs.core.async.t26543(fn_handler__$1,f__$1,meta26544));
});

}

return (new cljs.core.async.t26543(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26547 = buff;
if(G__26547){
var bit__16743__auto__ = null;
if(cljs.core.truth_((function (){var or__16069__auto__ = bit__16743__auto__;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return G__26547.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26547.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26547);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26547);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26549 = arguments.length;
switch (G__26549) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26552 = arguments.length;
switch (G__26552) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26554 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26554);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26554,ret){
return (function (){
return fn1.call(null,val_26554);
});})(val_26554,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26556 = arguments.length;
switch (G__26556) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16954__auto___26558 = n;
var x_26559 = (0);
while(true){
if((x_26559 < n__16954__auto___26558)){
(a[x_26559] = (0));

var G__26560 = (x_26559 + (1));
x_26559 = G__26560;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26561 = (i + (1));
i = G__26561;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26565 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26565 = (function (alt_flag,flag,meta26566){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26566 = meta26566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26567,meta26566__$1){
var self__ = this;
var _26567__$1 = this;
return (new cljs.core.async.t26565(self__.alt_flag,self__.flag,meta26566__$1));
});})(flag))
;

cljs.core.async.t26565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26567){
var self__ = this;
var _26567__$1 = this;
return self__.meta26566;
});})(flag))
;

cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26565.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26566","meta26566",1238251353,null)], null);
});})(flag))
;

cljs.core.async.t26565.cljs$lang$type = true;

cljs.core.async.t26565.cljs$lang$ctorStr = "cljs.core.async/t26565";

cljs.core.async.t26565.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26565");
});})(flag))
;

cljs.core.async.__GT_t26565 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26565(alt_flag__$1,flag__$1,meta26566){
return (new cljs.core.async.t26565(alt_flag__$1,flag__$1,meta26566));
});})(flag))
;

}

return (new cljs.core.async.t26565(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26571 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26571 = (function (alt_handler,flag,cb,meta26572){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26572 = meta26572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26573,meta26572__$1){
var self__ = this;
var _26573__$1 = this;
return (new cljs.core.async.t26571(self__.alt_handler,self__.flag,self__.cb,meta26572__$1));
});

cljs.core.async.t26571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26573){
var self__ = this;
var _26573__$1 = this;
return self__.meta26572;
});

cljs.core.async.t26571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26572","meta26572",1540984587,null)], null);
});

cljs.core.async.t26571.cljs$lang$type = true;

cljs.core.async.t26571.cljs$lang$ctorStr = "cljs.core.async/t26571";

cljs.core.async.t26571.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t26571");
});

cljs.core.async.__GT_t26571 = (function cljs$core$async$alt_handler_$___GT_t26571(alt_handler__$1,flag__$1,cb__$1,meta26572){
return (new cljs.core.async.t26571(alt_handler__$1,flag__$1,cb__$1,meta26572));
});

}

return (new cljs.core.async.t26571(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26574_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26574_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26575_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16069__auto__ = wport;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26576 = (i + (1));
i = G__26576;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16069__auto__ = ret;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16057__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16057__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26579){
var map__26580 = p__26579;
var map__26580__$1 = ((cljs.core.seq_QMARK_.call(null,map__26580))?cljs.core.apply.call(null,cljs.core.hash_map,map__26580):map__26580);
var opts = map__26580__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26577){
var G__26578 = cljs.core.first.call(null,seq26577);
var seq26577__$1 = cljs.core.next.call(null,seq26577);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26578,seq26577__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26582 = arguments.length;
switch (G__26582) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19079__auto___26631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___26631){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___26631){
return (function (state_26606){
var state_val_26607 = (state_26606[(1)]);
if((state_val_26607 === (7))){
var inst_26602 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26608_26632 = state_26606__$1;
(statearr_26608_26632[(2)] = inst_26602);

(statearr_26608_26632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (1))){
var state_26606__$1 = state_26606;
var statearr_26609_26633 = state_26606__$1;
(statearr_26609_26633[(2)] = null);

(statearr_26609_26633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (4))){
var inst_26585 = (state_26606[(7)]);
var inst_26585__$1 = (state_26606[(2)]);
var inst_26586 = (inst_26585__$1 == null);
var state_26606__$1 = (function (){var statearr_26610 = state_26606;
(statearr_26610[(7)] = inst_26585__$1);

return statearr_26610;
})();
if(cljs.core.truth_(inst_26586)){
var statearr_26611_26634 = state_26606__$1;
(statearr_26611_26634[(1)] = (5));

} else {
var statearr_26612_26635 = state_26606__$1;
(statearr_26612_26635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (13))){
var state_26606__$1 = state_26606;
var statearr_26613_26636 = state_26606__$1;
(statearr_26613_26636[(2)] = null);

(statearr_26613_26636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (6))){
var inst_26585 = (state_26606[(7)]);
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26606__$1,(11),to,inst_26585);
} else {
if((state_val_26607 === (3))){
var inst_26604 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26606__$1,inst_26604);
} else {
if((state_val_26607 === (12))){
var state_26606__$1 = state_26606;
var statearr_26614_26637 = state_26606__$1;
(statearr_26614_26637[(2)] = null);

(statearr_26614_26637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (2))){
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26606__$1,(4),from);
} else {
if((state_val_26607 === (11))){
var inst_26595 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
if(cljs.core.truth_(inst_26595)){
var statearr_26615_26638 = state_26606__$1;
(statearr_26615_26638[(1)] = (12));

} else {
var statearr_26616_26639 = state_26606__$1;
(statearr_26616_26639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (9))){
var state_26606__$1 = state_26606;
var statearr_26617_26640 = state_26606__$1;
(statearr_26617_26640[(2)] = null);

(statearr_26617_26640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (5))){
var state_26606__$1 = state_26606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26618_26641 = state_26606__$1;
(statearr_26618_26641[(1)] = (8));

} else {
var statearr_26619_26642 = state_26606__$1;
(statearr_26619_26642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (14))){
var inst_26600 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26620_26643 = state_26606__$1;
(statearr_26620_26643[(2)] = inst_26600);

(statearr_26620_26643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (10))){
var inst_26592 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26621_26644 = state_26606__$1;
(statearr_26621_26644[(2)] = inst_26592);

(statearr_26621_26644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (8))){
var inst_26589 = cljs.core.async.close_BANG_.call(null,to);
var state_26606__$1 = state_26606;
var statearr_26622_26645 = state_26606__$1;
(statearr_26622_26645[(2)] = inst_26589);

(statearr_26622_26645[(1)] = (10));


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
});})(c__19079__auto___26631))
;
return ((function (switch__19017__auto__,c__19079__auto___26631){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_26626 = [null,null,null,null,null,null,null,null];
(statearr_26626[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_26626[(1)] = (1));

return statearr_26626;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_26606){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26627){if((e26627 instanceof Object)){
var ex__19021__auto__ = e26627;
var statearr_26628_26646 = state_26606;
(statearr_26628_26646[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26647 = state_26606;
state_26606 = G__26647;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_26606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_26606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___26631))
})();
var state__19081__auto__ = (function (){var statearr_26629 = f__19080__auto__.call(null);
(statearr_26629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___26631);

return statearr_26629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___26631))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26831){
var vec__26832 = p__26831;
var v = cljs.core.nth.call(null,vec__26832,(0),null);
var p = cljs.core.nth.call(null,vec__26832,(1),null);
var job = vec__26832;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19079__auto___27014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___27014,res,vec__26832,v,p,job,jobs,results){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___27014,res,vec__26832,v,p,job,jobs,results){
return (function (state_26837){
var state_val_26838 = (state_26837[(1)]);
if((state_val_26838 === (1))){
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26837__$1,(2),res,v);
} else {
if((state_val_26838 === (2))){
var inst_26834 = (state_26837[(2)]);
var inst_26835 = cljs.core.async.close_BANG_.call(null,res);
var state_26837__$1 = (function (){var statearr_26839 = state_26837;
(statearr_26839[(7)] = inst_26834);

return statearr_26839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26837__$1,inst_26835);
} else {
return null;
}
}
});})(c__19079__auto___27014,res,vec__26832,v,p,job,jobs,results))
;
return ((function (switch__19017__auto__,c__19079__auto___27014,res,vec__26832,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_26843 = [null,null,null,null,null,null,null,null];
(statearr_26843[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_26843[(1)] = (1));

return statearr_26843;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_26837){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26844){if((e26844 instanceof Object)){
var ex__19021__auto__ = e26844;
var statearr_26845_27015 = state_26837;
(statearr_26845_27015[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27016 = state_26837;
state_26837 = G__27016;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_26837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_26837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___27014,res,vec__26832,v,p,job,jobs,results))
})();
var state__19081__auto__ = (function (){var statearr_26846 = f__19080__auto__.call(null);
(statearr_26846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___27014);

return statearr_26846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___27014,res,vec__26832,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26847){
var vec__26848 = p__26847;
var v = cljs.core.nth.call(null,vec__26848,(0),null);
var p = cljs.core.nth.call(null,vec__26848,(1),null);
var job = vec__26848;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16954__auto___27017 = n;
var __27018 = (0);
while(true){
if((__27018 < n__16954__auto___27017)){
var G__26849_27019 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26849_27019) {
case "compute":
var c__19079__auto___27021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27018,c__19079__auto___27021,G__26849_27019,n__16954__auto___27017,jobs,results,process,async){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (__27018,c__19079__auto___27021,G__26849_27019,n__16954__auto___27017,jobs,results,process,async){
return (function (state_26862){
var state_val_26863 = (state_26862[(1)]);
if((state_val_26863 === (1))){
var state_26862__$1 = state_26862;
var statearr_26864_27022 = state_26862__$1;
(statearr_26864_27022[(2)] = null);

(statearr_26864_27022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (2))){
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26862__$1,(4),jobs);
} else {
if((state_val_26863 === (3))){
var inst_26860 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26862__$1,inst_26860);
} else {
if((state_val_26863 === (4))){
var inst_26852 = (state_26862[(2)]);
var inst_26853 = process.call(null,inst_26852);
var state_26862__$1 = state_26862;
if(cljs.core.truth_(inst_26853)){
var statearr_26865_27023 = state_26862__$1;
(statearr_26865_27023[(1)] = (5));

} else {
var statearr_26866_27024 = state_26862__$1;
(statearr_26866_27024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (5))){
var state_26862__$1 = state_26862;
var statearr_26867_27025 = state_26862__$1;
(statearr_26867_27025[(2)] = null);

(statearr_26867_27025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (6))){
var state_26862__$1 = state_26862;
var statearr_26868_27026 = state_26862__$1;
(statearr_26868_27026[(2)] = null);

(statearr_26868_27026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (7))){
var inst_26858 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26869_27027 = state_26862__$1;
(statearr_26869_27027[(2)] = inst_26858);

(statearr_26869_27027[(1)] = (3));


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
});})(__27018,c__19079__auto___27021,G__26849_27019,n__16954__auto___27017,jobs,results,process,async))
;
return ((function (__27018,switch__19017__auto__,c__19079__auto___27021,G__26849_27019,n__16954__auto___27017,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_26873 = [null,null,null,null,null,null,null];
(statearr_26873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_26873[(1)] = (1));

return statearr_26873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_26862){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26874){if((e26874 instanceof Object)){
var ex__19021__auto__ = e26874;
var statearr_26875_27028 = state_26862;
(statearr_26875_27028[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27029 = state_26862;
state_26862 = G__27029;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_26862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_26862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(__27018,switch__19017__auto__,c__19079__auto___27021,G__26849_27019,n__16954__auto___27017,jobs,results,process,async))
})();
var state__19081__auto__ = (function (){var statearr_26876 = f__19080__auto__.call(null);
(statearr_26876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___27021);

return statearr_26876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(__27018,c__19079__auto___27021,G__26849_27019,n__16954__auto___27017,jobs,results,process,async))
);


break;
case "async":
var c__19079__auto___27030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27018,c__19079__auto___27030,G__26849_27019,n__16954__auto___27017,jobs,results,process,async){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (__27018,c__19079__auto___27030,G__26849_27019,n__16954__auto___27017,jobs,results,process,async){
return (function (state_26889){
var state_val_26890 = (state_26889[(1)]);
if((state_val_26890 === (1))){
var state_26889__$1 = state_26889;
var statearr_26891_27031 = state_26889__$1;
(statearr_26891_27031[(2)] = null);

(statearr_26891_27031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26890 === (2))){
var state_26889__$1 = state_26889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26889__$1,(4),jobs);
} else {
if((state_val_26890 === (3))){
var inst_26887 = (state_26889[(2)]);
var state_26889__$1 = state_26889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26889__$1,inst_26887);
} else {
if((state_val_26890 === (4))){
var inst_26879 = (state_26889[(2)]);
var inst_26880 = async.call(null,inst_26879);
var state_26889__$1 = state_26889;
if(cljs.core.truth_(inst_26880)){
var statearr_26892_27032 = state_26889__$1;
(statearr_26892_27032[(1)] = (5));

} else {
var statearr_26893_27033 = state_26889__$1;
(statearr_26893_27033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26890 === (5))){
var state_26889__$1 = state_26889;
var statearr_26894_27034 = state_26889__$1;
(statearr_26894_27034[(2)] = null);

(statearr_26894_27034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26890 === (6))){
var state_26889__$1 = state_26889;
var statearr_26895_27035 = state_26889__$1;
(statearr_26895_27035[(2)] = null);

(statearr_26895_27035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26890 === (7))){
var inst_26885 = (state_26889[(2)]);
var state_26889__$1 = state_26889;
var statearr_26896_27036 = state_26889__$1;
(statearr_26896_27036[(2)] = inst_26885);

(statearr_26896_27036[(1)] = (3));


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
});})(__27018,c__19079__auto___27030,G__26849_27019,n__16954__auto___27017,jobs,results,process,async))
;
return ((function (__27018,switch__19017__auto__,c__19079__auto___27030,G__26849_27019,n__16954__auto___27017,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_26900 = [null,null,null,null,null,null,null];
(statearr_26900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_26900[(1)] = (1));

return statearr_26900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_26889){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26901){if((e26901 instanceof Object)){
var ex__19021__auto__ = e26901;
var statearr_26902_27037 = state_26889;
(statearr_26902_27037[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27038 = state_26889;
state_26889 = G__27038;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_26889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_26889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(__27018,switch__19017__auto__,c__19079__auto___27030,G__26849_27019,n__16954__auto___27017,jobs,results,process,async))
})();
var state__19081__auto__ = (function (){var statearr_26903 = f__19080__auto__.call(null);
(statearr_26903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___27030);

return statearr_26903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(__27018,c__19079__auto___27030,G__26849_27019,n__16954__auto___27017,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27039 = (__27018 + (1));
__27018 = G__27039;
continue;
} else {
}
break;
}

var c__19079__auto___27040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___27040,jobs,results,process,async){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___27040,jobs,results,process,async){
return (function (state_26925){
var state_val_26926 = (state_26925[(1)]);
if((state_val_26926 === (1))){
var state_26925__$1 = state_26925;
var statearr_26927_27041 = state_26925__$1;
(statearr_26927_27041[(2)] = null);

(statearr_26927_27041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (2))){
var state_26925__$1 = state_26925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26925__$1,(4),from);
} else {
if((state_val_26926 === (3))){
var inst_26923 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26925__$1,inst_26923);
} else {
if((state_val_26926 === (4))){
var inst_26906 = (state_26925[(7)]);
var inst_26906__$1 = (state_26925[(2)]);
var inst_26907 = (inst_26906__$1 == null);
var state_26925__$1 = (function (){var statearr_26928 = state_26925;
(statearr_26928[(7)] = inst_26906__$1);

return statearr_26928;
})();
if(cljs.core.truth_(inst_26907)){
var statearr_26929_27042 = state_26925__$1;
(statearr_26929_27042[(1)] = (5));

} else {
var statearr_26930_27043 = state_26925__$1;
(statearr_26930_27043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (5))){
var inst_26909 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26925__$1 = state_26925;
var statearr_26931_27044 = state_26925__$1;
(statearr_26931_27044[(2)] = inst_26909);

(statearr_26931_27044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (6))){
var inst_26911 = (state_26925[(8)]);
var inst_26906 = (state_26925[(7)]);
var inst_26911__$1 = cljs.core.async.chan.call(null,(1));
var inst_26912 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26913 = [inst_26906,inst_26911__$1];
var inst_26914 = (new cljs.core.PersistentVector(null,2,(5),inst_26912,inst_26913,null));
var state_26925__$1 = (function (){var statearr_26932 = state_26925;
(statearr_26932[(8)] = inst_26911__$1);

return statearr_26932;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26925__$1,(8),jobs,inst_26914);
} else {
if((state_val_26926 === (7))){
var inst_26921 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26933_27045 = state_26925__$1;
(statearr_26933_27045[(2)] = inst_26921);

(statearr_26933_27045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (8))){
var inst_26911 = (state_26925[(8)]);
var inst_26916 = (state_26925[(2)]);
var state_26925__$1 = (function (){var statearr_26934 = state_26925;
(statearr_26934[(9)] = inst_26916);

return statearr_26934;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26925__$1,(9),results,inst_26911);
} else {
if((state_val_26926 === (9))){
var inst_26918 = (state_26925[(2)]);
var state_26925__$1 = (function (){var statearr_26935 = state_26925;
(statearr_26935[(10)] = inst_26918);

return statearr_26935;
})();
var statearr_26936_27046 = state_26925__$1;
(statearr_26936_27046[(2)] = null);

(statearr_26936_27046[(1)] = (2));


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
});})(c__19079__auto___27040,jobs,results,process,async))
;
return ((function (switch__19017__auto__,c__19079__auto___27040,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_26940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_26940[(1)] = (1));

return statearr_26940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_26925){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e26941){if((e26941 instanceof Object)){
var ex__19021__auto__ = e26941;
var statearr_26942_27047 = state_26925;
(statearr_26942_27047[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27048 = state_26925;
state_26925 = G__27048;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_26925){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_26925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___27040,jobs,results,process,async))
})();
var state__19081__auto__ = (function (){var statearr_26943 = f__19080__auto__.call(null);
(statearr_26943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___27040);

return statearr_26943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___27040,jobs,results,process,async))
);


var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__,jobs,results,process,async){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__,jobs,results,process,async){
return (function (state_26981){
var state_val_26982 = (state_26981[(1)]);
if((state_val_26982 === (7))){
var inst_26977 = (state_26981[(2)]);
var state_26981__$1 = state_26981;
var statearr_26983_27049 = state_26981__$1;
(statearr_26983_27049[(2)] = inst_26977);

(statearr_26983_27049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (20))){
var state_26981__$1 = state_26981;
var statearr_26984_27050 = state_26981__$1;
(statearr_26984_27050[(2)] = null);

(statearr_26984_27050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (1))){
var state_26981__$1 = state_26981;
var statearr_26985_27051 = state_26981__$1;
(statearr_26985_27051[(2)] = null);

(statearr_26985_27051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (4))){
var inst_26946 = (state_26981[(7)]);
var inst_26946__$1 = (state_26981[(2)]);
var inst_26947 = (inst_26946__$1 == null);
var state_26981__$1 = (function (){var statearr_26986 = state_26981;
(statearr_26986[(7)] = inst_26946__$1);

return statearr_26986;
})();
if(cljs.core.truth_(inst_26947)){
var statearr_26987_27052 = state_26981__$1;
(statearr_26987_27052[(1)] = (5));

} else {
var statearr_26988_27053 = state_26981__$1;
(statearr_26988_27053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (15))){
var inst_26959 = (state_26981[(8)]);
var state_26981__$1 = state_26981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26981__$1,(18),to,inst_26959);
} else {
if((state_val_26982 === (21))){
var inst_26972 = (state_26981[(2)]);
var state_26981__$1 = state_26981;
var statearr_26989_27054 = state_26981__$1;
(statearr_26989_27054[(2)] = inst_26972);

(statearr_26989_27054[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (13))){
var inst_26974 = (state_26981[(2)]);
var state_26981__$1 = (function (){var statearr_26990 = state_26981;
(statearr_26990[(9)] = inst_26974);

return statearr_26990;
})();
var statearr_26991_27055 = state_26981__$1;
(statearr_26991_27055[(2)] = null);

(statearr_26991_27055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (6))){
var inst_26946 = (state_26981[(7)]);
var state_26981__$1 = state_26981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26981__$1,(11),inst_26946);
} else {
if((state_val_26982 === (17))){
var inst_26967 = (state_26981[(2)]);
var state_26981__$1 = state_26981;
if(cljs.core.truth_(inst_26967)){
var statearr_26992_27056 = state_26981__$1;
(statearr_26992_27056[(1)] = (19));

} else {
var statearr_26993_27057 = state_26981__$1;
(statearr_26993_27057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (3))){
var inst_26979 = (state_26981[(2)]);
var state_26981__$1 = state_26981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26981__$1,inst_26979);
} else {
if((state_val_26982 === (12))){
var inst_26956 = (state_26981[(10)]);
var state_26981__$1 = state_26981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26981__$1,(14),inst_26956);
} else {
if((state_val_26982 === (2))){
var state_26981__$1 = state_26981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26981__$1,(4),results);
} else {
if((state_val_26982 === (19))){
var state_26981__$1 = state_26981;
var statearr_26994_27058 = state_26981__$1;
(statearr_26994_27058[(2)] = null);

(statearr_26994_27058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (11))){
var inst_26956 = (state_26981[(2)]);
var state_26981__$1 = (function (){var statearr_26995 = state_26981;
(statearr_26995[(10)] = inst_26956);

return statearr_26995;
})();
var statearr_26996_27059 = state_26981__$1;
(statearr_26996_27059[(2)] = null);

(statearr_26996_27059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (9))){
var state_26981__$1 = state_26981;
var statearr_26997_27060 = state_26981__$1;
(statearr_26997_27060[(2)] = null);

(statearr_26997_27060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (5))){
var state_26981__$1 = state_26981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26998_27061 = state_26981__$1;
(statearr_26998_27061[(1)] = (8));

} else {
var statearr_26999_27062 = state_26981__$1;
(statearr_26999_27062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (14))){
var inst_26959 = (state_26981[(8)]);
var inst_26961 = (state_26981[(11)]);
var inst_26959__$1 = (state_26981[(2)]);
var inst_26960 = (inst_26959__$1 == null);
var inst_26961__$1 = cljs.core.not.call(null,inst_26960);
var state_26981__$1 = (function (){var statearr_27000 = state_26981;
(statearr_27000[(8)] = inst_26959__$1);

(statearr_27000[(11)] = inst_26961__$1);

return statearr_27000;
})();
if(inst_26961__$1){
var statearr_27001_27063 = state_26981__$1;
(statearr_27001_27063[(1)] = (15));

} else {
var statearr_27002_27064 = state_26981__$1;
(statearr_27002_27064[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (16))){
var inst_26961 = (state_26981[(11)]);
var state_26981__$1 = state_26981;
var statearr_27003_27065 = state_26981__$1;
(statearr_27003_27065[(2)] = inst_26961);

(statearr_27003_27065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (10))){
var inst_26953 = (state_26981[(2)]);
var state_26981__$1 = state_26981;
var statearr_27004_27066 = state_26981__$1;
(statearr_27004_27066[(2)] = inst_26953);

(statearr_27004_27066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (18))){
var inst_26964 = (state_26981[(2)]);
var state_26981__$1 = state_26981;
var statearr_27005_27067 = state_26981__$1;
(statearr_27005_27067[(2)] = inst_26964);

(statearr_27005_27067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (8))){
var inst_26950 = cljs.core.async.close_BANG_.call(null,to);
var state_26981__$1 = state_26981;
var statearr_27006_27068 = state_26981__$1;
(statearr_27006_27068[(2)] = inst_26950);

(statearr_27006_27068[(1)] = (10));


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
});})(c__19079__auto__,jobs,results,process,async))
;
return ((function (switch__19017__auto__,c__19079__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_27010 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__);

(statearr_27010[(1)] = (1));

return statearr_27010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1 = (function (state_26981){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_26981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e27011){if((e27011 instanceof Object)){
var ex__19021__auto__ = e27011;
var statearr_27012_27069 = state_26981;
(statearr_27012_27069[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27070 = state_26981;
state_26981 = G__27070;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__ = function(state_26981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1.call(this,state_26981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__,jobs,results,process,async))
})();
var state__19081__auto__ = (function (){var statearr_27013 = f__19080__auto__.call(null);
(statearr_27013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_27013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__,jobs,results,process,async))
);

return c__19079__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27072 = arguments.length;
switch (G__27072) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27075 = arguments.length;
switch (G__27075) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27078 = arguments.length;
switch (G__27078) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19079__auto___27130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___27130,tc,fc){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___27130,tc,fc){
return (function (state_27104){
var state_val_27105 = (state_27104[(1)]);
if((state_val_27105 === (7))){
var inst_27100 = (state_27104[(2)]);
var state_27104__$1 = state_27104;
var statearr_27106_27131 = state_27104__$1;
(statearr_27106_27131[(2)] = inst_27100);

(statearr_27106_27131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (1))){
var state_27104__$1 = state_27104;
var statearr_27107_27132 = state_27104__$1;
(statearr_27107_27132[(2)] = null);

(statearr_27107_27132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (4))){
var inst_27081 = (state_27104[(7)]);
var inst_27081__$1 = (state_27104[(2)]);
var inst_27082 = (inst_27081__$1 == null);
var state_27104__$1 = (function (){var statearr_27108 = state_27104;
(statearr_27108[(7)] = inst_27081__$1);

return statearr_27108;
})();
if(cljs.core.truth_(inst_27082)){
var statearr_27109_27133 = state_27104__$1;
(statearr_27109_27133[(1)] = (5));

} else {
var statearr_27110_27134 = state_27104__$1;
(statearr_27110_27134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (13))){
var state_27104__$1 = state_27104;
var statearr_27111_27135 = state_27104__$1;
(statearr_27111_27135[(2)] = null);

(statearr_27111_27135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (6))){
var inst_27081 = (state_27104[(7)]);
var inst_27087 = p.call(null,inst_27081);
var state_27104__$1 = state_27104;
if(cljs.core.truth_(inst_27087)){
var statearr_27112_27136 = state_27104__$1;
(statearr_27112_27136[(1)] = (9));

} else {
var statearr_27113_27137 = state_27104__$1;
(statearr_27113_27137[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (3))){
var inst_27102 = (state_27104[(2)]);
var state_27104__$1 = state_27104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27104__$1,inst_27102);
} else {
if((state_val_27105 === (12))){
var state_27104__$1 = state_27104;
var statearr_27114_27138 = state_27104__$1;
(statearr_27114_27138[(2)] = null);

(statearr_27114_27138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (2))){
var state_27104__$1 = state_27104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27104__$1,(4),ch);
} else {
if((state_val_27105 === (11))){
var inst_27081 = (state_27104[(7)]);
var inst_27091 = (state_27104[(2)]);
var state_27104__$1 = state_27104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27104__$1,(8),inst_27091,inst_27081);
} else {
if((state_val_27105 === (9))){
var state_27104__$1 = state_27104;
var statearr_27115_27139 = state_27104__$1;
(statearr_27115_27139[(2)] = tc);

(statearr_27115_27139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (5))){
var inst_27084 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27085 = cljs.core.async.close_BANG_.call(null,fc);
var state_27104__$1 = (function (){var statearr_27116 = state_27104;
(statearr_27116[(8)] = inst_27084);

return statearr_27116;
})();
var statearr_27117_27140 = state_27104__$1;
(statearr_27117_27140[(2)] = inst_27085);

(statearr_27117_27140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (14))){
var inst_27098 = (state_27104[(2)]);
var state_27104__$1 = state_27104;
var statearr_27118_27141 = state_27104__$1;
(statearr_27118_27141[(2)] = inst_27098);

(statearr_27118_27141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (10))){
var state_27104__$1 = state_27104;
var statearr_27119_27142 = state_27104__$1;
(statearr_27119_27142[(2)] = fc);

(statearr_27119_27142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (8))){
var inst_27093 = (state_27104[(2)]);
var state_27104__$1 = state_27104;
if(cljs.core.truth_(inst_27093)){
var statearr_27120_27143 = state_27104__$1;
(statearr_27120_27143[(1)] = (12));

} else {
var statearr_27121_27144 = state_27104__$1;
(statearr_27121_27144[(1)] = (13));

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
});})(c__19079__auto___27130,tc,fc))
;
return ((function (switch__19017__auto__,c__19079__auto___27130,tc,fc){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_27125 = [null,null,null,null,null,null,null,null,null];
(statearr_27125[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_27125[(1)] = (1));

return statearr_27125;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_27104){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_27104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e27126){if((e27126 instanceof Object)){
var ex__19021__auto__ = e27126;
var statearr_27127_27145 = state_27104;
(statearr_27127_27145[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27146 = state_27104;
state_27104 = G__27146;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_27104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_27104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___27130,tc,fc))
})();
var state__19081__auto__ = (function (){var statearr_27128 = f__19080__auto__.call(null);
(statearr_27128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___27130);

return statearr_27128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___27130,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_27193){
var state_val_27194 = (state_27193[(1)]);
if((state_val_27194 === (1))){
var inst_27179 = init;
var state_27193__$1 = (function (){var statearr_27195 = state_27193;
(statearr_27195[(7)] = inst_27179);

return statearr_27195;
})();
var statearr_27196_27211 = state_27193__$1;
(statearr_27196_27211[(2)] = null);

(statearr_27196_27211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (2))){
var state_27193__$1 = state_27193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27193__$1,(4),ch);
} else {
if((state_val_27194 === (3))){
var inst_27191 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27193__$1,inst_27191);
} else {
if((state_val_27194 === (4))){
var inst_27182 = (state_27193[(8)]);
var inst_27182__$1 = (state_27193[(2)]);
var inst_27183 = (inst_27182__$1 == null);
var state_27193__$1 = (function (){var statearr_27197 = state_27193;
(statearr_27197[(8)] = inst_27182__$1);

return statearr_27197;
})();
if(cljs.core.truth_(inst_27183)){
var statearr_27198_27212 = state_27193__$1;
(statearr_27198_27212[(1)] = (5));

} else {
var statearr_27199_27213 = state_27193__$1;
(statearr_27199_27213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (5))){
var inst_27179 = (state_27193[(7)]);
var state_27193__$1 = state_27193;
var statearr_27200_27214 = state_27193__$1;
(statearr_27200_27214[(2)] = inst_27179);

(statearr_27200_27214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (6))){
var inst_27179 = (state_27193[(7)]);
var inst_27182 = (state_27193[(8)]);
var inst_27186 = f.call(null,inst_27179,inst_27182);
var inst_27179__$1 = inst_27186;
var state_27193__$1 = (function (){var statearr_27201 = state_27193;
(statearr_27201[(7)] = inst_27179__$1);

return statearr_27201;
})();
var statearr_27202_27215 = state_27193__$1;
(statearr_27202_27215[(2)] = null);

(statearr_27202_27215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (7))){
var inst_27189 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27203_27216 = state_27193__$1;
(statearr_27203_27216[(2)] = inst_27189);

(statearr_27203_27216[(1)] = (3));


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
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19018__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19018__auto____0 = (function (){
var statearr_27207 = [null,null,null,null,null,null,null,null,null];
(statearr_27207[(0)] = cljs$core$async$reduce_$_state_machine__19018__auto__);

(statearr_27207[(1)] = (1));

return statearr_27207;
});
var cljs$core$async$reduce_$_state_machine__19018__auto____1 = (function (state_27193){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_27193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e27208){if((e27208 instanceof Object)){
var ex__19021__auto__ = e27208;
var statearr_27209_27217 = state_27193;
(statearr_27209_27217[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27218 = state_27193;
state_27193 = G__27218;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19018__auto__ = function(state_27193){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19018__auto____1.call(this,state_27193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19018__auto____0;
cljs$core$async$reduce_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19018__auto____1;
return cljs$core$async$reduce_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_27210 = f__19080__auto__.call(null);
(statearr_27210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_27210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27220 = arguments.length;
switch (G__27220) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_27245){
var state_val_27246 = (state_27245[(1)]);
if((state_val_27246 === (7))){
var inst_27227 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27247_27271 = state_27245__$1;
(statearr_27247_27271[(2)] = inst_27227);

(statearr_27247_27271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (1))){
var inst_27221 = cljs.core.seq.call(null,coll);
var inst_27222 = inst_27221;
var state_27245__$1 = (function (){var statearr_27248 = state_27245;
(statearr_27248[(7)] = inst_27222);

return statearr_27248;
})();
var statearr_27249_27272 = state_27245__$1;
(statearr_27249_27272[(2)] = null);

(statearr_27249_27272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (4))){
var inst_27222 = (state_27245[(7)]);
var inst_27225 = cljs.core.first.call(null,inst_27222);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27245__$1,(7),ch,inst_27225);
} else {
if((state_val_27246 === (13))){
var inst_27239 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27250_27273 = state_27245__$1;
(statearr_27250_27273[(2)] = inst_27239);

(statearr_27250_27273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (6))){
var inst_27230 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27230)){
var statearr_27251_27274 = state_27245__$1;
(statearr_27251_27274[(1)] = (8));

} else {
var statearr_27252_27275 = state_27245__$1;
(statearr_27252_27275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (3))){
var inst_27243 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27245__$1,inst_27243);
} else {
if((state_val_27246 === (12))){
var state_27245__$1 = state_27245;
var statearr_27253_27276 = state_27245__$1;
(statearr_27253_27276[(2)] = null);

(statearr_27253_27276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (2))){
var inst_27222 = (state_27245[(7)]);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27222)){
var statearr_27254_27277 = state_27245__$1;
(statearr_27254_27277[(1)] = (4));

} else {
var statearr_27255_27278 = state_27245__$1;
(statearr_27255_27278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (11))){
var inst_27236 = cljs.core.async.close_BANG_.call(null,ch);
var state_27245__$1 = state_27245;
var statearr_27256_27279 = state_27245__$1;
(statearr_27256_27279[(2)] = inst_27236);

(statearr_27256_27279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (9))){
var state_27245__$1 = state_27245;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27257_27280 = state_27245__$1;
(statearr_27257_27280[(1)] = (11));

} else {
var statearr_27258_27281 = state_27245__$1;
(statearr_27258_27281[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (5))){
var inst_27222 = (state_27245[(7)]);
var state_27245__$1 = state_27245;
var statearr_27259_27282 = state_27245__$1;
(statearr_27259_27282[(2)] = inst_27222);

(statearr_27259_27282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (10))){
var inst_27241 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27260_27283 = state_27245__$1;
(statearr_27260_27283[(2)] = inst_27241);

(statearr_27260_27283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (8))){
var inst_27222 = (state_27245[(7)]);
var inst_27232 = cljs.core.next.call(null,inst_27222);
var inst_27222__$1 = inst_27232;
var state_27245__$1 = (function (){var statearr_27261 = state_27245;
(statearr_27261[(7)] = inst_27222__$1);

return statearr_27261;
})();
var statearr_27262_27284 = state_27245__$1;
(statearr_27262_27284[(2)] = null);

(statearr_27262_27284[(1)] = (2));


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
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_27266 = [null,null,null,null,null,null,null,null];
(statearr_27266[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_27266[(1)] = (1));

return statearr_27266;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_27245){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_27245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e27267){if((e27267 instanceof Object)){
var ex__19021__auto__ = e27267;
var statearr_27268_27285 = state_27245;
(statearr_27268_27285[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27286 = state_27245;
state_27245 = G__27286;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_27245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_27245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_27269 = f__19080__auto__.call(null);
(statearr_27269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_27269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27288 = {};
return obj27288;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16057__auto__ = _;
if(and__16057__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16705__auto__ = (((_ == null))?null:_);
return (function (){var or__16069__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27290 = {};
return obj27290;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27512 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27512 = (function (mult,ch,cs,meta27513){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27513 = meta27513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27514,meta27513__$1){
var self__ = this;
var _27514__$1 = this;
return (new cljs.core.async.t27512(self__.mult,self__.ch,self__.cs,meta27513__$1));
});})(cs))
;

cljs.core.async.t27512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27514){
var self__ = this;
var _27514__$1 = this;
return self__.meta27513;
});})(cs))
;

cljs.core.async.t27512.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27512.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27512.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27512.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27512.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27512.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27513","meta27513",-471433372,null)], null);
});})(cs))
;

cljs.core.async.t27512.cljs$lang$type = true;

cljs.core.async.t27512.cljs$lang$ctorStr = "cljs.core.async/t27512";

cljs.core.async.t27512.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t27512");
});})(cs))
;

cljs.core.async.__GT_t27512 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27512(mult__$1,ch__$1,cs__$1,meta27513){
return (new cljs.core.async.t27512(mult__$1,ch__$1,cs__$1,meta27513));
});})(cs))
;

}

return (new cljs.core.async.t27512(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19079__auto___27733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___27733,cs,m,dchan,dctr,done){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___27733,cs,m,dchan,dctr,done){
return (function (state_27645){
var state_val_27646 = (state_27645[(1)]);
if((state_val_27646 === (7))){
var inst_27641 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27647_27734 = state_27645__$1;
(statearr_27647_27734[(2)] = inst_27641);

(statearr_27647_27734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (20))){
var inst_27546 = (state_27645[(7)]);
var inst_27556 = cljs.core.first.call(null,inst_27546);
var inst_27557 = cljs.core.nth.call(null,inst_27556,(0),null);
var inst_27558 = cljs.core.nth.call(null,inst_27556,(1),null);
var state_27645__$1 = (function (){var statearr_27648 = state_27645;
(statearr_27648[(8)] = inst_27557);

return statearr_27648;
})();
if(cljs.core.truth_(inst_27558)){
var statearr_27649_27735 = state_27645__$1;
(statearr_27649_27735[(1)] = (22));

} else {
var statearr_27650_27736 = state_27645__$1;
(statearr_27650_27736[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (27))){
var inst_27588 = (state_27645[(9)]);
var inst_27593 = (state_27645[(10)]);
var inst_27517 = (state_27645[(11)]);
var inst_27586 = (state_27645[(12)]);
var inst_27593__$1 = cljs.core._nth.call(null,inst_27586,inst_27588);
var inst_27594 = cljs.core.async.put_BANG_.call(null,inst_27593__$1,inst_27517,done);
var state_27645__$1 = (function (){var statearr_27651 = state_27645;
(statearr_27651[(10)] = inst_27593__$1);

return statearr_27651;
})();
if(cljs.core.truth_(inst_27594)){
var statearr_27652_27737 = state_27645__$1;
(statearr_27652_27737[(1)] = (30));

} else {
var statearr_27653_27738 = state_27645__$1;
(statearr_27653_27738[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (1))){
var state_27645__$1 = state_27645;
var statearr_27654_27739 = state_27645__$1;
(statearr_27654_27739[(2)] = null);

(statearr_27654_27739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (24))){
var inst_27546 = (state_27645[(7)]);
var inst_27563 = (state_27645[(2)]);
var inst_27564 = cljs.core.next.call(null,inst_27546);
var inst_27526 = inst_27564;
var inst_27527 = null;
var inst_27528 = (0);
var inst_27529 = (0);
var state_27645__$1 = (function (){var statearr_27655 = state_27645;
(statearr_27655[(13)] = inst_27529);

(statearr_27655[(14)] = inst_27563);

(statearr_27655[(15)] = inst_27527);

(statearr_27655[(16)] = inst_27526);

(statearr_27655[(17)] = inst_27528);

return statearr_27655;
})();
var statearr_27656_27740 = state_27645__$1;
(statearr_27656_27740[(2)] = null);

(statearr_27656_27740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (39))){
var state_27645__$1 = state_27645;
var statearr_27660_27741 = state_27645__$1;
(statearr_27660_27741[(2)] = null);

(statearr_27660_27741[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (4))){
var inst_27517 = (state_27645[(11)]);
var inst_27517__$1 = (state_27645[(2)]);
var inst_27518 = (inst_27517__$1 == null);
var state_27645__$1 = (function (){var statearr_27661 = state_27645;
(statearr_27661[(11)] = inst_27517__$1);

return statearr_27661;
})();
if(cljs.core.truth_(inst_27518)){
var statearr_27662_27742 = state_27645__$1;
(statearr_27662_27742[(1)] = (5));

} else {
var statearr_27663_27743 = state_27645__$1;
(statearr_27663_27743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (15))){
var inst_27529 = (state_27645[(13)]);
var inst_27527 = (state_27645[(15)]);
var inst_27526 = (state_27645[(16)]);
var inst_27528 = (state_27645[(17)]);
var inst_27542 = (state_27645[(2)]);
var inst_27543 = (inst_27529 + (1));
var tmp27657 = inst_27527;
var tmp27658 = inst_27526;
var tmp27659 = inst_27528;
var inst_27526__$1 = tmp27658;
var inst_27527__$1 = tmp27657;
var inst_27528__$1 = tmp27659;
var inst_27529__$1 = inst_27543;
var state_27645__$1 = (function (){var statearr_27664 = state_27645;
(statearr_27664[(18)] = inst_27542);

(statearr_27664[(13)] = inst_27529__$1);

(statearr_27664[(15)] = inst_27527__$1);

(statearr_27664[(16)] = inst_27526__$1);

(statearr_27664[(17)] = inst_27528__$1);

return statearr_27664;
})();
var statearr_27665_27744 = state_27645__$1;
(statearr_27665_27744[(2)] = null);

(statearr_27665_27744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (21))){
var inst_27567 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27669_27745 = state_27645__$1;
(statearr_27669_27745[(2)] = inst_27567);

(statearr_27669_27745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (31))){
var inst_27593 = (state_27645[(10)]);
var inst_27597 = done.call(null,null);
var inst_27598 = cljs.core.async.untap_STAR_.call(null,m,inst_27593);
var state_27645__$1 = (function (){var statearr_27670 = state_27645;
(statearr_27670[(19)] = inst_27597);

return statearr_27670;
})();
var statearr_27671_27746 = state_27645__$1;
(statearr_27671_27746[(2)] = inst_27598);

(statearr_27671_27746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (32))){
var inst_27587 = (state_27645[(20)]);
var inst_27588 = (state_27645[(9)]);
var inst_27586 = (state_27645[(12)]);
var inst_27585 = (state_27645[(21)]);
var inst_27600 = (state_27645[(2)]);
var inst_27601 = (inst_27588 + (1));
var tmp27666 = inst_27587;
var tmp27667 = inst_27586;
var tmp27668 = inst_27585;
var inst_27585__$1 = tmp27668;
var inst_27586__$1 = tmp27667;
var inst_27587__$1 = tmp27666;
var inst_27588__$1 = inst_27601;
var state_27645__$1 = (function (){var statearr_27672 = state_27645;
(statearr_27672[(20)] = inst_27587__$1);

(statearr_27672[(9)] = inst_27588__$1);

(statearr_27672[(12)] = inst_27586__$1);

(statearr_27672[(22)] = inst_27600);

(statearr_27672[(21)] = inst_27585__$1);

return statearr_27672;
})();
var statearr_27673_27747 = state_27645__$1;
(statearr_27673_27747[(2)] = null);

(statearr_27673_27747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (40))){
var inst_27613 = (state_27645[(23)]);
var inst_27617 = done.call(null,null);
var inst_27618 = cljs.core.async.untap_STAR_.call(null,m,inst_27613);
var state_27645__$1 = (function (){var statearr_27674 = state_27645;
(statearr_27674[(24)] = inst_27617);

return statearr_27674;
})();
var statearr_27675_27748 = state_27645__$1;
(statearr_27675_27748[(2)] = inst_27618);

(statearr_27675_27748[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (33))){
var inst_27604 = (state_27645[(25)]);
var inst_27606 = cljs.core.chunked_seq_QMARK_.call(null,inst_27604);
var state_27645__$1 = state_27645;
if(inst_27606){
var statearr_27676_27749 = state_27645__$1;
(statearr_27676_27749[(1)] = (36));

} else {
var statearr_27677_27750 = state_27645__$1;
(statearr_27677_27750[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (13))){
var inst_27536 = (state_27645[(26)]);
var inst_27539 = cljs.core.async.close_BANG_.call(null,inst_27536);
var state_27645__$1 = state_27645;
var statearr_27678_27751 = state_27645__$1;
(statearr_27678_27751[(2)] = inst_27539);

(statearr_27678_27751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (22))){
var inst_27557 = (state_27645[(8)]);
var inst_27560 = cljs.core.async.close_BANG_.call(null,inst_27557);
var state_27645__$1 = state_27645;
var statearr_27679_27752 = state_27645__$1;
(statearr_27679_27752[(2)] = inst_27560);

(statearr_27679_27752[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (36))){
var inst_27604 = (state_27645[(25)]);
var inst_27608 = cljs.core.chunk_first.call(null,inst_27604);
var inst_27609 = cljs.core.chunk_rest.call(null,inst_27604);
var inst_27610 = cljs.core.count.call(null,inst_27608);
var inst_27585 = inst_27609;
var inst_27586 = inst_27608;
var inst_27587 = inst_27610;
var inst_27588 = (0);
var state_27645__$1 = (function (){var statearr_27680 = state_27645;
(statearr_27680[(20)] = inst_27587);

(statearr_27680[(9)] = inst_27588);

(statearr_27680[(12)] = inst_27586);

(statearr_27680[(21)] = inst_27585);

return statearr_27680;
})();
var statearr_27681_27753 = state_27645__$1;
(statearr_27681_27753[(2)] = null);

(statearr_27681_27753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (41))){
var inst_27604 = (state_27645[(25)]);
var inst_27620 = (state_27645[(2)]);
var inst_27621 = cljs.core.next.call(null,inst_27604);
var inst_27585 = inst_27621;
var inst_27586 = null;
var inst_27587 = (0);
var inst_27588 = (0);
var state_27645__$1 = (function (){var statearr_27682 = state_27645;
(statearr_27682[(20)] = inst_27587);

(statearr_27682[(9)] = inst_27588);

(statearr_27682[(27)] = inst_27620);

(statearr_27682[(12)] = inst_27586);

(statearr_27682[(21)] = inst_27585);

return statearr_27682;
})();
var statearr_27683_27754 = state_27645__$1;
(statearr_27683_27754[(2)] = null);

(statearr_27683_27754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (43))){
var state_27645__$1 = state_27645;
var statearr_27684_27755 = state_27645__$1;
(statearr_27684_27755[(2)] = null);

(statearr_27684_27755[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (29))){
var inst_27629 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27685_27756 = state_27645__$1;
(statearr_27685_27756[(2)] = inst_27629);

(statearr_27685_27756[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (44))){
var inst_27638 = (state_27645[(2)]);
var state_27645__$1 = (function (){var statearr_27686 = state_27645;
(statearr_27686[(28)] = inst_27638);

return statearr_27686;
})();
var statearr_27687_27757 = state_27645__$1;
(statearr_27687_27757[(2)] = null);

(statearr_27687_27757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (6))){
var inst_27577 = (state_27645[(29)]);
var inst_27576 = cljs.core.deref.call(null,cs);
var inst_27577__$1 = cljs.core.keys.call(null,inst_27576);
var inst_27578 = cljs.core.count.call(null,inst_27577__$1);
var inst_27579 = cljs.core.reset_BANG_.call(null,dctr,inst_27578);
var inst_27584 = cljs.core.seq.call(null,inst_27577__$1);
var inst_27585 = inst_27584;
var inst_27586 = null;
var inst_27587 = (0);
var inst_27588 = (0);
var state_27645__$1 = (function (){var statearr_27688 = state_27645;
(statearr_27688[(20)] = inst_27587);

(statearr_27688[(30)] = inst_27579);

(statearr_27688[(29)] = inst_27577__$1);

(statearr_27688[(9)] = inst_27588);

(statearr_27688[(12)] = inst_27586);

(statearr_27688[(21)] = inst_27585);

return statearr_27688;
})();
var statearr_27689_27758 = state_27645__$1;
(statearr_27689_27758[(2)] = null);

(statearr_27689_27758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (28))){
var inst_27604 = (state_27645[(25)]);
var inst_27585 = (state_27645[(21)]);
var inst_27604__$1 = cljs.core.seq.call(null,inst_27585);
var state_27645__$1 = (function (){var statearr_27690 = state_27645;
(statearr_27690[(25)] = inst_27604__$1);

return statearr_27690;
})();
if(inst_27604__$1){
var statearr_27691_27759 = state_27645__$1;
(statearr_27691_27759[(1)] = (33));

} else {
var statearr_27692_27760 = state_27645__$1;
(statearr_27692_27760[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (25))){
var inst_27587 = (state_27645[(20)]);
var inst_27588 = (state_27645[(9)]);
var inst_27590 = (inst_27588 < inst_27587);
var inst_27591 = inst_27590;
var state_27645__$1 = state_27645;
if(cljs.core.truth_(inst_27591)){
var statearr_27693_27761 = state_27645__$1;
(statearr_27693_27761[(1)] = (27));

} else {
var statearr_27694_27762 = state_27645__$1;
(statearr_27694_27762[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (34))){
var state_27645__$1 = state_27645;
var statearr_27695_27763 = state_27645__$1;
(statearr_27695_27763[(2)] = null);

(statearr_27695_27763[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (17))){
var state_27645__$1 = state_27645;
var statearr_27696_27764 = state_27645__$1;
(statearr_27696_27764[(2)] = null);

(statearr_27696_27764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (3))){
var inst_27643 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27645__$1,inst_27643);
} else {
if((state_val_27646 === (12))){
var inst_27572 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27697_27765 = state_27645__$1;
(statearr_27697_27765[(2)] = inst_27572);

(statearr_27697_27765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (2))){
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27645__$1,(4),ch);
} else {
if((state_val_27646 === (23))){
var state_27645__$1 = state_27645;
var statearr_27698_27766 = state_27645__$1;
(statearr_27698_27766[(2)] = null);

(statearr_27698_27766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (35))){
var inst_27627 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27699_27767 = state_27645__$1;
(statearr_27699_27767[(2)] = inst_27627);

(statearr_27699_27767[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (19))){
var inst_27546 = (state_27645[(7)]);
var inst_27550 = cljs.core.chunk_first.call(null,inst_27546);
var inst_27551 = cljs.core.chunk_rest.call(null,inst_27546);
var inst_27552 = cljs.core.count.call(null,inst_27550);
var inst_27526 = inst_27551;
var inst_27527 = inst_27550;
var inst_27528 = inst_27552;
var inst_27529 = (0);
var state_27645__$1 = (function (){var statearr_27700 = state_27645;
(statearr_27700[(13)] = inst_27529);

(statearr_27700[(15)] = inst_27527);

(statearr_27700[(16)] = inst_27526);

(statearr_27700[(17)] = inst_27528);

return statearr_27700;
})();
var statearr_27701_27768 = state_27645__$1;
(statearr_27701_27768[(2)] = null);

(statearr_27701_27768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (11))){
var inst_27526 = (state_27645[(16)]);
var inst_27546 = (state_27645[(7)]);
var inst_27546__$1 = cljs.core.seq.call(null,inst_27526);
var state_27645__$1 = (function (){var statearr_27702 = state_27645;
(statearr_27702[(7)] = inst_27546__$1);

return statearr_27702;
})();
if(inst_27546__$1){
var statearr_27703_27769 = state_27645__$1;
(statearr_27703_27769[(1)] = (16));

} else {
var statearr_27704_27770 = state_27645__$1;
(statearr_27704_27770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (9))){
var inst_27574 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27705_27771 = state_27645__$1;
(statearr_27705_27771[(2)] = inst_27574);

(statearr_27705_27771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (5))){
var inst_27524 = cljs.core.deref.call(null,cs);
var inst_27525 = cljs.core.seq.call(null,inst_27524);
var inst_27526 = inst_27525;
var inst_27527 = null;
var inst_27528 = (0);
var inst_27529 = (0);
var state_27645__$1 = (function (){var statearr_27706 = state_27645;
(statearr_27706[(13)] = inst_27529);

(statearr_27706[(15)] = inst_27527);

(statearr_27706[(16)] = inst_27526);

(statearr_27706[(17)] = inst_27528);

return statearr_27706;
})();
var statearr_27707_27772 = state_27645__$1;
(statearr_27707_27772[(2)] = null);

(statearr_27707_27772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (14))){
var state_27645__$1 = state_27645;
var statearr_27708_27773 = state_27645__$1;
(statearr_27708_27773[(2)] = null);

(statearr_27708_27773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (45))){
var inst_27635 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27709_27774 = state_27645__$1;
(statearr_27709_27774[(2)] = inst_27635);

(statearr_27709_27774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (26))){
var inst_27577 = (state_27645[(29)]);
var inst_27631 = (state_27645[(2)]);
var inst_27632 = cljs.core.seq.call(null,inst_27577);
var state_27645__$1 = (function (){var statearr_27710 = state_27645;
(statearr_27710[(31)] = inst_27631);

return statearr_27710;
})();
if(inst_27632){
var statearr_27711_27775 = state_27645__$1;
(statearr_27711_27775[(1)] = (42));

} else {
var statearr_27712_27776 = state_27645__$1;
(statearr_27712_27776[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (16))){
var inst_27546 = (state_27645[(7)]);
var inst_27548 = cljs.core.chunked_seq_QMARK_.call(null,inst_27546);
var state_27645__$1 = state_27645;
if(inst_27548){
var statearr_27713_27777 = state_27645__$1;
(statearr_27713_27777[(1)] = (19));

} else {
var statearr_27714_27778 = state_27645__$1;
(statearr_27714_27778[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (38))){
var inst_27624 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27715_27779 = state_27645__$1;
(statearr_27715_27779[(2)] = inst_27624);

(statearr_27715_27779[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (30))){
var state_27645__$1 = state_27645;
var statearr_27716_27780 = state_27645__$1;
(statearr_27716_27780[(2)] = null);

(statearr_27716_27780[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (10))){
var inst_27529 = (state_27645[(13)]);
var inst_27527 = (state_27645[(15)]);
var inst_27535 = cljs.core._nth.call(null,inst_27527,inst_27529);
var inst_27536 = cljs.core.nth.call(null,inst_27535,(0),null);
var inst_27537 = cljs.core.nth.call(null,inst_27535,(1),null);
var state_27645__$1 = (function (){var statearr_27717 = state_27645;
(statearr_27717[(26)] = inst_27536);

return statearr_27717;
})();
if(cljs.core.truth_(inst_27537)){
var statearr_27718_27781 = state_27645__$1;
(statearr_27718_27781[(1)] = (13));

} else {
var statearr_27719_27782 = state_27645__$1;
(statearr_27719_27782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (18))){
var inst_27570 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27720_27783 = state_27645__$1;
(statearr_27720_27783[(2)] = inst_27570);

(statearr_27720_27783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (42))){
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27645__$1,(45),dchan);
} else {
if((state_val_27646 === (37))){
var inst_27517 = (state_27645[(11)]);
var inst_27613 = (state_27645[(23)]);
var inst_27604 = (state_27645[(25)]);
var inst_27613__$1 = cljs.core.first.call(null,inst_27604);
var inst_27614 = cljs.core.async.put_BANG_.call(null,inst_27613__$1,inst_27517,done);
var state_27645__$1 = (function (){var statearr_27721 = state_27645;
(statearr_27721[(23)] = inst_27613__$1);

return statearr_27721;
})();
if(cljs.core.truth_(inst_27614)){
var statearr_27722_27784 = state_27645__$1;
(statearr_27722_27784[(1)] = (39));

} else {
var statearr_27723_27785 = state_27645__$1;
(statearr_27723_27785[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (8))){
var inst_27529 = (state_27645[(13)]);
var inst_27528 = (state_27645[(17)]);
var inst_27531 = (inst_27529 < inst_27528);
var inst_27532 = inst_27531;
var state_27645__$1 = state_27645;
if(cljs.core.truth_(inst_27532)){
var statearr_27724_27786 = state_27645__$1;
(statearr_27724_27786[(1)] = (10));

} else {
var statearr_27725_27787 = state_27645__$1;
(statearr_27725_27787[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19079__auto___27733,cs,m,dchan,dctr,done))
;
return ((function (switch__19017__auto__,c__19079__auto___27733,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19018__auto__ = null;
var cljs$core$async$mult_$_state_machine__19018__auto____0 = (function (){
var statearr_27729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27729[(0)] = cljs$core$async$mult_$_state_machine__19018__auto__);

(statearr_27729[(1)] = (1));

return statearr_27729;
});
var cljs$core$async$mult_$_state_machine__19018__auto____1 = (function (state_27645){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_27645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e27730){if((e27730 instanceof Object)){
var ex__19021__auto__ = e27730;
var statearr_27731_27788 = state_27645;
(statearr_27731_27788[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27789 = state_27645;
state_27645 = G__27789;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19018__auto__ = function(state_27645){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19018__auto____1.call(this,state_27645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19018__auto____0;
cljs$core$async$mult_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19018__auto____1;
return cljs$core$async$mult_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___27733,cs,m,dchan,dctr,done))
})();
var state__19081__auto__ = (function (){var statearr_27732 = f__19080__auto__.call(null);
(statearr_27732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___27733);

return statearr_27732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___27733,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27791 = arguments.length;
switch (G__27791) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27794 = {};
return obj27794;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17109__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17109__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27799){
var map__27800 = p__27799;
var map__27800__$1 = ((cljs.core.seq_QMARK_.call(null,map__27800))?cljs.core.apply.call(null,cljs.core.hash_map,map__27800):map__27800);
var opts = map__27800__$1;
var statearr_27801_27804 = state;
(statearr_27801_27804[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27800,map__27800__$1,opts){
return (function (val){
var statearr_27802_27805 = state;
(statearr_27802_27805[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27800,map__27800__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27803_27806 = state;
(statearr_27803_27806[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27795){
var G__27796 = cljs.core.first.call(null,seq27795);
var seq27795__$1 = cljs.core.next.call(null,seq27795);
var G__27797 = cljs.core.first.call(null,seq27795__$1);
var seq27795__$2 = cljs.core.next.call(null,seq27795__$1);
var G__27798 = cljs.core.first.call(null,seq27795__$2);
var seq27795__$3 = cljs.core.next.call(null,seq27795__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27796,G__27797,G__27798,seq27795__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27926 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27926 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27927){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27927 = meta27927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27928,meta27927__$1){
var self__ = this;
var _27928__$1 = this;
return (new cljs.core.async.t27926(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27927__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27928){
var self__ = this;
var _27928__$1 = this;
return self__.meta27927;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27926.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27926.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27926.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27927","meta27927",-184850041,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27926.cljs$lang$type = true;

cljs.core.async.t27926.cljs$lang$ctorStr = "cljs.core.async/t27926";

cljs.core.async.t27926.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t27926");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27926 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27926(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27927){
return (new cljs.core.async.t27926(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27927));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27926(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19079__auto___28045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___28045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___28045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27998){
var state_val_27999 = (state_27998[(1)]);
if((state_val_27999 === (7))){
var inst_27942 = (state_27998[(7)]);
var inst_27947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27942);
var state_27998__$1 = state_27998;
var statearr_28000_28046 = state_27998__$1;
(statearr_28000_28046[(2)] = inst_27947);

(statearr_28000_28046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (20))){
var inst_27957 = (state_27998[(8)]);
var state_27998__$1 = state_27998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27998__$1,(23),out,inst_27957);
} else {
if((state_val_27999 === (1))){
var inst_27932 = (state_27998[(9)]);
var inst_27932__$1 = calc_state.call(null);
var inst_27933 = cljs.core.seq_QMARK_.call(null,inst_27932__$1);
var state_27998__$1 = (function (){var statearr_28001 = state_27998;
(statearr_28001[(9)] = inst_27932__$1);

return statearr_28001;
})();
if(inst_27933){
var statearr_28002_28047 = state_27998__$1;
(statearr_28002_28047[(1)] = (2));

} else {
var statearr_28003_28048 = state_27998__$1;
(statearr_28003_28048[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (24))){
var inst_27950 = (state_27998[(10)]);
var inst_27942 = inst_27950;
var state_27998__$1 = (function (){var statearr_28004 = state_27998;
(statearr_28004[(7)] = inst_27942);

return statearr_28004;
})();
var statearr_28005_28049 = state_27998__$1;
(statearr_28005_28049[(2)] = null);

(statearr_28005_28049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (4))){
var inst_27932 = (state_27998[(9)]);
var inst_27938 = (state_27998[(2)]);
var inst_27939 = cljs.core.get.call(null,inst_27938,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27940 = cljs.core.get.call(null,inst_27938,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27941 = cljs.core.get.call(null,inst_27938,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27942 = inst_27932;
var state_27998__$1 = (function (){var statearr_28006 = state_27998;
(statearr_28006[(11)] = inst_27940);

(statearr_28006[(12)] = inst_27939);

(statearr_28006[(7)] = inst_27942);

(statearr_28006[(13)] = inst_27941);

return statearr_28006;
})();
var statearr_28007_28050 = state_27998__$1;
(statearr_28007_28050[(2)] = null);

(statearr_28007_28050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (15))){
var state_27998__$1 = state_27998;
var statearr_28008_28051 = state_27998__$1;
(statearr_28008_28051[(2)] = null);

(statearr_28008_28051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (21))){
var inst_27950 = (state_27998[(10)]);
var inst_27942 = inst_27950;
var state_27998__$1 = (function (){var statearr_28009 = state_27998;
(statearr_28009[(7)] = inst_27942);

return statearr_28009;
})();
var statearr_28010_28052 = state_27998__$1;
(statearr_28010_28052[(2)] = null);

(statearr_28010_28052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (13))){
var inst_27994 = (state_27998[(2)]);
var state_27998__$1 = state_27998;
var statearr_28011_28053 = state_27998__$1;
(statearr_28011_28053[(2)] = inst_27994);

(statearr_28011_28053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (22))){
var inst_27992 = (state_27998[(2)]);
var state_27998__$1 = state_27998;
var statearr_28012_28054 = state_27998__$1;
(statearr_28012_28054[(2)] = inst_27992);

(statearr_28012_28054[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (6))){
var inst_27996 = (state_27998[(2)]);
var state_27998__$1 = state_27998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27998__$1,inst_27996);
} else {
if((state_val_27999 === (25))){
var state_27998__$1 = state_27998;
var statearr_28013_28055 = state_27998__$1;
(statearr_28013_28055[(2)] = null);

(statearr_28013_28055[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (17))){
var inst_27972 = (state_27998[(14)]);
var state_27998__$1 = state_27998;
var statearr_28014_28056 = state_27998__$1;
(statearr_28014_28056[(2)] = inst_27972);

(statearr_28014_28056[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (3))){
var inst_27932 = (state_27998[(9)]);
var state_27998__$1 = state_27998;
var statearr_28015_28057 = state_27998__$1;
(statearr_28015_28057[(2)] = inst_27932);

(statearr_28015_28057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (12))){
var inst_27951 = (state_27998[(15)]);
var inst_27958 = (state_27998[(16)]);
var inst_27972 = (state_27998[(14)]);
var inst_27972__$1 = inst_27951.call(null,inst_27958);
var state_27998__$1 = (function (){var statearr_28016 = state_27998;
(statearr_28016[(14)] = inst_27972__$1);

return statearr_28016;
})();
if(cljs.core.truth_(inst_27972__$1)){
var statearr_28017_28058 = state_27998__$1;
(statearr_28017_28058[(1)] = (17));

} else {
var statearr_28018_28059 = state_27998__$1;
(statearr_28018_28059[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (2))){
var inst_27932 = (state_27998[(9)]);
var inst_27935 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27932);
var state_27998__$1 = state_27998;
var statearr_28019_28060 = state_27998__$1;
(statearr_28019_28060[(2)] = inst_27935);

(statearr_28019_28060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (23))){
var inst_27983 = (state_27998[(2)]);
var state_27998__$1 = state_27998;
if(cljs.core.truth_(inst_27983)){
var statearr_28020_28061 = state_27998__$1;
(statearr_28020_28061[(1)] = (24));

} else {
var statearr_28021_28062 = state_27998__$1;
(statearr_28021_28062[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (19))){
var inst_27980 = (state_27998[(2)]);
var state_27998__$1 = state_27998;
if(cljs.core.truth_(inst_27980)){
var statearr_28022_28063 = state_27998__$1;
(statearr_28022_28063[(1)] = (20));

} else {
var statearr_28023_28064 = state_27998__$1;
(statearr_28023_28064[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (11))){
var inst_27957 = (state_27998[(8)]);
var inst_27963 = (inst_27957 == null);
var state_27998__$1 = state_27998;
if(cljs.core.truth_(inst_27963)){
var statearr_28024_28065 = state_27998__$1;
(statearr_28024_28065[(1)] = (14));

} else {
var statearr_28025_28066 = state_27998__$1;
(statearr_28025_28066[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (9))){
var inst_27950 = (state_27998[(10)]);
var inst_27950__$1 = (state_27998[(2)]);
var inst_27951 = cljs.core.get.call(null,inst_27950__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27952 = cljs.core.get.call(null,inst_27950__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27953 = cljs.core.get.call(null,inst_27950__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27998__$1 = (function (){var statearr_28026 = state_27998;
(statearr_28026[(17)] = inst_27952);

(statearr_28026[(15)] = inst_27951);

(statearr_28026[(10)] = inst_27950__$1);

return statearr_28026;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27998__$1,(10),inst_27953);
} else {
if((state_val_27999 === (5))){
var inst_27942 = (state_27998[(7)]);
var inst_27945 = cljs.core.seq_QMARK_.call(null,inst_27942);
var state_27998__$1 = state_27998;
if(inst_27945){
var statearr_28027_28067 = state_27998__$1;
(statearr_28027_28067[(1)] = (7));

} else {
var statearr_28028_28068 = state_27998__$1;
(statearr_28028_28068[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (14))){
var inst_27958 = (state_27998[(16)]);
var inst_27965 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27958);
var state_27998__$1 = state_27998;
var statearr_28029_28069 = state_27998__$1;
(statearr_28029_28069[(2)] = inst_27965);

(statearr_28029_28069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (26))){
var inst_27988 = (state_27998[(2)]);
var state_27998__$1 = state_27998;
var statearr_28030_28070 = state_27998__$1;
(statearr_28030_28070[(2)] = inst_27988);

(statearr_28030_28070[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (16))){
var inst_27968 = (state_27998[(2)]);
var inst_27969 = calc_state.call(null);
var inst_27942 = inst_27969;
var state_27998__$1 = (function (){var statearr_28031 = state_27998;
(statearr_28031[(18)] = inst_27968);

(statearr_28031[(7)] = inst_27942);

return statearr_28031;
})();
var statearr_28032_28071 = state_27998__$1;
(statearr_28032_28071[(2)] = null);

(statearr_28032_28071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (10))){
var inst_27957 = (state_27998[(8)]);
var inst_27958 = (state_27998[(16)]);
var inst_27956 = (state_27998[(2)]);
var inst_27957__$1 = cljs.core.nth.call(null,inst_27956,(0),null);
var inst_27958__$1 = cljs.core.nth.call(null,inst_27956,(1),null);
var inst_27959 = (inst_27957__$1 == null);
var inst_27960 = cljs.core._EQ_.call(null,inst_27958__$1,change);
var inst_27961 = (inst_27959) || (inst_27960);
var state_27998__$1 = (function (){var statearr_28033 = state_27998;
(statearr_28033[(8)] = inst_27957__$1);

(statearr_28033[(16)] = inst_27958__$1);

return statearr_28033;
})();
if(cljs.core.truth_(inst_27961)){
var statearr_28034_28072 = state_27998__$1;
(statearr_28034_28072[(1)] = (11));

} else {
var statearr_28035_28073 = state_27998__$1;
(statearr_28035_28073[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (18))){
var inst_27952 = (state_27998[(17)]);
var inst_27951 = (state_27998[(15)]);
var inst_27958 = (state_27998[(16)]);
var inst_27975 = cljs.core.empty_QMARK_.call(null,inst_27951);
var inst_27976 = inst_27952.call(null,inst_27958);
var inst_27977 = cljs.core.not.call(null,inst_27976);
var inst_27978 = (inst_27975) && (inst_27977);
var state_27998__$1 = state_27998;
var statearr_28036_28074 = state_27998__$1;
(statearr_28036_28074[(2)] = inst_27978);

(statearr_28036_28074[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (8))){
var inst_27942 = (state_27998[(7)]);
var state_27998__$1 = state_27998;
var statearr_28037_28075 = state_27998__$1;
(statearr_28037_28075[(2)] = inst_27942);

(statearr_28037_28075[(1)] = (9));


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
});})(c__19079__auto___28045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19017__auto__,c__19079__auto___28045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19018__auto__ = null;
var cljs$core$async$mix_$_state_machine__19018__auto____0 = (function (){
var statearr_28041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28041[(0)] = cljs$core$async$mix_$_state_machine__19018__auto__);

(statearr_28041[(1)] = (1));

return statearr_28041;
});
var cljs$core$async$mix_$_state_machine__19018__auto____1 = (function (state_27998){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_27998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e28042){if((e28042 instanceof Object)){
var ex__19021__auto__ = e28042;
var statearr_28043_28076 = state_27998;
(statearr_28043_28076[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28077 = state_27998;
state_27998 = G__28077;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19018__auto__ = function(state_27998){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19018__auto____1.call(this,state_27998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19018__auto____0;
cljs$core$async$mix_$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19018__auto____1;
return cljs$core$async$mix_$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___28045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19081__auto__ = (function (){var statearr_28044 = f__19080__auto__.call(null);
(statearr_28044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___28045);

return statearr_28044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___28045,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28079 = {};
return obj28079;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28081 = arguments.length;
switch (G__28081) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28085 = arguments.length;
switch (G__28085) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16069__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16069__auto__,mults){
return (function (p1__28083_SHARP_){
if(cljs.core.truth_(p1__28083_SHARP_.call(null,topic))){
return p1__28083_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28083_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16069__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28086 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28086 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28087){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28087 = meta28087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28088,meta28087__$1){
var self__ = this;
var _28088__$1 = this;
return (new cljs.core.async.t28086(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28087__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28088){
var self__ = this;
var _28088__$1 = this;
return self__.meta28087;
});})(mults,ensure_mult))
;

cljs.core.async.t28086.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28086.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28086.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28086.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28086.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28087","meta28087",-255822584,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t28086.cljs$lang$type = true;

cljs.core.async.t28086.cljs$lang$ctorStr = "cljs.core.async/t28086";

cljs.core.async.t28086.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28086");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28086 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28086(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28087){
return (new cljs.core.async.t28086(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28087));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28086(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19079__auto___28209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___28209,mults,ensure_mult,p){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___28209,mults,ensure_mult,p){
return (function (state_28160){
var state_val_28161 = (state_28160[(1)]);
if((state_val_28161 === (7))){
var inst_28156 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
var statearr_28162_28210 = state_28160__$1;
(statearr_28162_28210[(2)] = inst_28156);

(statearr_28162_28210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (20))){
var state_28160__$1 = state_28160;
var statearr_28163_28211 = state_28160__$1;
(statearr_28163_28211[(2)] = null);

(statearr_28163_28211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (1))){
var state_28160__$1 = state_28160;
var statearr_28164_28212 = state_28160__$1;
(statearr_28164_28212[(2)] = null);

(statearr_28164_28212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (24))){
var inst_28139 = (state_28160[(7)]);
var inst_28148 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28139);
var state_28160__$1 = state_28160;
var statearr_28165_28213 = state_28160__$1;
(statearr_28165_28213[(2)] = inst_28148);

(statearr_28165_28213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (4))){
var inst_28091 = (state_28160[(8)]);
var inst_28091__$1 = (state_28160[(2)]);
var inst_28092 = (inst_28091__$1 == null);
var state_28160__$1 = (function (){var statearr_28166 = state_28160;
(statearr_28166[(8)] = inst_28091__$1);

return statearr_28166;
})();
if(cljs.core.truth_(inst_28092)){
var statearr_28167_28214 = state_28160__$1;
(statearr_28167_28214[(1)] = (5));

} else {
var statearr_28168_28215 = state_28160__$1;
(statearr_28168_28215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (15))){
var inst_28133 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
var statearr_28169_28216 = state_28160__$1;
(statearr_28169_28216[(2)] = inst_28133);

(statearr_28169_28216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (21))){
var inst_28153 = (state_28160[(2)]);
var state_28160__$1 = (function (){var statearr_28170 = state_28160;
(statearr_28170[(9)] = inst_28153);

return statearr_28170;
})();
var statearr_28171_28217 = state_28160__$1;
(statearr_28171_28217[(2)] = null);

(statearr_28171_28217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (13))){
var inst_28115 = (state_28160[(10)]);
var inst_28117 = cljs.core.chunked_seq_QMARK_.call(null,inst_28115);
var state_28160__$1 = state_28160;
if(inst_28117){
var statearr_28172_28218 = state_28160__$1;
(statearr_28172_28218[(1)] = (16));

} else {
var statearr_28173_28219 = state_28160__$1;
(statearr_28173_28219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (22))){
var inst_28145 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
if(cljs.core.truth_(inst_28145)){
var statearr_28174_28220 = state_28160__$1;
(statearr_28174_28220[(1)] = (23));

} else {
var statearr_28175_28221 = state_28160__$1;
(statearr_28175_28221[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (6))){
var inst_28139 = (state_28160[(7)]);
var inst_28141 = (state_28160[(11)]);
var inst_28091 = (state_28160[(8)]);
var inst_28139__$1 = topic_fn.call(null,inst_28091);
var inst_28140 = cljs.core.deref.call(null,mults);
var inst_28141__$1 = cljs.core.get.call(null,inst_28140,inst_28139__$1);
var state_28160__$1 = (function (){var statearr_28176 = state_28160;
(statearr_28176[(7)] = inst_28139__$1);

(statearr_28176[(11)] = inst_28141__$1);

return statearr_28176;
})();
if(cljs.core.truth_(inst_28141__$1)){
var statearr_28177_28222 = state_28160__$1;
(statearr_28177_28222[(1)] = (19));

} else {
var statearr_28178_28223 = state_28160__$1;
(statearr_28178_28223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (25))){
var inst_28150 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
var statearr_28179_28224 = state_28160__$1;
(statearr_28179_28224[(2)] = inst_28150);

(statearr_28179_28224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (17))){
var inst_28115 = (state_28160[(10)]);
var inst_28124 = cljs.core.first.call(null,inst_28115);
var inst_28125 = cljs.core.async.muxch_STAR_.call(null,inst_28124);
var inst_28126 = cljs.core.async.close_BANG_.call(null,inst_28125);
var inst_28127 = cljs.core.next.call(null,inst_28115);
var inst_28101 = inst_28127;
var inst_28102 = null;
var inst_28103 = (0);
var inst_28104 = (0);
var state_28160__$1 = (function (){var statearr_28180 = state_28160;
(statearr_28180[(12)] = inst_28102);

(statearr_28180[(13)] = inst_28104);

(statearr_28180[(14)] = inst_28101);

(statearr_28180[(15)] = inst_28126);

(statearr_28180[(16)] = inst_28103);

return statearr_28180;
})();
var statearr_28181_28225 = state_28160__$1;
(statearr_28181_28225[(2)] = null);

(statearr_28181_28225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (3))){
var inst_28158 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28160__$1,inst_28158);
} else {
if((state_val_28161 === (12))){
var inst_28135 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
var statearr_28182_28226 = state_28160__$1;
(statearr_28182_28226[(2)] = inst_28135);

(statearr_28182_28226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (2))){
var state_28160__$1 = state_28160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28160__$1,(4),ch);
} else {
if((state_val_28161 === (23))){
var state_28160__$1 = state_28160;
var statearr_28183_28227 = state_28160__$1;
(statearr_28183_28227[(2)] = null);

(statearr_28183_28227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (19))){
var inst_28141 = (state_28160[(11)]);
var inst_28091 = (state_28160[(8)]);
var inst_28143 = cljs.core.async.muxch_STAR_.call(null,inst_28141);
var state_28160__$1 = state_28160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28160__$1,(22),inst_28143,inst_28091);
} else {
if((state_val_28161 === (11))){
var inst_28101 = (state_28160[(14)]);
var inst_28115 = (state_28160[(10)]);
var inst_28115__$1 = cljs.core.seq.call(null,inst_28101);
var state_28160__$1 = (function (){var statearr_28184 = state_28160;
(statearr_28184[(10)] = inst_28115__$1);

return statearr_28184;
})();
if(inst_28115__$1){
var statearr_28185_28228 = state_28160__$1;
(statearr_28185_28228[(1)] = (13));

} else {
var statearr_28186_28229 = state_28160__$1;
(statearr_28186_28229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (9))){
var inst_28137 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
var statearr_28187_28230 = state_28160__$1;
(statearr_28187_28230[(2)] = inst_28137);

(statearr_28187_28230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (5))){
var inst_28098 = cljs.core.deref.call(null,mults);
var inst_28099 = cljs.core.vals.call(null,inst_28098);
var inst_28100 = cljs.core.seq.call(null,inst_28099);
var inst_28101 = inst_28100;
var inst_28102 = null;
var inst_28103 = (0);
var inst_28104 = (0);
var state_28160__$1 = (function (){var statearr_28188 = state_28160;
(statearr_28188[(12)] = inst_28102);

(statearr_28188[(13)] = inst_28104);

(statearr_28188[(14)] = inst_28101);

(statearr_28188[(16)] = inst_28103);

return statearr_28188;
})();
var statearr_28189_28231 = state_28160__$1;
(statearr_28189_28231[(2)] = null);

(statearr_28189_28231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (14))){
var state_28160__$1 = state_28160;
var statearr_28193_28232 = state_28160__$1;
(statearr_28193_28232[(2)] = null);

(statearr_28193_28232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (16))){
var inst_28115 = (state_28160[(10)]);
var inst_28119 = cljs.core.chunk_first.call(null,inst_28115);
var inst_28120 = cljs.core.chunk_rest.call(null,inst_28115);
var inst_28121 = cljs.core.count.call(null,inst_28119);
var inst_28101 = inst_28120;
var inst_28102 = inst_28119;
var inst_28103 = inst_28121;
var inst_28104 = (0);
var state_28160__$1 = (function (){var statearr_28194 = state_28160;
(statearr_28194[(12)] = inst_28102);

(statearr_28194[(13)] = inst_28104);

(statearr_28194[(14)] = inst_28101);

(statearr_28194[(16)] = inst_28103);

return statearr_28194;
})();
var statearr_28195_28233 = state_28160__$1;
(statearr_28195_28233[(2)] = null);

(statearr_28195_28233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (10))){
var inst_28102 = (state_28160[(12)]);
var inst_28104 = (state_28160[(13)]);
var inst_28101 = (state_28160[(14)]);
var inst_28103 = (state_28160[(16)]);
var inst_28109 = cljs.core._nth.call(null,inst_28102,inst_28104);
var inst_28110 = cljs.core.async.muxch_STAR_.call(null,inst_28109);
var inst_28111 = cljs.core.async.close_BANG_.call(null,inst_28110);
var inst_28112 = (inst_28104 + (1));
var tmp28190 = inst_28102;
var tmp28191 = inst_28101;
var tmp28192 = inst_28103;
var inst_28101__$1 = tmp28191;
var inst_28102__$1 = tmp28190;
var inst_28103__$1 = tmp28192;
var inst_28104__$1 = inst_28112;
var state_28160__$1 = (function (){var statearr_28196 = state_28160;
(statearr_28196[(17)] = inst_28111);

(statearr_28196[(12)] = inst_28102__$1);

(statearr_28196[(13)] = inst_28104__$1);

(statearr_28196[(14)] = inst_28101__$1);

(statearr_28196[(16)] = inst_28103__$1);

return statearr_28196;
})();
var statearr_28197_28234 = state_28160__$1;
(statearr_28197_28234[(2)] = null);

(statearr_28197_28234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (18))){
var inst_28130 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
var statearr_28198_28235 = state_28160__$1;
(statearr_28198_28235[(2)] = inst_28130);

(statearr_28198_28235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (8))){
var inst_28104 = (state_28160[(13)]);
var inst_28103 = (state_28160[(16)]);
var inst_28106 = (inst_28104 < inst_28103);
var inst_28107 = inst_28106;
var state_28160__$1 = state_28160;
if(cljs.core.truth_(inst_28107)){
var statearr_28199_28236 = state_28160__$1;
(statearr_28199_28236[(1)] = (10));

} else {
var statearr_28200_28237 = state_28160__$1;
(statearr_28200_28237[(1)] = (11));

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
});})(c__19079__auto___28209,mults,ensure_mult,p))
;
return ((function (switch__19017__auto__,c__19079__auto___28209,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_28204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28204[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_28204[(1)] = (1));

return statearr_28204;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_28160){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_28160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e28205){if((e28205 instanceof Object)){
var ex__19021__auto__ = e28205;
var statearr_28206_28238 = state_28160;
(statearr_28206_28238[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28239 = state_28160;
state_28160 = G__28239;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_28160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_28160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___28209,mults,ensure_mult,p))
})();
var state__19081__auto__ = (function (){var statearr_28207 = f__19080__auto__.call(null);
(statearr_28207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___28209);

return statearr_28207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___28209,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28241 = arguments.length;
switch (G__28241) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28244 = arguments.length;
switch (G__28244) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28247 = arguments.length;
switch (G__28247) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19079__auto___28317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___28317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___28317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28286){
var state_val_28287 = (state_28286[(1)]);
if((state_val_28287 === (7))){
var state_28286__$1 = state_28286;
var statearr_28288_28318 = state_28286__$1;
(statearr_28288_28318[(2)] = null);

(statearr_28288_28318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (1))){
var state_28286__$1 = state_28286;
var statearr_28289_28319 = state_28286__$1;
(statearr_28289_28319[(2)] = null);

(statearr_28289_28319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (4))){
var inst_28250 = (state_28286[(7)]);
var inst_28252 = (inst_28250 < cnt);
var state_28286__$1 = state_28286;
if(cljs.core.truth_(inst_28252)){
var statearr_28290_28320 = state_28286__$1;
(statearr_28290_28320[(1)] = (6));

} else {
var statearr_28291_28321 = state_28286__$1;
(statearr_28291_28321[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (15))){
var inst_28282 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
var statearr_28292_28322 = state_28286__$1;
(statearr_28292_28322[(2)] = inst_28282);

(statearr_28292_28322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (13))){
var inst_28275 = cljs.core.async.close_BANG_.call(null,out);
var state_28286__$1 = state_28286;
var statearr_28293_28323 = state_28286__$1;
(statearr_28293_28323[(2)] = inst_28275);

(statearr_28293_28323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (6))){
var state_28286__$1 = state_28286;
var statearr_28294_28324 = state_28286__$1;
(statearr_28294_28324[(2)] = null);

(statearr_28294_28324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (3))){
var inst_28284 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28286__$1,inst_28284);
} else {
if((state_val_28287 === (12))){
var inst_28272 = (state_28286[(8)]);
var inst_28272__$1 = (state_28286[(2)]);
var inst_28273 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28272__$1);
var state_28286__$1 = (function (){var statearr_28295 = state_28286;
(statearr_28295[(8)] = inst_28272__$1);

return statearr_28295;
})();
if(cljs.core.truth_(inst_28273)){
var statearr_28296_28325 = state_28286__$1;
(statearr_28296_28325[(1)] = (13));

} else {
var statearr_28297_28326 = state_28286__$1;
(statearr_28297_28326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (2))){
var inst_28249 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28250 = (0);
var state_28286__$1 = (function (){var statearr_28298 = state_28286;
(statearr_28298[(7)] = inst_28250);

(statearr_28298[(9)] = inst_28249);

return statearr_28298;
})();
var statearr_28299_28327 = state_28286__$1;
(statearr_28299_28327[(2)] = null);

(statearr_28299_28327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (11))){
var inst_28250 = (state_28286[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28286,(10),Object,null,(9));
var inst_28259 = chs__$1.call(null,inst_28250);
var inst_28260 = done.call(null,inst_28250);
var inst_28261 = cljs.core.async.take_BANG_.call(null,inst_28259,inst_28260);
var state_28286__$1 = state_28286;
var statearr_28300_28328 = state_28286__$1;
(statearr_28300_28328[(2)] = inst_28261);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28286__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (9))){
var inst_28250 = (state_28286[(7)]);
var inst_28263 = (state_28286[(2)]);
var inst_28264 = (inst_28250 + (1));
var inst_28250__$1 = inst_28264;
var state_28286__$1 = (function (){var statearr_28301 = state_28286;
(statearr_28301[(7)] = inst_28250__$1);

(statearr_28301[(10)] = inst_28263);

return statearr_28301;
})();
var statearr_28302_28329 = state_28286__$1;
(statearr_28302_28329[(2)] = null);

(statearr_28302_28329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (5))){
var inst_28270 = (state_28286[(2)]);
var state_28286__$1 = (function (){var statearr_28303 = state_28286;
(statearr_28303[(11)] = inst_28270);

return statearr_28303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28286__$1,(12),dchan);
} else {
if((state_val_28287 === (14))){
var inst_28272 = (state_28286[(8)]);
var inst_28277 = cljs.core.apply.call(null,f,inst_28272);
var state_28286__$1 = state_28286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28286__$1,(16),out,inst_28277);
} else {
if((state_val_28287 === (16))){
var inst_28279 = (state_28286[(2)]);
var state_28286__$1 = (function (){var statearr_28304 = state_28286;
(statearr_28304[(12)] = inst_28279);

return statearr_28304;
})();
var statearr_28305_28330 = state_28286__$1;
(statearr_28305_28330[(2)] = null);

(statearr_28305_28330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (10))){
var inst_28254 = (state_28286[(2)]);
var inst_28255 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28286__$1 = (function (){var statearr_28306 = state_28286;
(statearr_28306[(13)] = inst_28254);

return statearr_28306;
})();
var statearr_28307_28331 = state_28286__$1;
(statearr_28307_28331[(2)] = inst_28255);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28286__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (8))){
var inst_28268 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
var statearr_28308_28332 = state_28286__$1;
(statearr_28308_28332[(2)] = inst_28268);

(statearr_28308_28332[(1)] = (5));


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
});})(c__19079__auto___28317,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19017__auto__,c__19079__auto___28317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_28312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28312[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_28312[(1)] = (1));

return statearr_28312;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_28286){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_28286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e28313){if((e28313 instanceof Object)){
var ex__19021__auto__ = e28313;
var statearr_28314_28333 = state_28286;
(statearr_28314_28333[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28334 = state_28286;
state_28286 = G__28334;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_28286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_28286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___28317,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19081__auto__ = (function (){var statearr_28315 = f__19080__auto__.call(null);
(statearr_28315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___28317);

return statearr_28315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___28317,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28337 = arguments.length;
switch (G__28337) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___28392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___28392,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___28392,out){
return (function (state_28367){
var state_val_28368 = (state_28367[(1)]);
if((state_val_28368 === (7))){
var inst_28347 = (state_28367[(7)]);
var inst_28346 = (state_28367[(8)]);
var inst_28346__$1 = (state_28367[(2)]);
var inst_28347__$1 = cljs.core.nth.call(null,inst_28346__$1,(0),null);
var inst_28348 = cljs.core.nth.call(null,inst_28346__$1,(1),null);
var inst_28349 = (inst_28347__$1 == null);
var state_28367__$1 = (function (){var statearr_28369 = state_28367;
(statearr_28369[(7)] = inst_28347__$1);

(statearr_28369[(9)] = inst_28348);

(statearr_28369[(8)] = inst_28346__$1);

return statearr_28369;
})();
if(cljs.core.truth_(inst_28349)){
var statearr_28370_28393 = state_28367__$1;
(statearr_28370_28393[(1)] = (8));

} else {
var statearr_28371_28394 = state_28367__$1;
(statearr_28371_28394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (1))){
var inst_28338 = cljs.core.vec.call(null,chs);
var inst_28339 = inst_28338;
var state_28367__$1 = (function (){var statearr_28372 = state_28367;
(statearr_28372[(10)] = inst_28339);

return statearr_28372;
})();
var statearr_28373_28395 = state_28367__$1;
(statearr_28373_28395[(2)] = null);

(statearr_28373_28395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (4))){
var inst_28339 = (state_28367[(10)]);
var state_28367__$1 = state_28367;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28367__$1,(7),inst_28339);
} else {
if((state_val_28368 === (6))){
var inst_28363 = (state_28367[(2)]);
var state_28367__$1 = state_28367;
var statearr_28374_28396 = state_28367__$1;
(statearr_28374_28396[(2)] = inst_28363);

(statearr_28374_28396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (3))){
var inst_28365 = (state_28367[(2)]);
var state_28367__$1 = state_28367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28367__$1,inst_28365);
} else {
if((state_val_28368 === (2))){
var inst_28339 = (state_28367[(10)]);
var inst_28341 = cljs.core.count.call(null,inst_28339);
var inst_28342 = (inst_28341 > (0));
var state_28367__$1 = state_28367;
if(cljs.core.truth_(inst_28342)){
var statearr_28376_28397 = state_28367__$1;
(statearr_28376_28397[(1)] = (4));

} else {
var statearr_28377_28398 = state_28367__$1;
(statearr_28377_28398[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (11))){
var inst_28339 = (state_28367[(10)]);
var inst_28356 = (state_28367[(2)]);
var tmp28375 = inst_28339;
var inst_28339__$1 = tmp28375;
var state_28367__$1 = (function (){var statearr_28378 = state_28367;
(statearr_28378[(11)] = inst_28356);

(statearr_28378[(10)] = inst_28339__$1);

return statearr_28378;
})();
var statearr_28379_28399 = state_28367__$1;
(statearr_28379_28399[(2)] = null);

(statearr_28379_28399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (9))){
var inst_28347 = (state_28367[(7)]);
var state_28367__$1 = state_28367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28367__$1,(11),out,inst_28347);
} else {
if((state_val_28368 === (5))){
var inst_28361 = cljs.core.async.close_BANG_.call(null,out);
var state_28367__$1 = state_28367;
var statearr_28380_28400 = state_28367__$1;
(statearr_28380_28400[(2)] = inst_28361);

(statearr_28380_28400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (10))){
var inst_28359 = (state_28367[(2)]);
var state_28367__$1 = state_28367;
var statearr_28381_28401 = state_28367__$1;
(statearr_28381_28401[(2)] = inst_28359);

(statearr_28381_28401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (8))){
var inst_28347 = (state_28367[(7)]);
var inst_28348 = (state_28367[(9)]);
var inst_28339 = (state_28367[(10)]);
var inst_28346 = (state_28367[(8)]);
var inst_28351 = (function (){var cs = inst_28339;
var vec__28344 = inst_28346;
var v = inst_28347;
var c = inst_28348;
return ((function (cs,vec__28344,v,c,inst_28347,inst_28348,inst_28339,inst_28346,state_val_28368,c__19079__auto___28392,out){
return (function (p1__28335_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28335_SHARP_);
});
;})(cs,vec__28344,v,c,inst_28347,inst_28348,inst_28339,inst_28346,state_val_28368,c__19079__auto___28392,out))
})();
var inst_28352 = cljs.core.filterv.call(null,inst_28351,inst_28339);
var inst_28339__$1 = inst_28352;
var state_28367__$1 = (function (){var statearr_28382 = state_28367;
(statearr_28382[(10)] = inst_28339__$1);

return statearr_28382;
})();
var statearr_28383_28402 = state_28367__$1;
(statearr_28383_28402[(2)] = null);

(statearr_28383_28402[(1)] = (2));


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
});})(c__19079__auto___28392,out))
;
return ((function (switch__19017__auto__,c__19079__auto___28392,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_28387 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28387[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_28387[(1)] = (1));

return statearr_28387;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_28367){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_28367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e28388){if((e28388 instanceof Object)){
var ex__19021__auto__ = e28388;
var statearr_28389_28403 = state_28367;
(statearr_28389_28403[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28404 = state_28367;
state_28367 = G__28404;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_28367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_28367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___28392,out))
})();
var state__19081__auto__ = (function (){var statearr_28390 = f__19080__auto__.call(null);
(statearr_28390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___28392);

return statearr_28390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___28392,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28406 = arguments.length;
switch (G__28406) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___28454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___28454,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___28454,out){
return (function (state_28430){
var state_val_28431 = (state_28430[(1)]);
if((state_val_28431 === (7))){
var inst_28412 = (state_28430[(7)]);
var inst_28412__$1 = (state_28430[(2)]);
var inst_28413 = (inst_28412__$1 == null);
var inst_28414 = cljs.core.not.call(null,inst_28413);
var state_28430__$1 = (function (){var statearr_28432 = state_28430;
(statearr_28432[(7)] = inst_28412__$1);

return statearr_28432;
})();
if(inst_28414){
var statearr_28433_28455 = state_28430__$1;
(statearr_28433_28455[(1)] = (8));

} else {
var statearr_28434_28456 = state_28430__$1;
(statearr_28434_28456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (1))){
var inst_28407 = (0);
var state_28430__$1 = (function (){var statearr_28435 = state_28430;
(statearr_28435[(8)] = inst_28407);

return statearr_28435;
})();
var statearr_28436_28457 = state_28430__$1;
(statearr_28436_28457[(2)] = null);

(statearr_28436_28457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (4))){
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28430__$1,(7),ch);
} else {
if((state_val_28431 === (6))){
var inst_28425 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28437_28458 = state_28430__$1;
(statearr_28437_28458[(2)] = inst_28425);

(statearr_28437_28458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (3))){
var inst_28427 = (state_28430[(2)]);
var inst_28428 = cljs.core.async.close_BANG_.call(null,out);
var state_28430__$1 = (function (){var statearr_28438 = state_28430;
(statearr_28438[(9)] = inst_28427);

return statearr_28438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28430__$1,inst_28428);
} else {
if((state_val_28431 === (2))){
var inst_28407 = (state_28430[(8)]);
var inst_28409 = (inst_28407 < n);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28409)){
var statearr_28439_28459 = state_28430__$1;
(statearr_28439_28459[(1)] = (4));

} else {
var statearr_28440_28460 = state_28430__$1;
(statearr_28440_28460[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (11))){
var inst_28407 = (state_28430[(8)]);
var inst_28417 = (state_28430[(2)]);
var inst_28418 = (inst_28407 + (1));
var inst_28407__$1 = inst_28418;
var state_28430__$1 = (function (){var statearr_28441 = state_28430;
(statearr_28441[(10)] = inst_28417);

(statearr_28441[(8)] = inst_28407__$1);

return statearr_28441;
})();
var statearr_28442_28461 = state_28430__$1;
(statearr_28442_28461[(2)] = null);

(statearr_28442_28461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (9))){
var state_28430__$1 = state_28430;
var statearr_28443_28462 = state_28430__$1;
(statearr_28443_28462[(2)] = null);

(statearr_28443_28462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (5))){
var state_28430__$1 = state_28430;
var statearr_28444_28463 = state_28430__$1;
(statearr_28444_28463[(2)] = null);

(statearr_28444_28463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (10))){
var inst_28422 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28445_28464 = state_28430__$1;
(statearr_28445_28464[(2)] = inst_28422);

(statearr_28445_28464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (8))){
var inst_28412 = (state_28430[(7)]);
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28430__$1,(11),out,inst_28412);
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
});})(c__19079__auto___28454,out))
;
return ((function (switch__19017__auto__,c__19079__auto___28454,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_28449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28449[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_28449[(1)] = (1));

return statearr_28449;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_28430){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_28430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e28450){if((e28450 instanceof Object)){
var ex__19021__auto__ = e28450;
var statearr_28451_28465 = state_28430;
(statearr_28451_28465[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28466 = state_28430;
state_28430 = G__28466;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_28430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_28430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___28454,out))
})();
var state__19081__auto__ = (function (){var statearr_28452 = f__19080__auto__.call(null);
(statearr_28452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___28454);

return statearr_28452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___28454,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28474 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28474 = (function (map_LT_,f,ch,meta28475){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28475 = meta28475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28476,meta28475__$1){
var self__ = this;
var _28476__$1 = this;
return (new cljs.core.async.t28474(self__.map_LT_,self__.f,self__.ch,meta28475__$1));
});

cljs.core.async.t28474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28476){
var self__ = this;
var _28476__$1 = this;
return self__.meta28475;
});

cljs.core.async.t28474.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28474.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28474.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28477 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28477 = (function (map_LT_,f,ch,meta28475,_,fn1,meta28478){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28475 = meta28475;
this._ = _;
this.fn1 = fn1;
this.meta28478 = meta28478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28479,meta28478__$1){
var self__ = this;
var _28479__$1 = this;
return (new cljs.core.async.t28477(self__.map_LT_,self__.f,self__.ch,self__.meta28475,self__._,self__.fn1,meta28478__$1));
});})(___$1))
;

cljs.core.async.t28477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28479){
var self__ = this;
var _28479__$1 = this;
return self__.meta28478;
});})(___$1))
;

cljs.core.async.t28477.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28467_SHARP_){
return f1.call(null,(((p1__28467_SHARP_ == null))?null:self__.f.call(null,p1__28467_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28477.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28475","meta28475",-1823000600,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28478","meta28478",-756399176,null)], null);
});})(___$1))
;

cljs.core.async.t28477.cljs$lang$type = true;

cljs.core.async.t28477.cljs$lang$ctorStr = "cljs.core.async/t28477";

cljs.core.async.t28477.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28477");
});})(___$1))
;

cljs.core.async.__GT_t28477 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28477(map_LT___$1,f__$1,ch__$1,meta28475__$1,___$2,fn1__$1,meta28478){
return (new cljs.core.async.t28477(map_LT___$1,f__$1,ch__$1,meta28475__$1,___$2,fn1__$1,meta28478));
});})(___$1))
;

}

return (new cljs.core.async.t28477(self__.map_LT_,self__.f,self__.ch,self__.meta28475,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16057__auto__ = ret;
if(cljs.core.truth_(and__16057__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16057__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28474.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28475","meta28475",-1823000600,null)], null);
});

cljs.core.async.t28474.cljs$lang$type = true;

cljs.core.async.t28474.cljs$lang$ctorStr = "cljs.core.async/t28474";

cljs.core.async.t28474.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28474");
});

cljs.core.async.__GT_t28474 = (function cljs$core$async$map_LT__$___GT_t28474(map_LT___$1,f__$1,ch__$1,meta28475){
return (new cljs.core.async.t28474(map_LT___$1,f__$1,ch__$1,meta28475));
});

}

return (new cljs.core.async.t28474(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28483 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28483 = (function (map_GT_,f,ch,meta28484){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28484 = meta28484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28485,meta28484__$1){
var self__ = this;
var _28485__$1 = this;
return (new cljs.core.async.t28483(self__.map_GT_,self__.f,self__.ch,meta28484__$1));
});

cljs.core.async.t28483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28485){
var self__ = this;
var _28485__$1 = this;
return self__.meta28484;
});

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28484","meta28484",521907615,null)], null);
});

cljs.core.async.t28483.cljs$lang$type = true;

cljs.core.async.t28483.cljs$lang$ctorStr = "cljs.core.async/t28483";

cljs.core.async.t28483.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28483");
});

cljs.core.async.__GT_t28483 = (function cljs$core$async$map_GT__$___GT_t28483(map_GT___$1,f__$1,ch__$1,meta28484){
return (new cljs.core.async.t28483(map_GT___$1,f__$1,ch__$1,meta28484));
});

}

return (new cljs.core.async.t28483(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28489 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28489 = (function (filter_GT_,p,ch,meta28490){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28490 = meta28490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28491,meta28490__$1){
var self__ = this;
var _28491__$1 = this;
return (new cljs.core.async.t28489(self__.filter_GT_,self__.p,self__.ch,meta28490__$1));
});

cljs.core.async.t28489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28491){
var self__ = this;
var _28491__$1 = this;
return self__.meta28490;
});

cljs.core.async.t28489.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28489.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28489.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28490","meta28490",1094013877,null)], null);
});

cljs.core.async.t28489.cljs$lang$type = true;

cljs.core.async.t28489.cljs$lang$ctorStr = "cljs.core.async/t28489";

cljs.core.async.t28489.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28489");
});

cljs.core.async.__GT_t28489 = (function cljs$core$async$filter_GT__$___GT_t28489(filter_GT___$1,p__$1,ch__$1,meta28490){
return (new cljs.core.async.t28489(filter_GT___$1,p__$1,ch__$1,meta28490));
});

}

return (new cljs.core.async.t28489(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28493 = arguments.length;
switch (G__28493) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___28536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___28536,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___28536,out){
return (function (state_28514){
var state_val_28515 = (state_28514[(1)]);
if((state_val_28515 === (7))){
var inst_28510 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28516_28537 = state_28514__$1;
(statearr_28516_28537[(2)] = inst_28510);

(statearr_28516_28537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (1))){
var state_28514__$1 = state_28514;
var statearr_28517_28538 = state_28514__$1;
(statearr_28517_28538[(2)] = null);

(statearr_28517_28538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (4))){
var inst_28496 = (state_28514[(7)]);
var inst_28496__$1 = (state_28514[(2)]);
var inst_28497 = (inst_28496__$1 == null);
var state_28514__$1 = (function (){var statearr_28518 = state_28514;
(statearr_28518[(7)] = inst_28496__$1);

return statearr_28518;
})();
if(cljs.core.truth_(inst_28497)){
var statearr_28519_28539 = state_28514__$1;
(statearr_28519_28539[(1)] = (5));

} else {
var statearr_28520_28540 = state_28514__$1;
(statearr_28520_28540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (6))){
var inst_28496 = (state_28514[(7)]);
var inst_28501 = p.call(null,inst_28496);
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28501)){
var statearr_28521_28541 = state_28514__$1;
(statearr_28521_28541[(1)] = (8));

} else {
var statearr_28522_28542 = state_28514__$1;
(statearr_28522_28542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (3))){
var inst_28512 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28514__$1,inst_28512);
} else {
if((state_val_28515 === (2))){
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(4),ch);
} else {
if((state_val_28515 === (11))){
var inst_28504 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28523_28543 = state_28514__$1;
(statearr_28523_28543[(2)] = inst_28504);

(statearr_28523_28543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (9))){
var state_28514__$1 = state_28514;
var statearr_28524_28544 = state_28514__$1;
(statearr_28524_28544[(2)] = null);

(statearr_28524_28544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (5))){
var inst_28499 = cljs.core.async.close_BANG_.call(null,out);
var state_28514__$1 = state_28514;
var statearr_28525_28545 = state_28514__$1;
(statearr_28525_28545[(2)] = inst_28499);

(statearr_28525_28545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (10))){
var inst_28507 = (state_28514[(2)]);
var state_28514__$1 = (function (){var statearr_28526 = state_28514;
(statearr_28526[(8)] = inst_28507);

return statearr_28526;
})();
var statearr_28527_28546 = state_28514__$1;
(statearr_28527_28546[(2)] = null);

(statearr_28527_28546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (8))){
var inst_28496 = (state_28514[(7)]);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28514__$1,(11),out,inst_28496);
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
});})(c__19079__auto___28536,out))
;
return ((function (switch__19017__auto__,c__19079__auto___28536,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_28531 = [null,null,null,null,null,null,null,null,null];
(statearr_28531[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_28531[(1)] = (1));

return statearr_28531;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_28514){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_28514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e28532){if((e28532 instanceof Object)){
var ex__19021__auto__ = e28532;
var statearr_28533_28547 = state_28514;
(statearr_28533_28547[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28548 = state_28514;
state_28514 = G__28548;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_28514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_28514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___28536,out))
})();
var state__19081__auto__ = (function (){var statearr_28534 = f__19080__auto__.call(null);
(statearr_28534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___28536);

return statearr_28534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___28536,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28550 = arguments.length;
switch (G__28550) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto__){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto__){
return (function (state_28717){
var state_val_28718 = (state_28717[(1)]);
if((state_val_28718 === (7))){
var inst_28713 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28719_28760 = state_28717__$1;
(statearr_28719_28760[(2)] = inst_28713);

(statearr_28719_28760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (20))){
var inst_28683 = (state_28717[(7)]);
var inst_28694 = (state_28717[(2)]);
var inst_28695 = cljs.core.next.call(null,inst_28683);
var inst_28669 = inst_28695;
var inst_28670 = null;
var inst_28671 = (0);
var inst_28672 = (0);
var state_28717__$1 = (function (){var statearr_28720 = state_28717;
(statearr_28720[(8)] = inst_28671);

(statearr_28720[(9)] = inst_28694);

(statearr_28720[(10)] = inst_28670);

(statearr_28720[(11)] = inst_28669);

(statearr_28720[(12)] = inst_28672);

return statearr_28720;
})();
var statearr_28721_28761 = state_28717__$1;
(statearr_28721_28761[(2)] = null);

(statearr_28721_28761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (1))){
var state_28717__$1 = state_28717;
var statearr_28722_28762 = state_28717__$1;
(statearr_28722_28762[(2)] = null);

(statearr_28722_28762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (4))){
var inst_28658 = (state_28717[(13)]);
var inst_28658__$1 = (state_28717[(2)]);
var inst_28659 = (inst_28658__$1 == null);
var state_28717__$1 = (function (){var statearr_28723 = state_28717;
(statearr_28723[(13)] = inst_28658__$1);

return statearr_28723;
})();
if(cljs.core.truth_(inst_28659)){
var statearr_28724_28763 = state_28717__$1;
(statearr_28724_28763[(1)] = (5));

} else {
var statearr_28725_28764 = state_28717__$1;
(statearr_28725_28764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (15))){
var state_28717__$1 = state_28717;
var statearr_28729_28765 = state_28717__$1;
(statearr_28729_28765[(2)] = null);

(statearr_28729_28765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (21))){
var state_28717__$1 = state_28717;
var statearr_28730_28766 = state_28717__$1;
(statearr_28730_28766[(2)] = null);

(statearr_28730_28766[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (13))){
var inst_28671 = (state_28717[(8)]);
var inst_28670 = (state_28717[(10)]);
var inst_28669 = (state_28717[(11)]);
var inst_28672 = (state_28717[(12)]);
var inst_28679 = (state_28717[(2)]);
var inst_28680 = (inst_28672 + (1));
var tmp28726 = inst_28671;
var tmp28727 = inst_28670;
var tmp28728 = inst_28669;
var inst_28669__$1 = tmp28728;
var inst_28670__$1 = tmp28727;
var inst_28671__$1 = tmp28726;
var inst_28672__$1 = inst_28680;
var state_28717__$1 = (function (){var statearr_28731 = state_28717;
(statearr_28731[(8)] = inst_28671__$1);

(statearr_28731[(14)] = inst_28679);

(statearr_28731[(10)] = inst_28670__$1);

(statearr_28731[(11)] = inst_28669__$1);

(statearr_28731[(12)] = inst_28672__$1);

return statearr_28731;
})();
var statearr_28732_28767 = state_28717__$1;
(statearr_28732_28767[(2)] = null);

(statearr_28732_28767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (22))){
var state_28717__$1 = state_28717;
var statearr_28733_28768 = state_28717__$1;
(statearr_28733_28768[(2)] = null);

(statearr_28733_28768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (6))){
var inst_28658 = (state_28717[(13)]);
var inst_28667 = f.call(null,inst_28658);
var inst_28668 = cljs.core.seq.call(null,inst_28667);
var inst_28669 = inst_28668;
var inst_28670 = null;
var inst_28671 = (0);
var inst_28672 = (0);
var state_28717__$1 = (function (){var statearr_28734 = state_28717;
(statearr_28734[(8)] = inst_28671);

(statearr_28734[(10)] = inst_28670);

(statearr_28734[(11)] = inst_28669);

(statearr_28734[(12)] = inst_28672);

return statearr_28734;
})();
var statearr_28735_28769 = state_28717__$1;
(statearr_28735_28769[(2)] = null);

(statearr_28735_28769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (17))){
var inst_28683 = (state_28717[(7)]);
var inst_28687 = cljs.core.chunk_first.call(null,inst_28683);
var inst_28688 = cljs.core.chunk_rest.call(null,inst_28683);
var inst_28689 = cljs.core.count.call(null,inst_28687);
var inst_28669 = inst_28688;
var inst_28670 = inst_28687;
var inst_28671 = inst_28689;
var inst_28672 = (0);
var state_28717__$1 = (function (){var statearr_28736 = state_28717;
(statearr_28736[(8)] = inst_28671);

(statearr_28736[(10)] = inst_28670);

(statearr_28736[(11)] = inst_28669);

(statearr_28736[(12)] = inst_28672);

return statearr_28736;
})();
var statearr_28737_28770 = state_28717__$1;
(statearr_28737_28770[(2)] = null);

(statearr_28737_28770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (3))){
var inst_28715 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28717__$1,inst_28715);
} else {
if((state_val_28718 === (12))){
var inst_28703 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28738_28771 = state_28717__$1;
(statearr_28738_28771[(2)] = inst_28703);

(statearr_28738_28771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (2))){
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28717__$1,(4),in$);
} else {
if((state_val_28718 === (23))){
var inst_28711 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28739_28772 = state_28717__$1;
(statearr_28739_28772[(2)] = inst_28711);

(statearr_28739_28772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (19))){
var inst_28698 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28740_28773 = state_28717__$1;
(statearr_28740_28773[(2)] = inst_28698);

(statearr_28740_28773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (11))){
var inst_28669 = (state_28717[(11)]);
var inst_28683 = (state_28717[(7)]);
var inst_28683__$1 = cljs.core.seq.call(null,inst_28669);
var state_28717__$1 = (function (){var statearr_28741 = state_28717;
(statearr_28741[(7)] = inst_28683__$1);

return statearr_28741;
})();
if(inst_28683__$1){
var statearr_28742_28774 = state_28717__$1;
(statearr_28742_28774[(1)] = (14));

} else {
var statearr_28743_28775 = state_28717__$1;
(statearr_28743_28775[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (9))){
var inst_28705 = (state_28717[(2)]);
var inst_28706 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28717__$1 = (function (){var statearr_28744 = state_28717;
(statearr_28744[(15)] = inst_28705);

return statearr_28744;
})();
if(cljs.core.truth_(inst_28706)){
var statearr_28745_28776 = state_28717__$1;
(statearr_28745_28776[(1)] = (21));

} else {
var statearr_28746_28777 = state_28717__$1;
(statearr_28746_28777[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (5))){
var inst_28661 = cljs.core.async.close_BANG_.call(null,out);
var state_28717__$1 = state_28717;
var statearr_28747_28778 = state_28717__$1;
(statearr_28747_28778[(2)] = inst_28661);

(statearr_28747_28778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (14))){
var inst_28683 = (state_28717[(7)]);
var inst_28685 = cljs.core.chunked_seq_QMARK_.call(null,inst_28683);
var state_28717__$1 = state_28717;
if(inst_28685){
var statearr_28748_28779 = state_28717__$1;
(statearr_28748_28779[(1)] = (17));

} else {
var statearr_28749_28780 = state_28717__$1;
(statearr_28749_28780[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (16))){
var inst_28701 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28750_28781 = state_28717__$1;
(statearr_28750_28781[(2)] = inst_28701);

(statearr_28750_28781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (10))){
var inst_28670 = (state_28717[(10)]);
var inst_28672 = (state_28717[(12)]);
var inst_28677 = cljs.core._nth.call(null,inst_28670,inst_28672);
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28717__$1,(13),out,inst_28677);
} else {
if((state_val_28718 === (18))){
var inst_28683 = (state_28717[(7)]);
var inst_28692 = cljs.core.first.call(null,inst_28683);
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28717__$1,(20),out,inst_28692);
} else {
if((state_val_28718 === (8))){
var inst_28671 = (state_28717[(8)]);
var inst_28672 = (state_28717[(12)]);
var inst_28674 = (inst_28672 < inst_28671);
var inst_28675 = inst_28674;
var state_28717__$1 = state_28717;
if(cljs.core.truth_(inst_28675)){
var statearr_28751_28782 = state_28717__$1;
(statearr_28751_28782[(1)] = (10));

} else {
var statearr_28752_28783 = state_28717__$1;
(statearr_28752_28783[(1)] = (11));

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
});})(c__19079__auto__))
;
return ((function (switch__19017__auto__,c__19079__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____0 = (function (){
var statearr_28756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28756[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__);

(statearr_28756[(1)] = (1));

return statearr_28756;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____1 = (function (state_28717){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_28717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e28757){if((e28757 instanceof Object)){
var ex__19021__auto__ = e28757;
var statearr_28758_28784 = state_28717;
(statearr_28758_28784[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28785 = state_28717;
state_28717 = G__28785;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__ = function(state_28717){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____1.call(this,state_28717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19018__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto__))
})();
var state__19081__auto__ = (function (){var statearr_28759 = f__19080__auto__.call(null);
(statearr_28759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto__);

return statearr_28759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto__))
);

return c__19079__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28787 = arguments.length;
switch (G__28787) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28790 = arguments.length;
switch (G__28790) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28793 = arguments.length;
switch (G__28793) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___28843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___28843,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___28843,out){
return (function (state_28817){
var state_val_28818 = (state_28817[(1)]);
if((state_val_28818 === (7))){
var inst_28812 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28819_28844 = state_28817__$1;
(statearr_28819_28844[(2)] = inst_28812);

(statearr_28819_28844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (1))){
var inst_28794 = null;
var state_28817__$1 = (function (){var statearr_28820 = state_28817;
(statearr_28820[(7)] = inst_28794);

return statearr_28820;
})();
var statearr_28821_28845 = state_28817__$1;
(statearr_28821_28845[(2)] = null);

(statearr_28821_28845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (4))){
var inst_28797 = (state_28817[(8)]);
var inst_28797__$1 = (state_28817[(2)]);
var inst_28798 = (inst_28797__$1 == null);
var inst_28799 = cljs.core.not.call(null,inst_28798);
var state_28817__$1 = (function (){var statearr_28822 = state_28817;
(statearr_28822[(8)] = inst_28797__$1);

return statearr_28822;
})();
if(inst_28799){
var statearr_28823_28846 = state_28817__$1;
(statearr_28823_28846[(1)] = (5));

} else {
var statearr_28824_28847 = state_28817__$1;
(statearr_28824_28847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (6))){
var state_28817__$1 = state_28817;
var statearr_28825_28848 = state_28817__$1;
(statearr_28825_28848[(2)] = null);

(statearr_28825_28848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (3))){
var inst_28814 = (state_28817[(2)]);
var inst_28815 = cljs.core.async.close_BANG_.call(null,out);
var state_28817__$1 = (function (){var statearr_28826 = state_28817;
(statearr_28826[(9)] = inst_28814);

return statearr_28826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28817__$1,inst_28815);
} else {
if((state_val_28818 === (2))){
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28817__$1,(4),ch);
} else {
if((state_val_28818 === (11))){
var inst_28797 = (state_28817[(8)]);
var inst_28806 = (state_28817[(2)]);
var inst_28794 = inst_28797;
var state_28817__$1 = (function (){var statearr_28827 = state_28817;
(statearr_28827[(10)] = inst_28806);

(statearr_28827[(7)] = inst_28794);

return statearr_28827;
})();
var statearr_28828_28849 = state_28817__$1;
(statearr_28828_28849[(2)] = null);

(statearr_28828_28849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (9))){
var inst_28797 = (state_28817[(8)]);
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28817__$1,(11),out,inst_28797);
} else {
if((state_val_28818 === (5))){
var inst_28797 = (state_28817[(8)]);
var inst_28794 = (state_28817[(7)]);
var inst_28801 = cljs.core._EQ_.call(null,inst_28797,inst_28794);
var state_28817__$1 = state_28817;
if(inst_28801){
var statearr_28830_28850 = state_28817__$1;
(statearr_28830_28850[(1)] = (8));

} else {
var statearr_28831_28851 = state_28817__$1;
(statearr_28831_28851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (10))){
var inst_28809 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28832_28852 = state_28817__$1;
(statearr_28832_28852[(2)] = inst_28809);

(statearr_28832_28852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (8))){
var inst_28794 = (state_28817[(7)]);
var tmp28829 = inst_28794;
var inst_28794__$1 = tmp28829;
var state_28817__$1 = (function (){var statearr_28833 = state_28817;
(statearr_28833[(7)] = inst_28794__$1);

return statearr_28833;
})();
var statearr_28834_28853 = state_28817__$1;
(statearr_28834_28853[(2)] = null);

(statearr_28834_28853[(1)] = (2));


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
});})(c__19079__auto___28843,out))
;
return ((function (switch__19017__auto__,c__19079__auto___28843,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_28838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28838[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_28838[(1)] = (1));

return statearr_28838;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_28817){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_28817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e28839){if((e28839 instanceof Object)){
var ex__19021__auto__ = e28839;
var statearr_28840_28854 = state_28817;
(statearr_28840_28854[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28855 = state_28817;
state_28817 = G__28855;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_28817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_28817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___28843,out))
})();
var state__19081__auto__ = (function (){var statearr_28841 = f__19080__auto__.call(null);
(statearr_28841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___28843);

return statearr_28841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___28843,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28857 = arguments.length;
switch (G__28857) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___28926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___28926,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___28926,out){
return (function (state_28895){
var state_val_28896 = (state_28895[(1)]);
if((state_val_28896 === (7))){
var inst_28891 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28897_28927 = state_28895__$1;
(statearr_28897_28927[(2)] = inst_28891);

(statearr_28897_28927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (1))){
var inst_28858 = (new Array(n));
var inst_28859 = inst_28858;
var inst_28860 = (0);
var state_28895__$1 = (function (){var statearr_28898 = state_28895;
(statearr_28898[(7)] = inst_28859);

(statearr_28898[(8)] = inst_28860);

return statearr_28898;
})();
var statearr_28899_28928 = state_28895__$1;
(statearr_28899_28928[(2)] = null);

(statearr_28899_28928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (4))){
var inst_28863 = (state_28895[(9)]);
var inst_28863__$1 = (state_28895[(2)]);
var inst_28864 = (inst_28863__$1 == null);
var inst_28865 = cljs.core.not.call(null,inst_28864);
var state_28895__$1 = (function (){var statearr_28900 = state_28895;
(statearr_28900[(9)] = inst_28863__$1);

return statearr_28900;
})();
if(inst_28865){
var statearr_28901_28929 = state_28895__$1;
(statearr_28901_28929[(1)] = (5));

} else {
var statearr_28902_28930 = state_28895__$1;
(statearr_28902_28930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (15))){
var inst_28885 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28903_28931 = state_28895__$1;
(statearr_28903_28931[(2)] = inst_28885);

(statearr_28903_28931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (13))){
var state_28895__$1 = state_28895;
var statearr_28904_28932 = state_28895__$1;
(statearr_28904_28932[(2)] = null);

(statearr_28904_28932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (6))){
var inst_28860 = (state_28895[(8)]);
var inst_28881 = (inst_28860 > (0));
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28881)){
var statearr_28905_28933 = state_28895__$1;
(statearr_28905_28933[(1)] = (12));

} else {
var statearr_28906_28934 = state_28895__$1;
(statearr_28906_28934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (3))){
var inst_28893 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28895__$1,inst_28893);
} else {
if((state_val_28896 === (12))){
var inst_28859 = (state_28895[(7)]);
var inst_28883 = cljs.core.vec.call(null,inst_28859);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28895__$1,(15),out,inst_28883);
} else {
if((state_val_28896 === (2))){
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28895__$1,(4),ch);
} else {
if((state_val_28896 === (11))){
var inst_28875 = (state_28895[(2)]);
var inst_28876 = (new Array(n));
var inst_28859 = inst_28876;
var inst_28860 = (0);
var state_28895__$1 = (function (){var statearr_28907 = state_28895;
(statearr_28907[(7)] = inst_28859);

(statearr_28907[(10)] = inst_28875);

(statearr_28907[(8)] = inst_28860);

return statearr_28907;
})();
var statearr_28908_28935 = state_28895__$1;
(statearr_28908_28935[(2)] = null);

(statearr_28908_28935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (9))){
var inst_28859 = (state_28895[(7)]);
var inst_28873 = cljs.core.vec.call(null,inst_28859);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28895__$1,(11),out,inst_28873);
} else {
if((state_val_28896 === (5))){
var inst_28863 = (state_28895[(9)]);
var inst_28859 = (state_28895[(7)]);
var inst_28860 = (state_28895[(8)]);
var inst_28868 = (state_28895[(11)]);
var inst_28867 = (inst_28859[inst_28860] = inst_28863);
var inst_28868__$1 = (inst_28860 + (1));
var inst_28869 = (inst_28868__$1 < n);
var state_28895__$1 = (function (){var statearr_28909 = state_28895;
(statearr_28909[(12)] = inst_28867);

(statearr_28909[(11)] = inst_28868__$1);

return statearr_28909;
})();
if(cljs.core.truth_(inst_28869)){
var statearr_28910_28936 = state_28895__$1;
(statearr_28910_28936[(1)] = (8));

} else {
var statearr_28911_28937 = state_28895__$1;
(statearr_28911_28937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (14))){
var inst_28888 = (state_28895[(2)]);
var inst_28889 = cljs.core.async.close_BANG_.call(null,out);
var state_28895__$1 = (function (){var statearr_28913 = state_28895;
(statearr_28913[(13)] = inst_28888);

return statearr_28913;
})();
var statearr_28914_28938 = state_28895__$1;
(statearr_28914_28938[(2)] = inst_28889);

(statearr_28914_28938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (10))){
var inst_28879 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28915_28939 = state_28895__$1;
(statearr_28915_28939[(2)] = inst_28879);

(statearr_28915_28939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (8))){
var inst_28859 = (state_28895[(7)]);
var inst_28868 = (state_28895[(11)]);
var tmp28912 = inst_28859;
var inst_28859__$1 = tmp28912;
var inst_28860 = inst_28868;
var state_28895__$1 = (function (){var statearr_28916 = state_28895;
(statearr_28916[(7)] = inst_28859__$1);

(statearr_28916[(8)] = inst_28860);

return statearr_28916;
})();
var statearr_28917_28940 = state_28895__$1;
(statearr_28917_28940[(2)] = null);

(statearr_28917_28940[(1)] = (2));


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
});})(c__19079__auto___28926,out))
;
return ((function (switch__19017__auto__,c__19079__auto___28926,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_28921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28921[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_28921[(1)] = (1));

return statearr_28921;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_28895){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_28895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e28922){if((e28922 instanceof Object)){
var ex__19021__auto__ = e28922;
var statearr_28923_28941 = state_28895;
(statearr_28923_28941[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28942 = state_28895;
state_28895 = G__28942;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_28895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_28895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___28926,out))
})();
var state__19081__auto__ = (function (){var statearr_28924 = f__19080__auto__.call(null);
(statearr_28924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___28926);

return statearr_28924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___28926,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28944 = arguments.length;
switch (G__28944) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19079__auto___29017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19079__auto___29017,out){
return (function (){
var f__19080__auto__ = (function (){var switch__19017__auto__ = ((function (c__19079__auto___29017,out){
return (function (state_28986){
var state_val_28987 = (state_28986[(1)]);
if((state_val_28987 === (7))){
var inst_28982 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_28988_29018 = state_28986__$1;
(statearr_28988_29018[(2)] = inst_28982);

(statearr_28988_29018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (1))){
var inst_28945 = [];
var inst_28946 = inst_28945;
var inst_28947 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28986__$1 = (function (){var statearr_28989 = state_28986;
(statearr_28989[(7)] = inst_28947);

(statearr_28989[(8)] = inst_28946);

return statearr_28989;
})();
var statearr_28990_29019 = state_28986__$1;
(statearr_28990_29019[(2)] = null);

(statearr_28990_29019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (4))){
var inst_28950 = (state_28986[(9)]);
var inst_28950__$1 = (state_28986[(2)]);
var inst_28951 = (inst_28950__$1 == null);
var inst_28952 = cljs.core.not.call(null,inst_28951);
var state_28986__$1 = (function (){var statearr_28991 = state_28986;
(statearr_28991[(9)] = inst_28950__$1);

return statearr_28991;
})();
if(inst_28952){
var statearr_28992_29020 = state_28986__$1;
(statearr_28992_29020[(1)] = (5));

} else {
var statearr_28993_29021 = state_28986__$1;
(statearr_28993_29021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (15))){
var inst_28976 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_28994_29022 = state_28986__$1;
(statearr_28994_29022[(2)] = inst_28976);

(statearr_28994_29022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (13))){
var state_28986__$1 = state_28986;
var statearr_28995_29023 = state_28986__$1;
(statearr_28995_29023[(2)] = null);

(statearr_28995_29023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (6))){
var inst_28946 = (state_28986[(8)]);
var inst_28971 = inst_28946.length;
var inst_28972 = (inst_28971 > (0));
var state_28986__$1 = state_28986;
if(cljs.core.truth_(inst_28972)){
var statearr_28996_29024 = state_28986__$1;
(statearr_28996_29024[(1)] = (12));

} else {
var statearr_28997_29025 = state_28986__$1;
(statearr_28997_29025[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (3))){
var inst_28984 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28986__$1,inst_28984);
} else {
if((state_val_28987 === (12))){
var inst_28946 = (state_28986[(8)]);
var inst_28974 = cljs.core.vec.call(null,inst_28946);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28986__$1,(15),out,inst_28974);
} else {
if((state_val_28987 === (2))){
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28986__$1,(4),ch);
} else {
if((state_val_28987 === (11))){
var inst_28950 = (state_28986[(9)]);
var inst_28954 = (state_28986[(10)]);
var inst_28964 = (state_28986[(2)]);
var inst_28965 = [];
var inst_28966 = inst_28965.push(inst_28950);
var inst_28946 = inst_28965;
var inst_28947 = inst_28954;
var state_28986__$1 = (function (){var statearr_28998 = state_28986;
(statearr_28998[(11)] = inst_28964);

(statearr_28998[(7)] = inst_28947);

(statearr_28998[(8)] = inst_28946);

(statearr_28998[(12)] = inst_28966);

return statearr_28998;
})();
var statearr_28999_29026 = state_28986__$1;
(statearr_28999_29026[(2)] = null);

(statearr_28999_29026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (9))){
var inst_28946 = (state_28986[(8)]);
var inst_28962 = cljs.core.vec.call(null,inst_28946);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28986__$1,(11),out,inst_28962);
} else {
if((state_val_28987 === (5))){
var inst_28950 = (state_28986[(9)]);
var inst_28947 = (state_28986[(7)]);
var inst_28954 = (state_28986[(10)]);
var inst_28954__$1 = f.call(null,inst_28950);
var inst_28955 = cljs.core._EQ_.call(null,inst_28954__$1,inst_28947);
var inst_28956 = cljs.core.keyword_identical_QMARK_.call(null,inst_28947,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28957 = (inst_28955) || (inst_28956);
var state_28986__$1 = (function (){var statearr_29000 = state_28986;
(statearr_29000[(10)] = inst_28954__$1);

return statearr_29000;
})();
if(cljs.core.truth_(inst_28957)){
var statearr_29001_29027 = state_28986__$1;
(statearr_29001_29027[(1)] = (8));

} else {
var statearr_29002_29028 = state_28986__$1;
(statearr_29002_29028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (14))){
var inst_28979 = (state_28986[(2)]);
var inst_28980 = cljs.core.async.close_BANG_.call(null,out);
var state_28986__$1 = (function (){var statearr_29004 = state_28986;
(statearr_29004[(13)] = inst_28979);

return statearr_29004;
})();
var statearr_29005_29029 = state_28986__$1;
(statearr_29005_29029[(2)] = inst_28980);

(statearr_29005_29029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (10))){
var inst_28969 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29006_29030 = state_28986__$1;
(statearr_29006_29030[(2)] = inst_28969);

(statearr_29006_29030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (8))){
var inst_28950 = (state_28986[(9)]);
var inst_28954 = (state_28986[(10)]);
var inst_28946 = (state_28986[(8)]);
var inst_28959 = inst_28946.push(inst_28950);
var tmp29003 = inst_28946;
var inst_28946__$1 = tmp29003;
var inst_28947 = inst_28954;
var state_28986__$1 = (function (){var statearr_29007 = state_28986;
(statearr_29007[(14)] = inst_28959);

(statearr_29007[(7)] = inst_28947);

(statearr_29007[(8)] = inst_28946__$1);

return statearr_29007;
})();
var statearr_29008_29031 = state_28986__$1;
(statearr_29008_29031[(2)] = null);

(statearr_29008_29031[(1)] = (2));


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
});})(c__19079__auto___29017,out))
;
return ((function (switch__19017__auto__,c__19079__auto___29017,out){
return (function() {
var cljs$core$async$state_machine__19018__auto__ = null;
var cljs$core$async$state_machine__19018__auto____0 = (function (){
var statearr_29012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29012[(0)] = cljs$core$async$state_machine__19018__auto__);

(statearr_29012[(1)] = (1));

return statearr_29012;
});
var cljs$core$async$state_machine__19018__auto____1 = (function (state_28986){
while(true){
var ret_value__19019__auto__ = (function (){try{while(true){
var result__19020__auto__ = switch__19017__auto__.call(null,state_28986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19020__auto__;
}
break;
}
}catch (e29013){if((e29013 instanceof Object)){
var ex__19021__auto__ = e29013;
var statearr_29014_29032 = state_28986;
(statearr_29014_29032[(5)] = ex__19021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29033 = state_28986;
state_28986 = G__29033;
continue;
} else {
return ret_value__19019__auto__;
}
break;
}
});
cljs$core$async$state_machine__19018__auto__ = function(state_28986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19018__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19018__auto____1.call(this,state_28986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19018__auto____0;
cljs$core$async$state_machine__19018__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19018__auto____1;
return cljs$core$async$state_machine__19018__auto__;
})()
;})(switch__19017__auto__,c__19079__auto___29017,out))
})();
var state__19081__auto__ = (function (){var statearr_29015 = f__19080__auto__.call(null);
(statearr_29015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19079__auto___29017);

return statearr_29015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19081__auto__);
});})(c__19079__auto___29017,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1437790541180