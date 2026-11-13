"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(n){throw r=0,n}}};var R=q(function(W,d){"use strict";function M(a){var r,n;for(r=[];n=a.next(),!n.done;)r.push(n.value);return r}d.exports=M});var x=q(function(X,_){"use strict";function F(a,r,n){var l,s,e;for(l=[],e=-1;s=a.next(),!s.done;)e+=1,l.push(r.call(n,s.value,e));return l}_.exports=F});var O=q(function(Z,S){"use strict";var L=require("@stdlib/assert-is-collection"),Y=require("@stdlib/assert-is-object"),g=require("@stdlib/assert-is-function"),k=require("@stdlib/assert-has-iterator-symbol-support"),A=require("@stdlib/symbol-iterator"),w=require("@stdlib/utils-define-nonenumerable-read-only-property"),B=require("@stdlib/array-base-getter"),C=require("@stdlib/array-base-accessor-getter"),P=require("@stdlib/utils-inherit"),j=require("@stdlib/array-fixed-endian-factory"),N=require("@stdlib/ndarray-base-bytes-per-element"),V=require("@stdlib/string-base-capitalize"),c=require("@stdlib/string-format"),D=R(),H=x(),U=k(),T="little-endian",z={float64:"setFloat64",float32:"setFloat32",int32:"setInt32",int16:"setInt16",uint32:"setUint32",uint16:"setUint16"},I={c:"a",f:"a",i:"an",u:"a",b:"a"};function G(a){return V(a)+"ArrayLE"}function J(a){var r,n,l,s;s=j(a),r=N(a),n=G(a),l=z[a];function e(){var i=arguments.length;return this instanceof e?(i===0?s.call(this,T):i===1?s.call(this,T,arguments[0]):i===2?s.call(this,T,arguments[0],arguments[1]):i===3&&s.call(this,T,arguments[0],arguments[1],arguments[2]),this):i===0?new e:i===1?new e(arguments[0]):i===2?new e(arguments[0],arguments[1]):new e(arguments[0],arguments[1],arguments[2])}return w(e,"BYTES_PER_ELEMENT",r),w(e,"name",n),w(e,"from",function(t){var o,b,v,m,f,E,p,h,u;if(!g(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!y(this))throw new TypeError(c("invalid invocation. `this` is not %s %s.",I[a[0]],n));if(b=arguments.length,b>1){if(v=arguments[1],!g(v))throw new TypeError(c("invalid argument. Second argument must be a function. Value: `%s`.",v));b>2&&(o=arguments[2])}if(L(t)){if(v){for(h=t.length,t.get&&t.set?p=C("default"):p=B("default"),m=new this(h),f=m._buffer,u=0;u<h;u++)f[l](u*r,v.call(o,p(t,u),u),!0);return m}return new this(t)}if(Y(t)&&U&&g(t[A])){if(f=t[A](),!g(f.next))throw new TypeError(c("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t));for(v?E=H(f,v,o):E=D(f),h=E.length,m=new this(h),f=m._buffer,u=0;u<h;u++)f[l](u*r,E[u],!0);return m}throw new TypeError(c("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t))}),w(e,"of",function(){var t,o;if(!g(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!y(this))throw new TypeError(c("invalid invocation. `this` is not %s %s.",I[a[0]],n));for(t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);return new this(t)}),P(e,s),e;function y(i){return i===e}}S.exports=J});var K=O();module.exports=K;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
