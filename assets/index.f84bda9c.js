var Gl=Object.defineProperty,Yl=Object.defineProperties;var Kl=Object.getOwnPropertyDescriptors;var oo=Object.getOwnPropertySymbols;var cs=Object.prototype.hasOwnProperty,fs=Object.prototype.propertyIsEnumerable;var ds=($,_e,sn)=>_e in $?Gl($,_e,{enumerable:!0,configurable:!0,writable:!0,value:sn}):$[_e]=sn,yt=($,_e)=>{for(var sn in _e||(_e={}))cs.call(_e,sn)&&ds($,sn,_e[sn]);if(oo)for(var sn of oo(_e))fs.call(_e,sn)&&ds($,sn,_e[sn]);return $},kr=($,_e)=>Yl($,Kl(_e));var ao=($,_e)=>{var sn={};for(var ln in $)cs.call($,ln)&&_e.indexOf(ln)<0&&(sn[ln]=$[ln]);if($!=null&&oo)for(var ln of oo($))_e.indexOf(ln)<0&&fs.call($,ln)&&(sn[ln]=$[ln]);return sn};const p$4=function(){const _e=document.createElement("link").relList;if(_e&&_e.supports&&_e.supports("modulepreload"))return;for(const mn of document.querySelectorAll('link[rel="modulepreload"]'))ln(mn);new MutationObserver(mn=>{for(const _n of mn)if(_n.type==="childList")for(const yn of _n.addedNodes)yn.tagName==="LINK"&&yn.rel==="modulepreload"&&ln(yn)}).observe(document,{childList:!0,subtree:!0});function sn(mn){const _n={};return mn.integrity&&(_n.integrity=mn.integrity),mn.referrerpolicy&&(_n.referrerPolicy=mn.referrerpolicy),mn.crossorigin==="use-credentials"?_n.credentials="include":mn.crossorigin==="anonymous"?_n.credentials="omit":_n.credentials="same-origin",_n}function ln(mn){if(mn.ep)return;mn.ep=!0;const _n=sn(mn);fetch(mn.href,_n)}};p$4();var react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$2=Symbol.for("react.element"),n$2=Symbol.for("react.portal"),p$3=Symbol.for("react.fragment"),q$2=Symbol.for("react.strict_mode"),r$1=Symbol.for("react.profiler"),t$2=Symbol.for("react.provider"),u$1=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w$1=Symbol.for("react.suspense"),x$1=Symbol.for("react.memo"),y$1=Symbol.for("react.lazy"),z$2=Symbol.iterator;function A$2($){return $===null||typeof $!="object"?null:($=z$2&&$[z$2]||$["@@iterator"],typeof $=="function"?$:null)}var B$2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$2={};function E$2($,_e,sn){this.props=$,this.context=_e,this.refs=D$2,this.updater=sn||B$2}E$2.prototype.isReactComponent={};E$2.prototype.setState=function($,_e){if(typeof $!="object"&&typeof $!="function"&&$!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,$,_e,"setState")};E$2.prototype.forceUpdate=function($){this.updater.enqueueForceUpdate(this,$,"forceUpdate")};function F$1(){}F$1.prototype=E$2.prototype;function G$2($,_e,sn){this.props=$,this.context=_e,this.refs=D$2,this.updater=sn||B$2}var H$2=G$2.prototype=new F$1;H$2.constructor=G$2;C$1(H$2,E$2.prototype);H$2.isPureReactComponent=!0;var I$2=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$2={key:!0,ref:!0,__self:!0,__source:!0};function M$2($,_e,sn){var ln,mn={},_n=null,yn=null;if(_e!=null)for(ln in _e.ref!==void 0&&(yn=_e.ref),_e.key!==void 0&&(_n=""+_e.key),_e)J.call(_e,ln)&&!L$2.hasOwnProperty(ln)&&(mn[ln]=_e[ln]);var Tn=arguments.length-2;if(Tn===1)mn.children=sn;else if(1<Tn){for(var wn=Array(Tn),On=0;On<Tn;On++)wn[On]=arguments[On+2];mn.children=wn}if($&&$.defaultProps)for(ln in Tn=$.defaultProps,Tn)mn[ln]===void 0&&(mn[ln]=Tn[ln]);return{$$typeof:l$2,type:$,key:_n,ref:yn,props:mn,_owner:K$1.current}}function N$1($,_e){return{$$typeof:l$2,type:$.type,key:_e,ref:$.ref,props:$.props,_owner:$._owner}}function O$2($){return typeof $=="object"&&$!==null&&$.$$typeof===l$2}function escape($){var _e={"=":"=0",":":"=2"};return"$"+$.replace(/[=:]/g,function(sn){return _e[sn]})}var P$2=/\/+/g;function Q$2($,_e){return typeof $=="object"&&$!==null&&$.key!=null?escape(""+$.key):_e.toString(36)}function R$2($,_e,sn,ln,mn){var _n=typeof $;(_n==="undefined"||_n==="boolean")&&($=null);var yn=!1;if($===null)yn=!0;else switch(_n){case"string":case"number":yn=!0;break;case"object":switch($.$$typeof){case l$2:case n$2:yn=!0}}if(yn)return yn=$,mn=mn(yn),$=ln===""?"."+Q$2(yn,0):ln,I$2(mn)?(sn="",$!=null&&(sn=$.replace(P$2,"$&/")+"/"),R$2(mn,_e,sn,"",function(On){return On})):mn!=null&&(O$2(mn)&&(mn=N$1(mn,sn+(!mn.key||yn&&yn.key===mn.key?"":(""+mn.key).replace(P$2,"$&/")+"/")+$)),_e.push(mn)),1;if(yn=0,ln=ln===""?".":ln+":",I$2($))for(var Tn=0;Tn<$.length;Tn++){_n=$[Tn];var wn=ln+Q$2(_n,Tn);yn+=R$2(_n,_e,sn,wn,mn)}else if(wn=A$2($),typeof wn=="function")for($=wn.call($),Tn=0;!(_n=$.next()).done;)_n=_n.value,wn=ln+Q$2(_n,Tn++),yn+=R$2(_n,_e,sn,wn,mn);else if(_n==="object")throw _e=String($),Error("Objects are not valid as a React child (found: "+(_e==="[object Object]"?"object with keys {"+Object.keys($).join(", ")+"}":_e)+"). If you meant to render a collection of children, use an array instead.");return yn}function S$2($,_e,sn){if($==null)return $;var ln=[],mn=0;return R$2($,ln,"","",function(_n){return _e.call(sn,_n,mn++)}),ln}function T$2($){if($._status===-1){var _e=$._result;_e=_e(),_e.then(function(sn){($._status===0||$._status===-1)&&($._status=1,$._result=sn)},function(sn){($._status===0||$._status===-1)&&($._status=2,$._result=sn)}),$._status===-1&&($._status=0,$._result=_e)}if($._status===1)return $._result.default;throw $._result}var U$2={current:null},V$1={transition:null},W$2={ReactCurrentDispatcher:U$2,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};react_production_min.Children={map:S$2,forEach:function($,_e,sn){S$2($,function(){_e.apply(this,arguments)},sn)},count:function($){var _e=0;return S$2($,function(){_e++}),_e},toArray:function($){return S$2($,function(_e){return _e})||[]},only:function($){if(!O$2($))throw Error("React.Children.only expected to receive a single React element child.");return $}};react_production_min.Component=E$2;react_production_min.Fragment=p$3;react_production_min.Profiler=r$1;react_production_min.PureComponent=G$2;react_production_min.StrictMode=q$2;react_production_min.Suspense=w$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$2;react_production_min.cloneElement=function($,_e,sn){if($==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+$+".");var ln=C$1({},$.props),mn=$.key,_n=$.ref,yn=$._owner;if(_e!=null){if(_e.ref!==void 0&&(_n=_e.ref,yn=K$1.current),_e.key!==void 0&&(mn=""+_e.key),$.type&&$.type.defaultProps)var Tn=$.type.defaultProps;for(wn in _e)J.call(_e,wn)&&!L$2.hasOwnProperty(wn)&&(ln[wn]=_e[wn]===void 0&&Tn!==void 0?Tn[wn]:_e[wn])}var wn=arguments.length-2;if(wn===1)ln.children=sn;else if(1<wn){Tn=Array(wn);for(var On=0;On<wn;On++)Tn[On]=arguments[On+2];ln.children=Tn}return{$$typeof:l$2,type:$.type,key:mn,ref:_n,props:ln,_owner:yn}};react_production_min.createContext=function($){return $={$$typeof:u$1,_currentValue:$,_currentValue2:$,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},$.Provider={$$typeof:t$2,_context:$},$.Consumer=$};react_production_min.createElement=M$2;react_production_min.createFactory=function($){var _e=M$2.bind(null,$);return _e.type=$,_e};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function($){return{$$typeof:v$1,render:$}};react_production_min.isValidElement=O$2;react_production_min.lazy=function($){return{$$typeof:y$1,_payload:{_status:-1,_result:$},_init:T$2}};react_production_min.memo=function($,_e){return{$$typeof:x$1,type:$,compare:_e===void 0?null:_e}};react_production_min.startTransition=function($){var _e=V$1.transition;V$1.transition={};try{$()}finally{V$1.transition=_e}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};react_production_min.useCallback=function($,_e){return U$2.current.useCallback($,_e)};react_production_min.useContext=function($){return U$2.current.useContext($)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function($){return U$2.current.useDeferredValue($)};react_production_min.useEffect=function($,_e){return U$2.current.useEffect($,_e)};react_production_min.useId=function(){return U$2.current.useId()};react_production_min.useImperativeHandle=function($,_e,sn){return U$2.current.useImperativeHandle($,_e,sn)};react_production_min.useInsertionEffect=function($,_e){return U$2.current.useInsertionEffect($,_e)};react_production_min.useLayoutEffect=function($,_e){return U$2.current.useLayoutEffect($,_e)};react_production_min.useMemo=function($,_e){return U$2.current.useMemo($,_e)};react_production_min.useReducer=function($,_e,sn){return U$2.current.useReducer($,_e,sn)};react_production_min.useRef=function($){return U$2.current.useRef($)};react_production_min.useState=function($){return U$2.current.useState($)};react_production_min.useSyncExternalStore=function($,_e,sn){return U$2.current.useSyncExternalStore($,_e,sn)};react_production_min.useTransition=function(){return U$2.current.useTransition()};react_production_min.version="18.1.0";react.exports=react_production_min;var React=react.exports,client={},reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function($){function _e(tt,lt){var ct=tt.length;tt.push(lt);e:for(;0<ct;){var _t=ct-1>>>1,gt=tt[_t];if(0<mn(gt,lt))tt[_t]=lt,tt[ct]=gt,ct=_t;else break e}}function sn(tt){return tt.length===0?null:tt[0]}function ln(tt){if(tt.length===0)return null;var lt=tt[0],ct=tt.pop();if(ct!==lt){tt[0]=ct;e:for(var _t=0,gt=tt.length,Ct=gt>>>1;_t<Ct;){var Ut=2*(_t+1)-1,mr=tt[Ut],Ht=Ut+1,or=tt[Ht];if(0>mn(mr,ct))Ht<gt&&0>mn(or,mr)?(tt[_t]=or,tt[Ht]=ct,_t=Ht):(tt[_t]=mr,tt[Ut]=ct,_t=Ut);else if(Ht<gt&&0>mn(or,ct))tt[_t]=or,tt[Ht]=ct,_t=Ht;else break e}}return lt}function mn(tt,lt){var ct=tt.sortIndex-lt.sortIndex;return ct!==0?ct:tt.id-lt.id}if(typeof performance=="object"&&typeof performance.now=="function"){var _n=performance;$.unstable_now=function(){return _n.now()}}else{var yn=Date,Tn=yn.now();$.unstable_now=function(){return yn.now()-Tn}}var wn=[],On=[],Dn=1,Nn=null,An=3,In=!1,Un=!1,Ln=!1,qn=typeof setTimeout=="function"?setTimeout:null,kn=typeof clearTimeout=="function"?clearTimeout:null,xn=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $n(tt){for(var lt=sn(On);lt!==null;){if(lt.callback===null)ln(On);else if(lt.startTime<=tt)ln(On),lt.sortIndex=lt.expirationTime,_e(wn,lt);else break;lt=sn(On)}}function zn(tt){if(Ln=!1,$n(tt),!Un)if(sn(wn)!==null)Un=!0,fr(Yn);else{var lt=sn(On);lt!==null&&pr(zn,lt.startTime-tt)}}function Yn(tt,lt){Un=!1,Ln&&(Ln=!1,kn(at),at=-1),In=!0;var ct=An;try{for($n(lt),Nn=sn(wn);Nn!==null&&(!(Nn.expirationTime>lt)||tt&&!Rt());){var _t=Nn.callback;if(typeof _t=="function"){Nn.callback=null,An=Nn.priorityLevel;var gt=_t(Nn.expirationTime<=lt);lt=$.unstable_now(),typeof gt=="function"?Nn.callback=gt:Nn===sn(wn)&&ln(wn),$n(lt)}else ln(wn);Nn=sn(wn)}if(Nn!==null)var Ct=!0;else{var Ut=sn(On);Ut!==null&&pr(zn,Ut.startTime-lt),Ct=!1}return Ct}finally{Nn=null,An=ct,In=!1}}var nt=!1,et=null,at=-1,vt=5,Rn=-1;function Rt(){return!($.unstable_now()-Rn<vt)}function qt(){if(et!==null){var tt=$.unstable_now();Rn=tt;var lt=!0;try{lt=et(!0,tt)}finally{lt?Kt():(nt=!1,et=null)}}else nt=!1}var Kt;if(typeof xn=="function")Kt=function(){xn(qt)};else if(typeof MessageChannel!="undefined"){var Fr=new MessageChannel,io=Fr.port2;Fr.port1.onmessage=qt,Kt=function(){io.postMessage(null)}}else Kt=function(){qn(qt,0)};function fr(tt){et=tt,nt||(nt=!0,Kt())}function pr(tt,lt){at=qn(function(){tt($.unstable_now())},lt)}$.unstable_IdlePriority=5,$.unstable_ImmediatePriority=1,$.unstable_LowPriority=4,$.unstable_NormalPriority=3,$.unstable_Profiling=null,$.unstable_UserBlockingPriority=2,$.unstable_cancelCallback=function(tt){tt.callback=null},$.unstable_continueExecution=function(){Un||In||(Un=!0,fr(Yn))},$.unstable_forceFrameRate=function(tt){0>tt||125<tt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vt=0<tt?Math.floor(1e3/tt):5},$.unstable_getCurrentPriorityLevel=function(){return An},$.unstable_getFirstCallbackNode=function(){return sn(wn)},$.unstable_next=function(tt){switch(An){case 1:case 2:case 3:var lt=3;break;default:lt=An}var ct=An;An=lt;try{return tt()}finally{An=ct}},$.unstable_pauseExecution=function(){},$.unstable_requestPaint=function(){},$.unstable_runWithPriority=function(tt,lt){switch(tt){case 1:case 2:case 3:case 4:case 5:break;default:tt=3}var ct=An;An=tt;try{return lt()}finally{An=ct}},$.unstable_scheduleCallback=function(tt,lt,ct){var _t=$.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?_t+ct:_t):ct=_t,tt){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=ct+gt,tt={id:Dn++,callback:lt,priorityLevel:tt,startTime:ct,expirationTime:gt,sortIndex:-1},ct>_t?(tt.sortIndex=ct,_e(On,tt),sn(wn)===null&&tt===sn(On)&&(Ln?(kn(at),at=-1):Ln=!0,pr(zn,ct-_t))):(tt.sortIndex=gt,_e(wn,tt),Un||In||(Un=!0,fr(Yn))),tt},$.unstable_shouldYield=Rt,$.unstable_wrapCallback=function(tt){var lt=An;return function(){var ct=An;An=lt;try{return tt.apply(this,arguments)}finally{An=ct}}}})(scheduler_production_min);scheduler.exports=scheduler_production_min;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=react.exports,ba=scheduler.exports;function p$2($){for(var _e="https://reactjs.org/docs/error-decoder.html?invariant="+$,sn=1;sn<arguments.length;sn++)_e+="&args[]="+encodeURIComponent(arguments[sn]);return"Minified React error #"+$+"; visit "+_e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa($,_e){ha($,_e),ha($+"Capture",_e)}function ha($,_e){for(ea[$]=_e,$=0;$<_e.length;$++)da.add(_e[$])}var ia=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function na($){return ja.call(ma,$)?!0:ja.call(la,$)?!1:ka.test($)?ma[$]=!0:(la[$]=!0,!1)}function oa($,_e,sn,ln){if(sn!==null&&sn.type===0)return!1;switch(typeof _e){case"function":case"symbol":return!0;case"boolean":return ln?!1:sn!==null?!sn.acceptsBooleans:($=$.toLowerCase().slice(0,5),$!=="data-"&&$!=="aria-");default:return!1}}function pa($,_e,sn,ln){if(_e===null||typeof _e=="undefined"||oa($,_e,sn,ln))return!0;if(ln)return!1;if(sn!==null)switch(sn.type){case 3:return!_e;case 4:return _e===!1;case 5:return isNaN(_e);case 6:return isNaN(_e)||1>_e}return!1}function t$1($,_e,sn,ln,mn,_n,yn){this.acceptsBooleans=_e===2||_e===3||_e===4,this.attributeName=ln,this.attributeNamespace=mn,this.mustUseProperty=sn,this.propertyName=$,this.type=_e,this.sanitizeURL=_n,this.removeEmptyString=yn}var z$1={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function($){z$1[$]=new t$1($,0,!1,$,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function($){var _e=$[0];z$1[_e]=new t$1(_e,1,!1,$[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function($){z$1[$]=new t$1($,2,!1,$.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function($){z$1[$]=new t$1($,2,!1,$,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function($){z$1[$]=new t$1($,3,!1,$.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function($){z$1[$]=new t$1($,3,!0,$,null,!1,!1)});["capture","download"].forEach(function($){z$1[$]=new t$1($,4,!1,$,null,!1,!1)});["cols","rows","size","span"].forEach(function($){z$1[$]=new t$1($,6,!1,$,null,!1,!1)});["rowSpan","start"].forEach(function($){z$1[$]=new t$1($,5,!1,$.toLowerCase(),null,!1,!1)});var qa=/[\-:]([a-z])/g;function ra($){return $[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function($){var _e=$.replace(qa,ra);z$1[_e]=new t$1(_e,1,!1,$,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function($){var _e=$.replace(qa,ra);z$1[_e]=new t$1(_e,1,!1,$,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function($){var _e=$.replace(qa,ra);z$1[_e]=new t$1(_e,1,!1,$,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function($){z$1[$]=new t$1($,1,!1,$.toLowerCase(),null,!1,!1)});z$1.xlinkHref=new t$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function($){z$1[$]=new t$1($,1,!1,$.toLowerCase(),null,!0,!0)});function sa($,_e,sn,ln){var mn=z$1.hasOwnProperty(_e)?z$1[_e]:null;(mn!==null?mn.type!==0:ln||!(2<_e.length)||_e[0]!=="o"&&_e[0]!=="O"||_e[1]!=="n"&&_e[1]!=="N")&&(pa(_e,sn,mn,ln)&&(sn=null),ln||mn===null?na(_e)&&(sn===null?$.removeAttribute(_e):$.setAttribute(_e,""+sn)):mn.mustUseProperty?$[mn.propertyName]=sn===null?mn.type===3?!1:"":sn:(_e=mn.attributeName,ln=mn.attributeNamespace,sn===null?$.removeAttribute(_e):(mn=mn.type,sn=mn===3||mn===4&&sn===!0?"":""+sn,ln?$.setAttributeNS(ln,_e,sn):$.setAttribute(_e,sn))))}var ta=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),va=Symbol.for("react.portal"),wa=Symbol.for("react.fragment"),xa=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),Aa=Symbol.for("react.provider"),Ba=Symbol.for("react.context"),Ca=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Fa=Symbol.for("react.memo"),Ga=Symbol.for("react.lazy"),Ha=Symbol.for("react.offscreen"),Ia=Symbol.iterator;function Ja($){return $===null||typeof $!="object"?null:($=Ia&&$[Ia]||$["@@iterator"],typeof $=="function"?$:null)}var A$1=Object.assign,Ka;function La($){if(Ka===void 0)try{throw Error()}catch(sn){var _e=sn.stack.trim().match(/\n( *(at )?)/);Ka=_e&&_e[1]||""}return`
`+Ka+$}var Ma=!1;function Na($,_e){if(!$||Ma)return"";Ma=!0;var sn=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(_e)if(_e=function(){throw Error()},Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(On){var ln=On}Reflect.construct($,[],_e)}else{try{_e.call()}catch(On){ln=On}$.call(_e.prototype)}else{try{throw Error()}catch(On){ln=On}$()}}catch(On){if(On&&ln&&typeof On.stack=="string"){for(var mn=On.stack.split(`
`),_n=ln.stack.split(`
`),yn=mn.length-1,Tn=_n.length-1;1<=yn&&0<=Tn&&mn[yn]!==_n[Tn];)Tn--;for(;1<=yn&&0<=Tn;yn--,Tn--)if(mn[yn]!==_n[Tn]){if(yn!==1||Tn!==1)do if(yn--,Tn--,0>Tn||mn[yn]!==_n[Tn]){var wn=`
`+mn[yn].replace(" at new "," at ");return $.displayName&&wn.includes("<anonymous>")&&(wn=wn.replace("<anonymous>",$.displayName)),wn}while(1<=yn&&0<=Tn);break}}}finally{Ma=!1,Error.prepareStackTrace=sn}return($=$?$.displayName||$.name:"")?La($):""}function Oa($){switch($.tag){case 5:return La($.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return $=Na($.type,!1),$;case 11:return $=Na($.type.render,!1),$;case 1:return $=Na($.type,!0),$;default:return""}}function Pa($){if($==null)return null;if(typeof $=="function")return $.displayName||$.name||null;if(typeof $=="string")return $;switch($){case wa:return"Fragment";case va:return"Portal";case za:return"Profiler";case xa:return"StrictMode";case Da:return"Suspense";case Ea:return"SuspenseList"}if(typeof $=="object")switch($.$$typeof){case Ba:return($.displayName||"Context")+".Consumer";case Aa:return($._context.displayName||"Context")+".Provider";case Ca:var _e=$.render;return $=$.displayName,$||($=_e.displayName||_e.name||"",$=$!==""?"ForwardRef("+$+")":"ForwardRef"),$;case Fa:return _e=$.displayName||null,_e!==null?_e:Pa($.type)||"Memo";case Ga:_e=$._payload,$=$._init;try{return Pa($(_e))}catch{}}return null}function Qa($){var _e=$.type;switch($.tag){case 24:return"Cache";case 9:return(_e.displayName||"Context")+".Consumer";case 10:return(_e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return $=_e.render,$=$.displayName||$.name||"",_e.displayName||($!==""?"ForwardRef("+$+")":"ForwardRef");case 7:return"Fragment";case 5:return _e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pa(_e);case 8:return _e===xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof _e=="function")return _e.displayName||_e.name||null;if(typeof _e=="string")return _e}return null}function Ra($){switch(typeof $){case"boolean":case"number":case"string":case"undefined":return $;case"object":return $;default:return""}}function Sa($){var _e=$.type;return($=$.nodeName)&&$.toLowerCase()==="input"&&(_e==="checkbox"||_e==="radio")}function Ta($){var _e=Sa($)?"checked":"value",sn=Object.getOwnPropertyDescriptor($.constructor.prototype,_e),ln=""+$[_e];if(!$.hasOwnProperty(_e)&&typeof sn!="undefined"&&typeof sn.get=="function"&&typeof sn.set=="function"){var mn=sn.get,_n=sn.set;return Object.defineProperty($,_e,{configurable:!0,get:function(){return mn.call(this)},set:function(yn){ln=""+yn,_n.call(this,yn)}}),Object.defineProperty($,_e,{enumerable:sn.enumerable}),{getValue:function(){return ln},setValue:function(yn){ln=""+yn},stopTracking:function(){$._valueTracker=null,delete $[_e]}}}}function Ua($){$._valueTracker||($._valueTracker=Ta($))}function Va($){if(!$)return!1;var _e=$._valueTracker;if(!_e)return!0;var sn=_e.getValue(),ln="";return $&&(ln=Sa($)?$.checked?"true":"false":$.value),$=ln,$!==sn?(_e.setValue($),!0):!1}function Wa($){if($=$||(typeof document!="undefined"?document:void 0),typeof $=="undefined")return null;try{return $.activeElement||$.body}catch{return $.body}}function Xa($,_e){var sn=_e.checked;return A$1({},_e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:sn!=null?sn:$._wrapperState.initialChecked})}function Ya($,_e){var sn=_e.defaultValue==null?"":_e.defaultValue,ln=_e.checked!=null?_e.checked:_e.defaultChecked;sn=Ra(_e.value!=null?_e.value:sn),$._wrapperState={initialChecked:ln,initialValue:sn,controlled:_e.type==="checkbox"||_e.type==="radio"?_e.checked!=null:_e.value!=null}}function Za($,_e){_e=_e.checked,_e!=null&&sa($,"checked",_e,!1)}function $a($,_e){Za($,_e);var sn=Ra(_e.value),ln=_e.type;if(sn!=null)ln==="number"?(sn===0&&$.value===""||$.value!=sn)&&($.value=""+sn):$.value!==""+sn&&($.value=""+sn);else if(ln==="submit"||ln==="reset"){$.removeAttribute("value");return}_e.hasOwnProperty("value")?bb($,_e.type,sn):_e.hasOwnProperty("defaultValue")&&bb($,_e.type,Ra(_e.defaultValue)),_e.checked==null&&_e.defaultChecked!=null&&($.defaultChecked=!!_e.defaultChecked)}function cb($,_e,sn){if(_e.hasOwnProperty("value")||_e.hasOwnProperty("defaultValue")){var ln=_e.type;if(!(ln!=="submit"&&ln!=="reset"||_e.value!==void 0&&_e.value!==null))return;_e=""+$._wrapperState.initialValue,sn||_e===$.value||($.value=_e),$.defaultValue=_e}sn=$.name,sn!==""&&($.name=""),$.defaultChecked=!!$._wrapperState.initialChecked,sn!==""&&($.name=sn)}function bb($,_e,sn){(_e!=="number"||Wa($.ownerDocument)!==$)&&(sn==null?$.defaultValue=""+$._wrapperState.initialValue:$.defaultValue!==""+sn&&($.defaultValue=""+sn))}var db=Array.isArray;function eb($,_e,sn,ln){if($=$.options,_e){_e={};for(var mn=0;mn<sn.length;mn++)_e["$"+sn[mn]]=!0;for(sn=0;sn<$.length;sn++)mn=_e.hasOwnProperty("$"+$[sn].value),$[sn].selected!==mn&&($[sn].selected=mn),mn&&ln&&($[sn].defaultSelected=!0)}else{for(sn=""+Ra(sn),_e=null,mn=0;mn<$.length;mn++){if($[mn].value===sn){$[mn].selected=!0,ln&&($[mn].defaultSelected=!0);return}_e!==null||$[mn].disabled||(_e=$[mn])}_e!==null&&(_e.selected=!0)}}function fb($,_e){if(_e.dangerouslySetInnerHTML!=null)throw Error(p$2(91));return A$1({},_e,{value:void 0,defaultValue:void 0,children:""+$._wrapperState.initialValue})}function gb($,_e){var sn=_e.value;if(sn==null){if(sn=_e.children,_e=_e.defaultValue,sn!=null){if(_e!=null)throw Error(p$2(92));if(db(sn)){if(1<sn.length)throw Error(p$2(93));sn=sn[0]}_e=sn}_e==null&&(_e=""),sn=_e}$._wrapperState={initialValue:Ra(sn)}}function hb($,_e){var sn=Ra(_e.value),ln=Ra(_e.defaultValue);sn!=null&&(sn=""+sn,sn!==$.value&&($.value=sn),_e.defaultValue==null&&$.defaultValue!==sn&&($.defaultValue=sn)),ln!=null&&($.defaultValue=""+ln)}function ib($){var _e=$.textContent;_e===$._wrapperState.initialValue&&_e!==""&&_e!==null&&($.value=_e)}function jb($){switch($){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kb($,_e){return $==null||$==="http://www.w3.org/1999/xhtml"?jb(_e):$==="http://www.w3.org/2000/svg"&&_e==="foreignObject"?"http://www.w3.org/1999/xhtml":$}var lb,mb=function($){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(_e,sn,ln,mn){MSApp.execUnsafeLocalFunction(function(){return $(_e,sn,ln,mn)})}:$}(function($,_e){if($.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in $)$.innerHTML=_e;else{for(lb=lb||document.createElement("div"),lb.innerHTML="<svg>"+_e.valueOf().toString()+"</svg>",_e=lb.firstChild;$.firstChild;)$.removeChild($.firstChild);for(;_e.firstChild;)$.appendChild(_e.firstChild)}});function nb($,_e){if(_e){var sn=$.firstChild;if(sn&&sn===$.lastChild&&sn.nodeType===3){sn.nodeValue=_e;return}}$.textContent=_e}var ob={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pb=["Webkit","ms","Moz","O"];Object.keys(ob).forEach(function($){pb.forEach(function(_e){_e=_e+$.charAt(0).toUpperCase()+$.substring(1),ob[_e]=ob[$]})});function qb($,_e,sn){return _e==null||typeof _e=="boolean"||_e===""?"":sn||typeof _e!="number"||_e===0||ob.hasOwnProperty($)&&ob[$]?(""+_e).trim():_e+"px"}function rb($,_e){$=$.style;for(var sn in _e)if(_e.hasOwnProperty(sn)){var ln=sn.indexOf("--")===0,mn=qb(sn,_e[sn],ln);sn==="float"&&(sn="cssFloat"),ln?$.setProperty(sn,mn):$[sn]=mn}}var sb=A$1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tb($,_e){if(_e){if(sb[$]&&(_e.children!=null||_e.dangerouslySetInnerHTML!=null))throw Error(p$2(137,$));if(_e.dangerouslySetInnerHTML!=null){if(_e.children!=null)throw Error(p$2(60));if(typeof _e.dangerouslySetInnerHTML!="object"||!("__html"in _e.dangerouslySetInnerHTML))throw Error(p$2(61))}if(_e.style!=null&&typeof _e.style!="object")throw Error(p$2(62))}}function ub($,_e){if($.indexOf("-")===-1)return typeof _e.is=="string";switch($){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vb=null;function wb($){return $=$.target||$.srcElement||window,$.correspondingUseElement&&($=$.correspondingUseElement),$.nodeType===3?$.parentNode:$}var xb=null,yb=null,zb=null;function Ab($){if($=Bb($)){if(typeof xb!="function")throw Error(p$2(280));var _e=$.stateNode;_e&&(_e=Cb(_e),xb($.stateNode,$.type,_e))}}function Db($){yb?zb?zb.push($):zb=[$]:yb=$}function Eb(){if(yb){var $=yb,_e=zb;if(zb=yb=null,Ab($),_e)for($=0;$<_e.length;$++)Ab(_e[$])}}function Fb($,_e){return $(_e)}function Gb(){}var Hb=!1;function Ib($,_e,sn){if(Hb)return $(_e,sn);Hb=!0;try{return Fb($,_e,sn)}finally{Hb=!1,(yb!==null||zb!==null)&&(Gb(),Eb())}}function Jb($,_e){var sn=$.stateNode;if(sn===null)return null;var ln=Cb(sn);if(ln===null)return null;sn=ln[_e];e:switch(_e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(ln=!ln.disabled)||($=$.type,ln=!($==="button"||$==="input"||$==="select"||$==="textarea")),$=!ln;break e;default:$=!1}if($)return null;if(sn&&typeof sn!="function")throw Error(p$2(231,_e,typeof sn));return sn}var Kb=!1;if(ia)try{var Lb={};Object.defineProperty(Lb,"passive",{get:function(){Kb=!0}}),window.addEventListener("test",Lb,Lb),window.removeEventListener("test",Lb,Lb)}catch{Kb=!1}function Mb($,_e,sn,ln,mn,_n,yn,Tn,wn){var On=Array.prototype.slice.call(arguments,3);try{_e.apply(sn,On)}catch(Dn){this.onError(Dn)}}var Nb=!1,Ob=null,Pb=!1,Qb=null,Rb={onError:function($){Nb=!0,Ob=$}};function Sb($,_e,sn,ln,mn,_n,yn,Tn,wn){Nb=!1,Ob=null,Mb.apply(Rb,arguments)}function Tb($,_e,sn,ln,mn,_n,yn,Tn,wn){if(Sb.apply(this,arguments),Nb){if(Nb){var On=Ob;Nb=!1,Ob=null}else throw Error(p$2(198));Pb||(Pb=!0,Qb=On)}}function Ub($){var _e=$,sn=$;if($.alternate)for(;_e.return;)_e=_e.return;else{$=_e;do _e=$,(_e.flags&4098)!==0&&(sn=_e.return),$=_e.return;while($)}return _e.tag===3?sn:null}function Vb($){if($.tag===13){var _e=$.memoizedState;if(_e===null&&($=$.alternate,$!==null&&(_e=$.memoizedState)),_e!==null)return _e.dehydrated}return null}function Wb($){if(Ub($)!==$)throw Error(p$2(188))}function Xb($){var _e=$.alternate;if(!_e){if(_e=Ub($),_e===null)throw Error(p$2(188));return _e!==$?null:$}for(var sn=$,ln=_e;;){var mn=sn.return;if(mn===null)break;var _n=mn.alternate;if(_n===null){if(ln=mn.return,ln!==null){sn=ln;continue}break}if(mn.child===_n.child){for(_n=mn.child;_n;){if(_n===sn)return Wb(mn),$;if(_n===ln)return Wb(mn),_e;_n=_n.sibling}throw Error(p$2(188))}if(sn.return!==ln.return)sn=mn,ln=_n;else{for(var yn=!1,Tn=mn.child;Tn;){if(Tn===sn){yn=!0,sn=mn,ln=_n;break}if(Tn===ln){yn=!0,ln=mn,sn=_n;break}Tn=Tn.sibling}if(!yn){for(Tn=_n.child;Tn;){if(Tn===sn){yn=!0,sn=_n,ln=mn;break}if(Tn===ln){yn=!0,ln=_n,sn=mn;break}Tn=Tn.sibling}if(!yn)throw Error(p$2(189))}}if(sn.alternate!==ln)throw Error(p$2(190))}if(sn.tag!==3)throw Error(p$2(188));return sn.stateNode.current===sn?$:_e}function Yb($){return $=Xb($),$!==null?Zb($):null}function Zb($){if($.tag===5||$.tag===6)return $;for($=$.child;$!==null;){var _e=Zb($);if(_e!==null)return _e;$=$.sibling}return null}var $b=ba.unstable_scheduleCallback,ac=ba.unstable_cancelCallback,bc=ba.unstable_shouldYield,cc=ba.unstable_requestPaint,B$1=ba.unstable_now,dc=ba.unstable_getCurrentPriorityLevel,ec=ba.unstable_ImmediatePriority,fc=ba.unstable_UserBlockingPriority,gc=ba.unstable_NormalPriority,hc=ba.unstable_LowPriority,ic=ba.unstable_IdlePriority,jc=null,kc=null;function lc($){if(kc&&typeof kc.onCommitFiberRoot=="function")try{kc.onCommitFiberRoot(jc,$,void 0,($.current.flags&128)===128)}catch{}}var nc=Math.clz32?Math.clz32:mc,oc=Math.log,pc=Math.LN2;function mc($){return $>>>=0,$===0?32:31-(oc($)/pc|0)|0}var qc=64,rc=4194304;function sc($){switch($&-$){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return $&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return $&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return $}}function tc($,_e){var sn=$.pendingLanes;if(sn===0)return 0;var ln=0,mn=$.suspendedLanes,_n=$.pingedLanes,yn=sn&268435455;if(yn!==0){var Tn=yn&~mn;Tn!==0?ln=sc(Tn):(_n&=yn,_n!==0&&(ln=sc(_n)))}else yn=sn&~mn,yn!==0?ln=sc(yn):_n!==0&&(ln=sc(_n));if(ln===0)return 0;if(_e!==0&&_e!==ln&&(_e&mn)===0&&(mn=ln&-ln,_n=_e&-_e,mn>=_n||mn===16&&(_n&4194240)!==0))return _e;if((ln&4)!==0&&(ln|=sn&16),_e=$.entangledLanes,_e!==0)for($=$.entanglements,_e&=ln;0<_e;)sn=31-nc(_e),mn=1<<sn,ln|=$[sn],_e&=~mn;return ln}function uc($,_e){switch($){case 1:case 2:case 4:return _e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return _e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vc($,_e){for(var sn=$.suspendedLanes,ln=$.pingedLanes,mn=$.expirationTimes,_n=$.pendingLanes;0<_n;){var yn=31-nc(_n),Tn=1<<yn,wn=mn[yn];wn===-1?((Tn&sn)===0||(Tn&ln)!==0)&&(mn[yn]=uc(Tn,_e)):wn<=_e&&($.expiredLanes|=Tn),_n&=~Tn}}function wc($){return $=$.pendingLanes&-1073741825,$!==0?$:$&1073741824?1073741824:0}function xc(){var $=qc;return qc<<=1,(qc&4194240)===0&&(qc=64),$}function yc($){for(var _e=[],sn=0;31>sn;sn++)_e.push($);return _e}function zc($,_e,sn){$.pendingLanes|=_e,_e!==536870912&&($.suspendedLanes=0,$.pingedLanes=0),$=$.eventTimes,_e=31-nc(_e),$[_e]=sn}function Ac($,_e){var sn=$.pendingLanes&~_e;$.pendingLanes=_e,$.suspendedLanes=0,$.pingedLanes=0,$.expiredLanes&=_e,$.mutableReadLanes&=_e,$.entangledLanes&=_e,_e=$.entanglements;var ln=$.eventTimes;for($=$.expirationTimes;0<sn;){var mn=31-nc(sn),_n=1<<mn;_e[mn]=0,ln[mn]=-1,$[mn]=-1,sn&=~_n}}function Bc($,_e){var sn=$.entangledLanes|=_e;for($=$.entanglements;sn;){var ln=31-nc(sn),mn=1<<ln;mn&_e|$[ln]&_e&&($[ln]|=_e),sn&=~mn}}var C=0;function Cc($){return $&=-$,1<$?4<$?($&268435455)!==0?16:536870912:4:1}var Dc,Ec,Fc,Gc,Hc,Ic=!1,Jc=[],Kc=null,Lc=null,Mc=null,Nc=new Map,Oc=new Map,Pc=[],Qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rc($,_e){switch($){case"focusin":case"focusout":Kc=null;break;case"dragenter":case"dragleave":Lc=null;break;case"mouseover":case"mouseout":Mc=null;break;case"pointerover":case"pointerout":Nc.delete(_e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oc.delete(_e.pointerId)}}function Sc($,_e,sn,ln,mn,_n){return $===null||$.nativeEvent!==_n?($={blockedOn:_e,domEventName:sn,eventSystemFlags:ln,nativeEvent:_n,targetContainers:[mn]},_e!==null&&(_e=Bb(_e),_e!==null&&Ec(_e)),$):($.eventSystemFlags|=ln,_e=$.targetContainers,mn!==null&&_e.indexOf(mn)===-1&&_e.push(mn),$)}function Tc($,_e,sn,ln,mn){switch(_e){case"focusin":return Kc=Sc(Kc,$,_e,sn,ln,mn),!0;case"dragenter":return Lc=Sc(Lc,$,_e,sn,ln,mn),!0;case"mouseover":return Mc=Sc(Mc,$,_e,sn,ln,mn),!0;case"pointerover":var _n=mn.pointerId;return Nc.set(_n,Sc(Nc.get(_n)||null,$,_e,sn,ln,mn)),!0;case"gotpointercapture":return _n=mn.pointerId,Oc.set(_n,Sc(Oc.get(_n)||null,$,_e,sn,ln,mn)),!0}return!1}function Uc($){var _e=Vc($.target);if(_e!==null){var sn=Ub(_e);if(sn!==null){if(_e=sn.tag,_e===13){if(_e=Vb(sn),_e!==null){$.blockedOn=_e,Hc($.priority,function(){Fc(sn)});return}}else if(_e===3&&sn.stateNode.current.memoizedState.isDehydrated){$.blockedOn=sn.tag===3?sn.stateNode.containerInfo:null;return}}}$.blockedOn=null}function Wc($){if($.blockedOn!==null)return!1;for(var _e=$.targetContainers;0<_e.length;){var sn=Xc($.domEventName,$.eventSystemFlags,_e[0],$.nativeEvent);if(sn===null){sn=$.nativeEvent;var ln=new sn.constructor(sn.type,sn);vb=ln,sn.target.dispatchEvent(ln),vb=null}else return _e=Bb(sn),_e!==null&&Ec(_e),$.blockedOn=sn,!1;_e.shift()}return!0}function Yc($,_e,sn){Wc($)&&sn.delete(_e)}function Zc(){Ic=!1,Kc!==null&&Wc(Kc)&&(Kc=null),Lc!==null&&Wc(Lc)&&(Lc=null),Mc!==null&&Wc(Mc)&&(Mc=null),Nc.forEach(Yc),Oc.forEach(Yc)}function $c($,_e){$.blockedOn===_e&&($.blockedOn=null,Ic||(Ic=!0,ba.unstable_scheduleCallback(ba.unstable_NormalPriority,Zc)))}function ad($){function _e(mn){return $c(mn,$)}if(0<Jc.length){$c(Jc[0],$);for(var sn=1;sn<Jc.length;sn++){var ln=Jc[sn];ln.blockedOn===$&&(ln.blockedOn=null)}}for(Kc!==null&&$c(Kc,$),Lc!==null&&$c(Lc,$),Mc!==null&&$c(Mc,$),Nc.forEach(_e),Oc.forEach(_e),sn=0;sn<Pc.length;sn++)ln=Pc[sn],ln.blockedOn===$&&(ln.blockedOn=null);for(;0<Pc.length&&(sn=Pc[0],sn.blockedOn===null);)Uc(sn),sn.blockedOn===null&&Pc.shift()}var bd=ta.ReactCurrentBatchConfig,cd=!0;function dd($,_e,sn,ln){var mn=C,_n=bd.transition;bd.transition=null;try{C=1,ed($,_e,sn,ln)}finally{C=mn,bd.transition=_n}}function fd($,_e,sn,ln){var mn=C,_n=bd.transition;bd.transition=null;try{C=4,ed($,_e,sn,ln)}finally{C=mn,bd.transition=_n}}function ed($,_e,sn,ln){if(cd){var mn=Xc($,_e,sn,ln);if(mn===null)gd($,_e,ln,hd,sn),Rc($,ln);else if(Tc(mn,$,_e,sn,ln))ln.stopPropagation();else if(Rc($,ln),_e&4&&-1<Qc.indexOf($)){for(;mn!==null;){var _n=Bb(mn);if(_n!==null&&Dc(_n),_n=Xc($,_e,sn,ln),_n===null&&gd($,_e,ln,hd,sn),_n===mn)break;mn=_n}mn!==null&&ln.stopPropagation()}else gd($,_e,ln,null,sn)}}var hd=null;function Xc($,_e,sn,ln){if(hd=null,$=wb(ln),$=Vc($),$!==null)if(_e=Ub($),_e===null)$=null;else if(sn=_e.tag,sn===13){if($=Vb(_e),$!==null)return $;$=null}else if(sn===3){if(_e.stateNode.current.memoizedState.isDehydrated)return _e.tag===3?_e.stateNode.containerInfo:null;$=null}else _e!==$&&($=null);return hd=$,null}function id($){switch($){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dc()){case ec:return 1;case fc:return 4;case gc:case hc:return 16;case ic:return 536870912;default:return 16}default:return 16}}var jd=null,kd=null,ld=null;function md(){if(ld)return ld;var $,_e=kd,sn=_e.length,ln,mn="value"in jd?jd.value:jd.textContent,_n=mn.length;for($=0;$<sn&&_e[$]===mn[$];$++);var yn=sn-$;for(ln=1;ln<=yn&&_e[sn-ln]===mn[_n-ln];ln++);return ld=mn.slice($,1<ln?1-ln:void 0)}function nd($){var _e=$.keyCode;return"charCode"in $?($=$.charCode,$===0&&_e===13&&($=13)):$=_e,$===10&&($=13),32<=$||$===13?$:0}function od(){return!0}function pd(){return!1}function qd($){function _e(sn,ln,mn,_n,yn){this._reactName=sn,this._targetInst=mn,this.type=ln,this.nativeEvent=_n,this.target=yn,this.currentTarget=null;for(var Tn in $)$.hasOwnProperty(Tn)&&(sn=$[Tn],this[Tn]=sn?sn(_n):_n[Tn]);return this.isDefaultPrevented=(_n.defaultPrevented!=null?_n.defaultPrevented:_n.returnValue===!1)?od:pd,this.isPropagationStopped=pd,this}return A$1(_e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var sn=this.nativeEvent;sn&&(sn.preventDefault?sn.preventDefault():typeof sn.returnValue!="unknown"&&(sn.returnValue=!1),this.isDefaultPrevented=od)},stopPropagation:function(){var sn=this.nativeEvent;sn&&(sn.stopPropagation?sn.stopPropagation():typeof sn.cancelBubble!="unknown"&&(sn.cancelBubble=!0),this.isPropagationStopped=od)},persist:function(){},isPersistent:od}),_e}var rd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function($){return $.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=qd(rd),td=A$1({},rd,{view:0,detail:0}),ud=qd(td),vd,wd,xd,zd=A$1({},td,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function($){return $.relatedTarget===void 0?$.fromElement===$.srcElement?$.toElement:$.fromElement:$.relatedTarget},movementX:function($){return"movementX"in $?$.movementX:($!==xd&&(xd&&$.type==="mousemove"?(vd=$.screenX-xd.screenX,wd=$.screenY-xd.screenY):wd=vd=0,xd=$),vd)},movementY:function($){return"movementY"in $?$.movementY:wd}}),Ad=qd(zd),Bd=A$1({},zd,{dataTransfer:0}),Cd=qd(Bd),Dd=A$1({},td,{relatedTarget:0}),Ed=qd(Dd),Fd=A$1({},rd,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=qd(Fd),Hd=A$1({},rd,{clipboardData:function($){return"clipboardData"in $?$.clipboardData:window.clipboardData}}),Id=qd(Hd),Jd=A$1({},rd,{data:0}),Kd=qd(Jd),Ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Od($){var _e=this.nativeEvent;return _e.getModifierState?_e.getModifierState($):($=Nd[$])?!!_e[$]:!1}function yd(){return Od}var Pd=A$1({},td,{key:function($){if($.key){var _e=Ld[$.key]||$.key;if(_e!=="Unidentified")return _e}return $.type==="keypress"?($=nd($),$===13?"Enter":String.fromCharCode($)):$.type==="keydown"||$.type==="keyup"?Md[$.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function($){return $.type==="keypress"?nd($):0},keyCode:function($){return $.type==="keydown"||$.type==="keyup"?$.keyCode:0},which:function($){return $.type==="keypress"?nd($):$.type==="keydown"||$.type==="keyup"?$.keyCode:0}}),Qd=qd(Pd),Rd=A$1({},zd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=qd(Rd),Td=A$1({},td,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),Ud=qd(Td),Vd=A$1({},rd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=qd(Vd),Xd=A$1({},zd,{deltaX:function($){return"deltaX"in $?$.deltaX:"wheelDeltaX"in $?-$.wheelDeltaX:0},deltaY:function($){return"deltaY"in $?$.deltaY:"wheelDeltaY"in $?-$.wheelDeltaY:"wheelDelta"in $?-$.wheelDelta:0},deltaZ:0,deltaMode:0}),Yd=qd(Xd),Zd=[9,13,27,32],$d=ia&&"CompositionEvent"in window,ae=null;ia&&"documentMode"in document&&(ae=document.documentMode);var be=ia&&"TextEvent"in window&&!ae,ce=ia&&(!$d||ae&&8<ae&&11>=ae),de=String.fromCharCode(32),ee=!1;function fe($,_e){switch($){case"keyup":return Zd.indexOf(_e.keyCode)!==-1;case"keydown":return _e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ge($){return $=$.detail,typeof $=="object"&&"data"in $?$.data:null}var he=!1;function ie($,_e){switch($){case"compositionend":return ge(_e);case"keypress":return _e.which!==32?null:(ee=!0,de);case"textInput":return $=_e.data,$===de&&ee?null:$;default:return null}}function je($,_e){if(he)return $==="compositionend"||!$d&&fe($,_e)?($=md(),ld=kd=jd=null,he=!1,$):null;switch($){case"paste":return null;case"keypress":if(!(_e.ctrlKey||_e.altKey||_e.metaKey)||_e.ctrlKey&&_e.altKey){if(_e.char&&1<_e.char.length)return _e.char;if(_e.which)return String.fromCharCode(_e.which)}return null;case"compositionend":return ce&&_e.locale!=="ko"?null:_e.data;default:return null}}var ke={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function le($){var _e=$&&$.nodeName&&$.nodeName.toLowerCase();return _e==="input"?!!ke[$.type]:_e==="textarea"}function me($,_e,sn,ln){Db(ln),_e=ne(_e,"onChange"),0<_e.length&&(sn=new sd("onChange","change",null,sn,ln),$.push({event:sn,listeners:_e}))}var oe=null,pe=null;function qe($){re($,0)}function se($){var _e=te($);if(Va(_e))return $}function ue($,_e){if($==="change")return _e}var ve=!1;if(ia){var we;if(ia){var xe="oninput"in document;if(!xe){var ye=document.createElement("div");ye.setAttribute("oninput","return;"),xe=typeof ye.oninput=="function"}we=xe}else we=!1;ve=we&&(!document.documentMode||9<document.documentMode)}function ze(){oe&&(oe.detachEvent("onpropertychange",Ae),pe=oe=null)}function Ae($){if($.propertyName==="value"&&se(pe)){var _e=[];me(_e,pe,$,wb($)),Ib(qe,_e)}}function Be($,_e,sn){$==="focusin"?(ze(),oe=_e,pe=sn,oe.attachEvent("onpropertychange",Ae)):$==="focusout"&&ze()}function Ce($){if($==="selectionchange"||$==="keyup"||$==="keydown")return se(pe)}function De($,_e){if($==="click")return se(_e)}function Ee($,_e){if($==="input"||$==="change")return se(_e)}function Fe($,_e){return $===_e&&($!==0||1/$===1/_e)||$!==$&&_e!==_e}var Ge=typeof Object.is=="function"?Object.is:Fe;function He($,_e){if(Ge($,_e))return!0;if(typeof $!="object"||$===null||typeof _e!="object"||_e===null)return!1;var sn=Object.keys($),ln=Object.keys(_e);if(sn.length!==ln.length)return!1;for(ln=0;ln<sn.length;ln++){var mn=sn[ln];if(!ja.call(_e,mn)||!Ge($[mn],_e[mn]))return!1}return!0}function Ie($){for(;$&&$.firstChild;)$=$.firstChild;return $}function Je($,_e){var sn=Ie($);$=0;for(var ln;sn;){if(sn.nodeType===3){if(ln=$+sn.textContent.length,$<=_e&&ln>=_e)return{node:sn,offset:_e-$};$=ln}e:{for(;sn;){if(sn.nextSibling){sn=sn.nextSibling;break e}sn=sn.parentNode}sn=void 0}sn=Ie(sn)}}function Ke($,_e){return $&&_e?$===_e?!0:$&&$.nodeType===3?!1:_e&&_e.nodeType===3?Ke($,_e.parentNode):"contains"in $?$.contains(_e):$.compareDocumentPosition?!!($.compareDocumentPosition(_e)&16):!1:!1}function Le(){for(var $=window,_e=Wa();_e instanceof $.HTMLIFrameElement;){try{var sn=typeof _e.contentWindow.location.href=="string"}catch{sn=!1}if(sn)$=_e.contentWindow;else break;_e=Wa($.document)}return _e}function Me($){var _e=$&&$.nodeName&&$.nodeName.toLowerCase();return _e&&(_e==="input"&&($.type==="text"||$.type==="search"||$.type==="tel"||$.type==="url"||$.type==="password")||_e==="textarea"||$.contentEditable==="true")}function Ne($){var _e=Le(),sn=$.focusedElem,ln=$.selectionRange;if(_e!==sn&&sn&&sn.ownerDocument&&Ke(sn.ownerDocument.documentElement,sn)){if(ln!==null&&Me(sn)){if(_e=ln.start,$=ln.end,$===void 0&&($=_e),"selectionStart"in sn)sn.selectionStart=_e,sn.selectionEnd=Math.min($,sn.value.length);else if($=(_e=sn.ownerDocument||document)&&_e.defaultView||window,$.getSelection){$=$.getSelection();var mn=sn.textContent.length,_n=Math.min(ln.start,mn);ln=ln.end===void 0?_n:Math.min(ln.end,mn),!$.extend&&_n>ln&&(mn=ln,ln=_n,_n=mn),mn=Je(sn,_n);var yn=Je(sn,ln);mn&&yn&&($.rangeCount!==1||$.anchorNode!==mn.node||$.anchorOffset!==mn.offset||$.focusNode!==yn.node||$.focusOffset!==yn.offset)&&(_e=_e.createRange(),_e.setStart(mn.node,mn.offset),$.removeAllRanges(),_n>ln?($.addRange(_e),$.extend(yn.node,yn.offset)):(_e.setEnd(yn.node,yn.offset),$.addRange(_e)))}}for(_e=[],$=sn;$=$.parentNode;)$.nodeType===1&&_e.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof sn.focus=="function"&&sn.focus(),sn=0;sn<_e.length;sn++)$=_e[sn],$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}var Oe=ia&&"documentMode"in document&&11>=document.documentMode,Pe=null,Qe=null,Re=null,Se=!1;function Te($,_e,sn){var ln=sn.window===sn?sn.document:sn.nodeType===9?sn:sn.ownerDocument;Se||Pe==null||Pe!==Wa(ln)||(ln=Pe,"selectionStart"in ln&&Me(ln)?ln={start:ln.selectionStart,end:ln.selectionEnd}:(ln=(ln.ownerDocument&&ln.ownerDocument.defaultView||window).getSelection(),ln={anchorNode:ln.anchorNode,anchorOffset:ln.anchorOffset,focusNode:ln.focusNode,focusOffset:ln.focusOffset}),Re&&He(Re,ln)||(Re=ln,ln=ne(Qe,"onSelect"),0<ln.length&&(_e=new sd("onSelect","select",null,_e,sn),$.push({event:_e,listeners:ln}),_e.target=Pe)))}function Ue($,_e){var sn={};return sn[$.toLowerCase()]=_e.toLowerCase(),sn["Webkit"+$]="webkit"+_e,sn["Moz"+$]="moz"+_e,sn}var Ve={animationend:Ue("Animation","AnimationEnd"),animationiteration:Ue("Animation","AnimationIteration"),animationstart:Ue("Animation","AnimationStart"),transitionend:Ue("Transition","TransitionEnd")},We={},Xe={};ia&&(Xe=document.createElement("div").style,"AnimationEvent"in window||(delete Ve.animationend.animation,delete Ve.animationiteration.animation,delete Ve.animationstart.animation),"TransitionEvent"in window||delete Ve.transitionend.transition);function Ye($){if(We[$])return We[$];if(!Ve[$])return $;var _e=Ve[$],sn;for(sn in _e)if(_e.hasOwnProperty(sn)&&sn in Xe)return We[$]=_e[sn];return $}var Ze=Ye("animationend"),$e=Ye("animationiteration"),af=Ye("animationstart"),bf=Ye("transitionend"),cf=new Map,df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ef($,_e){cf.set($,_e),fa(_e,[$])}for(var ff=0;ff<df.length;ff++){var gf=df[ff],hf=gf.toLowerCase(),jf=gf[0].toUpperCase()+gf.slice(1);ef(hf,"on"+jf)}ef(Ze,"onAnimationEnd");ef($e,"onAnimationIteration");ef(af,"onAnimationStart");ef("dblclick","onDoubleClick");ef("focusin","onFocus");ef("focusout","onBlur");ef(bf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));function mf($,_e,sn){var ln=$.type||"unknown-event";$.currentTarget=sn,Tb(ln,_e,void 0,$),$.currentTarget=null}function re($,_e){_e=(_e&4)!==0;for(var sn=0;sn<$.length;sn++){var ln=$[sn],mn=ln.event;ln=ln.listeners;e:{var _n=void 0;if(_e)for(var yn=ln.length-1;0<=yn;yn--){var Tn=ln[yn],wn=Tn.instance,On=Tn.currentTarget;if(Tn=Tn.listener,wn!==_n&&mn.isPropagationStopped())break e;mf(mn,Tn,On),_n=wn}else for(yn=0;yn<ln.length;yn++){if(Tn=ln[yn],wn=Tn.instance,On=Tn.currentTarget,Tn=Tn.listener,wn!==_n&&mn.isPropagationStopped())break e;mf(mn,Tn,On),_n=wn}}}if(Pb)throw $=Qb,Pb=!1,Qb=null,$}function D$1($,_e){var sn=_e[nf];sn===void 0&&(sn=_e[nf]=new Set);var ln=$+"__bubble";sn.has(ln)||(of(_e,$,2,!1),sn.add(ln))}function pf($,_e,sn){var ln=0;_e&&(ln|=4),of(sn,$,ln,_e)}var qf="_reactListening"+Math.random().toString(36).slice(2);function rf($){if(!$[qf]){$[qf]=!0,da.forEach(function(sn){sn!=="selectionchange"&&(lf.has(sn)||pf(sn,!1,$),pf(sn,!0,$))});var _e=$.nodeType===9?$:$.ownerDocument;_e===null||_e[qf]||(_e[qf]=!0,pf("selectionchange",!1,_e))}}function of($,_e,sn,ln){switch(id(_e)){case 1:var mn=dd;break;case 4:mn=fd;break;default:mn=ed}sn=mn.bind(null,_e,sn,$),mn=void 0,!Kb||_e!=="touchstart"&&_e!=="touchmove"&&_e!=="wheel"||(mn=!0),ln?mn!==void 0?$.addEventListener(_e,sn,{capture:!0,passive:mn}):$.addEventListener(_e,sn,!0):mn!==void 0?$.addEventListener(_e,sn,{passive:mn}):$.addEventListener(_e,sn,!1)}function gd($,_e,sn,ln,mn){var _n=ln;if((_e&1)===0&&(_e&2)===0&&ln!==null)e:for(;;){if(ln===null)return;var yn=ln.tag;if(yn===3||yn===4){var Tn=ln.stateNode.containerInfo;if(Tn===mn||Tn.nodeType===8&&Tn.parentNode===mn)break;if(yn===4)for(yn=ln.return;yn!==null;){var wn=yn.tag;if((wn===3||wn===4)&&(wn=yn.stateNode.containerInfo,wn===mn||wn.nodeType===8&&wn.parentNode===mn))return;yn=yn.return}for(;Tn!==null;){if(yn=Vc(Tn),yn===null)return;if(wn=yn.tag,wn===5||wn===6){ln=_n=yn;continue e}Tn=Tn.parentNode}}ln=ln.return}Ib(function(){var On=_n,Dn=wb(sn),Nn=[];e:{var An=cf.get($);if(An!==void 0){var In=sd,Un=$;switch($){case"keypress":if(nd(sn)===0)break e;case"keydown":case"keyup":In=Qd;break;case"focusin":Un="focus",In=Ed;break;case"focusout":Un="blur",In=Ed;break;case"beforeblur":case"afterblur":In=Ed;break;case"click":if(sn.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":In=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":In=Cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":In=Ud;break;case Ze:case $e:case af:In=Gd;break;case bf:In=Wd;break;case"scroll":In=ud;break;case"wheel":In=Yd;break;case"copy":case"cut":case"paste":In=Id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":In=Sd}var Ln=(_e&4)!==0,qn=!Ln&&$==="scroll",kn=Ln?An!==null?An+"Capture":null:An;Ln=[];for(var xn=On,$n;xn!==null;){$n=xn;var zn=$n.stateNode;if($n.tag===5&&zn!==null&&($n=zn,kn!==null&&(zn=Jb(xn,kn),zn!=null&&Ln.push(sf(xn,zn,$n)))),qn)break;xn=xn.return}0<Ln.length&&(An=new In(An,Un,null,sn,Dn),Nn.push({event:An,listeners:Ln}))}}if((_e&7)===0){e:{if(An=$==="mouseover"||$==="pointerover",In=$==="mouseout"||$==="pointerout",An&&sn!==vb&&(Un=sn.relatedTarget||sn.fromElement)&&(Vc(Un)||Un[tf]))break e;if((In||An)&&(An=Dn.window===Dn?Dn:(An=Dn.ownerDocument)?An.defaultView||An.parentWindow:window,In?(Un=sn.relatedTarget||sn.toElement,In=On,Un=Un?Vc(Un):null,Un!==null&&(qn=Ub(Un),Un!==qn||Un.tag!==5&&Un.tag!==6)&&(Un=null)):(In=null,Un=On),In!==Un)){if(Ln=Ad,zn="onMouseLeave",kn="onMouseEnter",xn="mouse",($==="pointerout"||$==="pointerover")&&(Ln=Sd,zn="onPointerLeave",kn="onPointerEnter",xn="pointer"),qn=In==null?An:te(In),$n=Un==null?An:te(Un),An=new Ln(zn,xn+"leave",In,sn,Dn),An.target=qn,An.relatedTarget=$n,zn=null,Vc(Dn)===On&&(Ln=new Ln(kn,xn+"enter",Un,sn,Dn),Ln.target=$n,Ln.relatedTarget=qn,zn=Ln),qn=zn,In&&Un)n:{for(Ln=In,kn=Un,xn=0,$n=Ln;$n;$n=uf($n))xn++;for($n=0,zn=kn;zn;zn=uf(zn))$n++;for(;0<xn-$n;)Ln=uf(Ln),xn--;for(;0<$n-xn;)kn=uf(kn),$n--;for(;xn--;){if(Ln===kn||kn!==null&&Ln===kn.alternate)break n;Ln=uf(Ln),kn=uf(kn)}Ln=null}else Ln=null;In!==null&&vf(Nn,An,In,Ln,!1),Un!==null&&qn!==null&&vf(Nn,qn,Un,Ln,!0)}}e:{if(An=On?te(On):window,In=An.nodeName&&An.nodeName.toLowerCase(),In==="select"||In==="input"&&An.type==="file")var Yn=ue;else if(le(An))if(ve)Yn=Ee;else{Yn=Ce;var nt=Be}else(In=An.nodeName)&&In.toLowerCase()==="input"&&(An.type==="checkbox"||An.type==="radio")&&(Yn=De);if(Yn&&(Yn=Yn($,On))){me(Nn,Yn,sn,Dn);break e}nt&&nt($,An,On),$==="focusout"&&(nt=An._wrapperState)&&nt.controlled&&An.type==="number"&&bb(An,"number",An.value)}switch(nt=On?te(On):window,$){case"focusin":(le(nt)||nt.contentEditable==="true")&&(Pe=nt,Qe=On,Re=null);break;case"focusout":Re=Qe=Pe=null;break;case"mousedown":Se=!0;break;case"contextmenu":case"mouseup":case"dragend":Se=!1,Te(Nn,sn,Dn);break;case"selectionchange":if(Oe)break;case"keydown":case"keyup":Te(Nn,sn,Dn)}var et;if($d)e:{switch($){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else he?fe($,sn)&&(at="onCompositionEnd"):$==="keydown"&&sn.keyCode===229&&(at="onCompositionStart");at&&(ce&&sn.locale!=="ko"&&(he||at!=="onCompositionStart"?at==="onCompositionEnd"&&he&&(et=md()):(jd=Dn,kd="value"in jd?jd.value:jd.textContent,he=!0)),nt=ne(On,at),0<nt.length&&(at=new Kd(at,$,null,sn,Dn),Nn.push({event:at,listeners:nt}),et?at.data=et:(et=ge(sn),et!==null&&(at.data=et)))),(et=be?ie($,sn):je($,sn))&&(On=ne(On,"onBeforeInput"),0<On.length&&(Dn=new Kd("onBeforeInput","beforeinput",null,sn,Dn),Nn.push({event:Dn,listeners:On}),Dn.data=et))}re(Nn,_e)})}function sf($,_e,sn){return{instance:$,listener:_e,currentTarget:sn}}function ne($,_e){for(var sn=_e+"Capture",ln=[];$!==null;){var mn=$,_n=mn.stateNode;mn.tag===5&&_n!==null&&(mn=_n,_n=Jb($,sn),_n!=null&&ln.unshift(sf($,_n,mn)),_n=Jb($,_e),_n!=null&&ln.push(sf($,_n,mn))),$=$.return}return ln}function uf($){if($===null)return null;do $=$.return;while($&&$.tag!==5);return $||null}function vf($,_e,sn,ln,mn){for(var _n=_e._reactName,yn=[];sn!==null&&sn!==ln;){var Tn=sn,wn=Tn.alternate,On=Tn.stateNode;if(wn!==null&&wn===ln)break;Tn.tag===5&&On!==null&&(Tn=On,mn?(wn=Jb(sn,_n),wn!=null&&yn.unshift(sf(sn,wn,Tn))):mn||(wn=Jb(sn,_n),wn!=null&&yn.push(sf(sn,wn,Tn)))),sn=sn.return}yn.length!==0&&$.push({event:_e,listeners:yn})}var wf=/\r\n?/g,xf=/\u0000|\uFFFD/g;function yf($){return(typeof $=="string"?$:""+$).replace(wf,`
`).replace(xf,"")}function zf($,_e,sn){if(_e=yf(_e),yf($)!==_e&&sn)throw Error(p$2(425))}function Af(){}var Bf=null,Cf=null;function Df($,_e){return $==="textarea"||$==="noscript"||typeof _e.children=="string"||typeof _e.children=="number"||typeof _e.dangerouslySetInnerHTML=="object"&&_e.dangerouslySetInnerHTML!==null&&_e.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,Ff=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf!="undefined"?function($){return Gf.resolve(null).then($).catch(Hf)}:Ef;function Hf($){setTimeout(function(){throw $})}function Jf($,_e){var sn=_e,ln=0;do{var mn=sn.nextSibling;if($.removeChild(sn),mn&&mn.nodeType===8)if(sn=mn.data,sn==="/$"){if(ln===0){$.removeChild(mn),ad(_e);return}ln--}else sn!=="$"&&sn!=="$?"&&sn!=="$!"||ln++;sn=mn}while(sn);ad(_e)}function Kf($){for(;$!=null;$=$.nextSibling){var _e=$.nodeType;if(_e===1||_e===3)break;if(_e===8){if(_e=$.data,_e==="$"||_e==="$!"||_e==="$?")break;if(_e==="/$")return null}}return $}function Lf($){$=$.previousSibling;for(var _e=0;$;){if($.nodeType===8){var sn=$.data;if(sn==="$"||sn==="$!"||sn==="$?"){if(_e===0)return $;_e--}else sn==="/$"&&_e++}$=$.previousSibling}return null}var Mf=Math.random().toString(36).slice(2),Nf="__reactFiber$"+Mf,Of="__reactProps$"+Mf,tf="__reactContainer$"+Mf,nf="__reactEvents$"+Mf,Pf="__reactListeners$"+Mf,Qf="__reactHandles$"+Mf;function Vc($){var _e=$[Nf];if(_e)return _e;for(var sn=$.parentNode;sn;){if(_e=sn[tf]||sn[Nf]){if(sn=_e.alternate,_e.child!==null||sn!==null&&sn.child!==null)for($=Lf($);$!==null;){if(sn=$[Nf])return sn;$=Lf($)}return _e}$=sn,sn=$.parentNode}return null}function Bb($){return $=$[Nf]||$[tf],!$||$.tag!==5&&$.tag!==6&&$.tag!==13&&$.tag!==3?null:$}function te($){if($.tag===5||$.tag===6)return $.stateNode;throw Error(p$2(33))}function Cb($){return $[Of]||null}var Rf=[],Sf=-1;function Tf($){return{current:$}}function E$1($){0>Sf||($.current=Rf[Sf],Rf[Sf]=null,Sf--)}function G$1($,_e){Sf++,Rf[Sf]=$.current,$.current=_e}var Uf={},H$1=Tf(Uf),Vf=Tf(!1),Wf=Uf;function Xf($,_e){var sn=$.type.contextTypes;if(!sn)return Uf;var ln=$.stateNode;if(ln&&ln.__reactInternalMemoizedUnmaskedChildContext===_e)return ln.__reactInternalMemoizedMaskedChildContext;var mn={},_n;for(_n in sn)mn[_n]=_e[_n];return ln&&($=$.stateNode,$.__reactInternalMemoizedUnmaskedChildContext=_e,$.__reactInternalMemoizedMaskedChildContext=mn),mn}function Yf($){return $=$.childContextTypes,$!=null}function Zf(){E$1(Vf),E$1(H$1)}function $f($,_e,sn){if(H$1.current!==Uf)throw Error(p$2(168));G$1(H$1,_e),G$1(Vf,sn)}function ag($,_e,sn){var ln=$.stateNode;if(_e=_e.childContextTypes,typeof ln.getChildContext!="function")return sn;ln=ln.getChildContext();for(var mn in ln)if(!(mn in _e))throw Error(p$2(108,Qa($)||"Unknown",mn));return A$1({},sn,ln)}function bg($){return $=($=$.stateNode)&&$.__reactInternalMemoizedMergedChildContext||Uf,Wf=H$1.current,G$1(H$1,$),G$1(Vf,Vf.current),!0}function cg($,_e,sn){var ln=$.stateNode;if(!ln)throw Error(p$2(169));sn?($=ag($,_e,Wf),ln.__reactInternalMemoizedMergedChildContext=$,E$1(Vf),E$1(H$1),G$1(H$1,$)):E$1(Vf),G$1(Vf,sn)}var dg=null,eg=!1,fg=!1;function gg($){dg===null?dg=[$]:dg.push($)}function hg($){eg=!0,gg($)}function ig(){if(!fg&&dg!==null){fg=!0;var $=0,_e=C;try{var sn=dg;for(C=1;$<sn.length;$++){var ln=sn[$];do ln=ln(!0);while(ln!==null)}dg=null,eg=!1}catch(mn){throw dg!==null&&(dg=dg.slice($+1)),$b(ec,ig),mn}finally{C=_e,fg=!1}}return null}var jg=ta.ReactCurrentBatchConfig;function kg($,_e){if($&&$.defaultProps){_e=A$1({},_e),$=$.defaultProps;for(var sn in $)_e[sn]===void 0&&(_e[sn]=$[sn]);return _e}return _e}var lg=Tf(null),mg=null,ng=null,og=null;function pg(){og=ng=mg=null}function qg($){var _e=lg.current;E$1(lg),$._currentValue=_e}function rg($,_e,sn){for(;$!==null;){var ln=$.alternate;if(($.childLanes&_e)!==_e?($.childLanes|=_e,ln!==null&&(ln.childLanes|=_e)):ln!==null&&(ln.childLanes&_e)!==_e&&(ln.childLanes|=_e),$===sn)break;$=$.return}}function sg($,_e){mg=$,og=ng=null,$=$.dependencies,$!==null&&$.firstContext!==null&&(($.lanes&_e)!==0&&(tg=!0),$.firstContext=null)}function ug($){var _e=$._currentValue;if(og!==$)if($={context:$,memoizedValue:_e,next:null},ng===null){if(mg===null)throw Error(p$2(308));ng=$,mg.dependencies={lanes:0,firstContext:$}}else ng=ng.next=$;return _e}var vg=null,wg=!1;function xg($){$.updateQueue={baseState:$.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg($,_e){$=$.updateQueue,_e.updateQueue===$&&(_e.updateQueue={baseState:$.baseState,firstBaseUpdate:$.firstBaseUpdate,lastBaseUpdate:$.lastBaseUpdate,shared:$.shared,effects:$.effects})}function zg($,_e){return{eventTime:$,lane:_e,tag:0,payload:null,callback:null,next:null}}function Ag($,_e){var sn=$.updateQueue;sn!==null&&(sn=sn.shared,Bg($)?($=sn.interleaved,$===null?(_e.next=_e,vg===null?vg=[sn]:vg.push(sn)):(_e.next=$.next,$.next=_e),sn.interleaved=_e):($=sn.pending,$===null?_e.next=_e:(_e.next=$.next,$.next=_e),sn.pending=_e))}function Cg($,_e,sn){if(_e=_e.updateQueue,_e!==null&&(_e=_e.shared,(sn&4194240)!==0)){var ln=_e.lanes;ln&=$.pendingLanes,sn|=ln,_e.lanes=sn,Bc($,sn)}}function Dg($,_e){var sn=$.updateQueue,ln=$.alternate;if(ln!==null&&(ln=ln.updateQueue,sn===ln)){var mn=null,_n=null;if(sn=sn.firstBaseUpdate,sn!==null){do{var yn={eventTime:sn.eventTime,lane:sn.lane,tag:sn.tag,payload:sn.payload,callback:sn.callback,next:null};_n===null?mn=_n=yn:_n=_n.next=yn,sn=sn.next}while(sn!==null);_n===null?mn=_n=_e:_n=_n.next=_e}else mn=_n=_e;sn={baseState:ln.baseState,firstBaseUpdate:mn,lastBaseUpdate:_n,shared:ln.shared,effects:ln.effects},$.updateQueue=sn;return}$=sn.lastBaseUpdate,$===null?sn.firstBaseUpdate=_e:$.next=_e,sn.lastBaseUpdate=_e}function Eg($,_e,sn,ln){var mn=$.updateQueue;wg=!1;var _n=mn.firstBaseUpdate,yn=mn.lastBaseUpdate,Tn=mn.shared.pending;if(Tn!==null){mn.shared.pending=null;var wn=Tn,On=wn.next;wn.next=null,yn===null?_n=On:yn.next=On,yn=wn;var Dn=$.alternate;Dn!==null&&(Dn=Dn.updateQueue,Tn=Dn.lastBaseUpdate,Tn!==yn&&(Tn===null?Dn.firstBaseUpdate=On:Tn.next=On,Dn.lastBaseUpdate=wn))}if(_n!==null){var Nn=mn.baseState;yn=0,Dn=On=wn=null,Tn=_n;do{var An=Tn.lane,In=Tn.eventTime;if((ln&An)===An){Dn!==null&&(Dn=Dn.next={eventTime:In,lane:0,tag:Tn.tag,payload:Tn.payload,callback:Tn.callback,next:null});e:{var Un=$,Ln=Tn;switch(An=_e,In=sn,Ln.tag){case 1:if(Un=Ln.payload,typeof Un=="function"){Nn=Un.call(In,Nn,An);break e}Nn=Un;break e;case 3:Un.flags=Un.flags&-65537|128;case 0:if(Un=Ln.payload,An=typeof Un=="function"?Un.call(In,Nn,An):Un,An==null)break e;Nn=A$1({},Nn,An);break e;case 2:wg=!0}}Tn.callback!==null&&Tn.lane!==0&&($.flags|=64,An=mn.effects,An===null?mn.effects=[Tn]:An.push(Tn))}else In={eventTime:In,lane:An,tag:Tn.tag,payload:Tn.payload,callback:Tn.callback,next:null},Dn===null?(On=Dn=In,wn=Nn):Dn=Dn.next=In,yn|=An;if(Tn=Tn.next,Tn===null){if(Tn=mn.shared.pending,Tn===null)break;An=Tn,Tn=An.next,An.next=null,mn.lastBaseUpdate=An,mn.shared.pending=null}}while(1);if(Dn===null&&(wn=Nn),mn.baseState=wn,mn.firstBaseUpdate=On,mn.lastBaseUpdate=Dn,_e=mn.shared.interleaved,_e!==null){mn=_e;do yn|=mn.lane,mn=mn.next;while(mn!==_e)}else _n===null&&(mn.shared.lanes=0);Fg|=yn,$.lanes=yn,$.memoizedState=Nn}}function Gg($,_e,sn){if($=_e.effects,_e.effects=null,$!==null)for(_e=0;_e<$.length;_e++){var ln=$[_e],mn=ln.callback;if(mn!==null){if(ln.callback=null,ln=sn,typeof mn!="function")throw Error(p$2(191,mn));mn.call(ln)}}}var Hg=new aa.Component().refs;function Ig($,_e,sn,ln){_e=$.memoizedState,sn=sn(ln,_e),sn=sn==null?_e:A$1({},_e,sn),$.memoizedState=sn,$.lanes===0&&($.updateQueue.baseState=sn)}var Mg={isMounted:function($){return($=$._reactInternals)?Ub($)===$:!1},enqueueSetState:function($,_e,sn){$=$._reactInternals;var ln=Jg(),mn=Kg($),_n=zg(ln,mn);_n.payload=_e,sn!=null&&(_n.callback=sn),Ag($,_n),_e=Lg($,mn,ln),_e!==null&&Cg(_e,$,mn)},enqueueReplaceState:function($,_e,sn){$=$._reactInternals;var ln=Jg(),mn=Kg($),_n=zg(ln,mn);_n.tag=1,_n.payload=_e,sn!=null&&(_n.callback=sn),Ag($,_n),_e=Lg($,mn,ln),_e!==null&&Cg(_e,$,mn)},enqueueForceUpdate:function($,_e){$=$._reactInternals;var sn=Jg(),ln=Kg($),mn=zg(sn,ln);mn.tag=2,_e!=null&&(mn.callback=_e),Ag($,mn),_e=Lg($,ln,sn),_e!==null&&Cg(_e,$,ln)}};function Ng($,_e,sn,ln,mn,_n,yn){return $=$.stateNode,typeof $.shouldComponentUpdate=="function"?$.shouldComponentUpdate(ln,_n,yn):_e.prototype&&_e.prototype.isPureReactComponent?!He(sn,ln)||!He(mn,_n):!0}function Og($,_e,sn){var ln=!1,mn=Uf,_n=_e.contextType;return typeof _n=="object"&&_n!==null?_n=ug(_n):(mn=Yf(_e)?Wf:H$1.current,ln=_e.contextTypes,_n=(ln=ln!=null)?Xf($,mn):Uf),_e=new _e(sn,_n),$.memoizedState=_e.state!==null&&_e.state!==void 0?_e.state:null,_e.updater=Mg,$.stateNode=_e,_e._reactInternals=$,ln&&($=$.stateNode,$.__reactInternalMemoizedUnmaskedChildContext=mn,$.__reactInternalMemoizedMaskedChildContext=_n),_e}function Pg($,_e,sn,ln){$=_e.state,typeof _e.componentWillReceiveProps=="function"&&_e.componentWillReceiveProps(sn,ln),typeof _e.UNSAFE_componentWillReceiveProps=="function"&&_e.UNSAFE_componentWillReceiveProps(sn,ln),_e.state!==$&&Mg.enqueueReplaceState(_e,_e.state,null)}function Qg($,_e,sn,ln){var mn=$.stateNode;mn.props=sn,mn.state=$.memoizedState,mn.refs=Hg,xg($);var _n=_e.contextType;typeof _n=="object"&&_n!==null?mn.context=ug(_n):(_n=Yf(_e)?Wf:H$1.current,mn.context=Xf($,_n)),mn.state=$.memoizedState,_n=_e.getDerivedStateFromProps,typeof _n=="function"&&(Ig($,_e,_n,sn),mn.state=$.memoizedState),typeof _e.getDerivedStateFromProps=="function"||typeof mn.getSnapshotBeforeUpdate=="function"||typeof mn.UNSAFE_componentWillMount!="function"&&typeof mn.componentWillMount!="function"||(_e=mn.state,typeof mn.componentWillMount=="function"&&mn.componentWillMount(),typeof mn.UNSAFE_componentWillMount=="function"&&mn.UNSAFE_componentWillMount(),_e!==mn.state&&Mg.enqueueReplaceState(mn,mn.state,null),Eg($,sn,mn,ln),mn.state=$.memoizedState),typeof mn.componentDidMount=="function"&&($.flags|=4194308)}var Rg=[],Sg=0,Tg=null,Ug=0,Vg=[],Wg=0,Xg=null,Yg=1,Zg="";function $g($,_e){Rg[Sg++]=Ug,Rg[Sg++]=Tg,Tg=$,Ug=_e}function ah($,_e,sn){Vg[Wg++]=Yg,Vg[Wg++]=Zg,Vg[Wg++]=Xg,Xg=$;var ln=Yg;$=Zg;var mn=32-nc(ln)-1;ln&=~(1<<mn),sn+=1;var _n=32-nc(_e)+mn;if(30<_n){var yn=mn-mn%5;_n=(ln&(1<<yn)-1).toString(32),ln>>=yn,mn-=yn,Yg=1<<32-nc(_e)+mn|sn<<mn|ln,Zg=_n+$}else Yg=1<<_n|sn<<mn|ln,Zg=$}function bh($){$.return!==null&&($g($,1),ah($,1,0))}function ch($){for(;$===Tg;)Tg=Rg[--Sg],Rg[Sg]=null,Ug=Rg[--Sg],Rg[Sg]=null;for(;$===Xg;)Xg=Vg[--Wg],Vg[Wg]=null,Zg=Vg[--Wg],Vg[Wg]=null,Yg=Vg[--Wg],Vg[Wg]=null}var dh=null,eh=null,I$1=!1,fh=null;function gh($,_e){var sn=hh(5,null,null,0);sn.elementType="DELETED",sn.stateNode=_e,sn.return=$,_e=$.deletions,_e===null?($.deletions=[sn],$.flags|=16):_e.push(sn)}function ih($,_e){switch($.tag){case 5:var sn=$.type;return _e=_e.nodeType!==1||sn.toLowerCase()!==_e.nodeName.toLowerCase()?null:_e,_e!==null?($.stateNode=_e,dh=$,eh=Kf(_e.firstChild),!0):!1;case 6:return _e=$.pendingProps===""||_e.nodeType!==3?null:_e,_e!==null?($.stateNode=_e,dh=$,eh=null,!0):!1;case 13:return _e=_e.nodeType!==8?null:_e,_e!==null?(sn=Xg!==null?{id:Yg,overflow:Zg}:null,$.memoizedState={dehydrated:_e,treeContext:sn,retryLane:1073741824},sn=hh(18,null,null,0),sn.stateNode=_e,sn.return=$,$.child=sn,dh=$,eh=null,!0):!1;default:return!1}}function jh($){return($.mode&1)!==0&&($.flags&128)===0}function kh($){if(I$1){var _e=eh;if(_e){var sn=_e;if(!ih($,_e)){if(jh($))throw Error(p$2(418));_e=Kf(sn.nextSibling);var ln=dh;_e&&ih($,_e)?gh(ln,sn):($.flags=$.flags&-4097|2,I$1=!1,dh=$)}}else{if(jh($))throw Error(p$2(418));$.flags=$.flags&-4097|2,I$1=!1,dh=$}}}function lh($){for($=$.return;$!==null&&$.tag!==5&&$.tag!==3&&$.tag!==13;)$=$.return;dh=$}function mh($){if($!==dh)return!1;if(!I$1)return lh($),I$1=!0,!1;var _e;if((_e=$.tag!==3)&&!(_e=$.tag!==5)&&(_e=$.type,_e=_e!=="head"&&_e!=="body"&&!Df($.type,$.memoizedProps)),_e&&(_e=eh)){if(jh($)){for($=eh;$;)$=Kf($.nextSibling);throw Error(p$2(418))}for(;_e;)gh($,_e),_e=Kf(_e.nextSibling)}if(lh($),$.tag===13){if($=$.memoizedState,$=$!==null?$.dehydrated:null,!$)throw Error(p$2(317));e:{for($=$.nextSibling,_e=0;$;){if($.nodeType===8){var sn=$.data;if(sn==="/$"){if(_e===0){eh=Kf($.nextSibling);break e}_e--}else sn!=="$"&&sn!=="$!"&&sn!=="$?"||_e++}$=$.nextSibling}eh=null}}else eh=dh?Kf($.stateNode.nextSibling):null;return!0}function nh(){eh=dh=null,I$1=!1}function oh($){fh===null?fh=[$]:fh.push($)}function ph($,_e,sn){if($=sn.ref,$!==null&&typeof $!="function"&&typeof $!="object"){if(sn._owner){if(sn=sn._owner,sn){if(sn.tag!==1)throw Error(p$2(309));var ln=sn.stateNode}if(!ln)throw Error(p$2(147,$));var mn=ln,_n=""+$;return _e!==null&&_e.ref!==null&&typeof _e.ref=="function"&&_e.ref._stringRef===_n?_e.ref:(_e=function(yn){var Tn=mn.refs;Tn===Hg&&(Tn=mn.refs={}),yn===null?delete Tn[_n]:Tn[_n]=yn},_e._stringRef=_n,_e)}if(typeof $!="string")throw Error(p$2(284));if(!sn._owner)throw Error(p$2(290,$))}return $}function qh($,_e){throw $=Object.prototype.toString.call(_e),Error(p$2(31,$==="[object Object]"?"object with keys {"+Object.keys(_e).join(", ")+"}":$))}function rh($){var _e=$._init;return _e($._payload)}function sh($){function _e(kn,xn){if($){var $n=kn.deletions;$n===null?(kn.deletions=[xn],kn.flags|=16):$n.push(xn)}}function sn(kn,xn){if(!$)return null;for(;xn!==null;)_e(kn,xn),xn=xn.sibling;return null}function ln(kn,xn){for(kn=new Map;xn!==null;)xn.key!==null?kn.set(xn.key,xn):kn.set(xn.index,xn),xn=xn.sibling;return kn}function mn(kn,xn){return kn=th(kn,xn),kn.index=0,kn.sibling=null,kn}function _n(kn,xn,$n){return kn.index=$n,$?($n=kn.alternate,$n!==null?($n=$n.index,$n<xn?(kn.flags|=2,xn):$n):(kn.flags|=2,xn)):(kn.flags|=1048576,xn)}function yn(kn){return $&&kn.alternate===null&&(kn.flags|=2),kn}function Tn(kn,xn,$n,zn){return xn===null||xn.tag!==6?(xn=uh($n,kn.mode,zn),xn.return=kn,xn):(xn=mn(xn,$n),xn.return=kn,xn)}function wn(kn,xn,$n,zn){var Yn=$n.type;return Yn===wa?Dn(kn,xn,$n.props.children,zn,$n.key):xn!==null&&(xn.elementType===Yn||typeof Yn=="object"&&Yn!==null&&Yn.$$typeof===Ga&&rh(Yn)===xn.type)?(zn=mn(xn,$n.props),zn.ref=ph(kn,xn,$n),zn.return=kn,zn):(zn=vh($n.type,$n.key,$n.props,null,kn.mode,zn),zn.ref=ph(kn,xn,$n),zn.return=kn,zn)}function On(kn,xn,$n,zn){return xn===null||xn.tag!==4||xn.stateNode.containerInfo!==$n.containerInfo||xn.stateNode.implementation!==$n.implementation?(xn=wh($n,kn.mode,zn),xn.return=kn,xn):(xn=mn(xn,$n.children||[]),xn.return=kn,xn)}function Dn(kn,xn,$n,zn,Yn){return xn===null||xn.tag!==7?(xn=xh($n,kn.mode,zn,Yn),xn.return=kn,xn):(xn=mn(xn,$n),xn.return=kn,xn)}function Nn(kn,xn,$n){if(typeof xn=="string"&&xn!==""||typeof xn=="number")return xn=uh(""+xn,kn.mode,$n),xn.return=kn,xn;if(typeof xn=="object"&&xn!==null){switch(xn.$$typeof){case ua:return $n=vh(xn.type,xn.key,xn.props,null,kn.mode,$n),$n.ref=ph(kn,null,xn),$n.return=kn,$n;case va:return xn=wh(xn,kn.mode,$n),xn.return=kn,xn;case Ga:var zn=xn._init;return Nn(kn,zn(xn._payload),$n)}if(db(xn)||Ja(xn))return xn=xh(xn,kn.mode,$n,null),xn.return=kn,xn;qh(kn,xn)}return null}function An(kn,xn,$n,zn){var Yn=xn!==null?xn.key:null;if(typeof $n=="string"&&$n!==""||typeof $n=="number")return Yn!==null?null:Tn(kn,xn,""+$n,zn);if(typeof $n=="object"&&$n!==null){switch($n.$$typeof){case ua:return $n.key===Yn?wn(kn,xn,$n,zn):null;case va:return $n.key===Yn?On(kn,xn,$n,zn):null;case Ga:return Yn=$n._init,An(kn,xn,Yn($n._payload),zn)}if(db($n)||Ja($n))return Yn!==null?null:Dn(kn,xn,$n,zn,null);qh(kn,$n)}return null}function In(kn,xn,$n,zn,Yn){if(typeof zn=="string"&&zn!==""||typeof zn=="number")return kn=kn.get($n)||null,Tn(xn,kn,""+zn,Yn);if(typeof zn=="object"&&zn!==null){switch(zn.$$typeof){case ua:return kn=kn.get(zn.key===null?$n:zn.key)||null,wn(xn,kn,zn,Yn);case va:return kn=kn.get(zn.key===null?$n:zn.key)||null,On(xn,kn,zn,Yn);case Ga:var nt=zn._init;return In(kn,xn,$n,nt(zn._payload),Yn)}if(db(zn)||Ja(zn))return kn=kn.get($n)||null,Dn(xn,kn,zn,Yn,null);qh(xn,zn)}return null}function Un(kn,xn,$n,zn){for(var Yn=null,nt=null,et=xn,at=xn=0,vt=null;et!==null&&at<$n.length;at++){et.index>at?(vt=et,et=null):vt=et.sibling;var Rn=An(kn,et,$n[at],zn);if(Rn===null){et===null&&(et=vt);break}$&&et&&Rn.alternate===null&&_e(kn,et),xn=_n(Rn,xn,at),nt===null?Yn=Rn:nt.sibling=Rn,nt=Rn,et=vt}if(at===$n.length)return sn(kn,et),I$1&&$g(kn,at),Yn;if(et===null){for(;at<$n.length;at++)et=Nn(kn,$n[at],zn),et!==null&&(xn=_n(et,xn,at),nt===null?Yn=et:nt.sibling=et,nt=et);return I$1&&$g(kn,at),Yn}for(et=ln(kn,et);at<$n.length;at++)vt=In(et,kn,at,$n[at],zn),vt!==null&&($&&vt.alternate!==null&&et.delete(vt.key===null?at:vt.key),xn=_n(vt,xn,at),nt===null?Yn=vt:nt.sibling=vt,nt=vt);return $&&et.forEach(function(Rt){return _e(kn,Rt)}),I$1&&$g(kn,at),Yn}function Ln(kn,xn,$n,zn){var Yn=Ja($n);if(typeof Yn!="function")throw Error(p$2(150));if($n=Yn.call($n),$n==null)throw Error(p$2(151));for(var nt=Yn=null,et=xn,at=xn=0,vt=null,Rn=$n.next();et!==null&&!Rn.done;at++,Rn=$n.next()){et.index>at?(vt=et,et=null):vt=et.sibling;var Rt=An(kn,et,Rn.value,zn);if(Rt===null){et===null&&(et=vt);break}$&&et&&Rt.alternate===null&&_e(kn,et),xn=_n(Rt,xn,at),nt===null?Yn=Rt:nt.sibling=Rt,nt=Rt,et=vt}if(Rn.done)return sn(kn,et),I$1&&$g(kn,at),Yn;if(et===null){for(;!Rn.done;at++,Rn=$n.next())Rn=Nn(kn,Rn.value,zn),Rn!==null&&(xn=_n(Rn,xn,at),nt===null?Yn=Rn:nt.sibling=Rn,nt=Rn);return I$1&&$g(kn,at),Yn}for(et=ln(kn,et);!Rn.done;at++,Rn=$n.next())Rn=In(et,kn,at,Rn.value,zn),Rn!==null&&($&&Rn.alternate!==null&&et.delete(Rn.key===null?at:Rn.key),xn=_n(Rn,xn,at),nt===null?Yn=Rn:nt.sibling=Rn,nt=Rn);return $&&et.forEach(function(qt){return _e(kn,qt)}),I$1&&$g(kn,at),Yn}function qn(kn,xn,$n,zn){if(typeof $n=="object"&&$n!==null&&$n.type===wa&&$n.key===null&&($n=$n.props.children),typeof $n=="object"&&$n!==null){switch($n.$$typeof){case ua:e:{for(var Yn=$n.key,nt=xn;nt!==null;){if(nt.key===Yn){if(Yn=$n.type,Yn===wa){if(nt.tag===7){sn(kn,nt.sibling),xn=mn(nt,$n.props.children),xn.return=kn,kn=xn;break e}}else if(nt.elementType===Yn||typeof Yn=="object"&&Yn!==null&&Yn.$$typeof===Ga&&rh(Yn)===nt.type){sn(kn,nt.sibling),xn=mn(nt,$n.props),xn.ref=ph(kn,nt,$n),xn.return=kn,kn=xn;break e}sn(kn,nt);break}else _e(kn,nt);nt=nt.sibling}$n.type===wa?(xn=xh($n.props.children,kn.mode,zn,$n.key),xn.return=kn,kn=xn):(zn=vh($n.type,$n.key,$n.props,null,kn.mode,zn),zn.ref=ph(kn,xn,$n),zn.return=kn,kn=zn)}return yn(kn);case va:e:{for(nt=$n.key;xn!==null;){if(xn.key===nt)if(xn.tag===4&&xn.stateNode.containerInfo===$n.containerInfo&&xn.stateNode.implementation===$n.implementation){sn(kn,xn.sibling),xn=mn(xn,$n.children||[]),xn.return=kn,kn=xn;break e}else{sn(kn,xn);break}else _e(kn,xn);xn=xn.sibling}xn=wh($n,kn.mode,zn),xn.return=kn,kn=xn}return yn(kn);case Ga:return nt=$n._init,qn(kn,xn,nt($n._payload),zn)}if(db($n))return Un(kn,xn,$n,zn);if(Ja($n))return Ln(kn,xn,$n,zn);qh(kn,$n)}return typeof $n=="string"&&$n!==""||typeof $n=="number"?($n=""+$n,xn!==null&&xn.tag===6?(sn(kn,xn.sibling),xn=mn(xn,$n),xn.return=kn,kn=xn):(sn(kn,xn),xn=uh($n,kn.mode,zn),xn.return=kn,kn=xn),yn(kn)):sn(kn,xn)}return qn}var yh=sh(!0),zh=sh(!1),Ah={},Bh=Tf(Ah),Ch=Tf(Ah),Dh=Tf(Ah);function Eh($){if($===Ah)throw Error(p$2(174));return $}function Fh($,_e){switch(G$1(Dh,_e),G$1(Ch,$),G$1(Bh,Ah),$=_e.nodeType,$){case 9:case 11:_e=(_e=_e.documentElement)?_e.namespaceURI:kb(null,"");break;default:$=$===8?_e.parentNode:_e,_e=$.namespaceURI||null,$=$.tagName,_e=kb(_e,$)}E$1(Bh),G$1(Bh,_e)}function Gh(){E$1(Bh),E$1(Ch),E$1(Dh)}function Hh($){Eh(Dh.current);var _e=Eh(Bh.current),sn=kb(_e,$.type);_e!==sn&&(G$1(Ch,$),G$1(Bh,sn))}function Ih($){Ch.current===$&&(E$1(Bh),E$1(Ch))}var K=Tf(0);function Jh($){for(var _e=$;_e!==null;){if(_e.tag===13){var sn=_e.memoizedState;if(sn!==null&&(sn=sn.dehydrated,sn===null||sn.data==="$?"||sn.data==="$!"))return _e}else if(_e.tag===19&&_e.memoizedProps.revealOrder!==void 0){if((_e.flags&128)!==0)return _e}else if(_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===$)break;for(;_e.sibling===null;){if(_e.return===null||_e.return===$)return null;_e=_e.return}_e.sibling.return=_e.return,_e=_e.sibling}return null}var Kh=[];function Lh(){for(var $=0;$<Kh.length;$++)Kh[$]._workInProgressVersionPrimary=null;Kh.length=0}var Mh=ta.ReactCurrentDispatcher,Nh=ta.ReactCurrentBatchConfig,Oh=0,L$1=null,M$1=null,N=null,Ph=!1,Qh=!1,Rh=0,Sh=0;function O$1(){throw Error(p$2(321))}function Th($,_e){if(_e===null)return!1;for(var sn=0;sn<_e.length&&sn<$.length;sn++)if(!Ge($[sn],_e[sn]))return!1;return!0}function Uh($,_e,sn,ln,mn,_n){if(Oh=_n,L$1=_e,_e.memoizedState=null,_e.updateQueue=null,_e.lanes=0,Mh.current=$===null||$.memoizedState===null?Vh:Wh,$=sn(ln,mn),Qh){_n=0;do{if(Qh=!1,Rh=0,25<=_n)throw Error(p$2(301));_n+=1,N=M$1=null,_e.updateQueue=null,Mh.current=Xh,$=sn(ln,mn)}while(Qh)}if(Mh.current=Yh,_e=M$1!==null&&M$1.next!==null,Oh=0,N=M$1=L$1=null,Ph=!1,_e)throw Error(p$2(300));return $}function Zh(){var $=Rh!==0;return Rh=0,$}function $h(){var $={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return N===null?L$1.memoizedState=N=$:N=N.next=$,N}function ai(){if(M$1===null){var $=L$1.alternate;$=$!==null?$.memoizedState:null}else $=M$1.next;var _e=N===null?L$1.memoizedState:N.next;if(_e!==null)N=_e,M$1=$;else{if($===null)throw Error(p$2(310));M$1=$,$={memoizedState:M$1.memoizedState,baseState:M$1.baseState,baseQueue:M$1.baseQueue,queue:M$1.queue,next:null},N===null?L$1.memoizedState=N=$:N=N.next=$}return N}function bi($,_e){return typeof _e=="function"?_e($):_e}function ci($){var _e=ai(),sn=_e.queue;if(sn===null)throw Error(p$2(311));sn.lastRenderedReducer=$;var ln=M$1,mn=ln.baseQueue,_n=sn.pending;if(_n!==null){if(mn!==null){var yn=mn.next;mn.next=_n.next,_n.next=yn}ln.baseQueue=mn=_n,sn.pending=null}if(mn!==null){_n=mn.next,ln=ln.baseState;var Tn=yn=null,wn=null,On=_n;do{var Dn=On.lane;if((Oh&Dn)===Dn)wn!==null&&(wn=wn.next={lane:0,action:On.action,hasEagerState:On.hasEagerState,eagerState:On.eagerState,next:null}),ln=On.hasEagerState?On.eagerState:$(ln,On.action);else{var Nn={lane:Dn,action:On.action,hasEagerState:On.hasEagerState,eagerState:On.eagerState,next:null};wn===null?(Tn=wn=Nn,yn=ln):wn=wn.next=Nn,L$1.lanes|=Dn,Fg|=Dn}On=On.next}while(On!==null&&On!==_n);wn===null?yn=ln:wn.next=Tn,Ge(ln,_e.memoizedState)||(tg=!0),_e.memoizedState=ln,_e.baseState=yn,_e.baseQueue=wn,sn.lastRenderedState=ln}if($=sn.interleaved,$!==null){mn=$;do _n=mn.lane,L$1.lanes|=_n,Fg|=_n,mn=mn.next;while(mn!==$)}else mn===null&&(sn.lanes=0);return[_e.memoizedState,sn.dispatch]}function di($){var _e=ai(),sn=_e.queue;if(sn===null)throw Error(p$2(311));sn.lastRenderedReducer=$;var ln=sn.dispatch,mn=sn.pending,_n=_e.memoizedState;if(mn!==null){sn.pending=null;var yn=mn=mn.next;do _n=$(_n,yn.action),yn=yn.next;while(yn!==mn);Ge(_n,_e.memoizedState)||(tg=!0),_e.memoizedState=_n,_e.baseQueue===null&&(_e.baseState=_n),sn.lastRenderedState=_n}return[_n,ln]}function ei(){}function fi($,_e){var sn=L$1,ln=ai(),mn=_e(),_n=!Ge(ln.memoizedState,mn);if(_n&&(ln.memoizedState=mn,tg=!0),ln=ln.queue,gi(hi.bind(null,sn,ln,$),[$]),ln.getSnapshot!==_e||_n||N!==null&&N.memoizedState.tag&1){if(sn.flags|=2048,ii(9,ji.bind(null,sn,ln,mn,_e),void 0,null),P$1===null)throw Error(p$2(349));(Oh&30)!==0||ki(sn,_e,mn)}return mn}function ki($,_e,sn){$.flags|=16384,$={getSnapshot:_e,value:sn},_e=L$1.updateQueue,_e===null?(_e={lastEffect:null,stores:null},L$1.updateQueue=_e,_e.stores=[$]):(sn=_e.stores,sn===null?_e.stores=[$]:sn.push($))}function ji($,_e,sn,ln){_e.value=sn,_e.getSnapshot=ln,li(_e)&&Lg($,1,-1)}function hi($,_e,sn){return sn(function(){li(_e)&&Lg($,1,-1)})}function li($){var _e=$.getSnapshot;$=$.value;try{var sn=_e();return!Ge($,sn)}catch{return!0}}function mi($){var _e=$h();return typeof $=="function"&&($=$()),_e.memoizedState=_e.baseState=$,$={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:$},_e.queue=$,$=$.dispatch=ni.bind(null,L$1,$),[_e.memoizedState,$]}function ii($,_e,sn,ln){return $={tag:$,create:_e,destroy:sn,deps:ln,next:null},_e=L$1.updateQueue,_e===null?(_e={lastEffect:null,stores:null},L$1.updateQueue=_e,_e.lastEffect=$.next=$):(sn=_e.lastEffect,sn===null?_e.lastEffect=$.next=$:(ln=sn.next,sn.next=$,$.next=ln,_e.lastEffect=$)),$}function oi(){return ai().memoizedState}function pi($,_e,sn,ln){var mn=$h();L$1.flags|=$,mn.memoizedState=ii(1|_e,sn,void 0,ln===void 0?null:ln)}function qi($,_e,sn,ln){var mn=ai();ln=ln===void 0?null:ln;var _n=void 0;if(M$1!==null){var yn=M$1.memoizedState;if(_n=yn.destroy,ln!==null&&Th(ln,yn.deps)){mn.memoizedState=ii(_e,sn,_n,ln);return}}L$1.flags|=$,mn.memoizedState=ii(1|_e,sn,_n,ln)}function ri($,_e){return pi(8390656,8,$,_e)}function gi($,_e){return qi(2048,8,$,_e)}function si($,_e){return qi(4,2,$,_e)}function ti($,_e){return qi(4,4,$,_e)}function ui($,_e){if(typeof _e=="function")return $=$(),_e($),function(){_e(null)};if(_e!=null)return $=$(),_e.current=$,function(){_e.current=null}}function vi($,_e,sn){return sn=sn!=null?sn.concat([$]):null,qi(4,4,ui.bind(null,_e,$),sn)}function wi(){}function xi($,_e){var sn=ai();_e=_e===void 0?null:_e;var ln=sn.memoizedState;return ln!==null&&_e!==null&&Th(_e,ln[1])?ln[0]:(sn.memoizedState=[$,_e],$)}function yi($,_e){var sn=ai();_e=_e===void 0?null:_e;var ln=sn.memoizedState;return ln!==null&&_e!==null&&Th(_e,ln[1])?ln[0]:($=$(),sn.memoizedState=[$,_e],$)}function zi($,_e,sn){return(Oh&21)===0?($.baseState&&($.baseState=!1,tg=!0),$.memoizedState=sn):(Ge(sn,_e)||(sn=xc(),L$1.lanes|=sn,Fg|=sn,$.baseState=!0),_e)}function Ai($,_e){var sn=C;C=sn!==0&&4>sn?sn:4,$(!0);var ln=Nh.transition;Nh.transition={};try{$(!1),_e()}finally{C=sn,Nh.transition=ln}}function Bi(){return ai().memoizedState}function Ci($,_e,sn){var ln=Kg($);sn={lane:ln,action:sn,hasEagerState:!1,eagerState:null,next:null},Di($)?Ei(_e,sn):(Fi($,_e,sn),sn=Jg(),$=Lg($,ln,sn),$!==null&&Gi($,_e,ln))}function ni($,_e,sn){var ln=Kg($),mn={lane:ln,action:sn,hasEagerState:!1,eagerState:null,next:null};if(Di($))Ei(_e,mn);else{Fi($,_e,mn);var _n=$.alternate;if($.lanes===0&&(_n===null||_n.lanes===0)&&(_n=_e.lastRenderedReducer,_n!==null))try{var yn=_e.lastRenderedState,Tn=_n(yn,sn);if(mn.hasEagerState=!0,mn.eagerState=Tn,Ge(Tn,yn))return}catch{}finally{}sn=Jg(),$=Lg($,ln,sn),$!==null&&Gi($,_e,ln)}}function Di($){var _e=$.alternate;return $===L$1||_e!==null&&_e===L$1}function Ei($,_e){Qh=Ph=!0;var sn=$.pending;sn===null?_e.next=_e:(_e.next=sn.next,sn.next=_e),$.pending=_e}function Fi($,_e,sn){Bg($)?($=_e.interleaved,$===null?(sn.next=sn,vg===null?vg=[_e]:vg.push(_e)):(sn.next=$.next,$.next=sn),_e.interleaved=sn):($=_e.pending,$===null?sn.next=sn:(sn.next=$.next,$.next=sn),_e.pending=sn)}function Gi($,_e,sn){if((sn&4194240)!==0){var ln=_e.lanes;ln&=$.pendingLanes,sn|=ln,_e.lanes=sn,Bc($,sn)}}var Yh={readContext:ug,useCallback:O$1,useContext:O$1,useEffect:O$1,useImperativeHandle:O$1,useInsertionEffect:O$1,useLayoutEffect:O$1,useMemo:O$1,useReducer:O$1,useRef:O$1,useState:O$1,useDebugValue:O$1,useDeferredValue:O$1,useTransition:O$1,useMutableSource:O$1,useSyncExternalStore:O$1,useId:O$1,unstable_isNewReconciler:!1},Vh={readContext:ug,useCallback:function($,_e){return $h().memoizedState=[$,_e===void 0?null:_e],$},useContext:ug,useEffect:ri,useImperativeHandle:function($,_e,sn){return sn=sn!=null?sn.concat([$]):null,pi(4194308,4,ui.bind(null,_e,$),sn)},useLayoutEffect:function($,_e){return pi(4194308,4,$,_e)},useInsertionEffect:function($,_e){return pi(4,2,$,_e)},useMemo:function($,_e){var sn=$h();return _e=_e===void 0?null:_e,$=$(),sn.memoizedState=[$,_e],$},useReducer:function($,_e,sn){var ln=$h();return _e=sn!==void 0?sn(_e):_e,ln.memoizedState=ln.baseState=_e,$={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$,lastRenderedState:_e},ln.queue=$,$=$.dispatch=Ci.bind(null,L$1,$),[ln.memoizedState,$]},useRef:function($){var _e=$h();return $={current:$},_e.memoizedState=$},useState:mi,useDebugValue:wi,useDeferredValue:function($){return $h().memoizedState=$},useTransition:function(){var $=mi(!1),_e=$[0];return $=Ai.bind(null,$[1]),$h().memoizedState=$,[_e,$]},useMutableSource:function(){},useSyncExternalStore:function($,_e,sn){var ln=L$1,mn=$h();if(I$1){if(sn===void 0)throw Error(p$2(407));sn=sn()}else{if(sn=_e(),P$1===null)throw Error(p$2(349));(Oh&30)!==0||ki(ln,_e,sn)}mn.memoizedState=sn;var _n={value:sn,getSnapshot:_e};return mn.queue=_n,ri(hi.bind(null,ln,_n,$),[$]),ln.flags|=2048,ii(9,ji.bind(null,ln,_n,sn,_e),void 0,null),sn},useId:function(){var $=$h(),_e=P$1.identifierPrefix;if(I$1){var sn=Zg,ln=Yg;sn=(ln&~(1<<32-nc(ln)-1)).toString(32)+sn,_e=":"+_e+"R"+sn,sn=Rh++,0<sn&&(_e+="H"+sn.toString(32)),_e+=":"}else sn=Sh++,_e=":"+_e+"r"+sn.toString(32)+":";return $.memoizedState=_e},unstable_isNewReconciler:!1},Wh={readContext:ug,useCallback:xi,useContext:ug,useEffect:gi,useImperativeHandle:vi,useInsertionEffect:si,useLayoutEffect:ti,useMemo:yi,useReducer:ci,useRef:oi,useState:function(){return ci(bi)},useDebugValue:wi,useDeferredValue:function($){var _e=ai();return zi(_e,M$1.memoizedState,$)},useTransition:function(){var $=ci(bi)[0],_e=ai().memoizedState;return[$,_e]},useMutableSource:ei,useSyncExternalStore:fi,useId:Bi,unstable_isNewReconciler:!1},Xh={readContext:ug,useCallback:xi,useContext:ug,useEffect:gi,useImperativeHandle:vi,useInsertionEffect:si,useLayoutEffect:ti,useMemo:yi,useReducer:di,useRef:oi,useState:function(){return di(bi)},useDebugValue:wi,useDeferredValue:function($){var _e=ai();return M$1===null?_e.memoizedState=$:zi(_e,M$1.memoizedState,$)},useTransition:function(){var $=di(bi)[0],_e=ai().memoizedState;return[$,_e]},useMutableSource:ei,useSyncExternalStore:fi,useId:Bi,unstable_isNewReconciler:!1};function Hi($,_e){try{var sn="",ln=_e;do sn+=Oa(ln),ln=ln.return;while(ln);var mn=sn}catch(_n){mn=`
Error generating stack: `+_n.message+`
`+_n.stack}return{value:$,source:_e,stack:mn}}function Ii($,_e){try{console.error(_e.value)}catch(sn){setTimeout(function(){throw sn})}}var Ji=typeof WeakMap=="function"?WeakMap:Map;function Ki($,_e,sn){sn=zg(-1,sn),sn.tag=3,sn.payload={element:null};var ln=_e.value;return sn.callback=function(){Li||(Li=!0,Mi=ln),Ii($,_e)},sn}function Ni($,_e,sn){sn=zg(-1,sn),sn.tag=3;var ln=$.type.getDerivedStateFromError;if(typeof ln=="function"){var mn=_e.value;sn.payload=function(){return ln(mn)},sn.callback=function(){Ii($,_e)}}var _n=$.stateNode;return _n!==null&&typeof _n.componentDidCatch=="function"&&(sn.callback=function(){Ii($,_e),typeof ln!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var yn=_e.stack;this.componentDidCatch(_e.value,{componentStack:yn!==null?yn:""})}),sn}function Pi($,_e,sn){var ln=$.pingCache;if(ln===null){ln=$.pingCache=new Ji;var mn=new Set;ln.set(_e,mn)}else mn=ln.get(_e),mn===void 0&&(mn=new Set,ln.set(_e,mn));mn.has(sn)||(mn.add(sn),$=Qi.bind(null,$,_e,sn),_e.then($,$))}function Ri($){do{var _e;if((_e=$.tag===13)&&(_e=$.memoizedState,_e=_e!==null?_e.dehydrated!==null:!0),_e)return $;$=$.return}while($!==null);return null}function Si($,_e,sn,ln,mn){return($.mode&1)===0?($===_e?$.flags|=65536:($.flags|=128,sn.flags|=131072,sn.flags&=-52805,sn.tag===1&&(sn.alternate===null?sn.tag=17:(_e=zg(-1,1),_e.tag=2,Ag(sn,_e))),sn.lanes|=1),$):($.flags|=65536,$.lanes=mn,$)}var Ti,Ui,Vi,Wi;Ti=function($,_e){for(var sn=_e.child;sn!==null;){if(sn.tag===5||sn.tag===6)$.appendChild(sn.stateNode);else if(sn.tag!==4&&sn.child!==null){sn.child.return=sn,sn=sn.child;continue}if(sn===_e)break;for(;sn.sibling===null;){if(sn.return===null||sn.return===_e)return;sn=sn.return}sn.sibling.return=sn.return,sn=sn.sibling}};Ui=function(){};Vi=function($,_e,sn,ln){var mn=$.memoizedProps;if(mn!==ln){$=_e.stateNode,Eh(Bh.current);var _n=null;switch(sn){case"input":mn=Xa($,mn),ln=Xa($,ln),_n=[];break;case"select":mn=A$1({},mn,{value:void 0}),ln=A$1({},ln,{value:void 0}),_n=[];break;case"textarea":mn=fb($,mn),ln=fb($,ln),_n=[];break;default:typeof mn.onClick!="function"&&typeof ln.onClick=="function"&&($.onclick=Af)}tb(sn,ln);var yn;sn=null;for(On in mn)if(!ln.hasOwnProperty(On)&&mn.hasOwnProperty(On)&&mn[On]!=null)if(On==="style"){var Tn=mn[On];for(yn in Tn)Tn.hasOwnProperty(yn)&&(sn||(sn={}),sn[yn]="")}else On!=="dangerouslySetInnerHTML"&&On!=="children"&&On!=="suppressContentEditableWarning"&&On!=="suppressHydrationWarning"&&On!=="autoFocus"&&(ea.hasOwnProperty(On)?_n||(_n=[]):(_n=_n||[]).push(On,null));for(On in ln){var wn=ln[On];if(Tn=mn!=null?mn[On]:void 0,ln.hasOwnProperty(On)&&wn!==Tn&&(wn!=null||Tn!=null))if(On==="style")if(Tn){for(yn in Tn)!Tn.hasOwnProperty(yn)||wn&&wn.hasOwnProperty(yn)||(sn||(sn={}),sn[yn]="");for(yn in wn)wn.hasOwnProperty(yn)&&Tn[yn]!==wn[yn]&&(sn||(sn={}),sn[yn]=wn[yn])}else sn||(_n||(_n=[]),_n.push(On,sn)),sn=wn;else On==="dangerouslySetInnerHTML"?(wn=wn?wn.__html:void 0,Tn=Tn?Tn.__html:void 0,wn!=null&&Tn!==wn&&(_n=_n||[]).push(On,wn)):On==="children"?typeof wn!="string"&&typeof wn!="number"||(_n=_n||[]).push(On,""+wn):On!=="suppressContentEditableWarning"&&On!=="suppressHydrationWarning"&&(ea.hasOwnProperty(On)?(wn!=null&&On==="onScroll"&&D$1("scroll",$),_n||Tn===wn||(_n=[])):(_n=_n||[]).push(On,wn))}sn&&(_n=_n||[]).push("style",sn);var On=_n;(_e.updateQueue=On)&&(_e.flags|=4)}};Wi=function($,_e,sn,ln){sn!==ln&&(_e.flags|=4)};function Xi($,_e){if(!I$1)switch($.tailMode){case"hidden":_e=$.tail;for(var sn=null;_e!==null;)_e.alternate!==null&&(sn=_e),_e=_e.sibling;sn===null?$.tail=null:sn.sibling=null;break;case"collapsed":sn=$.tail;for(var ln=null;sn!==null;)sn.alternate!==null&&(ln=sn),sn=sn.sibling;ln===null?_e||$.tail===null?$.tail=null:$.tail.sibling=null:ln.sibling=null}}function Q$1($){var _e=$.alternate!==null&&$.alternate.child===$.child,sn=0,ln=0;if(_e)for(var mn=$.child;mn!==null;)sn|=mn.lanes|mn.childLanes,ln|=mn.subtreeFlags&14680064,ln|=mn.flags&14680064,mn.return=$,mn=mn.sibling;else for(mn=$.child;mn!==null;)sn|=mn.lanes|mn.childLanes,ln|=mn.subtreeFlags,ln|=mn.flags,mn.return=$,mn=mn.sibling;return $.subtreeFlags|=ln,$.childLanes=sn,_e}function Yi($,_e,sn){var ln=_e.pendingProps;switch(ch(_e),_e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Q$1(_e),null;case 1:return Yf(_e.type)&&Zf(),Q$1(_e),null;case 3:return ln=_e.stateNode,Gh(),E$1(Vf),E$1(H$1),Lh(),ln.pendingContext&&(ln.context=ln.pendingContext,ln.pendingContext=null),($===null||$.child===null)&&(mh(_e)?_e.flags|=4:$===null||$.memoizedState.isDehydrated&&(_e.flags&256)===0||(_e.flags|=1024,fh!==null&&(Zi(fh),fh=null))),Ui($,_e),Q$1(_e),null;case 5:Ih(_e);var mn=Eh(Dh.current);if(sn=_e.type,$!==null&&_e.stateNode!=null)Vi($,_e,sn,ln,mn),$.ref!==_e.ref&&(_e.flags|=512,_e.flags|=2097152);else{if(!ln){if(_e.stateNode===null)throw Error(p$2(166));return Q$1(_e),null}if($=Eh(Bh.current),mh(_e)){ln=_e.stateNode,sn=_e.type;var _n=_e.memoizedProps;switch(ln[Nf]=_e,ln[Of]=_n,$=(_e.mode&1)!==0,sn){case"dialog":D$1("cancel",ln),D$1("close",ln);break;case"iframe":case"object":case"embed":D$1("load",ln);break;case"video":case"audio":for(mn=0;mn<kf.length;mn++)D$1(kf[mn],ln);break;case"source":D$1("error",ln);break;case"img":case"image":case"link":D$1("error",ln),D$1("load",ln);break;case"details":D$1("toggle",ln);break;case"input":Ya(ln,_n),D$1("invalid",ln);break;case"select":ln._wrapperState={wasMultiple:!!_n.multiple},D$1("invalid",ln);break;case"textarea":gb(ln,_n),D$1("invalid",ln)}tb(sn,_n),mn=null;for(var yn in _n)if(_n.hasOwnProperty(yn)){var Tn=_n[yn];yn==="children"?typeof Tn=="string"?ln.textContent!==Tn&&(_n.suppressHydrationWarning!==!0&&zf(ln.textContent,Tn,$),mn=["children",Tn]):typeof Tn=="number"&&ln.textContent!==""+Tn&&(_n.suppressHydrationWarning!==!0&&zf(ln.textContent,Tn,$),mn=["children",""+Tn]):ea.hasOwnProperty(yn)&&Tn!=null&&yn==="onScroll"&&D$1("scroll",ln)}switch(sn){case"input":Ua(ln),cb(ln,_n,!0);break;case"textarea":Ua(ln),ib(ln);break;case"select":case"option":break;default:typeof _n.onClick=="function"&&(ln.onclick=Af)}ln=mn,_e.updateQueue=ln,ln!==null&&(_e.flags|=4)}else{yn=mn.nodeType===9?mn:mn.ownerDocument,$==="http://www.w3.org/1999/xhtml"&&($=jb(sn)),$==="http://www.w3.org/1999/xhtml"?sn==="script"?($=yn.createElement("div"),$.innerHTML="<script><\/script>",$=$.removeChild($.firstChild)):typeof ln.is=="string"?$=yn.createElement(sn,{is:ln.is}):($=yn.createElement(sn),sn==="select"&&(yn=$,ln.multiple?yn.multiple=!0:ln.size&&(yn.size=ln.size))):$=yn.createElementNS($,sn),$[Nf]=_e,$[Of]=ln,Ti($,_e,!1,!1),_e.stateNode=$;e:{switch(yn=ub(sn,ln),sn){case"dialog":D$1("cancel",$),D$1("close",$),mn=ln;break;case"iframe":case"object":case"embed":D$1("load",$),mn=ln;break;case"video":case"audio":for(mn=0;mn<kf.length;mn++)D$1(kf[mn],$);mn=ln;break;case"source":D$1("error",$),mn=ln;break;case"img":case"image":case"link":D$1("error",$),D$1("load",$),mn=ln;break;case"details":D$1("toggle",$),mn=ln;break;case"input":Ya($,ln),mn=Xa($,ln),D$1("invalid",$);break;case"option":mn=ln;break;case"select":$._wrapperState={wasMultiple:!!ln.multiple},mn=A$1({},ln,{value:void 0}),D$1("invalid",$);break;case"textarea":gb($,ln),mn=fb($,ln),D$1("invalid",$);break;default:mn=ln}tb(sn,mn),Tn=mn;for(_n in Tn)if(Tn.hasOwnProperty(_n)){var wn=Tn[_n];_n==="style"?rb($,wn):_n==="dangerouslySetInnerHTML"?(wn=wn?wn.__html:void 0,wn!=null&&mb($,wn)):_n==="children"?typeof wn=="string"?(sn!=="textarea"||wn!=="")&&nb($,wn):typeof wn=="number"&&nb($,""+wn):_n!=="suppressContentEditableWarning"&&_n!=="suppressHydrationWarning"&&_n!=="autoFocus"&&(ea.hasOwnProperty(_n)?wn!=null&&_n==="onScroll"&&D$1("scroll",$):wn!=null&&sa($,_n,wn,yn))}switch(sn){case"input":Ua($),cb($,ln,!1);break;case"textarea":Ua($),ib($);break;case"option":ln.value!=null&&$.setAttribute("value",""+Ra(ln.value));break;case"select":$.multiple=!!ln.multiple,_n=ln.value,_n!=null?eb($,!!ln.multiple,_n,!1):ln.defaultValue!=null&&eb($,!!ln.multiple,ln.defaultValue,!0);break;default:typeof mn.onClick=="function"&&($.onclick=Af)}switch(sn){case"button":case"input":case"select":case"textarea":ln=!!ln.autoFocus;break e;case"img":ln=!0;break e;default:ln=!1}}ln&&(_e.flags|=4)}_e.ref!==null&&(_e.flags|=512,_e.flags|=2097152)}return Q$1(_e),null;case 6:if($&&_e.stateNode!=null)Wi($,_e,$.memoizedProps,ln);else{if(typeof ln!="string"&&_e.stateNode===null)throw Error(p$2(166));if(sn=Eh(Dh.current),Eh(Bh.current),mh(_e)){if(ln=_e.stateNode,sn=_e.memoizedProps,ln[Nf]=_e,(_n=ln.nodeValue!==sn)&&($=dh,$!==null))switch($.tag){case 3:zf(ln.nodeValue,sn,($.mode&1)!==0);break;case 5:$.memoizedProps.suppressHydrationWarning!==!0&&zf(ln.nodeValue,sn,($.mode&1)!==0)}_n&&(_e.flags|=4)}else ln=(sn.nodeType===9?sn:sn.ownerDocument).createTextNode(ln),ln[Nf]=_e,_e.stateNode=ln}return Q$1(_e),null;case 13:if(E$1(K),ln=_e.memoizedState,I$1&&eh!==null&&(_e.mode&1)!==0&&(_e.flags&128)===0){for(ln=eh;ln;)ln=Kf(ln.nextSibling);return nh(),_e.flags|=98560,_e}if(ln!==null&&ln.dehydrated!==null){if(ln=mh(_e),$===null){if(!ln)throw Error(p$2(318));if(ln=_e.memoizedState,ln=ln!==null?ln.dehydrated:null,!ln)throw Error(p$2(317));ln[Nf]=_e}else nh(),(_e.flags&128)===0&&(_e.memoizedState=null),_e.flags|=4;return Q$1(_e),null}return fh!==null&&(Zi(fh),fh=null),(_e.flags&128)!==0?(_e.lanes=sn,_e):(ln=ln!==null,sn=!1,$===null?mh(_e):sn=$.memoizedState!==null,ln!==sn&&ln&&(_e.child.flags|=8192,(_e.mode&1)!==0&&($===null||(K.current&1)!==0?R$1===0&&(R$1=3):$i())),_e.updateQueue!==null&&(_e.flags|=4),Q$1(_e),null);case 4:return Gh(),Ui($,_e),$===null&&rf(_e.stateNode.containerInfo),Q$1(_e),null;case 10:return qg(_e.type._context),Q$1(_e),null;case 17:return Yf(_e.type)&&Zf(),Q$1(_e),null;case 19:if(E$1(K),_n=_e.memoizedState,_n===null)return Q$1(_e),null;if(ln=(_e.flags&128)!==0,yn=_n.rendering,yn===null)if(ln)Xi(_n,!1);else{if(R$1!==0||$!==null&&($.flags&128)!==0)for($=_e.child;$!==null;){if(yn=Jh($),yn!==null){for(_e.flags|=128,Xi(_n,!1),ln=yn.updateQueue,ln!==null&&(_e.updateQueue=ln,_e.flags|=4),_e.subtreeFlags=0,ln=sn,sn=_e.child;sn!==null;)_n=sn,$=ln,_n.flags&=14680066,yn=_n.alternate,yn===null?(_n.childLanes=0,_n.lanes=$,_n.child=null,_n.subtreeFlags=0,_n.memoizedProps=null,_n.memoizedState=null,_n.updateQueue=null,_n.dependencies=null,_n.stateNode=null):(_n.childLanes=yn.childLanes,_n.lanes=yn.lanes,_n.child=yn.child,_n.subtreeFlags=0,_n.deletions=null,_n.memoizedProps=yn.memoizedProps,_n.memoizedState=yn.memoizedState,_n.updateQueue=yn.updateQueue,_n.type=yn.type,$=yn.dependencies,_n.dependencies=$===null?null:{lanes:$.lanes,firstContext:$.firstContext}),sn=sn.sibling;return G$1(K,K.current&1|2),_e.child}$=$.sibling}_n.tail!==null&&B$1()>aj&&(_e.flags|=128,ln=!0,Xi(_n,!1),_e.lanes=4194304)}else{if(!ln)if($=Jh(yn),$!==null){if(_e.flags|=128,ln=!0,sn=$.updateQueue,sn!==null&&(_e.updateQueue=sn,_e.flags|=4),Xi(_n,!0),_n.tail===null&&_n.tailMode==="hidden"&&!yn.alternate&&!I$1)return Q$1(_e),null}else 2*B$1()-_n.renderingStartTime>aj&&sn!==1073741824&&(_e.flags|=128,ln=!0,Xi(_n,!1),_e.lanes=4194304);_n.isBackwards?(yn.sibling=_e.child,_e.child=yn):(sn=_n.last,sn!==null?sn.sibling=yn:_e.child=yn,_n.last=yn)}return _n.tail!==null?(_e=_n.tail,_n.rendering=_e,_n.tail=_e.sibling,_n.renderingStartTime=B$1(),_e.sibling=null,sn=K.current,G$1(K,ln?sn&1|2:sn&1),_e):(Q$1(_e),null);case 22:case 23:return bj(),ln=_e.memoizedState!==null,$!==null&&$.memoizedState!==null!==ln&&(_e.flags|=8192),ln&&(_e.mode&1)!==0?(cj&1073741824)!==0&&(Q$1(_e),_e.subtreeFlags&6&&(_e.flags|=8192)):Q$1(_e),null;case 24:return null;case 25:return null}throw Error(p$2(156,_e.tag))}var dj=ta.ReactCurrentOwner,tg=!1;function ej($,_e,sn,ln){_e.child=$===null?zh(_e,null,sn,ln):yh(_e,$.child,sn,ln)}function fj($,_e,sn,ln,mn){sn=sn.render;var _n=_e.ref;return sg(_e,mn),ln=Uh($,_e,sn,ln,_n,mn),sn=Zh(),$!==null&&!tg?(_e.updateQueue=$.updateQueue,_e.flags&=-2053,$.lanes&=~mn,gj($,_e,mn)):(I$1&&sn&&bh(_e),_e.flags|=1,ej($,_e,ln,mn),_e.child)}function hj($,_e,sn,ln,mn){if($===null){var _n=sn.type;return typeof _n=="function"&&!ij(_n)&&_n.defaultProps===void 0&&sn.compare===null&&sn.defaultProps===void 0?(_e.tag=15,_e.type=_n,jj($,_e,_n,ln,mn)):($=vh(sn.type,null,ln,_e,_e.mode,mn),$.ref=_e.ref,$.return=_e,_e.child=$)}if(_n=$.child,($.lanes&mn)===0){var yn=_n.memoizedProps;if(sn=sn.compare,sn=sn!==null?sn:He,sn(yn,ln)&&$.ref===_e.ref)return gj($,_e,mn)}return _e.flags|=1,$=th(_n,ln),$.ref=_e.ref,$.return=_e,_e.child=$}function jj($,_e,sn,ln,mn){if($!==null){var _n=$.memoizedProps;if(He(_n,ln)&&$.ref===_e.ref)if(tg=!1,_e.pendingProps=ln=_n,($.lanes&mn)!==0)($.flags&131072)!==0&&(tg=!0);else return _e.lanes=$.lanes,gj($,_e,mn)}return kj($,_e,sn,ln,mn)}function lj($,_e,sn){var ln=_e.pendingProps,mn=ln.children,_n=$!==null?$.memoizedState:null;if(ln.mode==="hidden")if((_e.mode&1)===0)_e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G$1(mj,cj),cj|=sn;else if((sn&1073741824)!==0)_e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ln=_n!==null?_n.baseLanes:sn,G$1(mj,cj),cj|=ln;else return $=_n!==null?_n.baseLanes|sn:sn,_e.lanes=_e.childLanes=1073741824,_e.memoizedState={baseLanes:$,cachePool:null,transitions:null},_e.updateQueue=null,G$1(mj,cj),cj|=$,null;else _n!==null?(ln=_n.baseLanes|sn,_e.memoizedState=null):ln=sn,G$1(mj,cj),cj|=ln;return ej($,_e,mn,sn),_e.child}function nj($,_e){var sn=_e.ref;($===null&&sn!==null||$!==null&&$.ref!==sn)&&(_e.flags|=512,_e.flags|=2097152)}function kj($,_e,sn,ln,mn){var _n=Yf(sn)?Wf:H$1.current;return _n=Xf(_e,_n),sg(_e,mn),sn=Uh($,_e,sn,ln,_n,mn),ln=Zh(),$!==null&&!tg?(_e.updateQueue=$.updateQueue,_e.flags&=-2053,$.lanes&=~mn,gj($,_e,mn)):(I$1&&ln&&bh(_e),_e.flags|=1,ej($,_e,sn,mn),_e.child)}function oj($,_e,sn,ln,mn){if(Yf(sn)){var _n=!0;bg(_e)}else _n=!1;if(sg(_e,mn),_e.stateNode===null)$!==null&&($.alternate=null,_e.alternate=null,_e.flags|=2),Og(_e,sn,ln),Qg(_e,sn,ln,mn),ln=!0;else if($===null){var yn=_e.stateNode,Tn=_e.memoizedProps;yn.props=Tn;var wn=yn.context,On=sn.contextType;typeof On=="object"&&On!==null?On=ug(On):(On=Yf(sn)?Wf:H$1.current,On=Xf(_e,On));var Dn=sn.getDerivedStateFromProps,Nn=typeof Dn=="function"||typeof yn.getSnapshotBeforeUpdate=="function";Nn||typeof yn.UNSAFE_componentWillReceiveProps!="function"&&typeof yn.componentWillReceiveProps!="function"||(Tn!==ln||wn!==On)&&Pg(_e,yn,ln,On),wg=!1;var An=_e.memoizedState;yn.state=An,Eg(_e,ln,yn,mn),wn=_e.memoizedState,Tn!==ln||An!==wn||Vf.current||wg?(typeof Dn=="function"&&(Ig(_e,sn,Dn,ln),wn=_e.memoizedState),(Tn=wg||Ng(_e,sn,Tn,ln,An,wn,On))?(Nn||typeof yn.UNSAFE_componentWillMount!="function"&&typeof yn.componentWillMount!="function"||(typeof yn.componentWillMount=="function"&&yn.componentWillMount(),typeof yn.UNSAFE_componentWillMount=="function"&&yn.UNSAFE_componentWillMount()),typeof yn.componentDidMount=="function"&&(_e.flags|=4194308)):(typeof yn.componentDidMount=="function"&&(_e.flags|=4194308),_e.memoizedProps=ln,_e.memoizedState=wn),yn.props=ln,yn.state=wn,yn.context=On,ln=Tn):(typeof yn.componentDidMount=="function"&&(_e.flags|=4194308),ln=!1)}else{yn=_e.stateNode,yg($,_e),Tn=_e.memoizedProps,On=_e.type===_e.elementType?Tn:kg(_e.type,Tn),yn.props=On,Nn=_e.pendingProps,An=yn.context,wn=sn.contextType,typeof wn=="object"&&wn!==null?wn=ug(wn):(wn=Yf(sn)?Wf:H$1.current,wn=Xf(_e,wn));var In=sn.getDerivedStateFromProps;(Dn=typeof In=="function"||typeof yn.getSnapshotBeforeUpdate=="function")||typeof yn.UNSAFE_componentWillReceiveProps!="function"&&typeof yn.componentWillReceiveProps!="function"||(Tn!==Nn||An!==wn)&&Pg(_e,yn,ln,wn),wg=!1,An=_e.memoizedState,yn.state=An,Eg(_e,ln,yn,mn);var Un=_e.memoizedState;Tn!==Nn||An!==Un||Vf.current||wg?(typeof In=="function"&&(Ig(_e,sn,In,ln),Un=_e.memoizedState),(On=wg||Ng(_e,sn,On,ln,An,Un,wn)||!1)?(Dn||typeof yn.UNSAFE_componentWillUpdate!="function"&&typeof yn.componentWillUpdate!="function"||(typeof yn.componentWillUpdate=="function"&&yn.componentWillUpdate(ln,Un,wn),typeof yn.UNSAFE_componentWillUpdate=="function"&&yn.UNSAFE_componentWillUpdate(ln,Un,wn)),typeof yn.componentDidUpdate=="function"&&(_e.flags|=4),typeof yn.getSnapshotBeforeUpdate=="function"&&(_e.flags|=1024)):(typeof yn.componentDidUpdate!="function"||Tn===$.memoizedProps&&An===$.memoizedState||(_e.flags|=4),typeof yn.getSnapshotBeforeUpdate!="function"||Tn===$.memoizedProps&&An===$.memoizedState||(_e.flags|=1024),_e.memoizedProps=ln,_e.memoizedState=Un),yn.props=ln,yn.state=Un,yn.context=wn,ln=On):(typeof yn.componentDidUpdate!="function"||Tn===$.memoizedProps&&An===$.memoizedState||(_e.flags|=4),typeof yn.getSnapshotBeforeUpdate!="function"||Tn===$.memoizedProps&&An===$.memoizedState||(_e.flags|=1024),ln=!1)}return pj($,_e,sn,ln,_n,mn)}function pj($,_e,sn,ln,mn,_n){nj($,_e);var yn=(_e.flags&128)!==0;if(!ln&&!yn)return mn&&cg(_e,sn,!1),gj($,_e,_n);ln=_e.stateNode,dj.current=_e;var Tn=yn&&typeof sn.getDerivedStateFromError!="function"?null:ln.render();return _e.flags|=1,$!==null&&yn?(_e.child=yh(_e,$.child,null,_n),_e.child=yh(_e,null,Tn,_n)):ej($,_e,Tn,_n),_e.memoizedState=ln.state,mn&&cg(_e,sn,!0),_e.child}function qj($){var _e=$.stateNode;_e.pendingContext?$f($,_e.pendingContext,_e.pendingContext!==_e.context):_e.context&&$f($,_e.context,!1),Fh($,_e.containerInfo)}function rj($,_e,sn,ln,mn){return nh(),oh(mn),_e.flags|=256,ej($,_e,sn,ln),_e.child}var sj={dehydrated:null,treeContext:null,retryLane:0};function tj($){return{baseLanes:$,cachePool:null,transitions:null}}function uj($,_e){return{baseLanes:$.baseLanes|_e,cachePool:null,transitions:$.transitions}}function vj($,_e,sn){var ln=_e.pendingProps,mn=K.current,_n=!1,yn=(_e.flags&128)!==0,Tn;if((Tn=yn)||(Tn=$!==null&&$.memoizedState===null?!1:(mn&2)!==0),Tn?(_n=!0,_e.flags&=-129):($===null||$.memoizedState!==null)&&(mn|=1),G$1(K,mn&1),$===null)return kh(_e),$=_e.memoizedState,$!==null&&($=$.dehydrated,$!==null)?((_e.mode&1)===0?_e.lanes=1:$.data==="$!"?_e.lanes=8:_e.lanes=1073741824,null):(mn=ln.children,$=ln.fallback,_n?(ln=_e.mode,_n=_e.child,mn={mode:"hidden",children:mn},(ln&1)===0&&_n!==null?(_n.childLanes=0,_n.pendingProps=mn):_n=wj(mn,ln,0,null),$=xh($,ln,sn,null),_n.return=_e,$.return=_e,_n.sibling=$,_e.child=_n,_e.child.memoizedState=tj(sn),_e.memoizedState=sj,$):xj(_e,mn));if(mn=$.memoizedState,mn!==null){if(Tn=mn.dehydrated,Tn!==null){if(yn)return _e.flags&256?(_e.flags&=-257,yj($,_e,sn,Error(p$2(422)))):_e.memoizedState!==null?(_e.child=$.child,_e.flags|=128,null):(_n=ln.fallback,mn=_e.mode,ln=wj({mode:"visible",children:ln.children},mn,0,null),_n=xh(_n,mn,sn,null),_n.flags|=2,ln.return=_e,_n.return=_e,ln.sibling=_n,_e.child=ln,(_e.mode&1)!==0&&yh(_e,$.child,null,sn),_e.child.memoizedState=tj(sn),_e.memoizedState=sj,_n);if((_e.mode&1)===0)_e=yj($,_e,sn,null);else if(Tn.data==="$!")_e=yj($,_e,sn,Error(p$2(419)));else if(ln=(sn&$.childLanes)!==0,tg||ln){if(ln=P$1,ln!==null){switch(sn&-sn){case 4:_n=2;break;case 16:_n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_n=32;break;case 536870912:_n=268435456;break;default:_n=0}ln=(_n&(ln.suspendedLanes|sn))!==0?0:_n,ln!==0&&ln!==mn.retryLane&&(mn.retryLane=ln,Lg($,ln,-1))}$i(),_e=yj($,_e,sn,Error(p$2(421)))}else Tn.data==="$?"?(_e.flags|=128,_e.child=$.child,_e=zj.bind(null,$),Tn._reactRetry=_e,_e=null):(sn=mn.treeContext,eh=Kf(Tn.nextSibling),dh=_e,I$1=!0,fh=null,sn!==null&&(Vg[Wg++]=Yg,Vg[Wg++]=Zg,Vg[Wg++]=Xg,Yg=sn.id,Zg=sn.overflow,Xg=_e),_e=xj(_e,_e.pendingProps.children),_e.flags|=4096);return _e}return _n?(ln=Aj($,_e,ln.children,ln.fallback,sn),_n=_e.child,mn=$.child.memoizedState,_n.memoizedState=mn===null?tj(sn):uj(mn,sn),_n.childLanes=$.childLanes&~sn,_e.memoizedState=sj,ln):(sn=Bj($,_e,ln.children,sn),_e.memoizedState=null,sn)}return _n?(ln=Aj($,_e,ln.children,ln.fallback,sn),_n=_e.child,mn=$.child.memoizedState,_n.memoizedState=mn===null?tj(sn):uj(mn,sn),_n.childLanes=$.childLanes&~sn,_e.memoizedState=sj,ln):(sn=Bj($,_e,ln.children,sn),_e.memoizedState=null,sn)}function xj($,_e){return _e=wj({mode:"visible",children:_e},$.mode,0,null),_e.return=$,$.child=_e}function Bj($,_e,sn,ln){var mn=$.child;return $=mn.sibling,sn=th(mn,{mode:"visible",children:sn}),(_e.mode&1)===0&&(sn.lanes=ln),sn.return=_e,sn.sibling=null,$!==null&&(ln=_e.deletions,ln===null?(_e.deletions=[$],_e.flags|=16):ln.push($)),_e.child=sn}function Aj($,_e,sn,ln,mn){var _n=_e.mode;$=$.child;var yn=$.sibling,Tn={mode:"hidden",children:sn};return(_n&1)===0&&_e.child!==$?(sn=_e.child,sn.childLanes=0,sn.pendingProps=Tn,_e.deletions=null):(sn=th($,Tn),sn.subtreeFlags=$.subtreeFlags&14680064),yn!==null?ln=th(yn,ln):(ln=xh(ln,_n,mn,null),ln.flags|=2),ln.return=_e,sn.return=_e,sn.sibling=ln,_e.child=sn,ln}function yj($,_e,sn,ln){return ln!==null&&oh(ln),yh(_e,$.child,null,sn),$=xj(_e,_e.pendingProps.children),$.flags|=2,_e.memoizedState=null,$}function Cj($,_e,sn){$.lanes|=_e;var ln=$.alternate;ln!==null&&(ln.lanes|=_e),rg($.return,_e,sn)}function Dj($,_e,sn,ln,mn){var _n=$.memoizedState;_n===null?$.memoizedState={isBackwards:_e,rendering:null,renderingStartTime:0,last:ln,tail:sn,tailMode:mn}:(_n.isBackwards=_e,_n.rendering=null,_n.renderingStartTime=0,_n.last=ln,_n.tail=sn,_n.tailMode=mn)}function Ej($,_e,sn){var ln=_e.pendingProps,mn=ln.revealOrder,_n=ln.tail;if(ej($,_e,ln.children,sn),ln=K.current,(ln&2)!==0)ln=ln&1|2,_e.flags|=128;else{if($!==null&&($.flags&128)!==0)e:for($=_e.child;$!==null;){if($.tag===13)$.memoizedState!==null&&Cj($,sn,_e);else if($.tag===19)Cj($,sn,_e);else if($.child!==null){$.child.return=$,$=$.child;continue}if($===_e)break e;for(;$.sibling===null;){if($.return===null||$.return===_e)break e;$=$.return}$.sibling.return=$.return,$=$.sibling}ln&=1}if(G$1(K,ln),(_e.mode&1)===0)_e.memoizedState=null;else switch(mn){case"forwards":for(sn=_e.child,mn=null;sn!==null;)$=sn.alternate,$!==null&&Jh($)===null&&(mn=sn),sn=sn.sibling;sn=mn,sn===null?(mn=_e.child,_e.child=null):(mn=sn.sibling,sn.sibling=null),Dj(_e,!1,mn,sn,_n);break;case"backwards":for(sn=null,mn=_e.child,_e.child=null;mn!==null;){if($=mn.alternate,$!==null&&Jh($)===null){_e.child=mn;break}$=mn.sibling,mn.sibling=sn,sn=mn,mn=$}Dj(_e,!0,sn,null,_n);break;case"together":Dj(_e,!1,null,null,void 0);break;default:_e.memoizedState=null}return _e.child}function gj($,_e,sn){if($!==null&&(_e.dependencies=$.dependencies),Fg|=_e.lanes,(sn&_e.childLanes)===0)return null;if($!==null&&_e.child!==$.child)throw Error(p$2(153));if(_e.child!==null){for($=_e.child,sn=th($,$.pendingProps),_e.child=sn,sn.return=_e;$.sibling!==null;)$=$.sibling,sn=sn.sibling=th($,$.pendingProps),sn.return=_e;sn.sibling=null}return _e.child}function Fj($,_e,sn){switch(_e.tag){case 3:qj(_e),nh();break;case 5:Hh(_e);break;case 1:Yf(_e.type)&&bg(_e);break;case 4:Fh(_e,_e.stateNode.containerInfo);break;case 10:var ln=_e.type._context,mn=_e.memoizedProps.value;G$1(lg,ln._currentValue),ln._currentValue=mn;break;case 13:if(ln=_e.memoizedState,ln!==null)return ln.dehydrated!==null?(G$1(K,K.current&1),_e.flags|=128,null):(sn&_e.child.childLanes)!==0?vj($,_e,sn):(G$1(K,K.current&1),$=gj($,_e,sn),$!==null?$.sibling:null);G$1(K,K.current&1);break;case 19:if(ln=(sn&_e.childLanes)!==0,($.flags&128)!==0){if(ln)return Ej($,_e,sn);_e.flags|=128}if(mn=_e.memoizedState,mn!==null&&(mn.rendering=null,mn.tail=null,mn.lastEffect=null),G$1(K,K.current),ln)break;return null;case 22:case 23:return _e.lanes=0,lj($,_e,sn)}return gj($,_e,sn)}function Gj($,_e){switch(ch(_e),_e.tag){case 1:return Yf(_e.type)&&Zf(),$=_e.flags,$&65536?(_e.flags=$&-65537|128,_e):null;case 3:return Gh(),E$1(Vf),E$1(H$1),Lh(),$=_e.flags,($&65536)!==0&&($&128)===0?(_e.flags=$&-65537|128,_e):null;case 5:return Ih(_e),null;case 13:if(E$1(K),$=_e.memoizedState,$!==null&&$.dehydrated!==null){if(_e.alternate===null)throw Error(p$2(340));nh()}return $=_e.flags,$&65536?(_e.flags=$&-65537|128,_e):null;case 19:return E$1(K),null;case 4:return Gh(),null;case 10:return qg(_e.type._context),null;case 22:case 23:return bj(),null;case 24:return null;default:return null}}var Hj=!1,S$1=!1,Ij=typeof WeakSet=="function"?WeakSet:Set,T$1=null;function Jj($,_e){var sn=$.ref;if(sn!==null)if(typeof sn=="function")try{sn(null)}catch(ln){U$1($,_e,ln)}else sn.current=null}function Kj($,_e,sn){try{sn()}catch(ln){U$1($,_e,ln)}}var Lj=!1;function Mj($,_e){if(Bf=cd,$=Le(),Me($)){if("selectionStart"in $)var sn={start:$.selectionStart,end:$.selectionEnd};else e:{sn=(sn=$.ownerDocument)&&sn.defaultView||window;var ln=sn.getSelection&&sn.getSelection();if(ln&&ln.rangeCount!==0){sn=ln.anchorNode;var mn=ln.anchorOffset,_n=ln.focusNode;ln=ln.focusOffset;try{sn.nodeType,_n.nodeType}catch{sn=null;break e}var yn=0,Tn=-1,wn=-1,On=0,Dn=0,Nn=$,An=null;n:for(;;){for(var In;Nn!==sn||mn!==0&&Nn.nodeType!==3||(Tn=yn+mn),Nn!==_n||ln!==0&&Nn.nodeType!==3||(wn=yn+ln),Nn.nodeType===3&&(yn+=Nn.nodeValue.length),(In=Nn.firstChild)!==null;)An=Nn,Nn=In;for(;;){if(Nn===$)break n;if(An===sn&&++On===mn&&(Tn=yn),An===_n&&++Dn===ln&&(wn=yn),(In=Nn.nextSibling)!==null)break;Nn=An,An=Nn.parentNode}Nn=In}sn=Tn===-1||wn===-1?null:{start:Tn,end:wn}}else sn=null}sn=sn||{start:0,end:0}}else sn=null;for(Cf={focusedElem:$,selectionRange:sn},cd=!1,T$1=_e;T$1!==null;)if(_e=T$1,$=_e.child,(_e.subtreeFlags&1028)!==0&&$!==null)$.return=_e,T$1=$;else for(;T$1!==null;){_e=T$1;try{var Un=_e.alternate;if((_e.flags&1024)!==0)switch(_e.tag){case 0:case 11:case 15:break;case 1:if(Un!==null){var Ln=Un.memoizedProps,qn=Un.memoizedState,kn=_e.stateNode,xn=kn.getSnapshotBeforeUpdate(_e.elementType===_e.type?Ln:kg(_e.type,Ln),qn);kn.__reactInternalSnapshotBeforeUpdate=xn}break;case 3:var $n=_e.stateNode.containerInfo;if($n.nodeType===1)$n.textContent="";else if($n.nodeType===9){var zn=$n.body;zn!=null&&(zn.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(p$2(163))}}catch(Yn){U$1(_e,_e.return,Yn)}if($=_e.sibling,$!==null){$.return=_e.return,T$1=$;break}T$1=_e.return}return Un=Lj,Lj=!1,Un}function Nj($,_e,sn){var ln=_e.updateQueue;if(ln=ln!==null?ln.lastEffect:null,ln!==null){var mn=ln=ln.next;do{if((mn.tag&$)===$){var _n=mn.destroy;mn.destroy=void 0,_n!==void 0&&Kj(_e,sn,_n)}mn=mn.next}while(mn!==ln)}}function Oj($,_e){if(_e=_e.updateQueue,_e=_e!==null?_e.lastEffect:null,_e!==null){var sn=_e=_e.next;do{if((sn.tag&$)===$){var ln=sn.create;sn.destroy=ln()}sn=sn.next}while(sn!==_e)}}function Pj($){var _e=$.ref;if(_e!==null){var sn=$.stateNode;switch($.tag){case 5:$=sn;break;default:$=sn}typeof _e=="function"?_e($):_e.current=$}}function Qj($){var _e=$.alternate;_e!==null&&($.alternate=null,Qj(_e)),$.child=null,$.deletions=null,$.sibling=null,$.tag===5&&(_e=$.stateNode,_e!==null&&(delete _e[Nf],delete _e[Of],delete _e[nf],delete _e[Pf],delete _e[Qf])),$.stateNode=null,$.return=null,$.dependencies=null,$.memoizedProps=null,$.memoizedState=null,$.pendingProps=null,$.stateNode=null,$.updateQueue=null}function Rj($){return $.tag===5||$.tag===3||$.tag===4}function Sj($){e:for(;;){for(;$.sibling===null;){if($.return===null||Rj($.return))return null;$=$.return}for($.sibling.return=$.return,$=$.sibling;$.tag!==5&&$.tag!==6&&$.tag!==18;){if($.flags&2||$.child===null||$.tag===4)continue e;$.child.return=$,$=$.child}if(!($.flags&2))return $.stateNode}}function Tj($,_e,sn){var ln=$.tag;if(ln===5||ln===6)$=$.stateNode,_e?sn.nodeType===8?sn.parentNode.insertBefore($,_e):sn.insertBefore($,_e):(sn.nodeType===8?(_e=sn.parentNode,_e.insertBefore($,sn)):(_e=sn,_e.appendChild($)),sn=sn._reactRootContainer,sn!=null||_e.onclick!==null||(_e.onclick=Af));else if(ln!==4&&($=$.child,$!==null))for(Tj($,_e,sn),$=$.sibling;$!==null;)Tj($,_e,sn),$=$.sibling}function Uj($,_e,sn){var ln=$.tag;if(ln===5||ln===6)$=$.stateNode,_e?sn.insertBefore($,_e):sn.appendChild($);else if(ln!==4&&($=$.child,$!==null))for(Uj($,_e,sn),$=$.sibling;$!==null;)Uj($,_e,sn),$=$.sibling}var V=null,Vj=!1;function Wj($,_e,sn){for(sn=sn.child;sn!==null;)Xj($,_e,sn),sn=sn.sibling}function Xj($,_e,sn){if(kc&&typeof kc.onCommitFiberUnmount=="function")try{kc.onCommitFiberUnmount(jc,sn)}catch{}switch(sn.tag){case 5:S$1||Jj(sn,_e);case 6:var ln=V,mn=Vj;V=null,Wj($,_e,sn),V=ln,Vj=mn,V!==null&&(Vj?($=V,sn=sn.stateNode,$.nodeType===8?$.parentNode.removeChild(sn):$.removeChild(sn)):V.removeChild(sn.stateNode));break;case 18:V!==null&&(Vj?($=V,sn=sn.stateNode,$.nodeType===8?Jf($.parentNode,sn):$.nodeType===1&&Jf($,sn),ad($)):Jf(V,sn.stateNode));break;case 4:ln=V,mn=Vj,V=sn.stateNode.containerInfo,Vj=!0,Wj($,_e,sn),V=ln,Vj=mn;break;case 0:case 11:case 14:case 15:if(!S$1&&(ln=sn.updateQueue,ln!==null&&(ln=ln.lastEffect,ln!==null))){mn=ln=ln.next;do{var _n=mn,yn=_n.destroy;_n=_n.tag,yn!==void 0&&((_n&2)!==0||(_n&4)!==0)&&Kj(sn,_e,yn),mn=mn.next}while(mn!==ln)}Wj($,_e,sn);break;case 1:if(!S$1&&(Jj(sn,_e),ln=sn.stateNode,typeof ln.componentWillUnmount=="function"))try{ln.props=sn.memoizedProps,ln.state=sn.memoizedState,ln.componentWillUnmount()}catch(Tn){U$1(sn,_e,Tn)}Wj($,_e,sn);break;case 21:Wj($,_e,sn);break;case 22:sn.mode&1?(S$1=(ln=S$1)||sn.memoizedState!==null,Wj($,_e,sn),S$1=ln):Wj($,_e,sn);break;default:Wj($,_e,sn)}}function Yj($){var _e=$.updateQueue;if(_e!==null){$.updateQueue=null;var sn=$.stateNode;sn===null&&(sn=$.stateNode=new Ij),_e.forEach(function(ln){var mn=Zj.bind(null,$,ln);sn.has(ln)||(sn.add(ln),ln.then(mn,mn))})}}function ak($,_e){var sn=_e.deletions;if(sn!==null)for(var ln=0;ln<sn.length;ln++){var mn=sn[ln];try{var _n=$,yn=_e,Tn=yn;e:for(;Tn!==null;){switch(Tn.tag){case 5:V=Tn.stateNode,Vj=!1;break e;case 3:V=Tn.stateNode.containerInfo,Vj=!0;break e;case 4:V=Tn.stateNode.containerInfo,Vj=!0;break e}Tn=Tn.return}if(V===null)throw Error(p$2(160));Xj(_n,yn,mn),V=null,Vj=!1;var wn=mn.alternate;wn!==null&&(wn.return=null),mn.return=null}catch(On){U$1(mn,_e,On)}}if(_e.subtreeFlags&12854)for(_e=_e.child;_e!==null;)bk(_e,$),_e=_e.sibling}function bk($,_e){var sn=$.alternate,ln=$.flags;switch($.tag){case 0:case 11:case 14:case 15:if(ak(_e,$),ck($),ln&4){try{Nj(3,$,$.return),Oj(3,$)}catch(Un){U$1($,$.return,Un)}try{Nj(5,$,$.return)}catch(Un){U$1($,$.return,Un)}}break;case 1:ak(_e,$),ck($),ln&512&&sn!==null&&Jj(sn,sn.return);break;case 5:if(ak(_e,$),ck($),ln&512&&sn!==null&&Jj(sn,sn.return),$.flags&32){var mn=$.stateNode;try{nb(mn,"")}catch(Un){U$1($,$.return,Un)}}if(ln&4&&(mn=$.stateNode,mn!=null)){var _n=$.memoizedProps,yn=sn!==null?sn.memoizedProps:_n,Tn=$.type,wn=$.updateQueue;if($.updateQueue=null,wn!==null)try{Tn==="input"&&_n.type==="radio"&&_n.name!=null&&Za(mn,_n),ub(Tn,yn);var On=ub(Tn,_n);for(yn=0;yn<wn.length;yn+=2){var Dn=wn[yn],Nn=wn[yn+1];Dn==="style"?rb(mn,Nn):Dn==="dangerouslySetInnerHTML"?mb(mn,Nn):Dn==="children"?nb(mn,Nn):sa(mn,Dn,Nn,On)}switch(Tn){case"input":$a(mn,_n);break;case"textarea":hb(mn,_n);break;case"select":var An=mn._wrapperState.wasMultiple;mn._wrapperState.wasMultiple=!!_n.multiple;var In=_n.value;In!=null?eb(mn,!!_n.multiple,In,!1):An!==!!_n.multiple&&(_n.defaultValue!=null?eb(mn,!!_n.multiple,_n.defaultValue,!0):eb(mn,!!_n.multiple,_n.multiple?[]:"",!1))}mn[Of]=_n}catch(Un){U$1($,$.return,Un)}}break;case 6:if(ak(_e,$),ck($),ln&4){if($.stateNode===null)throw Error(p$2(162));On=$.stateNode,Dn=$.memoizedProps;try{On.nodeValue=Dn}catch(Un){U$1($,$.return,Un)}}break;case 3:if(ak(_e,$),ck($),ln&4&&sn!==null&&sn.memoizedState.isDehydrated)try{ad(_e.containerInfo)}catch(Un){U$1($,$.return,Un)}break;case 4:ak(_e,$),ck($);break;case 13:ak(_e,$),ck($),On=$.child,On.flags&8192&&On.memoizedState!==null&&(On.alternate===null||On.alternate.memoizedState===null)&&(dk=B$1()),ln&4&&Yj($);break;case 22:if(On=sn!==null&&sn.memoizedState!==null,$.mode&1?(S$1=(Dn=S$1)||On,ak(_e,$),S$1=Dn):ak(_e,$),ck($),ln&8192){Dn=$.memoizedState!==null;e:for(Nn=null,An=$;;){if(An.tag===5){if(Nn===null){Nn=An;try{mn=An.stateNode,Dn?(_n=mn.style,typeof _n.setProperty=="function"?_n.setProperty("display","none","important"):_n.display="none"):(Tn=An.stateNode,wn=An.memoizedProps.style,yn=wn!=null&&wn.hasOwnProperty("display")?wn.display:null,Tn.style.display=qb("display",yn))}catch(Un){U$1($,$.return,Un)}}}else if(An.tag===6){if(Nn===null)try{An.stateNode.nodeValue=Dn?"":An.memoizedProps}catch(Un){U$1($,$.return,Un)}}else if((An.tag!==22&&An.tag!==23||An.memoizedState===null||An===$)&&An.child!==null){An.child.return=An,An=An.child;continue}if(An===$)break e;for(;An.sibling===null;){if(An.return===null||An.return===$)break e;Nn===An&&(Nn=null),An=An.return}Nn===An&&(Nn=null),An.sibling.return=An.return,An=An.sibling}if(Dn&&!On&&($.mode&1)!==0)for(T$1=$,$=$.child;$!==null;){for(On=T$1=$;T$1!==null;){switch(Dn=T$1,Nn=Dn.child,Dn.tag){case 0:case 11:case 14:case 15:Nj(4,Dn,Dn.return);break;case 1:if(Jj(Dn,Dn.return),_n=Dn.stateNode,typeof _n.componentWillUnmount=="function"){An=Dn,In=Dn.return;try{mn=An,_n.props=mn.memoizedProps,_n.state=mn.memoizedState,_n.componentWillUnmount()}catch(Un){U$1(An,In,Un)}}break;case 5:Jj(Dn,Dn.return);break;case 22:if(Dn.memoizedState!==null){ek(On);continue}}Nn!==null?(Nn.return=Dn,T$1=Nn):ek(On)}$=$.sibling}}break;case 19:ak(_e,$),ck($),ln&4&&Yj($);break;case 21:break;default:ak(_e,$),ck($)}}function ck($){var _e=$.flags;if(_e&2){try{e:{for(var sn=$.return;sn!==null;){if(Rj(sn)){var ln=sn;break e}sn=sn.return}throw Error(p$2(160))}switch(ln.tag){case 5:var mn=ln.stateNode;ln.flags&32&&(nb(mn,""),ln.flags&=-33);var _n=Sj($);Uj($,_n,mn);break;case 3:case 4:var yn=ln.stateNode.containerInfo,Tn=Sj($);Tj($,Tn,yn);break;default:throw Error(p$2(161))}}catch(wn){U$1($,$.return,wn)}$.flags&=-3}_e&4096&&($.flags&=-4097)}function fk($,_e,sn){T$1=$,gk($)}function gk($,_e,sn){for(var ln=($.mode&1)!==0;T$1!==null;){var mn=T$1,_n=mn.child;if(mn.tag===22&&ln){var yn=mn.memoizedState!==null||Hj;if(!yn){var Tn=mn.alternate,wn=Tn!==null&&Tn.memoizedState!==null||S$1;Tn=Hj;var On=S$1;if(Hj=yn,(S$1=wn)&&!On)for(T$1=mn;T$1!==null;)yn=T$1,wn=yn.child,yn.tag===22&&yn.memoizedState!==null?hk(mn):wn!==null?(wn.return=yn,T$1=wn):hk(mn);for(;_n!==null;)T$1=_n,gk(_n),_n=_n.sibling;T$1=mn,Hj=Tn,S$1=On}ik($)}else(mn.subtreeFlags&8772)!==0&&_n!==null?(_n.return=mn,T$1=_n):ik($)}}function ik($){for(;T$1!==null;){var _e=T$1;if((_e.flags&8772)!==0){var sn=_e.alternate;try{if((_e.flags&8772)!==0)switch(_e.tag){case 0:case 11:case 15:S$1||Oj(5,_e);break;case 1:var ln=_e.stateNode;if(_e.flags&4&&!S$1)if(sn===null)ln.componentDidMount();else{var mn=_e.elementType===_e.type?sn.memoizedProps:kg(_e.type,sn.memoizedProps);ln.componentDidUpdate(mn,sn.memoizedState,ln.__reactInternalSnapshotBeforeUpdate)}var _n=_e.updateQueue;_n!==null&&Gg(_e,_n,ln);break;case 3:var yn=_e.updateQueue;if(yn!==null){if(sn=null,_e.child!==null)switch(_e.child.tag){case 5:sn=_e.child.stateNode;break;case 1:sn=_e.child.stateNode}Gg(_e,yn,sn)}break;case 5:var Tn=_e.stateNode;if(sn===null&&_e.flags&4){sn=Tn;var wn=_e.memoizedProps;switch(_e.type){case"button":case"input":case"select":case"textarea":wn.autoFocus&&sn.focus();break;case"img":wn.src&&(sn.src=wn.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(_e.memoizedState===null){var On=_e.alternate;if(On!==null){var Dn=On.memoizedState;if(Dn!==null){var Nn=Dn.dehydrated;Nn!==null&&ad(Nn)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(p$2(163))}S$1||_e.flags&512&&Pj(_e)}catch(An){U$1(_e,_e.return,An)}}if(_e===$){T$1=null;break}if(sn=_e.sibling,sn!==null){sn.return=_e.return,T$1=sn;break}T$1=_e.return}}function ek($){for(;T$1!==null;){var _e=T$1;if(_e===$){T$1=null;break}var sn=_e.sibling;if(sn!==null){sn.return=_e.return,T$1=sn;break}T$1=_e.return}}function hk($){for(;T$1!==null;){var _e=T$1;try{switch(_e.tag){case 0:case 11:case 15:var sn=_e.return;try{Oj(4,_e)}catch(wn){U$1(_e,sn,wn)}break;case 1:var ln=_e.stateNode;if(typeof ln.componentDidMount=="function"){var mn=_e.return;try{ln.componentDidMount()}catch(wn){U$1(_e,mn,wn)}}var _n=_e.return;try{Pj(_e)}catch(wn){U$1(_e,_n,wn)}break;case 5:var yn=_e.return;try{Pj(_e)}catch(wn){U$1(_e,yn,wn)}}}catch(wn){U$1(_e,_e.return,wn)}if(_e===$){T$1=null;break}var Tn=_e.sibling;if(Tn!==null){Tn.return=_e.return,T$1=Tn;break}T$1=_e.return}}var jk=Math.ceil,kk=ta.ReactCurrentDispatcher,lk=ta.ReactCurrentOwner,mk=ta.ReactCurrentBatchConfig,W$1=0,P$1=null,X$1=null,Y=0,cj=0,mj=Tf(0),R$1=0,nk=null,Fg=0,ok=0,pk=0,qk=null,rk=null,dk=0,aj=1/0,sk=null,Li=!1,Mi=null,Oi=null,tk=!1,uk=null,vk=0,wk=0,xk=null,yk=-1,zk=0;function Jg(){return(W$1&6)!==0?B$1():yk!==-1?yk:yk=B$1()}function Kg($){return($.mode&1)===0?1:(W$1&2)!==0&&Y!==0?Y&-Y:jg.transition!==null?(zk===0&&(zk=xc()),zk):($=C,$!==0||($=window.event,$=$===void 0?16:id($.type)),$)}function Lg($,_e,sn){if(50<wk)throw wk=0,xk=null,Error(p$2(185));var ln=Ak($,_e);return ln===null?null:(zc(ln,_e,sn),((W$1&2)===0||ln!==P$1)&&(ln===P$1&&((W$1&2)===0&&(ok|=_e),R$1===4&&Bk(ln,Y)),Ck(ln,sn),_e===1&&W$1===0&&($.mode&1)===0&&(aj=B$1()+500,eg&&ig())),ln)}function Ak($,_e){$.lanes|=_e;var sn=$.alternate;for(sn!==null&&(sn.lanes|=_e),sn=$,$=$.return;$!==null;)$.childLanes|=_e,sn=$.alternate,sn!==null&&(sn.childLanes|=_e),sn=$,$=$.return;return sn.tag===3?sn.stateNode:null}function Bg($){return(P$1!==null||vg!==null)&&($.mode&1)!==0&&(W$1&2)===0}function Ck($,_e){var sn=$.callbackNode;vc($,_e);var ln=tc($,$===P$1?Y:0);if(ln===0)sn!==null&&ac(sn),$.callbackNode=null,$.callbackPriority=0;else if(_e=ln&-ln,$.callbackPriority!==_e){if(sn!=null&&ac(sn),_e===1)$.tag===0?hg(Dk.bind(null,$)):gg(Dk.bind(null,$)),If(function(){W$1===0&&ig()}),sn=null;else{switch(Cc(ln)){case 1:sn=ec;break;case 4:sn=fc;break;case 16:sn=gc;break;case 536870912:sn=ic;break;default:sn=gc}sn=Ek(sn,Fk.bind(null,$))}$.callbackPriority=_e,$.callbackNode=sn}}function Fk($,_e){if(yk=-1,zk=0,(W$1&6)!==0)throw Error(p$2(327));var sn=$.callbackNode;if(Gk()&&$.callbackNode!==sn)return null;var ln=tc($,$===P$1?Y:0);if(ln===0)return null;if((ln&30)!==0||(ln&$.expiredLanes)!==0||_e)_e=Hk($,ln);else{_e=ln;var mn=W$1;W$1|=2;var _n=Ik();(P$1!==$||Y!==_e)&&(sk=null,aj=B$1()+500,Jk($,_e));do try{Kk();break}catch(Tn){Lk($,Tn)}while(1);pg(),kk.current=_n,W$1=mn,X$1!==null?_e=0:(P$1=null,Y=0,_e=R$1)}if(_e!==0){if(_e===2&&(mn=wc($),mn!==0&&(ln=mn,_e=Mk($,mn))),_e===1)throw sn=nk,Jk($,0),Bk($,ln),Ck($,B$1()),sn;if(_e===6)Bk($,ln);else{if(mn=$.current.alternate,(ln&30)===0&&!Nk(mn)&&(_e=Hk($,ln),_e===2&&(_n=wc($),_n!==0&&(ln=_n,_e=Mk($,_n))),_e===1))throw sn=nk,Jk($,0),Bk($,ln),Ck($,B$1()),sn;switch($.finishedWork=mn,$.finishedLanes=ln,_e){case 0:case 1:throw Error(p$2(345));case 2:Ok($,rk,sk);break;case 3:if(Bk($,ln),(ln&130023424)===ln&&(_e=dk+500-B$1(),10<_e)){if(tc($,0)!==0)break;if(mn=$.suspendedLanes,(mn&ln)!==ln){Jg(),$.pingedLanes|=$.suspendedLanes&mn;break}$.timeoutHandle=Ef(Ok.bind(null,$,rk,sk),_e);break}Ok($,rk,sk);break;case 4:if(Bk($,ln),(ln&4194240)===ln)break;for(_e=$.eventTimes,mn=-1;0<ln;){var yn=31-nc(ln);_n=1<<yn,yn=_e[yn],yn>mn&&(mn=yn),ln&=~_n}if(ln=mn,ln=B$1()-ln,ln=(120>ln?120:480>ln?480:1080>ln?1080:1920>ln?1920:3e3>ln?3e3:4320>ln?4320:1960*jk(ln/1960))-ln,10<ln){$.timeoutHandle=Ef(Ok.bind(null,$,rk,sk),ln);break}Ok($,rk,sk);break;case 5:Ok($,rk,sk);break;default:throw Error(p$2(329))}}}return Ck($,B$1()),$.callbackNode===sn?Fk.bind(null,$):null}function Mk($,_e){var sn=qk;return $.current.memoizedState.isDehydrated&&(Jk($,_e).flags|=256),$=Hk($,_e),$!==2&&(_e=rk,rk=sn,_e!==null&&Zi(_e)),$}function Zi($){rk===null?rk=$:rk.push.apply(rk,$)}function Nk($){for(var _e=$;;){if(_e.flags&16384){var sn=_e.updateQueue;if(sn!==null&&(sn=sn.stores,sn!==null))for(var ln=0;ln<sn.length;ln++){var mn=sn[ln],_n=mn.getSnapshot;mn=mn.value;try{if(!Ge(_n(),mn))return!1}catch{return!1}}}if(sn=_e.child,_e.subtreeFlags&16384&&sn!==null)sn.return=_e,_e=sn;else{if(_e===$)break;for(;_e.sibling===null;){if(_e.return===null||_e.return===$)return!0;_e=_e.return}_e.sibling.return=_e.return,_e=_e.sibling}}return!0}function Bk($,_e){for(_e&=~pk,_e&=~ok,$.suspendedLanes|=_e,$.pingedLanes&=~_e,$=$.expirationTimes;0<_e;){var sn=31-nc(_e),ln=1<<sn;$[sn]=-1,_e&=~ln}}function Dk($){if((W$1&6)!==0)throw Error(p$2(327));Gk();var _e=tc($,0);if((_e&1)===0)return Ck($,B$1()),null;var sn=Hk($,_e);if($.tag!==0&&sn===2){var ln=wc($);ln!==0&&(_e=ln,sn=Mk($,ln))}if(sn===1)throw sn=nk,Jk($,0),Bk($,_e),Ck($,B$1()),sn;if(sn===6)throw Error(p$2(345));return $.finishedWork=$.current.alternate,$.finishedLanes=_e,Ok($,rk,sk),Ck($,B$1()),null}function Pk($,_e){var sn=W$1;W$1|=1;try{return $(_e)}finally{W$1=sn,W$1===0&&(aj=B$1()+500,eg&&ig())}}function Qk($){uk!==null&&uk.tag===0&&(W$1&6)===0&&Gk();var _e=W$1;W$1|=1;var sn=mk.transition,ln=C;try{if(mk.transition=null,C=1,$)return $()}finally{C=ln,mk.transition=sn,W$1=_e,(W$1&6)===0&&ig()}}function bj(){cj=mj.current,E$1(mj)}function Jk($,_e){$.finishedWork=null,$.finishedLanes=0;var sn=$.timeoutHandle;if(sn!==-1&&($.timeoutHandle=-1,Ff(sn)),X$1!==null)for(sn=X$1.return;sn!==null;){var ln=sn;switch(ch(ln),ln.tag){case 1:ln=ln.type.childContextTypes,ln!=null&&Zf();break;case 3:Gh(),E$1(Vf),E$1(H$1),Lh();break;case 5:Ih(ln);break;case 4:Gh();break;case 13:E$1(K);break;case 19:E$1(K);break;case 10:qg(ln.type._context);break;case 22:case 23:bj()}sn=sn.return}if(P$1=$,X$1=$=th($.current,null),Y=cj=_e,R$1=0,nk=null,pk=ok=Fg=0,rk=qk=null,vg!==null){for(_e=0;_e<vg.length;_e++)if(sn=vg[_e],ln=sn.interleaved,ln!==null){sn.interleaved=null;var mn=ln.next,_n=sn.pending;if(_n!==null){var yn=_n.next;_n.next=mn,ln.next=yn}sn.pending=ln}vg=null}return $}function Lk($,_e){do{var sn=X$1;try{if(pg(),Mh.current=Yh,Ph){for(var ln=L$1.memoizedState;ln!==null;){var mn=ln.queue;mn!==null&&(mn.pending=null),ln=ln.next}Ph=!1}if(Oh=0,N=M$1=L$1=null,Qh=!1,Rh=0,lk.current=null,sn===null||sn.return===null){R$1=1,nk=_e,X$1=null;break}e:{var _n=$,yn=sn.return,Tn=sn,wn=_e;if(_e=Y,Tn.flags|=32768,wn!==null&&typeof wn=="object"&&typeof wn.then=="function"){var On=wn,Dn=Tn,Nn=Dn.tag;if((Dn.mode&1)===0&&(Nn===0||Nn===11||Nn===15)){var An=Dn.alternate;An?(Dn.updateQueue=An.updateQueue,Dn.memoizedState=An.memoizedState,Dn.lanes=An.lanes):(Dn.updateQueue=null,Dn.memoizedState=null)}var In=Ri(yn);if(In!==null){In.flags&=-257,Si(In,yn,Tn,_n,_e),In.mode&1&&Pi(_n,On,_e),_e=In,wn=On;var Un=_e.updateQueue;if(Un===null){var Ln=new Set;Ln.add(wn),_e.updateQueue=Ln}else Un.add(wn);break e}else{if((_e&1)===0){Pi(_n,On,_e),$i();break e}wn=Error(p$2(426))}}else if(I$1&&Tn.mode&1){var qn=Ri(yn);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),Si(qn,yn,Tn,_n,_e),oh(wn);break e}}_n=wn,R$1!==4&&(R$1=2),qk===null?qk=[_n]:qk.push(_n),wn=Hi(wn,Tn),Tn=yn;do{switch(Tn.tag){case 3:Tn.flags|=65536,_e&=-_e,Tn.lanes|=_e;var kn=Ki(Tn,wn,_e);Dg(Tn,kn);break e;case 1:_n=wn;var xn=Tn.type,$n=Tn.stateNode;if((Tn.flags&128)===0&&(typeof xn.getDerivedStateFromError=="function"||$n!==null&&typeof $n.componentDidCatch=="function"&&(Oi===null||!Oi.has($n)))){Tn.flags|=65536,_e&=-_e,Tn.lanes|=_e;var zn=Ni(Tn,_n,_e);Dg(Tn,zn);break e}}Tn=Tn.return}while(Tn!==null)}Rk(sn)}catch(Yn){_e=Yn,X$1===sn&&sn!==null&&(X$1=sn=sn.return);continue}break}while(1)}function Ik(){var $=kk.current;return kk.current=Yh,$===null?Yh:$}function $i(){(R$1===0||R$1===3||R$1===2)&&(R$1=4),P$1===null||(Fg&268435455)===0&&(ok&268435455)===0||Bk(P$1,Y)}function Hk($,_e){var sn=W$1;W$1|=2;var ln=Ik();(P$1!==$||Y!==_e)&&(sk=null,Jk($,_e));do try{Sk();break}catch(mn){Lk($,mn)}while(1);if(pg(),W$1=sn,kk.current=ln,X$1!==null)throw Error(p$2(261));return P$1=null,Y=0,R$1}function Sk(){for(;X$1!==null;)Tk(X$1)}function Kk(){for(;X$1!==null&&!bc();)Tk(X$1)}function Tk($){var _e=Uk($.alternate,$,cj);$.memoizedProps=$.pendingProps,_e===null?Rk($):X$1=_e,lk.current=null}function Rk($){var _e=$;do{var sn=_e.alternate;if($=_e.return,(_e.flags&32768)===0){if(sn=Yi(sn,_e,cj),sn!==null){X$1=sn;return}}else{if(sn=Gj(sn,_e),sn!==null){sn.flags&=32767,X$1=sn;return}if($!==null)$.flags|=32768,$.subtreeFlags=0,$.deletions=null;else{R$1=6,X$1=null;return}}if(_e=_e.sibling,_e!==null){X$1=_e;return}X$1=_e=$}while(_e!==null);R$1===0&&(R$1=5)}function Ok($,_e,sn){var ln=C,mn=mk.transition;try{mk.transition=null,C=1,Vk($,_e,sn,ln)}finally{mk.transition=mn,C=ln}return null}function Vk($,_e,sn,ln){do Gk();while(uk!==null);if((W$1&6)!==0)throw Error(p$2(327));sn=$.finishedWork;var mn=$.finishedLanes;if(sn===null)return null;if($.finishedWork=null,$.finishedLanes=0,sn===$.current)throw Error(p$2(177));$.callbackNode=null,$.callbackPriority=0;var _n=sn.lanes|sn.childLanes;if(Ac($,_n),$===P$1&&(X$1=P$1=null,Y=0),(sn.subtreeFlags&2064)===0&&(sn.flags&2064)===0||tk||(tk=!0,Ek(gc,function(){return Gk(),null})),_n=(sn.flags&15990)!==0,(sn.subtreeFlags&15990)!==0||_n){_n=mk.transition,mk.transition=null;var yn=C;C=1;var Tn=W$1;W$1|=4,lk.current=null,Mj($,sn),bk(sn,$),Ne(Cf),cd=!!Bf,Cf=Bf=null,$.current=sn,fk(sn),cc(),W$1=Tn,C=yn,mk.transition=_n}else $.current=sn;if(tk&&(tk=!1,uk=$,vk=mn),_n=$.pendingLanes,_n===0&&(Oi=null),lc(sn.stateNode),Ck($,B$1()),_e!==null)for(ln=$.onRecoverableError,sn=0;sn<_e.length;sn++)ln(_e[sn]);if(Li)throw Li=!1,$=Mi,Mi=null,$;return(vk&1)!==0&&$.tag!==0&&Gk(),_n=$.pendingLanes,(_n&1)!==0?$===xk?wk++:(wk=0,xk=$):wk=0,ig(),null}function Gk(){if(uk!==null){var $=Cc(vk),_e=mk.transition,sn=C;try{if(mk.transition=null,C=16>$?16:$,uk===null)var ln=!1;else{if($=uk,uk=null,vk=0,(W$1&6)!==0)throw Error(p$2(331));var mn=W$1;for(W$1|=4,T$1=$.current;T$1!==null;){var _n=T$1,yn=_n.child;if((T$1.flags&16)!==0){var Tn=_n.deletions;if(Tn!==null){for(var wn=0;wn<Tn.length;wn++){var On=Tn[wn];for(T$1=On;T$1!==null;){var Dn=T$1;switch(Dn.tag){case 0:case 11:case 15:Nj(8,Dn,_n)}var Nn=Dn.child;if(Nn!==null)Nn.return=Dn,T$1=Nn;else for(;T$1!==null;){Dn=T$1;var An=Dn.sibling,In=Dn.return;if(Qj(Dn),Dn===On){T$1=null;break}if(An!==null){An.return=In,T$1=An;break}T$1=In}}}var Un=_n.alternate;if(Un!==null){var Ln=Un.child;if(Ln!==null){Un.child=null;do{var qn=Ln.sibling;Ln.sibling=null,Ln=qn}while(Ln!==null)}}T$1=_n}}if((_n.subtreeFlags&2064)!==0&&yn!==null)yn.return=_n,T$1=yn;else e:for(;T$1!==null;){if(_n=T$1,(_n.flags&2048)!==0)switch(_n.tag){case 0:case 11:case 15:Nj(9,_n,_n.return)}var kn=_n.sibling;if(kn!==null){kn.return=_n.return,T$1=kn;break e}T$1=_n.return}}var xn=$.current;for(T$1=xn;T$1!==null;){yn=T$1;var $n=yn.child;if((yn.subtreeFlags&2064)!==0&&$n!==null)$n.return=yn,T$1=$n;else e:for(yn=xn;T$1!==null;){if(Tn=T$1,(Tn.flags&2048)!==0)try{switch(Tn.tag){case 0:case 11:case 15:Oj(9,Tn)}}catch(Yn){U$1(Tn,Tn.return,Yn)}if(Tn===yn){T$1=null;break e}var zn=Tn.sibling;if(zn!==null){zn.return=Tn.return,T$1=zn;break e}T$1=Tn.return}}if(W$1=mn,ig(),kc&&typeof kc.onPostCommitFiberRoot=="function")try{kc.onPostCommitFiberRoot(jc,$)}catch{}ln=!0}return ln}finally{C=sn,mk.transition=_e}}return!1}function Wk($,_e,sn){_e=Hi(sn,_e),_e=Ki($,_e,1),Ag($,_e),_e=Jg(),$=Ak($,1),$!==null&&(zc($,1,_e),Ck($,_e))}function U$1($,_e,sn){if($.tag===3)Wk($,$,sn);else for(;_e!==null;){if(_e.tag===3){Wk(_e,$,sn);break}else if(_e.tag===1){var ln=_e.stateNode;if(typeof _e.type.getDerivedStateFromError=="function"||typeof ln.componentDidCatch=="function"&&(Oi===null||!Oi.has(ln))){$=Hi(sn,$),$=Ni(_e,$,1),Ag(_e,$),$=Jg(),_e=Ak(_e,1),_e!==null&&(zc(_e,1,$),Ck(_e,$));break}}_e=_e.return}}function Qi($,_e,sn){var ln=$.pingCache;ln!==null&&ln.delete(_e),_e=Jg(),$.pingedLanes|=$.suspendedLanes&sn,P$1===$&&(Y&sn)===sn&&(R$1===4||R$1===3&&(Y&130023424)===Y&&500>B$1()-dk?Jk($,0):pk|=sn),Ck($,_e)}function Xk($,_e){_e===0&&(($.mode&1)===0?_e=1:(_e=rc,rc<<=1,(rc&130023424)===0&&(rc=4194304)));var sn=Jg();$=Ak($,_e),$!==null&&(zc($,_e,sn),Ck($,sn))}function zj($){var _e=$.memoizedState,sn=0;_e!==null&&(sn=_e.retryLane),Xk($,sn)}function Zj($,_e){var sn=0;switch($.tag){case 13:var ln=$.stateNode,mn=$.memoizedState;mn!==null&&(sn=mn.retryLane);break;case 19:ln=$.stateNode;break;default:throw Error(p$2(314))}ln!==null&&ln.delete(_e),Xk($,sn)}var Uk;Uk=function($,_e,sn){if($!==null)if($.memoizedProps!==_e.pendingProps||Vf.current)tg=!0;else{if(($.lanes&sn)===0&&(_e.flags&128)===0)return tg=!1,Fj($,_e,sn);tg=($.flags&131072)!==0}else tg=!1,I$1&&(_e.flags&1048576)!==0&&ah(_e,Ug,_e.index);switch(_e.lanes=0,_e.tag){case 2:var ln=_e.type;$!==null&&($.alternate=null,_e.alternate=null,_e.flags|=2),$=_e.pendingProps;var mn=Xf(_e,H$1.current);sg(_e,sn),mn=Uh(null,_e,ln,$,mn,sn);var _n=Zh();return _e.flags|=1,typeof mn=="object"&&mn!==null&&typeof mn.render=="function"&&mn.$$typeof===void 0?(_e.tag=1,_e.memoizedState=null,_e.updateQueue=null,Yf(ln)?(_n=!0,bg(_e)):_n=!1,_e.memoizedState=mn.state!==null&&mn.state!==void 0?mn.state:null,xg(_e),mn.updater=Mg,_e.stateNode=mn,mn._reactInternals=_e,Qg(_e,ln,$,sn),_e=pj(null,_e,ln,!0,_n,sn)):(_e.tag=0,I$1&&_n&&bh(_e),ej(null,_e,mn,sn),_e=_e.child),_e;case 16:ln=_e.elementType;e:{switch($!==null&&($.alternate=null,_e.alternate=null,_e.flags|=2),$=_e.pendingProps,mn=ln._init,ln=mn(ln._payload),_e.type=ln,mn=_e.tag=Yk(ln),$=kg(ln,$),mn){case 0:_e=kj(null,_e,ln,$,sn);break e;case 1:_e=oj(null,_e,ln,$,sn);break e;case 11:_e=fj(null,_e,ln,$,sn);break e;case 14:_e=hj(null,_e,ln,kg(ln.type,$),sn);break e}throw Error(p$2(306,ln,""))}return _e;case 0:return ln=_e.type,mn=_e.pendingProps,mn=_e.elementType===ln?mn:kg(ln,mn),kj($,_e,ln,mn,sn);case 1:return ln=_e.type,mn=_e.pendingProps,mn=_e.elementType===ln?mn:kg(ln,mn),oj($,_e,ln,mn,sn);case 3:e:{if(qj(_e),$===null)throw Error(p$2(387));ln=_e.pendingProps,_n=_e.memoizedState,mn=_n.element,yg($,_e),Eg(_e,ln,null,sn);var yn=_e.memoizedState;if(ln=yn.element,_n.isDehydrated)if(_n={element:ln,isDehydrated:!1,cache:yn.cache,pendingSuspenseBoundaries:yn.pendingSuspenseBoundaries,transitions:yn.transitions},_e.updateQueue.baseState=_n,_e.memoizedState=_n,_e.flags&256){mn=Error(p$2(423)),_e=rj($,_e,ln,sn,mn);break e}else if(ln!==mn){mn=Error(p$2(424)),_e=rj($,_e,ln,sn,mn);break e}else for(eh=Kf(_e.stateNode.containerInfo.firstChild),dh=_e,I$1=!0,fh=null,sn=zh(_e,null,ln,sn),_e.child=sn;sn;)sn.flags=sn.flags&-3|4096,sn=sn.sibling;else{if(nh(),ln===mn){_e=gj($,_e,sn);break e}ej($,_e,ln,sn)}_e=_e.child}return _e;case 5:return Hh(_e),$===null&&kh(_e),ln=_e.type,mn=_e.pendingProps,_n=$!==null?$.memoizedProps:null,yn=mn.children,Df(ln,mn)?yn=null:_n!==null&&Df(ln,_n)&&(_e.flags|=32),nj($,_e),ej($,_e,yn,sn),_e.child;case 6:return $===null&&kh(_e),null;case 13:return vj($,_e,sn);case 4:return Fh(_e,_e.stateNode.containerInfo),ln=_e.pendingProps,$===null?_e.child=yh(_e,null,ln,sn):ej($,_e,ln,sn),_e.child;case 11:return ln=_e.type,mn=_e.pendingProps,mn=_e.elementType===ln?mn:kg(ln,mn),fj($,_e,ln,mn,sn);case 7:return ej($,_e,_e.pendingProps,sn),_e.child;case 8:return ej($,_e,_e.pendingProps.children,sn),_e.child;case 12:return ej($,_e,_e.pendingProps.children,sn),_e.child;case 10:e:{if(ln=_e.type._context,mn=_e.pendingProps,_n=_e.memoizedProps,yn=mn.value,G$1(lg,ln._currentValue),ln._currentValue=yn,_n!==null)if(Ge(_n.value,yn)){if(_n.children===mn.children&&!Vf.current){_e=gj($,_e,sn);break e}}else for(_n=_e.child,_n!==null&&(_n.return=_e);_n!==null;){var Tn=_n.dependencies;if(Tn!==null){yn=_n.child;for(var wn=Tn.firstContext;wn!==null;){if(wn.context===ln){if(_n.tag===1){wn=zg(-1,sn&-sn),wn.tag=2;var On=_n.updateQueue;if(On!==null){On=On.shared;var Dn=On.pending;Dn===null?wn.next=wn:(wn.next=Dn.next,Dn.next=wn),On.pending=wn}}_n.lanes|=sn,wn=_n.alternate,wn!==null&&(wn.lanes|=sn),rg(_n.return,sn,_e),Tn.lanes|=sn;break}wn=wn.next}}else if(_n.tag===10)yn=_n.type===_e.type?null:_n.child;else if(_n.tag===18){if(yn=_n.return,yn===null)throw Error(p$2(341));yn.lanes|=sn,Tn=yn.alternate,Tn!==null&&(Tn.lanes|=sn),rg(yn,sn,_e),yn=_n.sibling}else yn=_n.child;if(yn!==null)yn.return=_n;else for(yn=_n;yn!==null;){if(yn===_e){yn=null;break}if(_n=yn.sibling,_n!==null){_n.return=yn.return,yn=_n;break}yn=yn.return}_n=yn}ej($,_e,mn.children,sn),_e=_e.child}return _e;case 9:return mn=_e.type,ln=_e.pendingProps.children,sg(_e,sn),mn=ug(mn),ln=ln(mn),_e.flags|=1,ej($,_e,ln,sn),_e.child;case 14:return ln=_e.type,mn=kg(ln,_e.pendingProps),mn=kg(ln.type,mn),hj($,_e,ln,mn,sn);case 15:return jj($,_e,_e.type,_e.pendingProps,sn);case 17:return ln=_e.type,mn=_e.pendingProps,mn=_e.elementType===ln?mn:kg(ln,mn),$!==null&&($.alternate=null,_e.alternate=null,_e.flags|=2),_e.tag=1,Yf(ln)?($=!0,bg(_e)):$=!1,sg(_e,sn),Og(_e,ln,mn),Qg(_e,ln,mn,sn),pj(null,_e,ln,!0,$,sn);case 19:return Ej($,_e,sn);case 22:return lj($,_e,sn)}throw Error(p$2(156,_e.tag))};function Ek($,_e){return $b($,_e)}function Zk($,_e,sn,ln){this.tag=$,this.key=sn,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=_e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=ln,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hh($,_e,sn,ln){return new Zk($,_e,sn,ln)}function ij($){return $=$.prototype,!(!$||!$.isReactComponent)}function Yk($){if(typeof $=="function")return ij($)?1:0;if($!=null){if($=$.$$typeof,$===Ca)return 11;if($===Fa)return 14}return 2}function th($,_e){var sn=$.alternate;return sn===null?(sn=hh($.tag,_e,$.key,$.mode),sn.elementType=$.elementType,sn.type=$.type,sn.stateNode=$.stateNode,sn.alternate=$,$.alternate=sn):(sn.pendingProps=_e,sn.type=$.type,sn.flags=0,sn.subtreeFlags=0,sn.deletions=null),sn.flags=$.flags&14680064,sn.childLanes=$.childLanes,sn.lanes=$.lanes,sn.child=$.child,sn.memoizedProps=$.memoizedProps,sn.memoizedState=$.memoizedState,sn.updateQueue=$.updateQueue,_e=$.dependencies,sn.dependencies=_e===null?null:{lanes:_e.lanes,firstContext:_e.firstContext},sn.sibling=$.sibling,sn.index=$.index,sn.ref=$.ref,sn}function vh($,_e,sn,ln,mn,_n){var yn=2;if(ln=$,typeof $=="function")ij($)&&(yn=1);else if(typeof $=="string")yn=5;else e:switch($){case wa:return xh(sn.children,mn,_n,_e);case xa:yn=8,mn|=8;break;case za:return $=hh(12,sn,_e,mn|2),$.elementType=za,$.lanes=_n,$;case Da:return $=hh(13,sn,_e,mn),$.elementType=Da,$.lanes=_n,$;case Ea:return $=hh(19,sn,_e,mn),$.elementType=Ea,$.lanes=_n,$;case Ha:return wj(sn,mn,_n,_e);default:if(typeof $=="object"&&$!==null)switch($.$$typeof){case Aa:yn=10;break e;case Ba:yn=9;break e;case Ca:yn=11;break e;case Fa:yn=14;break e;case Ga:yn=16,ln=null;break e}throw Error(p$2(130,$==null?$:typeof $,""))}return _e=hh(yn,sn,_e,mn),_e.elementType=$,_e.type=ln,_e.lanes=_n,_e}function xh($,_e,sn,ln){return $=hh(7,$,ln,_e),$.lanes=sn,$}function wj($,_e,sn,ln){return $=hh(22,$,ln,_e),$.elementType=Ha,$.lanes=sn,$.stateNode={},$}function uh($,_e,sn){return $=hh(6,$,null,_e),$.lanes=sn,$}function wh($,_e,sn){return _e=hh(4,$.children!==null?$.children:[],$.key,_e),_e.lanes=sn,_e.stateNode={containerInfo:$.containerInfo,pendingChildren:null,implementation:$.implementation},_e}function $k($,_e,sn,ln,mn){this.tag=_e,this.containerInfo=$,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=ln,this.onRecoverableError=mn,this.mutableSourceEagerHydrationData=null}function al($,_e,sn,ln,mn,_n,yn,Tn,wn){return $=new $k($,_e,sn,Tn,wn),_e===1?(_e=1,_n===!0&&(_e|=8)):_e=0,_n=hh(3,null,null,_e),$.current=_n,_n.stateNode=$,_n.memoizedState={element:ln,isDehydrated:sn,cache:null,transitions:null,pendingSuspenseBoundaries:null},xg(_n),$}function bl($,_e,sn){var ln=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:va,key:ln==null?null:""+ln,children:$,containerInfo:_e,implementation:sn}}function cl($){if(!$)return Uf;$=$._reactInternals;e:{if(Ub($)!==$||$.tag!==1)throw Error(p$2(170));var _e=$;do{switch(_e.tag){case 3:_e=_e.stateNode.context;break e;case 1:if(Yf(_e.type)){_e=_e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}_e=_e.return}while(_e!==null);throw Error(p$2(171))}if($.tag===1){var sn=$.type;if(Yf(sn))return ag($,sn,_e)}return _e}function dl($,_e,sn,ln,mn,_n,yn,Tn,wn){return $=al(sn,ln,!0,$,mn,_n,yn,Tn,wn),$.context=cl(null),sn=$.current,ln=Jg(),mn=Kg(sn),_n=zg(ln,mn),_n.callback=_e!=null?_e:null,Ag(sn,_n),$.current.lanes=mn,zc($,mn,ln),Ck($,ln),$}function el($,_e,sn,ln){var mn=_e.current,_n=Jg(),yn=Kg(mn);return sn=cl(sn),_e.context===null?_e.context=sn:_e.pendingContext=sn,_e=zg(_n,yn),_e.payload={element:$},ln=ln===void 0?null:ln,ln!==null&&(_e.callback=ln),Ag(mn,_e),$=Lg(mn,yn,_n),$!==null&&Cg($,mn,yn),yn}function fl($){if($=$.current,!$.child)return null;switch($.child.tag){case 5:return $.child.stateNode;default:return $.child.stateNode}}function gl($,_e){if($=$.memoizedState,$!==null&&$.dehydrated!==null){var sn=$.retryLane;$.retryLane=sn!==0&&sn<_e?sn:_e}}function hl($,_e){gl($,_e),($=$.alternate)&&gl($,_e)}function il(){return null}var jl=typeof reportError=="function"?reportError:function($){console.error($)};function kl($){this._internalRoot=$}ll.prototype.render=kl.prototype.render=function($){var _e=this._internalRoot;if(_e===null)throw Error(p$2(409));el($,_e,null,null)};ll.prototype.unmount=kl.prototype.unmount=function(){var $=this._internalRoot;if($!==null){this._internalRoot=null;var _e=$.containerInfo;Qk(function(){el(null,$,null,null)}),_e[tf]=null}};function ll($){this._internalRoot=$}ll.prototype.unstable_scheduleHydration=function($){if($){var _e=Gc();$={blockedOn:null,target:$,priority:_e};for(var sn=0;sn<Pc.length&&_e!==0&&_e<Pc[sn].priority;sn++);Pc.splice(sn,0,$),sn===0&&Uc($)}};function ml($){return!(!$||$.nodeType!==1&&$.nodeType!==9&&$.nodeType!==11)}function nl($){return!(!$||$.nodeType!==1&&$.nodeType!==9&&$.nodeType!==11&&($.nodeType!==8||$.nodeValue!==" react-mount-point-unstable "))}function ol(){}function pl($,_e,sn,ln,mn){if(mn){if(typeof ln=="function"){var _n=ln;ln=function(){var On=fl(yn);_n.call(On)}}var yn=dl(_e,ln,$,0,null,!1,!1,"",ol);return $._reactRootContainer=yn,$[tf]=yn.current,rf($.nodeType===8?$.parentNode:$),Qk(),yn}for(;mn=$.lastChild;)$.removeChild(mn);if(typeof ln=="function"){var Tn=ln;ln=function(){var On=fl(wn);Tn.call(On)}}var wn=al($,0,!1,null,null,!1,!1,"",ol);return $._reactRootContainer=wn,$[tf]=wn.current,rf($.nodeType===8?$.parentNode:$),Qk(function(){el(_e,wn,sn,ln)}),wn}function ql($,_e,sn,ln,mn){var _n=sn._reactRootContainer;if(_n){var yn=_n;if(typeof mn=="function"){var Tn=mn;mn=function(){var wn=fl(yn);Tn.call(wn)}}el(_e,yn,$,mn)}else yn=pl(sn,_e,$,mn,ln);return fl(yn)}Dc=function($){switch($.tag){case 3:var _e=$.stateNode;if(_e.current.memoizedState.isDehydrated){var sn=sc(_e.pendingLanes);sn!==0&&(Bc(_e,sn|1),Ck(_e,B$1()),(W$1&6)===0&&(aj=B$1()+500,ig()))}break;case 13:var ln=Jg();Qk(function(){return Lg($,1,ln)}),hl($,1)}};Ec=function($){if($.tag===13){var _e=Jg();Lg($,134217728,_e),hl($,134217728)}};Fc=function($){if($.tag===13){var _e=Jg(),sn=Kg($);Lg($,sn,_e),hl($,sn)}};Gc=function(){return C};Hc=function($,_e){var sn=C;try{return C=$,_e()}finally{C=sn}};xb=function($,_e,sn){switch(_e){case"input":if($a($,sn),_e=sn.name,sn.type==="radio"&&_e!=null){for(sn=$;sn.parentNode;)sn=sn.parentNode;for(sn=sn.querySelectorAll("input[name="+JSON.stringify(""+_e)+'][type="radio"]'),_e=0;_e<sn.length;_e++){var ln=sn[_e];if(ln!==$&&ln.form===$.form){var mn=Cb(ln);if(!mn)throw Error(p$2(90));Va(ln),$a(ln,mn)}}}break;case"textarea":hb($,sn);break;case"select":_e=sn.value,_e!=null&&eb($,!!sn.multiple,_e,!1)}};Fb=Pk;Gb=Qk;var rl={usingClientEntryPoint:!1,Events:[Bb,te,Cb,Db,Eb,Pk]},sl={findFiberByHostInstance:Vc,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},tl={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ta.ReactCurrentDispatcher,findHostInstanceByFiber:function($){return $=Yb($),$===null?null:$.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||il,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{jc=ul.inject(tl),kc=ul}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rl;reactDom_production_min.createPortal=function($,_e){var sn=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ml(_e))throw Error(p$2(200));return bl($,_e,null,sn)};reactDom_production_min.createRoot=function($,_e){if(!ml($))throw Error(p$2(299));var sn=!1,ln="",mn=jl;return _e!=null&&(_e.unstable_strictMode===!0&&(sn=!0),_e.identifierPrefix!==void 0&&(ln=_e.identifierPrefix),_e.onRecoverableError!==void 0&&(mn=_e.onRecoverableError)),_e=al($,1,!1,null,null,sn,!1,ln,mn),$[tf]=_e.current,rf($.nodeType===8?$.parentNode:$),new kl(_e)};reactDom_production_min.findDOMNode=function($){if($==null)return null;if($.nodeType===1)return $;var _e=$._reactInternals;if(_e===void 0)throw typeof $.render=="function"?Error(p$2(188)):($=Object.keys($).join(","),Error(p$2(268,$)));return $=Yb(_e),$=$===null?null:$.stateNode,$};reactDom_production_min.flushSync=function($){return Qk($)};reactDom_production_min.hydrate=function($,_e,sn){if(!nl(_e))throw Error(p$2(200));return ql(null,$,_e,!0,sn)};reactDom_production_min.hydrateRoot=function($,_e,sn){if(!ml($))throw Error(p$2(405));var ln=sn!=null&&sn.hydratedSources||null,mn=!1,_n="",yn=jl;if(sn!=null&&(sn.unstable_strictMode===!0&&(mn=!0),sn.identifierPrefix!==void 0&&(_n=sn.identifierPrefix),sn.onRecoverableError!==void 0&&(yn=sn.onRecoverableError)),_e=dl(_e,null,$,1,sn!=null?sn:null,mn,!1,_n,yn),$[tf]=_e.current,rf($),ln)for($=0;$<ln.length;$++)sn=ln[$],mn=sn._getVersion,mn=mn(sn._source),_e.mutableSourceEagerHydrationData==null?_e.mutableSourceEagerHydrationData=[sn,mn]:_e.mutableSourceEagerHydrationData.push(sn,mn);return new ll(_e)};reactDom_production_min.render=function($,_e,sn){if(!nl(_e))throw Error(p$2(200));return ql(null,$,_e,!1,sn)};reactDom_production_min.unmountComponentAtNode=function($){if(!nl($))throw Error(p$2(40));return $._reactRootContainer?(Qk(function(){ql(null,null,$,!1,function(){$._reactRootContainer=null,$[tf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Pk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function($,_e,sn,ln){if(!nl(sn))throw Error(p$2(200));if($==null||$._reactInternals===void 0)throw Error(p$2(38));return ql($,_e,sn,!1,ln)};reactDom_production_min.version="18.1.0-next-22edb9f77-20220426";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch($){console.error($)}}checkDCE(),reactDom.exports=reactDom_production_min;var m$2=reactDom.exports;client.createRoot=m$2.createRoot,client.hydrateRoot=m$2.hydrateRoot;var base="";const demo="_demo_16dyk_1",text="_text_16dyk_6";var classes$7={demo,text};const sidebar="_sidebar_1xkjd_1",open="_open_1xkjd_11",closed="_closed_1xkjd_16",sideways="_sideways_1xkjd_21",sidewaysInner="_sidewaysInner_1xkjd_25",sidebarHeader="_sidebarHeader_1xkjd_29",sidebarHeading="_sidebarHeading_1xkjd_34",repo="_repo_1xkjd_44";var classes$6={sidebar,open,closed,sideways,sidewaysInner,sidebarHeader,sidebarHeading,repo};function toVal($){var _e,sn,ln="";if(typeof $=="string"||typeof $=="number")ln+=$;else if(typeof $=="object")if(Array.isArray($))for(_e=0;_e<$.length;_e++)$[_e]&&(sn=toVal($[_e]))&&(ln&&(ln+=" "),ln+=sn);else for(_e in $)$[_e]&&(ln&&(ln+=" "),ln+=_e);return ln}function clsx(){for(var $=0,_e,sn,ln="";$<arguments.length;)(_e=arguments[$++])&&(sn=toVal(_e))&&(ln&&(ln+=" "),ln+=sn);return ln}function shallowEqualArrays($,_e){if($===_e)return!0;if(!$||!_e)return!1;var sn=$.length;if(_e.length!==sn)return!1;for(var ln=0;ln<sn;ln++)if($[ln]!==_e[ln])return!1;return!0}function n$1($){for(var _e=arguments.length,sn=Array(_e>1?_e-1:0),ln=1;ln<_e;ln++)sn[ln-1]=arguments[ln];throw Error("[Immer] minified error nr: "+$+(sn.length?" "+sn.map(function(mn){return"'"+mn+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r($){return!!$&&!!$[Q]}function t($){return!!$&&(function(_e){if(!_e||typeof _e!="object")return!1;var sn=Object.getPrototypeOf(_e);if(sn===null)return!0;var ln=Object.hasOwnProperty.call(sn,"constructor")&&sn.constructor;return typeof ln=="function"&&Function.toString.call(ln)===Z}($)||Array.isArray($)||!!$[L]||!!$.constructor[L]||s($)||v($))}function e($){return r($)||n$1(23,$),$[Q].t}function i($,_e,sn){sn===void 0&&(sn=!1),o($)===0?(sn?Object.keys:nn)($).forEach(function(ln){sn&&typeof ln=="symbol"||_e(ln,$[ln],$)}):$.forEach(function(ln,mn){return _e(mn,ln,$)})}function o($){var _e=$[Q];return _e?_e.i>3?_e.i-4:_e.i:Array.isArray($)?1:s($)?2:v($)?3:0}function u($,_e){return o($)===2?$.has(_e):Object.prototype.hasOwnProperty.call($,_e)}function a($,_e){return o($)===2?$.get(_e):$[_e]}function f$1($,_e,sn){var ln=o($);ln===2?$.set(_e,sn):ln===3?($.delete(_e),$.add(sn)):$[_e]=sn}function c($,_e){return $===_e?$!==0||1/$==1/_e:$!=$&&_e!=_e}function s($){return X&&$ instanceof Map}function v($){return q$1&&$ instanceof Set}function p$1($){return $.o||$.t}function l$1($){if(Array.isArray($))return Array.prototype.slice.call($);var _e=rn($);delete _e[Q];for(var sn=nn(_e),ln=0;ln<sn.length;ln++){var mn=sn[ln],_n=_e[mn];_n.writable===!1&&(_n.writable=!0,_n.configurable=!0),(_n.get||_n.set)&&(_e[mn]={configurable:!0,writable:!0,enumerable:_n.enumerable,value:$[mn]})}return Object.create(Object.getPrototypeOf($),_e)}function d($,_e){return _e===void 0&&(_e=!1),y($)||r($)||!t($)||(o($)>1&&($.set=$.add=$.clear=$.delete=h),Object.freeze($),_e&&i($,function(sn,ln){return d(ln,!0)},!0)),$}function h(){n$1(2)}function y($){return $==null||typeof $!="object"||Object.isFrozen($)}function b($){var _e=tn[$];return _e||n$1(18,$),_e}function m$1($,_e){tn[$]||(tn[$]=_e)}function _(){return U}function j($,_e){_e&&(b("Patches"),$.u=[],$.s=[],$.v=_e)}function g($){O($),$.p.forEach(S),$.p=null}function O($){$===U&&(U=$.l)}function w($){return U={p:[],l:U,h:$,m:!0,_:0}}function S($){var _e=$[Q];_e.i===0||_e.i===1?_e.j():_e.g=!0}function P($,_e){_e._=_e.p.length;var sn=_e.p[0],ln=$!==void 0&&$!==sn;return _e.h.O||b("ES5").S(_e,$,ln),ln?(sn[Q].P&&(g(_e),n$1(4)),t($)&&($=M(_e,$),_e.l||x(_e,$)),_e.u&&b("Patches").M(sn[Q],$,_e.u,_e.s)):$=M(_e,sn,[]),g(_e),_e.u&&_e.v(_e.u,_e.s),$!==H?$:void 0}function M($,_e,sn){if(y(_e))return _e;var ln=_e[Q];if(!ln)return i(_e,function(_n,yn){return A($,ln,_e,_n,yn,sn)},!0),_e;if(ln.A!==$)return _e;if(!ln.P)return x($,ln.t,!0),ln.t;if(!ln.I){ln.I=!0,ln.A._--;var mn=ln.i===4||ln.i===5?ln.o=l$1(ln.k):ln.o;i(ln.i===3?new Set(mn):mn,function(_n,yn){return A($,ln,mn,_n,yn,sn)}),x($,mn,!1),sn&&$.u&&b("Patches").R(ln,sn,$.u,$.s)}return ln.o}function A($,_e,sn,ln,mn,_n){if(r(mn)){var yn=M($,mn,_n&&_e&&_e.i!==3&&!u(_e.D,ln)?_n.concat(ln):void 0);if(f$1(sn,ln,yn),!r(yn))return;$.m=!1}if(t(mn)&&!y(mn)){if(!$.h.F&&$._<1)return;M($,mn),_e&&_e.A.l||x($,mn)}}function x($,_e,sn){sn===void 0&&(sn=!1),$.h.F&&$.m&&d(_e,sn)}function z($,_e){var sn=$[Q];return(sn?p$1(sn):$)[_e]}function I($,_e){if(_e in $)for(var sn=Object.getPrototypeOf($);sn;){var ln=Object.getOwnPropertyDescriptor(sn,_e);if(ln)return ln;sn=Object.getPrototypeOf(sn)}}function k$1($){$.P||($.P=!0,$.l&&k$1($.l))}function E($){$.o||($.o=l$1($.t))}function R($,_e,sn){var ln=s(_e)?b("MapSet").N(_e,sn):v(_e)?b("MapSet").T(_e,sn):$.O?function(mn,_n){var yn=Array.isArray(mn),Tn={i:yn?1:0,A:_n?_n.A:_(),P:!1,I:!1,D:{},l:_n,t:mn,k:null,o:null,j:null,C:!1},wn=Tn,On=en;yn&&(wn=[Tn],On=on);var Dn=Proxy.revocable(wn,On),Nn=Dn.revoke,An=Dn.proxy;return Tn.k=An,Tn.j=Nn,An}(_e,sn):b("ES5").J(_e,sn);return(sn?sn.A:_()).p.push(ln),ln}function D($){return r($)||n$1(22,$),function _e(sn){if(!t(sn))return sn;var ln,mn=sn[Q],_n=o(sn);if(mn){if(!mn.P&&(mn.i<4||!b("ES5").K(mn)))return mn.t;mn.I=!0,ln=F(sn,_n),mn.I=!1}else ln=F(sn,_n);return i(ln,function(yn,Tn){mn&&a(mn.t,yn)===Tn||f$1(ln,yn,_e(Tn))}),_n===3?new Set(ln):ln}($)}function F($,_e){switch(_e){case 2:return new Map($);case 3:return Array.from($)}return l$1($)}function T(){function $(ln){if(!t(ln))return ln;if(Array.isArray(ln))return ln.map($);if(s(ln))return new Map(Array.from(ln.entries()).map(function(yn){return[yn[0],$(yn[1])]}));if(v(ln))return new Set(Array.from(ln).map($));var mn=Object.create(Object.getPrototypeOf(ln));for(var _n in ln)mn[_n]=$(ln[_n]);return u(ln,L)&&(mn[L]=ln[L]),mn}function _e(ln){return r(ln)?$(ln):ln}var sn="add";m$1("Patches",{$:function(ln,mn){return mn.forEach(function(_n){for(var yn=_n.path,Tn=_n.op,wn=ln,On=0;On<yn.length-1;On++){var Dn=o(wn),Nn=yn[On];Dn!==0&&Dn!==1||Nn!=="__proto__"&&Nn!=="constructor"||n$1(24),typeof wn=="function"&&Nn==="prototype"&&n$1(24),typeof(wn=a(wn,Nn))!="object"&&n$1(15,yn.join("/"))}var An=o(wn),In=$(_n.value),Un=yn[yn.length-1];switch(Tn){case"replace":switch(An){case 2:return wn.set(Un,In);case 3:n$1(16);default:return wn[Un]=In}case sn:switch(An){case 1:return wn.splice(Un,0,In);case 2:return wn.set(Un,In);case 3:return wn.add(In);default:return wn[Un]=In}case"remove":switch(An){case 1:return wn.splice(Un,1);case 2:return wn.delete(Un);case 3:return wn.delete(_n.value);default:return delete wn[Un]}default:n$1(17,Tn)}}),ln},R:function(ln,mn,_n,yn){switch(ln.i){case 0:case 4:case 2:return function(Tn,wn,On,Dn){var Nn=Tn.t,An=Tn.o;i(Tn.D,function(In,Un){var Ln=a(Nn,In),qn=a(An,In),kn=Un?u(Nn,In)?"replace":sn:"remove";if(Ln!==qn||kn!=="replace"){var xn=wn.concat(In);On.push(kn==="remove"?{op:kn,path:xn}:{op:kn,path:xn,value:qn}),Dn.push(kn===sn?{op:"remove",path:xn}:kn==="remove"?{op:sn,path:xn,value:_e(Ln)}:{op:"replace",path:xn,value:_e(Ln)})}})}(ln,mn,_n,yn);case 5:case 1:return function(Tn,wn,On,Dn){var Nn=Tn.t,An=Tn.D,In=Tn.o;if(In.length<Nn.length){var Un=[In,Nn];Nn=Un[0],In=Un[1];var Ln=[Dn,On];On=Ln[0],Dn=Ln[1]}for(var qn=0;qn<Nn.length;qn++)if(An[qn]&&In[qn]!==Nn[qn]){var kn=wn.concat([qn]);On.push({op:"replace",path:kn,value:_e(In[qn])}),Dn.push({op:"replace",path:kn,value:_e(Nn[qn])})}for(var xn=Nn.length;xn<In.length;xn++){var $n=wn.concat([xn]);On.push({op:sn,path:$n,value:_e(In[xn])})}Nn.length<In.length&&Dn.push({op:"replace",path:wn.concat(["length"]),value:Nn.length})}(ln,mn,_n,yn);case 3:return function(Tn,wn,On,Dn){var Nn=Tn.t,An=Tn.o,In=0;Nn.forEach(function(Un){if(!An.has(Un)){var Ln=wn.concat([In]);On.push({op:"remove",path:Ln,value:Un}),Dn.unshift({op:sn,path:Ln,value:Un})}In++}),In=0,An.forEach(function(Un){if(!Nn.has(Un)){var Ln=wn.concat([In]);On.push({op:sn,path:Ln,value:Un}),Dn.unshift({op:"remove",path:Ln,value:Un})}In++})}(ln,mn,_n,yn)}},M:function(ln,mn,_n,yn){_n.push({op:"replace",path:[],value:mn}),yn.push({op:"replace",path:[],value:ln.t})}})}var G,U,W=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",X=typeof Map!="undefined",q$1=typeof Set!="undefined",B=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Z=""+Object.prototype.constructor,nn=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function($){return Object.getOwnPropertyNames($).concat(Object.getOwnPropertySymbols($))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function($){var _e={};return nn($).forEach(function(sn){_e[sn]=Object.getOwnPropertyDescriptor($,sn)}),_e},tn={},en={get:function($,_e){if(_e===Q)return $;var sn=p$1($);if(!u(sn,_e))return function(mn,_n,yn){var Tn,wn=I(_n,yn);return wn?"value"in wn?wn.value:(Tn=wn.get)===null||Tn===void 0?void 0:Tn.call(mn.k):void 0}($,sn,_e);var ln=sn[_e];return $.I||!t(ln)?ln:ln===z($.t,_e)?(E($),$.o[_e]=R($.A.h,ln,$)):ln},has:function($,_e){return _e in p$1($)},ownKeys:function($){return Reflect.ownKeys(p$1($))},set:function($,_e,sn){var ln=I(p$1($),_e);if(ln!=null&&ln.set)return ln.set.call($.k,sn),!0;if(!$.P){var mn=z(p$1($),_e),_n=mn==null?void 0:mn[Q];if(_n&&_n.t===sn)return $.o[_e]=sn,$.D[_e]=!1,!0;if(c(sn,mn)&&(sn!==void 0||u($.t,_e)))return!0;E($),k$1($)}return $.o[_e]===sn&&typeof sn!="number"||($.o[_e]=sn,$.D[_e]=!0,!0)},deleteProperty:function($,_e){return z($.t,_e)!==void 0||_e in $.t?($.D[_e]=!1,E($),k$1($)):delete $.D[_e],$.o&&delete $.o[_e],!0},getOwnPropertyDescriptor:function($,_e){var sn=p$1($),ln=Reflect.getOwnPropertyDescriptor(sn,_e);return ln&&{writable:!0,configurable:$.i!==1||_e!=="length",enumerable:ln.enumerable,value:sn[_e]}},defineProperty:function(){n$1(11)},getPrototypeOf:function($){return Object.getPrototypeOf($.t)},setPrototypeOf:function(){n$1(12)}},on={};i(en,function($,_e){on[$]=function(){return arguments[0]=arguments[0][0],_e.apply(this,arguments)}}),on.deleteProperty=function($,_e){return en.deleteProperty.call(this,$[0],_e)},on.set=function($,_e,sn){return en.set.call(this,$[0],_e,sn,$[0])};var un=function(){function $(sn){var ln=this;this.O=B,this.F=!0,this.produce=function(mn,_n,yn){if(typeof mn=="function"&&typeof _n!="function"){var Tn=_n;_n=mn;var wn=ln;return function(In){var Un=this;In===void 0&&(In=Tn);for(var Ln=arguments.length,qn=Array(Ln>1?Ln-1:0),kn=1;kn<Ln;kn++)qn[kn-1]=arguments[kn];return wn.produce(In,function(xn){var $n;return($n=_n).call.apply($n,[Un,xn].concat(qn))})}}var On;if(typeof _n!="function"&&n$1(6),yn!==void 0&&typeof yn!="function"&&n$1(7),t(mn)){var Dn=w(ln),Nn=R(ln,mn,void 0),An=!0;try{On=_n(Nn),An=!1}finally{An?g(Dn):O(Dn)}return typeof Promise!="undefined"&&On instanceof Promise?On.then(function(In){return j(Dn,yn),P(In,Dn)},function(In){throw g(Dn),In}):(j(Dn,yn),P(On,Dn))}if(!mn||typeof mn!="object")return(On=_n(mn))===H?void 0:(On===void 0&&(On=mn),ln.F&&d(On,!0),On);n$1(21,mn)},this.produceWithPatches=function(mn,_n){return typeof mn=="function"?function(wn){for(var On=arguments.length,Dn=Array(On>1?On-1:0),Nn=1;Nn<On;Nn++)Dn[Nn-1]=arguments[Nn];return ln.produceWithPatches(wn,function(An){return mn.apply(void 0,[An].concat(Dn))})}:[ln.produce(mn,_n,function(wn,On){yn=wn,Tn=On}),yn,Tn];var yn,Tn},typeof(sn==null?void 0:sn.useProxies)=="boolean"&&this.setUseProxies(sn.useProxies),typeof(sn==null?void 0:sn.autoFreeze)=="boolean"&&this.setAutoFreeze(sn.autoFreeze)}var _e=$.prototype;return _e.createDraft=function(sn){t(sn)||n$1(8),r(sn)&&(sn=D(sn));var ln=w(this),mn=R(this,sn,void 0);return mn[Q].C=!0,O(ln),mn},_e.finishDraft=function(sn,ln){var mn=sn&&sn[Q],_n=mn.A;return j(_n,ln),P(void 0,_n)},_e.setAutoFreeze=function(sn){this.F=sn},_e.setUseProxies=function(sn){sn&&!B&&n$1(20),this.O=sn},_e.applyPatches=function(sn,ln){var mn;for(mn=ln.length-1;mn>=0;mn--){var _n=ln[mn];if(_n.path.length===0&&_n.op==="replace"){sn=_n.value;break}}var yn=b("Patches").$;return r(sn)?yn(sn,ln):this.produce(sn,function(Tn){return yn(Tn,ln.slice(mn+1))})},$}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);var pn=an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);function _extends$1(){return _extends$1=Object.assign||function($){for(var _e=1;_e<arguments.length;_e++){var sn=arguments[_e];for(var ln in sn)Object.prototype.hasOwnProperty.call(sn,ln)&&($[ln]=sn[ln])}return $},_extends$1.apply(this,arguments)}var BASIC=0,OBJECT=1,ARRAY=2,MAP=3,SET=4,cantAccess=function(_e,sn){return new Error("Cant access property "+String(sn)+" of "+String(_e))};function getType($){return $ instanceof Map?MAP:$ instanceof Set?SET:Array.isArray($)?ARRAY:$ instanceof Object?OBJECT:BASIC}function has($,_e){var sn=getType($);if(sn===OBJECT)return _e in $;if(sn===ARRAY){var ln=_e;return ln<$.length&&ln>-1}if(sn===MAP||sn===SET)return $.has(_e);throw cantAccess($,_e)}function get($,_e){var sn=getType($);if(sn===BASIC)throw cantAccess($,_e);return sn===MAP?$.get(_e):sn===SET?$.has(_e)?_e:void 0:$[_e]}function getIn($,_e){return _e.reduce(function(sn,ln){return get(sn,ln)},$)}function set($,_e,sn){var ln=getType($);if(ln===BASIC)throw cantAccess($,_e);if(ln===MAP)return $.set(_e,sn);if(ln===SET){$.delete(_e),$.add(sn);return}$[_e]=sn}function entries($){var _e=getType($);if(_e===OBJECT)return Object.entries($);if(_e===ARRAY||_e===MAP||_e===SET)return Array.from($.entries());throw cantAccess($,"any")}function create($){if($===OBJECT)return{};if($===ARRAY)return[];if($===MAP)return new Map;if($===SET)return new Set}var zoomInPatches=function(_e,sn){return sn.filter(function(ln){return _e.every(function(mn,_n){return mn===ln.path[_n]})}).map(function(ln){return _extends$1({},ln,{path:ln.path.slice(_e.length)})})},zoomOutPatches=function(_e,sn){return sn.map(function(ln){var mn=_extends$1({},ln,{path:_e.concat(ln.path)});return ln.from&&(mn.from=_e.concat(ln.from)),mn})};T();var optimise=function(_e,sn){var ln=[],mn,_n=function(Dn,Nn){var An=JSON.stringify(Nn);if(mn&&mn[1]===An)return mn[0];var In=Array.isArray(getIn(Dn,Nn));return mn=[In,An],In},yn,Tn=[],wn=function(){if(Tn.length!==0){if(yn){var Dn=getIn(_e,yn),Nn=zoomInPatches(yn,Tn),An=optimiseArray(Dn,Nn),In=zoomOutPatches(yn,An);ln=ln.concat(In)}else ln=ln.concat(Tn);Tn=[]}};return sn.forEach(function(On){var Dn=On,Nn=Dn.path,An=Nn.slice(0,-1),In=_n(_e,An)?An:void 0;JSON.stringify(In)!==JSON.stringify(yn)&&(wn(),yn=In),On.value===H&&(On=_extends$1({},On,{value:void 0})),Tn.push(On)}),wn(),ln},optimiseArray=function(_e,sn){var ln=[],mn=0,_n=new Map,yn=new Map,Tn=function(qn){if(_n.has(qn))return _n.get(qn);var kn=mn++;return _n.set(qn,kn),yn.set(kn,qn),kn},wn=_e.map(Tn),On=new Set(wn),Dn=[];if(sn.length===1&&sn[0].path.length===0){var Nn=sn[0].value;if(!Array.isArray(Nn))return sn;Dn=Nn.map(Tn)}else{if(_e.some(function(Ln){return typeof Ln!="object"}))return sn;var An=sn.map(function(Ln){var qn=Ln.op,kn=Ln.value,xn=Ln.path;return qn==="remove"||qn==="replace"&&xn.length===1&&xn[0]==="length"?Ln:_extends$1({},Ln,{value:Tn(kn)})});Dn=pn(wn,An)}var In=Dn.filter(function(Ln){return On.has(Ln)}),Un=wn.slice();return In.forEach(function(Ln,qn){if(Ln!==Un[qn]){var kn=Un.indexOf(Ln);ln.push({op:"move",from:[kn],path:[qn]}),Un.splice(kn,1),Un.splice(qn,0,Ln)}}),In.length<wn.length&&ln.push({op:"replace",path:["length"],value:In.length}),Dn.forEach(function(Ln,qn){if(!On.has(Ln)){var kn=yn.get(Ln);ln.push({op:"add",path:[qn],value:kn})}}),ln},applyPatches=function(_e,sn){return sn.forEach(function(ln){if(ln.op==="move"){var mn=ln.from;_e=pn(_e,[{op:"remove",path:mn},{op:"add",path:ln.path,value:getIn(_e,mn)}])}else _e=pn(_e,[ln])}),_e},jsxRuntime={exports:{}},reactJsxRuntime_production_min={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=react.exports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q($,_e,sn){var ln,mn={},_n=null,yn=null;sn!==void 0&&(_n=""+sn),_e.key!==void 0&&(_n=""+_e.key),_e.ref!==void 0&&(yn=_e.ref);for(ln in _e)m.call(_e,ln)&&!p.hasOwnProperty(ln)&&(mn[ln]=_e[ln]);if($&&$.defaultProps)for(ln in _e=$.defaultProps,_e)mn[ln]===void 0&&(mn[ln]=_e[ln]);return{$$typeof:k,type:$,key:_n,ref:yn,props:mn,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;jsxRuntime.exports=reactJsxRuntime_production_min;const jsx=jsxRuntime.exports.jsx,jsxs=jsxRuntime.exports.jsxs,Fragment=jsxRuntime.exports.Fragment;function _defineProperties($,_e){for(var sn=0;sn<_e.length;sn++){var ln=_e[sn];ln.enumerable=ln.enumerable||!1,ln.configurable=!0,"value"in ln&&(ln.writable=!0),Object.defineProperty($,ln.key,ln)}}function _createClass($,_e,sn){return _e&&_defineProperties($.prototype,_e),sn&&_defineProperties($,sn),$}function _extends(){return _extends=Object.assign||function($){for(var _e=1;_e<arguments.length;_e++){var sn=arguments[_e];for(var ln in sn)Object.prototype.hasOwnProperty.call(sn,ln)&&($[ln]=sn[ln])}return $},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose($,_e){if($==null)return{};var sn={},ln=Object.keys($),mn,_n;for(_n=0;_n<ln.length;_n++)mn=ln[_n],!(_e.indexOf(mn)>=0)&&(sn[mn]=$[mn]);return sn}function _unsupportedIterableToArray($,_e){if(!!$){if(typeof $=="string")return _arrayLikeToArray($,_e);var sn=Object.prototype.toString.call($).slice(8,-1);if(sn==="Object"&&$.constructor&&(sn=$.constructor.name),sn==="Map"||sn==="Set")return Array.from($);if(sn==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sn))return _arrayLikeToArray($,_e)}}function _arrayLikeToArray($,_e){(_e==null||_e>$.length)&&(_e=$.length);for(var sn=0,ln=new Array(_e);sn<_e;sn++)ln[sn]=$[sn];return ln}function _createForOfIteratorHelperLoose($,_e){var sn;if(typeof Symbol=="undefined"||$[Symbol.iterator]==null){if(Array.isArray($)||(sn=_unsupportedIterableToArray($))||_e&&$&&typeof $.length=="number"){sn&&($=sn);var ln=0;return function(){return ln>=$.length?{done:!0}:{done:!1,value:$[ln++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return sn=$[Symbol.iterator](),sn.next.bind(sn)}var Patch=function(){function $(){this.value=[],this.nodes=[]}return $.concat=function(sn,ln){var mn,_n,yn,Tn,wn=new $;return wn.value=((mn=sn==null?void 0:sn.value)!==null&&mn!==void 0?mn:[]).concat((_n=ln==null?void 0:ln.value)!==null&&_n!==void 0?_n:[]),wn.nodes=((yn=sn==null?void 0:sn.nodes)!==null&&yn!==void 0?yn:[]).concat((Tn=ln==null?void 0:ln.nodes)!==null&&Tn!==void 0?Tn:[]),wn},$}();function isPatchPair($){var _e=$;return _e&&!!_e.__patches&&!!_e.__patchesInverse}function isImmerProducer($){return typeof $=="function"}function isPatchCreator($){return typeof $=="function"}var patches=function(_e,sn){return{__patches:isPatchCreator(_e)?_e:function(){return _e},__patchesInverse:sn?isPatchCreator(sn)?sn:function(){return sn}:function(){return[]}}},noChange=patches([],[]),optimisePatches=function(_e,sn,ln,mn,_n){return mn||(mn=[{op:"replace",path:[],value:sn}]),_n||(_n=[{op:"replace",path:[],value:_e}]),ln?[optimise(_e,mn),optimise(sn,_n)]:[mn,_n]},producePatches=function(_e,sn,ln){if(ln===void 0&&(ln=!0),isPatchPair(sn))return[sn.__patches(_e),sn.__patchesInverse(_e)];if(isImmerProducer(sn)){var mn=cn(_e,sn),_n=mn[0],yn=mn[1],Tn=mn[2];return optimisePatches(_e,_n,ln,yn,Tn)}return optimisePatches(_e,sn,ln)};function die($){for(var _e=arguments.length,sn=new Array(_e>1?_e-1:0),ln=1;ln<_e;ln++)sn[ln-1]=arguments[ln];throw new Error("[Dendriform] minified error #"+$+": "+(sn.length?sn.map(function(mn){return JSON.stringify(mn)}).join(", "):""))}var newNode=function(_e){return function(sn,ln){ln===void 0&&(ln="");var mn=getType(sn),_n=_e();return{type:mn,child:create(mn===SET?MAP:mn),parentId:ln,id:_n}}},addNode=function(_e,sn){_e[sn.id]=sn},getNode=function(_e,sn){return _e[sn]},_getOrCreateChild=function(_e,sn,ln,mn,_n){var yn=get(ln.child,_n);if(typeof yn=="string")return getNode(_e,yn);var Tn=sn(mn,ln.id);return addNode(_e,Tn),set(ln.child,_n,Tn.id),Tn},getNodeByPath=function(_e,sn,ln,mn){for(var _n=_e[0],yn=ln,Tn=_createForOfIteratorHelperLoose(mn),wn;!(wn=Tn()).done;){var On=wn.value;!_n||_n.type===BASIC?_n=void 0:(yn=get(yn,On),_n=_getOrCreateChild(_e,sn,_n,yn,On))}return _n},_getKey=function(_e,sn){var ln;return(ln=entries(_e.child).find(function(mn){var _n=mn[1];return _n===sn.id}))===null||ln===void 0?void 0:ln[0]},getPath=function(_e,sn){var ln=get(_e,sn);if(!!ln){for(var mn=[];ln&&ln.parentId!=="";){var _n=get(_e,ln.parentId),yn=_getKey(_n,ln);if(yn===void 0)return;mn.unshift(yn),ln=_n}return mn}},removeNode=function $(_e,sn,ln){ln===void 0&&(ln=!1);var mn=get(_e,sn);!mn||(mn.child&&entries(mn.child).forEach(function(_n){var yn=_n[1];return $(_e,yn)}),ln||delete _e[sn])},updateNode=function $(_e,sn,ln){var mn=get(_e,sn);if(!!mn){var _n=getType(ln);if(_n===mn.type){if(_n===BASIC)return;entries(mn.child).forEach(function(yn){var Tn=yn[0],wn=yn[1];has(ln,Tn)?$(_e,wn,get(ln,Tn)):(removeNode(_e,wn),delete mn.child[Tn])});return}removeNode(_e,sn,!0),_e[sn]=_extends({},mn,{type:_n,child:create(_n)})}},updateArrayNodeLength=function(_e,sn,ln){var mn=get(_e,sn);if(!(!mn||mn.type!==ARRAY)){var _n=mn.child,yn=_n.slice(0,ln);_n.slice(ln).forEach(function(Tn){removeNode(_e,Tn)}),_e[sn]=_extends({},mn,{child:yn})}},produceNodePatches=function(_e,sn,ln,mn){var _n=cn(_e,function(yn){var Tn=[];mn.forEach(function(wn){var On,Dn=wn.path,Nn=wn.value,An=wn.op;if(Dn.length===0&&An==="replace"){updateNode(yn,"0",Nn);return}var In=getNodeByPath(yn,sn,ln,Dn.slice(0,-1));if(!!In){var Un=[In.id,"child"],Ln=Dn[Dn.length-1];if(An==="add"&&In.type!==ARRAY&&get(In.child||{},Ln)&&(An="replace"),In.type===ARRAY&&Dn[Dn.length-1]==="length"){updateArrayNodeLength(yn,In.id,Nn);return}if(An==="add"){var qn=sn(Nn,In.id);addNode(yn,qn),Tn.push({op:An,path:[].concat(Un,[Ln]),value:qn.id});return}if(An==="move"&&wn.from){var kn=wn.from[wn.from.length-1];Tn.push({op:An,path:[].concat(Un,[Ln]),from:[].concat(Un,[kn])});return}var xn=(On=getNodeByPath(yn,sn,ln,Dn))===null||On===void 0?void 0:On.id;if(An==="remove"){removeNode(yn,xn),Tn.push({op:An,path:[].concat(Un,[Ln])});return}if(An==="replace"){updateNode(yn,xn,Nn);return}}}),applyPatches(yn,Tn)});return _n[1].forEach(function(yn){return yn.namespace="nodes"}),_n[2].forEach(function(yn){return yn.namespace="nodes"}),_n},HistoryItem=function(){function $(){this.do=new Patch,this.undo=new Patch}$.concat=function(ln,mn){var _n=new $;return _n.do=Patch.concat(ln==null?void 0:ln.do,mn==null?void 0:mn.do),_n.undo=Patch.concat(mn==null?void 0:mn.undo,ln==null?void 0:ln.undo),_n},$.flatten=function(ln){return ln.reduce($.concat,new $)};var _e=$.prototype;return _e.reverse=function(){var ln=new $;return ln.do=this.undo,ln.undo=this.do,ln},$}(),_chunkRegistry={},Core=function(){function $(sn){var ln=this;this.dendriforms=new Map,this.deriveCallbackRefs=new Set,this.changeCallbackRefs=new Set,this.cancelCallbacks=new Set,this.debounceMap=new Map,this.getPath=function(mn){return getPath(ln.state.nodes,mn)},this.getPathOrError=function(mn){var _n=ln.getPath(mn);return _n||die(0,mn),_n},this.getValue=function(mn){var _n=ln.getPath(mn);if(!!_n)return getIn(ln.state.value,_n)},this.getRevertValue=function(mn){var _n=ln.stateRevert,yn=ln.getPath(mn);if(!(!yn||!_n))return getIn(_n.value,yn)},this.getKey=function(mn){var _n=ln.getPath(mn);return _n?_n.slice(-1)[0]:void 0},this.getIndex=function(mn){var _n=ln.getPath(mn),yn=_n?_n.slice(-1)[0]:-1;return typeof yn!="number"&&die(4,_n),yn},this.valueGettersByType={value:this.getValue,index:this.getIndex,history:function(_n){return ln.state.historyState}},this.createForm=function(mn,_n){var yn={core:ln,id:mn},Tn=new Dendriform({__branch:yn});return ln.dendriforms.set((_n?"r":"w")+mn,Tn),Tn},this.getFormAt=function(mn,_n){var yn;return mn&&(ln.state.nodes=fn(ln.state.nodes,function(Tn){var wn=getNodeByPath(Tn,ln.newNodeCreator,ln.state.value,mn);yn=r(wn)?e(wn):wn})),yn?ln.getFormById(yn.id,_n):ln.getFormById("notfound",!0)},this.getFormById=function(mn,_n){var yn=ln.dendriforms.get((_n?"r":"w")+mn)||ln.createForm(mn,_n);return yn._readonly=_n,yn},this.setWithDebounce=function(mn,_n,yn){var Tn,wn=yn.debounce;if(!wn){ln.set(mn,_n,yn);return}var On=((Tn=ln.debounceMap.get(mn))!==null&&Tn!==void 0?Tn:0)+1;ln.debounceMap.set(mn,On),setTimeout(function(){return On===ln.debounceMap.get(mn)&&ln.set(mn,_n,yn)},wn)},this.executeChange=function(mn,_n){var yn=$.changingForms.size===0;try{if($.changingForms.add(ln),ln.setRevertPoint(),mn(),yn){var Tn=Array.from($.changingForms.values());ln.finaliseChange(),Tn.forEach(function(wn){return wn.callAllChangeCallbacks(_n)})}}catch(wn){if(!yn)throw wn;if(!wn.DENDRIFORM_CANCEL)throw ln.finaliseChange(),wn;$.changingForms.forEach(function(On){return On.revert()}),ln.cancelCallbacks.forEach(function(On){return On(wn.message)}),ln.finaliseChange()}},this.finaliseChange=function(){var mn,_n=(mn=ln.stateRevert)===null||mn===void 0?void 0:mn.nodes;_n&&(ln.prevNodes=_n),$.changingForms.forEach(function(yn){return yn.clearRevertPoint()}),$.changingForms.clear()},this.set=function(mn,_n,yn){var Tn,wn,On,Dn={go:0,replace:!!ln.internalState.setBuffer,force:(Tn=yn.force)!==null&&Tn!==void 0?Tn:!1},Nn=ln.getPath(mn);if(!!Nn){var An=(wn=getNode(ln.state.nodes,mn))===null||wn===void 0?void 0:wn.parentId;An&&((On=getNode(ln.state.nodes,An))===null||On===void 0?void 0:On.type)===SET&&die(7),ln.executeChange(function(){var In=producePatches(ln.getValue(mn),_n,yn.track),Un=In[0],Ln=In[1],qn=zoomOutPatches(Nn,Un),kn=zoomOutPatches(Nn,Ln),xn=produceNodePatches(ln.state.nodes,ln.newNodeCreator,ln.state.value,qn),$n=xn[1],zn=xn[2],Yn=new HistoryItem;if(Yn.do.value=qn,Yn.do.nodes=$n,Yn.undo.value=kn,Yn.undo.nodes=zn,ln.applyChanges(Yn),!(ln.internalState.going||ln.internalState.deriving)&&(Dn.replace?ln.historyReplace(Yn):ln.historyPush(Yn),ln.internalState.setBuffer=Patch.concat(ln.internalState.setBuffer,Yn.do),Yn.do.value.length>0)){var nt;ln.callAllDeriveCallbacks(Dn),(nt=_chunkRegistry.executeHistorySync)===null||nt===void 0||nt.call(_chunkRegistry,$.changingForms)}},Dn)}},this.applyChanges=function(mn){ln.state.value=applyPatches(ln.state.value,mn.do.value),ln.state.nodes=applyPatches(ln.state.nodes,mn.do.nodes),ln.internalState.changeBuffer=HistoryItem.concat(ln.internalState.changeBuffer,mn)},this.replace=function(mn){mn?ln.internalState.setBuffer||(ln.internalState.setBuffer=new Patch):ln.internalState.setBuffer=void 0},this.newHistoryItem=function(){ln.internalState.setBuffer=ln.replaceByDefault?new Patch:void 0},this.callAllDeriveCallbacks=function(mn){ln.deriveCallbackRefs.forEach(function(_n){ln.derive(_n,mn)})},this.derive=function(mn,_n){var yn,Tn;if(!ln.internalState.deriving){ln.internalState.deriving=!0;var wn=mn[0],On=mn[1],Dn=(yn=ln.internalState.changeBuffer)!==null&&yn!==void 0?yn:new HistoryItem,Nn=ln.getValue(wn),An=ln.getRevertValue(wn),In=_extends({},_n,{patches:Dn,prev:{value:An,nodes:(Tn=ln.stateRevert)===null||Tn===void 0?void 0:Tn.nodes},next:{value:Nn,nodes:ln.state.nodes},id:wn});On(Nn,In),ln.internalState.deriving=!1}},this.buffer=function(){ln.internalState.bufferingChanges=!0,ln.newHistoryItem()},this.done=function(){ln.internalState.bufferingChanges=!1;var mn={go:0,replace:!1,force:!1};ln.callAllChangeCallbacks(mn)},this.callAllChangeCallbacks=function(mn){ln.internalState.bufferingChanges||(ln.newHistoryItem(),ln.internalState.changeBuffer&&(ln.changeCallbackRefs.forEach(function(_n){var yn=_n[0],Tn=_n[1],wn=_n[2],On=_n[3],Dn=ln.valueGettersByType[yn](Tn);if(!Object.is(Dn,On)){var Nn=ln.internalState.changeBuffer,An=_extends({},mn,{patches:Nn,prev:{value:On,nodes:ln.prevNodes},next:{value:Dn,nodes:ln.state.nodes},id:Tn});_n[3]=Dn,wn(Dn,An)}}),ln.internalState.changeBuffer=void 0))},this.historyPush=function(mn){var _n=ln.state.historyStack.slice(0,ln.state.historyIndex).concat(mn);_n.length>ln.historyLimit?_n.shift():ln.state.historyIndex++,ln.state.historyStack=_n,ln.updateHistoryState()},this.historyReplace=function(mn){if(ln.state.historyIndex!==0){var _n=ln.state.historyStack.slice(0,ln.state.historyIndex),yn=_n[ln.state.historyIndex-1];_n[ln.state.historyIndex-1]=HistoryItem.concat(yn,mn),ln.state.historyStack=_n}},this.go=function(mn){var _n={go:mn,replace:!1,force:!1};mn===0||ln.internalState.going||(ln.internalState.going=!0,ln.executeChange(function(){var yn,Tn=Math.min(Math.max(0,ln.state.historyIndex+mn),ln.state.historyStack.length),wn=mn>0?ln.state.historyStack.slice(ln.state.historyIndex,Tn):ln.state.historyStack.slice(Tn,ln.state.historyIndex).reverse().map(function(Dn){return Dn.reverse()}),On=HistoryItem.flatten(wn);ln.state.historyIndex=Tn,ln.updateHistoryState(),ln.applyChanges(On),ln.callAllDeriveCallbacks(_n),(yn=_chunkRegistry.executeHistorySync)===null||yn===void 0||yn.call(_chunkRegistry,$.changingForms,mn)},_n),ln.internalState.going=!1)},this.updateHistoryState=function(){var mn=ln.state.historyIndex>0,_n=ln.state.historyIndex<ln.state.historyStack.length;(mn!==ln.state.historyState.canUndo||_n!==ln.state.historyState.canRedo)&&(ln.state.historyState={canUndo:mn,canRedo:_n})},this.setRevertPoint=function(){ln.stateRevert=_extends({},ln.state),ln.internalStateRevert=_extends({},ln.internalState)},this.clearRevertPoint=function(){ln.stateRevert=void 0,ln.internalStateRevert=void 0},this.revert=function(){ln.stateRevert&&(ln.state=ln.stateRevert),ln.internalStateRevert&&(ln.internalState=ln.internalStateRevert)},this.state={value:sn.initialValue,nodes:{},nodeCount:0,historyIndex:0,historyStack:[],historyState:{canUndo:!1,canRedo:!1}},this.internalState={bufferingChanges:!1,setBuffer:void 0,changeBuffer:void 0,deriving:!1,going:!1},this.newNodeCreator=newNode(function(){return""+ln.state.nodeCount++}),addNode(this.state.nodes,this.newNodeCreator(this.state.value)),this.prevNodes=this.state.nodes,this.historyLimit=sn.options.history||0,this.replaceByDefault=!!sn.options.replace,this.plugins=sn.options.plugins}var _e=$.prototype;return _e.applyIdToPlugins=function(ln,mn){var _n={};for(var yn in this.plugins)_n[yn]=this.plugins[yn].cloneAndSpecify(ln,mn);return _n},$}();Core.changingForms=new Set;var Branch=React.memo(function($){return jsx(Fragment,{children:$.renderer()})},function($,_e){return $.id===_e.id&&shallowEqualArrays($.deps,_e.deps)}),branchable=function(_e){return getType(_e)!==BASIC},entriesOrNone=function(_e){try{return entries(_e)}catch{return[]}},Dendriform=function(){function $(sn,ln){var mn=this;if(ln===void 0&&(ln={}),this._readonly=!1,this.set=function(On,Dn){Dn===void 0&&(Dn={}),mn._readonly&&die(9),mn.core.setWithDebounce(mn.id,On,Dn)},this.setParent=function(On,Dn){Dn===void 0&&(Dn={}),mn._readonly&&die(9);var Nn=mn.core.getPathOrError(mn.id),An=mn.core.getFormAt(Nn.slice(0,-1),mn._readonly);mn.core.setWithDebounce(An.id,On(Nn[Nn.length-1]),Dn)},this.undo=function(){return mn.go(-1)},this.redo=function(){return mn.go(1)},this.go=function(On){mn._readonly&&die(9),mn.core.go(On)},this.replace=function(On){return On===void 0&&(On=!0),mn.core.replace(On)},this.buffer=function(){return mn.core.buffer()},this.done=function(){return mn.core.done()},sn instanceof Object&&sn.__branch){var _n=sn.__branch;this.core=_n.core,this.id=_n.id;return}this.id="0",this.core=new Core({initialValue:sn,options:ln});var yn=ln,Tn=yn.plugins;if(Tn)for(var wn in Tn)Tn[wn].init(this)}var _e=$.prototype;return _e.onDerive=function(ln){var mn=this,_n=[this.id,ln];this.core.deriveCallbackRefs.add(_n);var yn={go:0,replace:!0,force:!1};try{this.core.derive(_n,yn)}catch(Tn){die(6,Tn.message)}return this.core.callAllChangeCallbacks(yn),function(){return void mn.core.deriveCallbackRefs.delete(_n)}},_e.onCancel=function(ln){var mn=this;return this.core.cancelCallbacks.add(ln),function(){return void mn.core.cancelCallbacks.delete(ln)}},_e.onChange=function(ln,mn){var _n=this,yn=[mn||"value",this.id,ln,this.value];return this.core.changeCallbackRefs.add(yn),function(){return void _n.core.changeCallbackRefs.delete(yn)}},_e.useValue=function(){var ln=this,mn=react.exports.useState(function(){return ln.value}),_n=mn[0],yn=mn[1];return this.useChange(yn),_n},_e.useIndex=function(){var ln=this,mn=react.exports.useState(function(){return ln.index}),_n=mn[0],yn=mn[1];return this.useChange(yn,"index"),_n},_e.useChange=function(ln,mn){var _n=this;react.exports.useEffect(function(){return _n.onChange(ln,mn||"value")},[])},_e.useDerive=function(ln){var mn=this;react.exports.useEffect(function(){return mn.onDerive(ln)},[])},_e.useCancel=function(ln){var mn=this;react.exports.useEffect(function(){return mn.onCancel(ln)},[])},_e.useHistory=function(){var ln=react.exports.useState(this.core.state.historyState),mn=ln[0],_n=ln[1];return this.useChange(_n,"history"),mn},_e.branch=function(ln){var mn=[].concat(ln!=null?ln:[]),_n=this.core.getPath(this.id);return this.core.getFormAt(_n==null?void 0:_n.concat(mn),this._readonly)},_e.branchAll=function(ln){var mn=this.branch(ln);return entriesOrNone(mn.value).map(function(_n){var yn=_n[0];return mn.branch(yn)})},_e.render=function(ln,mn,_n){var yn=typeof ln=="function",Tn=yn?ln:mn,wn=yn?mn:_n,On=yn?this:this.branch(ln);return jsx(Branch,{id:On.id,renderer:function(){return Tn(On)},deps:wn})},_e.renderAll=function(ln,mn,_n){var yn=typeof ln=="function",Tn=yn?ln:mn,wn=yn?mn:_n,On=yn?this:this.branch(ln),Dn=function(){var An=On.useValue();return entriesOrNone(An).map(function(In){var Un=In[0],Ln=On.branch(Un);return jsx(Branch,{renderer:function(){return Tn(Ln)},deps:wn},Ln.id)})};return jsx(Branch,{id:On.id,renderer:Dn,deps:wn})},_e.readonly=function(){return this.core.getFormById(this.id,!0)},_createClass($,[{key:"value",get:function(){return this.core.getValue(this.id)}},{key:"key",get:function(){return this.core.getKey(this.id)}},{key:"path",get:function(){return this.core.getPathOrError(this.id)}},{key:"index",get:function(){return this.core.getIndex(this.id)}},{key:"history",get:function(){return this.core.state.historyState}},{key:"plugins",get:function(){return this.core.applyIdToPlugins(this.id,this.path)}},{key:"branchable",get:function(){return branchable(this.value)}}]),$}(),useDendriform=function(_e,sn){var ln=sn===void 0?{}:sn,mn=ln.plugins,_n=ln.dependencies,yn=_n===void 0?[]:_n,Tn=_objectWithoutPropertiesLoose(ln,["plugins","dependencies"]),wn=react.exports.useState(function(){var Nn=typeof _e=="function"?_e():_e;return new Dendriform(Nn,_extends({plugins:mn==null?void 0:mn()},Tn))}),On=wn[0],Dn=react.exports.useRef(yn);return!shallowEqualArrays(Dn.current,yn)&&typeof _e=="function"&&(On.replace(),On.set(_e())),Dn.current=yn,On},useInput=function(_e,sn){sn===void 0&&(sn=0);var ln=_e.useValue()||"",mn=react.exports.useState(ln),_n=mn[0],yn=mn[1],Tn=react.exports.useState(ln),wn=Tn[0],On=Tn[1];ln!==_n&&(yn(ln),On(ln));var Dn=react.exports.useCallback(function(Nn){var An=Nn.target.value;On(An),_e.set(An,{debounce:sn})},[]);return{value:wn,onChange:Dn}},historySyncGroups=new Map;_chunkRegistry.executeHistorySync=function($,_e){_e===void 0&&(_e=0);var sn=new Set(Array.from($).map(function(ln){return historySyncGroups.get(ln)}).filter(function(ln){return!!ln}));historySyncGroups.forEach(function(ln,mn){!$.has(mn)&&sn.has(ln)&&(_e?mn.go(_e):mn.set("0",noChange,{}))})};const stateFromStorage=JSON.parse((localStorage==null?void 0:localStorage.getItem("app-state"))||"{}"),defaultState={surface:{keySize:60,rootPositionX:.4,rootPositionY:.6,stepSizeX:1,stepSizeY:5},sidebar:{open:!1,tuningOpen:!0,surfaceOpen:!0,synthOpen:!0,consoleOpen:!1},tuning:{rootHz:440,scaleSize:12},synth:{polyMode:"per-cell"}};var ps,ms,hs,_s;const appState=new Dendriform(kr(yt(yt({},defaultState),stateFromStorage!=null?stateFromStorage:{}),{surface:yt(yt({},defaultState.surface),(ps=stateFromStorage.surface)!=null?ps:{}),sidebar:yt(yt({},defaultState.sidebar),(ms=stateFromStorage.sidebar)!=null?ms:{}),tuning:yt(yt({},defaultState.tuning),(hs=stateFromStorage.tuning)!=null?hs:{}),synth:yt(yt({},defaultState.synth),(_s=stateFromStorage.synth)!=null?_s:{})}));appState.onDerive($=>{localStorage==null||localStorage.setItem("app-state",JSON.stringify($))});function useNumberToString($){const _e=useDendriform(()=>`${$.value}`),sn=useDendriform(!0);return $.useDerive(ln=>{_e.set(`${ln}`)}),_e.useDerive(ln=>{const mn=Number(ln),_n=!isNaN(mn);sn.set(_n),_n&&$.set(mn)}),[_e,sn]}const fieldrow="_fieldrow_1dvha_1";var classes$5={fieldrow};function FieldRow($){return jsxs("div",{className:classes$5.fieldrow,children:[jsx("label",{children:$.label}),$.children]})}const surface$1=appState.branch("surface");function SidebarSurfaceSettings(){return jsxs("div",{children:[jsx(FieldRow,{label:"key size",children:surface$1.render("keySize",$=>{const[_e]=useNumberToString($);return jsx("input",yt({type:"range",min:"20",max:"200"},useInput(_e)))})}),jsx(FieldRow,{label:"key offset x",children:surface$1.render("rootPositionX",$=>{const[_e]=useNumberToString($);return jsx("input",yt({type:"range",min:"0",max:"1",step:"0.001"},useInput(_e)))})}),jsx(FieldRow,{label:"key offset y",children:surface$1.render("rootPositionY",$=>{const[_e]=useNumberToString($);return jsx("input",yt({type:"range",min:"0",max:"1",step:"0.001"},useInput(_e)))})}),jsx(FieldRow,{label:"step size up",children:surface$1.render("stepSizeY",$=>{const[_e]=useNumberToString($);return jsx("input",yt({type:"number",step:"1"},useInput(_e)))})}),jsx(FieldRow,{label:"step size right",children:surface$1.render("stepSizeX",$=>{const[_e]=useNumberToString($);return jsx("input",yt({type:"number",step:"1"},useInput(_e)))})})]})}const tuning=appState.branch("tuning");function SidebarTuningSettings(){return jsx("div",{children:jsx(FieldRow,{label:"edo",children:tuning.render("scaleSize",$=>{const[_e]=useNumberToString($);return jsx("input",yt({type:"number",step:"1",min:"1",max:"311"},useInput(_e)))})})})}const synth$1=appState.branch("synth");function SidebarSynthSettings(){return jsxs("div",{children:[jsx(FieldRow,{label:"polyphony mode",children:synth$1.render("polyMode",$=>jsxs("select",kr(yt({},useInput($)),{children:[jsx("option",{value:"per-cell",children:"per-cell"}),jsx("option",{value:"per-pointer",children:"per-pointer"}),jsx("option",{value:"per-pitch",children:"per-pitch"})]})))}),"More synth options will be added soon.",jsx("br",{}),jsx("br",{}),"Right now we have a triangle with fast attack and slow release, with up to 8 voices, each voice randomly panned and passed through a tremolo effect on note start."]})}const line="_line_1b42c_1",log="_log_1b42c_6",warn="_warn_1b42c_10",error="_error_1b42c_14";var classes$4={line,log,warn,error};const consoleStore=new Dendriform([]);function Console(){const $=consoleStore.useValue();return jsx("div",{children:$.map((_e,sn)=>react.exports.createElement(LogLine,kr(yt({},_e),{key:sn})))})}function LogLine({type:$,text:_e}){return jsx("div",{className:clsx(classes$4.line,classes$4[$]),children:_e})}const link="_link_17331_1";var classes$3={link};const clickable="_clickable_1yx04_1";var classes$2={clickable};const Clickable=react.exports.memo(function(_e){const{children:sn,onClick:ln,href:mn,style:_n}=_e,yn=react.exports.useRef(null),Tn=clsx(_e.className,classes$2.clickable);return mn?jsx("a",{className:Tn,style:_n,href:mn,ref:yn,children:sn}):jsx("button",{className:Tn,style:_n,onClick:ln,type:"button",children:sn})}),Link=react.exports.memo(function(_e){return jsx(Clickable,kr(yt({},_e),{className:classes$3.link}))}),contents="_contents_ua1ws_1",label="_label_ua1ws_5";var classes$1={contents,label};function Drawer($){const{state:_e}=$,sn=_e.useValue();return jsxs("div",{children:[jsx(Clickable,{onClick:()=>{_e.set(mn=>!mn)},className:classes$1.label,children:$.label}),sn?jsx("div",{className:classes$1.contents,children:$.children}):null]})}function Sidebar($){const{handleDestroy:_e,handleOfflineRenderTest:sn}=$,ln=appState.branch("sidebar");return ln.branch("open").useValue()?jsxs("div",{className:clsx(classes$6.sidebar,classes$6.open),children:[jsxs("div",{className:classes$6.sidebarHeader,children:[jsx("div",{className:classes$6.sidebarHeading,children:jsx("h1",{children:"mosfez-synth demo"})}),jsx(Link,{onClick:()=>ln.branch("open").set(!1),children:"[close]"})]}),jsx(Drawer,{label:"Tuning settings",state:ln.branch("tuningOpen"),children:jsx(SidebarTuningSettings,{})}),jsx(Drawer,{label:"Surface settings",state:ln.branch("surfaceOpen"),children:jsx(SidebarSurfaceSettings,{})}),jsx(Drawer,{label:"Synth settings",state:ln.branch("synthOpen"),children:jsx(SidebarSynthSettings,{})}),jsx(Drawer,{label:"Debug console",state:ln.branch("consoleOpen"),children:jsx(Console,{})}),jsxs("div",{className:classes$6.repo,children:[jsx("div",{children:jsx(Link,{href:"https://github.com/dxinteractive/mosfez-synth",children:"github repo"})}),jsx("div",{children:jsx(Link,{onClick:_e,children:"destroy"})}),jsx("div",{children:jsx(Link,{onClick:sn,children:"offline render test"})})]})]}):jsx("div",{className:clsx(classes$6.sidebar,classes$6.closed),children:jsx("div",{className:classes$6.sideways,children:jsx("div",{className:classes$6.sidewaysInner,children:jsx(Link,{onClick:()=>ln.branch("open").set(!0),children:"[open settings]"})})})})}const surface="_surface_u2tnu_1",cell="_cell_u2tnu_10",equave="_equave_u2tnu_19",root="_root_u2tnu_23";var classes={surface,cell,equave,root};const useLatest=$=>{const _e=react.exports.useRef($);return react.exports.useEffect(()=>{_e.current=$}),_e};var useLatest$1=useLatest;const perf=typeof performance!="undefined"?performance:Date,now=()=>perf.now();function useThrottleCallback($,_e=30,sn=!1){const ln=useLatest$1($),mn=1e3/_e,_n=react.exports.useRef(0),yn=react.exports.useRef(),Tn=()=>yn.current&&clearTimeout(yn.current),wn=[_e,sn,ln];function On(){_n.current=0,Tn()}return react.exports.useEffect(()=>On,wn),react.exports.useCallback(function(){const Dn=arguments,Nn=now(),An=()=>{_n.current=Nn,Tn(),ln.current.apply(null,Dn)},In=_n.current;if(sn&&In===0)return An();if(Nn-In>mn){if(In>0)return An();_n.current=Nn}Tn(),yn.current=setTimeout(()=>{An(),_n.current=0},mn)},wn)}function useThrottle($,_e,sn){const ln=react.exports.useState($);return[ln[0],useThrottleCallback(ln[1],_e,sn)]}function useEvent($,_e,sn,ln){const mn=react.exports.useRef(sn),_n=react.exports.useRef(ln);react.exports.useEffect(()=>{mn.current=sn,_n.current=ln}),react.exports.useEffect(()=>{const yn=$&&"current"in $?$.current:$;if(!yn)return;let Tn=0;function wn(...Dn){Tn||mn.current.apply(this,Dn)}yn.addEventListener(_e,wn);const On=_n.current;return()=>{Tn=1,yn.removeEventListener(_e,wn),On&&On()}},[$,_e])}const emptyObj={},win=typeof window=="undefined"?null:window,getSize=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],useWindowSize=($=emptyObj)=>{const{fps:_e,leading:sn,initialWidth:ln=0,initialHeight:mn=0}=$,[_n,yn]=useThrottle(typeof document=="undefined"?[ln,mn]:getSize,_e,sn),Tn=()=>yn(getSize);return useEvent(win,"resize",Tn),useEvent(win,"orientationchange",Tn),_n};function worldToScreen($,_e,[sn,ln]){const{keySize:mn,rootPositionX:_n,rootPositionY:yn}=$,[Tn,wn]=_e;return[sn*mn+_n*Tn,ln*mn+yn*wn]}function screenToWorld($,_e,[sn,ln]){const{keySize:mn,rootPositionX:_n,rootPositionY:yn}=$,[Tn,wn]=_e;return[(sn-_n*Tn)/mn,(ln-yn*wn)/mn]}function getWorldWindowBounds($,_e){const{keySize:sn,rootPositionX:ln,rootPositionY:mn}=$,[_n,yn]=_e,Tn=Math.ceil(_n/sn),wn=Math.ceil(yn/sn),On=Math.floor(-ln*_n/sn),Dn=Math.floor(-mn*yn/sn),Nn=[On,On+Tn+2],An=[Dn,Dn+wn+2];return[Nn,An]}function touchToId($){return`touch-${$.identifier}`}function useSurfaceTouch($){const _e=react.exports.useRef(null);return react.exports.useEffect(()=>{const sn=_e.current;if(!sn)return;const ln=Nn=>{Nn.preventDefault();const{changedTouches:An}=Nn;for(let In=0;In<An.length;In++){const Un=An[In],Ln=Un.pageX,qn=Un.pageY;$({type:"start",x:Ln,y:qn,pointerId:touchToId(Un),force:Un.force})}},mn=Nn=>{Nn.preventDefault();const{changedTouches:An}=Nn;for(let In=0;In<An.length;In++){const Un=An[In],Ln=Un.pageX,qn=Un.pageY;$({type:"move",x:Ln,y:qn,pointerId:touchToId(Un),force:Un.force})}},_n=Nn=>{Nn.preventDefault();const{changedTouches:An}=Nn;for(let In=0;In<An.length;In++){const Un=An[In],Ln=Un.pageX,qn=Un.pageY;$({type:"end",x:Ln,y:qn,pointerId:touchToId(Un),force:Un.force})}};let yn=!1,Tn;const wn=Nn=>{Nn.preventDefault(),yn=!0;const An=Nn.pageX,In=Nn.pageY;Tn=[An,In],$({type:"start",x:An,y:In,pointerId:"mouse",force:1})},On=Nn=>{if(Nn.preventDefault(),!yn)return;const An=Nn.pageX,In=Nn.pageY;Tn=[An,In],$({type:"move",x:An,y:In,pointerId:"mouse",force:1})},Dn=()=>{if(yn=!1,Tn){const[Nn,An]=Tn;Tn=void 0,$({type:"end",x:Nn,y:An,pointerId:"mouse",force:1})}};return sn.addEventListener("touchstart",ln),sn.addEventListener("touchmove",mn),sn.addEventListener("touchend",_n),sn.addEventListener("touchcancel",_n),sn.addEventListener("mousedown",wn),sn.addEventListener("mousemove",On),window.addEventListener("mouseup",Dn),()=>{sn.removeEventListener("touchstart",ln),sn.removeEventListener("touchmove",mn),sn.removeEventListener("touchend",_n),sn.removeEventListener("touchcancel",_n),sn.removeEventListener("mousedown",wn),sn.removeEventListener("mousemove",On),window.removeEventListener("mouseup",Dn)}},[$]),_e}function coordToStep($,_e){const{stepSizeX:sn,stepSizeY:ln}=appState.value.surface;return-Math.round(_e)*ln+Math.round($)*sn}function stepToDecimalMidi($,_e){return $/_e*12+72}function mod($,_e){return($%_e+_e)%_e}function Surface($){const{onSurfaceNoteEvent:_e}=$,sn=useWindowSize(),ln=appState.branch("surface").useValue(),mn=appState.branch(["tuning","scaleSize"]).useValue(),_n=react.exports.useRef(sn),yn=react.exports.useRef(ln);_n.current=sn,yn.current=ln;const Tn=react.exports.useCallback(Un=>{if(!_e)return;const{type:Ln,pointerId:qn,force:kn=1}=Un,xn=[Un.x,Un.y],[$n,zn]=screenToWorld(yn.current,_n.current,xn),Yn=coordToStep($n,zn),nt=appState.branch(["tuning","scaleSize"]).value,et=stepToDecimalMidi(Yn,nt);_e({type:Ln,pointerId:qn,force:kn,decimalMidi:et,cell:[Math.round($n),Math.round(zn)]})},[_e]),wn=useSurfaceTouch(Tn),[[On,Dn],[Nn,An]]=getWorldWindowBounds(ln,sn),In=[];for(let Un=On;Un<Dn;Un++)for(let Ln=Nn;Ln<An;Ln++){const qn=[Un-.5,Ln-.5],[kn,xn]=worldToScreen(ln,sn,qn),$n=coordToStep(Un,Ln),zn=mod($n,mn),Yn=$n===0,nt=zn===0&&!Yn;In.push(jsx(Cell,{keySize:ln.keySize,x:kn,y:xn,isRoot:Yn,isEquave:nt,children:zn},`${Un},${Ln}`))}return jsx("div",{className:classes.surface,ref:wn,children:In})}function Cell($){const{children:_e,keySize:sn,x:ln,y:mn,isRoot:_n,isEquave:yn}=$,Tn={width:`${sn}px`,height:`${sn}px`,left:`${ln}px`,top:`${mn}px`};return jsx("div",{className:clsx(classes.cell,_n&&classes.root,yn&&classes.equave),style:Tn,children:_e})}function validateParamDefinition($,_e){if(!isConstant(_e)&&!isVariable(_e))throw new Error(`param "${$}" must be a constant number or a string referring to a param name, but got ${_e}`);return _e}function validateParamDefinitionObject($){for(const _e in $)validateParamDefinition(_e,$[_e]);return $}function isConstant($){return typeof $=="number"}function isVariable($){return typeof $=="string"}function resolveParam($,_e){if(isConstant(_e))return _e;if(isVariable(_e))return $[_e]}class DspNode{constructor(_e){this.type=_e.type}static isFaustDspNode(_e){return _e.type==="faust"}static isPolyDspNode(_e){return _e.type==="poly"}static isFaustDspNodeSerialized(_e){return _e.type==="faust"}static isPolyDspNodeSerialized(_e){return _e.type==="poly"}serialize(){throw new Error(".serialize() can only be called on subclasses")}}class DspNodeFaust extends DspNode{constructor(_e){var sn;super({type:"faust"}),this.dsp=_e.dsp,this.inputs=(sn=_e.inputs)!=null?sn:[],this.paramDefs=validateParamDefinitionObject(_e.paramDefs),this.dependencies=_e.dependencies}serialize(){const{dsp:_e,paramDefs:sn}=this,ln=this.inputs.map(mn=>mn.serialize());return{type:"faust",dsp:_e,inputs:ln,paramDefs:sn}}}class DspNodePoly extends DspNode{constructor(_e){super({type:"poly"}),this.input=_e.input,this.polyphony=_e.polyphony,this.paramCacheSize=_e.paramCacheSize,this.release=validateParamDefinition("release",_e.release),this.gate=validateParamDefinition("gate",_e.gate),this.dependencies=_e.dependencies}serialize(){const{polyphony:_e,paramCacheSize:sn,release:ln,gate:mn}=this,_n=this.input.serialize();return{type:"poly",input:_n,polyphony:_e,paramCacheSize:sn,release:ln,gate:mn}}}var FaustModule=function(){var $=typeof document!="undefined"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename!="undefined"&&($=$||__filename),function(_e){_e=_e||{};var sn=typeof _e!="undefined"?_e:{};sn.expectedDataFileDownloads||(sn.expectedDataFileDownloads=0,sn.finishedDataFileDownloads=0),sn.expectedDataFileDownloads++,function(){var dn=function(hn){if(typeof window=="object")window.encodeURIComponent(window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/");else if(typeof location!="undefined")encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/");else throw"using preloaded data can only be done on a web page or in a web worker";var gn="../../lib/libfaust-wasm.data",vn="libfaust-wasm.data";typeof sn.locateFilePackage=="function"&&!sn.locateFile&&(sn.locateFile=sn.locateFilePackage,kn("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));var Sn=sn.locateFile?sn.locateFile(vn,""):vn,bn=hn.remote_package_size;hn.package_uuid;function Mn(Hn,Qn,Bn,Wn){var Gn=new XMLHttpRequest;Gn.open("GET",Hn,!0),Gn.responseType="arraybuffer",Gn.onprogress=function(ot){var ut=Hn,ft=Qn;if(ot.total&&(ft=ot.total),ot.loaded){Gn.addedTotal?sn.dataFileDownloads[ut].loaded=ot.loaded:(Gn.addedTotal=!0,sn.dataFileDownloads||(sn.dataFileDownloads={}),sn.dataFileDownloads[ut]={loaded:ot.loaded,total:ft});var Vn=0,Kn=0,it=0;for(var st in sn.dataFileDownloads){var dt=sn.dataFileDownloads[st];Vn+=dt.total,Kn+=dt.loaded,it++}Vn=Math.ceil(Vn*sn.expectedDataFileDownloads/it),sn.setStatus&&sn.setStatus("Downloading data... ("+Kn+"/"+Vn+")")}else sn.dataFileDownloads||sn.setStatus&&sn.setStatus("Downloading data...")},Gn.onerror=function(ot){throw new Error("NetworkError for: "+Hn)},Gn.onload=function(ot){if(Gn.status==200||Gn.status==304||Gn.status==206||Gn.status==0&&Gn.response){var ut=Gn.response;Bn(ut)}else throw new Error(Gn.statusText+" : "+Gn.responseURL)},Gn.send(null)}var Pn=null,Cn=sn.getPreloadedPackage?sn.getPreloadedPackage(Sn,bn):null;Cn||Mn(Sn,bn,function(Hn){Pn?(Pn(Hn),Pn=null):Cn=Hn});function jn(){function Hn(ot,ut){if(!ot)throw ut+new Error().stack}sn.FS_createPath("/","libraries",!0,!0);function Qn(ot,ut,ft){this.start=ot,this.end=ut,this.audio=ft}Qn.prototype={requests:{},open:function(ot,ut){this.name=ut,this.requests[ut]=this,sn.addRunDependency("fp "+this.name)},send:function(){},onload:function(){var ot=this.byteArray.subarray(this.start,this.end);this.finish(ot)},finish:function(ot){var ut=this;sn.FS_createDataFile(this.name,null,ot,!0,!0,!0),sn.removeRunDependency("fp "+ut.name),this.requests[this.name]=null}};for(var Bn=hn.files,Wn=0;Wn<Bn.length;++Wn)new Qn(Bn[Wn].start,Bn[Wn].end,Bn[Wn].audio).open("GET",Bn[Wn].filename);function Gn(ot){sn.finishedDataFileDownloads++,Hn(ot,"Loading data file failed."),Hn(ot instanceof ArrayBuffer,"bad input to processPackageData");var ut=new Uint8Array(ot);Qn.prototype.byteArray=ut;for(var ft=hn.files,Vn=0;Vn<ft.length;++Vn)Qn.prototype.requests[ft[Vn].filename].onload();sn.removeRunDependency("datafile_../../lib/libfaust-wasm.data")}sn.addRunDependency("datafile_../../lib/libfaust-wasm.data"),sn.preloadResults||(sn.preloadResults={}),sn.preloadResults[gn]={fromCache:!1},Cn?(Gn(Cn),Cn=null):Pn=Gn}sn.calledRun?jn():(sn.preRun||(sn.preRun=[]),sn.preRun.push(jn))};dn({files:[{filename:"/libraries/hoa.lib",start:0,end:13105,audio:0},{filename:"/libraries/compressors.lib",start:13105,end:58859,audio:0},{filename:"/libraries/basics.lib",start:58859,end:110385,audio:0},{filename:"/libraries/dx7.lib",start:110385,end:179488,audio:0},{filename:"/libraries/analyzers.lib",start:179488,end:212357,audio:0},{filename:"/libraries/spats.lib",start:212357,end:217531,audio:0},{filename:"/libraries/envelopes.lib",start:217531,end:228127,audio:0},{filename:"/libraries/oscillators.lib",start:228127,end:275738,audio:0},{filename:"/libraries/mi.lib",start:275738,end:293026,audio:0},{filename:"/libraries/misceffects.lib",start:293026,end:314755,audio:0},{filename:"/libraries/version.lib",start:314755,end:315662,audio:0},{filename:"/libraries/webaudio.lib",start:315662,end:327785,audio:0},{filename:"/libraries/math.lib",start:327785,end:349263,audio:0},{filename:"/libraries/stdfaust.lib",start:349263,end:350533,audio:0},{filename:"/libraries/filter.lib",start:350533,end:415919,audio:0},{filename:"/libraries/delays.lib",start:415919,end:430403,audio:0},{filename:"/libraries/routes.lib",start:430403,end:437029,audio:0},{filename:"/libraries/soundfiles.lib",start:437029,end:446390,audio:0},{filename:"/libraries/tonestacks.lib",start:446390,end:458744,audio:0},{filename:"/libraries/aanl.lib",start:458744,end:484841,audio:0},{filename:"/libraries/wdmodels.lib",start:484841,end:574662,audio:0},{filename:"/libraries/all.lib",start:574662,end:575678,audio:0},{filename:"/libraries/music.lib",start:575678,end:594112,audio:0},{filename:"/libraries/tubes.lib",start:594112,end:943901,audio:0},{filename:"/libraries/effect.lib",start:943901,end:1012931,audio:0},{filename:"/libraries/vaeffects.lib",start:1012931,end:1048800,audio:0},{filename:"/libraries/maxmsp.lib",start:1048800,end:1056659,audio:0},{filename:"/libraries/platform.lib",start:1056659,end:1059739,audio:0},{filename:"/libraries/synths.lib",start:1059739,end:1070990,audio:0},{filename:"/libraries/sf.lib",start:1070990,end:1072056,audio:0},{filename:"/libraries/fds.lib",start:1072056,end:1092602,audio:0},{filename:"/libraries/reducemaps.lib",start:1092602,end:1097438,audio:0},{filename:"/libraries/phaflangers.lib",start:1097438,end:1107359,audio:0},{filename:"/libraries/filters.lib",start:1107359,end:1212987,audio:0},{filename:"/libraries/signals.lib",start:1212987,end:1224932,audio:0},{filename:"/libraries/instruments.lib",start:1224932,end:1234327,audio:0},{filename:"/libraries/quantizers.lib",start:1234327,end:1244180,audio:0},{filename:"/libraries/noises.lib",start:1244180,end:1258842,audio:0},{filename:"/libraries/oscillator.lib",start:1258842,end:1278693,audio:0},{filename:"/libraries/interpolators.lib",start:1278693,end:1301737,audio:0},{filename:"/libraries/demos.lib",start:1301737,end:1364872,audio:0},{filename:"/libraries/reverbs.lib",start:1364872,end:1402697,audio:0},{filename:"/libraries/physmodels.lib",start:1402697,end:1573680,audio:0},{filename:"/libraries/maths.lib",start:1573680,end:1595081,audio:0}],remote_package_size:1595081,package_uuid:"04ea3dc2-3649-4af3-b126-173b06afc41a"})}();var ln={},mn;for(mn in sn)sn.hasOwnProperty(mn)&&(ln[mn]=sn[mn]);var _n="./this.program",yn=!1,Tn=!1,wn=!1,On=!1;if(yn=typeof window=="object",Tn=typeof importScripts=="function",wn=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",On=!yn&&!wn&&!Tn,sn.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");var Dn="";function Nn(dn){return sn.locateFile?sn.locateFile(dn,Dn):Dn+dn}var An,In,Un,Ln;if(wn)Tn?Dn=require("path").dirname(Dn)+"/":Dn=__dirname+"/",An=function(hn,gn){return Un||(Un=require("fs")),Ln||(Ln=require("path")),hn=Ln.normalize(hn),Un.readFileSync(hn,gn?null:"utf8")},In=function(hn){var gn=An(hn,!0);return gn.buffer||(gn=new Uint8Array(gn)),Rn(gn.buffer),gn},process.argv.length>1&&(_n=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(dn){if(!(dn instanceof Bl))throw dn}),process.on("unhandledRejection",Fn),sn.inspect=function(){return"[Emscripten Module object]"};else if(On)typeof read!="undefined"&&(An=function(hn){return read(hn)}),In=function(hn){var gn;return typeof readbuffer=="function"?new Uint8Array(readbuffer(hn)):(gn=read(hn,"binary"),Rn(typeof gn=="object"),gn)},typeof scriptArgs!="undefined"&&scriptArgs,typeof print!="undefined"&&(typeof console=="undefined"&&(console={}),console.log=print,console.warn=console.error=typeof printErr!="undefined"?printErr:print);else if(yn||Tn)Tn?Dn=self.location.href:document.currentScript&&(Dn=document.currentScript.src),$&&(Dn=$),Dn.indexOf("blob:")!==0?Dn=Dn.substr(0,Dn.lastIndexOf("/")+1):Dn="",An=function(hn){var gn=new XMLHttpRequest;return gn.open("GET",hn,!1),gn.send(null),gn.responseText},Tn&&(In=function(hn){var gn=new XMLHttpRequest;return gn.open("GET",hn,!1),gn.responseType="arraybuffer",gn.send(null),new Uint8Array(gn.response)});else throw new Error("environment detection error");var qn=sn.print||console.log.bind(console),kn=sn.printErr||console.warn.bind(console);for(mn in ln)ln.hasOwnProperty(mn)&&(sn[mn]=ln[mn]);ln=null,sn.arguments&&sn.arguments,Object.getOwnPropertyDescriptor(sn,"arguments")||Object.defineProperty(sn,"arguments",{configurable:!0,get:function(){Fn("Module.arguments has been replaced with plain arguments_")}}),sn.thisProgram&&(_n=sn.thisProgram),Object.getOwnPropertyDescriptor(sn,"thisProgram")||Object.defineProperty(sn,"thisProgram",{configurable:!0,get:function(){Fn("Module.thisProgram has been replaced with plain thisProgram")}}),sn.quit&&sn.quit,Object.getOwnPropertyDescriptor(sn,"quit")||Object.defineProperty(sn,"quit",{configurable:!0,get:function(){Fn("Module.quit has been replaced with plain quit_")}}),Rn(typeof sn.memoryInitializerPrefixURL=="undefined","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),Rn(typeof sn.pthreadMainPrefixURL=="undefined","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),Rn(typeof sn.cdInitializerPrefixURL=="undefined","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),Rn(typeof sn.filePackagePrefixURL=="undefined","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),Rn(typeof sn.read=="undefined","Module.read option was removed (modify read_ in JS)"),Rn(typeof sn.readAsync=="undefined","Module.readAsync option was removed (modify readAsync in JS)"),Rn(typeof sn.readBinary=="undefined","Module.readBinary option was removed (modify readBinary in JS)"),Rn(typeof sn.setWindowTitle=="undefined","Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),Rn(typeof sn.TOTAL_MEMORY=="undefined","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),Object.getOwnPropertyDescriptor(sn,"read")||Object.defineProperty(sn,"read",{configurable:!0,get:function(){Fn("Module.read has been replaced with plain read_")}}),Object.getOwnPropertyDescriptor(sn,"readAsync")||Object.defineProperty(sn,"readAsync",{configurable:!0,get:function(){Fn("Module.readAsync has been replaced with plain readAsync")}}),Object.getOwnPropertyDescriptor(sn,"readBinary")||Object.defineProperty(sn,"readBinary",{configurable:!0,get:function(){Fn("Module.readBinary has been replaced with plain readBinary")}});var no,Mo,Ar;no=Mo=Ar=function(){Fn("cannot use the stack before compiled code is ready to run, and has provided stack access")};function xn(dn){Rn(Nr);var hn=Xn[Nr>>2],gn=hn+dn+15&-16;return Rn(gn<=St.length,"failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly"),Xn[Nr>>2]=gn,hn}function $n(dn){switch(dn){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(dn[dn.length-1]==="*")return 4;if(dn[0]==="i"){var hn=Number(dn.substr(1));return Rn(hn%8===0,"getNativeTypeSize invalid bits "+hn+", type "+dn),hn/8}else return 0}}}function zn(dn){zn.shown||(zn.shown={}),zn.shown[dn]||(zn.shown[dn]=1,kn(dn))}var Yn;sn.wasmBinary&&(Yn=sn.wasmBinary),Object.getOwnPropertyDescriptor(sn,"wasmBinary")||Object.defineProperty(sn,"wasmBinary",{configurable:!0,get:function(){Fn("Module.wasmBinary has been replaced with plain wasmBinary")}}),sn.noExitRuntime&&sn.noExitRuntime,Object.getOwnPropertyDescriptor(sn,"noExitRuntime")||Object.defineProperty(sn,"noExitRuntime",{configurable:!0,get:function(){Fn("Module.noExitRuntime has been replaced with plain noExitRuntime")}}),typeof WebAssembly!="object"&&Fn("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");function nt(dn,hn,gn,vn){switch(gn=gn||"i8",gn.charAt(gn.length-1)==="*"&&(gn="i32"),gn){case"i1":St[dn>>0]=hn;break;case"i8":St[dn>>0]=hn;break;case"i16":kt[dn>>1]=hn;break;case"i32":Xn[dn>>2]=hn;break;case"i64":Nt=[hn>>>0,(Tt=hn,+$r(Tt)>=1?Tt>0?(Hr(+jr(Tt/4294967296),4294967295)|0)>>>0:~~+Ur((Tt-+(~~Tt>>>0))/4294967296)>>>0:0)],Xn[dn>>2]=Nt[0],Xn[dn+4>>2]=Nt[1];break;case"float":so[dn>>2]=hn;break;case"double":Cr[dn>>3]=hn;break;default:Fn("invalid type for setValue: "+gn)}}var et,at=new WebAssembly.Table({initial:2176,maximum:2176+0,element:"anyfunc"}),vt=!1;function Rn(dn,hn){dn||Fn("Assertion failed: "+hn)}function Rt(dn){var hn=sn["_"+dn];return Rn(hn,"Cannot call unknown function "+dn+", make sure it is exported"),hn}function qt(dn,hn,gn,vn,Sn){var bn={string:function(Wn){var Gn=0;if(Wn!=null&&Wn!==0){var ot=(Wn.length<<2)+1;Gn=Ar(ot),gt(Wn,Gn,ot)}return Gn},array:function(Wn){var Gn=Ar(Wn.length);return xo(Wn,Gn),Gn}};function Mn(Wn){return hn==="string"?ct(Wn):hn==="boolean"?Boolean(Wn):Wn}var Pn=Rt(dn),Cn=[],jn=0;if(Rn(hn!=="array",'Return type should not be "array".'),vn)for(var Hn=0;Hn<vn.length;Hn++){var Qn=bn[gn[Hn]];Qn?(jn===0&&(jn=no()),Cn[Hn]=Qn(vn[Hn])):Cn[Hn]=vn[Hn]}var Bn=Pn.apply(null,Cn);return Bn=Mn(Bn),jn!==0&&Mo(jn),Bn}function Kt(dn,hn,gn,vn){return function(){return qt(dn,hn,gn,arguments)}}var Fr=1,io=3;function fr(dn,hn,gn,vn){var Sn,bn;typeof dn=="number"?(Sn=!0,bn=dn):(Sn=!1,bn=dn.length);var Mn=typeof hn=="string"?hn:null,Pn;if(gn==io?Pn=vn:Pn=[$t,Ar,xn][gn](Math.max(bn,Mn?1:hn.length)),Sn){var Cn;for(vn=Pn,Rn((Pn&3)==0),Cn=Pn+(bn&-4);vn<Cn;vn+=4)Xn[vn>>2]=0;for(Cn=Pn+bn;vn<Cn;)St[vn++>>0]=0;return Pn}if(Mn==="i8")return dn.subarray||dn.slice?bt.set(dn,Pn):bt.set(new Uint8Array(dn),Pn),Pn;for(var jn=0,Hn,Qn,Bn;jn<bn;){var Wn=dn[jn];if(Hn=Mn||hn[jn],Hn===0){jn++;continue}Rn(Hn,"Must know what type to store in allocate!"),Hn=="i64"&&(Hn="i32"),nt(Pn+jn,Wn,Hn),Bn!==Hn&&(Qn=$n(Hn),Bn=Hn),jn+=Qn}return Pn}function pr(dn){return Jn?$t(dn):xn(dn)}var tt=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function lt(dn,hn,gn){for(var vn=hn+gn,Sn=hn;dn[Sn]&&!(Sn>=vn);)++Sn;if(Sn-hn>16&&dn.subarray&&tt)return tt.decode(dn.subarray(hn,Sn));for(var bn="";hn<Sn;){var Mn=dn[hn++];if(!(Mn&128)){bn+=String.fromCharCode(Mn);continue}var Pn=dn[hn++]&63;if((Mn&224)==192){bn+=String.fromCharCode((Mn&31)<<6|Pn);continue}var Cn=dn[hn++]&63;if((Mn&240)==224?Mn=(Mn&15)<<12|Pn<<6|Cn:((Mn&248)!=240&&zn("Invalid UTF-8 leading byte 0x"+Mn.toString(16)+" encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"),Mn=(Mn&7)<<18|Pn<<12|Cn<<6|dn[hn++]&63),Mn<65536)bn+=String.fromCharCode(Mn);else{var jn=Mn-65536;bn+=String.fromCharCode(55296|jn>>10,56320|jn&1023)}}return bn}function ct(dn,hn){return dn?lt(bt,dn,hn):""}function _t(dn,hn,gn,vn){if(!(vn>0))return 0;for(var Sn=gn,bn=gn+vn-1,Mn=0;Mn<dn.length;++Mn){var Pn=dn.charCodeAt(Mn);if(Pn>=55296&&Pn<=57343){var Cn=dn.charCodeAt(++Mn);Pn=65536+((Pn&1023)<<10)|Cn&1023}if(Pn<=127){if(gn>=bn)break;hn[gn++]=Pn}else if(Pn<=2047){if(gn+1>=bn)break;hn[gn++]=192|Pn>>6,hn[gn++]=128|Pn&63}else if(Pn<=65535){if(gn+2>=bn)break;hn[gn++]=224|Pn>>12,hn[gn++]=128|Pn>>6&63,hn[gn++]=128|Pn&63}else{if(gn+3>=bn)break;Pn>=2097152&&zn("Invalid Unicode code point 0x"+Pn.toString(16)+" encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF)."),hn[gn++]=240|Pn>>18,hn[gn++]=128|Pn>>12&63,hn[gn++]=128|Pn>>6&63,hn[gn++]=128|Pn&63}}return hn[gn]=0,gn-Sn}function gt(dn,hn,gn){return Rn(typeof gn=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),_t(dn,bt,hn,gn)}function Ct(dn){for(var hn=0,gn=0;gn<dn.length;++gn){var vn=dn.charCodeAt(gn);vn>=55296&&vn<=57343&&(vn=65536+((vn&1023)<<10)|dn.charCodeAt(++gn)&1023),vn<=127?++hn:vn<=2047?hn+=2:vn<=65535?hn+=3:hn+=4}return hn}var Ut=typeof TextDecoder!="undefined"?new TextDecoder("utf-16le"):void 0;function mr(dn){Rn(dn%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var hn=dn,gn=hn>>1;kt[gn];)++gn;if(hn=gn<<1,hn-dn>32&&Ut)return Ut.decode(bt.subarray(dn,hn));for(var vn=0,Sn="";;){var bn=kt[dn+vn*2>>1];if(bn==0)return Sn;++vn,Sn+=String.fromCharCode(bn)}}function Ht(dn,hn,gn){if(Rn(hn%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),Rn(typeof gn=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),gn===void 0&&(gn=2147483647),gn<2)return 0;gn-=2;for(var vn=hn,Sn=gn<dn.length*2?gn/2:dn.length,bn=0;bn<Sn;++bn){var Mn=dn.charCodeAt(bn);kt[hn>>1]=Mn,hn+=2}return kt[hn>>1]=0,hn-vn}function or(dn){return dn.length*2}function gs(dn){Rn(dn%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var hn=0,gn="";;){var vn=Xn[dn+hn*4>>2];if(vn==0)return gn;if(++hn,vn>=65536){var Sn=vn-65536;gn+=String.fromCharCode(55296|Sn>>10,56320|Sn&1023)}else gn+=String.fromCharCode(vn)}}function ys(dn,hn,gn){if(Rn(hn%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),Rn(typeof gn=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),gn===void 0&&(gn=2147483647),gn<4)return 0;for(var vn=hn,Sn=vn+gn-4,bn=0;bn<dn.length;++bn){var Mn=dn.charCodeAt(bn);if(Mn>=55296&&Mn<=57343){var Pn=dn.charCodeAt(++bn);Mn=65536+((Mn&1023)<<10)|Pn&1023}if(Xn[hn>>2]=Mn,hn+=4,hn+4>Sn)break}return Xn[hn>>2]=0,hn-vn}function vs(dn){for(var hn=0,gn=0;gn<dn.length;++gn){var vn=dn.charCodeAt(gn);vn>=55296&&vn<=57343&&++gn,hn+=4}return hn}function Fo(dn){var hn=Ct(dn)+1,gn=$t(hn);return gn&&_t(dn,St,gn,hn),gn}function xo(dn,hn){Rn(dn.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),St.set(dn,hn)}function Es(dn,hn,gn){for(var vn=0;vn<dn.length;++vn)Rn(dn.charCodeAt(vn)===dn.charCodeAt(vn)&255),St[hn++>>0]=dn.charCodeAt(vn);gn||(St[hn>>0]=0)}var Co=65536;function ws(dn,hn){return dn%hn>0&&(dn+=hn-dn%hn),dn}var Jt,St,bt,kt,xr,Xn,Ft,so,Cr;function No(dn){Jt=dn,sn.HEAP8=St=new Int8Array(dn),sn.HEAP16=kt=new Int16Array(dn),sn.HEAP32=Xn=new Int32Array(dn),sn.HEAPU8=bt=new Uint8Array(dn),sn.HEAPU16=xr=new Uint16Array(dn),sn.HEAPU32=Ft=new Uint32Array(dn),sn.HEAPF32=so=new Float32Array(dn),sn.HEAPF64=Cr=new Float64Array(dn)}var Ts=7643408,ar=2400528,Io=7643408,Nr=2400368;Rn(Ts%16===0,"stack must start aligned"),Rn(Io%16===0,"heap must start aligned");var uo=5242880;sn.TOTAL_STACK&&Rn(uo===sn.TOTAL_STACK,"the stack size can no longer be determined at runtime");var hr=sn.INITIAL_MEMORY||16777216;Object.getOwnPropertyDescriptor(sn,"INITIAL_MEMORY")||Object.defineProperty(sn,"INITIAL_MEMORY",{configurable:!0,get:function(){Fn("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY")}}),Rn(hr>=uo,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+hr+"! (TOTAL_STACK="+uo+")"),Rn(typeof Int32Array!="undefined"&&typeof Float64Array!="undefined"&&Int32Array.prototype.subarray!==void 0&&Int32Array.prototype.set!==void 0,"JS engine does not provide full typed array support"),sn.wasmMemory?et=sn.wasmMemory:et=new WebAssembly.Memory({initial:hr/Co}),et&&(Jt=et.buffer),hr=Jt.byteLength,Rn(hr%Co===0),No(Jt),Xn[Nr>>2]=Io;function $o(){Rn((ar&3)==0),Ft[(ar>>2)+1]=34821223,Ft[(ar>>2)+2]=2310721022,Xn[0]=1668509029}function _r(){var dn=Ft[(ar>>2)+1],hn=Ft[(ar>>2)+2];(dn!=34821223||hn!=2310721022)&&Fn("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+hn.toString(16)+" "+dn.toString(16)),Xn[0]!==1668509029&&Fn("Runtime error: The application has corrupted its heap memory area (address zero)!")}function Ss(dn){Fn("Stack overflow! Attempted to allocate "+dn+" bytes on the stack, but stack has only "+(ar-no()+dn)+" bytes available!")}(function(){var dn=new Int16Array(1),hn=new Int8Array(dn.buffer);if(dn[0]=25459,hn[0]!==115||hn[1]!==99)throw"Runtime error: expected the system to be little-endian!"})();function Ir(dn){for(;dn.length>0;){var hn=dn.shift();if(typeof hn=="function"){hn();continue}var gn=hn.func;typeof gn=="number"?hn.arg===void 0?sn.dynCall_v(gn):sn.dynCall_vi(gn,hn.arg):gn(hn.arg===void 0?null:hn.arg)}}var Uo=[],jo=[],bs=[],Ho=[],Jn=!1,Zn=!1;function Os(){if(sn.preRun)for(typeof sn.preRun=="function"&&(sn.preRun=[sn.preRun]);sn.preRun.length;)Ds(sn.preRun.shift());Ir(Uo)}function Ps(){_r(),Rn(!Jn),Jn=!0,wt.root=En.mount(wt,{},null),!sn.noFSInit&&!En.init.initialized&&En.init(),Ir(jo)}function Ms(){_r(),En.ignorePermissions=!1,Ir(bs)}function As(){if(_r(),sn.postRun)for(typeof sn.postRun=="function"&&(sn.postRun=[sn.postRun]);sn.postRun.length;)Rs(sn.postRun.shift());Ir(Ho)}function Ds(dn){Uo.unshift(dn)}function Rs(dn){Ho.unshift(dn)}Rn(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),Rn(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),Rn(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),Rn(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var $r=Math.abs,Ur=Math.ceil,jr=Math.floor,Hr=Math.min,Zt=0,er=null,gr=null,ir={};function ks(dn){for(var hn=dn;;){if(!ir[dn])return dn;dn=hn+Math.random()}}function lo(dn){Zt++,sn.monitorRunDependencies&&sn.monitorRunDependencies(Zt),dn?(Rn(!ir[dn]),ir[dn]=1,er===null&&typeof setInterval!="undefined"&&(er=setInterval(function(){if(vt){clearInterval(er),er=null;return}var hn=!1;for(var gn in ir)hn||(hn=!0,kn("still waiting on run dependencies:")),kn("dependency: "+gn);hn&&kn("(end of list)")},1e4))):kn("warning: run dependency added without ID")}function Lr(dn){if(Zt--,sn.monitorRunDependencies&&sn.monitorRunDependencies(Zt),dn?(Rn(ir[dn]),delete ir[dn]):kn("warning: run dependency removed without ID"),Zt==0&&(er!==null&&(clearInterval(er),er=null),gr)){var hn=gr;gr=null,hn()}}sn.preloadedImages={},sn.preloadedAudios={};function Fn(dn){sn.onAbort&&sn.onAbort(dn),dn+="",qn(dn),kn(dn),vt=!0;var hn="abort("+dn+") at "+Wo();throw dn=hn,new WebAssembly.RuntimeError(dn)}var Lo="data:application/octet-stream;base64,";function Xo(dn){return String.prototype.startsWith?dn.startsWith(Lo):dn.indexOf(Lo)===0}var Bt="libfaust-wasm.wasm";Xo(Bt)||(Bt=Nn(Bt));function zo(){try{if(Yn)return new Uint8Array(Yn);if(In)return In(Bt);throw"both async and sync fetching of the wasm failed"}catch(dn){Fn(dn)}}function Fs(){return!Yn&&(yn||Tn)&&typeof fetch=="function"?fetch(Bt,{credentials:"same-origin"}).then(function(dn){if(!dn.ok)throw"failed to load wasm binary file at '"+Bt+"'";return dn.arrayBuffer()}).catch(function(){return zo()}):new Promise(function(dn,hn){dn(zo())})}function xs(){var dn={env:as,wasi_snapshot_preview1:as};function hn(Pn,Cn){var jn=Pn.exports;sn.asm=jn,Lr("wasm-instantiate")}lo("wasm-instantiate");var gn=sn;function vn(Pn){Rn(sn===gn,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),gn=null,hn(Pn.instance)}function Sn(Pn){return Fs().then(function(Cn){return WebAssembly.instantiate(Cn,dn)}).then(Pn,function(Cn){kn("failed to asynchronously prepare wasm: "+Cn),Fn(Cn)})}function bn(){if(!Yn&&typeof WebAssembly.instantiateStreaming=="function"&&!Xo(Bt)&&typeof fetch=="function")fetch(Bt,{credentials:"same-origin"}).then(function(Pn){var Cn=WebAssembly.instantiateStreaming(Pn,dn);return Cn.then(vn,function(jn){kn("wasm streaming compile failed: "+jn),kn("falling back to ArrayBuffer instantiation"),Sn(vn)})});else return Sn(vn)}if(sn.instantiateWasm)try{var Mn=sn.instantiateWasm(dn,hn);return Mn}catch(Pn){return kn("Module.instantiateWasm callback failed with error: "+Pn),!1}return bn(),{}}var Tt,Nt,Cs={299792:function(dn){var hn="";try{var gn=new XMLHttpRequest;gn.open("GET",sn.UTF8ToString(dn),!1),gn.send(),gn.status==200&&(hn=gn.responseText)}catch(vn){console.log(vn)}return fr(Pr(hn),"i8",Fr)},420260:function(dn){faust_module.faust.wasm_instance[dn]=null},420588:function(dn){return faust_module._malloc(dn)},420625:function(dn){faust_module._free(dn)},420653:function(dn,hn){return faust_module.faust.wasm_instance[dn].exports.getNumInputs(hn)},420730:function(dn,hn){return faust_module.faust.wasm_instance[dn].exports.getNumOutputs(hn)},420805:function(dn,hn){return faust_module.faust.wasm_instance[dn].exports.getSampleRate(hn)},420880:function(dn,hn,gn){faust_module.faust.wasm_instance[dn].exports.init(hn,gn)},420947:function(dn,hn,gn){faust_module.faust.wasm_instance[dn].exports.instanceInit(hn,gn)},421018:function(dn,hn,gn){faust_module.faust.wasm_instance[dn].exports.instanceConstants(hn,gn)},421094:function(dn,hn){faust_module.faust.wasm_instance[dn].exports.instanceResetUserInterface(hn)},421175:function(dn,hn){faust_module.faust.wasm_instance[dn].exports.instanceClear(hn)},421243:function(dn,hn,gn,vn,Sn){faust_module.faust.wasm_instance[dn].exports.compute(hn,gn,vn,Sn)}};function Ns(dn,hn,gn){var vn=Jr(hn,gn);return Cs[dn].apply(null,vn)}function Is(){faust_module.faust=faust_module.faust||{},faust_module.faust.memory=faust_module.faust.memory||et}jo.push({func:function(){Hl()}});function $s(dn){return zn("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"),dn}function Bo(dn){var hn=/\b_Z[\w\d_]+/g;return dn.replace(hn,function(gn){var vn=$s(gn);return gn===vn?gn:vn+" ["+gn+"]"})}function Us(){var dn=new Error;if(!dn.stack){try{throw new Error}catch(hn){dn=hn}if(!dn.stack)return"(no stack trace available)"}return dn.stack.toString()}function Wo(){var dn=Us();return sn.extraStackTrace&&(dn+=`
`+sn.extraStackTrace()),Bo(dn)}function js(dn){return $t(dn)}function Hs(dn,hn,gn){throw dn+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}function Ls(){Fn("stack overflow")}function yr(dn){return sn.___errno_location?Xn[sn.___errno_location()>>2]=dn:kn("failed to set errno from JS"),dn}function Xs(dn,hn){return yr(63),-1}var mt={splitPath:function(dn){var hn=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return hn.exec(dn).slice(1)},normalizeArray:function(dn,hn){for(var gn=0,vn=dn.length-1;vn>=0;vn--){var Sn=dn[vn];Sn==="."?dn.splice(vn,1):Sn===".."?(dn.splice(vn,1),gn++):gn&&(dn.splice(vn,1),gn--)}if(hn)for(;gn;gn--)dn.unshift("..");return dn},normalize:function(dn){var hn=dn.charAt(0)==="/",gn=dn.substr(-1)==="/";return dn=mt.normalizeArray(dn.split("/").filter(function(vn){return!!vn}),!hn).join("/"),!dn&&!hn&&(dn="."),dn&&gn&&(dn+="/"),(hn?"/":"")+dn},dirname:function(dn){var hn=mt.splitPath(dn),gn=hn[0],vn=hn[1];return!gn&&!vn?".":(vn&&(vn=vn.substr(0,vn.length-1)),gn+vn)},basename:function(dn){if(dn==="/")return"/";var hn=dn.lastIndexOf("/");return hn===-1?dn:dn.substr(hn+1)},extname:function(dn){return mt.splitPath(dn)[3]},join:function(){var dn=Array.prototype.slice.call(arguments,0);return mt.normalize(dn.join("/"))},join2:function(dn,hn){return mt.normalize(dn+"/"+hn)}},jt={resolve:function(){for(var dn="",hn=!1,gn=arguments.length-1;gn>=-1&&!hn;gn--){var vn=gn>=0?arguments[gn]:En.cwd();if(typeof vn!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!vn)return"";dn=vn+"/"+dn,hn=vn.charAt(0)==="/"}return dn=mt.normalizeArray(dn.split("/").filter(function(Sn){return!!Sn}),!hn).join("/"),(hn?"/":"")+dn||"."},relative:function(dn,hn){dn=jt.resolve(dn).substr(1),hn=jt.resolve(hn).substr(1);function gn(jn){for(var Hn=0;Hn<jn.length&&jn[Hn]==="";Hn++);for(var Qn=jn.length-1;Qn>=0&&jn[Qn]==="";Qn--);return Hn>Qn?[]:jn.slice(Hn,Qn-Hn+1)}for(var vn=gn(dn.split("/")),Sn=gn(hn.split("/")),bn=Math.min(vn.length,Sn.length),Mn=bn,Pn=0;Pn<bn;Pn++)if(vn[Pn]!==Sn[Pn]){Mn=Pn;break}for(var Cn=[],Pn=Mn;Pn<vn.length;Pn++)Cn.push("..");return Cn=Cn.concat(Sn.slice(Mn)),Cn.join("/")}},nr={ttys:[],init:function(){},shutdown:function(){},register:function(dn,hn){nr.ttys[dn]={input:[],output:[],ops:hn},En.registerDevice(dn,nr.stream_ops)},stream_ops:{open:function(dn){var hn=nr.ttys[dn.node.rdev];if(!hn)throw new En.ErrnoError(43);dn.tty=hn,dn.seekable=!1},close:function(dn){dn.tty.ops.flush(dn.tty)},flush:function(dn){dn.tty.ops.flush(dn.tty)},read:function(dn,hn,gn,vn,Sn){if(!dn.tty||!dn.tty.ops.get_char)throw new En.ErrnoError(60);for(var bn=0,Mn=0;Mn<vn;Mn++){var Pn;try{Pn=dn.tty.ops.get_char(dn.tty)}catch{throw new En.ErrnoError(29)}if(Pn===void 0&&bn===0)throw new En.ErrnoError(6);if(Pn==null)break;bn++,hn[gn+Mn]=Pn}return bn&&(dn.node.timestamp=Date.now()),bn},write:function(dn,hn,gn,vn,Sn){if(!dn.tty||!dn.tty.ops.put_char)throw new En.ErrnoError(60);try{for(var bn=0;bn<vn;bn++)dn.tty.ops.put_char(dn.tty,hn[gn+bn])}catch{throw new En.ErrnoError(29)}return vn&&(dn.node.timestamp=Date.now()),bn}},default_tty_ops:{get_char:function(dn){if(!dn.input.length){var hn=null;if(wn){var gn=256,vn=Buffer.alloc?Buffer.alloc(gn):new Buffer(gn),Sn=0;try{Sn=Un.readSync(process.stdin.fd,vn,0,gn,null)}catch(bn){if(bn.toString().indexOf("EOF")!=-1)Sn=0;else throw bn}Sn>0?hn=vn.slice(0,Sn).toString("utf-8"):hn=null}else typeof window!="undefined"&&typeof window.prompt=="function"?(hn=window.prompt("Input: "),hn!==null&&(hn+=`
`)):typeof readline=="function"&&(hn=readline(),hn!==null&&(hn+=`
`));if(!hn)return null;dn.input=Pr(hn,!0)}return dn.input.shift()},put_char:function(dn,hn){hn===null||hn===10?(qn(lt(dn.output,0)),dn.output=[]):hn!=0&&dn.output.push(hn)},flush:function(dn){dn.output&&dn.output.length>0&&(qn(lt(dn.output,0)),dn.output=[])}},default_tty1_ops:{put_char:function(dn,hn){hn===null||hn===10?(kn(lt(dn.output,0)),dn.output=[]):hn!=0&&dn.output.push(hn)},flush:function(dn){dn.output&&dn.output.length>0&&(kn(lt(dn.output,0)),dn.output=[])}}},pt={ops_table:null,mount:function(dn){return pt.createNode(null,"/",16895,0)},createNode:function(dn,hn,gn,vn){if(En.isBlkdev(gn)||En.isFIFO(gn))throw new En.ErrnoError(63);pt.ops_table||(pt.ops_table={dir:{node:{getattr:pt.node_ops.getattr,setattr:pt.node_ops.setattr,lookup:pt.node_ops.lookup,mknod:pt.node_ops.mknod,rename:pt.node_ops.rename,unlink:pt.node_ops.unlink,rmdir:pt.node_ops.rmdir,readdir:pt.node_ops.readdir,symlink:pt.node_ops.symlink},stream:{llseek:pt.stream_ops.llseek}},file:{node:{getattr:pt.node_ops.getattr,setattr:pt.node_ops.setattr},stream:{llseek:pt.stream_ops.llseek,read:pt.stream_ops.read,write:pt.stream_ops.write,allocate:pt.stream_ops.allocate,mmap:pt.stream_ops.mmap,msync:pt.stream_ops.msync}},link:{node:{getattr:pt.node_ops.getattr,setattr:pt.node_ops.setattr,readlink:pt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:pt.node_ops.getattr,setattr:pt.node_ops.setattr},stream:En.chrdev_stream_ops}});var Sn=En.createNode(dn,hn,gn,vn);return En.isDir(Sn.mode)?(Sn.node_ops=pt.ops_table.dir.node,Sn.stream_ops=pt.ops_table.dir.stream,Sn.contents={}):En.isFile(Sn.mode)?(Sn.node_ops=pt.ops_table.file.node,Sn.stream_ops=pt.ops_table.file.stream,Sn.usedBytes=0,Sn.contents=null):En.isLink(Sn.mode)?(Sn.node_ops=pt.ops_table.link.node,Sn.stream_ops=pt.ops_table.link.stream):En.isChrdev(Sn.mode)&&(Sn.node_ops=pt.ops_table.chrdev.node,Sn.stream_ops=pt.ops_table.chrdev.stream),Sn.timestamp=Date.now(),dn&&(dn.contents[hn]=Sn),Sn},getFileDataAsRegularArray:function(dn){if(dn.contents&&dn.contents.subarray){for(var hn=[],gn=0;gn<dn.usedBytes;++gn)hn.push(dn.contents[gn]);return hn}return dn.contents},getFileDataAsTypedArray:function(dn){return dn.contents?dn.contents.subarray?dn.contents.subarray(0,dn.usedBytes):new Uint8Array(dn.contents):new Uint8Array(0)},expandFileStorage:function(dn,hn){var gn=dn.contents?dn.contents.length:0;if(!(gn>=hn)){var vn=1024*1024;hn=Math.max(hn,gn*(gn<vn?2:1.125)|0),gn!=0&&(hn=Math.max(hn,256));var Sn=dn.contents;dn.contents=new Uint8Array(hn),dn.usedBytes>0&&dn.contents.set(Sn.subarray(0,dn.usedBytes),0)}},resizeFileStorage:function(dn,hn){if(dn.usedBytes!=hn){if(hn==0){dn.contents=null,dn.usedBytes=0;return}if(!dn.contents||dn.contents.subarray){var gn=dn.contents;dn.contents=new Uint8Array(hn),gn&&dn.contents.set(gn.subarray(0,Math.min(hn,dn.usedBytes))),dn.usedBytes=hn;return}if(dn.contents||(dn.contents=[]),dn.contents.length>hn)dn.contents.length=hn;else for(;dn.contents.length<hn;)dn.contents.push(0);dn.usedBytes=hn}},node_ops:{getattr:function(dn){var hn={};return hn.dev=En.isChrdev(dn.mode)?dn.id:1,hn.ino=dn.id,hn.mode=dn.mode,hn.nlink=1,hn.uid=0,hn.gid=0,hn.rdev=dn.rdev,En.isDir(dn.mode)?hn.size=4096:En.isFile(dn.mode)?hn.size=dn.usedBytes:En.isLink(dn.mode)?hn.size=dn.link.length:hn.size=0,hn.atime=new Date(dn.timestamp),hn.mtime=new Date(dn.timestamp),hn.ctime=new Date(dn.timestamp),hn.blksize=4096,hn.blocks=Math.ceil(hn.size/hn.blksize),hn},setattr:function(dn,hn){hn.mode!==void 0&&(dn.mode=hn.mode),hn.timestamp!==void 0&&(dn.timestamp=hn.timestamp),hn.size!==void 0&&pt.resizeFileStorage(dn,hn.size)},lookup:function(dn,hn){throw En.genericErrors[44]},mknod:function(dn,hn,gn,vn){return pt.createNode(dn,hn,gn,vn)},rename:function(dn,hn,gn){if(En.isDir(dn.mode)){var vn;try{vn=En.lookupNode(hn,gn)}catch{}if(vn)for(var Sn in vn.contents)throw new En.ErrnoError(55)}delete dn.parent.contents[dn.name],dn.name=gn,hn.contents[gn]=dn,dn.parent=hn},unlink:function(dn,hn){delete dn.contents[hn]},rmdir:function(dn,hn){var gn=En.lookupNode(dn,hn);for(var vn in gn.contents)throw new En.ErrnoError(55);delete dn.contents[hn]},readdir:function(dn){var hn=[".",".."];for(var gn in dn.contents)!dn.contents.hasOwnProperty(gn)||hn.push(gn);return hn},symlink:function(dn,hn,gn){var vn=pt.createNode(dn,hn,41471,0);return vn.link=gn,vn},readlink:function(dn){if(!En.isLink(dn.mode))throw new En.ErrnoError(28);return dn.link}},stream_ops:{read:function(dn,hn,gn,vn,Sn){var bn=dn.node.contents;if(Sn>=dn.node.usedBytes)return 0;var Mn=Math.min(dn.node.usedBytes-Sn,vn);if(Rn(Mn>=0),Mn>8&&bn.subarray)hn.set(bn.subarray(Sn,Sn+Mn),gn);else for(var Pn=0;Pn<Mn;Pn++)hn[gn+Pn]=bn[Sn+Pn];return Mn},write:function(dn,hn,gn,vn,Sn,bn){if(Rn(!(hn instanceof ArrayBuffer)),hn.buffer===St.buffer&&(bn&&zn("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)"),bn=!1),!vn)return 0;var Mn=dn.node;if(Mn.timestamp=Date.now(),hn.subarray&&(!Mn.contents||Mn.contents.subarray)){if(bn)return Rn(Sn===0,"canOwn must imply no weird position inside the file"),Mn.contents=hn.subarray(gn,gn+vn),Mn.usedBytes=vn,vn;if(Mn.usedBytes===0&&Sn===0)return Mn.contents=hn.slice(gn,gn+vn),Mn.usedBytes=vn,vn;if(Sn+vn<=Mn.usedBytes)return Mn.contents.set(hn.subarray(gn,gn+vn),Sn),vn}if(pt.expandFileStorage(Mn,Sn+vn),Mn.contents.subarray&&hn.subarray)Mn.contents.set(hn.subarray(gn,gn+vn),Sn);else for(var Pn=0;Pn<vn;Pn++)Mn.contents[Sn+Pn]=hn[gn+Pn];return Mn.usedBytes=Math.max(Mn.usedBytes,Sn+vn),vn},llseek:function(dn,hn,gn){var vn=hn;if(gn===1?vn+=dn.position:gn===2&&En.isFile(dn.node.mode)&&(vn+=dn.node.usedBytes),vn<0)throw new En.ErrnoError(28);return vn},allocate:function(dn,hn,gn){pt.expandFileStorage(dn.node,hn+gn),dn.node.usedBytes=Math.max(dn.node.usedBytes,hn+gn)},mmap:function(dn,hn,gn,vn,Sn,bn,Mn){if(Rn(!(hn instanceof ArrayBuffer)),!En.isFile(dn.node.mode))throw new En.ErrnoError(43);var Pn,Cn,jn=dn.node.contents;if(!(Mn&2)&&jn.buffer===hn.buffer)Cn=!1,Pn=jn.byteOffset;else{(Sn>0||Sn+vn<jn.length)&&(jn.subarray?jn=jn.subarray(Sn,Sn+vn):jn=Array.prototype.slice.call(jn,Sn,Sn+vn)),Cn=!0;var Hn=hn.buffer==St.buffer;if(Pn=$t(vn),!Pn)throw new En.ErrnoError(48);(Hn?St:hn).set(jn,Pn)}return{ptr:Pn,allocated:Cn}},msync:function(dn,hn,gn,vn,Sn){if(!En.isFile(dn.node.mode))throw new En.ErrnoError(43);return Sn&2||pt.stream_ops.write(dn,hn,0,vn,gn,!1),0}}},zs={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},Et={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},En={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(dn){if(!(dn instanceof En.ErrnoError))throw dn+" : "+Wo();return yr(dn.errno)},lookupPath:function(dn,hn){if(dn=jt.resolve(En.cwd(),dn),hn=hn||{},!dn)return{path:"",node:null};var gn={follow_mount:!0,recurse_count:0};for(var vn in gn)hn[vn]===void 0&&(hn[vn]=gn[vn]);if(hn.recurse_count>8)throw new En.ErrnoError(32);for(var Sn=mt.normalizeArray(dn.split("/").filter(function(Bn){return!!Bn}),!1),bn=En.root,Mn="/",Pn=0;Pn<Sn.length;Pn++){var Cn=Pn===Sn.length-1;if(Cn&&hn.parent)break;if(bn=En.lookupNode(bn,Sn[Pn]),Mn=mt.join2(Mn,Sn[Pn]),En.isMountpoint(bn)&&(!Cn||Cn&&hn.follow_mount)&&(bn=bn.mounted.root),!Cn||hn.follow)for(var jn=0;En.isLink(bn.mode);){var Hn=En.readlink(Mn);Mn=jt.resolve(mt.dirname(Mn),Hn);var Qn=En.lookupPath(Mn,{recurse_count:hn.recurse_count});if(bn=Qn.node,jn++>40)throw new En.ErrnoError(32)}}return{path:Mn,node:bn}},getPath:function(dn){for(var hn;;){if(En.isRoot(dn)){var gn=dn.mount.mountpoint;return hn?gn[gn.length-1]!=="/"?gn+"/"+hn:gn+hn:gn}hn=hn?dn.name+"/"+hn:dn.name,dn=dn.parent}},hashName:function(dn,hn){for(var gn=0,vn=0;vn<hn.length;vn++)gn=(gn<<5)-gn+hn.charCodeAt(vn)|0;return(dn+gn>>>0)%En.nameTable.length},hashAddNode:function(dn){var hn=En.hashName(dn.parent.id,dn.name);dn.name_next=En.nameTable[hn],En.nameTable[hn]=dn},hashRemoveNode:function(dn){var hn=En.hashName(dn.parent.id,dn.name);if(En.nameTable[hn]===dn)En.nameTable[hn]=dn.name_next;else for(var gn=En.nameTable[hn];gn;){if(gn.name_next===dn){gn.name_next=dn.name_next;break}gn=gn.name_next}},lookupNode:function(dn,hn){var gn=En.mayLookup(dn);if(gn)throw new En.ErrnoError(gn,dn);for(var vn=En.hashName(dn.id,hn),Sn=En.nameTable[vn];Sn;Sn=Sn.name_next){var bn=Sn.name;if(Sn.parent.id===dn.id&&bn===hn)return Sn}return En.lookup(dn,hn)},createNode:function(dn,hn,gn,vn){var Sn=new En.FSNode(dn,hn,gn,vn);return En.hashAddNode(Sn),Sn},destroyNode:function(dn){En.hashRemoveNode(dn)},isRoot:function(dn){return dn===dn.parent},isMountpoint:function(dn){return!!dn.mounted},isFile:function(dn){return(dn&61440)===32768},isDir:function(dn){return(dn&61440)===16384},isLink:function(dn){return(dn&61440)===40960},isChrdev:function(dn){return(dn&61440)===8192},isBlkdev:function(dn){return(dn&61440)===24576},isFIFO:function(dn){return(dn&61440)===4096},isSocket:function(dn){return(dn&49152)===49152},flagModes:{r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(dn){var hn=En.flagModes[dn];if(typeof hn=="undefined")throw new Error("Unknown file open mode: "+dn);return hn},flagsToPermissionString:function(dn){var hn=["r","w","rw"][dn&3];return dn&512&&(hn+="w"),hn},nodePermissions:function(dn,hn){return En.ignorePermissions?0:hn.indexOf("r")!==-1&&!(dn.mode&292)||hn.indexOf("w")!==-1&&!(dn.mode&146)||hn.indexOf("x")!==-1&&!(dn.mode&73)?2:0},mayLookup:function(dn){var hn=En.nodePermissions(dn,"x");return hn||(dn.node_ops.lookup?0:2)},mayCreate:function(dn,hn){try{var gn=En.lookupNode(dn,hn);return 20}catch{}return En.nodePermissions(dn,"wx")},mayDelete:function(dn,hn,gn){var vn;try{vn=En.lookupNode(dn,hn)}catch(bn){return bn.errno}var Sn=En.nodePermissions(dn,"wx");if(Sn)return Sn;if(gn){if(!En.isDir(vn.mode))return 54;if(En.isRoot(vn)||En.getPath(vn)===En.cwd())return 10}else if(En.isDir(vn.mode))return 31;return 0},mayOpen:function(dn,hn){return dn?En.isLink(dn.mode)?32:En.isDir(dn.mode)&&(En.flagsToPermissionString(hn)!=="r"||hn&512)?31:En.nodePermissions(dn,En.flagsToPermissionString(hn)):44},MAX_OPEN_FDS:4096,nextfd:function(dn,hn){dn=dn||0,hn=hn||En.MAX_OPEN_FDS;for(var gn=dn;gn<=hn;gn++)if(!En.streams[gn])return gn;throw new En.ErrnoError(33)},getStream:function(dn){return En.streams[dn]},createStream:function(dn,hn,gn){En.FSStream||(En.FSStream=function(){},En.FSStream.prototype={object:{get:function(){return this.node},set:function(Mn){this.node=Mn}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}});var vn=new En.FSStream;for(var Sn in dn)vn[Sn]=dn[Sn];dn=vn;var bn=En.nextfd(hn,gn);return dn.fd=bn,En.streams[bn]=dn,dn},closeStream:function(dn){En.streams[dn]=null},chrdev_stream_ops:{open:function(dn){var hn=En.getDevice(dn.node.rdev);dn.stream_ops=hn.stream_ops,dn.stream_ops.open&&dn.stream_ops.open(dn)},llseek:function(){throw new En.ErrnoError(70)}},major:function(dn){return dn>>8},minor:function(dn){return dn&255},makedev:function(dn,hn){return dn<<8|hn},registerDevice:function(dn,hn){En.devices[dn]={stream_ops:hn}},getDevice:function(dn){return En.devices[dn]},getMounts:function(dn){for(var hn=[],gn=[dn];gn.length;){var vn=gn.pop();hn.push(vn),gn.push.apply(gn,vn.mounts)}return hn},syncfs:function(dn,hn){typeof dn=="function"&&(hn=dn,dn=!1),En.syncFSRequests++,En.syncFSRequests>1&&kn("warning: "+En.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var gn=En.getMounts(En.root.mount),vn=0;function Sn(Mn){return Rn(En.syncFSRequests>0),En.syncFSRequests--,hn(Mn)}function bn(Mn){if(Mn)return bn.errored?void 0:(bn.errored=!0,Sn(Mn));++vn>=gn.length&&Sn(null)}gn.forEach(function(Mn){if(!Mn.type.syncfs)return bn(null);Mn.type.syncfs(Mn,dn,bn)})},mount:function(dn,hn,gn){if(typeof dn=="string")throw dn;var vn=gn==="/",Sn=!gn,bn;if(vn&&En.root)throw new En.ErrnoError(10);if(!vn&&!Sn){var Mn=En.lookupPath(gn,{follow_mount:!1});if(gn=Mn.path,bn=Mn.node,En.isMountpoint(bn))throw new En.ErrnoError(10);if(!En.isDir(bn.mode))throw new En.ErrnoError(54)}var Pn={type:dn,opts:hn,mountpoint:gn,mounts:[]},Cn=dn.mount(Pn);return Cn.mount=Pn,Pn.root=Cn,vn?En.root=Cn:bn&&(bn.mounted=Pn,bn.mount&&bn.mount.mounts.push(Pn)),Cn},unmount:function(dn){var hn=En.lookupPath(dn,{follow_mount:!1});if(!En.isMountpoint(hn.node))throw new En.ErrnoError(28);var gn=hn.node,vn=gn.mounted,Sn=En.getMounts(vn);Object.keys(En.nameTable).forEach(function(Mn){for(var Pn=En.nameTable[Mn];Pn;){var Cn=Pn.name_next;Sn.indexOf(Pn.mount)!==-1&&En.destroyNode(Pn),Pn=Cn}}),gn.mounted=null;var bn=gn.mount.mounts.indexOf(vn);Rn(bn!==-1),gn.mount.mounts.splice(bn,1)},lookup:function(dn,hn){return dn.node_ops.lookup(dn,hn)},mknod:function(dn,hn,gn){var vn=En.lookupPath(dn,{parent:!0}),Sn=vn.node,bn=mt.basename(dn);if(!bn||bn==="."||bn==="..")throw new En.ErrnoError(28);var Mn=En.mayCreate(Sn,bn);if(Mn)throw new En.ErrnoError(Mn);if(!Sn.node_ops.mknod)throw new En.ErrnoError(63);return Sn.node_ops.mknod(Sn,bn,hn,gn)},create:function(dn,hn){return hn=hn!==void 0?hn:438,hn&=4095,hn|=32768,En.mknod(dn,hn,0)},mkdir:function(dn,hn){return hn=hn!==void 0?hn:511,hn&=1023,hn|=16384,En.mknod(dn,hn,0)},mkdirTree:function(dn,hn){for(var gn=dn.split("/"),vn="",Sn=0;Sn<gn.length;++Sn)if(!!gn[Sn]){vn+="/"+gn[Sn];try{En.mkdir(vn,hn)}catch(bn){if(bn.errno!=20)throw bn}}},mkdev:function(dn,hn,gn){return typeof gn=="undefined"&&(gn=hn,hn=438),hn|=8192,En.mknod(dn,hn,gn)},symlink:function(dn,hn){if(!jt.resolve(dn))throw new En.ErrnoError(44);var gn=En.lookupPath(hn,{parent:!0}),vn=gn.node;if(!vn)throw new En.ErrnoError(44);var Sn=mt.basename(hn),bn=En.mayCreate(vn,Sn);if(bn)throw new En.ErrnoError(bn);if(!vn.node_ops.symlink)throw new En.ErrnoError(63);return vn.node_ops.symlink(vn,Sn,dn)},rename:function(dn,hn){var gn=mt.dirname(dn),vn=mt.dirname(hn),Sn=mt.basename(dn),bn=mt.basename(hn),Mn,Pn,Cn;try{Mn=En.lookupPath(dn,{parent:!0}),Pn=Mn.node,Mn=En.lookupPath(hn,{parent:!0}),Cn=Mn.node}catch{throw new En.ErrnoError(10)}if(!Pn||!Cn)throw new En.ErrnoError(44);if(Pn.mount!==Cn.mount)throw new En.ErrnoError(75);var jn=En.lookupNode(Pn,Sn),Hn=jt.relative(dn,vn);if(Hn.charAt(0)!==".")throw new En.ErrnoError(28);if(Hn=jt.relative(hn,gn),Hn.charAt(0)!==".")throw new En.ErrnoError(55);var Qn;try{Qn=En.lookupNode(Cn,bn)}catch{}if(jn!==Qn){var Bn=En.isDir(jn.mode),Wn=En.mayDelete(Pn,Sn,Bn);if(Wn)throw new En.ErrnoError(Wn);if(Wn=Qn?En.mayDelete(Cn,bn,Bn):En.mayCreate(Cn,bn),Wn)throw new En.ErrnoError(Wn);if(!Pn.node_ops.rename)throw new En.ErrnoError(63);if(En.isMountpoint(jn)||Qn&&En.isMountpoint(Qn))throw new En.ErrnoError(10);if(Cn!==Pn&&(Wn=En.nodePermissions(Pn,"w"),Wn))throw new En.ErrnoError(Wn);try{En.trackingDelegate.willMovePath&&En.trackingDelegate.willMovePath(dn,hn)}catch(Gn){kn("FS.trackingDelegate['willMovePath']('"+dn+"', '"+hn+"') threw an exception: "+Gn.message)}En.hashRemoveNode(jn);try{Pn.node_ops.rename(jn,Cn,bn)}catch(Gn){throw Gn}finally{En.hashAddNode(jn)}try{En.trackingDelegate.onMovePath&&En.trackingDelegate.onMovePath(dn,hn)}catch(Gn){kn("FS.trackingDelegate['onMovePath']('"+dn+"', '"+hn+"') threw an exception: "+Gn.message)}}},rmdir:function(dn){var hn=En.lookupPath(dn,{parent:!0}),gn=hn.node,vn=mt.basename(dn),Sn=En.lookupNode(gn,vn),bn=En.mayDelete(gn,vn,!0);if(bn)throw new En.ErrnoError(bn);if(!gn.node_ops.rmdir)throw new En.ErrnoError(63);if(En.isMountpoint(Sn))throw new En.ErrnoError(10);try{En.trackingDelegate.willDeletePath&&En.trackingDelegate.willDeletePath(dn)}catch(Mn){kn("FS.trackingDelegate['willDeletePath']('"+dn+"') threw an exception: "+Mn.message)}gn.node_ops.rmdir(gn,vn),En.destroyNode(Sn);try{En.trackingDelegate.onDeletePath&&En.trackingDelegate.onDeletePath(dn)}catch(Mn){kn("FS.trackingDelegate['onDeletePath']('"+dn+"') threw an exception: "+Mn.message)}},readdir:function(dn){var hn=En.lookupPath(dn,{follow:!0}),gn=hn.node;if(!gn.node_ops.readdir)throw new En.ErrnoError(54);return gn.node_ops.readdir(gn)},unlink:function(dn){var hn=En.lookupPath(dn,{parent:!0}),gn=hn.node,vn=mt.basename(dn),Sn=En.lookupNode(gn,vn),bn=En.mayDelete(gn,vn,!1);if(bn)throw new En.ErrnoError(bn);if(!gn.node_ops.unlink)throw new En.ErrnoError(63);if(En.isMountpoint(Sn))throw new En.ErrnoError(10);try{En.trackingDelegate.willDeletePath&&En.trackingDelegate.willDeletePath(dn)}catch(Mn){kn("FS.trackingDelegate['willDeletePath']('"+dn+"') threw an exception: "+Mn.message)}gn.node_ops.unlink(gn,vn),En.destroyNode(Sn);try{En.trackingDelegate.onDeletePath&&En.trackingDelegate.onDeletePath(dn)}catch(Mn){kn("FS.trackingDelegate['onDeletePath']('"+dn+"') threw an exception: "+Mn.message)}},readlink:function(dn){var hn=En.lookupPath(dn),gn=hn.node;if(!gn)throw new En.ErrnoError(44);if(!gn.node_ops.readlink)throw new En.ErrnoError(28);return jt.resolve(En.getPath(gn.parent),gn.node_ops.readlink(gn))},stat:function(dn,hn){var gn=En.lookupPath(dn,{follow:!hn}),vn=gn.node;if(!vn)throw new En.ErrnoError(44);if(!vn.node_ops.getattr)throw new En.ErrnoError(63);return vn.node_ops.getattr(vn)},lstat:function(dn){return En.stat(dn,!0)},chmod:function(dn,hn,gn){var vn;if(typeof dn=="string"){var Sn=En.lookupPath(dn,{follow:!gn});vn=Sn.node}else vn=dn;if(!vn.node_ops.setattr)throw new En.ErrnoError(63);vn.node_ops.setattr(vn,{mode:hn&4095|vn.mode&-4096,timestamp:Date.now()})},lchmod:function(dn,hn){En.chmod(dn,hn,!0)},fchmod:function(dn,hn){var gn=En.getStream(dn);if(!gn)throw new En.ErrnoError(8);En.chmod(gn.node,hn)},chown:function(dn,hn,gn,vn){var Sn;if(typeof dn=="string"){var bn=En.lookupPath(dn,{follow:!vn});Sn=bn.node}else Sn=dn;if(!Sn.node_ops.setattr)throw new En.ErrnoError(63);Sn.node_ops.setattr(Sn,{timestamp:Date.now()})},lchown:function(dn,hn,gn){En.chown(dn,hn,gn,!0)},fchown:function(dn,hn,gn){var vn=En.getStream(dn);if(!vn)throw new En.ErrnoError(8);En.chown(vn.node,hn,gn)},truncate:function(dn,hn){if(hn<0)throw new En.ErrnoError(28);var gn;if(typeof dn=="string"){var vn=En.lookupPath(dn,{follow:!0});gn=vn.node}else gn=dn;if(!gn.node_ops.setattr)throw new En.ErrnoError(63);if(En.isDir(gn.mode))throw new En.ErrnoError(31);if(!En.isFile(gn.mode))throw new En.ErrnoError(28);var Sn=En.nodePermissions(gn,"w");if(Sn)throw new En.ErrnoError(Sn);gn.node_ops.setattr(gn,{size:hn,timestamp:Date.now()})},ftruncate:function(dn,hn){var gn=En.getStream(dn);if(!gn)throw new En.ErrnoError(8);if((gn.flags&2097155)===0)throw new En.ErrnoError(28);En.truncate(gn.node,hn)},utime:function(dn,hn,gn){var vn=En.lookupPath(dn,{follow:!0}),Sn=vn.node;Sn.node_ops.setattr(Sn,{timestamp:Math.max(hn,gn)})},open:function(dn,hn,gn,vn,Sn){if(dn==="")throw new En.ErrnoError(44);hn=typeof hn=="string"?En.modeStringToFlags(hn):hn,gn=typeof gn=="undefined"?438:gn,hn&64?gn=gn&4095|32768:gn=0;var bn;if(typeof dn=="object")bn=dn;else{dn=mt.normalize(dn);try{var Mn=En.lookupPath(dn,{follow:!(hn&131072)});bn=Mn.node}catch{}}var Pn=!1;if(hn&64)if(bn){if(hn&128)throw new En.ErrnoError(20)}else bn=En.mknod(dn,gn,0),Pn=!0;if(!bn)throw new En.ErrnoError(44);if(En.isChrdev(bn.mode)&&(hn&=-513),hn&65536&&!En.isDir(bn.mode))throw new En.ErrnoError(54);if(!Pn){var Cn=En.mayOpen(bn,hn);if(Cn)throw new En.ErrnoError(Cn)}hn&512&&En.truncate(bn,0),hn&=-641;var jn=En.createStream({node:bn,path:En.getPath(bn),flags:hn,seekable:!0,position:0,stream_ops:bn.stream_ops,ungotten:[],error:!1},vn,Sn);jn.stream_ops.open&&jn.stream_ops.open(jn),sn.logReadFiles&&!(hn&1)&&(En.readFiles||(En.readFiles={}),dn in En.readFiles||(En.readFiles[dn]=1,kn("FS.trackingDelegate error on read file: "+dn)));try{if(En.trackingDelegate.onOpenFile){var Hn=0;(hn&2097155)!==1&&(Hn|=En.tracking.openFlags.READ),(hn&2097155)!==0&&(Hn|=En.tracking.openFlags.WRITE),En.trackingDelegate.onOpenFile(dn,Hn)}}catch(Qn){kn("FS.trackingDelegate['onOpenFile']('"+dn+"', flags) threw an exception: "+Qn.message)}return jn},close:function(dn){if(En.isClosed(dn))throw new En.ErrnoError(8);dn.getdents&&(dn.getdents=null);try{dn.stream_ops.close&&dn.stream_ops.close(dn)}catch(hn){throw hn}finally{En.closeStream(dn.fd)}dn.fd=null},isClosed:function(dn){return dn.fd===null},llseek:function(dn,hn,gn){if(En.isClosed(dn))throw new En.ErrnoError(8);if(!dn.seekable||!dn.stream_ops.llseek)throw new En.ErrnoError(70);if(gn!=0&&gn!=1&&gn!=2)throw new En.ErrnoError(28);return dn.position=dn.stream_ops.llseek(dn,hn,gn),dn.ungotten=[],dn.position},read:function(dn,hn,gn,vn,Sn){if(vn<0||Sn<0)throw new En.ErrnoError(28);if(En.isClosed(dn))throw new En.ErrnoError(8);if((dn.flags&2097155)===1)throw new En.ErrnoError(8);if(En.isDir(dn.node.mode))throw new En.ErrnoError(31);if(!dn.stream_ops.read)throw new En.ErrnoError(28);var bn=typeof Sn!="undefined";if(!bn)Sn=dn.position;else if(!dn.seekable)throw new En.ErrnoError(70);var Mn=dn.stream_ops.read(dn,hn,gn,vn,Sn);return bn||(dn.position+=Mn),Mn},write:function(dn,hn,gn,vn,Sn,bn){if(vn<0||Sn<0)throw new En.ErrnoError(28);if(En.isClosed(dn))throw new En.ErrnoError(8);if((dn.flags&2097155)===0)throw new En.ErrnoError(8);if(En.isDir(dn.node.mode))throw new En.ErrnoError(31);if(!dn.stream_ops.write)throw new En.ErrnoError(28);dn.flags&1024&&En.llseek(dn,0,2);var Mn=typeof Sn!="undefined";if(!Mn)Sn=dn.position;else if(!dn.seekable)throw new En.ErrnoError(70);var Pn=dn.stream_ops.write(dn,hn,gn,vn,Sn,bn);Mn||(dn.position+=Pn);try{dn.path&&En.trackingDelegate.onWriteToFile&&En.trackingDelegate.onWriteToFile(dn.path)}catch(Cn){kn("FS.trackingDelegate['onWriteToFile']('"+dn.path+"') threw an exception: "+Cn.message)}return Pn},allocate:function(dn,hn,gn){if(En.isClosed(dn))throw new En.ErrnoError(8);if(hn<0||gn<=0)throw new En.ErrnoError(28);if((dn.flags&2097155)===0)throw new En.ErrnoError(8);if(!En.isFile(dn.node.mode)&&!En.isDir(dn.node.mode))throw new En.ErrnoError(43);if(!dn.stream_ops.allocate)throw new En.ErrnoError(138);dn.stream_ops.allocate(dn,hn,gn)},mmap:function(dn,hn,gn,vn,Sn,bn,Mn){if((bn&2)!==0&&(Mn&2)===0&&(dn.flags&2097155)!==2)throw new En.ErrnoError(2);if((dn.flags&2097155)===1)throw new En.ErrnoError(2);if(!dn.stream_ops.mmap)throw new En.ErrnoError(43);return dn.stream_ops.mmap(dn,hn,gn,vn,Sn,bn,Mn)},msync:function(dn,hn,gn,vn,Sn){return!dn||!dn.stream_ops.msync?0:dn.stream_ops.msync(dn,hn,gn,vn,Sn)},munmap:function(dn){return 0},ioctl:function(dn,hn,gn){if(!dn.stream_ops.ioctl)throw new En.ErrnoError(59);return dn.stream_ops.ioctl(dn,hn,gn)},readFile:function(dn,hn){if(hn=hn||{},hn.flags=hn.flags||"r",hn.encoding=hn.encoding||"binary",hn.encoding!=="utf8"&&hn.encoding!=="binary")throw new Error('Invalid encoding type "'+hn.encoding+'"');var gn,vn=En.open(dn,hn.flags),Sn=En.stat(dn),bn=Sn.size,Mn=new Uint8Array(bn);return En.read(vn,Mn,0,bn,0),hn.encoding==="utf8"?gn=lt(Mn,0):hn.encoding==="binary"&&(gn=Mn),En.close(vn),gn},writeFile:function(dn,hn,gn){gn=gn||{},gn.flags=gn.flags||"w";var vn=En.open(dn,gn.flags,gn.mode);if(typeof hn=="string"){var Sn=new Uint8Array(Ct(hn)+1),bn=_t(hn,Sn,0,Sn.length);En.write(vn,Sn,0,bn,void 0,gn.canOwn)}else if(ArrayBuffer.isView(hn))En.write(vn,hn,0,hn.byteLength,void 0,gn.canOwn);else throw new Error("Unsupported data type");En.close(vn)},cwd:function(){return En.currentPath},chdir:function(dn){var hn=En.lookupPath(dn,{follow:!0});if(hn.node===null)throw new En.ErrnoError(44);if(!En.isDir(hn.node.mode))throw new En.ErrnoError(54);var gn=En.nodePermissions(hn.node,"x");if(gn)throw new En.ErrnoError(gn);En.currentPath=hn.path},createDefaultDirectories:function(){En.mkdir("/tmp"),En.mkdir("/home"),En.mkdir("/home/web_user")},createDefaultDevices:function(){En.mkdir("/dev"),En.registerDevice(En.makedev(1,3),{read:function(){return 0},write:function(vn,Sn,bn,Mn,Pn){return Mn}}),En.mkdev("/dev/null",En.makedev(1,3)),nr.register(En.makedev(5,0),nr.default_tty_ops),nr.register(En.makedev(6,0),nr.default_tty1_ops),En.mkdev("/dev/tty",En.makedev(5,0)),En.mkdev("/dev/tty1",En.makedev(6,0));var dn;if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var hn=new Uint8Array(1);dn=function(){return crypto.getRandomValues(hn),hn[0]}}else if(wn)try{var gn=require("crypto");dn=function(){return gn.randomBytes(1)[0]}}catch{}dn||(dn=function(){Fn("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")}),En.createDevice("/dev","random",dn),En.createDevice("/dev","urandom",dn),En.mkdir("/dev/shm"),En.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){En.mkdir("/proc"),En.mkdir("/proc/self"),En.mkdir("/proc/self/fd"),En.mount({mount:function(){var dn=En.createNode("/proc/self","fd",16895,73);return dn.node_ops={lookup:function(hn,gn){var vn=+gn,Sn=En.getStream(vn);if(!Sn)throw new En.ErrnoError(8);var bn={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return Sn.path}}};return bn.parent=bn,bn}},dn}},{},"/proc/self/fd")},createStandardStreams:function(){sn.stdin?En.createDevice("/dev","stdin",sn.stdin):En.symlink("/dev/tty","/dev/stdin"),sn.stdout?En.createDevice("/dev","stdout",null,sn.stdout):En.symlink("/dev/tty","/dev/stdout"),sn.stderr?En.createDevice("/dev","stderr",null,sn.stderr):En.symlink("/dev/tty1","/dev/stderr");var dn=En.open("/dev/stdin","r"),hn=En.open("/dev/stdout","w"),gn=En.open("/dev/stderr","w");Rn(dn.fd===0,"invalid handle for stdin ("+dn.fd+")"),Rn(hn.fd===1,"invalid handle for stdout ("+hn.fd+")"),Rn(gn.fd===2,"invalid handle for stderr ("+gn.fd+")")},ensureErrnoError:function(){En.ErrnoError||(En.ErrnoError=function(hn,gn){this.node=gn,this.setErrno=function(vn){this.errno=vn;for(var Sn in Et)if(Et[Sn]===vn){this.code=Sn;break}},this.setErrno(hn),this.message=zs[hn],this.stack&&(Object.defineProperty(this,"stack",{value:new Error().stack,writable:!0}),this.stack=Bo(this.stack))},En.ErrnoError.prototype=new Error,En.ErrnoError.prototype.constructor=En.ErrnoError,[44].forEach(function(dn){En.genericErrors[dn]=new En.ErrnoError(dn),En.genericErrors[dn].stack="<generic error, no stack>"}))},staticInit:function(){En.ensureErrnoError(),En.nameTable=new Array(4096),En.mount(pt,{},"/"),En.createDefaultDirectories(),En.createDefaultDevices(),En.createSpecialDirectories(),En.filesystems={MEMFS:pt}},init:function(dn,hn,gn){Rn(!En.init.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),En.init.initialized=!0,En.ensureErrnoError(),sn.stdin=dn||sn.stdin,sn.stdout=hn||sn.stdout,sn.stderr=gn||sn.stderr,En.createStandardStreams()},quit:function(){En.init.initialized=!1;var dn=sn._fflush;dn&&dn(0);for(var hn=0;hn<En.streams.length;hn++){var gn=En.streams[hn];!gn||En.close(gn)}},getMode:function(dn,hn){var gn=0;return dn&&(gn|=365),hn&&(gn|=146),gn},joinPath:function(dn,hn){var gn=mt.join.apply(null,dn);return hn&&gn[0]=="/"&&(gn=gn.substr(1)),gn},absolutePath:function(dn,hn){return jt.resolve(hn,dn)},standardizePath:function(dn){return mt.normalize(dn)},findObject:function(dn,hn){var gn=En.analyzePath(dn,hn);return gn.exists?gn.object:(yr(gn.error),null)},analyzePath:function(dn,hn){try{var gn=En.lookupPath(dn,{follow:!hn});dn=gn.path}catch{}var vn={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var gn=En.lookupPath(dn,{parent:!0});vn.parentExists=!0,vn.parentPath=gn.path,vn.parentObject=gn.node,vn.name=mt.basename(dn),gn=En.lookupPath(dn,{follow:!hn}),vn.exists=!0,vn.path=gn.path,vn.object=gn.node,vn.name=gn.node.name,vn.isRoot=gn.path==="/"}catch(Sn){vn.error=Sn.errno}return vn},createFolder:function(dn,hn,gn,vn){var Sn=mt.join2(typeof dn=="string"?dn:En.getPath(dn),hn),bn=En.getMode(gn,vn);return En.mkdir(Sn,bn)},createPath:function(dn,hn,gn,vn){dn=typeof dn=="string"?dn:En.getPath(dn);for(var Sn=hn.split("/").reverse();Sn.length;){var bn=Sn.pop();if(!!bn){var Mn=mt.join2(dn,bn);try{En.mkdir(Mn)}catch{}dn=Mn}}return Mn},createFile:function(dn,hn,gn,vn,Sn){var bn=mt.join2(typeof dn=="string"?dn:En.getPath(dn),hn),Mn=En.getMode(vn,Sn);return En.create(bn,Mn)},createDataFile:function(dn,hn,gn,vn,Sn,bn){var Mn=hn?mt.join2(typeof dn=="string"?dn:En.getPath(dn),hn):dn,Pn=En.getMode(vn,Sn),Cn=En.create(Mn,Pn);if(gn){if(typeof gn=="string"){for(var jn=new Array(gn.length),Hn=0,Qn=gn.length;Hn<Qn;++Hn)jn[Hn]=gn.charCodeAt(Hn);gn=jn}En.chmod(Cn,Pn|146);var Bn=En.open(Cn,"w");En.write(Bn,gn,0,gn.length,0,bn),En.close(Bn),En.chmod(Cn,Pn)}return Cn},createDevice:function(dn,hn,gn,vn){var Sn=mt.join2(typeof dn=="string"?dn:En.getPath(dn),hn),bn=En.getMode(!!gn,!!vn);En.createDevice.major||(En.createDevice.major=64);var Mn=En.makedev(En.createDevice.major++,0);return En.registerDevice(Mn,{open:function(Pn){Pn.seekable=!1},close:function(Pn){vn&&vn.buffer&&vn.buffer.length&&vn(10)},read:function(Pn,Cn,jn,Hn,Qn){for(var Bn=0,Wn=0;Wn<Hn;Wn++){var Gn;try{Gn=gn()}catch{throw new En.ErrnoError(29)}if(Gn===void 0&&Bn===0)throw new En.ErrnoError(6);if(Gn==null)break;Bn++,Cn[jn+Wn]=Gn}return Bn&&(Pn.node.timestamp=Date.now()),Bn},write:function(Pn,Cn,jn,Hn,Qn){for(var Bn=0;Bn<Hn;Bn++)try{vn(Cn[jn+Bn])}catch{throw new En.ErrnoError(29)}return Hn&&(Pn.node.timestamp=Date.now()),Bn}}),En.mkdev(Sn,bn,Mn)},createLink:function(dn,hn,gn,vn,Sn){var bn=mt.join2(typeof dn=="string"?dn:En.getPath(dn),hn);return En.symlink(gn,bn)},forceLoadFile:function(dn){if(dn.isDevice||dn.isFolder||dn.link||dn.contents)return!0;var hn=!0;if(typeof XMLHttpRequest!="undefined")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(An)try{dn.contents=Pr(An(dn.url),!0),dn.usedBytes=dn.contents.length}catch{hn=!1}else throw new Error("Cannot load without read() or XMLHttpRequest.");return hn||yr(29),hn},createLazyFile:function(dn,hn,gn,vn,Sn){function bn(){this.lengthKnown=!1,this.chunks=[]}if(bn.prototype.get=function(Bn){if(!(Bn>this.length-1||Bn<0)){var Wn=Bn%this.chunkSize,Gn=Bn/this.chunkSize|0;return this.getter(Gn)[Wn]}},bn.prototype.setDataGetter=function(Bn){this.getter=Bn},bn.prototype.cacheLength=function(){var Bn=new XMLHttpRequest;if(Bn.open("HEAD",gn,!1),Bn.send(null),!(Bn.status>=200&&Bn.status<300||Bn.status===304))throw new Error("Couldn't load "+gn+". Status: "+Bn.status);var Wn=Number(Bn.getResponseHeader("Content-length")),Gn,ot=(Gn=Bn.getResponseHeader("Accept-Ranges"))&&Gn==="bytes",ut=(Gn=Bn.getResponseHeader("Content-Encoding"))&&Gn==="gzip",ft=1024*1024;ot||(ft=Wn);var Vn=function(it,st){if(it>st)throw new Error("invalid range ("+it+", "+st+") or no bytes requested!");if(st>Wn-1)throw new Error("only "+Wn+" bytes available! programmer error!");var dt=new XMLHttpRequest;if(dt.open("GET",gn,!1),Wn!==ft&&dt.setRequestHeader("Range","bytes="+it+"-"+st),typeof Uint8Array!="undefined"&&(dt.responseType="arraybuffer"),dt.overrideMimeType&&dt.overrideMimeType("text/plain; charset=x-user-defined"),dt.send(null),!(dt.status>=200&&dt.status<300||dt.status===304))throw new Error("Couldn't load "+gn+". Status: "+dt.status);return dt.response!==void 0?new Uint8Array(dt.response||[]):Pr(dt.responseText||"",!0)},Kn=this;Kn.setDataGetter(function(it){var st=it*ft,dt=(it+1)*ft-1;if(dt=Math.min(dt,Wn-1),typeof Kn.chunks[it]=="undefined"&&(Kn.chunks[it]=Vn(st,dt)),typeof Kn.chunks[it]=="undefined")throw new Error("doXHR failed!");return Kn.chunks[it]}),(ut||!Wn)&&(ft=Wn=1,Wn=this.getter(0).length,ft=Wn,qn("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Wn,this._chunkSize=ft,this.lengthKnown=!0},typeof XMLHttpRequest!="undefined"){if(!Tn)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Mn=new bn;Object.defineProperties(Mn,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var Pn={isDevice:!1,contents:Mn}}else var Pn={isDevice:!1,url:gn};var Cn=En.createFile(dn,hn,Pn,vn,Sn);Pn.contents?Cn.contents=Pn.contents:Pn.url&&(Cn.contents=null,Cn.url=Pn.url),Object.defineProperties(Cn,{usedBytes:{get:function(){return this.contents.length}}});var jn={},Hn=Object.keys(Cn.stream_ops);return Hn.forEach(function(Qn){var Bn=Cn.stream_ops[Qn];jn[Qn]=function(){if(!En.forceLoadFile(Cn))throw new En.ErrnoError(29);return Bn.apply(null,arguments)}}),jn.read=function(Bn,Wn,Gn,ot,ut){if(!En.forceLoadFile(Cn))throw new En.ErrnoError(29);var ft=Bn.node.contents;if(ut>=ft.length)return 0;var Vn=Math.min(ft.length-ut,ot);if(Rn(Vn>=0),ft.slice)for(var Kn=0;Kn<Vn;Kn++)Wn[Gn+Kn]=ft[ut+Kn];else for(var Kn=0;Kn<Vn;Kn++)Wn[Gn+Kn]=ft.get(ut+Kn);return Vn},Cn.stream_ops=jn,Cn},createPreloadedFile:function(dn,hn,gn,vn,Sn,bn,Mn,Pn,Cn,jn){Browser.init();var Hn=hn?jt.resolve(mt.join2(dn,hn)):dn,Qn=ks("cp "+Hn);function Bn(Wn){function Gn(ut){jn&&jn(),Pn||En.createDataFile(dn,hn,ut,vn,Sn,Cn),bn&&bn(),Lr(Qn)}var ot=!1;sn.preloadPlugins.forEach(function(ut){ot||ut.canHandle(Hn)&&(ut.handle(Wn,Hn,Gn,function(){Mn&&Mn(),Lr(Qn)}),ot=!0)}),ot||Gn(Wn)}lo(Qn),typeof gn=="string"?Browser.asyncLoad(gn,function(Wn){Bn(Wn)},Mn):Bn(gn)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(dn,hn,gn){hn=hn||function(){},gn=gn||function(){};var vn=En.indexedDB();try{var Sn=vn.open(En.DB_NAME(),En.DB_VERSION)}catch(bn){return gn(bn)}Sn.onupgradeneeded=function(){qn("creating db");var Mn=Sn.result;Mn.createObjectStore(En.DB_STORE_NAME)},Sn.onsuccess=function(){var Mn=Sn.result,Pn=Mn.transaction([En.DB_STORE_NAME],"readwrite"),Cn=Pn.objectStore(En.DB_STORE_NAME),jn=0,Hn=0,Qn=dn.length;function Bn(){Hn==0?hn():gn()}dn.forEach(function(Wn){var Gn=Cn.put(En.analyzePath(Wn).object.contents,Wn);Gn.onsuccess=function(){jn++,jn+Hn==Qn&&Bn()},Gn.onerror=function(){Hn++,jn+Hn==Qn&&Bn()}}),Pn.onerror=gn},Sn.onerror=gn},loadFilesFromDB:function(dn,hn,gn){hn=hn||function(){},gn=gn||function(){};var vn=En.indexedDB();try{var Sn=vn.open(En.DB_NAME(),En.DB_VERSION)}catch(bn){return gn(bn)}Sn.onupgradeneeded=gn,Sn.onsuccess=function(){var Mn=Sn.result;try{var Pn=Mn.transaction([En.DB_STORE_NAME],"readonly")}catch(Wn){gn(Wn);return}var Cn=Pn.objectStore(En.DB_STORE_NAME),jn=0,Hn=0,Qn=dn.length;function Bn(){Hn==0?hn():gn()}dn.forEach(function(Wn){var Gn=Cn.get(Wn);Gn.onsuccess=function(){En.analyzePath(Wn).exists&&En.unlink(Wn),En.createDataFile(mt.dirname(Wn),mt.basename(Wn),Gn.result,!0,!0,!0),jn++,jn+Hn==Qn&&Bn()},Gn.onerror=function(){Hn++,jn+Hn==Qn&&Bn()}}),Pn.onerror=gn},Sn.onerror=gn}},wt={mount:function(dn){return sn.websocket=sn.websocket&&typeof sn.websocket=="object"?sn.websocket:{},sn.websocket._callbacks={},sn.websocket.on=function(hn,gn){return typeof gn=="function"&&(this._callbacks[hn]=gn),this},sn.websocket.emit=function(hn,gn){typeof this._callbacks[hn]=="function"&&this._callbacks[hn].call(this,gn)},En.createNode(null,"/",16895,0)},createSocket:function(dn,hn,gn){var vn=hn==1;gn&&Rn(vn==(gn==6));var Sn={family:dn,type:hn,protocol:gn,server:null,error:null,peers:{},pending:[],recv_queue:[],sock_ops:wt.websocket_sock_ops},bn=wt.nextname(),Mn=En.createNode(wt.root,bn,49152,0);Mn.sock=Sn;var Pn=En.createStream({path:bn,node:Mn,flags:En.modeStringToFlags("r+"),seekable:!1,stream_ops:wt.stream_ops});return Sn.stream=Pn,Sn},getSocket:function(dn){var hn=En.getStream(dn);return!hn||!En.isSocket(hn.node.mode)?null:hn.node.sock},stream_ops:{poll:function(dn){var hn=dn.node.sock;return hn.sock_ops.poll(hn)},ioctl:function(dn,hn,gn){var vn=dn.node.sock;return vn.sock_ops.ioctl(vn,hn,gn)},read:function(dn,hn,gn,vn,Sn){var bn=dn.node.sock,Mn=bn.sock_ops.recvmsg(bn,vn);return Mn?(hn.set(Mn.buffer,gn),Mn.buffer.length):0},write:function(dn,hn,gn,vn,Sn){var bn=dn.node.sock;return bn.sock_ops.sendmsg(bn,hn,gn,vn)},close:function(dn){var hn=dn.node.sock;hn.sock_ops.close(hn)}},nextname:function(){return wt.nextname.current||(wt.nextname.current=0),"socket["+wt.nextname.current+++"]"},websocket_sock_ops:{createPeer:function(dn,hn,gn){var vn;if(typeof hn=="object"&&(vn=hn,hn=null,gn=null),vn)if(vn._socket)hn=vn._socket.remoteAddress,gn=vn._socket.remotePort;else{var Sn=/ws[s]?:\/\/([^:]+):(\d+)/.exec(vn.url);if(!Sn)throw new Error("WebSocket URL must be in the format ws(s)://address:port");hn=Sn[1],gn=parseInt(Sn[2],10)}else try{var bn=sn.websocket&&typeof sn.websocket=="object",Mn="ws:#".replace("#","//");if(bn&&typeof sn.websocket.url=="string"&&(Mn=sn.websocket.url),Mn==="ws://"||Mn==="wss://"){var Pn=hn.split("/");Mn=Mn+Pn[0]+":"+gn+"/"+Pn.slice(1).join("/")}var Cn="binary";bn&&typeof sn.websocket.subprotocol=="string"&&(Cn=sn.websocket.subprotocol);var jn=void 0;Cn!=="null"&&(Cn=Cn.replace(/^ +| +$/g,"").split(/ *, */),jn=wn?{protocol:Cn.toString()}:Cn),bn&&sn.websocket.subprotocol===null&&(Cn="null",jn=void 0);var Hn;wn?Hn=require("ws"):Hn=WebSocket,vn=new Hn(Mn,jn),vn.binaryType="arraybuffer"}catch{throw new En.ErrnoError(Et.EHOSTUNREACH)}var Qn={addr:hn,port:gn,socket:vn,dgram_send_queue:[]};return wt.websocket_sock_ops.addPeer(dn,Qn),wt.websocket_sock_ops.handlePeerEvents(dn,Qn),dn.type===2&&typeof dn.sport!="undefined"&&Qn.dgram_send_queue.push(new Uint8Array([255,255,255,255,"p".charCodeAt(0),"o".charCodeAt(0),"r".charCodeAt(0),"t".charCodeAt(0),(dn.sport&65280)>>8,dn.sport&255])),Qn},getPeer:function(dn,hn,gn){return dn.peers[hn+":"+gn]},addPeer:function(dn,hn){dn.peers[hn.addr+":"+hn.port]=hn},removePeer:function(dn,hn){delete dn.peers[hn.addr+":"+hn.port]},handlePeerEvents:function(dn,hn){var gn=!0,vn=function(){sn.websocket.emit("open",dn.stream.fd);try{for(var bn=hn.dgram_send_queue.shift();bn;)hn.socket.send(bn),bn=hn.dgram_send_queue.shift()}catch{hn.socket.close()}};function Sn(bn){if(typeof bn=="string"){var Mn=new TextEncoder;bn=Mn.encode(bn)}else{if(Rn(bn.byteLength!==void 0),bn.byteLength==0)return;bn=new Uint8Array(bn)}var Pn=gn;if(gn=!1,Pn&&bn.length===10&&bn[0]===255&&bn[1]===255&&bn[2]===255&&bn[3]===255&&bn[4]==="p".charCodeAt(0)&&bn[5]==="o".charCodeAt(0)&&bn[6]==="r".charCodeAt(0)&&bn[7]==="t".charCodeAt(0)){var Cn=bn[8]<<8|bn[9];wt.websocket_sock_ops.removePeer(dn,hn),hn.port=Cn,wt.websocket_sock_ops.addPeer(dn,hn);return}dn.recv_queue.push({addr:hn.addr,port:hn.port,data:bn}),sn.websocket.emit("message",dn.stream.fd)}wn?(hn.socket.on("open",vn),hn.socket.on("message",function(bn,Mn){!Mn.binary||Sn(new Uint8Array(bn).buffer)}),hn.socket.on("close",function(){sn.websocket.emit("close",dn.stream.fd)}),hn.socket.on("error",function(bn){dn.error=Et.ECONNREFUSED,sn.websocket.emit("error",[dn.stream.fd,dn.error,"ECONNREFUSED: Connection refused"])})):(hn.socket.onopen=vn,hn.socket.onclose=function(){sn.websocket.emit("close",dn.stream.fd)},hn.socket.onmessage=function(Mn){Sn(Mn.data)},hn.socket.onerror=function(bn){dn.error=Et.ECONNREFUSED,sn.websocket.emit("error",[dn.stream.fd,dn.error,"ECONNREFUSED: Connection refused"])})},poll:function(dn){if(dn.type===1&&dn.server)return dn.pending.length?65:0;var hn=0,gn=dn.type===1?wt.websocket_sock_ops.getPeer(dn,dn.daddr,dn.dport):null;return(dn.recv_queue.length||!gn||gn&&gn.socket.readyState===gn.socket.CLOSING||gn&&gn.socket.readyState===gn.socket.CLOSED)&&(hn|=65),(!gn||gn&&gn.socket.readyState===gn.socket.OPEN)&&(hn|=4),(gn&&gn.socket.readyState===gn.socket.CLOSING||gn&&gn.socket.readyState===gn.socket.CLOSED)&&(hn|=16),hn},ioctl:function(dn,hn,gn){switch(hn){case 21531:var vn=0;return dn.recv_queue.length&&(vn=dn.recv_queue[0].data.length),Xn[gn>>2]=vn,0;default:return Et.EINVAL}},close:function(dn){if(dn.server){try{dn.server.close()}catch{}dn.server=null}for(var hn=Object.keys(dn.peers),gn=0;gn<hn.length;gn++){var vn=dn.peers[hn[gn]];try{vn.socket.close()}catch{}wt.websocket_sock_ops.removePeer(dn,vn)}return 0},bind:function(dn,hn,gn){if(typeof dn.saddr!="undefined"||typeof dn.sport!="undefined")throw new En.ErrnoError(Et.EINVAL);if(dn.saddr=hn,dn.sport=gn,dn.type===2){dn.server&&(dn.server.close(),dn.server=null);try{dn.sock_ops.listen(dn,0)}catch(vn){if(!(vn instanceof En.ErrnoError)||vn.errno!==Et.EOPNOTSUPP)throw vn}}},connect:function(dn,hn,gn){if(dn.server)throw new En.ErrnoError(Et.EOPNOTSUPP);if(typeof dn.daddr!="undefined"&&typeof dn.dport!="undefined"){var vn=wt.websocket_sock_ops.getPeer(dn,dn.daddr,dn.dport);if(vn)throw vn.socket.readyState===vn.socket.CONNECTING?new En.ErrnoError(Et.EALREADY):new En.ErrnoError(Et.EISCONN)}var Sn=wt.websocket_sock_ops.createPeer(dn,hn,gn);throw dn.daddr=Sn.addr,dn.dport=Sn.port,new En.ErrnoError(Et.EINPROGRESS)},listen:function(dn,hn){if(!wn)throw new En.ErrnoError(Et.EOPNOTSUPP);if(dn.server)throw new En.ErrnoError(Et.EINVAL);var gn=require("ws").Server,vn=dn.saddr;dn.server=new gn({host:vn,port:dn.sport}),sn.websocket.emit("listen",dn.stream.fd),dn.server.on("connection",function(Sn){if(dn.type===1){var bn=wt.createSocket(dn.family,dn.type,dn.protocol),Mn=wt.websocket_sock_ops.createPeer(bn,Sn);bn.daddr=Mn.addr,bn.dport=Mn.port,dn.pending.push(bn),sn.websocket.emit("connection",bn.stream.fd)}else wt.websocket_sock_ops.createPeer(dn,Sn),sn.websocket.emit("connection",dn.stream.fd)}),dn.server.on("closed",function(){sn.websocket.emit("close",dn.stream.fd),dn.server=null}),dn.server.on("error",function(Sn){dn.error=Et.EHOSTUNREACH,sn.websocket.emit("error",[dn.stream.fd,dn.error,"EHOSTUNREACH: Host is unreachable"])})},accept:function(dn){if(!dn.server)throw new En.ErrnoError(Et.EINVAL);var hn=dn.pending.shift();return hn.stream.flags=dn.stream.flags,hn},getname:function(dn,hn){var gn,vn;if(hn){if(dn.daddr===void 0||dn.dport===void 0)throw new En.ErrnoError(Et.ENOTCONN);gn=dn.daddr,vn=dn.dport}else gn=dn.saddr||0,vn=dn.sport||0;return{addr:gn,port:vn}},sendmsg:function(dn,hn,gn,vn,Sn,bn){if(dn.type===2){if((Sn===void 0||bn===void 0)&&(Sn=dn.daddr,bn=dn.dport),Sn===void 0||bn===void 0)throw new En.ErrnoError(Et.EDESTADDRREQ)}else Sn=dn.daddr,bn=dn.dport;var Mn=wt.websocket_sock_ops.getPeer(dn,Sn,bn);if(dn.type===1){if(!Mn||Mn.socket.readyState===Mn.socket.CLOSING||Mn.socket.readyState===Mn.socket.CLOSED)throw new En.ErrnoError(Et.ENOTCONN);if(Mn.socket.readyState===Mn.socket.CONNECTING)throw new En.ErrnoError(Et.EAGAIN)}ArrayBuffer.isView(hn)&&(gn+=hn.byteOffset,hn=hn.buffer);var Pn;if(Pn=hn.slice(gn,gn+vn),dn.type===2&&(!Mn||Mn.socket.readyState!==Mn.socket.OPEN))return(!Mn||Mn.socket.readyState===Mn.socket.CLOSING||Mn.socket.readyState===Mn.socket.CLOSED)&&(Mn=wt.websocket_sock_ops.createPeer(dn,Sn,bn)),Mn.dgram_send_queue.push(Pn),vn;try{return Mn.socket.send(Pn),vn}catch{throw new En.ErrnoError(Et.EINVAL)}},recvmsg:function(dn,hn){if(dn.type===1&&dn.server)throw new En.ErrnoError(Et.ENOTCONN);var gn=dn.recv_queue.shift();if(!gn)if(dn.type===1){var vn=wt.websocket_sock_ops.getPeer(dn,dn.daddr,dn.dport);if(vn){if(vn.socket.readyState===vn.socket.CLOSING||vn.socket.readyState===vn.socket.CLOSED)return null;throw new En.ErrnoError(Et.EAGAIN)}else throw new En.ErrnoError(Et.ENOTCONN)}else throw new En.ErrnoError(Et.EAGAIN);var Sn=gn.data.byteLength||gn.data.length,bn=gn.data.byteOffset||0,Mn=gn.data.buffer||gn.data,Pn=Math.min(hn,Sn),Cn={buffer:new Uint8Array(Mn,bn,Pn),addr:gn.addr,port:gn.port};if(dn.type===1&&Pn<Sn){var jn=Sn-Pn;gn.data=new Uint8Array(Mn,bn+Pn,jn),dn.recv_queue.unshift(gn)}return Cn}}};function co(dn){for(var hn=dn.split("."),gn=0;gn<4;gn++){var vn=Number(hn[gn]);if(isNaN(vn))return null;hn[gn]=vn}return(hn[0]|hn[1]<<8|hn[2]<<16|hn[3]<<24)>>>0}function Xr(dn){return parseInt(dn,void 0)}function Vo(dn){var hn,gn,vn,Sn,bn=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,Mn=[];if(!bn.test(dn))return null;if(dn==="::")return[0,0,0,0,0,0,0,0];for(dn.indexOf("::")===0?dn=dn.replace("::","Z:"):dn=dn.replace("::",":Z:"),dn.indexOf(".")>0?(dn=dn.replace(new RegExp("[.]","g"),":"),hn=dn.split(":"),hn[hn.length-4]=Xr(hn[hn.length-4])+Xr(hn[hn.length-3])*256,hn[hn.length-3]=Xr(hn[hn.length-2])+Xr(hn[hn.length-1])*256,hn=hn.slice(0,hn.length-2)):hn=dn.split(":"),vn=0,Sn=0,gn=0;gn<hn.length;gn++)if(typeof hn[gn]=="string")if(hn[gn]==="Z"){for(Sn=0;Sn<8-hn.length+1;Sn++)Mn[gn+Sn]=0;vn=Sn-1}else Mn[gn+vn]=Po(parseInt(hn[gn],16));else Mn[gn+vn]=hn[gn];return[Mn[1]<<16|Mn[0],Mn[3]<<16|Mn[2],Mn[5]<<16|Mn[4],Mn[7]<<16|Mn[6]]}var Mt={address_map:{id:1,addrs:{},names:{}},lookup_name:function(dn){var hn=co(dn);if(hn!==null||(hn=Vo(dn),hn!==null))return dn;var gn;if(Mt.address_map.addrs[dn])gn=Mt.address_map.addrs[dn];else{var vn=Mt.address_map.id++;Rn(vn<65535,"exceeded max address mappings of 65535"),gn="172.29."+(vn&255)+"."+(vn&65280),Mt.address_map.names[gn]=dn,Mt.address_map.addrs[dn]=gn}return gn},lookup_addr:function(dn){return Mt.address_map.names[dn]?Mt.address_map.names[dn]:null}};function Qo(dn){return(dn&255)+"."+(dn>>8&255)+"."+(dn>>16&255)+"."+(dn>>24&255)}function Bs(dn){var hn="",gn=0,vn=0,Sn=0,bn=0,Mn=0,Pn=0,Cn=[dn[0]&65535,dn[0]>>16,dn[1]&65535,dn[1]>>16,dn[2]&65535,dn[2]>>16,dn[3]&65535,dn[3]>>16],jn=!0,Hn="";for(Pn=0;Pn<5;Pn++)if(Cn[Pn]!==0){jn=!1;break}if(jn){if(Hn=Qo(Cn[6]|Cn[7]<<16),Cn[5]===-1)return hn="::ffff:",hn+=Hn,hn;if(Cn[5]===0)return hn="::",Hn==="0.0.0.0"&&(Hn=""),Hn==="0.0.0.1"&&(Hn="1"),hn+=Hn,hn}for(gn=0;gn<8;gn++)Cn[gn]===0&&(gn-Sn>1&&(Mn=0),Sn=gn,Mn++),Mn>vn&&(vn=Mn,bn=gn-vn+1);for(gn=0;gn<8;gn++){if(vn>1&&Cn[gn]===0&&gn>=bn&&gn<bn+vn){gn===bn&&(hn+=":",bn===0&&(hn+=":"));continue}hn+=Number(ss(Cn[gn]&65535)).toString(16),hn+=gn<7?":":""}return hn}function Go(dn,hn){var gn=kt[dn>>1],vn=ss(xr[dn+2>>1]),Sn;switch(gn){case 2:if(hn!==16)return{errno:28};Sn=Xn[dn+4>>2],Sn=Qo(Sn);break;case 10:if(hn!==28)return{errno:28};Sn=[Xn[dn+8>>2],Xn[dn+12>>2],Xn[dn+16>>2],Xn[dn+20>>2]],Sn=Bs(Sn);break;default:return{errno:5}}return{family:gn,addr:Sn,port:vn}}function vr(dn,hn,gn,vn){switch(hn){case 2:gn=co(gn),kt[dn>>1]=hn,Xn[dn+4>>2]=gn,kt[dn+2>>1]=Po(vn);break;case 10:gn=Vo(gn),Xn[dn>>2]=hn,Xn[dn+8>>2]=gn[0],Xn[dn+12>>2]=gn[1],Xn[dn+16>>2]=gn[2],Xn[dn+20>>2]=gn[3],kt[dn+2>>1]=Po(vn),Xn[dn+4>>2]=0,Xn[dn+24>>2]=0;break;default:return{errno:5}}return{}}var rt={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dn,hn){if(hn[0]!=="/"){var gn;if(dn===-100)gn=En.cwd();else{var vn=En.getStream(dn);if(!vn)throw new En.ErrnoError(8);gn=vn.path}hn=mt.join2(gn,hn)}return hn},doStat:function(dn,hn,gn){try{var vn=dn(hn)}catch(Sn){if(Sn&&Sn.node&&mt.normalize(hn)!==mt.normalize(En.getPath(Sn.node)))return-54;throw Sn}return Xn[gn>>2]=vn.dev,Xn[gn+4>>2]=0,Xn[gn+8>>2]=vn.ino,Xn[gn+12>>2]=vn.mode,Xn[gn+16>>2]=vn.nlink,Xn[gn+20>>2]=vn.uid,Xn[gn+24>>2]=vn.gid,Xn[gn+28>>2]=vn.rdev,Xn[gn+32>>2]=0,Nt=[vn.size>>>0,(Tt=vn.size,+$r(Tt)>=1?Tt>0?(Hr(+jr(Tt/4294967296),4294967295)|0)>>>0:~~+Ur((Tt-+(~~Tt>>>0))/4294967296)>>>0:0)],Xn[gn+40>>2]=Nt[0],Xn[gn+44>>2]=Nt[1],Xn[gn+48>>2]=4096,Xn[gn+52>>2]=vn.blocks,Xn[gn+56>>2]=vn.atime.getTime()/1e3|0,Xn[gn+60>>2]=0,Xn[gn+64>>2]=vn.mtime.getTime()/1e3|0,Xn[gn+68>>2]=0,Xn[gn+72>>2]=vn.ctime.getTime()/1e3|0,Xn[gn+76>>2]=0,Nt=[vn.ino>>>0,(Tt=vn.ino,+$r(Tt)>=1?Tt>0?(Hr(+jr(Tt/4294967296),4294967295)|0)>>>0:~~+Ur((Tt-+(~~Tt>>>0))/4294967296)>>>0:0)],Xn[gn+80>>2]=Nt[0],Xn[gn+84>>2]=Nt[1],0},doMsync:function(dn,hn,gn,vn,Sn){var bn=bt.slice(dn,dn+gn);En.msync(hn,bn,Sn,gn,vn)},doMkdir:function(dn,hn){return dn=mt.normalize(dn),dn[dn.length-1]==="/"&&(dn=dn.substr(0,dn.length-1)),En.mkdir(dn,hn,0),0},doMknod:function(dn,hn,gn){switch(hn&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return En.mknod(dn,hn,gn),0},doReadlink:function(dn,hn,gn){if(gn<=0)return-28;var vn=En.readlink(dn),Sn=Math.min(gn,Ct(vn)),bn=St[hn+Sn];return gt(vn,hn,gn+1),St[hn+Sn]=bn,Sn},doAccess:function(dn,hn){if(hn&-8)return-28;var gn,vn=En.lookupPath(dn,{follow:!0});if(gn=vn.node,!gn)return-44;var Sn="";return hn&4&&(Sn+="r"),hn&2&&(Sn+="w"),hn&1&&(Sn+="x"),Sn&&En.nodePermissions(gn,Sn)?-2:0},doDup:function(dn,hn,gn){var vn=En.getStream(gn);return vn&&En.close(vn),En.open(dn,hn,0,gn,gn).fd},doReadv:function(dn,hn,gn,vn){for(var Sn=0,bn=0;bn<gn;bn++){var Mn=Xn[hn+bn*8>>2],Pn=Xn[hn+(bn*8+4)>>2],Cn=En.read(dn,St,Mn,Pn,vn);if(Cn<0)return-1;if(Sn+=Cn,Cn<Pn)break}return Sn},doWritev:function(dn,hn,gn,vn){for(var Sn=0,bn=0;bn<gn;bn++){var Mn=Xn[hn+bn*8>>2],Pn=Xn[hn+(bn*8+4)>>2],Cn=En.write(dn,St,Mn,Pn,vn);if(Cn<0)return-1;Sn+=Cn}return Sn},varargs:void 0,get:function(){Rn(rt.varargs!=null),rt.varargs+=4;var dn=Xn[rt.varargs-4>>2];return dn},getStr:function(dn){var hn=ct(dn);return hn},getStreamFromFD:function(dn){var hn=En.getStream(dn);if(!hn)throw new En.ErrnoError(8);return hn},get64:function(dn,hn){return dn>=0?Rn(hn===0):Rn(hn===-1),dn}};function Ws(dn,hn){try{rt.varargs=hn;var gn=function(){var Yt=wt.getSocket(rt.get());if(!Yt)throw new En.ErrnoError(8);return Yt},vn=function(Yt){var ls=rt.get(),Ql=rt.get();if(Yt&&ls===0)return null;var cr=Go(ls,Ql);if(cr.errno)throw new En.ErrnoError(cr.errno);return cr.addr=Mt.lookup_addr(cr.addr)||cr.addr,cr};switch(dn){case 1:{var Sn=rt.get(),bn=rt.get(),Mn=rt.get(),Pn=wt.createSocket(Sn,bn,Mn);return Rn(Pn.stream.fd<64),Pn.stream.fd}case 2:{var Pn=gn(),Cn=vn();return Pn.sock_ops.bind(Pn,Cn.addr,Cn.port),0}case 3:{var Pn=gn(),Cn=vn();return Pn.sock_ops.connect(Pn,Cn.addr,Cn.port),0}case 4:{var Pn=gn(),jn=rt.get();return Pn.sock_ops.listen(Pn,jn),0}case 5:{var Pn=gn(),Hn=rt.get(),Qn=rt.get(),Bn=Pn.sock_ops.accept(Pn);if(Hn){var Wn=vr(Hn,Bn.family,Mt.lookup_name(Bn.daddr),Bn.dport);Rn(!Wn.errno)}return Bn.stream.fd}case 6:{var Pn=gn(),Hn=rt.get(),Qn=rt.get(),Wn=vr(Hn,Pn.family,Mt.lookup_name(Pn.saddr||"0.0.0.0"),Pn.sport);return Rn(!Wn.errno),0}case 7:{var Pn=gn(),Hn=rt.get(),Qn=rt.get();if(!Pn.daddr)return-53;var Wn=vr(Hn,Pn.family,Mt.lookup_name(Pn.daddr),Pn.dport);return Rn(!Wn.errno),0}case 11:{var Pn=gn(),Gn=rt.get(),ot=rt.get(),ut=rt.get(),ft=vn(!0);return ft?Pn.sock_ops.sendmsg(Pn,St,Gn,ot,ft.addr,ft.port):En.write(Pn.stream,St,Gn,ot)}case 12:{var Pn=gn(),Vn=rt.get(),Kn=rt.get(),ut=rt.get(),Hn=rt.get(),Qn=rt.get(),it=Pn.sock_ops.recvmsg(Pn,Kn);if(!it)return 0;if(Hn){var Wn=vr(Hn,Pn.family,Mt.lookup_name(it.addr),it.port);Rn(!Wn.errno)}return bt.set(it.buffer,Vn),it.buffer.byteLength}case 14:return-50;case 15:{var Pn=gn(),st=rt.get(),dt=rt.get(),Ot=rt.get(),Dt=rt.get();return st===1&&dt===4?(Xn[Ot>>2]=Pn.error,Xn[Dt>>2]=4,Pn.error=null,0):-50}case 16:{var Pn=gn(),Gn=rt.get(),ut=rt.get(),xt=Xn[Gn+8>>2],rr=Xn[Gn+12>>2],Hn,to,Gt=Xn[Gn>>2],Wl=Xn[Gn+4>>2];if(Gt){var Cn=Go(Gt,Wl);if(Cn.errno)return-Cn.errno;to=Cn.port,Hn=Mt.lookup_addr(Cn.addr)||Cn.addr}for(var dr=0,Pt=0;Pt<rr;Pt++)dr+=Xn[xt+(8*Pt+4)>>2];for(var us=new Uint8Array(dr),Vl=0,Pt=0;Pt<rr;Pt++)for(var Do=Xn[xt+(8*Pt+0)>>2],ro=Xn[xt+(8*Pt+4)>>2],Ro=0;Ro<ro;Ro++)us[Vl++]=St[Do+Ro>>0];return Pn.sock_ops.sendmsg(Pn,us,0,dr,Hn,to)}case 17:{for(var Pn=gn(),Gn=rt.get(),ut=rt.get(),xt=Xn[Gn+8>>2],rr=Xn[Gn+12>>2],dr=0,Pt=0;Pt<rr;Pt++)dr+=Xn[xt+(8*Pt+4)>>2];var it=Pn.sock_ops.recvmsg(Pn,dr);if(!it)return 0;var Gt=Xn[Gn>>2];if(Gt){var Wn=vr(Gt,Pn.family,Mt.lookup_name(it.addr),it.port);Rn(!Wn.errno)}for(var Rr=0,ko=it.buffer.byteLength,Pt=0;ko>0&&Pt<rr;Pt++){var Do=Xn[xt+(8*Pt+0)>>2],ro=Xn[xt+(8*Pt+4)>>2];if(!!ro){var ot=Math.min(ro,ko),Vn=it.buffer.subarray(Rr,Rr+ot);bt.set(Vn,Do+Rr),Rr+=ot,ko-=ot}}return Rr}default:return-52}}catch(Yt){return(typeof En=="undefined"||!(Yt instanceof En.ErrnoError))&&Fn(Yt),-Yt.errno}}function Vs(dn){try{return dn=rt.getStr(dn),En.chdir(dn),0}catch(hn){return(typeof En=="undefined"||!(hn instanceof En.ErrnoError))&&Fn(hn),-hn.errno}}function Qs(dn,hn,gn,vn,Sn){try{Rn(dn<=64,"nfds must be less than or equal to 64"),Rn(!vn,"exceptfds not supported");for(var bn=0,Mn=hn?Xn[hn>>2]:0,Pn=hn?Xn[hn+4>>2]:0,Cn=gn?Xn[gn>>2]:0,jn=gn?Xn[gn+4>>2]:0,Hn=vn?Xn[vn>>2]:0,Qn=vn?Xn[vn+4>>2]:0,Bn=0,Wn=0,Gn=0,ot=0,ut=0,ft=0,Vn=(hn?Xn[hn>>2]:0)|(gn?Xn[gn>>2]:0)|(vn?Xn[vn>>2]:0),Kn=(hn?Xn[hn+4>>2]:0)|(gn?Xn[gn+4>>2]:0)|(vn?Xn[vn+4>>2]:0),it=function(xt,rr,to,Gt){return xt<32?rr&Gt:to&Gt},st=0;st<dn;st++){var dt=1<<st%32;if(!!it(st,Vn,Kn,dt)){var Ot=En.getStream(st);if(!Ot)throw new En.ErrnoError(8);var Dt=rt.DEFAULT_POLLMASK;Ot.stream_ops.poll&&(Dt=Ot.stream_ops.poll(Ot)),Dt&1&&it(st,Mn,Pn,dt)&&(st<32?Bn=Bn|dt:Wn=Wn|dt,bn++),Dt&4&&it(st,Cn,jn,dt)&&(st<32?Gn=Gn|dt:ot=ot|dt,bn++),Dt&2&&it(st,Hn,Qn,dt)&&(st<32?ut=ut|dt:ft=ft|dt,bn++)}}return hn&&(Xn[hn>>2]=Bn,Xn[hn+4>>2]=Wn),gn&&(Xn[gn>>2]=Gn,Xn[gn+4>>2]=ot),vn&&(Xn[vn>>2]=ut,Xn[vn+4>>2]=ft),bn}catch(xt){return(typeof En=="undefined"||!(xt instanceof En.ErrnoError))&&Fn(xt),-xt.errno}}function Gs(dn,hn){try{if(hn===0)return-28;var gn=En.cwd(),vn=Ct(gn);return hn<vn+1?-68:(gt(gn,dn,hn),dn)}catch(Sn){return(typeof En=="undefined"||!(Sn instanceof En.ErrnoError))&&Fn(Sn),-Sn.errno}}function Ys(dn,hn){try{return dn=rt.getStr(dn),rt.doStat(En.stat,dn,hn)}catch(gn){return(typeof En=="undefined"||!(gn instanceof En.ErrnoError))&&Fn(gn),-gn.errno}}function qs(dn,hn){try{var gn=rt.getStreamFromFD(dn);return rt.doStat(En.stat,gn.path,hn)}catch(vn){return(typeof En=="undefined"||!(vn instanceof En.ErrnoError))&&Fn(vn),-vn.errno}}function Ks(dn,hn,gn){rt.varargs=gn;try{var vn=rt.getStreamFromFD(dn);switch(hn){case 0:{var Sn=rt.get();if(Sn<0)return-28;var bn;return bn=En.open(vn.path,vn.flags,0,Sn),bn.fd}case 1:case 2:return 0;case 3:return vn.flags;case 4:{var Sn=rt.get();return vn.flags|=Sn,0}case 12:{var Sn=rt.get(),Mn=0;return kt[Sn+Mn>>1]=2,0}case 13:case 14:return 0;case 16:case 8:return-28;case 9:return yr(28),-1;default:return-28}}catch(Pn){return(typeof En=="undefined"||!(Pn instanceof En.ErrnoError))&&Fn(Pn),-Pn.errno}}function Js(dn,hn,gn){try{var vn=rt.getStreamFromFD(dn);return En.read(vn,St,hn,gn)}catch(Sn){return(typeof En=="undefined"||!(Sn instanceof En.ErrnoError))&&Fn(Sn),-Sn.errno}}function Zs(dn,hn){try{return dn=rt.getStr(dn),rt.doMkdir(dn,hn)}catch(gn){return(typeof En=="undefined"||!(gn instanceof En.ErrnoError))&&Fn(gn),-gn.errno}}function eu(dn,hn,gn){rt.varargs=gn;try{var vn=rt.getStr(dn),Sn=rt.get(),bn=En.open(vn,hn,Sn);return bn.fd}catch(Mn){return(typeof En=="undefined"||!(Mn instanceof En.ErrnoError))&&Fn(Mn),-Mn.errno}}function nu(dn,hn,gn){rt.varargs=gn;try{var vn=rt.getStreamFromFD(dn);switch(hn){case 21509:case 21505:return vn.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return vn.tty?0:-59;case 21519:{if(!vn.tty)return-59;var Sn=rt.get();return Xn[Sn>>2]=0,0}case 21520:return vn.tty?-28:-59;case 21531:{var Sn=rt.get();return En.ioctl(vn,hn,Sn)}case 21523:return vn.tty?0:-59;case 21524:return vn.tty?0:-59;default:Fn("bad ioctl syscall "+hn)}}catch(bn){return(typeof En=="undefined"||!(bn instanceof En.ErrnoError))&&Fn(bn),-bn.errno}}function tu(dn,hn,gn){try{return dn=rt.getStr(dn),rt.doReadlink(dn,hn,gn)}catch(vn){return(typeof En=="undefined"||!(vn instanceof En.ErrnoError))&&Fn(vn),-vn.errno}}function ru(dn,hn){if(dn===-1||hn===0)return-28;var gn=rt.mappings[dn];if(!gn)return 0;if(hn===gn.len){var vn=En.getStream(gn.fd);rt.doMsync(dn,vn,hn,gn.flags,gn.offset),En.munmap(vn),rt.mappings[dn]=null,gn.allocated&&zt(gn.malloc)}return 0}function ou(dn,hn){try{return ru(dn,hn)}catch(gn){return(typeof En=="undefined"||!(gn instanceof En.ErrnoError))&&Fn(gn),-gn.errno}}function fo(dn){switch(dn){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+dn)}}function au(){for(var dn=new Array(256),hn=0;hn<256;++hn)dn[hn]=String.fromCharCode(hn);Yo=dn}var Yo=void 0;function At(dn){for(var hn="",gn=dn;bt[gn];)hn+=Yo[bt[gn++]];return hn}var sr={},tr={},zr={},iu=48,su=57;function po(dn){if(dn===void 0)return"_unknown";dn=dn.replace(/[^a-zA-Z0-9_]/g,"$");var hn=dn.charCodeAt(0);return hn>=iu&&hn<=su?"_"+dn:dn}function mo(dn,hn){return dn=po(dn),new Function("body","return function "+dn+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(hn)}function ho(dn,hn){var gn=mo(hn,function(vn){this.name=hn,this.message=vn;var Sn=new Error(vn).stack;Sn!==void 0&&(this.stack=this.toString()+`
`+Sn.replace(/^Error(:[^\n]*)?\n/,""))});return gn.prototype=Object.create(dn.prototype),gn.prototype.constructor=gn,gn.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},gn}var ur=void 0;function ht(dn){throw new ur(dn)}var qo=void 0;function Br(dn){throw new qo(dn)}function Wt(dn,hn,gn){dn.forEach(function(Pn){zr[Pn]=hn});function vn(Pn){var Cn=gn(Pn);Cn.length!==dn.length&&Br("Mismatched type converter count");for(var jn=0;jn<dn.length;++jn)Lt(dn[jn],Cn[jn])}var Sn=new Array(hn.length),bn=[],Mn=0;hn.forEach(function(Pn,Cn){tr.hasOwnProperty(Pn)?Sn[Cn]=tr[Pn]:(bn.push(Pn),sr.hasOwnProperty(Pn)||(sr[Pn]=[]),sr[Pn].push(function(){Sn[Cn]=tr[Pn],++Mn,Mn===bn.length&&vn(Sn)}))}),bn.length===0&&vn(Sn)}function Lt(dn,hn,gn){if(gn=gn||{},!("argPackAdvance"in hn))throw new TypeError("registerType registeredInstance requires argPackAdvance");var vn=hn.name;if(dn||ht('type "'+vn+'" must have a positive integer typeid pointer'),tr.hasOwnProperty(dn)){if(gn.ignoreDuplicateRegistrations)return;ht("Cannot register type '"+vn+"' twice")}if(tr[dn]=hn,delete zr[dn],sr.hasOwnProperty(dn)){var Sn=sr[dn];delete sr[dn],Sn.forEach(function(bn){bn()})}}function uu(dn,hn,gn,vn,Sn){var bn=fo(gn);hn=At(hn),Lt(dn,{name:hn,fromWireType:function(Mn){return!!Mn},toWireType:function(Mn,Pn){return Pn?vn:Sn},argPackAdvance:8,readValueFromPointer:function(Mn){var Pn;if(gn===1)Pn=St;else if(gn===2)Pn=kt;else if(gn===4)Pn=Xn;else throw new TypeError("Unknown boolean type size: "+hn);return this.fromWireType(Pn[Mn>>bn])},destructorFunction:null})}function lu(dn){if(!(this instanceof Vt)||!(dn instanceof Vt))return!1;for(var hn=this.$$.ptrType.registeredClass,gn=this.$$.ptr,vn=dn.$$.ptrType.registeredClass,Sn=dn.$$.ptr;hn.baseClass;)gn=hn.upcast(gn),hn=hn.baseClass;for(;vn.baseClass;)Sn=vn.upcast(Sn),vn=vn.baseClass;return hn===vn&&gn===Sn}function du(dn){return{count:dn.count,deleteScheduled:dn.deleteScheduled,preservePointerOnDelete:dn.preservePointerOnDelete,ptr:dn.ptr,ptrType:dn.ptrType,smartPtr:dn.smartPtr,smartPtrType:dn.smartPtrType}}function _o(dn){function hn(gn){return gn.$$.ptrType.registeredClass.name}ht(hn(dn)+" instance already deleted")}var go=!1;function Ko(dn){}function cu(dn){dn.smartPtr?dn.smartPtrType.rawDestructor(dn.smartPtr):dn.ptrType.registeredClass.rawDestructor(dn.ptr)}function Jo(dn){dn.count.value-=1;var hn=dn.count.value===0;hn&&cu(dn)}function Er(dn){return typeof FinalizationGroup=="undefined"?(Er=function(hn){return hn},dn):(go=new FinalizationGroup(function(hn){for(var gn=hn.next();!gn.done;gn=hn.next()){var vn=gn.value;vn.ptr?Jo(vn):console.warn("object already deleted: "+vn.ptr)}}),Er=function(hn){return go.register(hn,hn.$$,hn.$$),hn},Ko=function(hn){go.unregister(hn.$$)},Er(dn))}function fu(){if(this.$$.ptr||_o(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var dn=Er(Object.create(Object.getPrototypeOf(this),{$$:{value:du(this.$$)}}));return dn.$$.count.value+=1,dn.$$.deleteScheduled=!1,dn}function pu(){this.$$.ptr||_o(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),Ko(this),Jo(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function mu(){return!this.$$.ptr}var wr=void 0,Tr=[];function yo(){for(;Tr.length;){var dn=Tr.pop();dn.$$.deleteScheduled=!1,dn.delete()}}function hu(){return this.$$.ptr||_o(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),Tr.push(this),Tr.length===1&&wr&&wr(yo),this.$$.deleteScheduled=!0,this}function _u(){Vt.prototype.isAliasOf=lu,Vt.prototype.clone=fu,Vt.prototype.delete=pu,Vt.prototype.isDeleted=mu,Vt.prototype.deleteLater=hu}function Vt(){}var Zo={};function vo(dn,hn,gn){if(dn[hn].overloadTable===void 0){var vn=dn[hn];dn[hn]=function(){return dn[hn].overloadTable.hasOwnProperty(arguments.length)||ht("Function '"+gn+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+dn[hn].overloadTable+")!"),dn[hn].overloadTable[arguments.length].apply(this,arguments)},dn[hn].overloadTable=[],dn[hn].overloadTable[vn.argCount]=vn}}function ca(dn,hn,gn){sn.hasOwnProperty(dn)?((gn===void 0||sn[dn].overloadTable!==void 0&&sn[dn].overloadTable[gn]!==void 0)&&ht("Cannot register public name '"+dn+"' twice"),vo(sn,dn,dn),sn.hasOwnProperty(gn)&&ht("Cannot register multiple overloads of a function with the same number of arguments ("+gn+")!"),sn[dn].overloadTable[gn]=hn):(sn[dn]=hn,gn!==void 0&&(sn[dn].numArguments=gn))}function gu(dn,hn,gn,vn,Sn,bn,Mn,Pn){this.name=dn,this.constructor=hn,this.instancePrototype=gn,this.rawDestructor=vn,this.baseClass=Sn,this.getActualType=bn,this.upcast=Mn,this.downcast=Pn,this.pureVirtualFunctions=[]}function Eo(dn,hn,gn){for(;hn!==gn;)hn.upcast||ht("Expected null or instance of "+gn.name+", got an instance of "+hn.name),dn=hn.upcast(dn),hn=hn.baseClass;return dn}function yu(dn,hn){if(hn===null)return this.isReference&&ht("null is not a valid "+this.name),0;hn.$$||ht('Cannot pass "'+lr(hn)+'" as a '+this.name),hn.$$.ptr||ht("Cannot pass deleted object as a pointer of type "+this.name);var gn=hn.$$.ptrType.registeredClass,vn=Eo(hn.$$.ptr,gn,this.registeredClass);return vn}function vu(dn,hn){var gn;if(hn===null)return this.isReference&&ht("null is not a valid "+this.name),this.isSmartPointer?(gn=this.rawConstructor(),dn!==null&&dn.push(this.rawDestructor,gn),gn):0;hn.$$||ht('Cannot pass "'+lr(hn)+'" as a '+this.name),hn.$$.ptr||ht("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&hn.$$.ptrType.isConst&&ht("Cannot convert argument of type "+(hn.$$.smartPtrType?hn.$$.smartPtrType.name:hn.$$.ptrType.name)+" to parameter type "+this.name);var vn=hn.$$.ptrType.registeredClass;if(gn=Eo(hn.$$.ptr,vn,this.registeredClass),this.isSmartPointer)switch(hn.$$.smartPtr===void 0&&ht("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:hn.$$.smartPtrType===this?gn=hn.$$.smartPtr:ht("Cannot convert argument of type "+(hn.$$.smartPtrType?hn.$$.smartPtrType.name:hn.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:gn=hn.$$.smartPtr;break;case 2:if(hn.$$.smartPtrType===this)gn=hn.$$.smartPtr;else{var Sn=hn.clone();gn=this.rawShare(gn,So(function(){Sn.delete()})),dn!==null&&dn.push(this.rawDestructor,gn)}break;default:ht("Unsupporting sharing policy")}return gn}function Eu(dn,hn){if(hn===null)return this.isReference&&ht("null is not a valid "+this.name),0;hn.$$||ht('Cannot pass "'+lr(hn)+'" as a '+this.name),hn.$$.ptr||ht("Cannot pass deleted object as a pointer of type "+this.name),hn.$$.ptrType.isConst&&ht("Cannot convert argument of type "+hn.$$.ptrType.name+" to parameter type "+this.name);var gn=hn.$$.ptrType.registeredClass,vn=Eo(hn.$$.ptr,gn,this.registeredClass);return vn}function Wr(dn){return this.fromWireType(Ft[dn>>2])}function wu(dn){return this.rawGetPointee&&(dn=this.rawGetPointee(dn)),dn}function Tu(dn){this.rawDestructor&&this.rawDestructor(dn)}function Su(dn){dn!==null&&dn.delete()}function _a(dn,hn,gn){if(hn===gn)return dn;if(gn.baseClass===void 0)return null;var vn=_a(dn,hn,gn.baseClass);return vn===null?null:gn.downcast(vn)}function bu(){return Object.keys(Sr).length}function Ou(){var dn=[];for(var hn in Sr)Sr.hasOwnProperty(hn)&&dn.push(Sr[hn]);return dn}function Pu(dn){wr=dn,Tr.length&&wr&&wr(yo)}function Mu(){sn.getInheritedInstanceCount=bu,sn.getLiveInheritedInstances=Ou,sn.flushPendingDeletes=yo,sn.setDelayFunction=Pu}var Sr={};function Au(dn,hn){for(hn===void 0&&ht("ptr should not be undefined");dn.baseClass;)hn=dn.upcast(hn),dn=dn.baseClass;return hn}function Du(dn,hn){return hn=Au(dn,hn),Sr[hn]}function Vr(dn,hn){(!hn.ptrType||!hn.ptr)&&Br("makeClassHandle requires ptr and ptrType");var gn=!!hn.smartPtrType,vn=!!hn.smartPtr;return gn!==vn&&Br("Both smartPtrType and smartPtr must be specified"),hn.count={value:1},Er(Object.create(dn,{$$:{value:hn}}))}function Ru(dn){var hn=this.getPointee(dn);if(!hn)return this.destructor(dn),null;var gn=Du(this.registeredClass,hn);if(gn!==void 0){if(gn.$$.count.value===0)return gn.$$.ptr=hn,gn.$$.smartPtr=dn,gn.clone();var vn=gn.clone();return this.destructor(dn),vn}function Sn(){return this.isSmartPointer?Vr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:hn,smartPtrType:this,smartPtr:dn}):Vr(this.registeredClass.instancePrototype,{ptrType:this,ptr:dn})}var bn=this.registeredClass.getActualType(hn),Mn=Zo[bn];if(!Mn)return Sn.call(this);var Pn;this.isConst?Pn=Mn.constPointerType:Pn=Mn.pointerType;var Cn=_a(hn,this.registeredClass,Pn.registeredClass);return Cn===null?Sn.call(this):this.isSmartPointer?Vr(Pn.registeredClass.instancePrototype,{ptrType:Pn,ptr:Cn,smartPtrType:this,smartPtr:dn}):Vr(Pn.registeredClass.instancePrototype,{ptrType:Pn,ptr:Cn})}function ku(){Xt.prototype.getPointee=wu,Xt.prototype.destructor=Tu,Xt.prototype.argPackAdvance=8,Xt.prototype.readValueFromPointer=Wr,Xt.prototype.deleteObject=Su,Xt.prototype.fromWireType=Ru}function Xt(dn,hn,gn,vn,Sn,bn,Mn,Pn,Cn,jn,Hn){this.name=dn,this.registeredClass=hn,this.isReference=gn,this.isConst=vn,this.isSmartPointer=Sn,this.pointeeType=bn,this.sharingPolicy=Mn,this.rawGetPointee=Pn,this.rawConstructor=Cn,this.rawShare=jn,this.rawDestructor=Hn,!Sn&&hn.baseClass===void 0?vn?(this.toWireType=yu,this.destructorFunction=null):(this.toWireType=Eu,this.destructorFunction=null):this.toWireType=vu}function ga(dn,hn,gn){sn.hasOwnProperty(dn)||Br("Replacing nonexistant public symbol"),sn[dn].overloadTable!==void 0&&gn!==void 0?sn[dn].overloadTable[gn]=hn:(sn[dn]=hn,sn[dn].argCount=gn)}function Qt(dn,hn){dn=At(dn);function gn(bn){for(var Mn=[],Pn=1;Pn<dn.length;++Pn)Mn.push("a"+Pn);var Cn="dynCall_"+dn+"_"+hn,jn="return function "+Cn+"("+Mn.join(", ")+`) {
`;return jn+="    return dynCall(rawFunction"+(Mn.length?", ":"")+Mn.join(", ")+`);
`,jn+=`};
`,new Function("dynCall","rawFunction",jn)(bn,hn)}var vn=sn["dynCall_"+dn],Sn=gn(vn);return typeof Sn!="function"&&ht("unknown function pointer with signature "+dn+": "+hn),Sn}var ya=void 0;function _i(dn){var hn=zl(dn),gn=At(hn);return zt(hn),gn}function br(dn,hn){var gn=[],vn={};function Sn(bn){if(!vn[bn]&&!tr[bn]){if(zr[bn]){zr[bn].forEach(Sn);return}gn.push(bn),vn[bn]=!0}}throw hn.forEach(Sn),new ya(dn+": "+gn.map(_i).join([", "]))}function Fu(dn,hn,gn,vn,Sn,bn,Mn,Pn,Cn,jn,Hn,Qn,Bn){Hn=At(Hn),bn=Qt(Sn,bn),Pn&&(Pn=Qt(Mn,Pn)),jn&&(jn=Qt(Cn,jn)),Bn=Qt(Qn,Bn);var Wn=po(Hn);ca(Wn,function(){br("Cannot construct "+Hn+" due to unbound types",[vn])}),Wt([dn,hn,gn],vn?[vn]:[],function(Gn){Gn=Gn[0];var ot,ut;vn?(ot=Gn.registeredClass,ut=ot.instancePrototype):ut=Vt.prototype;var ft=mo(Wn,function(){if(Object.getPrototypeOf(this)!==Vn)throw new ur("Use 'new' to construct "+Hn);if(Kn.constructor_body===void 0)throw new ur(Hn+" has no accessible constructor");var Ot=Kn.constructor_body[arguments.length];if(Ot===void 0)throw new ur("Tried to invoke ctor of "+Hn+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(Kn.constructor_body).toString()+") parameters instead!");return Ot.apply(this,arguments)}),Vn=Object.create(ut,{constructor:{value:ft}});ft.prototype=Vn;var Kn=new gu(Hn,ft,Vn,Bn,ot,bn,Pn,jn),it=new Xt(Hn,Kn,!0,!1,!1),st=new Xt(Hn+"*",Kn,!1,!1,!1),dt=new Xt(Hn+" const*",Kn,!1,!0,!1);return Zo[dn]={pointerType:st,constPointerType:dt},ga(Wn,ft),[it,st,dt]})}function xu(dn,hn){if(!(dn instanceof Function))throw new TypeError("new_ called with constructor type "+typeof dn+" which is not a function");var gn=mo(dn.name||"unknownFunctionName",function(){});gn.prototype=dn.prototype;var vn=new gn,Sn=dn.apply(vn,hn);return Sn instanceof Object?Sn:vn}function es(dn){for(;dn.length;){var hn=dn.pop(),gn=dn.pop();gn(hn)}}function wo(dn,hn,gn,vn,Sn){var bn=hn.length;bn<2&&ht("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Mn=hn[1]!==null&&gn!==null,Pn=!1,Cn=1;Cn<hn.length;++Cn)if(hn[Cn]!==null&&hn[Cn].destructorFunction===void 0){Pn=!0;break}for(var jn=hn[0].name!=="void",Hn="",Qn="",Cn=0;Cn<bn-2;++Cn)Hn+=(Cn!==0?", ":"")+"arg"+Cn,Qn+=(Cn!==0?", ":"")+"arg"+Cn+"Wired";var Bn="return function "+po(dn)+"("+Hn+`) {
if (arguments.length !== `+(bn-2)+`) {
throwBindingError('function `+dn+" called with ' + arguments.length + ' arguments, expected "+(bn-2)+` args!');
}
`;Pn&&(Bn+=`var destructors = [];
`);var Wn=Pn?"destructors":"null",Gn=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],ot=[ht,vn,Sn,es,hn[0],hn[1]];Mn&&(Bn+="var thisWired = classParam.toWireType("+Wn+`, this);
`);for(var Cn=0;Cn<bn-2;++Cn)Bn+="var arg"+Cn+"Wired = argType"+Cn+".toWireType("+Wn+", arg"+Cn+"); // "+hn[Cn+2].name+`
`,Gn.push("argType"+Cn),ot.push(hn[Cn+2]);if(Mn&&(Qn="thisWired"+(Qn.length>0?", ":"")+Qn),Bn+=(jn?"var rv = ":"")+"invoker(fn"+(Qn.length>0?", ":"")+Qn+`);
`,Pn)Bn+=`runDestructors(destructors);
`;else for(var Cn=Mn?1:2;Cn<hn.length;++Cn){var ut=Cn===1?"thisWired":"arg"+(Cn-2)+"Wired";hn[Cn].destructorFunction!==null&&(Bn+=ut+"_dtor("+ut+"); // "+hn[Cn].name+`
`,Gn.push(ut+"_dtor"),ot.push(hn[Cn].destructorFunction))}jn&&(Bn+=`var ret = retType.fromWireType(rv);
return ret;
`),Bn+=`}
`,Gn.push(Bn);var ft=xu(Function,Gn).apply(null,ot);return ft}function Qr(dn,hn){for(var gn=[],vn=0;vn<dn;vn++)gn.push(Xn[(hn>>2)+vn]);return gn}function Cu(dn,hn,gn,vn,Sn,bn,Mn){var Pn=Qr(gn,vn);hn=At(hn),bn=Qt(Sn,bn),Wt([],[dn],function(Cn){Cn=Cn[0];var jn=Cn.name+"."+hn;function Hn(){br("Cannot call "+jn+" due to unbound types",Pn)}var Qn=Cn.registeredClass.constructor;return Qn[hn]===void 0?(Hn.argCount=gn-1,Qn[hn]=Hn):(vo(Qn,hn,jn),Qn[hn].overloadTable[gn-1]=Hn),Wt([],Pn,function(Bn){var Wn=[Bn[0],null].concat(Bn.slice(1)),Gn=wo(jn,Wn,null,bn,Mn);return Qn[hn].overloadTable===void 0?(Gn.argCount=gn-1,Qn[hn]=Gn):Qn[hn].overloadTable[gn-1]=Gn,[]}),[]})}function Nu(dn,hn,gn,vn,Sn,bn){Rn(hn>0);var Mn=Qr(hn,gn);Sn=Qt(vn,Sn);var Pn=[bn],Cn=[];Wt([],[dn],function(jn){jn=jn[0];var Hn="constructor "+jn.name;if(jn.registeredClass.constructor_body===void 0&&(jn.registeredClass.constructor_body=[]),jn.registeredClass.constructor_body[hn-1]!==void 0)throw new ur("Cannot register multiple constructors with identical number of parameters ("+(hn-1)+") for class '"+jn.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return jn.registeredClass.constructor_body[hn-1]=function(){br("Cannot construct "+jn.name+" due to unbound types",Mn)},Wt([],Mn,function(Qn){return jn.registeredClass.constructor_body[hn-1]=function(){arguments.length!==hn-1&&ht(Hn+" called with "+arguments.length+" arguments, expected "+(hn-1)),Cn.length=0,Pn.length=hn;for(var Wn=1;Wn<hn;++Wn)Pn[Wn]=Qn[Wn].toWireType(Cn,arguments[Wn-1]);var Gn=Sn.apply(null,Pn);return es(Cn),Qn[0].fromWireType(Gn)},[]}),[]})}function Iu(dn,hn,gn,vn,Sn,bn,Mn,Pn){var Cn=Qr(gn,vn);hn=At(hn),bn=Qt(Sn,bn),Wt([],[dn],function(jn){jn=jn[0];var Hn=jn.name+"."+hn;Pn&&jn.registeredClass.pureVirtualFunctions.push(hn);function Qn(){br("Cannot call "+Hn+" due to unbound types",Cn)}var Bn=jn.registeredClass.instancePrototype,Wn=Bn[hn];return Wn===void 0||Wn.overloadTable===void 0&&Wn.className!==jn.name&&Wn.argCount===gn-2?(Qn.argCount=gn-2,Qn.className=jn.name,Bn[hn]=Qn):(vo(Bn,hn,Hn),Bn[hn].overloadTable[gn-2]=Qn),Wt([],Cn,function(Gn){var ot=wo(Hn,Gn,jn,bn,Mn);return Bn[hn].overloadTable===void 0?(ot.argCount=gn-2,Bn[hn]=ot):Bn[hn].overloadTable[gn-2]=ot,[]}),[]})}var To=[],It=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function ns(dn){dn>4&&--It[dn].refcount===0&&(It[dn]=void 0,To.push(dn))}function $u(){for(var dn=0,hn=5;hn<It.length;++hn)It[hn]!==void 0&&++dn;return dn}function Uu(){for(var dn=5;dn<It.length;++dn)if(It[dn]!==void 0)return It[dn];return null}function ju(){sn.count_emval_handles=$u,sn.get_first_emval=Uu}function So(dn){switch(dn){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var hn=To.length?To.pop():It.length;return It[hn]={refcount:1,value:dn},hn}}}function Hu(dn,hn){hn=At(hn),Lt(dn,{name:hn,fromWireType:function(gn){var vn=It[gn].value;return ns(gn),vn},toWireType:function(gn,vn){return So(vn)},argPackAdvance:8,readValueFromPointer:Wr,destructorFunction:null})}function lr(dn){if(dn===null)return"null";var hn=typeof dn;return hn==="object"||hn==="array"||hn==="function"?dn.toString():""+dn}function Lu(dn,hn){switch(hn){case 2:return function(gn){return this.fromWireType(so[gn>>2])};case 3:return function(gn){return this.fromWireType(Cr[gn>>3])};default:throw new TypeError("Unknown float type: "+dn)}}function Xu(dn,hn,gn){var vn=fo(gn);hn=At(hn),Lt(dn,{name:hn,fromWireType:function(Sn){return Sn},toWireType:function(Sn,bn){if(typeof bn!="number"&&typeof bn!="boolean")throw new TypeError('Cannot convert "'+lr(bn)+'" to '+this.name);return bn},argPackAdvance:8,readValueFromPointer:Lu(hn,vn),destructorFunction:null})}function zu(dn,hn,gn,vn,Sn,bn){var Mn=Qr(hn,gn);dn=At(dn),Sn=Qt(vn,Sn),ca(dn,function(){br("Cannot call "+dn+" due to unbound types",Mn)},hn-1),Wt([],Mn,function(Pn){var Cn=[Pn[0],null].concat(Pn.slice(1));return ga(dn,wo(dn,Cn,null,Sn,bn),hn-1),[]})}function Bu(dn,hn,gn){switch(hn){case 0:return gn?function(Sn){return St[Sn]}:function(Sn){return bt[Sn]};case 1:return gn?function(Sn){return kt[Sn>>1]}:function(Sn){return xr[Sn>>1]};case 2:return gn?function(Sn){return Xn[Sn>>2]}:function(Sn){return Ft[Sn>>2]};default:throw new TypeError("Unknown integer type: "+dn)}}function Wu(dn,hn,gn,vn,Sn){hn=At(hn),Sn===-1&&(Sn=4294967295);var bn=fo(gn),Mn=function(jn){return jn};if(vn===0){var Pn=32-8*gn;Mn=function(jn){return jn<<Pn>>>Pn}}var Cn=hn.indexOf("unsigned")!=-1;Lt(dn,{name:hn,fromWireType:Mn,toWireType:function(jn,Hn){if(typeof Hn!="number"&&typeof Hn!="boolean")throw new TypeError('Cannot convert "'+lr(Hn)+'" to '+this.name);if(Hn<vn||Hn>Sn)throw new TypeError('Passing a number "'+lr(Hn)+'" from JS side to C/C++ side to an argument of type "'+hn+'", which is outside the valid range ['+vn+", "+Sn+"]!");return Cn?Hn>>>0:Hn|0},argPackAdvance:8,readValueFromPointer:Bu(hn,bn,vn!==0),destructorFunction:null})}function Vu(dn,hn,gn){var vn=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Sn=vn[hn];function bn(Mn){Mn=Mn>>2;var Pn=Ft,Cn=Pn[Mn],jn=Pn[Mn+1];return new Sn(Jt,jn,Cn)}gn=At(gn),Lt(dn,{name:gn,fromWireType:bn,argPackAdvance:8,readValueFromPointer:bn},{ignoreDuplicateRegistrations:!0})}function Qu(dn,hn){hn=At(hn);var gn=hn==="std::string";Lt(dn,{name:hn,fromWireType:function(vn){var Sn=Ft[vn>>2],bn;if(gn){var Mn=bt[vn+4+Sn],Pn=0;Mn!=0&&(Pn=Mn,bt[vn+4+Sn]=0);for(var Cn=vn+4,jn=0;jn<=Sn;++jn){var Hn=vn+4+jn;if(bt[Hn]==0){var Qn=ct(Cn);bn===void 0?bn=Qn:(bn+=String.fromCharCode(0),bn+=Qn),Cn=Hn+1}}Pn!=0&&(bt[vn+4+Sn]=Pn)}else{for(var Bn=new Array(Sn),jn=0;jn<Sn;++jn)Bn[jn]=String.fromCharCode(bt[vn+4+jn]);bn=Bn.join("")}return zt(vn),bn},toWireType:function(vn,Sn){Sn instanceof ArrayBuffer&&(Sn=new Uint8Array(Sn));var bn,Mn=typeof Sn=="string";Mn||Sn instanceof Uint8Array||Sn instanceof Uint8ClampedArray||Sn instanceof Int8Array||ht("Cannot pass non-string to std::string"),gn&&Mn?bn=function(){return Ct(Sn)}:bn=function(){return Sn.length};var Pn=bn(),Cn=$t(4+Pn+1);if(Ft[Cn>>2]=Pn,gn&&Mn)gt(Sn,Cn+4,Pn+1);else if(Mn)for(var jn=0;jn<Pn;++jn){var Hn=Sn.charCodeAt(jn);Hn>255&&(zt(Cn),ht("String has UTF-16 code units that do not fit in 8 bits")),bt[Cn+4+jn]=Hn}else for(var jn=0;jn<Pn;++jn)bt[Cn+4+jn]=Sn[jn];return vn!==null&&vn.push(zt,Cn),Cn},argPackAdvance:8,readValueFromPointer:Wr,destructorFunction:function(vn){zt(vn)}})}function Gu(dn,hn,gn){gn=At(gn);var vn,Sn,bn,Mn,Pn;hn===2?(vn=mr,Sn=Ht,Mn=or,bn=function(){return xr},Pn=1):hn===4&&(vn=gs,Sn=ys,Mn=vs,bn=function(){return Ft},Pn=2),Lt(dn,{name:gn,fromWireType:function(Cn){var jn=Ft[Cn>>2],Hn=bn(),Qn,Bn=Hn[Cn+4+jn*hn>>Pn],Wn=0;Bn!=0&&(Wn=Bn,Hn[Cn+4+jn*hn>>Pn]=0);for(var Gn=Cn+4,ot=0;ot<=jn;++ot){var ut=Cn+4+ot*hn;if(Hn[ut>>Pn]==0){var ft=vn(Gn);Qn===void 0?Qn=ft:(Qn+=String.fromCharCode(0),Qn+=ft),Gn=ut+hn}}return Wn!=0&&(Hn[Cn+4+jn*hn>>Pn]=Wn),zt(Cn),Qn},toWireType:function(Cn,jn){typeof jn!="string"&&ht("Cannot pass non-string to C++ string type "+gn);var Hn=Mn(jn),Qn=$t(4+Hn+hn);return Ft[Qn>>2]=Hn>>Pn,Sn(jn,Qn+4,Hn+hn),Cn!==null&&Cn.push(zt,Qn),Qn},argPackAdvance:8,readValueFromPointer:Wr,destructorFunction:function(Cn){zt(Cn)}})}function Yu(dn,hn){hn=At(hn),Lt(dn,{isVoid:!0,name:hn,argPackAdvance:0,fromWireType:function(){},toWireType:function(gn,vn){}})}function qu(dn){dn>4&&(It[dn].refcount+=1)}function Ku(dn,hn){var gn=tr[dn];return gn===void 0&&ht(hn+" has unknown type "+_i(dn)),gn}function Ju(dn,hn){dn=Ku(dn,"_emval_take_value");var gn=dn.readValueFromPointer(hn);return So(gn)}function Zu(){Fn()}function _l(dn,hn,gn){bt.copyWithin(dn,hn,hn+gn)}function yl(){return bt.length}function vl(dn){try{return et.grow(dn-Jt.byteLength+65535>>16),No(et.buffer),1}catch(hn){console.error("emscripten_realloc_buffer: Attempted to grow heap from "+Jt.byteLength+" bytes to "+dn+" bytes, but got error: "+hn)}}function El(dn){var hn=yl();Rn(dn>hn);var gn=65536,vn=2147483648-gn;if(dn>vn)return kn("Cannot enlarge memory, asked to go up to "+dn+" bytes, but the limit is "+vn+" bytes!"),!1;for(var Sn=16777216,bn=1;bn<=4;bn*=2){var Mn=hn*(1+.2/bn);Mn=Math.min(Mn,dn+100663296);var Pn=Math.min(vn,ws(Math.max(Sn,dn,Mn),gn)),Cn=vl(Pn);if(Cn)return!0}return kn("Failed to grow the heap from "+hn+" bytes to "+Pn+" bytes, not enough memory!"),!1}var ts={};function wl(){return _n||"./this.program"}function Or(){if(!Or.strings){var dn={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:wl()};for(var hn in ts)dn[hn]=ts[hn];var gn=[];for(var hn in dn)gn.push(hn+"="+dn[hn]);Or.strings=gn}return Or.strings}function Tl(dn,hn){var gn=Or(),vn=0;return gn.forEach(function(Sn,bn){var Mn=hn+vn;Xn[dn+bn*4>>2]=Mn,Es(Sn,Mn),vn+=Sn.length+1}),0}function Sl(dn,hn){var gn=Or();Xn[dn>>2]=gn.length;var vn=0;return gn.forEach(function(Sn){vn+=Sn.length+1}),Xn[hn>>2]=vn,0}function Ol(dn){try{var hn=rt.getStreamFromFD(dn);return En.close(hn),0}catch(gn){return(typeof En=="undefined"||!(gn instanceof En.ErrnoError))&&Fn(gn),gn.errno}}function Pl(dn,hn){try{var gn=rt.getStreamFromFD(dn),vn=gn.tty?2:En.isDir(gn.mode)?3:En.isLink(gn.mode)?7:4;return St[hn>>0]=vn,0}catch(Sn){return(typeof En=="undefined"||!(Sn instanceof En.ErrnoError))&&Fn(Sn),Sn.errno}}function Ml(dn,hn,gn,vn){try{var Sn=rt.getStreamFromFD(dn),bn=rt.doReadv(Sn,hn,gn);return Xn[vn>>2]=bn,0}catch(Mn){return(typeof En=="undefined"||!(Mn instanceof En.ErrnoError))&&Fn(Mn),Mn.errno}}function Al(dn,hn,gn,vn,Sn){try{var bn=rt.getStreamFromFD(dn),Mn=4294967296,Pn=gn*Mn+(hn>>>0),Cn=9007199254740992;return Pn<=-Cn||Pn>=Cn?-61:(En.llseek(bn,Pn,vn),Nt=[bn.position>>>0,(Tt=bn.position,+$r(Tt)>=1?Tt>0?(Hr(+jr(Tt/4294967296),4294967295)|0)>>>0:~~+Ur((Tt-+(~~Tt>>>0))/4294967296)>>>0:0)],Xn[Sn>>2]=Nt[0],Xn[Sn+4>>2]=Nt[1],bn.getdents&&Pn===0&&vn===0&&(bn.getdents=null),0)}catch(jn){return(typeof En=="undefined"||!(jn instanceof En.ErrnoError))&&Fn(jn),jn.errno}}function Dl(dn,hn,gn,vn){try{var Sn=rt.getStreamFromFD(dn),bn=rt.doWritev(Sn,hn,gn);return Xn[vn>>2]=bn,0}catch(Mn){return(typeof En=="undefined"||!(Mn instanceof En.ErrnoError))&&Fn(Mn),Mn.errno}}function Rl(dn){dn=ct(dn);var hn=$t(20),gn=$t(dn.length+1);gt(dn,gn,dn.length+1),Xn[hn>>2]=gn;var vn=$t(4);Xn[vn>>2]=0,Xn[hn+4>>2]=vn;var Sn=2;Xn[hn+8>>2]=Sn,Xn[hn+12>>2]=4;var bn=$t(12);return Xn[bn>>2]=bn+8,Xn[bn+4>>2]=0,Xn[bn+8>>2]=co(Mt.lookup_name(dn)),Xn[hn+16>>2]=bn,hn}function Fl(dn){var hn=Date.now();return Xn[dn>>2]=hn/1e3|0,Xn[dn+4>>2]=hn%1e3*1e3|0,0}var xl=2400384;gt("GMT",2400432,4);function bo(){if(bo.called)return;bo.called=!0,Xn[Xl()>>2]=new Date().getTimezoneOffset()*60;var dn=new Date().getFullYear(),hn=new Date(dn,0,1),gn=new Date(dn,6,1);Xn[Ll()>>2]=Number(hn.getTimezoneOffset()!=gn.getTimezoneOffset());function vn(Cn){var jn=Cn.toTimeString().match(/\(([A-Za-z ]+)\)$/);return jn?jn[1]:"GMT"}var Sn=vn(hn),bn=vn(gn),Mn=Fo(Sn),Pn=Fo(bn);gn.getTimezoneOffset()<hn.getTimezoneOffset()?(Xn[Mr()>>2]=Mn,Xn[Mr()+4>>2]=Pn):(Xn[Mr()>>2]=Pn,Xn[Mr()+4>>2]=Mn)}function Cl(dn,hn){bo();var gn=new Date(Xn[dn>>2]*1e3);Xn[hn>>2]=gn.getSeconds(),Xn[hn+4>>2]=gn.getMinutes(),Xn[hn+8>>2]=gn.getHours(),Xn[hn+12>>2]=gn.getDate(),Xn[hn+16>>2]=gn.getMonth(),Xn[hn+20>>2]=gn.getFullYear()-1900,Xn[hn+24>>2]=gn.getDay();var vn=new Date(gn.getFullYear(),0,1),Sn=(gn.getTime()-vn.getTime())/(1e3*60*60*24)|0;Xn[hn+28>>2]=Sn,Xn[hn+36>>2]=-(gn.getTimezoneOffset()*60);var bn=new Date(gn.getFullYear(),6,1).getTimezoneOffset(),Mn=vn.getTimezoneOffset(),Pn=(bn!=Mn&&gn.getTimezoneOffset()==Math.min(Mn,bn))|0;Xn[hn+32>>2]=Pn;var Cn=Xn[Mr()+(Pn?4:0)>>2];return Xn[hn+40>>2]=Cn,hn}function Nl(dn){return Cl(dn,xl)}function Il(dn){}function Gr(dn){return dn%4===0&&(dn%100!==0||dn%400===0)}function Oo(dn,hn){for(var gn=0,vn=0;vn<=hn;gn+=dn[vn++]);return gn}var Yr=[31,29,31,30,31,30,31,31,30,31,30,31],qr=[31,28,31,30,31,30,31,31,30,31,30,31];function Kr(dn,hn){for(var gn=new Date(dn.getTime());hn>0;){var vn=Gr(gn.getFullYear()),Sn=gn.getMonth(),bn=(vn?Yr:qr)[Sn];if(hn>bn-gn.getDate())hn-=bn-gn.getDate()+1,gn.setDate(1),Sn<11?gn.setMonth(Sn+1):(gn.setMonth(0),gn.setFullYear(gn.getFullYear()+1));else return gn.setDate(gn.getDate()+hn),gn}return gn}function rs(dn,hn,gn,vn){var Sn=Xn[vn+40>>2],bn={tm_sec:Xn[vn>>2],tm_min:Xn[vn+4>>2],tm_hour:Xn[vn+8>>2],tm_mday:Xn[vn+12>>2],tm_mon:Xn[vn+16>>2],tm_year:Xn[vn+20>>2],tm_wday:Xn[vn+24>>2],tm_yday:Xn[vn+28>>2],tm_isdst:Xn[vn+32>>2],tm_gmtoff:Xn[vn+36>>2],tm_zone:Sn?ct(Sn):""},Mn=ct(gn),Pn={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var Cn in Pn)Mn=Mn.replace(new RegExp(Cn,"g"),Pn[Cn]);var jn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Hn=["January","February","March","April","May","June","July","August","September","October","November","December"];function Qn(Vn,Kn,it){for(var st=typeof Vn=="number"?Vn.toString():Vn||"";st.length<Kn;)st=it[0]+st;return st}function Bn(Vn,Kn){return Qn(Vn,Kn,"0")}function Wn(Vn,Kn){function it(dt){return dt<0?-1:dt>0?1:0}var st;return(st=it(Vn.getFullYear()-Kn.getFullYear()))===0&&(st=it(Vn.getMonth()-Kn.getMonth()))===0&&(st=it(Vn.getDate()-Kn.getDate())),st}function Gn(Vn){switch(Vn.getDay()){case 0:return new Date(Vn.getFullYear()-1,11,29);case 1:return Vn;case 2:return new Date(Vn.getFullYear(),0,3);case 3:return new Date(Vn.getFullYear(),0,2);case 4:return new Date(Vn.getFullYear(),0,1);case 5:return new Date(Vn.getFullYear()-1,11,31);case 6:return new Date(Vn.getFullYear()-1,11,30)}}function ot(Vn){var Kn=Kr(new Date(Vn.tm_year+1900,0,1),Vn.tm_yday),it=new Date(Kn.getFullYear(),0,4),st=new Date(Kn.getFullYear()+1,0,4),dt=Gn(it),Ot=Gn(st);return Wn(dt,Kn)<=0?Wn(Ot,Kn)<=0?Kn.getFullYear()+1:Kn.getFullYear():Kn.getFullYear()-1}var ut={"%a":function(Vn){return jn[Vn.tm_wday].substring(0,3)},"%A":function(Vn){return jn[Vn.tm_wday]},"%b":function(Vn){return Hn[Vn.tm_mon].substring(0,3)},"%B":function(Vn){return Hn[Vn.tm_mon]},"%C":function(Vn){var Kn=Vn.tm_year+1900;return Bn(Kn/100|0,2)},"%d":function(Vn){return Bn(Vn.tm_mday,2)},"%e":function(Vn){return Qn(Vn.tm_mday,2," ")},"%g":function(Vn){return ot(Vn).toString().substring(2)},"%G":function(Vn){return ot(Vn)},"%H":function(Vn){return Bn(Vn.tm_hour,2)},"%I":function(Vn){var Kn=Vn.tm_hour;return Kn==0?Kn=12:Kn>12&&(Kn-=12),Bn(Kn,2)},"%j":function(Vn){return Bn(Vn.tm_mday+Oo(Gr(Vn.tm_year+1900)?Yr:qr,Vn.tm_mon-1),3)},"%m":function(Vn){return Bn(Vn.tm_mon+1,2)},"%M":function(Vn){return Bn(Vn.tm_min,2)},"%n":function(){return`
`},"%p":function(Vn){return Vn.tm_hour>=0&&Vn.tm_hour<12?"AM":"PM"},"%S":function(Vn){return Bn(Vn.tm_sec,2)},"%t":function(){return"	"},"%u":function(Vn){return Vn.tm_wday||7},"%U":function(Vn){var Kn=new Date(Vn.tm_year+1900,0,1),it=Kn.getDay()===0?Kn:Kr(Kn,7-Kn.getDay()),st=new Date(Vn.tm_year+1900,Vn.tm_mon,Vn.tm_mday);if(Wn(it,st)<0){var dt=Oo(Gr(st.getFullYear())?Yr:qr,st.getMonth()-1)-31,Ot=31-it.getDate(),Dt=Ot+dt+st.getDate();return Bn(Math.ceil(Dt/7),2)}return Wn(it,Kn)===0?"01":"00"},"%V":function(Vn){var Kn=new Date(Vn.tm_year+1900,0,4),it=new Date(Vn.tm_year+1901,0,4),st=Gn(Kn),dt=Gn(it),Ot=Kr(new Date(Vn.tm_year+1900,0,1),Vn.tm_yday);if(Wn(Ot,st)<0)return"53";if(Wn(dt,Ot)<=0)return"01";var Dt;return st.getFullYear()<Vn.tm_year+1900?Dt=Vn.tm_yday+32-st.getDate():Dt=Vn.tm_yday+1-st.getDate(),Bn(Math.ceil(Dt/7),2)},"%w":function(Vn){return Vn.tm_wday},"%W":function(Vn){var Kn=new Date(Vn.tm_year,0,1),it=Kn.getDay()===1?Kn:Kr(Kn,Kn.getDay()===0?1:7-Kn.getDay()+1),st=new Date(Vn.tm_year+1900,Vn.tm_mon,Vn.tm_mday);if(Wn(it,st)<0){var dt=Oo(Gr(st.getFullYear())?Yr:qr,st.getMonth()-1)-31,Ot=31-it.getDate(),Dt=Ot+dt+st.getDate();return Bn(Math.ceil(Dt/7),2)}return Wn(it,Kn)===0?"01":"00"},"%y":function(Vn){return(Vn.tm_year+1900).toString().substring(2)},"%Y":function(Vn){return Vn.tm_year+1900},"%z":function(Vn){var Kn=Vn.tm_gmtoff,it=Kn>=0;return Kn=Math.abs(Kn)/60,Kn=Kn/60*100+Kn%60,(it?"+":"-")+String("0000"+Kn).slice(-4)},"%Z":function(Vn){return Vn.tm_zone},"%%":function(){return"%"}};for(var Cn in ut)Mn.indexOf(Cn)>=0&&(Mn=Mn.replace(new RegExp(Cn,"g"),ut[Cn](bn)));var ft=Pr(Mn,!1);return ft.length>hn?0:(xo(ft,dn),ft.length-1)}function $l(dn,hn,gn,vn){return rs(dn,hn,gn,vn)}function Ul(dn){var hn=Date.now()/1e3|0;return dn&&(Xn[dn>>2]=hn),hn}function Jr(dn,hn){Jr.array||(Jr.array=[]);var gn=Jr.array;gn.length=0;for(var vn;vn=bt[dn++];)vn===100||vn===102?(hn=hn+7&-8,gn.push(Cr[hn>>3]),hn+=8):vn===105?(hn=hn+3&-4,gn.push(Xn[hn>>2]),hn+=4):Fn("unexpected char in asm const signature "+vn);return gn}var os=function(dn,hn,gn,vn){dn||(dn=this),this.parent=dn,this.mount=dn.mount,this.mounted=null,this.id=En.nextInode++,this.name=hn,this.mode=gn,this.node_ops={},this.stream_ops={},this.rdev=vn},Zr=365,eo=146;Object.defineProperties(os.prototype,{read:{get:function(){return(this.mode&Zr)===Zr},set:function(dn){dn?this.mode|=Zr:this.mode&=~Zr}},write:{get:function(){return(this.mode&eo)===eo},set:function(dn){dn?this.mode|=eo:this.mode&=~eo}},isFolder:{get:function(){return En.isDir(this.mode)}},isDevice:{get:function(){return En.isChrdev(this.mode)}}}),En.FSNode=os,En.staticInit(),sn.FS_createFolder=En.createFolder,sn.FS_createPath=En.createPath,sn.FS_createDataFile=En.createDataFile,sn.FS_createPreloadedFile=En.createPreloadedFile,sn.FS_createLazyFile=En.createLazyFile,sn.FS_createLink=En.createLink,sn.FS_createDevice=En.createDevice,sn.FS_unlink=En.unlink,au(),ur=sn.BindingError=ho(Error,"BindingError"),qo=sn.InternalError=ho(Error,"InternalError"),_u(),ku(),Mu(),ya=sn.UnboundTypeError=ho(Error,"UnboundTypeError"),ju();function Pr(dn,hn,gn){var vn=gn>0?gn:Ct(dn)+1,Sn=new Array(vn),bn=_t(dn,Sn,0,Sn.length);return hn&&(Sn.length=bn),Sn}var as={__cxa_allocate_exception:js,__cxa_throw:Hs,__handle_stack_overflow:Ls,__map_file:Xs,__syscall102:Ws,__syscall12:Vs,__syscall142:Qs,__syscall183:Gs,__syscall195:Ys,__syscall197:qs,__syscall221:Ks,__syscall3:Js,__syscall39:Zs,__syscall5:eu,__syscall54:nu,__syscall85:tu,__syscall91:ou,_embind_register_bool:uu,_embind_register_class:Fu,_embind_register_class_class_function:Cu,_embind_register_class_constructor:Nu,_embind_register_class_function:Iu,_embind_register_emval:Hu,_embind_register_float:Xu,_embind_register_function:zu,_embind_register_integer:Wu,_embind_register_memory_view:Vu,_embind_register_std_string:Qu,_embind_register_std_wstring:Gu,_embind_register_void:Yu,_emval_decref:ns,_emval_incref:qu,_emval_take_value:Ju,abort:Zu,connectMemory:Is,emscripten_asm_const_iii:Ns,emscripten_memcpy_big:_l,emscripten_resize_heap:El,environ_get:Tl,environ_sizes_get:Sl,fd_close:Ol,fd_fdstat_get:Pl,fd_read:Ml,fd_seek:Al,fd_write:Dl,gethostbyname:Rl,gettimeofday:Fl,localtime:Nl,memory:et,setTempRet0:Il,strftime:rs,strftime_l:$l,table:at,time:Ul},is=xs();sn.asm=is;var Hl=sn.___wasm_call_ctors=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.__wasm_call_ctors.apply(null,arguments)};sn._fflush=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.fflush.apply(null,arguments)},sn._expandCDSPFromString=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.expandCDSPFromString.apply(null,arguments)},sn._generateCAuxFilesFromString=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.generateCAuxFilesFromString.apply(null,arguments)},sn._freeCMemory=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.freeCMemory.apply(null,arguments)};var zt=sn._free=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.free.apply(null,arguments)};sn._getCLibFaustVersion=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.getCLibFaustVersion.apply(null,arguments)},sn._getErrorAfterException=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.getErrorAfterException.apply(null,arguments)},sn._cleanupAfterException=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.cleanupAfterException.apply(null,arguments)};var $t=sn._malloc=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.malloc.apply(null,arguments)};sn.___errno_location=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.__errno_location.apply(null,arguments)};var Po=sn._htons=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.htons.apply(null,arguments)};sn.___em_js__connectMemory=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.__em_js__connectMemory.apply(null,arguments)},sn._deleteAllWasmCDSPFactories=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.deleteAllWasmCDSPFactories.apply(null,arguments)},sn._createWasmCDSPFactoryFromString=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.createWasmCDSPFactoryFromString.apply(null,arguments)},sn._getWasmCModule=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.getWasmCModule.apply(null,arguments)},sn._getWasmCModuleSize=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.getWasmCModuleSize.apply(null,arguments)},sn._getWasmCHelpers=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.getWasmCHelpers.apply(null,arguments)},sn._freeWasmCModule=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.freeWasmCModule.apply(null,arguments)};var ss=sn._ntohs=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.ntohs.apply(null,arguments)},Mr=sn.__get_tzname=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm._get_tzname.apply(null,arguments)},Ll=sn.__get_daylight=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm._get_daylight.apply(null,arguments)},Xl=sn.__get_timezone=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm._get_timezone.apply(null,arguments)},zl=sn.___getTypeName=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.__getTypeName.apply(null,arguments)};sn.___embind_register_native_and_builtin_types=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.__embind_register_native_and_builtin_types.apply(null,arguments)},sn.___set_stack_limit=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.__set_stack_limit.apply(null,arguments)};var no=sn.stackSave=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.stackSave.apply(null,arguments)},Ar=sn.stackAlloc=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.stackAlloc.apply(null,arguments)},Mo=sn.stackRestore=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.stackRestore.apply(null,arguments)};sn.dynCall_ii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_ii.apply(null,arguments)},sn.dynCall_vi=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_vi.apply(null,arguments)},sn.dynCall_vii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_vii.apply(null,arguments)},sn.dynCall_iiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiii.apply(null,arguments)},sn.dynCall_viijii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viijii.apply(null,arguments)},sn.dynCall_viiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viiii.apply(null,arguments)},sn.dynCall_iii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iii.apply(null,arguments)},sn.dynCall_iiiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiiii.apply(null,arguments)},sn.dynCall_iiiiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiiiii.apply(null,arguments)},sn.dynCall_viddddii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viddddii.apply(null,arguments)},sn.dynCall_viddddiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viddddiii.apply(null,arguments)},sn.dynCall_viddd=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viddd.apply(null,arguments)},sn.dynCall_vidddi=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_vidddi.apply(null,arguments)},sn.dynCall_vidddd=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_vidddd.apply(null,arguments)},sn.dynCall_viddii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viddii.apply(null,arguments)},sn.dynCall_viddi=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viddi.apply(null,arguments)},sn.dynCall_viiiiddd=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viiiiddd.apply(null,arguments)},sn.dynCall_viii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viii.apply(null,arguments)},sn.dynCall_v=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_v.apply(null,arguments)},sn.dynCall_viiiffff=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viiiffff.apply(null,arguments)},sn.dynCall_viiiff=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viiiff.apply(null,arguments)},sn.dynCall_iiiiiiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiiiiiii.apply(null,arguments)},sn.dynCall_iiiiiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiiiiii.apply(null,arguments)},sn.dynCall_iiid=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiid.apply(null,arguments)},sn.dynCall_viiidddd=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viiidddd.apply(null,arguments)},sn.dynCall_viiidd=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viiidd.apply(null,arguments)},sn.dynCall_viiiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viiiii.apply(null,arguments)},sn.dynCall_di=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_di.apply(null,arguments)},sn.dynCall_vid=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_vid.apply(null,arguments)},sn.dynCall_i=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_i.apply(null,arguments)},sn.dynCall_viiif=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viiif.apply(null,arguments)},sn.dynCall_fiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_fiii.apply(null,arguments)},sn.dynCall_vidiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_vidiii.apply(null,arguments)},sn.dynCall_viif=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viif.apply(null,arguments)},sn.dynCall_fii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_fii.apply(null,arguments)},sn.dynCall_jiji=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_jiji.apply(null,arguments)},sn.dynCall_iidiiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iidiiii.apply(null,arguments)},sn.dynCall_iiiiiiiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiiiiiiii.apply(null,arguments)},sn.dynCall_iiiiij=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiiiij.apply(null,arguments)},sn.dynCall_iiiiid=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiiiid.apply(null,arguments)},sn.dynCall_iiiiijj=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiiiijj.apply(null,arguments)},sn.dynCall_iiiiiijj=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_iiiiiijj.apply(null,arguments)},sn.dynCall_viiiiii=function(){return Rn(Jn,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),Rn(!Zn,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),sn.asm.dynCall_viiiiii.apply(null,arguments)},sn.asm=is,Object.getOwnPropertyDescriptor(sn,"intArrayFromString")||(sn.intArrayFromString=function(){Fn("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"intArrayToString")||(sn.intArrayToString=function(){Fn("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ccall")||(sn.ccall=function(){Fn("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),sn.cwrap=Kt,Object.getOwnPropertyDescriptor(sn,"setValue")||(sn.setValue=function(){Fn("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getValue")||(sn.getValue=function(){Fn("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"allocate")||(sn.allocate=function(){Fn("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),sn.getMemory=pr,Object.getOwnPropertyDescriptor(sn,"UTF8ArrayToString")||(sn.UTF8ArrayToString=function(){Fn("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),sn.UTF8ToString=ct,Object.getOwnPropertyDescriptor(sn,"stringToUTF8Array")||(sn.stringToUTF8Array=function(){Fn("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),sn.stringToUTF8=gt,sn.lengthBytesUTF8=Ct,Object.getOwnPropertyDescriptor(sn,"stackTrace")||(sn.stackTrace=function(){Fn("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"addOnPreRun")||(sn.addOnPreRun=function(){Fn("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"addOnInit")||(sn.addOnInit=function(){Fn("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"addOnPreMain")||(sn.addOnPreMain=function(){Fn("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"addOnExit")||(sn.addOnExit=function(){Fn("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"addOnPostRun")||(sn.addOnPostRun=function(){Fn("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"writeStringToMemory")||(sn.writeStringToMemory=function(){Fn("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"writeArrayToMemory")||(sn.writeArrayToMemory=function(){Fn("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"writeAsciiToMemory")||(sn.writeAsciiToMemory=function(){Fn("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),sn.addRunDependency=lo,sn.removeRunDependency=Lr,sn.FS_createFolder=En.createFolder,sn.FS_createPath=En.createPath,sn.FS_createDataFile=En.createDataFile,sn.FS_createPreloadedFile=En.createPreloadedFile,sn.FS_createLazyFile=En.createLazyFile,sn.FS_createLink=En.createLink,sn.FS_createDevice=En.createDevice,sn.FS_unlink=En.unlink,Object.getOwnPropertyDescriptor(sn,"dynamicAlloc")||(sn.dynamicAlloc=function(){Fn("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"loadDynamicLibrary")||(sn.loadDynamicLibrary=function(){Fn("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"loadWebAssemblyModule")||(sn.loadWebAssemblyModule=function(){Fn("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getLEB")||(sn.getLEB=function(){Fn("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getFunctionTables")||(sn.getFunctionTables=function(){Fn("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"alignFunctionTables")||(sn.alignFunctionTables=function(){Fn("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"registerFunctions")||(sn.registerFunctions=function(){Fn("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"addFunction")||(sn.addFunction=function(){Fn("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"removeFunction")||(sn.removeFunction=function(){Fn("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getFuncWrapper")||(sn.getFuncWrapper=function(){Fn("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"prettyPrint")||(sn.prettyPrint=function(){Fn("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"makeBigInt")||(sn.makeBigInt=function(){Fn("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"dynCall")||(sn.dynCall=function(){Fn("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getCompilerSetting")||(sn.getCompilerSetting=function(){Fn("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"print")||(sn.print=function(){Fn("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"printErr")||(sn.printErr=function(){Fn("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getTempRet0")||(sn.getTempRet0=function(){Fn("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"setTempRet0")||(sn.setTempRet0=function(){Fn("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"callMain")||(sn.callMain=function(){Fn("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"abort")||(sn.abort=function(){Fn("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"stringToNewUTF8")||(sn.stringToNewUTF8=function(){Fn("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emscripten_realloc_buffer")||(sn.emscripten_realloc_buffer=function(){Fn("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ENV")||(sn.ENV=function(){Fn("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"setjmpId")||(sn.setjmpId=function(){Fn("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ERRNO_CODES")||(sn.ERRNO_CODES=function(){Fn("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ERRNO_MESSAGES")||(sn.ERRNO_MESSAGES=function(){Fn("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"DNS")||(sn.DNS=function(){Fn("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"GAI_ERRNO_MESSAGES")||(sn.GAI_ERRNO_MESSAGES=function(){Fn("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"Protocols")||(sn.Protocols=function(){Fn("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"Sockets")||(sn.Sockets=function(){Fn("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"UNWIND_CACHE")||(sn.UNWIND_CACHE=function(){Fn("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"readAsmConstArgs")||(sn.readAsmConstArgs=function(){Fn("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"jstoi_q")||(sn.jstoi_q=function(){Fn("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"jstoi_s")||(sn.jstoi_s=function(){Fn("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"PATH")||(sn.PATH=function(){Fn("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"PATH_FS")||(sn.PATH_FS=function(){Fn("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"SYSCALLS")||(sn.SYSCALLS=function(){Fn("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"syscallMmap2")||(sn.syscallMmap2=function(){Fn("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"syscallMunmap")||(sn.syscallMunmap=function(){Fn("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"JSEvents")||(sn.JSEvents=function(){Fn("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"demangle")||(sn.demangle=function(){Fn("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"demangleAll")||(sn.demangleAll=function(){Fn("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"jsStackTrace")||(sn.jsStackTrace=function(){Fn("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"stackTrace")||(sn.stackTrace=function(){Fn("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"writeI53ToI64")||(sn.writeI53ToI64=function(){Fn("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"writeI53ToI64Clamped")||(sn.writeI53ToI64Clamped=function(){Fn("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"writeI53ToI64Signaling")||(sn.writeI53ToI64Signaling=function(){Fn("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"writeI53ToU64Clamped")||(sn.writeI53ToU64Clamped=function(){Fn("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"writeI53ToU64Signaling")||(sn.writeI53ToU64Signaling=function(){Fn("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"readI53FromI64")||(sn.readI53FromI64=function(){Fn("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"readI53FromU64")||(sn.readI53FromU64=function(){Fn("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"convertI32PairToI53")||(sn.convertI32PairToI53=function(){Fn("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"convertU32PairToI53")||(sn.convertU32PairToI53=function(){Fn("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"Browser")||(sn.Browser=function(){Fn("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),sn.FS=En,Object.getOwnPropertyDescriptor(sn,"MEMFS")||(sn.MEMFS=function(){Fn("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"TTY")||(sn.TTY=function(){Fn("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"PIPEFS")||(sn.PIPEFS=function(){Fn("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"SOCKFS")||(sn.SOCKFS=function(){Fn("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"GL")||(sn.GL=function(){Fn("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emscriptenWebGLGet")||(sn.emscriptenWebGLGet=function(){Fn("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emscriptenWebGLGetTexPixelData")||(sn.emscriptenWebGLGetTexPixelData=function(){Fn("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emscriptenWebGLGetUniform")||(sn.emscriptenWebGLGetUniform=function(){Fn("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emscriptenWebGLGetVertexAttrib")||(sn.emscriptenWebGLGetVertexAttrib=function(){Fn("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"AL")||(sn.AL=function(){Fn("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"SDL")||(sn.SDL=function(){Fn("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"SDL_gfx")||(sn.SDL_gfx=function(){Fn("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"GLUT")||(sn.GLUT=function(){Fn("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"EGL")||(sn.EGL=function(){Fn("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"GLFW_Window")||(sn.GLFW_Window=function(){Fn("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"GLFW")||(sn.GLFW=function(){Fn("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"GLEW")||(sn.GLEW=function(){Fn("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"IDBStore")||(sn.IDBStore=function(){Fn("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"runAndAbortIfError")||(sn.runAndAbortIfError=function(){Fn("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emval_handle_array")||(sn.emval_handle_array=function(){Fn("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emval_free_list")||(sn.emval_free_list=function(){Fn("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emval_symbols")||(sn.emval_symbols=function(){Fn("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"init_emval")||(sn.init_emval=function(){Fn("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"count_emval_handles")||(sn.count_emval_handles=function(){Fn("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"get_first_emval")||(sn.get_first_emval=function(){Fn("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getStringOrSymbol")||(sn.getStringOrSymbol=function(){Fn("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"requireHandle")||(sn.requireHandle=function(){Fn("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emval_newers")||(sn.emval_newers=function(){Fn("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"craftEmvalAllocator")||(sn.craftEmvalAllocator=function(){Fn("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emval_get_global")||(sn.emval_get_global=function(){Fn("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"emval_methodCallers")||(sn.emval_methodCallers=function(){Fn("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"InternalError")||(sn.InternalError=function(){Fn("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"BindingError")||(sn.BindingError=function(){Fn("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"UnboundTypeError")||(sn.UnboundTypeError=function(){Fn("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"PureVirtualError")||(sn.PureVirtualError=function(){Fn("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"init_embind")||(sn.init_embind=function(){Fn("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"throwInternalError")||(sn.throwInternalError=function(){Fn("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"throwBindingError")||(sn.throwBindingError=function(){Fn("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"throwUnboundTypeError")||(sn.throwUnboundTypeError=function(){Fn("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ensureOverloadTable")||(sn.ensureOverloadTable=function(){Fn("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"exposePublicSymbol")||(sn.exposePublicSymbol=function(){Fn("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"replacePublicSymbol")||(sn.replacePublicSymbol=function(){Fn("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"extendError")||(sn.extendError=function(){Fn("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"createNamedFunction")||(sn.createNamedFunction=function(){Fn("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"registeredInstances")||(sn.registeredInstances=function(){Fn("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getBasestPointer")||(sn.getBasestPointer=function(){Fn("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"registerInheritedInstance")||(sn.registerInheritedInstance=function(){Fn("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"unregisterInheritedInstance")||(sn.unregisterInheritedInstance=function(){Fn("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getInheritedInstance")||(sn.getInheritedInstance=function(){Fn("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getInheritedInstanceCount")||(sn.getInheritedInstanceCount=function(){Fn("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getLiveInheritedInstances")||(sn.getLiveInheritedInstances=function(){Fn("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"registeredTypes")||(sn.registeredTypes=function(){Fn("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"awaitingDependencies")||(sn.awaitingDependencies=function(){Fn("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"typeDependencies")||(sn.typeDependencies=function(){Fn("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"registeredPointers")||(sn.registeredPointers=function(){Fn("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"registerType")||(sn.registerType=function(){Fn("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"whenDependentTypesAreResolved")||(sn.whenDependentTypesAreResolved=function(){Fn("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"embind_charCodes")||(sn.embind_charCodes=function(){Fn("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"embind_init_charCodes")||(sn.embind_init_charCodes=function(){Fn("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"readLatin1String")||(sn.readLatin1String=function(){Fn("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getTypeName")||(sn.getTypeName=function(){Fn("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"heap32VectorToArray")||(sn.heap32VectorToArray=function(){Fn("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"requireRegisteredType")||(sn.requireRegisteredType=function(){Fn("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"getShiftFromSize")||(sn.getShiftFromSize=function(){Fn("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"integerReadValueFromPointer")||(sn.integerReadValueFromPointer=function(){Fn("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"enumReadValueFromPointer")||(sn.enumReadValueFromPointer=function(){Fn("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"floatReadValueFromPointer")||(sn.floatReadValueFromPointer=function(){Fn("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"simpleReadValueFromPointer")||(sn.simpleReadValueFromPointer=function(){Fn("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"runDestructors")||(sn.runDestructors=function(){Fn("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"new_")||(sn.new_=function(){Fn("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"craftInvokerFunction")||(sn.craftInvokerFunction=function(){Fn("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"embind__requireFunction")||(sn.embind__requireFunction=function(){Fn("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"tupleRegistrations")||(sn.tupleRegistrations=function(){Fn("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"structRegistrations")||(sn.structRegistrations=function(){Fn("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"genericPointerToWireType")||(sn.genericPointerToWireType=function(){Fn("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"constNoSmartPtrRawPointerToWireType")||(sn.constNoSmartPtrRawPointerToWireType=function(){Fn("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"nonConstNoSmartPtrRawPointerToWireType")||(sn.nonConstNoSmartPtrRawPointerToWireType=function(){Fn("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"init_RegisteredPointer")||(sn.init_RegisteredPointer=function(){Fn("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"RegisteredPointer")||(sn.RegisteredPointer=function(){Fn("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"RegisteredPointer_getPointee")||(sn.RegisteredPointer_getPointee=function(){Fn("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"RegisteredPointer_destructor")||(sn.RegisteredPointer_destructor=function(){Fn("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"RegisteredPointer_deleteObject")||(sn.RegisteredPointer_deleteObject=function(){Fn("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"RegisteredPointer_fromWireType")||(sn.RegisteredPointer_fromWireType=function(){Fn("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"runDestructor")||(sn.runDestructor=function(){Fn("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"releaseClassHandle")||(sn.releaseClassHandle=function(){Fn("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"finalizationGroup")||(sn.finalizationGroup=function(){Fn("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"detachFinalizer_deps")||(sn.detachFinalizer_deps=function(){Fn("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"detachFinalizer")||(sn.detachFinalizer=function(){Fn("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"attachFinalizer")||(sn.attachFinalizer=function(){Fn("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"makeClassHandle")||(sn.makeClassHandle=function(){Fn("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"init_ClassHandle")||(sn.init_ClassHandle=function(){Fn("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ClassHandle")||(sn.ClassHandle=function(){Fn("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ClassHandle_isAliasOf")||(sn.ClassHandle_isAliasOf=function(){Fn("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"throwInstanceAlreadyDeleted")||(sn.throwInstanceAlreadyDeleted=function(){Fn("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ClassHandle_clone")||(sn.ClassHandle_clone=function(){Fn("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ClassHandle_delete")||(sn.ClassHandle_delete=function(){Fn("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"deletionQueue")||(sn.deletionQueue=function(){Fn("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ClassHandle_isDeleted")||(sn.ClassHandle_isDeleted=function(){Fn("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"ClassHandle_deleteLater")||(sn.ClassHandle_deleteLater=function(){Fn("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"flushPendingDeletes")||(sn.flushPendingDeletes=function(){Fn("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"delayFunction")||(sn.delayFunction=function(){Fn("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"setDelayFunction")||(sn.setDelayFunction=function(){Fn("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"RegisteredClass")||(sn.RegisteredClass=function(){Fn("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"shallowCopyInternalPointer")||(sn.shallowCopyInternalPointer=function(){Fn("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"downcastPointer")||(sn.downcastPointer=function(){Fn("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"upcastPointer")||(sn.upcastPointer=function(){Fn("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"validateThis")||(sn.validateThis=function(){Fn("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"char_0")||(sn.char_0=function(){Fn("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"char_9")||(sn.char_9=function(){Fn("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"makeLegalFunctionName")||(sn.makeLegalFunctionName=function(){Fn("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"warnOnce")||(sn.warnOnce=function(){Fn("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"stackSave")||(sn.stackSave=function(){Fn("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"stackRestore")||(sn.stackRestore=function(){Fn("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"stackAlloc")||(sn.stackAlloc=function(){Fn("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"AsciiToString")||(sn.AsciiToString=function(){Fn("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"stringToAscii")||(sn.stringToAscii=function(){Fn("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"UTF16ToString")||(sn.UTF16ToString=function(){Fn("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"stringToUTF16")||(sn.stringToUTF16=function(){Fn("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"lengthBytesUTF16")||(sn.lengthBytesUTF16=function(){Fn("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"UTF32ToString")||(sn.UTF32ToString=function(){Fn("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"stringToUTF32")||(sn.stringToUTF32=function(){Fn("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"lengthBytesUTF32")||(sn.lengthBytesUTF32=function(){Fn("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"allocateUTF8")||(sn.allocateUTF8=function(){Fn("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(sn,"allocateUTF8OnStack")||(sn.allocateUTF8OnStack=function(){Fn("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),sn.writeStackCookie=$o,sn.checkStackCookie=_r,sn.abortStackOverflow=Ss,Object.getOwnPropertyDescriptor(sn,"ALLOC_NORMAL")||Object.defineProperty(sn,"ALLOC_NORMAL",{configurable:!0,get:function(){Fn("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(sn,"ALLOC_STACK")||Object.defineProperty(sn,"ALLOC_STACK",{configurable:!0,get:function(){Fn("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(sn,"ALLOC_DYNAMIC")||Object.defineProperty(sn,"ALLOC_DYNAMIC",{configurable:!0,get:function(){Fn("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(sn,"ALLOC_NONE")||Object.defineProperty(sn,"ALLOC_NONE",{configurable:!0,get:function(){Fn("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});var Dr;sn.then=function(dn){if(Dr)dn(sn);else{var hn=sn.onRuntimeInitialized;sn.onRuntimeInitialized=function(){hn&&hn(),dn(sn)}}return sn};function Bl(dn){this.name="ExitStatus",this.message="Program terminated with exit("+dn+")",this.status=dn}gr=function dn(){Dr||Ao(),Dr||(gr=dn)};function Ao(dn){if(Zt>0||($o(),Os(),Zt>0))return;function hn(){Dr||(Dr=!0,sn.calledRun=!0,!vt&&(Ps(),Ms(),sn.onRuntimeInitialized&&sn.onRuntimeInitialized(),Rn(!sn._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),As()))}sn.setStatus?(sn.setStatus("Running..."),setTimeout(function(){setTimeout(function(){sn.setStatus("")},1),hn()},1)):hn(),_r()}if(sn.run=Ao,sn.preInit)for(typeof sn.preInit=="function"&&(sn.preInit=[sn.preInit]);sn.preInit.length>0;)sn.preInit.pop()();return Ao(),_e}}(),Sha1={};Sha1.hash=function($,_e){_e=typeof _e=="undefined"?!0:_e,_e&&($=Utf8.encode($));var sn=[1518500249,1859775393,2400959708,3395469782];$+=String.fromCharCode(128);for(var ln=$.length/4+2,mn=Math.ceil(ln/16),_n=new Array(mn),yn=0;yn<mn;yn++){_n[yn]=new Array(16);for(var Tn=0;Tn<16;Tn++)_n[yn][Tn]=$.charCodeAt(yn*64+Tn*4)<<24|$.charCodeAt(yn*64+Tn*4+1)<<16|$.charCodeAt(yn*64+Tn*4+2)<<8|$.charCodeAt(yn*64+Tn*4+3)}_n[mn-1][14]=($.length-1)*8/Math.pow(2,32),_n[mn-1][14]=Math.floor(_n[mn-1][14]),_n[mn-1][15]=($.length-1)*8&4294967295;for(var wn=1732584193,On=4023233417,Dn=2562383102,Nn=271733878,An=3285377520,In=new Array(80),Un,Ln,qn,kn,xn,yn=0;yn<mn;yn++){for(var $n=0;$n<16;$n++)In[$n]=_n[yn][$n];for(var $n=16;$n<80;$n++)In[$n]=Sha1.ROTL(In[$n-3]^In[$n-8]^In[$n-14]^In[$n-16],1);Un=wn,Ln=On,qn=Dn,kn=Nn,xn=An;for(var $n=0;$n<80;$n++){var zn=Math.floor($n/20),Yn=Sha1.ROTL(Un,5)+Sha1.f(zn,Ln,qn,kn)+xn+sn[zn]+In[$n]&4294967295;xn=kn,kn=qn,qn=Sha1.ROTL(Ln,30),Ln=Un,Un=Yn}wn=wn+Un&4294967295,On=On+Ln&4294967295,Dn=Dn+qn&4294967295,Nn=Nn+kn&4294967295,An=An+xn&4294967295}return Sha1.toHexStr(wn)+Sha1.toHexStr(On)+Sha1.toHexStr(Dn)+Sha1.toHexStr(Nn)+Sha1.toHexStr(An)};Sha1.f=function($,_e,sn,ln){switch($){case 0:return _e&sn^~_e&ln;case 1:return _e^sn^ln;case 2:return _e&sn^_e&ln^sn&ln;case 3:return _e^sn^ln}};Sha1.ROTL=function($,_e){return $<<_e|$>>>32-_e};Sha1.toHexStr=function($){for(var _e="",sn,ln=7;ln>=0;ln--)sn=$>>>ln*4&15,_e+=sn.toString(16);return _e};var Utf8={};Utf8.encode=function($){var _e=$.replace(/[\u0080-\u07ff]/g,function(sn){var ln=sn.charCodeAt(0);return String.fromCharCode(192|ln>>6,128|ln&63)});return _e=_e.replace(/[\u0800-\uffff]/g,function(sn){var ln=sn.charCodeAt(0);return String.fromCharCode(224|ln>>12,128|ln>>6&63,128|ln&63)}),_e};Utf8.decode=function($){var _e=$.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(sn){var ln=(sn.charCodeAt(0)&15)<<12|(sn.charCodeAt(1)&63)<<6|sn.charCodeAt(2)&63;return String.fromCharCode(ln)});return _e=_e.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(sn){var ln=(sn.charCodeAt(0)&31)<<6|sn.charCodeAt(1)&63;return String.fromCharCode(ln)}),_e};var readyResolver={current:void 0},readyPromise=new Promise($=>{readyResolver.current=$}),faust_module$1=FaustModule({onRuntimeInitialized:readyResolver.current});faust_module$1.lengthBytesUTF8=function($){for(var _e=0,sn=0;sn<$.length;++sn){var ln=$.charCodeAt(sn);ln>=55296&&ln<=57343&&(ln=65536+((ln&1023)<<10)|$.charCodeAt(++sn)&1023),ln<=127?++_e:ln<=2047?_e+=2:ln<=65535?_e+=3:ln<=2097151?_e+=4:ln<=67108863?_e+=5:_e+=6}return _e};var faust$1=faust$1||{};faust$1.remap=function($,_e,sn,ln,mn){return 1*($-_e)/(sn-_e)*(mn-ln)+ln};faust$1.debug=!1;faust$1.createWasmCDSPFactoryFromString=faust_module$1.cwrap("createWasmCDSPFactoryFromString","number",["number","number","number","number","number","number"]);faust$1.deleteAllWasmCDSPFactories=faust_module$1.cwrap("deleteAllWasmCDSPFactories",null,[]);faust$1.expandCDSPFromString=faust_module$1.cwrap("expandCDSPFromString","number",["number","number","number","number","number","number"]);faust$1.getCLibFaustVersion=faust_module$1.cwrap("getCLibFaustVersion","number",[]);faust$1.getWasmCModule=faust_module$1.cwrap("getWasmCModule","number",["number"]);faust$1.getWasmCModuleSize=faust_module$1.cwrap("getWasmCModuleSize","number",["number"]);faust$1.getWasmCHelpers=faust_module$1.cwrap("getWasmCHelpers","number",["number"]);faust$1.freeWasmCModule=faust_module$1.cwrap("freeWasmCModule",null,["number"]);faust$1.freeCMemory=faust_module$1.cwrap("freeCMemory",null,["number"]);faust$1.cleanupAfterException=faust_module$1.cwrap("cleanupAfterException",null,[]);faust$1.getErrorAfterException=faust_module$1.cwrap("getErrorAfterException","number",[]);faust$1.error_msg=null;faust$1.factory_number=0;faust$1.factory_table=[];faust$1.getErrorMessage=function(){return faust$1.error_msg};faust$1.getLibFaustVersion=function(){return faust_module$1.UTF8ToString(faust$1.getCLibFaustVersion())};faust$1.ab2str=function($){return $?String.fromCharCode.apply(null,new Uint8Array($)):null};faust$1.str2ab=function($){if($){for(var _e=new ArrayBuffer($.length),sn=new Uint8Array(_e),ln=0,mn=$.length;ln<mn;ln++)sn[ln]=$.charCodeAt(ln);return _e}else return null};faust$1.compileCode=function($,_e,sn,ln){var mn=faust_module$1.lengthBytesUTF8(_e)+1,_n=faust_module$1._malloc(mn),yn="FaustDSP",Tn=faust_module$1.lengthBytesUTF8(yn)+1,wn=faust_module$1._malloc(Tn),On=faust_module$1._malloc(4096);faust_module$1.stringToUTF8(yn,wn,Tn),faust_module$1.stringToUTF8(_e,_n,mn);var Dn=sn===void 0?new Array:sn;Dn.push("-cn",$);for(var Nn=4,An=faust_module$1._malloc(Dn.length*Nn),In=new Int32Array(faust_module$1.HEAP32.buffer,An,Dn.length),Un=0;Un<Dn.length;Un++){var Ln=faust_module$1.lengthBytesUTF8(Dn[Un])+1,qn=faust_module$1._malloc(Ln);faust_module$1.stringToUTF8(Dn[Un],qn,Ln),In[Un]=qn}try{var kn=faust$1.createWasmCDSPFactoryFromString(wn,_n,Dn.length,An,On,ln);if(faust$1.error_msg=faust_module$1.UTF8ToString(On),kn===0)return null;for(var xn=faust$1.getWasmCModule(kn),$n=faust$1.getWasmCModuleSize(kn),zn=new Uint8Array($n),Un=0;Un<$n;Un++)zn[Un]=faust_module$1.HEAP8[xn+Un];var Yn=faust$1.getWasmCHelpers(kn),nt=faust_module$1.UTF8ToString(Yn);faust_module$1._free(_n),faust_module$1._free(wn),faust_module$1._free(On),faust$1.freeWasmCModule(kn),In=new Int32Array(faust_module$1.HEAP32.buffer,An,Dn.length);for(var Un=0;Un<Dn.length;Un++)faust_module$1._free(In[Un]);return faust_module$1._free(An),{code:zn,code_source:_e,helpers:nt}}catch(et){return faust$1.error_msg=faust_module$1.UTF8ToString(faust$1.getErrorAfterException()),faust$1.error_msg===""&&(faust$1.error_msg=et),faust$1.cleanupAfterException(),null}};faust$1.createDSPFactoryAux=function($,_e,sn,ln){for(var mn="",_n=0;_n<_e.length;_n++)mn+=_e[_n];var yn=Sha1.hash($+(sn?"internal_memory":"external_memory")+mn,!0),Tn=faust$1.factory_table[yn];if(Tn){ln(Tn);return}var wn="mydsp"+faust$1.factory_number,On="effect"+faust$1.factory_number++,Dn="adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _; adaptor(F,G) = adapt(outputs(F),inputs(G)); dsp_code = environment{";Dn=Dn.concat($),Dn=Dn.concat("};"),Dn=Dn.concat("process = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;");var Nn=faust$1.compileCode(wn,$,_e,sn);if(Nn){var An=faust$1.compileCode(On,Dn,_e,sn);An?faust$1.readDSPFactoryFromMachineAux(wn,Nn.code,Nn.code_source,Nn.helpers,On,An.code,An.code_source,An.helpers,yn,ln):faust$1.readDSPFactoryFromMachineAux(wn,Nn.code,Nn.code_source,Nn.helpers,null,null,null,null,yn,ln)}else ln(null)};faust$1.createDSPFactory=function($,_e,sn){readyPromise.then(()=>{faust$1.createDSPFactoryAux($,_e,!0,sn)})};faust$1.ready=readyPromise;faust$1.expandDSP=function($,_e){_e.push("-lang"),_e.push("wasm");var sn=faust_module$1.lengthBytesUTF8($)+1,ln=faust_module$1._malloc(sn),mn="FaustDSP",_n=faust_module$1.lengthBytesUTF8(mn)+1,yn=faust_module$1._malloc(_n),Tn=faust_module$1._malloc(64),wn=faust_module$1._malloc(4096);faust_module$1.stringToUTF8(mn,yn,_n),faust_module$1.stringToUTF8($,ln,sn),_e=_e===void 0?new Array:_e;for(var On=4,Dn=faust_module$1._malloc(_e.length*On),Nn=new Int32Array(faust_module$1.HEAP32.buffer,Dn,_e.length),An=0;An<_e.length;An++){var In=faust_module$1.lengthBytesUTF8(_e[An])+1,Un=faust_module$1._malloc(In);faust_module$1.stringToUTF8(_e[An],Un,In),Nn[An]=Un}try{var Ln=faust$1.expandCDSPFromString(yn,ln,_e.length,Dn,Tn,wn),qn=faust_module$1.UTF8ToString(Ln),kn=faust_module$1.UTF8ToString(Tn);faust$1.error_msg=faust_module$1.UTF8ToString(wn),faust_module$1._free(ln),faust_module$1._free(yn),faust_module$1._free(Tn),faust_module$1._free(wn),faust$1.freeCMemory(Ln),Nn=new Int32Array(faust_module$1.HEAP32.buffer,Dn,_e.length);for(var An=0;An<_e.length;An++)faust_module$1._free(Nn[An]);return faust_module$1._free(Dn),qn}catch(xn){return faust$1.error_msg=faust_module$1.UTF8ToString(faust$1.getErrorAfterException()),faust$1.error_msg===""&&(faust$1.error_msg=xn),faust$1.cleanupAfterException(),null}};faust$1.writeDSPFactoryToMachine=function($){return{name:$.name,code:faust$1.ab2str($.code),code_source:$.code_source,helpers:$.helpers,name_effect:$.name_effect,code_effect:faust$1.ab2str($.code_effect),code_source_effect:$.code_source_effect,helpers_effect:$.helpers_effect}};faust$1.readDSPFactoryFromMachine=function($,_e){var sn=Sha1.hash($.code_source,!0),ln=faust$1.factory_table[sn];ln?_e(ln):faust$1.readDSPFactoryFromMachineAux($.name,faust$1.str2ab($.code),$.code_source,$.helpers,$.name_effect,faust$1.str2ab($.code_effect),$.code_source_effect,$.helpers_effect,sn,_e)};faust$1.readDSPFactoryFromMachineAux=function(factory_name1,factory_code1,factory_code_source1,helpers_code1,factory_name2,factory_code2,factory_code_source2,helpers_code2,sha_key,callback){WebAssembly.compile(factory_code1).then(module=>{var factory={};factory.polyphony=[],factory.code=factory_code1,factory.code_source=factory_code_source1,factory.helpers=helpers_code1,factory.module=module;var jsToEval=helpers_code1+`
return [getJSON`+factory_name1+", getBase64Code"+factory_name1+"];",evalResult=new Function(jsToEval)();factory.getJSON=evalResult[0],factory.getBase64Code=evalResult[1];try{factory.json_object=JSON.parse(factory.getJSON())}catch($){throw faust$1.error_msg="Error in JSON.parse: "+$,callback(null),!0}factory.name=factory_name1,factory.sha_key=sha_key,faust$1.factory_table[sha_key]=factory,factory_name2?WebAssembly.compile(factory_code2).then(module_effect=>{factory.code_effect=factory_code2,factory.code_source_effect=factory_code_source2,factory.helpers_effect=helpers_code2,factory.module_effect=module_effect,eval(helpers_code2),factory.getJSONeffect=eval("getJSON"+factory_name2),factory.getBase64Codeeffect=eval("getBase64Code"+factory_name2);try{factory.effect_json_object=JSON.parse(factory.getJSONeffect())}catch($){throw faust$1.error_msg="Error in JSON.parse: "+$,callback(null),!0}factory.name_effect=factory_name2,callback(factory)}).catch(function($){faust$1.error_msg="Faust DSP factory cannot be compiled",callback(null)}):callback(factory)}).catch(function($){faust$1.error_msg="Faust DSP factory cannot be compiled",callback(null)})};faust$1.deleteDSPFactory=function($){faust$1.factory_table[$.sha_key]=null};faust$1.createDSPInstance=function($,_e,sn,ln){_e.resume();var mn={env:{memoryBase:0,tableBase:0,_abs:Math.abs,_acosf:Math.acos,_asinf:Math.asin,_atanf:Math.atan,_atan2f:Math.atan2,_ceilf:Math.ceil,_cosf:Math.cos,_expf:Math.exp,_floorf:Math.floor,_fmodf:function(_n,yn){return _n%yn},_logf:Math.log,_log10f:Math.log10,_max_f:Math.max,_min_f:Math.min,_remainderf:function(_n,yn){return _n-Math.round(_n/yn)*yn},_powf:Math.pow,_roundf:Math.fround,_sinf:Math.sin,_sqrtf:Math.sqrt,_tanf:Math.tan,_acoshf:Math.acosh,_asinhf:Math.asinh,_atanhf:Math.atanh,_coshf:Math.cosh,_sinhf:Math.sinh,_tanhf:Math.tanh,_isnanf:Number.isNaN,_isinff:function(_n){return!isFinite(_n)},_copysignf:function(_n,yn){return Math.sign(_n)===Math.sign(yn)?_n:-_n},_acos:Math.acos,_asin:Math.asin,_atan:Math.atan,_atan2:Math.atan2,_ceil:Math.ceil,_cos:Math.cos,_exp:Math.exp,_floor:Math.floor,_fmod:function(_n,yn){return _n%yn},_log:Math.log,_log10:Math.log10,_max_:Math.max,_min_:Math.min,_remainder:function(_n,yn){return _n-Math.round(_n/yn)*yn},_pow:Math.pow,_round:Math.fround,_sin:Math.sin,_sqrt:Math.sqrt,_tan:Math.tan,_acosh:Math.acosh,_asinh:Math.asinh,_atanh:Math.atanh,_cosh:Math.cosh,_sinh:Math.sinh,_tanh:Math.tanh,_isnan:Number.isNaN,_isinf:function(_n){return!isFinite(_n)},_copysign:function(_n,yn){return Math.sign(_n)===Math.sign(yn)?_n:-_n},table:new WebAssembly.Table({initial:0,element:"anyfunc"})}};performance.now(),WebAssembly.instantiate($.module,mn).then(_n=>{performance.now();var yn;try{yn=_e.createScriptProcessor(sn,_n.exports.getNumInputs(0),_n.exports.getNumOutputs(0))}catch(wn){faust$1.error_msg="Error in createScriptProcessor: "+wn,ln(null);return}yn.output_handler=null,yn.ins=null,yn.outs=null,yn.compute_handler=null,yn.dspInChannnels=[],yn.dspOutChannnels=[],yn.fPitchwheelLabel=[],yn.fCtrlLabel=new Array(128);for(var Tn=0;Tn<yn.fCtrlLabel.length;Tn++)yn.fCtrlLabel[Tn]=[];yn.outputs_timer=5,yn.outputs_items=[],yn.inputs_items=[],yn.ptr_size=4,yn.sample_size=4,yn.dsp=0,yn.pathTable=[],yn.factory=_n.exports,yn.HEAP=_n.exports.memory.buffer,yn.HEAP32=new Int32Array(yn.HEAP),yn.HEAPF32=new Float32Array(yn.HEAP),yn.numIn=yn.factory.getNumInputs(yn.dsp),yn.numOut=yn.factory.getNumOutputs(yn.dsp),yn.audio_heap_ptr=parseInt($.json_object.size),yn.audio_heap_ptr_inputs=yn.audio_heap_ptr,yn.audio_heap_ptr_outputs=yn.audio_heap_ptr_inputs+yn.numIn*yn.ptr_size,yn.audio_heap_inputs=yn.audio_heap_ptr_outputs+yn.numOut*yn.ptr_size,yn.audio_heap_outputs=yn.audio_heap_inputs+yn.numIn*sn*yn.sample_size,yn.update_outputs=function(){if(yn.outputs_items.length>0&&yn.output_handler&&yn.outputs_timer--===0){yn.outputs_timer=5;for(var wn=0;wn<yn.outputs_items.length;wn++)yn.output_handler(yn.outputs_items[wn],yn.factory.getParamValue(yn.dsp,yn.pathTable[yn.outputs_items[wn]]))}},yn.compute=function(wn){var On;for(On=0;On<yn.numIn;On++){var Dn=wn.inputBuffer.getChannelData(On),Nn=yn.dspInChannnels[On];Nn.set(Dn)}for(yn.compute_handler&&yn.compute_handler(sn),yn.factory.compute(yn.dsp,sn,yn.ins,yn.outs),yn.update_outputs(),On=0;On<yn.numOut;On++){var An=wn.outputBuffer.getChannelData(On),In=yn.dspOutChannnels[On];An.set(In)}},yn.parse_ui=function(wn){for(var On=0;On<wn.length;On++)yn.parse_group(wn[On])},yn.parse_group=function(wn){wn.items&&yn.parse_items(wn.items)},yn.parse_items=function(wn){for(var On=0;On<wn.length;On++)yn.parse_item(wn[On])},yn.parse_item=function(wn){if(wn.type==="vgroup"||wn.type==="hgroup"||wn.type==="tgroup")yn.parse_items(wn.items);else if(wn.type==="hbargraph"||wn.type==="vbargraph")yn.outputs_items.push(wn.address),yn.pathTable[wn.address]=parseInt(wn.index);else if((wn.type==="vslider"||wn.type==="hslider"||wn.type==="button"||wn.type==="checkbox"||wn.type==="nentry")&&(yn.inputs_items.push(wn.address),yn.pathTable[wn.address]=parseInt(wn.index),wn.meta!==void 0))for(var On=0;On<wn.meta.length;On++)wn.meta[On].midi!==void 0&&(wn.meta[On].midi.trim()==="pitchwheel"?yn.fPitchwheelLabel.push({path:wn.address,min:parseFloat(wn.min),max:parseFloat(wn.max)}):wn.meta[On].midi.trim().split(" ")[0]==="ctrl"&&yn.fCtrlLabel[parseInt(wn.meta[On].midi.trim().split(" ")[1])].push({path:wn.address,min:parseFloat(wn.min),max:parseFloat(wn.max)}))},yn.initAux=function(){var wn;if(yn.onaudioprocess=yn.compute,yn.numIn>0){for(yn.ins=yn.audio_heap_ptr_inputs,wn=0;wn<yn.numIn;wn++)yn.HEAP32[(yn.ins>>2)+wn]=yn.audio_heap_inputs+sn*yn.sample_size*wn;var On=yn.HEAP32.subarray(yn.ins>>2,yn.ins+yn.numIn*yn.ptr_size>>2);for(wn=0;wn<yn.numIn;wn++)yn.dspInChannnels[wn]=yn.HEAPF32.subarray(On[wn]>>2,On[wn]+sn*yn.sample_size>>2)}if(yn.numOut>0){for(yn.outs=yn.audio_heap_ptr_outputs,wn=0;wn<yn.numOut;wn++)yn.HEAP32[(yn.outs>>2)+wn]=yn.audio_heap_outputs+sn*yn.sample_size*wn;var Dn=yn.HEAP32.subarray(yn.outs>>2,yn.outs+yn.numOut*yn.ptr_size>>2);for(wn=0;wn<yn.numOut;wn++)yn.dspOutChannnels[wn]=yn.HEAPF32.subarray(Dn[wn]>>2,Dn[wn]+sn*yn.sample_size>>2)}yn.parse_ui($.json_object.ui),yn.factory.init(yn.dsp,_e.sampleRate)},yn.destroy=function(){},yn.getSampleRate=function(){return _e.sampleRate},yn.getNumInputs=function(){return yn.factory.getNumInputs(yn.dsp)},yn.getNumOutputs=function(){return yn.factory.getNumOutputs(yn.dsp)},yn.init=function(wn){yn.factory.init(yn.dsp,wn)},yn.instanceInit=function(wn){yn.factory.instanceInit(yn.dsp,wn)},yn.instanceConstants=function(wn){yn.factory.instanceConstants(yn.dsp,wn)},yn.instanceResetUserInterface=function(){yn.factory.instanceResetUserInterface(yn.dsp)},yn.instanceClear=function(){yn.factory.instanceClear(yn.dsp)},yn.metadata=function(wn){$.json_object.meta&&$.json_object.meta.forEach(function(On){wn.declare(Object.keys(On)[0],Object.values(On)[0])})},yn.setOutputParamHandler=function(wn){yn.output_handler=wn},yn.getOutputParamHandler=function(){return yn.output_handler},yn.ctrlChange=function(wn,On,Dn){for(var Nn=0;Nn<yn.fCtrlLabel[On].length;Nn++){var An=yn.fCtrlLabel[On][Nn].path;yn.setParamValue(An,faust$1.remap(Dn,0,127,yn.fCtrlLabel[On][Nn].min,yn.fCtrlLabel[On][Nn].max)),yn.output_handler&&yn.output_handler(An,yn.getParamValue(An))}},yn.pitchWheel=function(wn,On){for(var Dn=0;Dn<yn.fPitchwheelLabel.length;Dn++){var Nn=yn.fPitchwheelLabel[Dn];yn.setParamValue(Nn.path,faust$1.remap(On,0,16383,Nn.min,Nn.max)),yn.output_handler&&yn.output_handler(Nn.path,yn.getParamValue(Nn.path))}},yn.setParamValue=function(wn,On){return yn.factory.setParamValue(yn.dsp,yn.pathTable[wn],On)},yn.getParamValue=function(wn){return yn.factory.getParamValue(yn.dsp,yn.pathTable[wn])},yn.getParams=function(){return yn.inputs_items},yn.getJSON=function(){return $.getJSON()},yn.initAux(),ln(yn)}).catch(function(_n){faust$1.error_msg="Faust DSP cannot be instantiated",ln(null)})};faust$1.deleteDSPInstance=function($){};var mydspProcessorString=`

    'use strict';

    function getJSONmydsp() { return \`GETJSON\`; }
    function getBase64Codemydsp() { return \`GETBASE64CODE\`; }

    // Monophonic Faust DSP
    class mydspProcessor extends AudioWorkletProcessor {

        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                mydspProcessor.parse_group(ui[i], obj, callback);
            }
        }

        static parse_group(group, obj, callback)
        {
            if (group.items) {
                mydspProcessor.parse_items(group.items, obj, callback);
            }
        }

        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }

        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
            // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }

        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }

        static b64ToUint6(nChr)
        {
            return nChr > 64 && nChr < 91 ?
            nChr - 65
            : nChr > 96 && nChr < 123 ?
            nChr - 71
            : nChr > 47 && nChr < 58 ?
            nChr + 4
            : nChr === 43 ?
            62
            : nChr === 47 ?
            63
            :
            0;
        }

        static atob(sBase64, nBlocksSize)
        {
            if (typeof atob === 'function') {
                return atob(sBase64);
            } else {

                var sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
                var nInLen = sB64Enc.length;
                var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
                var taBytes = new Uint8Array(nOutLen);

                for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                    nMod4 = nInIdx & 3;
                    nUint24 |= mydspProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                    if (nMod4 === 3 || nInLen - nInIdx === 1) {
                        for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                            taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                        }
                        nUint24 = 0;
                    }
                }
                return taBytes.buffer;
            }
        }

        static remap(v, mn0, mx0, mn1, mx1)
        {
            return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
        }

        static get parameterDescriptors ()
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            mydspProcessor.parse_ui(JSON.parse(getJSONmydsp()).ui, params, mydspProcessor.parse_item1);
            return params;
        }

        constructor(options)
        {
            super(options);
            this.running = true;

            this.json_object = JSON.parse(getJSONmydsp());

            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };

            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;

            // Create the WASM instance
            var wasm_instance = new WebAssembly.Instance(mydspProcessor.wasm_module, mydspProcessor.importObject);
            this.factory = wasm_instance.exports;
            this.HEAP = wasm_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];

            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * mydspProcessor.buffer_size * this.sample_size);

            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];

            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }

            this.initAux = function ()
            {
                var i;

                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                // Parse UI
                mydspProcessor.parse_ui(this.json_object.ui, this, mydspProcessor.parse_item2);

                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }

        process(inputs, outputs, parameters)
        {
            var input = inputs[0];
            var output = outputs[0];

            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }

            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */

            // Update controls (possibly needed for sample accurate control)
            for (const path in parameters) {
            	const paramArray = parameters[path];
            	this.setParamValue(path, paramArray[0]);
            }

           // Compute
            try {
                this.factory.compute(this.dsp, mydspProcessor.buffer_size, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();

            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }

            return this.running;
        }
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals

    mydspProcessor.buffer_size = 128;

    mydspProcessor.importObject = {
        env: {
            memoryBase: 0,
            tableBase: 0,

            // Integer version
            _abs: Math.abs,

            // Float version
            _acosf: Math.acos,
            _asinf: Math.asin,
            _atanf: Math.atan,
            _atan2f: Math.atan2,
            _ceilf: Math.ceil,
            _cosf: Math.cos,
            _expf: Math.exp,
            _floorf: Math.floor,
            _fmodf: function(x, y) { return x % y; },
            _logf: Math.log,
            _log10f: Math.log10,
            _max_f: Math.max,
            _min_f: Math.min,
            _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
            _powf: Math.pow,
            _roundf: Math.fround,
            _sinf: Math.sin,
            _sqrtf: Math.sqrt,
            _tanf: Math.tan,
            _acoshf: Math.acosh,
            _asinhf: Math.asinh,
            _atanhf: Math.atanh,
            _coshf: Math.cosh,
            _sinhf: Math.sinh,
            _tanhf: Math.tanh,
            _isnanf: Number.isNaN,
            _isinff: function (x) { return !isFinite(x); },
            _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            // Double version
            _acos: Math.acos,
            _asin: Math.asin,
            _atan: Math.atan,
            _atan2: Math.atan2,
            _ceil: Math.ceil,
            _cos: Math.cos,
            _exp: Math.exp,
            _floor: Math.floor,
            _fmod: function(x, y) { return x % y; },
            _log: Math.log,
            _log10: Math.log10,
            _max_: Math.max,
            _min_: Math.min,
            _remainder:function(x, y) { return x - Math.round(x/y) * y; },
            _pow: Math.pow,
            _round: Math.fround,
            _sin: Math.sin,
            _sqrt: Math.sqrt,
            _tan: Math.tan,
            _acosh: Math.acosh,
            _asinh: Math.asinh,
            _atanh: Math.atanh,
            _cosh: Math.cosh,
            _sinh: Math.sinh,
            _tanh: Math.tanh,
            _isnan: Number.isNaN,
            _isinf: function (x) { return !isFinite(x); },
            _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
        }
    };

    // Synchronously compile and instantiate the WASM module
    try {
        mydspProcessor.wasm_module = new WebAssembly.Module(mydspProcessor.atob(getBase64Codemydsp()));
        registerProcessor('mydsp', mydspProcessor);
    } catch (e) {
        // REMOVED: console log noise that doesnt affect output
        // I assume if it were serious this error would not be caught and not rethrown
        // console.log(e); console.log("Faust mydsp cannot be loaded or compiled");
    }
`;faust$1.createDSPWorkletInstanceAux=function($,_e,sn){_e.resume().catch(()=>{});var ln=new AudioWorkletNode(_e,$.name,{numberOfInputs:parseInt($.json_object.inputs)>0?1:0,numberOfOutputs:parseInt($.json_object.outputs)>0?1:0,channelCount:Math.max(1,parseInt($.json_object.inputs)),outputChannelCount:[parseInt($.json_object.outputs)],channelCountMode:"explicit",channelInterpretation:"speakers"});ln.onprocessorerror=()=>{console.log("An error from mydspProcessor was detected.")},ln.handleMessage=function(mn){var _n=mn.data;this.output_handler&&this.output_handler(_n.path,_n.value)},ln.init=function(){this.parse_ui=function(_n,yn){for(var Tn=0;Tn<_n.length;Tn++)this.parse_group(_n[Tn],yn)},this.parse_group=function(_n,yn){_n.items&&this.parse_items(_n.items,yn)},this.parse_items=function(_n,yn){for(var Tn=0;Tn<_n.length;Tn++)this.parse_item(_n[Tn],yn)},this.parse_item=function(_n,yn){if(_n.type==="vgroup"||_n.type==="hgroup"||_n.type==="tgroup")this.parse_items(_n.items,yn);else if(_n.type==="hbargraph"||_n.type==="vbargraph")yn.outputs_items.push(_n.address);else if((_n.type==="vslider"||_n.type==="hslider"||_n.type==="button"||_n.type==="checkbox"||_n.type==="nentry")&&(yn.inputs_items.push(_n.address),_n.meta!==void 0))for(var Tn=0;Tn<_n.meta.length;Tn++)_n.meta[Tn].midi!==void 0&&(_n.meta[Tn].midi.trim()==="pitchwheel"?yn.fPitchwheelLabel.push({path:_n.address,min:parseFloat(_n.min),max:parseFloat(_n.max)}):_n.meta[Tn].midi.trim().split(" ")[0]==="ctrl"&&yn.fCtrlLabel[parseInt(_n.meta[Tn].midi.trim().split(" ")[1])].push({path:_n.address,min:parseFloat(_n.min),max:parseFloat(_n.max)}))},this.output_handler=null,this.json_object=$.json_object,this.inputs_items=[],this.outputs_items=[],this.fPitchwheelLabel=[],this.fCtrlLabel=new Array(128);for(var mn=0;mn<this.fCtrlLabel.length;mn++)this.fCtrlLabel[mn]=[];this.parse_ui(this.json_object.ui,this),this.port.onmessage=this.handleMessage.bind(this)},ln.init(),ln.destroy=function(){this.port.postMessage({type:"destroy"}),this.port.close()},ln.getJSON=function(){return $.getJSON()},ln.setParamValue=function(mn,_n){this.parameters.get(mn).setValueAtTime(_n,0)},ln.getParamValue=function(mn){return this.parameters.get(mn).value},ln.setOutputParamHandler=function(mn){this.output_handler=mn},ln.getOutputParamHandler=function(){return this.output_handler},ln.getNumInputs=function(){return parseInt($.json_object.inputs)},ln.getNumOutputs=function(){return parseInt($.json_object.outputs)},ln.inputChannelCount=function(){return parseInt($.json_object.inputs)},ln.outputChannelCount=function(){return parseInt($.json_object.outputs)},ln.getParams=function(){return this.inputs_items},ln.getDescriptor=function(){return this.inputs_items},ln.ctrlChange=function(mn,_n,yn){for(var Tn=0;Tn<this.fCtrlLabel[_n].length;Tn++){var wn=this.fCtrlLabel[_n][Tn].path;this.setParamValue(wn,ln.remap(yn,0,127,this.fCtrlLabel[_n][Tn].min,this.fCtrlLabel[_n][Tn].max)),this.output_handler&&this.output_handler(wn,this.getParamValue(wn))}},ln.pitchWheel=function(mn,_n){for(var yn=0;yn<this.fPitchwheelLabel.length;yn++){var Tn=this.fPitchwheelLabel[yn];this.setParamValue(Tn.path,ln.remap(_n,0,16383,Tn.min,Tn.max)),this.output_handler&&this.output_handler(Tn.path,this.getParamValue(Tn.path))}},ln.midiMessage=function(mn){var _n=mn[0]>>4,yn=mn[0]&15,Tn=mn[1],wn=mn[2];yn!==9&&(_n===11?this.ctrlChange(yn,Tn,wn):_n===14&&this.pitchWheel(yn,wn*128+Tn))},ln.onMidi=function(mn){this.midiMessage(mn)},ln.getState=async function(){var mn=new Object;for(let _n=0;_n<this.getDescriptor().length;_n++)Object.assign(mn,{[this.getDescriptor()[_n]]:`${this.getParam(this.getDescriptor()[_n])}`});return new Promise(_n=>{_n(mn)})},ln.setState=async function(mn){return new Promise(_n=>{for(const yn in mn)mn.hasOwnProperty(yn)&&this.setParam(yn,mn[yn]);try{this.gui.setAttribute("state",JSON.stringify(mn))}catch(yn){console.warn("Plugin without gui or GUI not defined",yn)}_n(mn)})},ln.setPatch=function(mn){this.setState(this.presets[mn])},ln.metadata=function(mn){},ln.remap=function(mn,_n,yn,Tn,wn){return 1*(mn-_n)/(yn-_n)*(wn-Tn)+Tn},sn(ln)};faust$1.createDSPWorkletInstance=function($,_e,sn){var ln=/mydsp/g,mn=/GETJSON/g,_n=/GETBASE64CODE/g,yn=mydspProcessorString.replace(ln,$.name),Tn=yn.replace(mn,$.getJSON()),wn=Tn.replace(_n,$.getBase64Code()),On=window.URL.createObjectURL(new Blob([wn],{type:"text/javascript"}));_e.audioWorklet.addModule(On).then(function(){faust$1.createDSPWorkletInstanceAux($,_e,sn)}).catch(function(Dn){alert(Dn)})};faust$1.deleteDSPWorkletInstance=function($){};faust$1.ready;const factoryCache=new Map;async function compile($,_e){const sn=["-ftz","2","-I","http://127.0.0.1:8000/../../libraries/"];let ln=factoryCache.get(_e);ln||(ln=new Promise(Tn=>faust$1.createDSPFactory(_e,sn,Tn)),factoryCache.set(_e,ln));const mn=await ln;if(!mn)throw new Error(faust$1.error_msg);const _n=await new Promise(Tn=>faust$1.createDSPWorkletInstance(mn,$,Tn));if(!_n)throw new Error(faust$1.error_msg);_n.ui=JSON.parse(_n.getJSON()).ui;const yn=new Map;return _n.setOutputParamHandler((Tn,wn)=>{yn.set(Tn,wn)}),_n.getOutputValue=Tn=>{var wn;return(wn=yn.get(Tn))!=null?wn:0},_n}function faust($,_e){const mn=_e,{inputs:sn}=mn,ln=ao(mn,["inputs"]);return new DspNodeFaust({dsp:$,inputs:sn,paramDefs:ln,dependencies:{compile}})}function findOldestVoiceIndex($){var sn;if($.length===0)return-1;const _e=$.reduce((ln,mn)=>!mn||ln&&ln.time<mn.time?ln:mn);return(sn=_e==null?void 0:_e.voice)!=null?sn:-1}class VoiceAllocator{constructor(_e){this._time=0,this._voices=[],this._voices.length=_e}_startVoice(_e,sn){const ln=this._voices[_e];return(ln==null?void 0:ln.released)!==void 0&&clearTimeout(ln.released),this._voices[_e]={id:sn,voice:_e,time:this._time++},_e}_stopVoice(_e){this._voices[_e]=void 0}_findStarted(_e){return this._voices.findIndex(sn=>sn&&sn.id===_e&&sn.released===void 0)}_findReleased(_e){return this._voices.findIndex(sn=>sn&&sn.id===_e&&sn.released!==void 0)}get voices(){return this._voices.map(_e=>_e==null?void 0:_e.id)}get(_e){return this._voices.findIndex(sn=>sn&&sn.id===_e)}start(_e){const sn=this._findStarted(_e);if(sn!==-1)return[sn,!1];const ln=this._findReleased(_e);if(ln!==-1)return[this._startVoice(ln,_e),!1];const mn=this._voices.findIndex(wn=>!wn);if(mn!==-1)return[this._startVoice(mn,_e),!0];const _n=this._voices.filter(wn=>(wn==null?void 0:wn.released)!==void 0),yn=findOldestVoiceIndex(_n);if(yn!==-1)return[this._startVoice(yn,_e),!0];const Tn=findOldestVoiceIndex(this._voices);if(Tn!==-1)return[this._startVoice(Tn,_e),!0];throw new Error("unable to find oldest active voice")}stop(_e){const sn=this._findStarted(_e);return sn!==-1&&this._stopVoice(sn),[sn,!1]}release(_e,sn){const ln=this._findStarted(_e),mn=this._voices[ln];return mn&&(mn.released=setTimeout(()=>{this._stopVoice(ln)},sn)),[ln,!1]}}class VoiceController{constructor(_e){this._release=2e3,this._allParams={},this._perVoiceParamsStore=new Map,this._recentlyAccessedIds=new Set;const{polyphony:sn,paramCacheSize:ln,resolveGate:mn}=_e;this._polyphony=sn,this._paramCacheSize=ln,this._resolveGate=mn,this._allocator=new VoiceAllocator(sn)}_accessId(_e){const sn=this._recentlyAccessedIds;for(sn.delete(_e),sn.add(_e);sn.size>this._paramCacheSize;){const ln=sn.keys().next().value;sn.delete(ln),this._deleteParamsForId(ln)}}_getParamsForVoice(_e){this._accessId(_e);const sn={};return this._perVoiceParamsStore.forEach((ln,mn)=>{const _n=ln.get(_e);_n!==void 0&&(sn[mn]=_n)}),sn}_addParamForVoice(_e,sn,ln){var _n;const mn=(_n=this._perVoiceParamsStore.get(_e))!=null?_n:new Map;mn.set(sn,ln),this._perVoiceParamsStore.set(_e,mn)}_addParamsForVoice(_e,sn){this._accessId(_e);for(const ln in sn){const mn=sn[ln];mn!==void 0&&this._addParamForVoice(ln,_e,mn)}}_deleteParamsForId(_e){this._perVoiceParamsStore.forEach(sn=>{sn.delete(_e)})}setRelease(_e){this._release=_e}set(ln){var mn=ln,{voice:_e}=mn,sn=ao(mn,["voice"]);return _e===void 0?this.setAll(sn):this.setWithId(`${_e}`,sn)}setWithId(_e,sn){const ln=this._resolveGate(sn),{_allocator:mn,_allParams:_n}=this;let yn=-1;if(ln!==void 0?[yn]=ln>0?mn.start(_e):mn.release(_e,this._release):yn=mn.get(_e),yn===-1)return[];const Tn=this._getParamsForVoice(_e),wn=yt(yt(yt({},_n),Tn),sn);return this._addParamsForVoice(_e,wn),[{index:yn,params:wn}]}setAll(_e){this._allParams=yt(yt({},this._allParams),_e);for(const ln in _e)this._perVoiceParamsStore.set(ln,new Map);const sn=[];for(let ln=0;ln<this._polyphony;ln++)sn.push({index:ln,params:_e});return sn}}function poly($){const{input:_e,polyphony:sn,paramCacheSize:ln,release:mn,gate:_n}=$;return new DspNodePoly({input:_e,polyphony:sn,paramCacheSize:ln,release:mn,gate:_n,dependencies:{VoiceController}})}function lines($){return $.join(`
`)}function series($,_e,sn){return $.map(sn).join(_e)}function env($,_e){return`${$} = environment { 
  ${_e.replace(/\n/g,`
  `)} 
};
`}async function constructNodeFaust($,_e,sn){const{inputs:ln=[],paramDefs:mn,dependencies:_n}=_e,yn=await Promise.all(ln.map(An=>sn($,An))),Tn=lines(['import("stdfaust.lib");',constructFaustDsp(_e)]),wn=await _n.compile($,Tn),On=wn.destroy.bind(wn),Dn=wn;Dn.destroy=()=>{On(),yn.forEach(An=>An==null?void 0:An.destroy())};const Nn=wn.getParams();Dn.set=An=>{Nn.forEach(In=>{const Un=In.replace(/^\/FaustDSP\//g,""),Ln=mn[Un];if(Ln!==void 0){const qn=resolveParam(An,Ln);typeof qn=="number"&&wn.setParamValue(In,qn)}}),yn.forEach(In=>In==null?void 0:In.set(An))};for(let An=0;An<yn.length;An++)yn[An].connect(Dn,0,An);return Dn}function constructFaustDsp($){const{paramDefs:_e,dsp:sn}=$,ln=env("params",lines([series(Object.entries(_e),`
`,([mn,_n])=>typeof _n=="number"?`${mn} = ${_n};
`:`${mn} = hslider("${mn}",0.0,-9999999.0,9999999.0,0.0000001);`)]));return lines([ln,sn])}async function constructNodePoly($,_e,sn){const{input:ln,polyphony:mn,paramCacheSize:_n=1e4,release:yn,gate:Tn,dependencies:wn}=_e,On=isVariable(yn),{VoiceController:Dn}=wn,Nn=new Dn({polyphony:mn,resolveGate:Ln=>resolveParam(Ln,Tn),paramCacheSize:_n}),An=Ln=>Nn.setRelease(Ln*1e3);On||An(yn);const In=await Promise.all(Array(mn).fill(0).map(()=>sn($,ln))),Un=new GainNode($);return In.forEach(Ln=>Ln.connect(Un)),Un.destroy=()=>{In.forEach(Ln=>Ln==null?void 0:Ln.destroy())},Un.set=Ln=>{if(On){const kn=Ln[yn];typeof kn=="number"&&An(kn)}Nn.set(Ln).forEach(({index:kn,params:xn})=>{In[kn].set(xn)})},Un}async function constructNode($,_e){if(DspNode.isFaustDspNode(_e))return await constructNodeFaust($,_e,constructNode);if(DspNode.isPolyDspNode(_e))return await constructNodePoly($,_e,constructNode);throw new Error(`dspNode has invalid type "${_e.type}"`)}class Synth{constructor(_e){this.audioContext=_e.audioContext,this.initialParams=_e.params}async build(_e){var ln,mn;const sn=await constructNode(this.audioContext,_e);(ln=this.node)==null||ln.disconnect(),(mn=this.node)==null||mn.destroy(),this.node=sn,this.tryConnectNode()}connect(_e,sn,ln){return this.connection=[_e,sn,ln],this.tryConnectNode(),_e}tryConnectNode(){this.node&&this.connection&&(this.node.disconnect(),this.node.connect(...this.connection),this.initialParams&&this.set(this.initialParams))}disconnect(_e,sn,ln){this.node&&this.node.disconnect(_e,sn,ln)}set(_e){this.node&&this.node.set(_e)}destroy(){var _e;(_e=this.node)==null||_e.destroy(),this.node=void 0}}function touchStart($){if($.state!=="suspended")return;const _e=document.body,sn=["touchstart","touchend","mousedown","keydown"],ln=()=>sn.forEach(_n=>_e.removeEventListener(_n,mn)),mn=()=>$.resume().then(ln);sn.forEach(_n=>_e.addEventListener(_n,mn,!1))}const initialParams={pitch:70,envelopeAttack:.002,envelopeDecay:.1,envelopeSustain:.3,envelopeRelease:2,pan:.5};function buildSynthDsp(){const $=faust("process = os.triangle(params.pitch : si.polySmooth(params.gate, 0.999, 1) : ba.midikey2hz) : *(params.volume);",{pitch:"pitch",gate:"gate",volume:.3}),_e=faust(`
  a = params.envelopeAttack;
  d = params.envelopeDecay;
  s = params.envelopeSustain;
  r = params.envelopeRelease;
  process = *(en.adsr(a,d,s,r,params.gate));
  `,{inputs:[$],gate:"gate",force:"force",envelopeAttack:"envelopeAttack",envelopeDecay:"envelopeDecay",envelopeSustain:"envelopeSustain",envelopeRelease:"envelopeRelease"}),sn=faust("process = *(os.osc(params.speed) * 0.4 + 0.5);",{inputs:[_e],speed:"speed"}),ln=faust("process = sp.panner(params.pan);",{inputs:[sn],pan:"pan"});return poly({input:ln,polyphony:8,gate:"gate",release:"envelopeRelease"})}const synthDspNode=buildSynthDsp(),liveAudioContext=new window.AudioContext;touchStart(liveAudioContext);const synth=new Synth({audioContext:liveAudioContext,params:initialParams});synth.build(synthDspNode);synth.connect(liveAudioContext.destination);const startVoice=$=>{const{voice:_e,pitch:sn}=$;synth.set({voice:_e,gate:1,force:1,pitch:sn,pan:Math.random()*.5+.25,speed:Math.random()*10+1})},changeVoice=$=>{const{voice:_e,pitch:sn}=$;synth.set({voice:_e,force:1,pitch:sn})},stopVoice=$=>{const{voice:_e}=$;synth.set({voice:_e,gate:0,force:0})},stopAllVoices=()=>{synth.set({gate:0,force:0})},destroySynth=()=>{synth.disconnect(liveAudioContext.destination),synth.destroy()},synthState=appState.branch("synth"),activePointerIds=new Map,setPointerVoice=($,_e)=>{const sn=activePointerIds.get($),ln=sn!==void 0&&sn!==_e;return activePointerIds.set($,_e),ln?sn:void 0};synthState.branch("polyMode").onChange(()=>{stopAllVoices(),activePointerIds.clear()});const handleSurfaceEventPerCell=$=>{const _e=`${$.cell[0]},${$.cell[1]}`,sn=$.decimalMidi,ln=$.force;if($.type==="start")startVoice({voice:_e,pitch:sn,force:ln}),setPointerVoice($.pointerId,_e);else if($.type==="move"){const mn=setPointerVoice($.pointerId,_e);mn===void 0?changeVoice({voice:_e,pitch:sn,force:ln}):(startVoice({voice:_e,pitch:sn,force:ln}),stopVoice({voice:mn}))}else $.type==="end"&&stopVoice({voice:_e})},handleSurfaceEventPerPointer=$=>{const _e=`${$.pointerId}`,sn=$.decimalMidi,ln=$.force;$.type==="start"?startVoice({voice:_e,pitch:sn,force:ln}):$.type==="move"?changeVoice({voice:_e,pitch:sn,force:ln}):$.type==="end"&&stopVoice({voice:_e})},handleSurfaceEventPerPitch=$=>{const _e=`${$.decimalMidi}`,sn=$.decimalMidi,ln=$.force;if($.type==="start")startVoice({voice:_e,pitch:sn,force:ln}),setPointerVoice($.pointerId,_e);else if($.type==="move"){const mn=setPointerVoice($.pointerId,_e);mn===void 0?changeVoice({voice:_e,pitch:sn,force:ln}):(startVoice({voice:_e,pitch:sn,force:ln}),stopVoice({voice:mn}))}else $.type==="end"&&stopVoice({voice:_e})},handlers={["per-cell"]:handleSurfaceEventPerCell,["per-pointer"]:handleSurfaceEventPerPointer,["per-pitch"]:handleSurfaceEventPerPitch},handleSurfaceEvent=$=>{handlers[synthState.value.polyMode]($)},handleDestroy=()=>{destroySynth()};function createAudioCtx$1($){return typeof $=="number"?new AudioContext({sampleRate:$}):$}function isObjectType$1($,_e){return Object.prototype.toString.call(_e)===`[object ${$}]`}function isAudioArray$1($){return Array.isArray($)&&$.length>0&&Array.isArray($[0])}function isFloat32AudioArray$1($){return Array.isArray($)&&$.length>0&&isObjectType$1("Float32Array",$[0])}function isAudioBuffer$1($){return isObjectType$1("AudioBuffer",$)}function isArrayBuffer$1($){return isObjectType$1("ArrayBuffer",$)}function audioArrayToAudioBuffer$1($,_e){const sn=_e.createBuffer($.length,$[0].length,_e.sampleRate);for(let ln=0;ln<sn.numberOfChannels;ln++){const mn=sn.getChannelData(ln);for(let _n=0;_n<sn.length;_n++)mn[_n]=$[ln][_n]}return sn}async function arrayBufferToAudioBuffer$1($,_e){return await new Promise(sn=>_e.decodeAudioData($,sn))}async function toAudioBuffer$1($,_e){if(isAudioBuffer$1($))return $;const sn=createAudioCtx$1(_e);if(isArrayBuffer$1($))return arrayBufferToAudioBuffer$1($,sn);if(isAudioArray$1($)||isFloat32AudioArray$1($))return audioArrayToAudioBuffer$1($,sn);throw new Error(`toAudioBuffer: unconvertible input type: ${$}`)}var offlineRenderInnerStringified=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function audioBufferToWav(buffer, opt) {
  opt = opt || {};
  var numChannels = buffer.numberOfChannels;
  var sampleRate = buffer.sampleRate;
  var format = opt.float32 ? 3 : 1;
  var bitDepth = format === 3 ? 32 : 16;
  var result;
  if (numChannels === 2) {
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1));
  } else {
    result = buffer.getChannelData(0);
  }
  return encodeWAV(result, format, sampleRate, numChannels, bitDepth);
}
function encodeWAV(samples, format, sampleRate, numChannels, bitDepth) {
  var bytesPerSample = bitDepth / 8;
  var blockAlign = numChannels * bytesPerSample;
  var buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  var view = new DataView(buffer);
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(view, 36, "data");
  view.setUint32(40, samples.length * bytesPerSample, true);
  if (format === 1) {
    floatTo16BitPCM(view, 44, samples);
  } else {
    writeFloat32(view, 44, samples);
  }
  return buffer;
}
function interleave(inputL, inputR) {
  var length = inputL.length + inputR.length;
  var result = new Float32Array(length);
  var index = 0;
  var inputIndex = 0;
  while (index < length) {
    result[index++] = inputL[inputIndex];
    result[index++] = inputR[inputIndex];
    inputIndex++;
  }
  return result;
}
function writeFloat32(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true);
  }
}
function floatTo16BitPCM(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(offset, s < 0 ? s * 32768 : s * 32767, true);
  }
}
function writeString(view, offset, string) {
  for (var i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
function createAudioCtx(audioCtxOrSampleRate) {
  if (typeof audioCtxOrSampleRate === "number") {
    return new AudioContext({ sampleRate: audioCtxOrSampleRate });
  }
  return audioCtxOrSampleRate;
}
function isObjectType(type, value) {
  return Object.prototype.toString.call(value) === \`[object \${type}]\`;
}
function isAudioArray(value) {
  return Array.isArray(value) && value.length > 0 && Array.isArray(value[0]);
}
function isFloat32AudioArray(value) {
  return Array.isArray(value) && value.length > 0 && isObjectType("Float32Array", value[0]);
}
function isAudioBuffer(value) {
  return isObjectType("AudioBuffer", value);
}
function isArrayBuffer(value) {
  return isObjectType("ArrayBuffer", value);
}
function audioArrayToAudioBuffer(channels, audioCtx) {
  const buffer = audioCtx.createBuffer(channels.length, channels[0].length, audioCtx.sampleRate);
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const nowBuffering = buffer.getChannelData(channel);
    for (let i = 0; i < buffer.length; i++) {
      nowBuffering[i] = channels[channel][i];
    }
  }
  return buffer;
}
async function arrayBufferToAudioBuffer(arrayBuffer, audioCtx) {
  return await new Promise((resolve) => audioCtx.decodeAudioData(arrayBuffer, resolve));
}
async function toAudioBuffer(input, audioCtxOrSampleRate) {
  if (isAudioBuffer(input)) {
    return input;
  }
  const audioCtx = createAudioCtx(audioCtxOrSampleRate);
  if (isArrayBuffer(input)) {
    return arrayBufferToAudioBuffer(input, audioCtx);
  }
  if (isAudioArray(input) || isFloat32AudioArray(input)) {
    return audioArrayToAudioBuffer(input, audioCtx);
  }
  throw new Error(\`toAudioBuffer: unconvertible input type: \${input}\`);
}
async function toArrayBuffer(input, audioCtxOrSampleRate) {
  if (isArrayBuffer(input)) {
    return input;
  }
  const audioCtx = createAudioCtx(audioCtxOrSampleRate);
  const buffer = await toAudioBuffer(input, audioCtx);
  return audioBufferToWav(buffer, { float32: true });
}
function offlineRenderInner(callback) {
  return async (params) => {
    const { channels, length, sampleRate, inputArrayBuffer, props } = params;
    const offlineContext = new OfflineAudioContext(channels, length, sampleRate);
    let source;
    if (inputArrayBuffer) {
      source = offlineContext.createBufferSource();
      source.buffer = await toAudioBuffer(inputArrayBuffer, sampleRate);
    }
    if (typeof callback !== "function") {
      throw new Error(\`functionString must set exports.buildContext\`);
    }
    await callback(offlineContext, source, props);
    source?.start();
    const audioBuffer = await offlineContext.startRendering();
    const arrayBuffer = await toArrayBuffer(audioBuffer, sampleRate);
    return [arrayBuffer, [arrayBuffer]];
  };
}
exports.offlineRenderInner = offlineRenderInner;
`;function audioBufferToWav($,_e){_e=_e||{};var sn=$.numberOfChannels,ln=$.sampleRate,mn=_e.float32?3:1,_n=mn===3?32:16,yn;return sn===2?yn=interleave($.getChannelData(0),$.getChannelData(1)):yn=$.getChannelData(0),encodeWAV(yn,mn,ln,sn,_n)}function encodeWAV($,_e,sn,ln,mn){var _n=mn/8,yn=ln*_n,Tn=new ArrayBuffer(44+$.length*_n),wn=new DataView(Tn);return writeString(wn,0,"RIFF"),wn.setUint32(4,36+$.length*_n,!0),writeString(wn,8,"WAVE"),writeString(wn,12,"fmt "),wn.setUint32(16,16,!0),wn.setUint16(20,_e,!0),wn.setUint16(22,ln,!0),wn.setUint32(24,sn,!0),wn.setUint32(28,sn*yn,!0),wn.setUint16(32,yn,!0),wn.setUint16(34,mn,!0),writeString(wn,36,"data"),wn.setUint32(40,$.length*_n,!0),_e===1?floatTo16BitPCM(wn,44,$):writeFloat32(wn,44,$),Tn}function interleave($,_e){for(var sn=$.length+_e.length,ln=new Float32Array(sn),mn=0,_n=0;mn<sn;)ln[mn++]=$[_n],ln[mn++]=_e[_n],_n++;return ln}function writeFloat32($,_e,sn){for(var ln=0;ln<sn.length;ln++,_e+=4)$.setFloat32(_e,sn[ln],!0)}function floatTo16BitPCM($,_e,sn){for(var ln=0;ln<sn.length;ln++,_e+=2){var mn=Math.max(-1,Math.min(1,sn[ln]));$.setInt16(_e,mn<0?mn*32768:mn*32767,!0)}}function writeString($,_e,sn){for(var ln=0;ln<sn.length;ln++)$.setUint8(_e+ln,sn.charCodeAt(ln))}function createAudioCtx($){return typeof $=="number"?new AudioContext({sampleRate:$}):$}function isObjectType($,_e){return Object.prototype.toString.call(_e)===`[object ${$}]`}function isAudioArray($){return Array.isArray($)&&$.length>0&&Array.isArray($[0])}function isFloat32AudioArray($){return Array.isArray($)&&$.length>0&&isObjectType("Float32Array",$[0])}function isAudioBuffer($){return isObjectType("AudioBuffer",$)}function isArrayBuffer($){return isObjectType("ArrayBuffer",$)}function audioArrayToAudioBuffer($,_e){const sn=_e.createBuffer($.length,$[0].length,_e.sampleRate);for(let ln=0;ln<sn.numberOfChannels;ln++){const mn=sn.getChannelData(ln);for(let _n=0;_n<sn.length;_n++)mn[_n]=$[ln][_n]}return sn}function audioBufferToFloat32AudioArray($){const _e=[];for(let sn=0;sn<$.numberOfChannels;sn++)_e.push($.getChannelData(sn));return _e}function arrayToFloat32AudioArray($){return $.map(_e=>new Float32Array(_e))}async function arrayBufferToAudioBuffer($,_e){return await new Promise(sn=>_e.decodeAudioData($,sn))}function toFloat32AudioArray($){if(isFloat32AudioArray($))return $;if(isAudioArray($))return arrayToFloat32AudioArray($);if(isAudioBuffer($))return audioBufferToFloat32AudioArray($);throw new Error(`toFloat32AudioArray: unconvertible input type: ${$}`)}async function toAudioBuffer($,_e){if(isAudioBuffer($))return $;const sn=createAudioCtx(_e);if(isArrayBuffer($))return arrayBufferToAudioBuffer($,sn);if(isAudioArray($)||isFloat32AudioArray($))return audioArrayToAudioBuffer($,sn);throw new Error(`toAudioBuffer: unconvertible input type: ${$}`)}async function toArrayBuffer($,_e){if(isArrayBuffer($))return $;const sn=createAudioCtx(_e),ln=await toAudioBuffer($,sn);return audioBufferToWav(ln,{float32:!0})}var runInIframeInnerStringified=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function receiveParams() {
  return new Promise((resolve) => {
    const messageListener = (message) => {
      if (message.source !== window.parent || message.origin !== window.location.origin) {
        return;
      }
      window.removeEventListener("message", messageListener);
      resolve(message.data);
    };
    window.addEventListener("message", messageListener);
  });
}
async function sendResult(result, transferrables) {
  window.parent.postMessage(result, window.location.origin, transferrables);
}
async function runInIframeInner(callback) {
  const params = await receiveParams();
  const [result, transferrables = []] = await callback(params);
  sendResult(result, transferrables);
}
exports.runInIframeInner = runInIframeInner;
`;async function runInIframe($){const{functionString:_e,params:sn,transferrables:ln=[]}=$,mn=document.createElement("iframe");mn.style.display="none",document.body.append(mn);const{contentWindow:_n}=mn;if(!_n)throw new Error("contentWindow not available on iframe");return _n.document.write(`<script>
      var exports = {};
      ${_e}
      ${runInIframeInnerStringified}
      exports.runInIframeInner(exports.run);
    <\/script>`),new Promise(yn=>{const Tn=wn=>{wn.source===_n&&(window.removeEventListener("message",Tn),mn.remove(),yn(wn.data))};window.addEventListener("message",Tn),_n.postMessage(sn,window.location.origin,ln)})}async function offlineRender$1($){var Nn,An;const{functionString:_e="",channels:sn,sampleRate:ln,input:mn,props:_n}=$;let{length:yn}=$,Tn,wn=[];mn&&(Tn=await toArrayBuffer(mn,ln),wn=[Tn],yn===void 0&&(yn=(An=(Nn=toFloat32AudioArray(mn)[0])==null?void 0:Nn.length)!=null?An:0));const On=await runInIframe({functionString:`
      ${offlineRenderInnerStringified}
      ${_e}
      exports.run = exports.offlineRenderInner(exports.buildContext);
    `,params:{channels:sn,sampleRate:ln,inputArrayBuffer:Tn,length:yn!=null?yn:0,props:_n},transferrables:wn}),Dn=await toAudioBuffer(On,ln);return toFloat32AudioArray(Dn)}var offlineRenderSynthInnerStringified=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateParamDefinition(name, paramDef) {
  if (!isConstant(paramDef) && !isVariable(paramDef)) {
    throw new Error(\`param "\${name}" must be a constant number or a string referring to a param name, but got \${paramDef}\`);
  }
  return paramDef;
}
function validateParamDefinitionObject(paramDefs) {
  for (const name in paramDefs) {
    validateParamDefinition(name, paramDefs[name]);
  }
  return paramDefs;
}
function isConstant(paramDef) {
  return typeof paramDef === "number";
}
function isVariable(paramDef) {
  return typeof paramDef === "string";
}
function resolveParam(params, paramDef) {
  if (isConstant(paramDef)) {
    return paramDef;
  } else if (isVariable(paramDef)) {
    return params[paramDef];
  }
  return void 0;
}
class DspNode {
  type;
  constructor(config) {
    this.type = config.type;
  }
  static isFaustDspNode(DspNode2) {
    return DspNode2.type === "faust";
  }
  static isPolyDspNode(DspNode2) {
    return DspNode2.type === "poly";
  }
  static isFaustDspNodeSerialized(serialized) {
    return serialized.type === "faust";
  }
  static isPolyDspNodeSerialized(serialized) {
    return serialized.type === "poly";
  }
  serialize() {
    throw new Error(".serialize() can only be called on subclasses");
  }
}
class DspNodeFaust extends DspNode {
  dsp;
  inputs;
  paramDefs;
  dependencies;
  constructor(config) {
    super({
      type: "faust"
    });
    this.dsp = config.dsp;
    this.inputs = config.inputs ?? [];
    this.paramDefs = validateParamDefinitionObject(config.paramDefs);
    this.dependencies = config.dependencies;
  }
  serialize() {
    const { dsp, paramDefs } = this;
    const inputs = this.inputs.map((input) => input.serialize());
    return {
      type: "faust",
      dsp,
      inputs,
      paramDefs
    };
  }
}
class DspNodePoly extends DspNode {
  input;
  polyphony;
  paramCacheSize;
  release;
  gate;
  dependencies;
  constructor(config) {
    super({
      type: "poly"
    });
    this.input = config.input;
    this.polyphony = config.polyphony;
    this.paramCacheSize = config.paramCacheSize;
    this.release = validateParamDefinition("release", config.release);
    this.gate = validateParamDefinition("gate", config.gate);
    this.dependencies = config.dependencies;
  }
  serialize() {
    const { polyphony, paramCacheSize, release, gate } = this;
    const input = this.input.serialize();
    return {
      type: "poly",
      input,
      polyphony,
      paramCacheSize,
      release,
      gate
    };
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
var FaustModule = function() {
  var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
  if (typeof __filename !== "undefined")
    _scriptDir = _scriptDir || __filename;
  return function(FaustModule2) {
    FaustModule2 = FaustModule2 || {};
    var Module = typeof FaustModule2 !== "undefined" ? FaustModule2 : {};
    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;
    (function() {
      var loadPackage = function(metadata) {
        if (typeof window === "object") {
          window["encodeURIComponent"](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/");
        } else if (typeof location !== "undefined") {
          encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
        } else {
          throw "using preloaded data can only be done on a web page or in a web worker";
        }
        var PACKAGE_NAME = "../../lib/libfaust-wasm.data";
        var REMOTE_PACKAGE_BASE = "libfaust-wasm.data";
        if (typeof Module["locateFilePackage"] === "function" && !Module["locateFile"]) {
          Module["locateFile"] = Module["locateFilePackage"];
          err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)");
        }
        var REMOTE_PACKAGE_NAME = Module["locateFile"] ? Module["locateFile"](REMOTE_PACKAGE_BASE, "") : REMOTE_PACKAGE_BASE;
        var REMOTE_PACKAGE_SIZE = metadata["remote_package_size"];
        metadata["package_uuid"];
        function fetchRemotePackage(packageName, packageSize, callback2, errback) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", packageName, true);
          xhr.responseType = "arraybuffer";
          xhr.onprogress = function(event) {
            var url = packageName;
            var size = packageSize;
            if (event.total)
              size = event.total;
            if (event.loaded) {
              if (!xhr.addedTotal) {
                xhr.addedTotal = true;
                if (!Module.dataFileDownloads)
                  Module.dataFileDownloads = {};
                Module.dataFileDownloads[url] = {
                  loaded: event.loaded,
                  total: size
                };
              } else {
                Module.dataFileDownloads[url].loaded = event.loaded;
              }
              var total = 0;
              var loaded = 0;
              var num = 0;
              for (var download in Module.dataFileDownloads) {
                var data = Module.dataFileDownloads[download];
                total += data.total;
                loaded += data.loaded;
                num++;
              }
              total = Math.ceil(total * Module.expectedDataFileDownloads / num);
              if (Module["setStatus"])
                Module["setStatus"]("Downloading data... (" + loaded + "/" + total + ")");
            } else if (!Module.dataFileDownloads) {
              if (Module["setStatus"])
                Module["setStatus"]("Downloading data...");
            }
          };
          xhr.onerror = function(event) {
            throw new Error("NetworkError for: " + packageName);
          };
          xhr.onload = function(event) {
            if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || xhr.status == 0 && xhr.response) {
              var packageData = xhr.response;
              callback2(packageData);
            } else {
              throw new Error(xhr.statusText + " : " + xhr.responseURL);
            }
          };
          xhr.send(null);
        }
        var fetchedCallback = null;
        var fetched = Module["getPreloadedPackage"] ? Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;
        if (!fetched)
          fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
            if (fetchedCallback) {
              fetchedCallback(data);
              fetchedCallback = null;
            } else {
              fetched = data;
            }
          });
        function runWithFS() {
          function assert2(check, msg) {
            if (!check)
              throw msg + new Error().stack;
          }
          Module["FS_createPath"]("/", "libraries", true, true);
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function(mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module["addRunDependency"]("fp " + this.name);
            },
            send: function() {
            },
            onload: function() {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function(byteArray) {
              var that = this;
              Module["FS_createDataFile"](this.name, null, byteArray, true, true, true);
              Module["removeRunDependency"]("fp " + that.name);
              this.requests[this.name] = null;
            }
          };
          var files = metadata["files"];
          for (var i = 0; i < files.length; ++i) {
            new DataRequest(files[i]["start"], files[i]["end"], files[i]["audio"]).open("GET", files[i]["filename"]);
          }
          function processPackageData(arrayBuffer) {
            Module.finishedDataFileDownloads++;
            assert2(arrayBuffer, "Loading data file failed.");
            assert2(arrayBuffer instanceof ArrayBuffer, "bad input to processPackageData");
            var byteArray = new Uint8Array(arrayBuffer);
            DataRequest.prototype.byteArray = byteArray;
            var files2 = metadata["files"];
            for (var i2 = 0; i2 < files2.length; ++i2) {
              DataRequest.prototype.requests[files2[i2].filename].onload();
            }
            Module["removeRunDependency"]("datafile_../../lib/libfaust-wasm.data");
          }
          Module["addRunDependency"]("datafile_../../lib/libfaust-wasm.data");
          if (!Module.preloadResults)
            Module.preloadResults = {};
          Module.preloadResults[PACKAGE_NAME] = { fromCache: false };
          if (fetched) {
            processPackageData(fetched);
            fetched = null;
          } else {
            fetchedCallback = processPackageData;
          }
        }
        if (Module["calledRun"]) {
          runWithFS();
        } else {
          if (!Module["preRun"])
            Module["preRun"] = [];
          Module["preRun"].push(runWithFS);
        }
      };
      loadPackage({
        files: [
          { filename: "/libraries/hoa.lib", start: 0, end: 13105, audio: 0 },
          {
            filename: "/libraries/compressors.lib",
            start: 13105,
            end: 58859,
            audio: 0
          },
          {
            filename: "/libraries/basics.lib",
            start: 58859,
            end: 110385,
            audio: 0
          },
          {
            filename: "/libraries/dx7.lib",
            start: 110385,
            end: 179488,
            audio: 0
          },
          {
            filename: "/libraries/analyzers.lib",
            start: 179488,
            end: 212357,
            audio: 0
          },
          {
            filename: "/libraries/spats.lib",
            start: 212357,
            end: 217531,
            audio: 0
          },
          {
            filename: "/libraries/envelopes.lib",
            start: 217531,
            end: 228127,
            audio: 0
          },
          {
            filename: "/libraries/oscillators.lib",
            start: 228127,
            end: 275738,
            audio: 0
          },
          {
            filename: "/libraries/mi.lib",
            start: 275738,
            end: 293026,
            audio: 0
          },
          {
            filename: "/libraries/misceffects.lib",
            start: 293026,
            end: 314755,
            audio: 0
          },
          {
            filename: "/libraries/version.lib",
            start: 314755,
            end: 315662,
            audio: 0
          },
          {
            filename: "/libraries/webaudio.lib",
            start: 315662,
            end: 327785,
            audio: 0
          },
          {
            filename: "/libraries/math.lib",
            start: 327785,
            end: 349263,
            audio: 0
          },
          {
            filename: "/libraries/stdfaust.lib",
            start: 349263,
            end: 350533,
            audio: 0
          },
          {
            filename: "/libraries/filter.lib",
            start: 350533,
            end: 415919,
            audio: 0
          },
          {
            filename: "/libraries/delays.lib",
            start: 415919,
            end: 430403,
            audio: 0
          },
          {
            filename: "/libraries/routes.lib",
            start: 430403,
            end: 437029,
            audio: 0
          },
          {
            filename: "/libraries/soundfiles.lib",
            start: 437029,
            end: 446390,
            audio: 0
          },
          {
            filename: "/libraries/tonestacks.lib",
            start: 446390,
            end: 458744,
            audio: 0
          },
          {
            filename: "/libraries/aanl.lib",
            start: 458744,
            end: 484841,
            audio: 0
          },
          {
            filename: "/libraries/wdmodels.lib",
            start: 484841,
            end: 574662,
            audio: 0
          },
          {
            filename: "/libraries/all.lib",
            start: 574662,
            end: 575678,
            audio: 0
          },
          {
            filename: "/libraries/music.lib",
            start: 575678,
            end: 594112,
            audio: 0
          },
          {
            filename: "/libraries/tubes.lib",
            start: 594112,
            end: 943901,
            audio: 0
          },
          {
            filename: "/libraries/effect.lib",
            start: 943901,
            end: 1012931,
            audio: 0
          },
          {
            filename: "/libraries/vaeffects.lib",
            start: 1012931,
            end: 1048800,
            audio: 0
          },
          {
            filename: "/libraries/maxmsp.lib",
            start: 1048800,
            end: 1056659,
            audio: 0
          },
          {
            filename: "/libraries/platform.lib",
            start: 1056659,
            end: 1059739,
            audio: 0
          },
          {
            filename: "/libraries/synths.lib",
            start: 1059739,
            end: 1070990,
            audio: 0
          },
          {
            filename: "/libraries/sf.lib",
            start: 1070990,
            end: 1072056,
            audio: 0
          },
          {
            filename: "/libraries/fds.lib",
            start: 1072056,
            end: 1092602,
            audio: 0
          },
          {
            filename: "/libraries/reducemaps.lib",
            start: 1092602,
            end: 1097438,
            audio: 0
          },
          {
            filename: "/libraries/phaflangers.lib",
            start: 1097438,
            end: 1107359,
            audio: 0
          },
          {
            filename: "/libraries/filters.lib",
            start: 1107359,
            end: 1212987,
            audio: 0
          },
          {
            filename: "/libraries/signals.lib",
            start: 1212987,
            end: 1224932,
            audio: 0
          },
          {
            filename: "/libraries/instruments.lib",
            start: 1224932,
            end: 1234327,
            audio: 0
          },
          {
            filename: "/libraries/quantizers.lib",
            start: 1234327,
            end: 1244180,
            audio: 0
          },
          {
            filename: "/libraries/noises.lib",
            start: 1244180,
            end: 1258842,
            audio: 0
          },
          {
            filename: "/libraries/oscillator.lib",
            start: 1258842,
            end: 1278693,
            audio: 0
          },
          {
            filename: "/libraries/interpolators.lib",
            start: 1278693,
            end: 1301737,
            audio: 0
          },
          {
            filename: "/libraries/demos.lib",
            start: 1301737,
            end: 1364872,
            audio: 0
          },
          {
            filename: "/libraries/reverbs.lib",
            start: 1364872,
            end: 1402697,
            audio: 0
          },
          {
            filename: "/libraries/physmodels.lib",
            start: 1402697,
            end: 1573680,
            audio: 0
          },
          {
            filename: "/libraries/maths.lib",
            start: 1573680,
            end: 1595081,
            audio: 0
          }
        ],
        remote_package_size: 1595081,
        package_uuid: "04ea3dc2-3649-4af3-b126-173b06afc41a"
      });
    })();
    var moduleOverrides = {};
    var key;
    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }
    var thisProgram = "./this.program";
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    if (Module["ENVIRONMENT"]) {
      throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
    }
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readBinary;
    var nodeFS;
    var nodePath;
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require("path").dirname(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }
      read_ = function shell_read(filename, binary) {
        if (!nodeFS)
          nodeFS = require("fs");
        if (!nodePath)
          nodePath = require("path");
        filename = nodePath["normalize"](filename);
        return nodeFS["readFileSync"](filename, binary ? null : "utf8");
      };
      readBinary = function readBinary2(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\\\/g, "/");
      }
      process["argv"].slice(2);
      process["on"]("uncaughtException", function(ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", abort);
      Module["inspect"] = function() {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          return read(f);
        };
      }
      readBinary = function readBinary2(f) {
        var data;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };
      if (typeof scriptArgs != "undefined") {
        scriptArgs;
      }
      if (typeof print !== "undefined") {
        if (typeof console === "undefined")
          console = {};
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      {
        read_ = function shell_read(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function readBinary2(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
      }
    } else {
      throw new Error("environment detection error");
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = null;
    if (Module["arguments"])
      Module["arguments"];
    if (!Object.getOwnPropertyDescriptor(Module, "arguments"))
      Object.defineProperty(Module, "arguments", {
        configurable: true,
        get: function() {
          abort("Module.arguments has been replaced with plain arguments_");
        }
      });
    if (Module["thisProgram"])
      thisProgram = Module["thisProgram"];
    if (!Object.getOwnPropertyDescriptor(Module, "thisProgram"))
      Object.defineProperty(Module, "thisProgram", {
        configurable: true,
        get: function() {
          abort("Module.thisProgram has been replaced with plain thisProgram");
        }
      });
    if (Module["quit"])
      Module["quit"];
    if (!Object.getOwnPropertyDescriptor(Module, "quit"))
      Object.defineProperty(Module, "quit", {
        configurable: true,
        get: function() {
          abort("Module.quit has been replaced with plain quit_");
        }
      });
    assert(typeof Module["memoryInitializerPrefixURL"] === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["pthreadMainPrefixURL"] === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["cdInitializerPrefixURL"] === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["filePackagePrefixURL"] === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["read"] === "undefined", "Module.read option was removed (modify read_ in JS)");
    assert(typeof Module["readAsync"] === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
    assert(typeof Module["readBinary"] === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
    assert(typeof Module["setWindowTitle"] === "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
    assert(typeof Module["TOTAL_MEMORY"] === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
    if (!Object.getOwnPropertyDescriptor(Module, "read"))
      Object.defineProperty(Module, "read", {
        configurable: true,
        get: function() {
          abort("Module.read has been replaced with plain read_");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "readAsync"))
      Object.defineProperty(Module, "readAsync", {
        configurable: true,
        get: function() {
          abort("Module.readAsync has been replaced with plain readAsync");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "readBinary"))
      Object.defineProperty(Module, "readBinary", {
        configurable: true,
        get: function() {
          abort("Module.readBinary has been replaced with plain readBinary");
        }
      });
    var stackSave;
    var stackRestore;
    var stackAlloc;
    stackSave = stackRestore = stackAlloc = function() {
      abort("cannot use the stack before compiled code is ready to run, and has provided stack access");
    };
    function dynamicAlloc(size) {
      assert(DYNAMICTOP_PTR);
      var ret = HEAP32[DYNAMICTOP_PTR >> 2];
      var end = ret + size + 15 & -16;
      assert(end <= HEAP8.length, "failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly");
      HEAP32[DYNAMICTOP_PTR >> 2] = end;
      return ret;
    }
    function getNativeTypeSize(type) {
      switch (type) {
        case "i1":
        case "i8":
          return 1;
        case "i16":
          return 2;
        case "i32":
          return 4;
        case "i64":
          return 8;
        case "float":
          return 4;
        case "double":
          return 8;
        default: {
          if (type[type.length - 1] === "*") {
            return 4;
          } else if (type[0] === "i") {
            var bits = Number(type.substr(1));
            assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
            return bits / 8;
          } else {
            return 0;
          }
        }
      }
    }
    function warnOnce(text) {
      if (!warnOnce.shown)
        warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    }
    var wasmBinary;
    if (Module["wasmBinary"])
      wasmBinary = Module["wasmBinary"];
    if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary"))
      Object.defineProperty(Module, "wasmBinary", {
        configurable: true,
        get: function() {
          abort("Module.wasmBinary has been replaced with plain wasmBinary");
        }
      });
    if (Module["noExitRuntime"])
      Module["noExitRuntime"];
    if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime"))
      Object.defineProperty(Module, "noExitRuntime", {
        configurable: true,
        get: function() {
          abort("Module.noExitRuntime has been replaced with plain noExitRuntime");
        }
      });
    if (typeof WebAssembly !== "object") {
      abort("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");
    }
    function setValue(ptr, value, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*")
        type = "i32";
      switch (type) {
        case "i1":
          HEAP8[ptr >> 0] = value;
          break;
        case "i8":
          HEAP8[ptr >> 0] = value;
          break;
        case "i16":
          HEAP16[ptr >> 1] = value;
          break;
        case "i32":
          HEAP32[ptr >> 2] = value;
          break;
        case "i64":
          tempI64 = [
            value >>> 0,
            (tempDouble = value, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
          ], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
          break;
        case "float":
          HEAPF32[ptr >> 2] = value;
          break;
        case "double":
          HEAPF64[ptr >> 3] = value;
          break;
        default:
          abort("invalid type for setValue: " + type);
      }
    }
    var wasmMemory;
    var wasmTable = new WebAssembly.Table({
      initial: 2176,
      maximum: 2176 + 0,
      element: "anyfunc"
    });
    var ABORT = false;
    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }
    function getCFunc(ident) {
      var func = Module["_" + ident];
      assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
      return func;
    }
    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = {
        string: function(str) {
          var ret2 = 0;
          if (str !== null && str !== void 0 && str !== 0) {
            var len = (str.length << 2) + 1;
            ret2 = stackAlloc(len);
            stringToUTF8(str, ret2, len);
          }
          return ret2;
        },
        array: function(arr) {
          var ret2 = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret2);
          return ret2;
        }
      };
      function convertReturnValue(ret2) {
        if (returnType === "string")
          return UTF8ToString(ret2);
        if (returnType === "boolean")
          return Boolean(ret2);
        return ret2;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      assert(returnType !== "array", 'Return type should not be "array".');
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0)
              stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0)
        stackRestore(stack);
      return ret;
    }
    function cwrap(ident, returnType, argTypes, opts) {
      return function() {
        return ccall(ident, returnType, argTypes, arguments);
      };
    }
    var ALLOC_STACK = 1;
    var ALLOC_NONE = 3;
    function allocate(slab, types, allocator, ptr) {
      var zeroinit, size;
      if (typeof slab === "number") {
        zeroinit = true;
        size = slab;
      } else {
        zeroinit = false;
        size = slab.length;
      }
      var singleType = typeof types === "string" ? types : null;
      var ret;
      if (allocator == ALLOC_NONE) {
        ret = ptr;
      } else {
        ret = [_malloc, stackAlloc, dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length));
      }
      if (zeroinit) {
        var stop;
        ptr = ret;
        assert((ret & 3) == 0);
        stop = ret + (size & ~3);
        for (; ptr < stop; ptr += 4) {
          HEAP32[ptr >> 2] = 0;
        }
        stop = ret + size;
        while (ptr < stop) {
          HEAP8[ptr++ >> 0] = 0;
        }
        return ret;
      }
      if (singleType === "i8") {
        if (slab.subarray || slab.slice) {
          HEAPU8.set(slab, ret);
        } else {
          HEAPU8.set(new Uint8Array(slab), ret);
        }
        return ret;
      }
      var i = 0, type, typeSize, previousType;
      while (i < size) {
        var curr = slab[i];
        type = singleType || types[i];
        if (type === 0) {
          i++;
          continue;
        }
        assert(type, "Must know what type to store in allocate!");
        if (type == "i64")
          type = "i32";
        setValue(ret + i, curr, type);
        if (previousType !== type) {
          typeSize = getNativeTypeSize(type);
          previousType = type;
        }
        i += typeSize;
      }
      return ret;
    }
    function getMemory(size) {
      if (!runtimeInitialized)
        return dynamicAlloc(size);
      return _malloc(size);
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (u8Array[endPtr] && !(endPtr >= endIdx))
        ++endPtr;
      if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = u8Array[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          var u1 = u8Array[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }
          var u2 = u8Array[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            if ((u0 & 248) != 240)
              warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!");
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0))
        return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx)
            break;
          outU8Array[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx)
            break;
          outU8Array[outIdx++] = 192 | u >> 6;
          outU8Array[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx)
            break;
          outU8Array[outIdx++] = 224 | u >> 12;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx)
            break;
          if (u >= 2097152)
            warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
          outU8Array[outIdx++] = 240 | u >> 18;
          outU8Array[outIdx++] = 128 | u >> 12 & 63;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        }
      }
      outU8Array[outIdx] = 0;
      return outIdx - startIdx;
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }
    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
          u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127)
          ++len;
        else if (u <= 2047)
          len += 2;
        else if (u <= 65535)
          len += 3;
        else
          len += 4;
      }
      return len;
    }
    var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : void 0;
    function UTF16ToString(ptr) {
      assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
      var endPtr = ptr;
      var idx = endPtr >> 1;
      while (HEAP16[idx])
        ++idx;
      endPtr = idx << 1;
      if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
      } else {
        var i = 0;
        var str = "";
        while (1) {
          var codeUnit = HEAP16[ptr + i * 2 >> 1];
          if (codeUnit == 0)
            return str;
          ++i;
          str += String.fromCharCode(codeUnit);
        }
      }
    }
    function stringToUTF16(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
      assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      if (maxBytesToWrite === void 0) {
        maxBytesToWrite = 2147483647;
      }
      if (maxBytesToWrite < 2)
        return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
      }
      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr;
    }
    function lengthBytesUTF16(str) {
      return str.length * 2;
    }
    function UTF32ToString(ptr) {
      assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
      var i = 0;
      var str = "";
      while (1) {
        var utf32 = HEAP32[ptr + i * 4 >> 2];
        if (utf32 == 0)
          return str;
        ++i;
        if (utf32 >= 65536) {
          var ch = utf32 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        } else {
          str += String.fromCharCode(utf32);
        }
      }
    }
    function stringToUTF32(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
      assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      if (maxBytesToWrite === void 0) {
        maxBytesToWrite = 2147483647;
      }
      if (maxBytesToWrite < 4)
        return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
        }
        HEAP32[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr)
          break;
      }
      HEAP32[outPtr >> 2] = 0;
      return outPtr - startPtr;
    }
    function lengthBytesUTF32(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343)
          ++i;
        len += 4;
      }
      return len;
    }
    function allocateUTF8(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret)
        stringToUTF8Array(str, HEAP8, ret, size);
      return ret;
    }
    function writeArrayToMemory(array, buffer2) {
      assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
      HEAP8.set(array, buffer2);
    }
    function writeAsciiToMemory(str, buffer2, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === str.charCodeAt(i) & 255);
        HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull)
        HEAP8[buffer2 >> 0] = 0;
    }
    var WASM_PAGE_SIZE = 65536;
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }
      return x;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var STACK_BASE = 7643408, STACK_MAX = 2400528, DYNAMIC_BASE = 7643408, DYNAMICTOP_PTR = 2400368;
    assert(STACK_BASE % 16 === 0, "stack must start aligned");
    assert(DYNAMIC_BASE % 16 === 0, "heap must start aligned");
    var TOTAL_STACK = 5242880;
    if (Module["TOTAL_STACK"])
      assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");
    var INITIAL_INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY"))
      Object.defineProperty(Module, "INITIAL_MEMORY", {
        configurable: true,
        get: function() {
          abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY");
        }
      });
    assert(INITIAL_INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
    assert(typeof Int32Array !== "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray !== void 0 && Int32Array.prototype.set !== void 0, "JS engine does not provide full typed array support");
    if (Module["wasmMemory"]) {
      wasmMemory = Module["wasmMemory"];
    } else {
      wasmMemory = new WebAssembly.Memory({
        initial: INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      });
    }
    if (wasmMemory) {
      buffer = wasmMemory.buffer;
    }
    INITIAL_INITIAL_MEMORY = buffer.byteLength;
    assert(INITIAL_INITIAL_MEMORY % WASM_PAGE_SIZE === 0);
    updateGlobalBufferAndViews(buffer);
    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
    function writeStackCookie() {
      assert((STACK_MAX & 3) == 0);
      HEAPU32[(STACK_MAX >> 2) + 1] = 34821223;
      HEAPU32[(STACK_MAX >> 2) + 2] = 2310721022;
      HEAP32[0] = 1668509029;
    }
    function checkStackCookie() {
      var cookie1 = HEAPU32[(STACK_MAX >> 2) + 1];
      var cookie2 = HEAPU32[(STACK_MAX >> 2) + 2];
      if (cookie1 != 34821223 || cookie2 != 2310721022) {
        abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " " + cookie1.toString(16));
      }
      if (HEAP32[0] !== 1668509029)
        abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
    }
    function abortStackOverflow(allocSize) {
      abort("Stack overflow! Attempted to allocate " + allocSize + " bytes on the stack, but stack has only " + (STACK_MAX - stackSave() + allocSize) + " bytes available!");
    }
    (function() {
      var h16 = new Int16Array(1);
      var h8 = new Int8Array(h16.buffer);
      h16[0] = 25459;
      if (h8[0] !== 115 || h8[1] !== 99)
        throw "Runtime error: expected the system to be little-endian!";
    })();
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback2 = callbacks.shift();
        if (typeof callback2 == "function") {
          callback2();
          continue;
        }
        var func = callback2.func;
        if (typeof func === "number") {
          if (callback2.arg === void 0) {
            Module["dynCall_v"](func);
          } else {
            Module["dynCall_vi"](func, callback2.arg);
          }
        } else {
          func(callback2.arg === void 0 ? null : callback2.arg);
        }
      }
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      checkStackCookie();
      assert(!runtimeInitialized);
      runtimeInitialized = true;
      SOCKFS.root = FS.mount(SOCKFS, {}, null);
      if (!Module["noFSInit"] && !FS.init.initialized)
        FS.init();
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      checkStackCookie();
      FS.ignorePermissions = false;
      callRuntimeCallbacks(__ATMAIN__);
    }
    function postRun() {
      checkStackCookie();
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    var Math_abs = Math.abs;
    var Math_ceil = Math.ceil;
    var Math_floor = Math.floor;
    var Math_min = Math.min;
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    var runDependencyTracking = {};
    function getUniqueRunDependency(id) {
      var orig = id;
      while (1) {
        if (!runDependencyTracking[id])
          return id;
        id = orig + Math.random();
      }
    }
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (id) {
        assert(!runDependencyTracking[id]);
        runDependencyTracking[id] = 1;
        if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
          runDependencyWatcher = setInterval(function() {
            if (ABORT) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
              return;
            }
            var shown = false;
            for (var dep in runDependencyTracking) {
              if (!shown) {
                shown = true;
                err("still waiting on run dependencies:");
              }
              err("dependency: " + dep);
            }
            if (shown) {
              err("(end of list)");
            }
          }, 1e4);
        }
      } else {
        err("warning: run dependency added without ID");
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (id) {
        assert(runDependencyTracking[id]);
        delete runDependencyTracking[id];
      } else {
        err("warning: run dependency removed without ID");
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback2 = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback2();
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      what += "";
      out(what);
      err(what);
      ABORT = true;
      var output = "abort(" + what + ") at " + stackTrace();
      what = output;
      throw new WebAssembly.RuntimeError(what);
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
    }
    var wasmBinaryFile = "libfaust-wasm.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinary() {
      try {
        if (wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(wasmBinaryFile);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err2) {
        abort(err2);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
        return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
          if (!response["ok"]) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response["arrayBuffer"]();
        }).catch(function() {
          return getBinary();
        });
      }
      return new Promise(function(resolve, reject) {
        resolve(getBinary());
      });
    }
    function createWasm() {
      var info = { env: asmLibraryArg, wasi_snapshot_preview1: asmLibraryArg };
      function receiveInstance(instance, module2) {
        var exports22 = instance.exports;
        Module["asm"] = exports22;
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      var trueModule = Module;
      function receiveInstantiatedSource(output) {
        assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
        trueModule = null;
        receiveInstance(output["instance"]);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(receiver, function(reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
          fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiatedSource, function(reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              instantiateArrayBuffer(receiveInstantiatedSource);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiatedSource);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports2 = Module["instantiateWasm"](info, receiveInstance);
          return exports2;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false;
        }
      }
      instantiateAsync();
      return {};
    }
    var tempDouble;
    var tempI64;
    var ASM_CONSTS = {
      299792: function($0) {
        var dsp_code = "";
        try {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET", Module.UTF8ToString($0), false);
          xmlhttp.send();
          if (xmlhttp.status == 200) {
            dsp_code = xmlhttp.responseText;
          }
        } catch (e) {
          console.log(e);
        }
        return allocate(intArrayFromString(dsp_code), "i8", ALLOC_STACK);
      },
      420260: function($0) {
        faust_module.faust.wasm_instance[$0] = null;
      },
      420588: function($0) {
        return faust_module._malloc($0);
      },
      420625: function($0) {
        faust_module._free($0);
      },
      420653: function($0, $1) {
        return faust_module.faust.wasm_instance[$0].exports.getNumInputs($1);
      },
      420730: function($0, $1) {
        return faust_module.faust.wasm_instance[$0].exports.getNumOutputs($1);
      },
      420805: function($0, $1) {
        return faust_module.faust.wasm_instance[$0].exports.getSampleRate($1);
      },
      420880: function($0, $1, $2) {
        faust_module.faust.wasm_instance[$0].exports.init($1, $2);
      },
      420947: function($0, $1, $2) {
        faust_module.faust.wasm_instance[$0].exports.instanceInit($1, $2);
      },
      421018: function($0, $1, $2) {
        faust_module.faust.wasm_instance[$0].exports.instanceConstants($1, $2);
      },
      421094: function($0, $1) {
        faust_module.faust.wasm_instance[$0].exports.instanceResetUserInterface($1);
      },
      421175: function($0, $1) {
        faust_module.faust.wasm_instance[$0].exports.instanceClear($1);
      },
      421243: function($0, $1, $2, $3, $4) {
        faust_module.faust.wasm_instance[$0].exports.compute($1, $2, $3, $4);
      }
    };
    function _emscripten_asm_const_iii(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }
    function connectMemory() {
      faust_module.faust = faust_module.faust || {};
      faust_module.faust.memory = faust_module.faust.memory || wasmMemory;
    }
    __ATINIT__.push({
      func: function() {
        ___wasm_call_ctors();
      }
    });
    function demangle(func) {
      warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
      return func;
    }
    function demangleAll(text) {
      var regex = /\\b_Z[\\w\\d_]+/g;
      return text.replace(regex, function(x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]";
      });
    }
    function jsStackTrace() {
      var err2 = new Error();
      if (!err2.stack) {
        try {
          throw new Error();
        } catch (e) {
          err2 = e;
        }
        if (!err2.stack) {
          return "(no stack trace available)";
        }
      }
      return err2.stack.toString();
    }
    function stackTrace() {
      var js = jsStackTrace();
      if (Module["extraStackTrace"])
        js += "\\n" + Module["extraStackTrace"]();
      return demangleAll(js);
    }
    function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }
    function ___cxa_throw(ptr, type, destructor) {
      throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
    }
    function ___handle_stack_overflow() {
      abort("stack overflow");
    }
    function ___setErrNo(value) {
      if (Module["___errno_location"])
        HEAP32[Module["___errno_location"]() >> 2] = value;
      else
        err("failed to set errno from JS");
      return value;
    }
    function ___map_file(pathname, size) {
      ___setErrNo(63);
      return -1;
    }
    var PATH = {
      splitPath: function(filename) {
        var splitPathRe = /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
      normalizeArray: function(parts, allowAboveRoot) {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === ".") {
            parts.splice(i, 1);
          } else if (last === "..") {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift("..");
          }
        }
        return parts;
      },
      normalize: function(path) {
        var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(path.split("/").filter(function(p) {
          return !!p;
        }), !isAbsolute).join("/");
        if (!path && !isAbsolute) {
          path = ".";
        }
        if (path && trailingSlash) {
          path += "/";
        }
        return (isAbsolute ? "/" : "") + path;
      },
      dirname: function(path) {
        var result = PATH.splitPath(path), root = result[0], dir = result[1];
        if (!root && !dir) {
          return ".";
        }
        if (dir) {
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
      basename: function(path) {
        if (path === "/")
          return "/";
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1)
          return path;
        return path.substr(lastSlash + 1);
      },
      extname: function(path) {
        return PATH.splitPath(path)[3];
      },
      join: function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join("/"));
      },
      join2: function(l, r) {
        return PATH.normalize(l + "/" + r);
      }
    };
    var PATH_FS = {
      resolve: function() {
        var resolvedPath = "", resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = i >= 0 ? arguments[i] : FS.cwd();
          if (typeof path !== "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!path) {
            return "";
          }
          resolvedPath = path + "/" + resolvedPath;
          resolvedAbsolute = path.charAt(0) === "/";
        }
        resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
      },
      relative: function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== "")
              break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== "")
              break;
          }
          if (start > end)
            return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push("..");
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/");
      }
    };
    var TTY = {
      ttys: [],
      init: function() {
      },
      shutdown: function() {
      },
      register: function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
      stream_ops: {
        open: function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
        close: function(stream) {
          stream.tty.ops.flush(stream.tty);
        },
        flush: function(stream) {
          stream.tty.ops.flush(stream.tty);
        },
        read: function(stream, buffer2, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === void 0 && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === void 0)
              break;
            bytesRead++;
            buffer2[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
        write: function(stream, buffer2, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer2[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }
      },
      default_tty_ops: {
        get_char: function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              var BUFSIZE = 256;
              var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
              var bytesRead = 0;
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch (e) {
                if (e.toString().indexOf("EOF") != -1)
                  bytesRead = 0;
                else
                  throw e;
              }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString("utf-8");
              } else {
                result = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\\n";
              }
            } else if (typeof readline == "function") {
              result = readline();
              if (result !== null) {
                result += "\\n";
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },
        put_char: function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        },
        flush: function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }
      },
      default_tty1_ops: {
        put_char: function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        },
        flush: function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }
      }
    };
    var MEMFS = {
      ops_table: null,
      mount: function(mount) {
        return MEMFS.createNode(null, "/", 16384 | 511, 0);
      },
      createNode: function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: { llseek: MEMFS.stream_ops.llseek }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0;
          node.contents = null;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },
      getFileDataAsRegularArray: function(node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i)
            arr.push(node.contents[i]);
          return arr;
        }
        return node.contents;
      },
      getFileDataAsTypedArray: function(node) {
        if (!node.contents)
          return new Uint8Array(0);
        if (node.contents.subarray)
          return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents);
      },
      expandFileStorage: function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity)
          return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) | 0);
        if (prevCapacity != 0)
          newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0)
          node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
        return;
      },
      resizeFileStorage: function(node, newSize) {
        if (node.usedBytes == newSize)
          return;
        if (newSize == 0) {
          node.contents = null;
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize);
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
          }
          node.usedBytes = newSize;
          return;
        }
        if (!node.contents)
          node.contents = [];
        if (node.contents.length > newSize)
          node.contents.length = newSize;
        else
          while (node.contents.length < newSize)
            node.contents.push(0);
        node.usedBytes = newSize;
      },
      node_ops: {
        getattr: function(node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
        setattr: function(node, attr) {
          if (attr.mode !== void 0) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== void 0) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== void 0) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
        lookup: function(parent, name) {
          throw FS.genericErrors[44];
        },
        mknod: function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
        rename: function(old_node, new_dir, new_name) {
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },
        unlink: function(parent, name) {
          delete parent.contents[name];
        },
        rmdir: function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },
        readdir: function(node) {
          var entries = [".", ".."];
          for (var key2 in node.contents) {
            if (!node.contents.hasOwnProperty(key2)) {
              continue;
            }
            entries.push(key2);
          }
          return entries;
        },
        symlink: function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        },
        readlink: function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }
      },
      stream_ops: {
        read: function(stream, buffer2, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes)
            return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) {
            buffer2.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++)
              buffer2[offset + i] = contents[position + i];
          }
          return size;
        },
        write: function(stream, buffer2, offset, length, position, canOwn) {
          assert(!(buffer2 instanceof ArrayBuffer));
          if (buffer2.buffer === HEAP8.buffer) {
            if (canOwn) {
              warnOnce("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)");
            }
            canOwn = false;
          }
          if (!length)
            return 0;
          var node = stream.node;
          node.timestamp = Date.now();
          if (buffer2.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              assert(position === 0, "canOwn must imply no weird position inside the file");
              node.contents = buffer2.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = buffer2.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(buffer2.subarray(offset, offset + length), position);
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer2.subarray)
            node.contents.set(buffer2.subarray(offset, offset + length), position);
          else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer2[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
        llseek: function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
        allocate: function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
        mmap: function(stream, buffer2, offset, length, position, prot, flags) {
          assert(!(buffer2 instanceof ArrayBuffer));
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && contents.buffer === buffer2.buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            var fromHeap = buffer2.buffer == HEAP8.buffer;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            (fromHeap ? HEAP8 : buffer2).set(contents, ptr);
          }
          return { ptr, allocated };
        },
        msync: function(stream, buffer2, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            return 0;
          }
          MEMFS.stream_ops.write(stream, buffer2, 0, length, offset, false);
          return 0;
        }
      }
    };
    var ERRNO_MESSAGES = {
      0: "Success",
      1: "Arg list too long",
      2: "Permission denied",
      3: "Address already in use",
      4: "Address not available",
      5: "Address family not supported by protocol family",
      6: "No more processes",
      7: "Socket already connected",
      8: "Bad file number",
      9: "Trying to read unreadable message",
      10: "Mount device busy",
      11: "Operation canceled",
      12: "No children",
      13: "Connection aborted",
      14: "Connection refused",
      15: "Connection reset by peer",
      16: "File locking deadlock error",
      17: "Destination address required",
      18: "Math arg out of domain of func",
      19: "Quota exceeded",
      20: "File exists",
      21: "Bad address",
      22: "File too large",
      23: "Host is unreachable",
      24: "Identifier removed",
      25: "Illegal byte sequence",
      26: "Connection already in progress",
      27: "Interrupted system call",
      28: "Invalid argument",
      29: "I/O error",
      30: "Socket is already connected",
      31: "Is a directory",
      32: "Too many symbolic links",
      33: "Too many open files",
      34: "Too many links",
      35: "Message too long",
      36: "Multihop attempted",
      37: "File or path name too long",
      38: "Network interface is not configured",
      39: "Connection reset by network",
      40: "Network is unreachable",
      41: "Too many open files in system",
      42: "No buffer space available",
      43: "No such device",
      44: "No such file or directory",
      45: "Exec format error",
      46: "No record locks available",
      47: "The link has been severed",
      48: "Not enough core",
      49: "No message of desired type",
      50: "Protocol not available",
      51: "No space left on device",
      52: "Function not implemented",
      53: "Socket is not connected",
      54: "Not a directory",
      55: "Directory not empty",
      56: "State not recoverable",
      57: "Socket operation on non-socket",
      59: "Not a typewriter",
      60: "No such device or address",
      61: "Value too large for defined data type",
      62: "Previous owner died",
      63: "Not super-user",
      64: "Broken pipe",
      65: "Protocol error",
      66: "Unknown protocol",
      67: "Protocol wrong type for socket",
      68: "Math result not representable",
      69: "Read only file system",
      70: "Illegal seek",
      71: "No such process",
      72: "Stale file handle",
      73: "Connection timed out",
      74: "Text file busy",
      75: "Cross-device link",
      100: "Device not a stream",
      101: "Bad font file fmt",
      102: "Invalid slot",
      103: "Invalid request code",
      104: "No anode",
      105: "Block device required",
      106: "Channel number out of range",
      107: "Level 3 halted",
      108: "Level 3 reset",
      109: "Link number out of range",
      110: "Protocol driver not attached",
      111: "No CSI structure available",
      112: "Level 2 halted",
      113: "Invalid exchange",
      114: "Invalid request descriptor",
      115: "Exchange full",
      116: "No data (for no delay io)",
      117: "Timer expired",
      118: "Out of streams resources",
      119: "Machine is not on the network",
      120: "Package not installed",
      121: "The object is remote",
      122: "Advertise error",
      123: "Srmount error",
      124: "Communication error on send",
      125: "Cross mount point (not really error)",
      126: "Given log. name not unique",
      127: "f.d. invalid for this operation",
      128: "Remote address changed",
      129: "Can   access a needed shared lib",
      130: "Accessing a corrupted shared lib",
      131: ".lib section in a.out corrupted",
      132: "Attempting to link in too many libs",
      133: "Attempting to exec a shared library",
      135: "Streams pipe error",
      136: "Too many users",
      137: "Socket type not supported",
      138: "Not supported",
      139: "Protocol family not supported",
      140: "Can't send after socket shutdown",
      141: "Too many references",
      142: "Host is down",
      148: "No medium (in tape drive)",
      156: "Level 2 not synchronized"
    };
    var ERRNO_CODES = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135
    };
    var FS = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      trackingDelegate: {},
      tracking: { openFlags: { READ: 1, WRITE: 2 } },
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      handleFSError: function(e) {
        if (!(e instanceof FS.ErrnoError))
          throw e + " : " + stackTrace();
        return ___setErrNo(e.errno);
      },
      lookupPath: function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
        if (!path)
          return { path: "", node: null };
        var defaults = { follow_mount: true, recurse_count: 0 };
        for (var key2 in defaults) {
          if (opts[key2] === void 0) {
            opts[key2] = defaults[key2];
          }
        }
        if (opts.recurse_count > 8) {
          throw new FS.ErrnoError(32);
        }
        var parts = PATH.normalizeArray(path.split("/").filter(function(p) {
          return !!p;
        }), false);
        var current = FS.root;
        var current_path = "/";
        for (var i = 0; i < parts.length; i++) {
          var islast = i === parts.length - 1;
          if (islast && opts.parent) {
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          if (FS.isMountpoint(current)) {
            if (!islast || islast && opts.follow_mount) {
              current = current.mounted.root;
            }
          }
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, {
                recurse_count: opts.recurse_count
              });
              current = lookup.node;
              if (count++ > 40) {
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },
      getPath: function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path)
              return mount;
            return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
          }
          path = path ? node.name + "/" + path : node.name;
          node = node.parent;
        }
      },
      hashName: function(parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
        }
        return (parentid + hash >>> 0) % FS.nameTable.length;
      },
      hashAddNode: function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
      hashRemoveNode: function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
      lookupNode: function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        return FS.lookup(parent, name);
      },
      createNode: function(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node;
      },
      destroyNode: function(node) {
        FS.hashRemoveNode(node);
      },
      isRoot: function(node) {
        return node === node.parent;
      },
      isMountpoint: function(node) {
        return !!node.mounted;
      },
      isFile: function(mode) {
        return (mode & 61440) === 32768;
      },
      isDir: function(mode) {
        return (mode & 61440) === 16384;
      },
      isLink: function(mode) {
        return (mode & 61440) === 40960;
      },
      isChrdev: function(mode) {
        return (mode & 61440) === 8192;
      },
      isBlkdev: function(mode) {
        return (mode & 61440) === 24576;
      },
      isFIFO: function(mode) {
        return (mode & 61440) === 4096;
      },
      isSocket: function(mode) {
        return (mode & 49152) === 49152;
      },
      flagModes: {
        r: 0,
        rs: 1052672,
        "r+": 2,
        w: 577,
        wx: 705,
        xw: 705,
        "w+": 578,
        "wx+": 706,
        "xw+": 706,
        a: 1089,
        ax: 1217,
        xa: 1217,
        "a+": 1090,
        "ax+": 1218,
        "xa+": 1218
      },
      modeStringToFlags: function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === "undefined") {
          throw new Error("Unknown file open mode: " + str);
        }
        return flags;
      },
      flagsToPermissionString: function(flag) {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
          perms += "w";
        }
        return perms;
      },
      nodePermissions: function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        if (perms.indexOf("r") !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf("w") !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf("x") !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup: function(dir) {
        var errCode = FS.nodePermissions(dir, "x");
        if (errCode)
          return errCode;
        if (!dir.node_ops.lookup)
          return 2;
        return 0;
      },
      mayCreate: function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, "wx");
      },
      mayDelete: function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, "wx");
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
      mayOpen: function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
      MAX_OPEN_FDS: 4096,
      nextfd: function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
      getStream: function(fd) {
        return FS.streams[fd];
      },
      createStream: function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function() {
          };
          FS.FSStream.prototype = {
            object: {
              get: function() {
                return this.node;
              },
              set: function(val) {
                this.node = val;
              }
            },
            isRead: {
              get: function() {
                return (this.flags & 2097155) !== 1;
              }
            },
            isWrite: {
              get: function() {
                return (this.flags & 2097155) !== 0;
              }
            },
            isAppend: {
              get: function() {
                return this.flags & 1024;
              }
            }
          };
        }
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
      closeStream: function(fd) {
        FS.streams[fd] = null;
      },
      chrdev_stream_ops: {
        open: function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },
        llseek: function() {
          throw new FS.ErrnoError(70);
        }
      },
      major: function(dev) {
        return dev >> 8;
      },
      minor: function(dev) {
        return dev & 255;
      },
      makedev: function(ma, mi) {
        return ma << 8 | mi;
      },
      registerDevice: function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
      getDevice: function(dev) {
        return FS.devices[dev];
      },
      getMounts: function(mount) {
        var mounts = [];
        var check = [mount];
        while (check.length) {
          var m = check.pop();
          mounts.push(m);
          check.push.apply(check, m.mounts);
        }
        return mounts;
      },
      syncfs: function(populate, callback2) {
        if (typeof populate === "function") {
          callback2 = populate;
          populate = false;
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
          err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback2(errCode);
        }
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        }
        mounts.forEach(function(mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
      mount: function(type, opts, mountpoint) {
        if (typeof type === "string") {
          throw type;
        }
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          mountpoint = lookup.path;
          node = lookup.node;
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          node.mounted = mount;
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
        return mountRoot;
      },
      unmount: function(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach(function(hash) {
          var current = FS.nameTable[hash];
          while (current) {
            var next = current.name_next;
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
            current = next;
          }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
      lookup: function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
      mknod: function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
      create: function(path, mode) {
        mode = mode !== void 0 ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
      mkdir: function(path, mode) {
        mode = mode !== void 0 ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
      mkdirTree: function(path, mode) {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i])
            continue;
          d += "/" + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch (e) {
            if (e.errno != 20)
              throw e;
          }
        }
      },
      mkdev: function(path, mode, dev) {
        if (typeof dev === "undefined") {
          dev = mode;
          mode = 438;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
      symlink: function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
      rename: function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(10);
        }
        if (!old_dir || !new_dir)
          throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(28);
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(55);
        }
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
        }
        if (old_node === new_node) {
          return;
        }
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
          throw new FS.ErrnoError(10);
        }
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, "w");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate["willMovePath"]) {
            FS.trackingDelegate["willMovePath"](old_path, new_path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
        }
        FS.hashRemoveNode(old_node);
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate["onMovePath"])
            FS.trackingDelegate["onMovePath"](old_path, new_path);
        } catch (e) {
          err("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
        }
      },
      rmdir: function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate["willDeletePath"]) {
            FS.trackingDelegate["willDeletePath"](path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate["onDeletePath"])
            FS.trackingDelegate["onDeletePath"](path);
        } catch (e) {
          err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readdir: function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },
      unlink: function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate["willDeletePath"]) {
            FS.trackingDelegate["willDeletePath"](path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate["onDeletePath"])
            FS.trackingDelegate["onDeletePath"](path);
        } catch (e) {
          err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readlink: function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },
      stat: function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },
      lstat: function(path) {
        return FS.stat(path, true);
      },
      chmod: function(path, mode, dontFollow) {
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: mode & 4095 | node.mode & ~4095,
          timestamp: Date.now()
        });
      },
      lchmod: function(path, mode) {
        FS.chmod(path, mode, true);
      },
      fchmod: function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },
      chown: function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, { timestamp: Date.now() });
      },
      lchown: function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
      fchown: function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },
      truncate: function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, "w");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
      },
      ftruncate: function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },
      utime: function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
      },
      open: function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === "undefined" ? 438 : mode;
        if (flags & 64) {
          mode = mode & 4095 | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === "object") {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
            node = lookup.node;
          } catch (e) {
          }
        }
        var created = false;
        if (flags & 64) {
          if (node) {
            if (flags & 128) {
              throw new FS.ErrnoError(20);
            }
          } else {
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        if (flags & 512) {
          FS.truncate(node, 0);
        }
        flags &= ~(128 | 512);
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
          if (!FS.readFiles)
            FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate["onOpenFile"]) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate["onOpenFile"](path, trackingFlags);
          }
        } catch (e) {
          err("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
        }
        return stream;
      },
      close: function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents)
          stream.getdents = null;
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
      isClosed: function(stream) {
        return stream.fd === null;
      },
      llseek: function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
      read: function(stream, buffer2, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer2, offset, length, position);
        if (!seeking)
          stream.position += bytesRead;
        return bytesRead;
      },
      write: function(stream, buffer2, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.flags & 1024) {
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer2, offset, length, position, canOwn);
        if (!seeking)
          stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate["onWriteToFile"])
            FS.trackingDelegate["onWriteToFile"](stream.path);
        } catch (e) {
          err("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message);
        }
        return bytesWritten;
      },
      allocate: function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
      mmap: function(stream, buffer2, offset, length, position, prot, flags) {
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, buffer2, offset, length, position, prot, flags);
      },
      msync: function(stream, buffer2, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer2, offset, length, mmapFlags);
      },
      munmap: function(stream) {
        return 0;
      },
      ioctl: function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
      readFile: function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "r";
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === "binary") {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
      writeFile: function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "w";
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === "string") {
          var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        FS.close(stream);
      },
      cwd: function() {
        return FS.currentPath;
      },
      chdir: function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, "x");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
      createDefaultDirectories: function() {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user");
      },
      createDefaultDevices: function() {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() {
            return 0;
          },
          write: function(stream, buffer2, offset, length, pos) {
            return length;
          }
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var random_device;
        if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
          var randomBuffer = new Uint8Array(1);
          random_device = function() {
            crypto.getRandomValues(randomBuffer);
            return randomBuffer[0];
          };
        } else if (ENVIRONMENT_IS_NODE) {
          try {
            var crypto_module = require("crypto");
            random_device = function() {
              return crypto_module["randomBytes"](1)[0];
            };
          } catch (e) {
          }
        } else
          ;
        if (!random_device) {
          random_device = function() {
            abort("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
          };
        }
        FS.createDevice("/dev", "random", random_device);
        FS.createDevice("/dev", "urandom", random_device);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories: function() {
        FS.mkdir("/proc");
        FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount({
          mount: function() {
            var node = FS.createNode("/proc/self", "fd", 16384 | 511, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream)
                  throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: "fake" },
                  node_ops: {
                    readlink: function() {
                      return stream.path;
                    }
                  }
                };
                ret.parent = ret;
                return ret;
              }
            };
            return node;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams: function() {
        if (Module["stdin"]) {
          FS.createDevice("/dev", "stdin", Module["stdin"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdin");
        }
        if (Module["stdout"]) {
          FS.createDevice("/dev", "stdout", null, Module["stdout"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdout");
        }
        if (Module["stderr"]) {
          FS.createDevice("/dev", "stderr", null, Module["stderr"]);
        } else {
          FS.symlink("/dev/tty1", "/dev/stderr");
        }
        var stdin = FS.open("/dev/stdin", "r");
        var stdout = FS.open("/dev/stdout", "w");
        var stderr = FS.open("/dev/stderr", "w");
        assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
        assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
        assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
      },
      ensureErrnoError: function() {
        if (FS.ErrnoError)
          return;
        FS.ErrnoError = function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = function(errno2) {
            this.errno = errno2;
            for (var key2 in ERRNO_CODES) {
              if (ERRNO_CODES[key2] === errno2) {
                this.code = key2;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
          if (this.stack) {
            Object.defineProperty(this, "stack", {
              value: new Error().stack,
              writable: true
            });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = "<generic error, no stack>";
        });
      },
      staticInit: function() {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = { MEMFS };
      },
      init: function(input, output, error) {
        assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        FS.init.initialized = true;
        FS.ensureErrnoError();
        Module["stdin"] = input || Module["stdin"];
        Module["stdout"] = output || Module["stdout"];
        Module["stderr"] = error || Module["stderr"];
        FS.createStandardStreams();
      },
      quit: function() {
        FS.init.initialized = false;
        var fflush = Module["_fflush"];
        if (fflush)
          fflush(0);
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
      getMode: function(canRead, canWrite) {
        var mode = 0;
        if (canRead)
          mode |= 292 | 73;
        if (canWrite)
          mode |= 146;
        return mode;
      },
      joinPath: function(parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == "/")
          path = path.substr(1);
        return path;
      },
      absolutePath: function(relative, base) {
        return PATH_FS.resolve(base, relative);
      },
      standardizePath: function(path) {
        return PATH.normalize(path);
      },
      findObject: function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },
      analyzePath: function(path, dontResolveLastLink) {
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === "/";
        } catch (e) {
          ret.error = e.errno;
        }
        return ret;
      },
      createFolder: function(parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },
      createPath: function(parent, path, canRead, canWrite) {
        parent = typeof parent === "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part)
            continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
          }
          parent = current;
        }
        return current;
      },
      createFile: function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
      createDataFile: function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === "string") {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i)
              arr[i] = data.charCodeAt(i);
            data = arr;
          }
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, "w");
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },
      createDevice: function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major)
          FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer2, offset, length, pos) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === void 0 && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === void 0)
                break;
              bytesRead++;
              buffer2[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer2, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer2[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
      createLink: function(parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },
      forceLoadFile: function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
          return true;
        var success = true;
        if (typeof XMLHttpRequest !== "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          try {
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
        if (!success)
          ___setErrNo(29);
        return success;
      },
      createLazyFile: function(parent, name, url, canRead, canWrite) {
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
          if (idx > this.length - 1 || idx < 0) {
            return void 0;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = idx / this.chunkSize | 0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          var xhr = new XMLHttpRequest();
          xhr.open("HEAD", url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
            throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
          var chunkSize = 1024 * 1024;
          if (!hasByteServing)
            chunkSize = datalength;
          var doXHR = function(from, to) {
            if (from > to)
              throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength - 1)
              throw new Error("only " + datalength + " bytes available! programmer error!");
            var xhr2 = new XMLHttpRequest();
            xhr2.open("GET", url, false);
            if (datalength !== chunkSize)
              xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
            if (typeof Uint8Array != "undefined")
              xhr2.responseType = "arraybuffer";
            if (xhr2.overrideMimeType) {
              xhr2.overrideMimeType("text/plain; charset=x-user-defined");
            }
            xhr2.send(null);
            if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
              throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
            if (xhr2.response !== void 0) {
              return new Uint8Array(xhr2.response || []);
            } else {
              return intArrayFromString(xhr2.responseText || "", true);
            }
          };
          var lazyArray2 = this;
          lazyArray2.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum + 1) * chunkSize - 1;
            end = Math.min(end, datalength - 1);
            if (typeof lazyArray2.chunks[chunkNum] === "undefined") {
              lazyArray2.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray2.chunks[chunkNum] === "undefined")
              throw new Error("doXHR failed!");
            return lazyArray2.chunks[chunkNum];
          });
          if (usesGzip || !datalength) {
            chunkSize = datalength = 1;
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== "undefined") {
          if (!ENVIRONMENT_IS_WORKER)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        Object.defineProperties(node, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key2) {
          var fn = node.stream_ops[key2];
          stream_ops[key2] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            return fn.apply(null, arguments);
          };
        });
        stream_ops.read = function stream_ops_read(stream, buffer2, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(29);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) {
            for (var i = 0; i < size; i++) {
              buffer2[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) {
              buffer2[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },
      createPreloadedFile: function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init();
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency("cp " + fullname);
        function processData(byteArray) {
          function finish(byteArray2) {
            if (preFinish)
              preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
            }
            if (onload)
              onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module["preloadPlugins"].forEach(function(plugin) {
            if (handled)
              return;
            if (plugin["canHandle"](fullname)) {
              plugin["handle"](byteArray, fullname, finish, function() {
                if (onerror)
                  onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled)
            finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == "string") {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },
      indexedDB: function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      DB_NAME: function() {
        return "EM_FS_" + window.location.pathname;
      },
      DB_VERSION: 20,
      DB_STORE_NAME: "FILE_DATA",
      saveFilesToDB: function(paths, onload, onerror) {
        onload = onload || function() {
        };
        onerror = onerror || function() {
        };
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out("creating db");
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0)
              onload();
            else
              onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() {
              ok++;
              if (ok + fail == total)
                finish();
            };
            putRequest.onerror = function putRequest_onerror() {
              fail++;
              if (ok + fail == total)
                finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },
      loadFilesFromDB: function(paths, onload, onerror) {
        onload = onload || function() {
        };
        onerror = onerror || function() {
        };
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror;
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
          } catch (e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0)
              onload();
            else
              onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total)
                finish();
            };
            getRequest.onerror = function getRequest_onerror() {
              fail++;
              if (ok + fail == total)
                finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }
    };
    var SOCKFS = {
      mount: function(mount) {
        Module["websocket"] = Module["websocket"] && typeof Module["websocket"] === "object" ? Module["websocket"] : {};
        Module["websocket"]._callbacks = {};
        Module["websocket"]["on"] = function(event, callback2) {
          if (typeof callback2 === "function") {
            this._callbacks[event] = callback2;
          }
          return this;
        };
        Module["websocket"].emit = function(event, param) {
          if (typeof this._callbacks[event] === "function") {
            this._callbacks[event].call(this, param);
          }
        };
        return FS.createNode(null, "/", 16384 | 511, 0);
      },
      createSocket: function(family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6));
        }
        var sock = {
          family,
          type,
          protocol,
          server: null,
          error: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
        var stream = FS.createStream({
          path: name,
          node,
          flags: FS.modeStringToFlags("r+"),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
        sock.stream = stream;
        return sock;
      },
      getSocket: function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },
      stream_ops: {
        poll: function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },
        ioctl: function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },
        read: function(stream, buffer2, offset, length, position) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            return 0;
          }
          buffer2.set(msg.buffer, offset);
          return msg.buffer.length;
        },
        write: function(stream, buffer2, offset, length, position) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer2, offset, length);
        },
        close: function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }
      },
      nextname: function() {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return "socket[" + SOCKFS.nextname.current++ + "]";
      },
      websocket_sock_ops: {
        createPeer: function(sock, addr, port) {
          var ws;
          if (typeof addr === "object") {
            ws = addr;
            addr = null;
            port = null;
          }
          if (ws) {
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            } else {
              var result = /ws[s]?:\\/\\/([^:]+):(\\d+)/.exec(ws.url);
              if (!result) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            try {
              var runtimeConfig = Module["websocket"] && typeof Module["websocket"] === "object";
              var url = "ws:#".replace("#", "//");
              if (runtimeConfig) {
                if (typeof Module["websocket"]["url"] === "string") {
                  url = Module["websocket"]["url"];
                }
              }
              if (url === "ws://" || url === "wss://") {
                var parts = addr.split("/");
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
              }
              var subProtocols = "binary";
              if (runtimeConfig) {
                if (typeof Module["websocket"]["subprotocol"] === "string") {
                  subProtocols = Module["websocket"]["subprotocol"];
                }
              }
              var opts = void 0;
              if (subProtocols !== "null") {
                subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
                opts = ENVIRONMENT_IS_NODE ? { protocol: subProtocols.toString() } : subProtocols;
              }
              if (runtimeConfig && Module["websocket"]["subprotocol"] === null) {
                subProtocols = "null";
                opts = void 0;
              }
              var WebSocketConstructor;
              if (ENVIRONMENT_IS_NODE) {
                WebSocketConstructor = require("ws");
              } else {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = "arraybuffer";
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
          var peer = {
            addr,
            port,
            socket: ws,
            dgram_send_queue: []
          };
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
          if (sock.type === 2 && typeof sock.sport !== "undefined") {
            peer.dgram_send_queue.push(new Uint8Array([
              255,
              255,
              255,
              255,
              "p".charCodeAt(0),
              "o".charCodeAt(0),
              "r".charCodeAt(0),
              "t".charCodeAt(0),
              (sock.sport & 65280) >> 8,
              sock.sport & 255
            ]));
          }
          return peer;
        },
        getPeer: function(sock, addr, port) {
          return sock.peers[addr + ":" + port];
        },
        addPeer: function(sock, peer) {
          sock.peers[peer.addr + ":" + peer.port] = peer;
        },
        removePeer: function(sock, peer) {
          delete sock.peers[peer.addr + ":" + peer.port];
        },
        handlePeerEvents: function(sock, peer) {
          var first = true;
          var handleOpen = function() {
            Module["websocket"].emit("open", sock.stream.fd);
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              peer.socket.close();
            }
          };
          function handleMessage(data) {
            if (typeof data === "string") {
              var encoder = new TextEncoder();
              data = encoder.encode(data);
            } else {
              assert(data.byteLength !== void 0);
              if (data.byteLength == 0) {
                return;
              } else {
                data = new Uint8Array(data);
              }
            }
            var wasfirst = first;
            first = false;
            if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
              var newport = data[8] << 8 | data[9];
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
            sock.recv_queue.push({
              addr: peer.addr,
              port: peer.port,
              data
            });
            Module["websocket"].emit("message", sock.stream.fd);
          }
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on("open", handleOpen);
            peer.socket.on("message", function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage(new Uint8Array(data).buffer);
            });
            peer.socket.on("close", function() {
              Module["websocket"].emit("close", sock.stream.fd);
            });
            peer.socket.on("error", function(error) {
              sock.error = ERRNO_CODES.ECONNREFUSED;
              Module["websocket"].emit("error", [
                sock.stream.fd,
                sock.error,
                "ECONNREFUSED: Connection refused"
              ]);
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module["websocket"].emit("close", sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              sock.error = ERRNO_CODES.ECONNREFUSED;
              Module["websocket"].emit("error", [
                sock.stream.fd,
                sock.error,
                "ECONNREFUSED: Connection refused"
              ]);
            };
          }
        },
        poll: function(sock) {
          if (sock.type === 1 && sock.server) {
            return sock.pending.length ? 64 | 1 : 0;
          }
          var mask = 0;
          var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
          if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 64 | 1;
          }
          if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
            mask |= 4;
          }
          if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 16;
          }
          return mask;
        },
        ioctl: function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[arg >> 2] = bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },
        close: function(sock) {
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },
        bind: function(sock, addr, port) {
          if (typeof sock.saddr !== "undefined" || typeof sock.sport !== "undefined") {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          sock.saddr = addr;
          sock.sport = port;
          if (sock.type === 2) {
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError))
                throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP)
                throw e;
            }
          }
        },
        connect: function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (typeof sock.daddr !== "undefined" && typeof sock.dport !== "undefined") {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },
        listen: function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var WebSocketServer = require("ws").Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({ host, port: sock.sport });
          Module["websocket"].emit("listen", sock.stream.fd);
          sock.server.on("connection", function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
              sock.pending.push(newsock);
              Module["websocket"].emit("connection", newsock.stream.fd);
            } else {
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
              Module["websocket"].emit("connection", sock.stream.fd);
            }
          });
          sock.server.on("closed", function() {
            Module["websocket"].emit("close", sock.stream.fd);
            sock.server = null;
          });
          sock.server.on("error", function(error) {
            sock.error = ERRNO_CODES.EHOSTUNREACH;
            Module["websocket"].emit("error", [
              sock.stream.fd,
              sock.error,
              "EHOSTUNREACH: Host is unreachable"
            ]);
          });
        },
        accept: function(listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },
        getname: function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === void 0 || sock.dport === void 0) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr, port };
        },
        sendmsg: function(sock, buffer2, offset, length, addr, port) {
          if (sock.type === 2) {
            if (addr === void 0 || port === void 0) {
              addr = sock.daddr;
              port = sock.dport;
            }
            if (addr === void 0 || port === void 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            addr = sock.daddr;
            port = sock.dport;
          }
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          if (ArrayBuffer.isView(buffer2)) {
            offset += buffer2.byteOffset;
            buffer2 = buffer2.buffer;
          }
          var data;
          data = buffer2.slice(offset, offset + length);
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
          try {
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },
        recvmsg: function(sock, length) {
          if (sock.type === 1 && sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (!dest) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              } else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                return null;
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
          return res;
        }
      }
    };
    function __inet_pton4_raw(str) {
      var b = str.split(".");
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp))
          return null;
        b[i] = tmp;
      }
      return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
    }
    function jstoi_q(str) {
      return parseInt(str, void 0);
    }
    function __inet_pton6_raw(str) {
      var words;
      var w, offset, z;
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\\dA-F]{1,4}:(:|\\b)|){5}|([\\dA-F]{1,4}:){6})((([\\dA-F]{1,4}((?!\\3)::|:\\b|$))|(?!\\2\\3)){2}|(((2[0-4]|1\\d|[1-9])?\\d|25[0-5])\\.?\\b){4})$/i;
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (str.indexOf("::") === 0) {
        str = str.replace("::", "Z:");
      } else {
        str = str.replace("::", ":Z:");
      }
      if (str.indexOf(".") > 0) {
        str = str.replace(new RegExp("[.]", "g"), ":");
        words = str.split(":");
        words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
        words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
        words = words.slice(0, words.length - 2);
      } else {
        words = str.split(":");
      }
      offset = 0;
      z = 0;
      for (w = 0; w < words.length; w++) {
        if (typeof words[w] === "string") {
          if (words[w] === "Z") {
            for (z = 0; z < 8 - words.length + 1; z++) {
              parts[w + z] = 0;
            }
            offset = z - 1;
          } else {
            parts[w + offset] = _htons(parseInt(words[w], 16));
          }
        } else {
          parts[w + offset] = words[w];
        }
      }
      return [
        parts[1] << 16 | parts[0],
        parts[3] << 16 | parts[2],
        parts[5] << 16 | parts[4],
        parts[7] << 16 | parts[6]
      ];
    }
    var DNS = {
      address_map: { id: 1, addrs: {}, names: {} },
      lookup_name: function(name) {
        var res = __inet_pton4_raw(name);
        if (res !== null) {
          return name;
        }
        res = __inet_pton6_raw(name);
        if (res !== null) {
          return name;
        }
        var addr;
        if (DNS.address_map.addrs[name]) {
          addr = DNS.address_map.addrs[name];
        } else {
          var id = DNS.address_map.id++;
          assert(id < 65535, "exceeded max address mappings of 65535");
          addr = "172.29." + (id & 255) + "." + (id & 65280);
          DNS.address_map.names[addr] = name;
          DNS.address_map.addrs[name] = addr;
        }
        return addr;
      },
      lookup_addr: function(addr) {
        if (DNS.address_map.names[addr]) {
          return DNS.address_map.names[addr];
        }
        return null;
      }
    };
    function __inet_ntop4_raw(addr) {
      return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
    }
    function __inet_ntop6_raw(ints) {
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [
        ints[0] & 65535,
        ints[0] >> 16,
        ints[1] & 65535,
        ints[1] >> 16,
        ints[2] & 65535,
        ints[2] >> 16,
        ints[3] & 65535,
        ints[3] >> 16
      ];
      var hasipv4 = true;
      var v4part = "";
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) {
          hasipv4 = false;
          break;
        }
      }
      if (hasipv4) {
        v4part = __inet_ntop4_raw(parts[6] | parts[7] << 16);
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        if (parts[5] === 0) {
          str = "::";
          if (v4part === "0.0.0.0")
            v4part = "";
          if (v4part === "0.0.0.1")
            v4part = "1";
          str += v4part;
          return str;
        }
      }
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0)
                str += ":";
            }
            continue;
          }
        }
        str += Number(_ntohs(parts[word] & 65535)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
    function __read_sockaddr(sa, salen) {
      var family = HEAP16[sa >> 1];
      var port = _ntohs(HEAPU16[sa + 2 >> 1]);
      var addr;
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[sa + 4 >> 2];
          addr = __inet_ntop4_raw(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [
            HEAP32[sa + 8 >> 2],
            HEAP32[sa + 12 >> 2],
            HEAP32[sa + 16 >> 2],
            HEAP32[sa + 20 >> 2]
          ];
          addr = __inet_ntop6_raw(addr);
          break;
        default:
          return { errno: 5 };
      }
      return { family, addr, port };
    }
    function __write_sockaddr(sa, family, addr, port) {
      switch (family) {
        case 2:
          addr = __inet_pton4_raw(addr);
          HEAP16[sa >> 1] = family;
          HEAP32[sa + 4 >> 2] = addr;
          HEAP16[sa + 2 >> 1] = _htons(port);
          break;
        case 10:
          addr = __inet_pton6_raw(addr);
          HEAP32[sa >> 2] = family;
          HEAP32[sa + 8 >> 2] = addr[0];
          HEAP32[sa + 12 >> 2] = addr[1];
          HEAP32[sa + 16 >> 2] = addr[2];
          HEAP32[sa + 20 >> 2] = addr[3];
          HEAP16[sa + 2 >> 1] = _htons(port);
          HEAP32[sa + 4 >> 2] = 0;
          HEAP32[sa + 24 >> 2] = 0;
          break;
        default:
          return { errno: 5 };
      }
      return {};
    }
    var SYSCALLS = {
      mappings: {},
      DEFAULT_POLLMASK: 5,
      umask: 511,
      calculateAt: function(dirfd, path) {
        if (path[0] !== "/") {
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream)
              throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },
      doStat: function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            return -54;
          }
          throw e;
        }
        HEAP32[buf >> 2] = stat.dev;
        HEAP32[buf + 4 >> 2] = 0;
        HEAP32[buf + 8 >> 2] = stat.ino;
        HEAP32[buf + 12 >> 2] = stat.mode;
        HEAP32[buf + 16 >> 2] = stat.nlink;
        HEAP32[buf + 20 >> 2] = stat.uid;
        HEAP32[buf + 24 >> 2] = stat.gid;
        HEAP32[buf + 28 >> 2] = stat.rdev;
        HEAP32[buf + 32 >> 2] = 0;
        tempI64 = [
          stat.size >>> 0,
          (tempDouble = stat.size, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
        ], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
        HEAP32[buf + 48 >> 2] = 4096;
        HEAP32[buf + 52 >> 2] = stat.blocks;
        HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0;
        HEAP32[buf + 60 >> 2] = 0;
        HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0;
        HEAP32[buf + 68 >> 2] = 0;
        HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0;
        HEAP32[buf + 76 >> 2] = 0;
        tempI64 = [
          stat.ino >>> 0,
          (tempDouble = stat.ino, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
        ], HEAP32[buf + 80 >> 2] = tempI64[0], HEAP32[buf + 84 >> 2] = tempI64[1];
        return 0;
      },
      doMsync: function(addr, stream, len, flags, offset) {
        var buffer2 = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer2, offset, len, flags);
      },
      doMkdir: function(path, mode) {
        path = PATH.normalize(path);
        if (path[path.length - 1] === "/")
          path = path.substr(0, path.length - 1);
        FS.mkdir(path, mode, 0);
        return 0;
      },
      doMknod: function(path, mode, dev) {
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },
      doReadlink: function(path, buf, bufsize) {
        if (bufsize <= 0)
          return -28;
        var ret = FS.readlink(path);
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf + len];
        stringToUTF8(ret, buf, bufsize + 1);
        HEAP8[buf + len] = endChar;
        return len;
      },
      doAccess: function(path, amode) {
        if (amode & ~7) {
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = "";
        if (amode & 4)
          perms += "r";
        if (amode & 2)
          perms += "w";
        if (amode & 1)
          perms += "x";
        if (perms && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },
      doDup: function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest)
          FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },
      doReadv: function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[iov + i * 8 >> 2];
          var len = HEAP32[iov + (i * 8 + 4) >> 2];
          var curr = FS.read(stream, HEAP8, ptr, len, offset);
          if (curr < 0)
            return -1;
          ret += curr;
          if (curr < len)
            break;
        }
        return ret;
      },
      doWritev: function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[iov + i * 8 >> 2];
          var len = HEAP32[iov + (i * 8 + 4) >> 2];
          var curr = FS.write(stream, HEAP8, ptr, len, offset);
          if (curr < 0)
            return -1;
          ret += curr;
        }
        return ret;
      },
      varargs: void 0,
      get: function() {
        assert(SYSCALLS.varargs != void 0);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
        return ret;
      },
      getStr: function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
      getStreamFromFD: function(fd) {
        var stream = FS.getStream(fd);
        if (!stream)
          throw new FS.ErrnoError(8);
        return stream;
      },
      get64: function(low, high) {
        if (low >= 0)
          assert(high === 0);
        else
          assert(high === -1);
        return low;
      }
    };
    function ___syscall102(call, socketvararg) {
      try {
        SYSCALLS.varargs = socketvararg;
        var getSocketFromFD = function() {
          var socket = SOCKFS.getSocket(SYSCALLS.get());
          if (!socket)
            throw new FS.ErrnoError(8);
          return socket;
        };
        var getSocketAddress = function(allowNull) {
          var addrp = SYSCALLS.get(), addrlen2 = SYSCALLS.get();
          if (allowNull && addrp === 0)
            return null;
          var info2 = __read_sockaddr(addrp, addrlen2);
          if (info2.errno)
            throw new FS.ErrnoError(info2.errno);
          info2.addr = DNS.lookup_addr(info2.addr) || info2.addr;
          return info2;
        };
        switch (call) {
          case 1: {
            var domain = SYSCALLS.get(), type = SYSCALLS.get(), protocol = SYSCALLS.get();
            var sock = SOCKFS.createSocket(domain, type, protocol);
            assert(sock.stream.fd < 64);
            return sock.stream.fd;
          }
          case 2: {
            var sock = getSocketFromFD(), info = getSocketAddress();
            sock.sock_ops.bind(sock, info.addr, info.port);
            return 0;
          }
          case 3: {
            var sock = getSocketFromFD(), info = getSocketAddress();
            sock.sock_ops.connect(sock, info.addr, info.port);
            return 0;
          }
          case 4: {
            var sock = getSocketFromFD(), backlog = SYSCALLS.get();
            sock.sock_ops.listen(sock, backlog);
            return 0;
          }
          case 5: {
            var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            var newsock = sock.sock_ops.accept(sock);
            if (addr) {
              var res = __write_sockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport);
              assert(!res.errno);
            }
            return newsock.stream.fd;
          }
          case 6: {
            var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport);
            assert(!res.errno);
            return 0;
          }
          case 7: {
            var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            if (!sock.daddr) {
              return -53;
            }
            var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport);
            assert(!res.errno);
            return 0;
          }
          case 11: {
            var sock = getSocketFromFD(), message = SYSCALLS.get(), length = SYSCALLS.get(), flags = SYSCALLS.get(), dest = getSocketAddress(true);
            if (!dest) {
              return FS.write(sock.stream, HEAP8, message, length);
            } else {
              return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port);
            }
          }
          case 12: {
            var sock = getSocketFromFD(), buf = SYSCALLS.get(), len = SYSCALLS.get(), flags = SYSCALLS.get(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            var msg = sock.sock_ops.recvmsg(sock, len);
            if (!msg)
              return 0;
            if (addr) {
              var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port);
              assert(!res.errno);
            }
            HEAPU8.set(msg.buffer, buf);
            return msg.buffer.byteLength;
          }
          case 14: {
            return -50;
          }
          case 15: {
            var sock = getSocketFromFD(), level = SYSCALLS.get(), optname = SYSCALLS.get(), optval = SYSCALLS.get(), optlen = SYSCALLS.get();
            if (level === 1) {
              if (optname === 4) {
                HEAP32[optval >> 2] = sock.error;
                HEAP32[optlen >> 2] = 4;
                sock.error = null;
                return 0;
              }
            }
            return -50;
          }
          case 16: {
            var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
            var iov = HEAP32[message + 8 >> 2];
            var num = HEAP32[message + 12 >> 2];
            var addr, port;
            var name = HEAP32[message >> 2];
            var namelen = HEAP32[message + 4 >> 2];
            if (name) {
              var info = __read_sockaddr(name, namelen);
              if (info.errno)
                return -info.errno;
              port = info.port;
              addr = DNS.lookup_addr(info.addr) || info.addr;
            }
            var total = 0;
            for (var i = 0; i < num; i++) {
              total += HEAP32[iov + (8 * i + 4) >> 2];
            }
            var view = new Uint8Array(total);
            var offset = 0;
            for (var i = 0; i < num; i++) {
              var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
              var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
              for (var j = 0; j < iovlen; j++) {
                view[offset++] = HEAP8[iovbase + j >> 0];
              }
            }
            return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
          }
          case 17: {
            var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
            var iov = HEAP32[message + 8 >> 2];
            var num = HEAP32[message + 12 >> 2];
            var total = 0;
            for (var i = 0; i < num; i++) {
              total += HEAP32[iov + (8 * i + 4) >> 2];
            }
            var msg = sock.sock_ops.recvmsg(sock, total);
            if (!msg)
              return 0;
            var name = HEAP32[message >> 2];
            if (name) {
              var res = __write_sockaddr(name, sock.family, DNS.lookup_name(msg.addr), msg.port);
              assert(!res.errno);
            }
            var bytesRead = 0;
            var bytesRemaining = msg.buffer.byteLength;
            for (var i = 0; bytesRemaining > 0 && i < num; i++) {
              var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
              var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
              if (!iovlen) {
                continue;
              }
              var length = Math.min(iovlen, bytesRemaining);
              var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
              HEAPU8.set(buf, iovbase + bytesRead);
              bytesRead += length;
              bytesRemaining -= length;
            }
            return bytesRead;
          }
          default: {
            return -52;
          }
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall12(path) {
      try {
        path = SYSCALLS.getStr(path);
        FS.chdir(path);
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall142(nfds, readfds, writefds, exceptfds, timeout) {
      try {
        assert(nfds <= 64, "nfds must be less than or equal to 64");
        assert(!exceptfds, "exceptfds not supported");
        var total = 0;
        var srcReadLow = readfds ? HEAP32[readfds >> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >> 2] : 0;
        var srcWriteLow = writefds ? HEAP32[writefds >> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >> 2] : 0;
        var srcExceptLow = exceptfds ? HEAP32[exceptfds >> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0;
        var dstReadLow = 0, dstReadHigh = 0;
        var dstWriteLow = 0, dstWriteHigh = 0;
        var dstExceptLow = 0, dstExceptHigh = 0;
        var allLow = (readfds ? HEAP32[readfds >> 2] : 0) | (writefds ? HEAP32[writefds >> 2] : 0) | (exceptfds ? HEAP32[exceptfds >> 2] : 0);
        var allHigh = (readfds ? HEAP32[readfds + 4 >> 2] : 0) | (writefds ? HEAP32[writefds + 4 >> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0);
        var check = function(fd2, low, high, val) {
          return fd2 < 32 ? low & val : high & val;
        };
        for (var fd = 0; fd < nfds; fd++) {
          var mask = 1 << fd % 32;
          if (!check(fd, allLow, allHigh, mask)) {
            continue;
          }
          var stream = FS.getStream(fd);
          if (!stream)
            throw new FS.ErrnoError(8);
          var flags = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            flags = stream.stream_ops.poll(stream);
          }
          if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
            fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
            total++;
          }
          if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
            fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
            total++;
          }
          if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
            fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
            total++;
          }
        }
        if (readfds) {
          HEAP32[readfds >> 2] = dstReadLow;
          HEAP32[readfds + 4 >> 2] = dstReadHigh;
        }
        if (writefds) {
          HEAP32[writefds >> 2] = dstWriteLow;
          HEAP32[writefds + 4 >> 2] = dstWriteHigh;
        }
        if (exceptfds) {
          HEAP32[exceptfds >> 2] = dstExceptLow;
          HEAP32[exceptfds + 4 >> 2] = dstExceptHigh;
        }
        return total;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall183(buf, size) {
      try {
        if (size === 0)
          return -28;
        var cwd = FS.cwd();
        var cwdLengthInBytes = lengthBytesUTF8(cwd);
        if (size < cwdLengthInBytes + 1)
          return -68;
        stringToUTF8(cwd, buf, size);
        return buf;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall195(path, buf) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall197(fd, buf) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return SYSCALLS.doStat(FS.stat, stream.path, buf);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall221(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
          case 0: {
            var arg = SYSCALLS.get();
            if (arg < 0) {
              return -28;
            }
            var newStream;
            newStream = FS.open(stream.path, stream.flags, 0, arg);
            return newStream.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return stream.flags;
          case 4: {
            var arg = SYSCALLS.get();
            stream.flags |= arg;
            return 0;
          }
          case 12: {
            var arg = SYSCALLS.get();
            var offset = 0;
            HEAP16[arg + offset >> 1] = 2;
            return 0;
          }
          case 13:
          case 14:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            ___setErrNo(28);
            return -1;
          default: {
            return -28;
          }
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall3(fd, buf, count) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return FS.read(stream, HEAP8, buf, count);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall39(path, mode) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doMkdir(path, mode);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall5(path, flags, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var pathname = SYSCALLS.getStr(path);
        var mode = SYSCALLS.get();
        var stream = FS.open(pathname, flags, mode);
        return stream.fd;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall54(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
          case 21509:
          case 21505: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          case 21519: {
            if (!stream.tty)
              return -59;
            var argp = SYSCALLS.get();
            HEAP32[argp >> 2] = 0;
            return 0;
          }
          case 21520: {
            if (!stream.tty)
              return -59;
            return -28;
          }
          case 21531: {
            var argp = SYSCALLS.get();
            return FS.ioctl(stream, op, argp);
          }
          case 21523: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          case 21524: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          default:
            abort("bad ioctl syscall " + op);
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall85(path, buf, bufsize) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doReadlink(path, buf, bufsize);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function syscallMunmap(addr, len) {
      if (addr === -1 || len === 0) {
        return -28;
      }
      var info = SYSCALLS.mappings[addr];
      if (!info)
        return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }
    function ___syscall91(addr, len) {
      try {
        return syscallMunmap(addr, len);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function getShiftFromSize(size) {
      switch (size) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + size);
      }
    }
    function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }
    var embind_charCodes = void 0;
    function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
    var awaitingDependencies = {};
    var registeredTypes = {};
    var typeDependencies = {};
    var char_0 = 48;
    var char_9 = 57;
    function makeLegalFunctionName(name) {
      if (name === void 0) {
        return "_unknown";
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
        return "_" + name;
      } else {
        return name;
      }
    }
    function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      return new Function("body", "return function " + name + '() {\\n    "use strict";    return body.apply(this, arguments);\\n};\\n')(body);
    }
    function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;
        if (stack !== void 0) {
          this.stack = this.toString() + "\\n" + stack.replace(/^Error(:[^\\n]*)?\\n/, "");
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
        if (this.message === void 0) {
          return this.name;
        } else {
          return this.name + ": " + this.message;
        }
      };
      return errorClass;
    }
    var BindingError = void 0;
    function throwBindingError(message) {
      throw new BindingError(message);
    }
    var InternalError = void 0;
    function throwInternalError(message) {
      throw new InternalError(message);
    }
    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
        typeDependencies[type] = dependentTypes;
      });
      function onComplete(typeConverters2) {
        var myTypeConverters = getTypeConverters(typeConverters2);
        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError("Mismatched type converter count");
        }
        for (var i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }
          awaitingDependencies[dt].push(function() {
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });
      if (unregisteredTypes.length === 0) {
        onComplete(typeConverters);
      }
    }
    function registerType(rawType, registeredInstance, options) {
      options = options || {};
      if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      }
      var name = registeredInstance.name;
      if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError("Cannot register type '" + name + "' twice");
        }
      }
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(function(cb) {
          cb();
        });
      }
    }
    function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(wt) {
          return !!wt;
        },
        toWireType: function(destructors, o) {
          return o ? trueValue : falseValue;
        },
        argPackAdvance: 8,
        readValueFromPointer: function(pointer) {
          var heap;
          if (size === 1) {
            heap = HEAP8;
          } else if (size === 2) {
            heap = HEAP16;
          } else if (size === 4) {
            heap = HEAP32;
          } else {
            throw new TypeError("Unknown boolean type size: " + name);
          }
          return this["fromWireType"](heap[pointer >> shift]);
        },
        destructorFunction: null
      });
    }
    function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
        return false;
      }
      if (!(other instanceof ClassHandle)) {
        return false;
      }
      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;
      while (leftClass.baseClass) {
        left = leftClass.upcast(left);
        leftClass = leftClass.baseClass;
      }
      while (rightClass.baseClass) {
        right = rightClass.upcast(right);
        rightClass = rightClass.baseClass;
      }
      return leftClass === rightClass && left === right;
    }
    function shallowCopyInternalPointer(o) {
      return {
        count: o.count,
        deleteScheduled: o.deleteScheduled,
        preservePointerOnDelete: o.preservePointerOnDelete,
        ptr: o.ptr,
        ptrType: o.ptrType,
        smartPtr: o.smartPtr,
        smartPtrType: o.smartPtrType
      };
    }
    function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
    }
    var finalizationGroup = false;
    function detachFinalizer(handle) {
    }
    function runDestructor($$) {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }
    function releaseClassHandle($$) {
      $$.count.value -= 1;
      var toDelete = $$.count.value === 0;
      if (toDelete) {
        runDestructor($$);
      }
    }
    function attachFinalizer(handle) {
      if (typeof FinalizationGroup === "undefined") {
        attachFinalizer = function(handle2) {
          return handle2;
        };
        return handle;
      }
      finalizationGroup = new FinalizationGroup(function(iter) {
        for (var result = iter.next(); !result.done; result = iter.next()) {
          var $$ = result.value;
          if (!$$.ptr) {
            console.warn("object already deleted: " + $$.ptr);
          } else {
            releaseClassHandle($$);
          }
        }
      });
      attachFinalizer = function(handle2) {
        finalizationGroup.register(handle2, handle2.$$, handle2.$$);
        return handle2;
      };
      detachFinalizer = function(handle2) {
        finalizationGroup.unregister(handle2.$$);
      };
      return attachFinalizer(handle);
    }
    function ClassHandle_clone() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.preservePointerOnDelete) {
        this.$$.count.value += 1;
        return this;
      } else {
        var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
          $$: { value: shallowCopyInternalPointer(this.$$) }
        }));
        clone.$$.count.value += 1;
        clone.$$.deleteScheduled = false;
        return clone;
      }
    }
    function ClassHandle_delete() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }
      detachFinalizer(this);
      releaseClassHandle(this.$$);
      if (!this.$$.preservePointerOnDelete) {
        this.$$.smartPtr = void 0;
        this.$$.ptr = void 0;
      }
    }
    function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }
    var delayFunction = void 0;
    var deletionQueue = [];
    function flushPendingDeletes() {
      while (deletionQueue.length) {
        var obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj["delete"]();
      }
    }
    function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }
      deletionQueue.push(this);
      if (deletionQueue.length === 1 && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
      this.$$.deleteScheduled = true;
      return this;
    }
    function init_ClassHandle() {
      ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
      ClassHandle.prototype["clone"] = ClassHandle_clone;
      ClassHandle.prototype["delete"] = ClassHandle_delete;
      ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
      ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
    }
    function ClassHandle() {
    }
    var registeredPointers = {};
    function ensureOverloadTable(proto, methodName, humanName) {
      if (proto[methodName].overloadTable === void 0) {
        var prevFunc = proto[methodName];
        proto[methodName] = function() {
          if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
          }
          return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
        };
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }
    function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
        if (numArguments === void 0 || Module[name].overloadTable !== void 0 && Module[name].overloadTable[numArguments] !== void 0) {
          throwBindingError("Cannot register public name '" + name + "' twice");
        }
        ensureOverloadTable(Module, name, name);
        if (Module.hasOwnProperty(numArguments)) {
          throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
        }
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        if (numArguments !== void 0) {
          Module[name].numArguments = numArguments;
        }
      }
    }
    function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
    function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
        }
        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }
      return ptr;
    }
    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function genericPointerToWireType(destructors, handle) {
      var ptr;
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }
        if (this.isSmartPointer) {
          ptr = this.rawConstructor();
          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr);
          }
          return ptr;
        } else {
          return 0;
        }
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      if (this.isSmartPointer) {
        if (handle.$$.smartPtr === void 0) {
          throwBindingError("Passing raw pointer to smart pointer is illegal");
        }
        switch (this.sharingPolicy) {
          case 0:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
            }
            break;
          case 1:
            ptr = handle.$$.smartPtr;
            break;
          case 2:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              var clonedHandle = handle["clone"]();
              ptr = this.rawShare(ptr, __emval_register(function() {
                clonedHandle["delete"]();
              }));
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
            }
            break;
          default:
            throwBindingError("Unsupporting sharing policy");
        }
      }
      return ptr;
    }
    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }
      if (handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function simpleReadValueFromPointer(pointer) {
      return this["fromWireType"](HEAPU32[pointer >> 2]);
    }
    function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
        ptr = this.rawGetPointee(ptr);
      }
      return ptr;
    }
    function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
        this.rawDestructor(ptr);
      }
    }
    function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
        handle["delete"]();
      }
    }
    function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
        return ptr;
      }
      if (desiredClass.baseClass === void 0) {
        return null;
      }
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
        return null;
      }
      return desiredClass.downcast(rv);
    }
    function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }
    function getLiveInheritedInstances() {
      var rv = [];
      for (var k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          rv.push(registeredInstances[k]);
        }
      }
      return rv;
    }
    function setDelayFunction(fn) {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
    }
    function init_embind() {
      Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
      Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
      Module["flushPendingDeletes"] = flushPendingDeletes;
      Module["setDelayFunction"] = setDelayFunction;
    }
    var registeredInstances = {};
    function getBasestPointer(class_, ptr) {
      if (ptr === void 0) {
        throwBindingError("ptr should not be undefined");
      }
      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }
      return ptr;
    }
    function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }
    function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
        throwInternalError("makeClassHandle requires ptr and ptrType");
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError("Both smartPtrType and smartPtr must be specified");
      }
      record.count = { value: 1 };
      return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
    }
    function RegisteredPointer_fromWireType(ptr) {
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
        this.destructor(ptr);
        return null;
      }
      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
      if (registeredInstance !== void 0) {
        if (registeredInstance.$$.count.value === 0) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance["clone"]();
        } else {
          var rv = registeredInstance["clone"]();
          this.destructor(ptr);
          return rv;
        }
      }
      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr
          });
        } else {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this,
            ptr
          });
        }
      }
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this);
      }
      var toType;
      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }
      var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
      if (dp === null) {
        return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          smartPtrType: this,
          smartPtr: ptr
        });
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp
        });
      }
    }
    function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype["argPackAdvance"] = 8;
      RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
      RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
    }
    function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
      if (!isSmartPointer && registeredClass.baseClass === void 0) {
        if (isConst) {
          this["toWireType"] = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this["toWireType"] = genericPointerToWireType;
      }
    }
    function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistant public symbol");
      }
      if (Module[name].overloadTable !== void 0 && numArguments !== void 0) {
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments;
      }
    }
    function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);
      function makeDynCaller(dynCall) {
        var args = [];
        for (var i = 1; i < signature.length; ++i) {
          args.push("a" + i);
        }
        var name = "dynCall_" + signature + "_" + rawFunction;
        var body = "return function " + name + "(" + args.join(", ") + ") {\\n";
        body += "    return dynCall(rawFunction" + (args.length ? ", " : "") + args.join(", ") + ");\\n";
        body += "};\\n";
        return new Function("dynCall", "rawFunction", body)(dynCall, rawFunction);
      }
      var dc = Module["dynCall_" + signature];
      var fp = makeDynCaller(dc);
      if (typeof fp !== "function") {
        throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
      }
      return fp;
    }
    var UnboundTypeError = void 0;
    function getTypeName(type) {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    }
    function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
        if (seen[type]) {
          return;
        }
        if (registeredTypes[type]) {
          return;
        }
        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return;
        }
        unboundTypes.push(type);
        seen[type] = true;
      }
      types.forEach(visit);
      throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
    }
    function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
      if (upcast) {
        upcast = embind__requireFunction(upcastSignature, upcast);
      }
      if (downcast) {
        downcast = embind__requireFunction(downcastSignature, downcast);
      }
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, function() {
        throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
      });
      whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function(base) {
        base = base[0];
        var baseClass;
        var basePrototype;
        if (baseClassRawType) {
          baseClass = base.registeredClass;
          basePrototype = baseClass.instancePrototype;
        } else {
          basePrototype = ClassHandle.prototype;
        }
        var constructor = createNamedFunction(legalFunctionName, function() {
          if (Object.getPrototypeOf(this) !== instancePrototype) {
            throw new BindingError("Use 'new' to construct " + name);
          }
          if (registeredClass.constructor_body === void 0) {
            throw new BindingError(name + " has no accessible constructor");
          }
          var body = registeredClass.constructor_body[arguments.length];
          if (body === void 0) {
            throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
          }
          return body.apply(this, arguments);
        });
        var instancePrototype = Object.create(basePrototype, {
          constructor: { value: constructor }
        });
        constructor.prototype = instancePrototype;
        var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
        var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
        var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
        var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
        registeredPointers[rawType] = {
          pointerType: pointerConverter,
          constPointerType: constPointerConverter
        };
        replacePublicSymbol(legalFunctionName, constructor);
        return [referenceConverter, pointerConverter, constPointerConverter];
      });
    }
    function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function");
      }
      var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {
      });
      dummy.prototype = constructor.prototype;
      var obj = new dummy();
      var r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj;
    }
    function runDestructors(destructors) {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
      }
    }
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      var argCount = argTypes.length;
      if (argCount < 2) {
        throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }
      var isClassMethodFunc = argTypes[1] !== null && classType !== null;
      var needsDestructorStack = false;
      for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
          needsDestructorStack = true;
          break;
        }
      }
      var returns = argTypes[0].name !== "void";
      var argsList = "";
      var argsListWired = "";
      for (var i = 0; i < argCount - 2; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
        argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
      }
      var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\\nif (arguments.length !== " + (argCount - 2) + ") {\\nthrowBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\\n}\\n";
      if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\\n";
      }
      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = [
        "throwBindingError",
        "invoker",
        "fn",
        "runDestructors",
        "retType",
        "classParam"
      ];
      var args2 = [
        throwBindingError,
        cppInvokerFunc,
        cppTargetFunc,
        runDestructors,
        argTypes[0],
        argTypes[1]
      ];
      if (isClassMethodFunc) {
        invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\\n";
      }
      for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\\n";
        args1.push("argType" + i);
        args2.push(argTypes[i + 2]);
      }
      if (isClassMethodFunc) {
        argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
      }
      invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\\n";
      if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\\n";
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\\n";
            args1.push(paramName + "_dtor");
            args2.push(argTypes[i].destructorFunction);
          }
        }
      }
      if (returns) {
        invokerFnBody += "var ret = retType.fromWireType(rv);\\nreturn ret;\\n";
      }
      invokerFnBody += "}\\n";
      args1.push(invokerFnBody);
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }
    function heap32VectorToArray(count, firstElement) {
      var array = [];
      for (var i = 0; i < count; i++) {
        array.push(HEAP32[(firstElement >> 2) + i]);
      }
      return array;
    }
    function __embind_register_class_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, fn) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
        classType = classType[0];
        var humanName = classType.name + "." + methodName;
        function unboundTypesHandler() {
          throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
        }
        var proto = classType.registeredClass.constructor;
        if (proto[methodName] === void 0) {
          unboundTypesHandler.argCount = argCount - 1;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
          var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
          var func = craftInvokerFunction(humanName, invokerArgsArray, null, rawInvoker, fn);
          if (proto[methodName].overloadTable === void 0) {
            func.argCount = argCount - 1;
            proto[methodName] = func;
          } else {
            proto[methodName].overloadTable[argCount - 1] = func;
          }
          return [];
        });
        return [];
      });
    }
    function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
      assert(argCount > 0);
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      var args = [rawConstructor];
      var destructors = [];
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
        classType = classType[0];
        var humanName = "constructor " + classType.name;
        if (classType.registeredClass.constructor_body === void 0) {
          classType.registeredClass.constructor_body = [];
        }
        if (classType.registeredClass.constructor_body[argCount - 1] !== void 0) {
          throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        }
        classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
          throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
        };
        whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
          classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
            if (arguments.length !== argCount - 1) {
              throwBindingError(humanName + " called with " + arguments.length + " arguments, expected " + (argCount - 1));
            }
            destructors.length = 0;
            args.length = argCount;
            for (var i = 1; i < argCount; ++i) {
              args[i] = argTypes[i]["toWireType"](destructors, arguments[i - 1]);
            }
            var ptr = invoker.apply(null, args);
            runDestructors(destructors);
            return argTypes[0]["fromWireType"](ptr);
          };
          return [];
        });
        return [];
      });
    }
    function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
        classType = classType[0];
        var humanName = classType.name + "." + methodName;
        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }
        function unboundTypesHandler() {
          throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
        }
        var proto = classType.registeredClass.instancePrototype;
        var method = proto[methodName];
        if (method === void 0 || method.overloadTable === void 0 && method.className !== classType.name && method.argCount === argCount - 2) {
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
          var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
          if (proto[methodName].overloadTable === void 0) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }
          return [];
        });
        return [];
      });
    }
    var emval_free_list = [];
    var emval_handle_array = [
      {},
      { value: void 0 },
      { value: null },
      { value: true },
      { value: false }
    ];
    function __emval_decref(handle) {
      if (handle > 4 && --emval_handle_array[handle].refcount === 0) {
        emval_handle_array[handle] = void 0;
        emval_free_list.push(handle);
      }
    }
    function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== void 0) {
          ++count;
        }
      }
      return count;
    }
    function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== void 0) {
          return emval_handle_array[i];
        }
      }
      return null;
    }
    function init_emval() {
      Module["count_emval_handles"] = count_emval_handles;
      Module["get_first_emval"] = get_first_emval;
    }
    function __emval_register(value) {
      switch (value) {
        case void 0: {
          return 1;
        }
        case null: {
          return 2;
        }
        case true: {
          return 3;
        }
        case false: {
          return 4;
        }
        default: {
          var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
          emval_handle_array[handle] = { refcount: 1, value };
          return handle;
        }
      }
    }
    function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(handle) {
          var rv = emval_handle_array[handle].value;
          __emval_decref(handle);
          return rv;
        },
        toWireType: function(destructors, value) {
          return __emval_register(value);
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: null
      });
    }
    function _embind_repr(v) {
      if (v === null) {
        return "null";
      }
      var t = typeof v;
      if (t === "object" || t === "array" || t === "function") {
        return v.toString();
      } else {
        return "" + v;
      }
    }
    function floatReadValueFromPointer(name, shift) {
      switch (shift) {
        case 2:
          return function(pointer) {
            return this["fromWireType"](HEAPF32[pointer >> 2]);
          };
        case 3:
          return function(pointer) {
            return this["fromWireType"](HEAPF64[pointer >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + name);
      }
    }
    function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(value) {
          return value;
        },
        toWireType: function(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }
          return value;
        },
        argPackAdvance: 8,
        readValueFromPointer: floatReadValueFromPointer(name, shift),
        destructorFunction: null
      });
    }
    function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
      var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(name, function() {
        throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes);
      }, argCount - 1);
      whenDependentTypesAreResolved([], argTypes, function(argTypes2) {
        var invokerArgsArray = [argTypes2[0], null].concat(argTypes2.slice(1));
        replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
        return [];
      });
    }
    function integerReadValueFromPointer(name, shift, signed) {
      switch (shift) {
        case 0:
          return signed ? function readS8FromPointer(pointer) {
            return HEAP8[pointer];
          } : function readU8FromPointer(pointer) {
            return HEAPU8[pointer];
          };
        case 1:
          return signed ? function readS16FromPointer(pointer) {
            return HEAP16[pointer >> 1];
          } : function readU16FromPointer(pointer) {
            return HEAPU16[pointer >> 1];
          };
        case 2:
          return signed ? function readS32FromPointer(pointer) {
            return HEAP32[pointer >> 2];
          } : function readU32FromPointer(pointer) {
            return HEAPU32[pointer >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + name);
      }
    }
    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) {
        maxRange = 4294967295;
      }
      var shift = getShiftFromSize(size);
      var fromWireType = function(value) {
        return value;
      };
      if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = function(value) {
          return value << bitshift >>> bitshift;
        };
      }
      var isUnsignedType = name.indexOf("unsigned") != -1;
      registerType(primitiveType, {
        name,
        fromWireType,
        toWireType: function(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }
          if (value < minRange || value > maxRange) {
            throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
          }
          return isUnsignedType ? value >>> 0 : value | 0;
        },
        argPackAdvance: 8,
        readValueFromPointer: integerReadValueFromPointer(name, shift, minRange !== 0),
        destructorFunction: null
      });
    }
    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
      ];
      var TA = typeMapping[dataTypeIndex];
      function decodeMemoryView(handle) {
        handle = handle >> 2;
        var heap = HEAPU32;
        var size = heap[handle];
        var data = heap[handle + 1];
        return new TA(buffer, data, size);
      }
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: decodeMemoryView,
        argPackAdvance: 8,
        readValueFromPointer: decodeMemoryView
      }, { ignoreDuplicateRegistrations: true });
    }
    function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8 = name === "std::string";
      registerType(rawType, {
        name,
        fromWireType: function(value) {
          var length = HEAPU32[value >> 2];
          var str;
          if (stdStringIsUTF8) {
            var endChar = HEAPU8[value + 4 + length];
            var endCharSwap = 0;
            if (endChar != 0) {
              endCharSwap = endChar;
              HEAPU8[value + 4 + length] = 0;
            }
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i;
              if (HEAPU8[currentBytePtr] == 0) {
                var stringSegment = UTF8ToString(decodeStartPtr);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + 1;
              }
            }
            if (endCharSwap != 0) {
              HEAPU8[value + 4 + length] = endCharSwap;
            }
          } else {
            var a = new Array(length);
            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
            }
            str = a.join("");
          }
          _free(value);
          return str;
        },
        toWireType: function(destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }
          var getLength;
          var valueIsOfTypeString = typeof value === "string";
          if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError("Cannot pass non-string to std::string");
          }
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            getLength = function() {
              return lengthBytesUTF8(value);
            };
          } else {
            getLength = function() {
              return value.length;
            };
          }
          var length = getLength();
          var ptr = _malloc(4 + length + 1);
          HEAPU32[ptr >> 2] = length;
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr + 4, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);
                if (charCode > 255) {
                  _free(ptr);
                  throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                }
                HEAPU8[ptr + 4 + i] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[ptr + 4 + i] = value[i];
              }
            }
          }
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
          _free(ptr);
        }
      });
    }
    function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        getHeap = function() {
          return HEAPU16;
        };
        shift = 1;
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        getHeap = function() {
          return HEAPU32;
        };
        shift = 2;
      }
      registerType(rawType, {
        name,
        fromWireType: function(value) {
          var length = HEAPU32[value >> 2];
          var HEAP = getHeap();
          var str;
          var endChar = HEAP[value + 4 + length * charSize >> shift];
          var endCharSwap = 0;
          if (endChar != 0) {
            endCharSwap = endChar;
            HEAP[value + 4 + length * charSize >> shift] = 0;
          }
          var decodeStartPtr = value + 4;
          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;
            if (HEAP[currentBytePtr >> shift] == 0) {
              var stringSegment = decodeString(decodeStartPtr);
              if (str === void 0) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }
              decodeStartPtr = currentBytePtr + charSize;
            }
          }
          if (endCharSwap != 0) {
            HEAP[value + 4 + length * charSize >> shift] = endCharSwap;
          }
          _free(value);
          return str;
        },
        toWireType: function(destructors, value) {
          if (!(typeof value === "string")) {
            throwBindingError("Cannot pass non-string to C++ string type " + name);
          }
          var length = lengthBytesUTF(value);
          var ptr = _malloc(4 + length + charSize);
          HEAPU32[ptr >> 2] = length >> shift;
          encodeString(value, ptr + 4, length + charSize);
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
          _free(ptr);
        }
      });
    }
    function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name,
        argPackAdvance: 0,
        fromWireType: function() {
          return void 0;
        },
        toWireType: function(destructors, o) {
          return void 0;
        }
      });
    }
    function __emval_incref(handle) {
      if (handle > 4) {
        emval_handle_array[handle].refcount += 1;
      }
    }
    function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];
      if (impl === void 0) {
        throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
      }
      return impl;
    }
    function __emval_take_value(type, argv) {
      type = requireRegisteredType(type, "_emval_take_value");
      var v = type["readValueFromPointer"](argv);
      return __emval_register(v);
    }
    function _abort() {
      abort();
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
    function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
        console.error("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      var oldSize = _emscripten_get_heap_size();
      assert(requestedSize > oldSize);
      var PAGE_MULTIPLE = 65536;
      var maxHeapSize = 2147483648 - PAGE_MULTIPLE;
      if (requestedSize > maxHeapSize) {
        err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
        return false;
      }
      var minHeapSize = 16777216;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
      return false;
    }
    var ENV = {};
    function __getExecutableName() {
      return thisProgram || "./this.program";
    }
    function _emscripten_get_environ() {
      if (!_emscripten_get_environ.strings) {
        var env2 = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
          _: __getExecutableName()
        };
        for (var x in ENV) {
          env2[x] = ENV[x];
        }
        var strings = [];
        for (var x in env2) {
          strings.push(x + "=" + env2[x]);
        }
        _emscripten_get_environ.strings = strings;
      }
      return _emscripten_get_environ.strings;
    }
    function _environ_get(__environ, environ_buf) {
      var strings = _emscripten_get_environ();
      var bufSize = 0;
      strings.forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = _emscripten_get_environ();
      HEAP32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[penviron_buf_size >> 2] = bufSize;
      return 0;
    }
    function _fd_close(fd) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_fdstat_get(fd, pbuf) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
        HEAP8[pbuf >> 0] = type;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_read(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doReadv(stream, iov, iovcnt);
        HEAP32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var HIGH_OFFSET = 4294967296;
        var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
        var DOUBLE_LIMIT = 9007199254740992;
        if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
          return -61;
        }
        FS.llseek(stream, offset, whence);
        tempI64 = [
          stream.position >>> 0,
          (tempDouble = stream.position, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
        ], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0)
          stream.getdents = null;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doWritev(stream, iov, iovcnt);
        HEAP32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _gethostbyname(name) {
      name = UTF8ToString(name);
      var ret = _malloc(20);
      var nameBuf = _malloc(name.length + 1);
      stringToUTF8(name, nameBuf, name.length + 1);
      HEAP32[ret >> 2] = nameBuf;
      var aliasesBuf = _malloc(4);
      HEAP32[aliasesBuf >> 2] = 0;
      HEAP32[ret + 4 >> 2] = aliasesBuf;
      var afinet = 2;
      HEAP32[ret + 8 >> 2] = afinet;
      HEAP32[ret + 12 >> 2] = 4;
      var addrListBuf = _malloc(12);
      HEAP32[addrListBuf >> 2] = addrListBuf + 8;
      HEAP32[addrListBuf + 4 >> 2] = 0;
      HEAP32[addrListBuf + 8 >> 2] = __inet_pton4_raw(DNS.lookup_name(name));
      HEAP32[ret + 16 >> 2] = addrListBuf;
      return ret;
    }
    function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[ptr >> 2] = now / 1e3 | 0;
      HEAP32[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0;
      return 0;
    }
    var ___tm_current = 2400384;
    stringToUTF8("GMT", 2400432, 4);
    function _tzset() {
      if (_tzset.called)
        return;
      _tzset.called = true;
      HEAP32[__get_timezone() >> 2] = new Date().getTimezoneOffset() * 60;
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      HEAP32[__get_daylight() >> 2] = Number(winter.getTimezoneOffset() != summer.getTimezoneOffset());
      function extractZone(date) {
        var match = date.toTimeString().match(/\\(([A-Za-z ]+)\\)$/);
        return match ? match[1] : "GMT";
      }
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocateUTF8(winterName);
      var summerNamePtr = allocateUTF8(summerName);
      if (summer.getTimezoneOffset() < winter.getTimezoneOffset()) {
        HEAP32[__get_tzname() >> 2] = winterNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = summerNamePtr;
      } else {
        HEAP32[__get_tzname() >> 2] = summerNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = winterNamePtr;
      }
    }
    function _localtime_r(time, tmPtr) {
      _tzset();
      var date = new Date(HEAP32[time >> 2] * 1e3);
      HEAP32[tmPtr >> 2] = date.getSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getHours();
      HEAP32[tmPtr + 12 >> 2] = date.getDate();
      HEAP32[tmPtr + 16 >> 2] = date.getMonth();
      HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
      HEAP32[tmPtr + 24 >> 2] = date.getDay();
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
      HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
      HEAP32[tmPtr + 32 >> 2] = dst;
      var zonePtr = HEAP32[__get_tzname() + (dst ? 4 : 0) >> 2];
      HEAP32[tmPtr + 40 >> 2] = zonePtr;
      return tmPtr;
    }
    function _localtime(time) {
      return _localtime_r(time, ___tm_current);
    }
    function _setTempRet0($i) {
    }
    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
      }
      return sum;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    }
    function _strftime(s, maxsize, format, tm) {
      var tm_zone = HEAP32[tm + 40 >> 2];
      var date = {
        tm_sec: HEAP32[tm >> 2],
        tm_min: HEAP32[tm + 4 >> 2],
        tm_hour: HEAP32[tm + 8 >> 2],
        tm_mday: HEAP32[tm + 12 >> 2],
        tm_mon: HEAP32[tm + 16 >> 2],
        tm_year: HEAP32[tm + 20 >> 2],
        tm_wday: HEAP32[tm + 24 >> 2],
        tm_yday: HEAP32[tm + 28 >> 2],
        tm_isdst: HEAP32[tm + 32 >> 2],
        tm_gmtoff: HEAP32[tm + 36 >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
      };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      function leadingSomething(value, digits, character) {
        var str = typeof value === "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0");
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }
      function getWeekBasedYear(date2) {
        var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          } else {
            return thisDate.getFullYear();
          }
        } else {
          return thisDate.getFullYear() - 1;
        }
      }
      var EXPANSION_RULES_2 = {
        "%a": function(date2) {
          return WEEKDAYS[date2.tm_wday].substring(0, 3);
        },
        "%A": function(date2) {
          return WEEKDAYS[date2.tm_wday];
        },
        "%b": function(date2) {
          return MONTHS[date2.tm_mon].substring(0, 3);
        },
        "%B": function(date2) {
          return MONTHS[date2.tm_mon];
        },
        "%C": function(date2) {
          var year = date2.tm_year + 1900;
          return leadingNulls(year / 100 | 0, 2);
        },
        "%d": function(date2) {
          return leadingNulls(date2.tm_mday, 2);
        },
        "%e": function(date2) {
          return leadingSomething(date2.tm_mday, 2, " ");
        },
        "%g": function(date2) {
          return getWeekBasedYear(date2).toString().substring(2);
        },
        "%G": function(date2) {
          return getWeekBasedYear(date2);
        },
        "%H": function(date2) {
          return leadingNulls(date2.tm_hour, 2);
        },
        "%I": function(date2) {
          var twelveHour = date2.tm_hour;
          if (twelveHour == 0)
            twelveHour = 12;
          else if (twelveHour > 12)
            twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        "%j": function(date2) {
          return leadingNulls(date2.tm_mday + __arraySum(__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
        },
        "%m": function(date2) {
          return leadingNulls(date2.tm_mon + 1, 2);
        },
        "%M": function(date2) {
          return leadingNulls(date2.tm_min, 2);
        },
        "%n": function() {
          return "\\n";
        },
        "%p": function(date2) {
          if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
            return "AM";
          } else {
            return "PM";
          }
        },
        "%S": function(date2) {
          return leadingNulls(date2.tm_sec, 2);
        },
        "%t": function() {
          return "	";
        },
        "%u": function(date2) {
          return date2.tm_wday || 7;
        },
        "%U": function(date2) {
          var janFirst = new Date(date2.tm_year + 1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
          var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
          if (compareByDay(firstSunday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
            var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
        },
        "%V": function(date2) {
          var janFourthThisYear = new Date(date2.tm_year + 1900, 0, 4);
          var janFourthNextYear = new Date(date2.tm_year + 1901, 0, 4);
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
          var endDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            return "53";
          }
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            return "01";
          }
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date2.tm_year + 1900) {
            daysDifference = date2.tm_yday + 32 - firstWeekStartThisYear.getDate();
          } else {
            daysDifference = date2.tm_yday + 1 - firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference / 7), 2);
        },
        "%w": function(date2) {
          return date2.tm_wday;
        },
        "%W": function(date2) {
          var janFirst = new Date(date2.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
          var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
            var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
        },
        "%y": function(date2) {
          return (date2.tm_year + 1900).toString().substring(2);
        },
        "%Y": function(date2) {
          return date2.tm_year + 1900;
        },
        "%z": function(date2) {
          var off = date2.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          off = off / 60 * 100 + off % 60;
          return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
        },
        "%Z": function(date2) {
          return date2.tm_zone;
        },
        "%%": function() {
          return "%";
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    }
    function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm);
    }
    function _time(ptr) {
      var ret = Date.now() / 1e3 | 0;
      if (ptr) {
        HEAP32[ptr >> 2] = ret;
      }
      return ret;
    }
    function readAsmConstArgs(sigPtr, buf) {
      if (!readAsmConstArgs.array) {
        readAsmConstArgs.array = [];
      }
      var args = readAsmConstArgs.array;
      args.length = 0;
      var ch;
      while (ch = HEAPU8[sigPtr++]) {
        if (ch === 100 || ch === 102) {
          buf = buf + 7 & ~7;
          args.push(HEAPF64[buf >> 3]);
          buf += 8;
        } else if (ch === 105) {
          buf = buf + 3 & ~3;
          args.push(HEAP32[buf >> 2]);
          buf += 4;
        } else
          abort("unexpected char in asm const signature " + ch);
      }
      return args;
    }
    var FSNode = function(parent, name, mode, rdev) {
      if (!parent) {
        parent = this;
      }
      this.parent = parent;
      this.mount = parent.mount;
      this.mounted = null;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = rdev;
    };
    var readMode = 292 | 73;
    var writeMode = 146;
    Object.defineProperties(FSNode.prototype, {
      read: {
        get: function() {
          return (this.mode & readMode) === readMode;
        },
        set: function(val) {
          val ? this.mode |= readMode : this.mode &= ~readMode;
        }
      },
      write: {
        get: function() {
          return (this.mode & writeMode) === writeMode;
        },
        set: function(val) {
          val ? this.mode |= writeMode : this.mode &= ~writeMode;
        }
      },
      isFolder: {
        get: function() {
          return FS.isDir(this.mode);
        }
      },
      isDevice: {
        get: function() {
          return FS.isChrdev(this.mode);
        }
      }
    });
    FS.FSNode = FSNode;
    FS.staticInit();
    Module["FS_createFolder"] = FS.createFolder;
    Module["FS_createPath"] = FS.createPath;
    Module["FS_createDataFile"] = FS.createDataFile;
    Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
    Module["FS_createLazyFile"] = FS.createLazyFile;
    Module["FS_createLink"] = FS.createLink;
    Module["FS_createDevice"] = FS.createDevice;
    Module["FS_unlink"] = FS.unlink;
    embind_init_charCodes();
    BindingError = Module["BindingError"] = extendError(Error, "BindingError");
    InternalError = Module["InternalError"] = extendError(Error, "InternalError");
    init_ClassHandle();
    init_RegisteredPointer();
    init_embind();
    UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
    init_emval();
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull)
        u8array.length = numBytesWritten;
      return u8array;
    }
    var asmLibraryArg = {
      __cxa_allocate_exception: ___cxa_allocate_exception,
      __cxa_throw: ___cxa_throw,
      __handle_stack_overflow: ___handle_stack_overflow,
      __map_file: ___map_file,
      __syscall102: ___syscall102,
      __syscall12: ___syscall12,
      __syscall142: ___syscall142,
      __syscall183: ___syscall183,
      __syscall195: ___syscall195,
      __syscall197: ___syscall197,
      __syscall221: ___syscall221,
      __syscall3: ___syscall3,
      __syscall39: ___syscall39,
      __syscall5: ___syscall5,
      __syscall54: ___syscall54,
      __syscall85: ___syscall85,
      __syscall91: ___syscall91,
      _embind_register_bool: __embind_register_bool,
      _embind_register_class: __embind_register_class,
      _embind_register_class_class_function: __embind_register_class_class_function,
      _embind_register_class_constructor: __embind_register_class_constructor,
      _embind_register_class_function: __embind_register_class_function,
      _embind_register_emval: __embind_register_emval,
      _embind_register_float: __embind_register_float,
      _embind_register_function: __embind_register_function,
      _embind_register_integer: __embind_register_integer,
      _embind_register_memory_view: __embind_register_memory_view,
      _embind_register_std_string: __embind_register_std_string,
      _embind_register_std_wstring: __embind_register_std_wstring,
      _embind_register_void: __embind_register_void,
      _emval_decref: __emval_decref,
      _emval_incref: __emval_incref,
      _emval_take_value: __emval_take_value,
      abort: _abort,
      connectMemory,
      emscripten_asm_const_iii: _emscripten_asm_const_iii,
      emscripten_memcpy_big: _emscripten_memcpy_big,
      emscripten_resize_heap: _emscripten_resize_heap,
      environ_get: _environ_get,
      environ_sizes_get: _environ_sizes_get,
      fd_close: _fd_close,
      fd_fdstat_get: _fd_fdstat_get,
      fd_read: _fd_read,
      fd_seek: _fd_seek,
      fd_write: _fd_write,
      gethostbyname: _gethostbyname,
      gettimeofday: _gettimeofday,
      localtime: _localtime,
      memory: wasmMemory,
      setTempRet0: _setTempRet0,
      strftime: _strftime,
      strftime_l: _strftime_l,
      table: wasmTable,
      time: _time
    };
    var asm = createWasm();
    Module["asm"] = asm;
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__wasm_call_ctors"].apply(null, arguments);
    };
    Module["_fflush"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["fflush"].apply(null, arguments);
    };
    Module["_expandCDSPFromString"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["expandCDSPFromString"].apply(null, arguments);
    };
    Module["_generateCAuxFilesFromString"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["generateCAuxFilesFromString"].apply(null, arguments);
    };
    Module["_freeCMemory"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["freeCMemory"].apply(null, arguments);
    };
    var _free = Module["_free"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["free"].apply(null, arguments);
    };
    Module["_getCLibFaustVersion"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getCLibFaustVersion"].apply(null, arguments);
    };
    Module["_getErrorAfterException"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getErrorAfterException"].apply(null, arguments);
    };
    Module["_cleanupAfterException"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["cleanupAfterException"].apply(null, arguments);
    };
    var _malloc = Module["_malloc"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["malloc"].apply(null, arguments);
    };
    Module["___errno_location"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__errno_location"].apply(null, arguments);
    };
    var _htons = Module["_htons"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["htons"].apply(null, arguments);
    };
    Module["___em_js__connectMemory"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__em_js__connectMemory"].apply(null, arguments);
    };
    Module["_deleteAllWasmCDSPFactories"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["deleteAllWasmCDSPFactories"].apply(null, arguments);
    };
    Module["_createWasmCDSPFactoryFromString"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["createWasmCDSPFactoryFromString"].apply(null, arguments);
    };
    Module["_getWasmCModule"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getWasmCModule"].apply(null, arguments);
    };
    Module["_getWasmCModuleSize"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getWasmCModuleSize"].apply(null, arguments);
    };
    Module["_getWasmCHelpers"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getWasmCHelpers"].apply(null, arguments);
    };
    Module["_freeWasmCModule"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["freeWasmCModule"].apply(null, arguments);
    };
    var _ntohs = Module["_ntohs"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["ntohs"].apply(null, arguments);
    };
    var __get_tzname = Module["__get_tzname"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["_get_tzname"].apply(null, arguments);
    };
    var __get_daylight = Module["__get_daylight"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["_get_daylight"].apply(null, arguments);
    };
    var __get_timezone = Module["__get_timezone"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["_get_timezone"].apply(null, arguments);
    };
    var ___getTypeName = Module["___getTypeName"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__getTypeName"].apply(null, arguments);
    };
    Module["___embind_register_native_and_builtin_types"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__embind_register_native_and_builtin_types"].apply(null, arguments);
    };
    Module["___set_stack_limit"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__set_stack_limit"].apply(null, arguments);
    };
    var stackSave = Module["stackSave"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["stackSave"].apply(null, arguments);
    };
    var stackAlloc = Module["stackAlloc"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["stackAlloc"].apply(null, arguments);
    };
    var stackRestore = Module["stackRestore"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["stackRestore"].apply(null, arguments);
    };
    Module["dynCall_ii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_ii"].apply(null, arguments);
    };
    Module["dynCall_vi"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vi"].apply(null, arguments);
    };
    Module["dynCall_vii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vii"].apply(null, arguments);
    };
    Module["dynCall_iiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiii"].apply(null, arguments);
    };
    Module["dynCall_viijii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viijii"].apply(null, arguments);
    };
    Module["dynCall_viiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiii"].apply(null, arguments);
    };
    Module["dynCall_iii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iii"].apply(null, arguments);
    };
    Module["dynCall_iiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiii"].apply(null, arguments);
    };
    Module["dynCall_viddddii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddddii"].apply(null, arguments);
    };
    Module["dynCall_viddddiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddddiii"].apply(null, arguments);
    };
    Module["dynCall_viddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddd"].apply(null, arguments);
    };
    Module["dynCall_vidddi"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vidddi"].apply(null, arguments);
    };
    Module["dynCall_vidddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vidddd"].apply(null, arguments);
    };
    Module["dynCall_viddii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddii"].apply(null, arguments);
    };
    Module["dynCall_viddi"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddi"].apply(null, arguments);
    };
    Module["dynCall_viiiiddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiiddd"].apply(null, arguments);
    };
    Module["dynCall_viii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viii"].apply(null, arguments);
    };
    Module["dynCall_v"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_v"].apply(null, arguments);
    };
    Module["dynCall_viiiffff"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiffff"].apply(null, arguments);
    };
    Module["dynCall_viiiff"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiff"].apply(null, arguments);
    };
    Module["dynCall_iiiiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiii"].apply(null, arguments);
    };
    Module["dynCall_iiid"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiid"].apply(null, arguments);
    };
    Module["dynCall_viiidddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiidddd"].apply(null, arguments);
    };
    Module["dynCall_viiidd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiidd"].apply(null, arguments);
    };
    Module["dynCall_viiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiii"].apply(null, arguments);
    };
    Module["dynCall_di"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_di"].apply(null, arguments);
    };
    Module["dynCall_vid"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vid"].apply(null, arguments);
    };
    Module["dynCall_i"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_i"].apply(null, arguments);
    };
    Module["dynCall_viiif"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiif"].apply(null, arguments);
    };
    Module["dynCall_fiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_fiii"].apply(null, arguments);
    };
    Module["dynCall_vidiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vidiii"].apply(null, arguments);
    };
    Module["dynCall_viif"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viif"].apply(null, arguments);
    };
    Module["dynCall_fii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_fii"].apply(null, arguments);
    };
    Module["dynCall_jiji"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_jiji"].apply(null, arguments);
    };
    Module["dynCall_iidiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iidiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiij"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiij"].apply(null, arguments);
    };
    Module["dynCall_iiiiid"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiid"].apply(null, arguments);
    };
    Module["dynCall_iiiiijj"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiijj"].apply(null, arguments);
    };
    Module["dynCall_iiiiiijj"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiijj"].apply(null, arguments);
    };
    Module["dynCall_viiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiiii"].apply(null, arguments);
    };
    Module["asm"] = asm;
    if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString"))
      Module["intArrayFromString"] = function() {
        abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString"))
      Module["intArrayToString"] = function() {
        abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ccall"))
      Module["ccall"] = function() {
        abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["cwrap"] = cwrap;
    if (!Object.getOwnPropertyDescriptor(Module, "setValue"))
      Module["setValue"] = function() {
        abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getValue"))
      Module["getValue"] = function() {
        abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "allocate"))
      Module["allocate"] = function() {
        abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["getMemory"] = getMemory;
    if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString"))
      Module["UTF8ArrayToString"] = function() {
        abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["UTF8ToString"] = UTF8ToString;
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array"))
      Module["stringToUTF8Array"] = function() {
        abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["stringToUTF8"] = stringToUTF8;
    Module["lengthBytesUTF8"] = lengthBytesUTF8;
    if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
      Module["stackTrace"] = function() {
        abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun"))
      Module["addOnPreRun"] = function() {
        abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnInit"))
      Module["addOnInit"] = function() {
        abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain"))
      Module["addOnPreMain"] = function() {
        abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnExit"))
      Module["addOnExit"] = function() {
        abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun"))
      Module["addOnPostRun"] = function() {
        abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory"))
      Module["writeStringToMemory"] = function() {
        abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory"))
      Module["writeArrayToMemory"] = function() {
        abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory"))
      Module["writeAsciiToMemory"] = function() {
        abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["addRunDependency"] = addRunDependency;
    Module["removeRunDependency"] = removeRunDependency;
    Module["FS_createFolder"] = FS.createFolder;
    Module["FS_createPath"] = FS.createPath;
    Module["FS_createDataFile"] = FS.createDataFile;
    Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
    Module["FS_createLazyFile"] = FS.createLazyFile;
    Module["FS_createLink"] = FS.createLink;
    Module["FS_createDevice"] = FS.createDevice;
    Module["FS_unlink"] = FS.unlink;
    if (!Object.getOwnPropertyDescriptor(Module, "dynamicAlloc"))
      Module["dynamicAlloc"] = function() {
        abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "loadDynamicLibrary"))
      Module["loadDynamicLibrary"] = function() {
        abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "loadWebAssemblyModule"))
      Module["loadWebAssemblyModule"] = function() {
        abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getLEB"))
      Module["getLEB"] = function() {
        abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables"))
      Module["getFunctionTables"] = function() {
        abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables"))
      Module["alignFunctionTables"] = function() {
        abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions"))
      Module["registerFunctions"] = function() {
        abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addFunction"))
      Module["addFunction"] = function() {
        abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "removeFunction"))
      Module["removeFunction"] = function() {
        abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper"))
      Module["getFuncWrapper"] = function() {
        abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint"))
      Module["prettyPrint"] = function() {
        abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt"))
      Module["makeBigInt"] = function() {
        abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "dynCall"))
      Module["dynCall"] = function() {
        abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting"))
      Module["getCompilerSetting"] = function() {
        abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "print"))
      Module["print"] = function() {
        abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "printErr"))
      Module["printErr"] = function() {
        abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0"))
      Module["getTempRet0"] = function() {
        abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0"))
      Module["setTempRet0"] = function() {
        abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "callMain"))
      Module["callMain"] = function() {
        abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "abort"))
      Module["abort"] = function() {
        abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8"))
      Module["stringToNewUTF8"] = function() {
        abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer"))
      Module["emscripten_realloc_buffer"] = function() {
        abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ENV"))
      Module["ENV"] = function() {
        abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "setjmpId"))
      Module["setjmpId"] = function() {
        abort("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES"))
      Module["ERRNO_CODES"] = function() {
        abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES"))
      Module["ERRNO_MESSAGES"] = function() {
        abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "DNS"))
      Module["DNS"] = function() {
        abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES"))
      Module["GAI_ERRNO_MESSAGES"] = function() {
        abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "Protocols"))
      Module["Protocols"] = function() {
        abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "Sockets"))
      Module["Sockets"] = function() {
        abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE"))
      Module["UNWIND_CACHE"] = function() {
        abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs"))
      Module["readAsmConstArgs"] = function() {
        abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q"))
      Module["jstoi_q"] = function() {
        abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s"))
      Module["jstoi_s"] = function() {
        abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PATH"))
      Module["PATH"] = function() {
        abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS"))
      Module["PATH_FS"] = function() {
        abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS"))
      Module["SYSCALLS"] = function() {
        abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2"))
      Module["syscallMmap2"] = function() {
        abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap"))
      Module["syscallMunmap"] = function() {
        abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "JSEvents"))
      Module["JSEvents"] = function() {
        abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "demangle"))
      Module["demangle"] = function() {
        abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "demangleAll"))
      Module["demangleAll"] = function() {
        abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace"))
      Module["jsStackTrace"] = function() {
        abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
      Module["stackTrace"] = function() {
        abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64"))
      Module["writeI53ToI64"] = function() {
        abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped"))
      Module["writeI53ToI64Clamped"] = function() {
        abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling"))
      Module["writeI53ToI64Signaling"] = function() {
        abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped"))
      Module["writeI53ToU64Clamped"] = function() {
        abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling"))
      Module["writeI53ToU64Signaling"] = function() {
        abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64"))
      Module["readI53FromI64"] = function() {
        abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64"))
      Module["readI53FromU64"] = function() {
        abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53"))
      Module["convertI32PairToI53"] = function() {
        abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53"))
      Module["convertU32PairToI53"] = function() {
        abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "Browser"))
      Module["Browser"] = function() {
        abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["FS"] = FS;
    if (!Object.getOwnPropertyDescriptor(Module, "MEMFS"))
      Module["MEMFS"] = function() {
        abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "TTY"))
      Module["TTY"] = function() {
        abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS"))
      Module["PIPEFS"] = function() {
        abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS"))
      Module["SOCKFS"] = function() {
        abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GL"))
      Module["GL"] = function() {
        abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet"))
      Module["emscriptenWebGLGet"] = function() {
        abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData"))
      Module["emscriptenWebGLGetTexPixelData"] = function() {
        abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform"))
      Module["emscriptenWebGLGetUniform"] = function() {
        abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib"))
      Module["emscriptenWebGLGetVertexAttrib"] = function() {
        abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "AL"))
      Module["AL"] = function() {
        abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SDL"))
      Module["SDL"] = function() {
        abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx"))
      Module["SDL_gfx"] = function() {
        abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLUT"))
      Module["GLUT"] = function() {
        abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "EGL"))
      Module["EGL"] = function() {
        abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window"))
      Module["GLFW_Window"] = function() {
        abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLFW"))
      Module["GLFW"] = function() {
        abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLEW"))
      Module["GLEW"] = function() {
        abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "IDBStore"))
      Module["IDBStore"] = function() {
        abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError"))
      Module["runAndAbortIfError"] = function() {
        abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array"))
      Module["emval_handle_array"] = function() {
        abort("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list"))
      Module["emval_free_list"] = function() {
        abort("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols"))
      Module["emval_symbols"] = function() {
        abort("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_emval"))
      Module["init_emval"] = function() {
        abort("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles"))
      Module["count_emval_handles"] = function() {
        abort("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval"))
      Module["get_first_emval"] = function() {
        abort("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol"))
      Module["getStringOrSymbol"] = function() {
        abort("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "requireHandle"))
      Module["requireHandle"] = function() {
        abort("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_newers"))
      Module["emval_newers"] = function() {
        abort("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator"))
      Module["craftEmvalAllocator"] = function() {
        abort("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global"))
      Module["emval_get_global"] = function() {
        abort("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers"))
      Module["emval_methodCallers"] = function() {
        abort("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "InternalError"))
      Module["InternalError"] = function() {
        abort("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "BindingError"))
      Module["BindingError"] = function() {
        abort("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError"))
      Module["UnboundTypeError"] = function() {
        abort("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError"))
      Module["PureVirtualError"] = function() {
        abort("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_embind"))
      Module["init_embind"] = function() {
        abort("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError"))
      Module["throwInternalError"] = function() {
        abort("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError"))
      Module["throwBindingError"] = function() {
        abort("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError"))
      Module["throwUnboundTypeError"] = function() {
        abort("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable"))
      Module["ensureOverloadTable"] = function() {
        abort("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol"))
      Module["exposePublicSymbol"] = function() {
        abort("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol"))
      Module["replacePublicSymbol"] = function() {
        abort("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "extendError"))
      Module["extendError"] = function() {
        abort("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction"))
      Module["createNamedFunction"] = function() {
        abort("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances"))
      Module["registeredInstances"] = function() {
        abort("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer"))
      Module["getBasestPointer"] = function() {
        abort("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance"))
      Module["registerInheritedInstance"] = function() {
        abort("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance"))
      Module["unregisterInheritedInstance"] = function() {
        abort("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance"))
      Module["getInheritedInstance"] = function() {
        abort("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount"))
      Module["getInheritedInstanceCount"] = function() {
        abort("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances"))
      Module["getLiveInheritedInstances"] = function() {
        abort("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes"))
      Module["registeredTypes"] = function() {
        abort("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies"))
      Module["awaitingDependencies"] = function() {
        abort("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies"))
      Module["typeDependencies"] = function() {
        abort("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers"))
      Module["registeredPointers"] = function() {
        abort("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registerType"))
      Module["registerType"] = function() {
        abort("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved"))
      Module["whenDependentTypesAreResolved"] = function() {
        abort("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes"))
      Module["embind_charCodes"] = function() {
        abort("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes"))
      Module["embind_init_charCodes"] = function() {
        abort("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String"))
      Module["readLatin1String"] = function() {
        abort("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getTypeName"))
      Module["getTypeName"] = function() {
        abort("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray"))
      Module["heap32VectorToArray"] = function() {
        abort("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType"))
      Module["requireRegisteredType"] = function() {
        abort("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize"))
      Module["getShiftFromSize"] = function() {
        abort("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer"))
      Module["integerReadValueFromPointer"] = function() {
        abort("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer"))
      Module["enumReadValueFromPointer"] = function() {
        abort("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer"))
      Module["floatReadValueFromPointer"] = function() {
        abort("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer"))
      Module["simpleReadValueFromPointer"] = function() {
        abort("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "runDestructors"))
      Module["runDestructors"] = function() {
        abort("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "new_"))
      Module["new_"] = function() {
        abort("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction"))
      Module["craftInvokerFunction"] = function() {
        abort("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction"))
      Module["embind__requireFunction"] = function() {
        abort("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations"))
      Module["tupleRegistrations"] = function() {
        abort("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations"))
      Module["structRegistrations"] = function() {
        abort("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType"))
      Module["genericPointerToWireType"] = function() {
        abort("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType"))
      Module["constNoSmartPtrRawPointerToWireType"] = function() {
        abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType"))
      Module["nonConstNoSmartPtrRawPointerToWireType"] = function() {
        abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer"))
      Module["init_RegisteredPointer"] = function() {
        abort("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer"))
      Module["RegisteredPointer"] = function() {
        abort("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee"))
      Module["RegisteredPointer_getPointee"] = function() {
        abort("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor"))
      Module["RegisteredPointer_destructor"] = function() {
        abort("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject"))
      Module["RegisteredPointer_deleteObject"] = function() {
        abort("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType"))
      Module["RegisteredPointer_fromWireType"] = function() {
        abort("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "runDestructor"))
      Module["runDestructor"] = function() {
        abort("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle"))
      Module["releaseClassHandle"] = function() {
        abort("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup"))
      Module["finalizationGroup"] = function() {
        abort("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps"))
      Module["detachFinalizer_deps"] = function() {
        abort("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer"))
      Module["detachFinalizer"] = function() {
        abort("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer"))
      Module["attachFinalizer"] = function() {
        abort("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle"))
      Module["makeClassHandle"] = function() {
        abort("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle"))
      Module["init_ClassHandle"] = function() {
        abort("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle"))
      Module["ClassHandle"] = function() {
        abort("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf"))
      Module["ClassHandle_isAliasOf"] = function() {
        abort("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted"))
      Module["throwInstanceAlreadyDeleted"] = function() {
        abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone"))
      Module["ClassHandle_clone"] = function() {
        abort("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete"))
      Module["ClassHandle_delete"] = function() {
        abort("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue"))
      Module["deletionQueue"] = function() {
        abort("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted"))
      Module["ClassHandle_isDeleted"] = function() {
        abort("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater"))
      Module["ClassHandle_deleteLater"] = function() {
        abort("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes"))
      Module["flushPendingDeletes"] = function() {
        abort("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "delayFunction"))
      Module["delayFunction"] = function() {
        abort("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction"))
      Module["setDelayFunction"] = function() {
        abort("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass"))
      Module["RegisteredClass"] = function() {
        abort("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer"))
      Module["shallowCopyInternalPointer"] = function() {
        abort("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer"))
      Module["downcastPointer"] = function() {
        abort("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer"))
      Module["upcastPointer"] = function() {
        abort("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "validateThis"))
      Module["validateThis"] = function() {
        abort("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "char_0"))
      Module["char_0"] = function() {
        abort("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "char_9"))
      Module["char_9"] = function() {
        abort("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName"))
      Module["makeLegalFunctionName"] = function() {
        abort("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "warnOnce"))
      Module["warnOnce"] = function() {
        abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackSave"))
      Module["stackSave"] = function() {
        abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackRestore"))
      Module["stackRestore"] = function() {
        abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc"))
      Module["stackAlloc"] = function() {
        abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString"))
      Module["AsciiToString"] = function() {
        abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii"))
      Module["stringToAscii"] = function() {
        abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString"))
      Module["UTF16ToString"] = function() {
        abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16"))
      Module["stringToUTF16"] = function() {
        abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16"))
      Module["lengthBytesUTF16"] = function() {
        abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString"))
      Module["UTF32ToString"] = function() {
        abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32"))
      Module["stringToUTF32"] = function() {
        abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32"))
      Module["lengthBytesUTF32"] = function() {
        abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8"))
      Module["allocateUTF8"] = function() {
        abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack"))
      Module["allocateUTF8OnStack"] = function() {
        abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["writeStackCookie"] = writeStackCookie;
    Module["checkStackCookie"] = checkStackCookie;
    Module["abortStackOverflow"] = abortStackOverflow;
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL"))
      Object.defineProperty(Module, "ALLOC_NORMAL", {
        configurable: true,
        get: function() {
          abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK"))
      Object.defineProperty(Module, "ALLOC_STACK", {
        configurable: true,
        get: function() {
          abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_DYNAMIC"))
      Object.defineProperty(Module, "ALLOC_DYNAMIC", {
        configurable: true,
        get: function() {
          abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NONE"))
      Object.defineProperty(Module, "ALLOC_NONE", {
        configurable: true,
        get: function() {
          abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    var calledRun;
    Module["then"] = function(func) {
      if (calledRun) {
        func(Module);
      } else {
        var old = Module["onRuntimeInitialized"];
        Module["onRuntimeInitialized"] = function() {
          if (old)
            old();
          func(Module);
        };
      }
      return Module;
    };
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    dependenciesFulfilled = function runCaller() {
      if (!calledRun)
        run();
      if (!calledRun)
        dependenciesFulfilled = runCaller;
    };
    function run(args) {
      if (runDependencies > 0) {
        return;
      }
      writeStackCookie();
      preRun();
      if (runDependencies > 0)
        return;
      function doRun() {
        if (calledRun)
          return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT)
          return;
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"])
          Module["onRuntimeInitialized"]();
        assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
          setTimeout(function() {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
      checkStackCookie();
    }
    Module["run"] = run;
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();
    return FaustModule2;
  };
}();
var Sha1 = {};
Sha1.hash = function(msg, utf8encode) {
  utf8encode = typeof utf8encode == "undefined" ? true : utf8encode;
  if (utf8encode)
    msg = Utf8.encode(msg);
  var K = [1518500249, 1859775393, 2400959708, 3395469782];
  msg += String.fromCharCode(128);
  var l = msg.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);
  for (var i = 0; i < N; i++) {
    M[i] = new Array(16);
    for (var j = 0; j < 16; j++) {
      M[i][j] = msg.charCodeAt(i * 64 + j * 4) << 24 | msg.charCodeAt(i * 64 + j * 4 + 1) << 16 | msg.charCodeAt(i * 64 + j * 4 + 2) << 8 | msg.charCodeAt(i * 64 + j * 4 + 3);
    }
  }
  M[N - 1][14] = (msg.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (msg.length - 1) * 8 & 4294967295;
  var H0 = 1732584193;
  var H1 = 4023233417;
  var H2 = 2562383102;
  var H3 = 271733878;
  var H4 = 3285377520;
  var W = new Array(80);
  var a, b, c, d, e;
  for (var i = 0; i < N; i++) {
    for (var t = 0; t < 16; t++)
      W[t] = M[i][t];
    for (var t = 16; t < 80; t++)
      W[t] = Sha1.ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    a = H0;
    b = H1;
    c = H2;
    d = H3;
    e = H4;
    for (var t = 0; t < 80; t++) {
      var s = Math.floor(t / 20);
      var T = Sha1.ROTL(a, 5) + Sha1.f(s, b, c, d) + e + K[s] + W[t] & 4294967295;
      e = d;
      d = c;
      c = Sha1.ROTL(b, 30);
      b = a;
      a = T;
    }
    H0 = H0 + a & 4294967295;
    H1 = H1 + b & 4294967295;
    H2 = H2 + c & 4294967295;
    H3 = H3 + d & 4294967295;
    H4 = H4 + e & 4294967295;
  }
  return Sha1.toHexStr(H0) + Sha1.toHexStr(H1) + Sha1.toHexStr(H2) + Sha1.toHexStr(H3) + Sha1.toHexStr(H4);
};
Sha1.f = function(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
};
Sha1.ROTL = function(x, n) {
  return x << n | x >>> 32 - n;
};
Sha1.toHexStr = function(n) {
  var s = "", v;
  for (var i = 7; i >= 0; i--) {
    v = n >>> i * 4 & 15;
    s += v.toString(16);
  }
  return s;
};
var Utf8 = {};
Utf8.encode = function(strUni) {
  var strUtf = strUni.replace(/[\\u0080-\\u07ff]/g, function(c) {
    var cc = c.charCodeAt(0);
    return String.fromCharCode(192 | cc >> 6, 128 | cc & 63);
  });
  strUtf = strUtf.replace(/[\\u0800-\\uffff]/g, function(c) {
    var cc = c.charCodeAt(0);
    return String.fromCharCode(224 | cc >> 12, 128 | cc >> 6 & 63, 128 | cc & 63);
  });
  return strUtf;
};
Utf8.decode = function(strUtf) {
  var strUni = strUtf.replace(/[\\u00e0-\\u00ef][\\u0080-\\u00bf][\\u0080-\\u00bf]/g, function(c) {
    var cc = (c.charCodeAt(0) & 15) << 12 | (c.charCodeAt(1) & 63) << 6 | c.charCodeAt(2) & 63;
    return String.fromCharCode(cc);
  });
  strUni = strUni.replace(/[\\u00c0-\\u00df][\\u0080-\\u00bf]/g, function(c) {
    var cc = (c.charCodeAt(0) & 31) << 6 | c.charCodeAt(1) & 63;
    return String.fromCharCode(cc);
  });
  return strUni;
};
var readyResolver = {
  current: void 0
};
var readyPromise = new Promise((resolve) => {
  readyResolver.current = resolve;
});
var faust_module$1 = FaustModule({
  onRuntimeInitialized: readyResolver.current
});
faust_module$1.lengthBytesUTF8 = function(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343)
      u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
    if (u <= 127) {
      ++len;
    } else if (u <= 2047) {
      len += 2;
    } else if (u <= 65535) {
      len += 3;
    } else if (u <= 2097151) {
      len += 4;
    } else if (u <= 67108863) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
};
var faust = faust || {};
faust.remap = function(v, mn0, mx0, mn1, mx1) {
  return 1 * (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
};
faust.debug = false;
faust.createWasmCDSPFactoryFromString = faust_module$1.cwrap("createWasmCDSPFactoryFromString", "number", ["number", "number", "number", "number", "number", "number"]);
faust.deleteAllWasmCDSPFactories = faust_module$1.cwrap("deleteAllWasmCDSPFactories", null, []);
faust.expandCDSPFromString = faust_module$1.cwrap("expandCDSPFromString", "number", ["number", "number", "number", "number", "number", "number"]);
faust.getCLibFaustVersion = faust_module$1.cwrap("getCLibFaustVersion", "number", []);
faust.getWasmCModule = faust_module$1.cwrap("getWasmCModule", "number", [
  "number"
]);
faust.getWasmCModuleSize = faust_module$1.cwrap("getWasmCModuleSize", "number", [
  "number"
]);
faust.getWasmCHelpers = faust_module$1.cwrap("getWasmCHelpers", "number", [
  "number"
]);
faust.freeWasmCModule = faust_module$1.cwrap("freeWasmCModule", null, ["number"]);
faust.freeCMemory = faust_module$1.cwrap("freeCMemory", null, ["number"]);
faust.cleanupAfterException = faust_module$1.cwrap("cleanupAfterException", null, []);
faust.getErrorAfterException = faust_module$1.cwrap("getErrorAfterException", "number", []);
faust.error_msg = null;
faust.factory_number = 0;
faust.factory_table = [];
faust.getErrorMessage = function() {
  return faust.error_msg;
};
faust.getLibFaustVersion = function() {
  return faust_module$1.UTF8ToString(faust.getCLibFaustVersion());
};
faust.ab2str = function(buf) {
  if (buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  } else {
    return null;
  }
};
faust.str2ab = function(str) {
  if (str) {
    var buf = new ArrayBuffer(str.length);
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  } else {
    return null;
  }
};
faust.compileCode = function(factory_name, code, argv, internal_memory) {
  var code_size = faust_module$1.lengthBytesUTF8(code) + 1;
  var code_ptr = faust_module$1._malloc(code_size);
  var name = "FaustDSP";
  var name_size = faust_module$1.lengthBytesUTF8(name) + 1;
  var name_ptr = faust_module$1._malloc(name_size);
  var error_msg_ptr = faust_module$1._malloc(4096);
  faust_module$1.stringToUTF8(name, name_ptr, name_size);
  faust_module$1.stringToUTF8(code, code_ptr, code_size);
  var argv_aux = argv === void 0 ? new Array() : argv;
  argv_aux.push("-cn", factory_name);
  var ptr_size = 4;
  var argv_ptr = faust_module$1._malloc(argv_aux.length * ptr_size);
  var argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv_aux.length);
  for (var i = 0; i < argv_aux.length; i++) {
    var arg_ptr_size = faust_module$1.lengthBytesUTF8(argv_aux[i]) + 1;
    var arg_ptr = faust_module$1._malloc(arg_ptr_size);
    faust_module$1.stringToUTF8(argv_aux[i], arg_ptr, arg_ptr_size);
    argv_ptr_buffer[i] = arg_ptr;
  }
  try {
    var module_code_ptr = faust.createWasmCDSPFactoryFromString(name_ptr, code_ptr, argv_aux.length, argv_ptr, error_msg_ptr, internal_memory);
    faust.error_msg = faust_module$1.UTF8ToString(error_msg_ptr);
    if (module_code_ptr === 0) {
      return null;
    } else {
      var factory_code_ptr = faust.getWasmCModule(module_code_ptr);
      var factory_code_size = faust.getWasmCModuleSize(module_code_ptr);
      var factory_code = new Uint8Array(factory_code_size);
      for (var i = 0; i < factory_code_size; i++) {
        factory_code[i] = faust_module$1.HEAP8[factory_code_ptr + i];
      }
      var helpers_code_ptr = faust.getWasmCHelpers(module_code_ptr);
      var helpers_code = faust_module$1.UTF8ToString(helpers_code_ptr);
      faust_module$1._free(code_ptr);
      faust_module$1._free(name_ptr);
      faust_module$1._free(error_msg_ptr);
      faust.freeWasmCModule(module_code_ptr);
      argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv_aux.length);
      for (var i = 0; i < argv_aux.length; i++) {
        faust_module$1._free(argv_ptr_buffer[i]);
      }
      faust_module$1._free(argv_ptr);
      return { code: factory_code, code_source: code, helpers: helpers_code };
    }
  } catch (e) {
    faust.error_msg = faust_module$1.UTF8ToString(faust.getErrorAfterException());
    if (faust.error_msg === "") {
      faust.error_msg = e;
    }
    faust.cleanupAfterException();
    return null;
  }
};
faust.createDSPFactoryAux = function(code, argv, internal_memory, callback2) {
  var argv_str = "";
  for (var i = 0; i < argv.length; i++) {
    argv_str += argv[i];
  }
  var sha_key2 = Sha1.hash(code + (internal_memory ? "internal_memory" : "external_memory") + argv_str, true);
  var factory2 = faust.factory_table[sha_key2];
  if (factory2) {
    callback2(factory2);
    return;
  }
  var factory_name12 = "mydsp" + faust.factory_number;
  var factory_name22 = "effect" + faust.factory_number++;
  var code_effect = "adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _; adaptor(F,G) = adapt(outputs(F),inputs(G)); dsp_code = environment{";
  code_effect = code_effect.concat(code);
  code_effect = code_effect.concat("};");
  code_effect = code_effect.concat("process = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;");
  var res1 = faust.compileCode(factory_name12, code, argv, internal_memory);
  if (res1) {
    var res2 = faust.compileCode(factory_name22, code_effect, argv, internal_memory);
    if (res2) {
      faust.readDSPFactoryFromMachineAux(factory_name12, res1.code, res1.code_source, res1.helpers, factory_name22, res2.code, res2.code_source, res2.helpers, sha_key2, callback2);
    } else {
      faust.readDSPFactoryFromMachineAux(factory_name12, res1.code, res1.code_source, res1.helpers, null, null, null, null, sha_key2, callback2);
    }
  } else {
    callback2(null);
  }
};
faust.createDSPFactory = function(code, argv, callback2) {
  readyPromise.then(() => {
    faust.createDSPFactoryAux(code, argv, true, callback2);
  });
};
faust.ready = readyPromise;
faust.expandDSP = function(code, argv) {
  argv.push("-lang");
  argv.push("wasm");
  var code_size = faust_module$1.lengthBytesUTF8(code) + 1;
  var code_ptr = faust_module$1._malloc(code_size);
  var name = "FaustDSP";
  var name_size = faust_module$1.lengthBytesUTF8(name) + 1;
  var name_ptr = faust_module$1._malloc(name_size);
  var sha_key_ptr = faust_module$1._malloc(64);
  var error_msg_ptr = faust_module$1._malloc(4096);
  faust_module$1.stringToUTF8(name, name_ptr, name_size);
  faust_module$1.stringToUTF8(code, code_ptr, code_size);
  argv = argv === void 0 ? new Array() : argv;
  var ptr_size = 4;
  var argv_ptr = faust_module$1._malloc(argv.length * ptr_size);
  var argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv.length);
  for (var i = 0; i < argv.length; i++) {
    var arg_ptr_size = faust_module$1.lengthBytesUTF8(argv[i]) + 1;
    var arg_ptr = faust_module$1._malloc(arg_ptr_size);
    faust_module$1.stringToUTF8(argv[i], arg_ptr, arg_ptr_size);
    argv_ptr_buffer[i] = arg_ptr;
  }
  try {
    var expand_dsp_ptr = faust.expandCDSPFromString(name_ptr, code_ptr, argv.length, argv_ptr, sha_key_ptr, error_msg_ptr);
    var expand_dsp = faust_module$1.UTF8ToString(expand_dsp_ptr);
    var sha_key2 = faust_module$1.UTF8ToString(sha_key_ptr);
    faust.error_msg = faust_module$1.UTF8ToString(error_msg_ptr);
    faust_module$1._free(code_ptr);
    faust_module$1._free(name_ptr);
    faust_module$1._free(sha_key_ptr);
    faust_module$1._free(error_msg_ptr);
    faust.freeCMemory(expand_dsp_ptr);
    argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv.length);
    for (var i = 0; i < argv.length; i++) {
      faust_module$1._free(argv_ptr_buffer[i]);
    }
    faust_module$1._free(argv_ptr);
    return expand_dsp;
  } catch (e) {
    faust.error_msg = faust_module$1.UTF8ToString(faust.getErrorAfterException());
    if (faust.error_msg === "") {
      faust.error_msg = e;
    }
    faust.cleanupAfterException();
    return null;
  }
};
faust.writeDSPFactoryToMachine = function(factory2) {
  return {
    name: factory2.name,
    code: faust.ab2str(factory2.code),
    code_source: factory2.code_source,
    helpers: factory2.helpers,
    name_effect: factory2.name_effect,
    code_effect: faust.ab2str(factory2.code_effect),
    code_source_effect: factory2.code_source_effect,
    helpers_effect: factory2.helpers_effect
  };
};
faust.readDSPFactoryFromMachine = function(machine, callback2) {
  var sha_key2 = Sha1.hash(machine.code_source, true);
  var factory2 = faust.factory_table[sha_key2];
  if (factory2) {
    callback2(factory2);
  } else {
    faust.readDSPFactoryFromMachineAux(machine.name, faust.str2ab(machine.code), machine.code_source, machine.helpers, machine.name_effect, faust.str2ab(machine.code_effect), machine.code_source_effect, machine.helpers_effect, sha_key2, callback2);
  }
};
faust.readDSPFactoryFromMachineAux = function(factory_name1, factory_code1, factory_code_source1, helpers_code1, factory_name2, factory_code2, factory_code_source2, helpers_code2, sha_key, callback) {
  WebAssembly.compile(factory_code1).then((module) => {
    var factory = {};
    factory.polyphony = [];
    factory.code = factory_code1;
    factory.code_source = factory_code_source1;
    factory.helpers = helpers_code1;
    factory.module = module;
    var jsToEval = helpers_code1 + "\\nreturn [getJSON" + factory_name1 + ", getBase64Code" + factory_name1 + "];";
    var evalResult = new Function(jsToEval)();
    factory.getJSON = evalResult[0];
    factory.getBase64Code = evalResult[1];
    try {
      factory.json_object = JSON.parse(factory.getJSON());
    } catch (e) {
      faust.error_msg = "Error in JSON.parse: " + e;
      callback(null);
      throw true;
    }
    factory.name = factory_name1;
    factory.sha_key = sha_key;
    faust.factory_table[sha_key] = factory;
    if (factory_name2) {
      WebAssembly.compile(factory_code2).then((module_effect) => {
        factory.code_effect = factory_code2;
        factory.code_source_effect = factory_code_source2;
        factory.helpers_effect = helpers_code2;
        factory.module_effect = module_effect;
        eval(helpers_code2);
        factory.getJSONeffect = eval("getJSON" + factory_name2);
        factory.getBase64Codeeffect = eval("getBase64Code" + factory_name2);
        try {
          factory.effect_json_object = JSON.parse(factory.getJSONeffect());
        } catch (e) {
          faust.error_msg = "Error in JSON.parse: " + e;
          callback(null);
          throw true;
        }
        factory.name_effect = factory_name2;
        callback(factory);
      }).catch(function(error) {
        faust.error_msg = "Faust DSP factory cannot be compiled";
        callback(null);
      });
    } else {
      callback(factory);
    }
  }).catch(function(error) {
    faust.error_msg = "Faust DSP factory cannot be compiled";
    callback(null);
  });
};
faust.deleteDSPFactory = function(factory2) {
  faust.factory_table[factory2.sha_key] = null;
};
faust.createDSPInstance = function(factory2, context, buffer_size, callback2) {
  context.resume();
  var importObject = {
    env: {
      memoryBase: 0,
      tableBase: 0,
      _abs: Math.abs,
      _acosf: Math.acos,
      _asinf: Math.asin,
      _atanf: Math.atan,
      _atan2f: Math.atan2,
      _ceilf: Math.ceil,
      _cosf: Math.cos,
      _expf: Math.exp,
      _floorf: Math.floor,
      _fmodf: function(x, y) {
        return x % y;
      },
      _logf: Math.log,
      _log10f: Math.log10,
      _max_f: Math.max,
      _min_f: Math.min,
      _remainderf: function(x, y) {
        return x - Math.round(x / y) * y;
      },
      _powf: Math.pow,
      _roundf: Math.fround,
      _sinf: Math.sin,
      _sqrtf: Math.sqrt,
      _tanf: Math.tan,
      _acoshf: Math.acosh,
      _asinhf: Math.asinh,
      _atanhf: Math.atanh,
      _coshf: Math.cosh,
      _sinhf: Math.sinh,
      _tanhf: Math.tanh,
      _isnanf: Number.isNaN,
      _isinff: function(x) {
        return !isFinite(x);
      },
      _copysignf: function(x, y) {
        return Math.sign(x) === Math.sign(y) ? x : -x;
      },
      _acos: Math.acos,
      _asin: Math.asin,
      _atan: Math.atan,
      _atan2: Math.atan2,
      _ceil: Math.ceil,
      _cos: Math.cos,
      _exp: Math.exp,
      _floor: Math.floor,
      _fmod: function(x, y) {
        return x % y;
      },
      _log: Math.log,
      _log10: Math.log10,
      _max_: Math.max,
      _min_: Math.min,
      _remainder: function(x, y) {
        return x - Math.round(x / y) * y;
      },
      _pow: Math.pow,
      _round: Math.fround,
      _sin: Math.sin,
      _sqrt: Math.sqrt,
      _tan: Math.tan,
      _acosh: Math.acosh,
      _asinh: Math.asinh,
      _atanh: Math.atanh,
      _cosh: Math.cosh,
      _sinh: Math.sinh,
      _tanh: Math.tanh,
      _isnan: Number.isNaN,
      _isinf: function(x) {
        return !isFinite(x);
      },
      _copysign: function(x, y) {
        return Math.sign(x) === Math.sign(y) ? x : -x;
      },
      table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
    }
  };
  performance.now();
  WebAssembly.instantiate(factory2.module, importObject).then((dsp_instance) => {
    performance.now();
    var sp;
    try {
      sp = context.createScriptProcessor(buffer_size, dsp_instance.exports.getNumInputs(0), dsp_instance.exports.getNumOutputs(0));
    } catch (e) {
      faust.error_msg = "Error in createScriptProcessor: " + e;
      callback2(null);
      return;
    }
    sp.output_handler = null;
    sp.ins = null;
    sp.outs = null;
    sp.compute_handler = null;
    sp.dspInChannnels = [];
    sp.dspOutChannnels = [];
    sp.fPitchwheelLabel = [];
    sp.fCtrlLabel = new Array(128);
    for (var i = 0; i < sp.fCtrlLabel.length; i++) {
      sp.fCtrlLabel[i] = [];
    }
    sp.outputs_timer = 5;
    sp.outputs_items = [];
    sp.inputs_items = [];
    sp.ptr_size = 4;
    sp.sample_size = 4;
    sp.dsp = 0;
    sp.pathTable = [];
    sp.factory = dsp_instance.exports;
    sp.HEAP = dsp_instance.exports.memory.buffer;
    sp.HEAP32 = new Int32Array(sp.HEAP);
    sp.HEAPF32 = new Float32Array(sp.HEAP);
    sp.numIn = sp.factory.getNumInputs(sp.dsp);
    sp.numOut = sp.factory.getNumOutputs(sp.dsp);
    sp.audio_heap_ptr = parseInt(factory2.json_object.size);
    sp.audio_heap_ptr_inputs = sp.audio_heap_ptr;
    sp.audio_heap_ptr_outputs = sp.audio_heap_ptr_inputs + sp.numIn * sp.ptr_size;
    sp.audio_heap_inputs = sp.audio_heap_ptr_outputs + sp.numOut * sp.ptr_size;
    sp.audio_heap_outputs = sp.audio_heap_inputs + sp.numIn * buffer_size * sp.sample_size;
    sp.update_outputs = function() {
      if (sp.outputs_items.length > 0 && sp.output_handler && sp.outputs_timer-- === 0) {
        sp.outputs_timer = 5;
        for (var i2 = 0; i2 < sp.outputs_items.length; i2++) {
          sp.output_handler(sp.outputs_items[i2], sp.factory.getParamValue(sp.dsp, sp.pathTable[sp.outputs_items[i2]]));
        }
      }
    };
    sp.compute = function(e) {
      var i2;
      for (i2 = 0; i2 < sp.numIn; i2++) {
        var input = e.inputBuffer.getChannelData(i2);
        var dspInput = sp.dspInChannnels[i2];
        dspInput.set(input);
      }
      if (sp.compute_handler) {
        sp.compute_handler(buffer_size);
      }
      sp.factory.compute(sp.dsp, buffer_size, sp.ins, sp.outs);
      sp.update_outputs();
      for (i2 = 0; i2 < sp.numOut; i2++) {
        var output = e.outputBuffer.getChannelData(i2);
        var dspOutput = sp.dspOutChannnels[i2];
        output.set(dspOutput);
      }
    };
    sp.parse_ui = function(ui) {
      for (var i2 = 0; i2 < ui.length; i2++) {
        sp.parse_group(ui[i2]);
      }
    };
    sp.parse_group = function(group) {
      if (group.items) {
        sp.parse_items(group.items);
      }
    };
    sp.parse_items = function(items) {
      for (var i2 = 0; i2 < items.length; i2++) {
        sp.parse_item(items[i2]);
      }
    };
    sp.parse_item = function(item) {
      if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
        sp.parse_items(item.items);
      } else if (item.type === "hbargraph" || item.type === "vbargraph") {
        sp.outputs_items.push(item.address);
        sp.pathTable[item.address] = parseInt(item.index);
      } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
        sp.inputs_items.push(item.address);
        sp.pathTable[item.address] = parseInt(item.index);
        if (item.meta !== void 0) {
          for (var i2 = 0; i2 < item.meta.length; i2++) {
            if (item.meta[i2].midi !== void 0) {
              if (item.meta[i2].midi.trim() === "pitchwheel") {
                sp.fPitchwheelLabel.push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              } else if (item.meta[i2].midi.trim().split(" ")[0] === "ctrl") {
                sp.fCtrlLabel[parseInt(item.meta[i2].midi.trim().split(" ")[1])].push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              }
            }
          }
        }
      }
    };
    sp.initAux = function() {
      var i2;
      sp.onaudioprocess = sp.compute;
      if (sp.numIn > 0) {
        sp.ins = sp.audio_heap_ptr_inputs;
        for (i2 = 0; i2 < sp.numIn; i2++) {
          sp.HEAP32[(sp.ins >> 2) + i2] = sp.audio_heap_inputs + buffer_size * sp.sample_size * i2;
        }
        var dspInChans = sp.HEAP32.subarray(sp.ins >> 2, sp.ins + sp.numIn * sp.ptr_size >> 2);
        for (i2 = 0; i2 < sp.numIn; i2++) {
          sp.dspInChannnels[i2] = sp.HEAPF32.subarray(dspInChans[i2] >> 2, dspInChans[i2] + buffer_size * sp.sample_size >> 2);
        }
      }
      if (sp.numOut > 0) {
        sp.outs = sp.audio_heap_ptr_outputs;
        for (i2 = 0; i2 < sp.numOut; i2++) {
          sp.HEAP32[(sp.outs >> 2) + i2] = sp.audio_heap_outputs + buffer_size * sp.sample_size * i2;
        }
        var dspOutChans = sp.HEAP32.subarray(sp.outs >> 2, sp.outs + sp.numOut * sp.ptr_size >> 2);
        for (i2 = 0; i2 < sp.numOut; i2++) {
          sp.dspOutChannnels[i2] = sp.HEAPF32.subarray(dspOutChans[i2] >> 2, dspOutChans[i2] + buffer_size * sp.sample_size >> 2);
        }
      }
      sp.parse_ui(factory2.json_object.ui);
      sp.factory.init(sp.dsp, context.sampleRate);
    };
    sp.destroy = function() {
    };
    sp.getSampleRate = function() {
      return context.sampleRate;
    };
    sp.getNumInputs = function() {
      return sp.factory.getNumInputs(sp.dsp);
    };
    sp.getNumOutputs = function() {
      return sp.factory.getNumOutputs(sp.dsp);
    };
    sp.init = function(sample_rate) {
      sp.factory.init(sp.dsp, sample_rate);
    };
    sp.instanceInit = function(sample_rate) {
      sp.factory.instanceInit(sp.dsp, sample_rate);
    };
    sp.instanceConstants = function(sample_rate) {
      sp.factory.instanceConstants(sp.dsp, sample_rate);
    };
    sp.instanceResetUserInterface = function() {
      sp.factory.instanceResetUserInterface(sp.dsp);
    };
    sp.instanceClear = function() {
      sp.factory.instanceClear(sp.dsp);
    };
    sp.metadata = function(handler) {
      if (factory2.json_object.meta) {
        factory2.json_object.meta.forEach(function(meta) {
          handler.declare(Object.keys(meta)[0], Object.values(meta)[0]);
        });
      }
    };
    sp.setOutputParamHandler = function(handler) {
      sp.output_handler = handler;
    };
    sp.getOutputParamHandler = function() {
      return sp.output_handler;
    };
    sp.ctrlChange = function(channel, ctrl, value) {
      for (var i2 = 0; i2 < sp.fCtrlLabel[ctrl].length; i2++) {
        var path = sp.fCtrlLabel[ctrl][i2].path;
        sp.setParamValue(path, faust.remap(value, 0, 127, sp.fCtrlLabel[ctrl][i2].min, sp.fCtrlLabel[ctrl][i2].max));
        if (sp.output_handler) {
          sp.output_handler(path, sp.getParamValue(path));
        }
      }
    };
    sp.pitchWheel = function(channel, wheel) {
      for (var i2 = 0; i2 < sp.fPitchwheelLabel.length; i2++) {
        var pw = sp.fPitchwheelLabel[i2];
        sp.setParamValue(pw.path, faust.remap(wheel, 0, 16383, pw.min, pw.max));
        if (sp.output_handler) {
          sp.output_handler(pw.path, sp.getParamValue(pw.path));
        }
      }
    };
    sp.setParamValue = function(path, val) {
      return sp.factory.setParamValue(sp.dsp, sp.pathTable[path], val);
    };
    sp.getParamValue = function(path) {
      return sp.factory.getParamValue(sp.dsp, sp.pathTable[path]);
    };
    sp.getParams = function() {
      return sp.inputs_items;
    };
    sp.getJSON = function() {
      return factory2.getJSON();
    };
    sp.initAux();
    callback2(sp);
  }).catch(function(error) {
    faust.error_msg = "Faust DSP cannot be instantiated";
    callback2(null);
  });
};
faust.deleteDSPInstance = function(dsp) {
};
var mydspProcessorString = \`

    'use strict';

    function getJSONmydsp() { return \\\`GETJSON\\\`; }
    function getBase64Codemydsp() { return \\\`GETBASE64CODE\\\`; }

    // Monophonic Faust DSP
    class mydspProcessor extends AudioWorkletProcessor {

        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                mydspProcessor.parse_group(ui[i], obj, callback);
            }
        }

        static parse_group(group, obj, callback)
        {
            if (group.items) {
                mydspProcessor.parse_items(group.items, obj, callback);
            }
        }

        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }

        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
            // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }

        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }

        static b64ToUint6(nChr)
        {
            return nChr > 64 && nChr < 91 ?
            nChr - 65
            : nChr > 96 && nChr < 123 ?
            nChr - 71
            : nChr > 47 && nChr < 58 ?
            nChr + 4
            : nChr === 43 ?
            62
            : nChr === 47 ?
            63
            :
            0;
        }

        static atob(sBase64, nBlocksSize)
        {
            if (typeof atob === 'function') {
                return atob(sBase64);
            } else {

                var sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
                var nInLen = sB64Enc.length;
                var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
                var taBytes = new Uint8Array(nOutLen);

                for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                    nMod4 = nInIdx & 3;
                    nUint24 |= mydspProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                    if (nMod4 === 3 || nInLen - nInIdx === 1) {
                        for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                            taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                        }
                        nUint24 = 0;
                    }
                }
                return taBytes.buffer;
            }
        }

        static remap(v, mn0, mx0, mn1, mx1)
        {
            return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
        }

        static get parameterDescriptors ()
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            mydspProcessor.parse_ui(JSON.parse(getJSONmydsp()).ui, params, mydspProcessor.parse_item1);
            return params;
        }

        constructor(options)
        {
            super(options);
            this.running = true;

            this.json_object = JSON.parse(getJSONmydsp());

            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };

            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;

            // Create the WASM instance
            var wasm_instance = new WebAssembly.Instance(mydspProcessor.wasm_module, mydspProcessor.importObject);
            this.factory = wasm_instance.exports;
            this.HEAP = wasm_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];

            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * mydspProcessor.buffer_size * this.sample_size);

            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];

            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }

            this.initAux = function ()
            {
                var i;

                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                // Parse UI
                mydspProcessor.parse_ui(this.json_object.ui, this, mydspProcessor.parse_item2);

                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }

        process(inputs, outputs, parameters)
        {
            var input = inputs[0];
            var output = outputs[0];

            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }

            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */

            // Update controls (possibly needed for sample accurate control)
            for (const path in parameters) {
            	const paramArray = parameters[path];
            	this.setParamValue(path, paramArray[0]);
            }

           // Compute
            try {
                this.factory.compute(this.dsp, mydspProcessor.buffer_size, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();

            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }

            return this.running;
        }
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals

    mydspProcessor.buffer_size = 128;

    mydspProcessor.importObject = {
        env: {
            memoryBase: 0,
            tableBase: 0,

            // Integer version
            _abs: Math.abs,

            // Float version
            _acosf: Math.acos,
            _asinf: Math.asin,
            _atanf: Math.atan,
            _atan2f: Math.atan2,
            _ceilf: Math.ceil,
            _cosf: Math.cos,
            _expf: Math.exp,
            _floorf: Math.floor,
            _fmodf: function(x, y) { return x % y; },
            _logf: Math.log,
            _log10f: Math.log10,
            _max_f: Math.max,
            _min_f: Math.min,
            _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
            _powf: Math.pow,
            _roundf: Math.fround,
            _sinf: Math.sin,
            _sqrtf: Math.sqrt,
            _tanf: Math.tan,
            _acoshf: Math.acosh,
            _asinhf: Math.asinh,
            _atanhf: Math.atanh,
            _coshf: Math.cosh,
            _sinhf: Math.sinh,
            _tanhf: Math.tanh,
            _isnanf: Number.isNaN,
            _isinff: function (x) { return !isFinite(x); },
            _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            // Double version
            _acos: Math.acos,
            _asin: Math.asin,
            _atan: Math.atan,
            _atan2: Math.atan2,
            _ceil: Math.ceil,
            _cos: Math.cos,
            _exp: Math.exp,
            _floor: Math.floor,
            _fmod: function(x, y) { return x % y; },
            _log: Math.log,
            _log10: Math.log10,
            _max_: Math.max,
            _min_: Math.min,
            _remainder:function(x, y) { return x - Math.round(x/y) * y; },
            _pow: Math.pow,
            _round: Math.fround,
            _sin: Math.sin,
            _sqrt: Math.sqrt,
            _tan: Math.tan,
            _acosh: Math.acosh,
            _asinh: Math.asinh,
            _atanh: Math.atanh,
            _cosh: Math.cosh,
            _sinh: Math.sinh,
            _tanh: Math.tanh,
            _isnan: Number.isNaN,
            _isinf: function (x) { return !isFinite(x); },
            _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
        }
    };

    // Synchronously compile and instantiate the WASM module
    try {
        mydspProcessor.wasm_module = new WebAssembly.Module(mydspProcessor.atob(getBase64Codemydsp()));
        registerProcessor('mydsp', mydspProcessor);
    } catch (e) {
        // REMOVED: console log noise that doesnt affect output
        // I assume if it were serious this error would not be caught and not rethrown
        // console.log(e); console.log("Faust mydsp cannot be loaded or compiled");
    }
\`;
faust.createDSPWorkletInstanceAux = function(factory2, context, callback2) {
  context.resume().catch(() => {
  });
  var audio_node = new AudioWorkletNode(context, factory2.name, {
    numberOfInputs: parseInt(factory2.json_object.inputs) > 0 ? 1 : 0,
    numberOfOutputs: parseInt(factory2.json_object.outputs) > 0 ? 1 : 0,
    channelCount: Math.max(1, parseInt(factory2.json_object.inputs)),
    outputChannelCount: [parseInt(factory2.json_object.outputs)],
    channelCountMode: "explicit",
    channelInterpretation: "speakers"
  });
  audio_node.onprocessorerror = () => {
    console.log("An error from mydspProcessor was detected.");
  };
  audio_node.handleMessage = function(event) {
    var msg = event.data;
    if (this.output_handler) {
      this.output_handler(msg.path, msg.value);
    }
  };
  audio_node.init = function() {
    this.parse_ui = function(ui, obj) {
      for (var i2 = 0; i2 < ui.length; i2++) {
        this.parse_group(ui[i2], obj);
      }
    };
    this.parse_group = function(group, obj) {
      if (group.items) {
        this.parse_items(group.items, obj);
      }
    };
    this.parse_items = function(items, obj) {
      for (var i2 = 0; i2 < items.length; i2++) {
        this.parse_item(items[i2], obj);
      }
    };
    this.parse_item = function(item, obj) {
      if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
        this.parse_items(item.items, obj);
      } else if (item.type === "hbargraph" || item.type === "vbargraph") {
        obj.outputs_items.push(item.address);
      } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
        obj.inputs_items.push(item.address);
        if (item.meta !== void 0) {
          for (var i2 = 0; i2 < item.meta.length; i2++) {
            if (item.meta[i2].midi !== void 0) {
              if (item.meta[i2].midi.trim() === "pitchwheel") {
                obj.fPitchwheelLabel.push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              } else if (item.meta[i2].midi.trim().split(" ")[0] === "ctrl") {
                obj.fCtrlLabel[parseInt(item.meta[i2].midi.trim().split(" ")[1])].push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              }
            }
          }
        }
      }
    };
    this.output_handler = null;
    this.json_object = factory2.json_object;
    this.inputs_items = [];
    this.outputs_items = [];
    this.fPitchwheelLabel = [];
    this.fCtrlLabel = new Array(128);
    for (var i = 0; i < this.fCtrlLabel.length; i++) {
      this.fCtrlLabel[i] = [];
    }
    this.parse_ui(this.json_object.ui, this);
    this.port.onmessage = this.handleMessage.bind(this);
  };
  audio_node.init();
  audio_node.destroy = function() {
    this.port.postMessage({ type: "destroy" });
    this.port.close();
  };
  audio_node.getJSON = function() {
    return factory2.getJSON();
  };
  audio_node.setParamValue = function(path, val) {
    this.parameters.get(path).setValueAtTime(val, 0);
  };
  audio_node.getParamValue = function(path) {
    return this.parameters.get(path).value;
  };
  audio_node.setOutputParamHandler = function(handler) {
    this.output_handler = handler;
  };
  audio_node.getOutputParamHandler = function() {
    return this.output_handler;
  };
  audio_node.getNumInputs = function() {
    return parseInt(factory2.json_object.inputs);
  };
  audio_node.getNumOutputs = function() {
    return parseInt(factory2.json_object.outputs);
  };
  audio_node.inputChannelCount = function() {
    return parseInt(factory2.json_object.inputs);
  };
  audio_node.outputChannelCount = function() {
    return parseInt(factory2.json_object.outputs);
  };
  audio_node.getParams = function() {
    return this.inputs_items;
  };
  audio_node.getDescriptor = function() {
    return this.inputs_items;
  };
  audio_node.ctrlChange = function(channel, ctrl, value) {
    for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
      var path = this.fCtrlLabel[ctrl][i].path;
      this.setParamValue(path, audio_node.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
      if (this.output_handler) {
        this.output_handler(path, this.getParamValue(path));
      }
    }
  };
  audio_node.pitchWheel = function(channel, wheel) {
    for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
      var pw = this.fPitchwheelLabel[i];
      this.setParamValue(pw.path, audio_node.remap(wheel, 0, 16383, pw.min, pw.max));
      if (this.output_handler) {
        this.output_handler(pw.path, this.getParamValue(pw.path));
      }
    }
  };
  audio_node.midiMessage = function(data) {
    var cmd = data[0] >> 4;
    var channel = data[0] & 15;
    var data1 = data[1];
    var data2 = data[2];
    if (channel === 9) {
      return;
    } else if (cmd === 11) {
      this.ctrlChange(channel, data1, data2);
    } else if (cmd === 14) {
      this.pitchWheel(channel, data2 * 128 + data1);
    }
  };
  audio_node.onMidi = function(data) {
    this.midiMessage(data);
  };
  audio_node.getState = async function() {
    var params = new Object();
    for (let i = 0; i < this.getDescriptor().length; i++) {
      Object.assign(params, {
        [this.getDescriptor()[i]]: \`\${this.getParam(this.getDescriptor()[i])}\`
      });
    }
    return new Promise((resolve) => {
      resolve(params);
    });
  };
  audio_node.setState = async function(state) {
    return new Promise((resolve) => {
      for (const param in state) {
        if (state.hasOwnProperty(param))
          this.setParam(param, state[param]);
      }
      try {
        this.gui.setAttribute("state", JSON.stringify(state));
      } catch (error) {
        console.warn("Plugin without gui or GUI not defined", error);
      }
      resolve(state);
    });
  };
  audio_node.setPatch = function(patch) {
    this.setState(this.presets[patch]);
  };
  audio_node.metadata = function(handler) {
  };
  audio_node.remap = function(v, mn0, mx0, mn1, mx1) {
    return 1 * (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
  };
  callback2(audio_node);
};
faust.createDSPWorkletInstance = function(factory2, context, callback2) {
  var re1 = /mydsp/g;
  var re2 = /GETJSON/g;
  var re3 = /GETBASE64CODE/g;
  var mydspProcessorString1 = mydspProcessorString.replace(re1, factory2.name);
  var mydspProcessorString2 = mydspProcessorString1.replace(re2, factory2.getJSON());
  var mydspProcessorString3 = mydspProcessorString2.replace(re3, factory2.getBase64Code());
  var url = window.URL.createObjectURL(new Blob([mydspProcessorString3], { type: "text/javascript" }));
  context.audioWorklet.addModule(url).then(function() {
    faust.createDSPWorkletInstanceAux(factory2, context, callback2);
  }).catch(function(error) {
    alert(error);
  });
};
faust.deleteDSPWorkletInstance = function(dsp) {
};
const ready = faust.ready;
const internalFaustWrapper = faust;
function isUItemGroup(item) {
  return ["hgroup", "vgroup", "tgroup"].includes(item.type);
}
function isUItemNumber(item) {
  return ["hslider", "vslider", "nentry"].includes(item.type);
}
function isUItemBoolean(item) {
  return ["button", "checkbox"].includes(item.type);
}
function isUItemBarGraph(item) {
  return ["vbargraph", "hbargraph"].includes(item.type);
}
const factoryCache = /* @__PURE__ */ new Map();
async function compile(audioContext, dsp) {
  const argv = ["-ftz", "2", "-I", "http://127.0.0.1:8000/../../libraries/"];
  let factoryPromise = factoryCache.get(dsp);
  if (!factoryPromise) {
    factoryPromise = new Promise((resolve) => faust.createDSPFactory(dsp, argv, resolve));
    factoryCache.set(dsp, factoryPromise);
  }
  const factory2 = await factoryPromise;
  if (!factory2) {
    throw new Error(faust.error_msg);
  }
  const node = await new Promise((resolve) => faust.createDSPWorkletInstance(factory2, audioContext, resolve));
  if (!node) {
    throw new Error(faust.error_msg);
  }
  node.ui = JSON.parse(node.getJSON()).ui;
  const outputValues = /* @__PURE__ */ new Map();
  node.setOutputParamHandler((path, value) => {
    outputValues.set(path, value);
  });
  node.getOutputValue = (path) => {
    return outputValues.get(path) ?? 0;
  };
  return node;
}
exports.compile = compile;
exports.internalFaustWrapper = internalFaustWrapper;
exports.isUItemBarGraph = isUItemBarGraph;
exports.isUItemBoolean = isUItemBoolean;
exports.isUItemGroup = isUItemGroup;
exports.isUItemNumber = isUItemNumber;
exports.ready = ready;
function findOldestVoiceIndex(voices) {
  if (voices.length === 0)
    return -1;
  const oldest = voices.reduce((prev, current) => {
    const usePrev = !current || prev && prev.time < current.time;
    return usePrev ? prev : current;
  });
  return oldest?.voice ?? -1;
}
class VoiceAllocator {
  _time = 0;
  _voices = [];
  constructor(total) {
    this._voices.length = total;
  }
  _startVoice(voice, id) {
    const existing = this._voices[voice];
    if (existing?.released !== void 0) {
      clearTimeout(existing.released);
    }
    this._voices[voice] = {
      id,
      voice,
      time: this._time++
    };
    return voice;
  }
  _stopVoice(voice) {
    this._voices[voice] = void 0;
  }
  _findStarted(id) {
    return this._voices.findIndex((v) => v && v.id === id && v.released === void 0);
  }
  _findReleased(id) {
    return this._voices.findIndex((v) => v && v.id === id && v.released !== void 0);
  }
  get voices() {
    return this._voices.map((voice) => voice?.id);
  }
  get(id) {
    return this._voices.findIndex((v) => v && v.id === id);
  }
  start(id) {
    const started = this._findStarted(id);
    if (started !== -1) {
      return [started, false];
    }
    const released = this._findReleased(id);
    if (released !== -1) {
      return [this._startVoice(released, id), false];
    }
    const stopped = this._voices.findIndex((v) => !v);
    if (stopped !== -1) {
      return [this._startVoice(stopped, id), true];
    }
    const releasedVoices = this._voices.filter((v) => v?.released !== void 0);
    const oldestReleased = findOldestVoiceIndex(releasedVoices);
    if (oldestReleased !== -1) {
      return [this._startVoice(oldestReleased, id), true];
    }
    const oldestActive = findOldestVoiceIndex(this._voices);
    if (oldestActive !== -1) {
      return [this._startVoice(oldestActive, id), true];
    }
    throw new Error("unable to find oldest active voice");
  }
  stop(id) {
    const started = this._findStarted(id);
    if (started !== -1) {
      this._stopVoice(started);
    }
    return [started, false];
  }
  release(id, ms) {
    const started = this._findStarted(id);
    const voiceObject = this._voices[started];
    if (voiceObject) {
      voiceObject.released = setTimeout(() => {
        this._stopVoice(started);
      }, ms);
    }
    return [started, false];
  }
}
class VoiceController {
  _polyphony;
  _resolveGate;
  _release = 2e3;
  _paramCacheSize;
  _allocator;
  _allParams = {};
  _perVoiceParamsStore = /* @__PURE__ */ new Map();
  _recentlyAccessedIds = /* @__PURE__ */ new Set();
  constructor(config) {
    const { polyphony, paramCacheSize, resolveGate } = config;
    this._polyphony = polyphony;
    this._paramCacheSize = paramCacheSize;
    this._resolveGate = resolveGate;
    this._allocator = new VoiceAllocator(polyphony);
  }
  _accessId(id) {
    const set = this._recentlyAccessedIds;
    set.delete(id);
    set.add(id);
    while (set.size > this._paramCacheSize) {
      const id2 = set.keys().next().value;
      set.delete(id2);
      this._deleteParamsForId(id2);
    }
  }
  _getParamsForVoice(id) {
    this._accessId(id);
    const out = {};
    this._perVoiceParamsStore.forEach((subMap, key) => {
      const value = subMap.get(id);
      if (value !== void 0) {
        out[key] = value;
      }
    });
    return out;
  }
  _addParamForVoice(paramKey, id, paramValue) {
    const subMap = this._perVoiceParamsStore.get(paramKey) ?? /* @__PURE__ */ new Map();
    subMap.set(id, paramValue);
    this._perVoiceParamsStore.set(paramKey, subMap);
  }
  _addParamsForVoice(id, params) {
    this._accessId(id);
    for (const key in params) {
      const value = params[key];
      if (value !== void 0) {
        this._addParamForVoice(key, id, value);
      }
    }
  }
  _deleteParamsForId(id) {
    this._perVoiceParamsStore.forEach((subMap) => {
      subMap.delete(id);
    });
  }
  setRelease(release) {
    this._release = release;
  }
  set({ voice, ...params }) {
    if (voice === void 0) {
      return this.setAll(params);
    }
    return this.setWithId(\`\${voice}\`, params);
  }
  setWithId(id, params) {
    const gate = this._resolveGate(params);
    const { _allocator, _allParams } = this;
    let index = -1;
    if (gate !== void 0) {
      [index] = gate > 0 ? _allocator.start(id) : _allocator.release(id, this._release);
    } else {
      index = _allocator.get(id);
    }
    if (index === -1)
      return [];
    const perVoiceParams = this._getParamsForVoice(id);
    const mergedParams = {
      ..._allParams,
      ...perVoiceParams,
      ...params
    };
    this._addParamsForVoice(id, mergedParams);
    return [
      {
        index,
        params: mergedParams
      }
    ];
  }
  setAll(params) {
    this._allParams = {
      ...this._allParams,
      ...params
    };
    for (const paramName in params) {
      this._perVoiceParamsStore.set(paramName, /* @__PURE__ */ new Map());
    }
    const out = [];
    for (let i = 0; i < this._polyphony; i++) {
      out.push({
        index: i,
        params
      });
    }
    return out;
  }
}
function deserializeInIframe(serialized) {
  if (DspNode.isFaustDspNodeSerialized(serialized)) {
    return deserializeFaust(serialized);
  }
  if (DspNode.isPolyDspNodeSerialized(serialized)) {
    return deserializePoly(serialized);
  }
  throw new Error(\`serialized has invalid type "\${serialized.type}"\`);
}
function deserializeFaust(serialized) {
  const { dsp, inputs, paramDefs } = serialized;
  return new DspNodeFaust({
    dsp,
    inputs: inputs.map((input) => deserializeInIframe(input)),
    paramDefs,
    dependencies: {
      compile
    }
  });
}
function deserializePoly(serialized) {
  const { input, ...rest } = serialized;
  return new DspNodePoly({
    input: deserializeInIframe(input),
    ...rest,
    dependencies: {
      VoiceController
    }
  });
}
function lines(lines2) {
  return lines2.join("\\n");
}
function series(arr, joiner, callback2) {
  return arr.map(callback2).join(joiner);
}
function env(name, dsp) {
  return \`\${name} = environment { 
  \${dsp.replace(/\\n/g, "\\n  ")} 
};
\`;
}
async function constructNodeFaust(audioContext, dspNode, constructNode2) {
  const { inputs = [], paramDefs, dependencies } = dspNode;
  const inputNodes = await Promise.all(inputs.map((input) => constructNode2(audioContext, input)));
  const dspToCompile = lines([
    'import("stdfaust.lib");',
    constructFaustDsp(dspNode)
  ]);
  const faustNode = await dependencies.compile(audioContext, dspToCompile);
  const faustNodeDestroy = faustNode.destroy.bind(faustNode);
  const node = faustNode;
  node.destroy = () => {
    faustNodeDestroy();
    inputNodes.forEach((node2) => node2?.destroy());
  };
  const paramsUsed = faustNode.getParams();
  node.set = (params) => {
    paramsUsed.forEach((name) => {
      const paramKey = name.replace(/^\\/FaustDSP\\//g, "");
      const paramDef = paramDefs[paramKey];
      if (paramDef !== void 0) {
        const value = resolveParam(params, paramDef);
        if (typeof value === "number") {
          faustNode.setParamValue(name, value);
        }
      }
    });
    inputNodes.forEach((node2) => node2?.set(params));
  };
  for (let i = 0; i < inputNodes.length; i++) {
    inputNodes[i].connect(node, 0, i);
  }
  return node;
}
function constructFaustDsp(dspNode) {
  const { paramDefs, dsp } = dspNode;
  const paramsDsp = env("params", lines([
    series(Object.entries(paramDefs), "\\n", ([name, value]) => {
      if (typeof value === "number") {
        return \`\${name} = \${value};
\`;
      }
      return \`\${name} = hslider("\${name}",0.0,-9999999.0,9999999.0,0.0000001);\`;
    })
  ]));
  return lines([paramsDsp, dsp]);
}
async function constructNodePoly(audioContext, dspNode, constructNode2) {
  const {
    input,
    polyphony,
    paramCacheSize = 1e4,
    release,
    gate,
    dependencies
  } = dspNode;
  const releaseIsVariable = isVariable(release);
  const { VoiceController: VoiceController2 } = dependencies;
  const controller = new VoiceController2({
    polyphony,
    resolveGate: (params) => resolveParam(params, gate),
    paramCacheSize
  });
  const setRelease = (r) => controller.setRelease(r * 1e3);
  if (!releaseIsVariable) {
    setRelease(release);
  }
  const voiceNodes = await Promise.all(Array(polyphony).fill(0).map(() => constructNode2(audioContext, input)));
  const gainNode = new GainNode(audioContext);
  voiceNodes.forEach((node) => node.connect(gainNode));
  gainNode.destroy = () => {
    voiceNodes.forEach((node) => node?.destroy());
  };
  gainNode.set = (params) => {
    if (releaseIsVariable) {
      const value = params[release];
      if (typeof value === "number") {
        setRelease(value);
      }
    }
    const paramsToSet = controller.set(params);
    paramsToSet.forEach(({ index, params: params2 }) => {
      voiceNodes[index].set(params2);
    });
  };
  return gainNode;
}
async function constructNode(audioContext, dspNode) {
  if (DspNode.isFaustDspNode(dspNode)) {
    return await constructNodeFaust(audioContext, dspNode, constructNode);
  }
  if (DspNode.isPolyDspNode(dspNode)) {
    return await constructNodePoly(audioContext, dspNode, constructNode);
  }
  throw new Error(\`dspNode has invalid type "\${dspNode.type}"\`);
}
class Synth {
  audioContext;
  initialParams;
  node;
  connection;
  constructor(config) {
    this.audioContext = config.audioContext;
    this.initialParams = config.params;
  }
  async build(dspNode) {
    const newNode = await constructNode(this.audioContext, dspNode);
    this.node?.disconnect();
    this.node?.destroy();
    this.node = newNode;
    this.tryConnectNode();
  }
  connect(audio, output, input) {
    this.connection = [audio, output, input];
    this.tryConnectNode();
    return audio;
  }
  tryConnectNode() {
    if (this.node && this.connection) {
      this.node.disconnect();
      this.node.connect(...this.connection);
      if (this.initialParams) {
        this.set(this.initialParams);
      }
    }
  }
  disconnect(outputOrDestinationNode, output, input) {
    if (this.node) {
      this.node.disconnect(outputOrDestinationNode, output, input);
    }
  }
  set(params) {
    if (this.node) {
      this.node.set(params);
    }
  }
  destroy() {
    this.node?.destroy();
    this.node = void 0;
  }
}
async function offlineRenderSynthInner(offlineCtx, _source, props) {
  const { initialParams, dspNodeSerialized, events } = props;
  const synthDspNode = deserializeInIframe(dspNodeSerialized);
  const synth = new Synth({
    audioContext: offlineCtx,
    params: initialParams
  });
  await synth.build(synthDspNode);
  synth.connect(offlineCtx.destination);
  for (let i = 0; i < events.length; i++) {
    const { time, params } = events[i];
    offlineCtx.suspend(time).then(() => {
      synth.set(params);
      offlineCtx.resume();
    });
  }
}
exports.offlineRenderSynthInner = offlineRenderSynthInner;
`;async function offlineRender($){const yn=$,{initialParams:_e,dspNode:sn,events:ln}=yn,mn=ao(yn,["initialParams","dspNode","events"]),_n=sn.serialize();return offlineRender$1(yt({functionString:`
      ${offlineRenderSynthInnerStringified}
      exports.buildContext = exports.offlineRenderSynthInner;
    `,props:{initialParams:_e,dspNodeSerialized:_n,events:ln}},mn))}async function experimentalOfflineRender(){const $=[{time:.3,params:{voice:"a",gate:1,force:1,pitch:72,speed:5}},{time:.6,params:{voice:"b",gate:1,force:1,pitch:75,speed:3}},{time:.9,params:{voice:"c",gate:1,force:1,pitch:76,speed:5}},{time:1.2,params:{voice:"d",gate:1,force:1,pitch:79,speed:3}}],_e=await offlineRender({channels:1,sampleRate:48e3,length:2*48e3,initialParams,dspNode:synthDspNode,events:$}),sn=liveAudioContext.createBufferSource();sn.buffer=await toAudioBuffer$1(_e,liveAudioContext),sn.connect(liveAudioContext.destination),sn.start()}client.createRoot(document.getElementById("root")).render(jsx(React.StrictMode,{children:jsx(Demo,{})}));function Demo(){return jsxs("div",{className:classes$7.demo,children:[jsx(Surface,{onSurfaceNoteEvent:handleSurfaceEvent}),jsx(Sidebar,{handleDestroy,handleOfflineRenderTest:experimentalOfflineRender})]})}
