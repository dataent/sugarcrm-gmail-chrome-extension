(function(){var g=this;
function h(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function k(a){return"function"==h(a)}function n(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function p(a,b,c){return a.call.apply(a.bind,arguments)}function q(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:q;return r.apply(null,arguments)};function s(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function t(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function u(a){k(g.setImmediate)?g.setImmediate(a):(v||(v=w()),v(a))}var v;
function w(){if(g.n&&g.n.resolve){var a=g.n.resolve();return function(b){a.then(b)}}var b=g.MessageChannel;"undefined"===typeof b&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(b=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d=b.location.protocol+"//"+b.location.host,a=r(function(a){if(a.origin==
d||a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof b){var c=new b,d={},e=d;c.port1.onmessage=function(){d=d.next;var a=d.o;d.o=null;a()};return function(a){e.next={o:a};e=e.next;c.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=
null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){g.setTimeout(a,0)}};function x(a){u(function(){throw a;})}function y(a,b){z||(u(B),z=!0);C.push(new D(a,b))}var z=!1,C=[];function B(){for(;C.length;){var a=C;C=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.a.call(c.b)}catch(d){x(d)}}}z=!1}function D(a,b){this.a=a;this.b=b};function E(a,b){this.a=F;this.f=void 0;this.b=this.e=null;this.c=this.d=!1;this.g=[];G(this,Error("created"));this.h=0;try{var c=this;a.call(b,function(a){H(c,I,a)},function(a){H(c,J,a)})}catch(d){H(this,J,d)}}var F=0,I=2,J=3;E.prototype.then=function(a,b,c){G(this,Error("then"));return K(this,k(a)?a:null,k(b)?b:null,c)};s(E);function L(a,b){a.b&&a.b.length||a.a!=I&&a.a!=J||M(a);a.b||(a.b=[]);a.b.push(b)}
function K(a,b,c,d){var e={l:null,p:null,q:null};e.l=new E(function(a,l){e.p=b?function(c){try{var e=b.call(d,c);a(e)}catch(A){l(A)}}:a;e.q=c?function(b){try{var e=c.call(d,b);a(e)}catch(A){l(A)}}:l});e.l.e=a;L(a,e);return e.l}E.prototype.i=function(a){this.a=F;H(this,I,a)};E.prototype.k=function(a){this.a=F;H(this,J,a)};
function H(a,b,c){if(a.a==F){if(a==c)b=J,c=new TypeError("Promise cannot resolve to itself");else{if(t(c)){a.a=1;c.then(a.i,a.k,a);return}if(n(c))try{var d=c.then;if(k(d)){N(a,c,d);return}}catch(e){b=J,c=e}}a.f=c;a.a=b;M(a);b!=J||O(a,c)}}function N(a,b,c){function d(b){f||(f=!0,a.k(b))}function e(b){f||(f=!0,a.i(b))}a.a=1;var f=!1;try{c.call(b,e,d)}catch(l){d(l)}}function M(a){a.d||(a.d=!0,y(a.m,a))}
E.prototype.m=function(){for(;this.b&&this.b.length;){var a=this.b;this.b=[];for(var b=0;b<a.length;b++){this.h++;var c=a[b],d=this.f;if(this.a==I)c.p(d);else{for(var e=void 0,e=this;e&&e.c;e=e.e)e.c=!1;c.q(d)}}}this.d=!1};function G(a,b){if("string"==typeof b.stack){var c=b.stack.split("\n",4)[3],d=b.message,d=d+Array(11-d.length).join(" ");a.g.push(d+c)}}
function O(a,b){a.c=!0;y(function(){if(a.c){if(b&&"string"==typeof b.stack&&a.g.length){for(var c=["Promise trace:"],d=a;d;d=d.e){for(var e=a.h;0<=e;e--)c.push(d.g[e]);c.push("Value: ["+(d.a==J?"REJECTED":"FULFILLED")+"] <"+String(d.f)+">")}b.stack+="\n\n"+c.join("\n")}aa.call(null,b)}})}var aa=x;var P=Array.prototype,ba=P.some?function(a,b,c){return P.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Q(a,b){this.c=[];this.r=b||null;this.a=this.g=!1;this.b=void 0;this.k=this.e=!1;this.d=0;this.h=null;this.m=0;this.f=null;if(Error.captureStackTrace){var c={stack:""};Error.captureStackTrace(c,Q);"string"==typeof c.stack&&(this.f=c.stack.replace(/^[^\n]*\n/,""))}}Q.prototype.i=function(a,b){this.e=!1;this.g=!0;this.b=b;this.a=!a;R(this)};function S(a,b,c){a.c.push([b,c,void 0]);a.g&&R(a)}
Q.prototype.then=function(a,b,c){var d,e,f=new E(function(a,b){d=a;e=b});S(this,d,function(a){e(a)});return f.then(a,b,c)};s(Q);function T(a){return ba(a.c,function(a){return k(a[1])})}
function R(a){if(a.d&&a.g&&T(a)){var b=a.d,c=V[b];c&&(g.clearTimeout(c.j),delete V[b]);a.d=0}a.h&&(a.h.m--,delete a.h);for(var b=a.b,d=c=!1;a.c.length&&!a.e;){var e=a.c.shift(),f=e[0],l=e[1],e=e[2];if(f=a.a?l:f)try{var m=f.call(e||a.r,b);void 0!==m&&(a.a=a.a&&(m==b||m instanceof Error),a.b=b=m);t(b)&&(d=!0,a.e=!0)}catch(U){b=U,a.a=!0,a.f&&n(b)&&b.stack&&/^[^\n]+(\n   [^\n]+)+/.test(b.stack)&&(b.stack=b.stack+"\nDEFERRED OPERATION:\n"+a.f),T(a)||(c=!0)}}a.b=b;d&&(m=r(a.i,a,!0),d=r(a.i,a,!1),b instanceof
Q?(S(b,m,d),b.k=!0):b.then(m,d));c&&(b=new W(b),V[b.j]=b,a.d=b.j)}function W(a){this.j=g.setTimeout(r(this.b,this),0);this.a=a}W.prototype.b=function(){delete V[this.j];throw this.a;};var V={};function X(a){chrome.storage.local.get("ydn-crm-track",function(b){var c=b["ydn-crm-track"];b="jsc/ydn.crm-0.8.9.js";navigator.onLine&&"Edge"==c?b="https://ydn-src-1.storage.googleapis.com/jsc/ydn.crm-edge.js":"Beta"==c?b="jsc/ydn.crm-0.8.9.js":"RC"==c&&(b="jsc/ydn.crm-0.8.9.js");c=document.createElement("script");c.onload=a;c.type="text/javascript";var d={};d["ydn-crm-src"]=b;chrome.storage.local.set(d);c.src=b;document.getElementsByTagName("head")[0].appendChild(c)})}var Y=["loadApp"],Z=g;
Y[0]in Z||!Z.execScript||Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)Y.length||void 0===X?Z[$]?Z=Z[$]:Z=Z[$]={}:Z[$]=X;})();
