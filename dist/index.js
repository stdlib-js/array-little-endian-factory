"use strict";var q=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var R=q(function(W,d){"use strict";function M(a){var e,u;for(e=[];u=a.next(),!u.done;)e.push(u.value);return e}d.exports=M});var x=q(function(X,_){"use strict";function F(a,e,u){var l,s,r;for(l=[],r=-1;s=a.next(),!s.done;)r+=1,l.push(e.call(u,s.value,r));return l}_.exports=F});var O=q(function(Z,S){"use strict";var L=require("@stdlib/assert-is-collection"),Y=require("@stdlib/assert-is-object"),g=require("@stdlib/assert-is-function"),k=require("@stdlib/assert-has-iterator-symbol-support"),A=require("@stdlib/symbol-iterator"),w=require("@stdlib/utils-define-nonenumerable-read-only-property"),B=require("@stdlib/array-base-getter"),C=require("@stdlib/array-base-accessor-getter"),P=require("@stdlib/utils-inherit"),j=require("@stdlib/array-fixed-endian-factory"),N=require("@stdlib/ndarray-base-bytes-per-element"),V=require("@stdlib/string-base-capitalize"),c=require("@stdlib/string-format"),D=R(),H=x(),U=k(),T="little-endian",z={float64:"setFloat64",float32:"setFloat32",int32:"setInt32",int16:"setInt16",uint32:"setUint32",uint16:"setUint16"},I={c:"a",f:"a",i:"an",u:"a",b:"a"};function G(a){return V(a)+"ArrayLE"}function J(a){var e,u,l,s;s=j(a),e=N(a),u=G(a),l=z[a];function r(){var n=arguments.length;return this instanceof r?(n===0?s.call(this,T):n===1?s.call(this,T,arguments[0]):n===2?s.call(this,T,arguments[0],arguments[1]):n===3&&s.call(this,T,arguments[0],arguments[1],arguments[2]),this):n===0?new r:n===1?new r(arguments[0]):n===2?new r(arguments[0],arguments[1]):new r(arguments[0],arguments[1],arguments[2])}return w(r,"BYTES_PER_ELEMENT",e),w(r,"name",u),w(r,"from",function(t){var o,b,v,m,f,E,p,h,i;if(!g(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!y(this))throw new TypeError(c("invalid invocation. `this` is not %s %s.",I[a[0]],u));if(b=arguments.length,b>1){if(v=arguments[1],!g(v))throw new TypeError(c("invalid argument. Second argument must be a function. Value: `%s`.",v));b>2&&(o=arguments[2])}if(L(t)){if(v){for(h=t.length,t.get&&t.set?p=C("default"):p=B("default"),m=new this(h),f=m._buffer,i=0;i<h;i++)f[l](i*e,v.call(o,p(t,i),i),!0);return m}return new this(t)}if(Y(t)&&U&&g(t[A])){if(f=t[A](),!g(f.next))throw new TypeError(c("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t));for(v?E=H(f,v,o):E=D(f),h=E.length,m=new this(h),f=m._buffer,i=0;i<h;i++)f[l](i*e,E[i],!0);return m}throw new TypeError(c("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",t))}),w(r,"of",function(){var t,o;if(!g(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!y(this))throw new TypeError(c("invalid invocation. `this` is not %s %s.",I[a[0]],u));for(t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);return new this(t)}),P(r,s),r;function y(n){return n===r}}S.exports=J});var K=O();module.exports=K;
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
