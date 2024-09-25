<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# littleEndianFactory

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a typed array constructor for creating typed arrays stored in little-endian byte order.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

In contrast to the built-in typed array constructors which store values according to the host platform byte order, the typed array constructors returned by the factory function always access elements in little-endian byte order. Such enforcement can be particularly advantageous when working with memory buffers which do not necessarily follow host platform byte order, such as [WebAssembly memory][@stdlib/wasm/memory].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import littleEndianFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-little-endian-factory@esm/index.mjs';
```

#### littleEndianFactory( dtype )

Returns a typed array constructor for creating typed arrays having a specified [data type][@stdlib/array/typed-dtypes] and stored in little-endian byte order.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );
// returns <Function>

var Float32ArrayLE = littleEndianFactory( 'float32' );
// returns <Function>
```

* * *

### Typed Array Constructor

#### TypedArrayLE()

A typed array constructor which returns a typed array representing an array of values in little-endian byte order.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE();
// returns <Float64ArrayLE>
```

#### TypedArrayLE( length )

Returns a typed array having a specified length.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( 5 );
// returns <Float64ArrayLE>
```

#### TypedArrayLE( typedarray )

Creates a typed array from another typed array.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr1 = new Float32Array( [ 0.5, 0.5, 0.5 ] );
var arr2 = new Float64ArrayLE( arr1 );
// returns <Float64ArrayLE>

var v = arr2.get( 0 );
// returns 0.5
```

#### TypedArrayLE( obj )

Creates a typed array from an array-like object or iterable.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( [ 0.5, 0.5, 0.5 ] );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 0.5
```

#### TypedArrayLE( buffer\[, byteOffset\[, length]] )

Returns a typed array view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';

var Float64ArrayLE = littleEndianFactory( 'float64' );

var buf = new ArrayBuffer( 32 );
var arr = new Float64ArrayLE( buf, 0, 4 );
// returns <Float64ArrayLE>
```

* * *

### Typed Array Properties

<a name="static-prop-bytes-per-element"></a>

#### TypedArrayLE.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var nbytes = Float64ArrayLE.BYTES_PER_ELEMENT;
// returns 8
```

<a name="static-prop-name"></a>

#### TypedArrayLE.name

Typed array constructor name.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var str = Float64ArrayLE.name;
// returns 'Float64ArrayLE'
```

<a name="prop-buffer"></a>

#### TypedArrayLE.prototype.buffer

**Read-only** property which returns the [`ArrayBuffer`][@stdlib/array/buffer] referenced by the typed array.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( 5 );
var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### TypedArrayLE.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the typed array.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( 5 );
var byteLength = arr.byteLength;
// returns 40
```

<a name="prop-byte-offset"></a>

#### TypedArrayLE.prototype.byteOffset

**Read-only** property which returns the offset (in bytes) of the typed array from the start of its [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( 5 );
var byteOffset = arr.byteOffset;
// returns 0
```

<a name="prop-bytes-per-element"></a>

#### TypedArrayLE.prototype.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( 5 );
var nbytes = arr.BYTES_PER_ELEMENT;
// returns 8
```

<a name="prop-length"></a>

#### TypedArrayLE.prototype.length

**Read-only** property which returns the number of view elements.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( 5 );
var len = arr.length;
// returns 5
```

* * *

### Typed Array Methods

<a name="static-method-from"></a>

#### TypedArrayLE.from( src\[, map\[, thisArg]] )

Creates a new typed array from an array-like object or an iterable.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = Float64ArrayLE.from( [ 1.0, -1.0 ] );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 1.0
```

To invoke a function for each `src` value, provide a callback function.

```javascript
function mapFcn( v ) {
    return v * 2.0;
}

var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = Float64ArrayLE.from( [ 1.0, -1.0 ], mapFcn );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 2.0
```

A callback function is provided two arguments:

-   **value**: source value.
-   **index**: source index.

To set the callback execution context, provide a `thisArg`.

```javascript
function mapFcn( v ) {
    this.count += 1;
    return v * 2.0;
}

var Float64ArrayLE = littleEndianFactory( 'float64' );

var ctx = {
    'count': 0
};

var arr = Float64ArrayLE.from( [ 1.0, -1.0 ], mapFcn, ctx );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 2.0

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### TypedArrayLE.of( element0\[, element1\[, ...elementN]] )

Creates a new typed array from a variable number of arguments.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = Float64ArrayLE.of( 1.0, -1.0 );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 1.0
```

<a name="method-get"></a>

#### TypedArrayLE.prototype.get( i )

Returns an array element located at a nonnegative integer position (index) `i`.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( 10 );

// Set the first element:
arr.set( 1.0, 0 );

// Get the first element:
var v = arr.get( 0 );
// returns 1.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( 10 );

var v = arr.get( 100 );
// returns undefined
```

<a name="method-set"></a>

#### TypedArrayLE.prototype.set( arr\[, offset] )

Sets array elements.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayLE>

var v = arr.get( 0 );
// returns 1.0

v = arr.get( 1 );
// returns 2.0

// Set the first two array elements:
arr.set( [ 4.0, 5.0 ] );

v = arr.get( 0 );
// returns 4.0

v = arr.get( 1 );
// returns 5.0
```

By default, the method starts writing values at the first array index. To specify an alternative index, provide an index `offset`.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayLE>

// Set the last two array elements:
arr.set( [ 4.0, 5.0 ], 1 );

var v = arr.get( 1 );
// returns 4.0

v = arr.get( 2 );
// returns 5.0
```

A few notes:

-   If `i` is out-of-bounds, the method throws an error.
-   If a target array cannot accommodate all values (i.e., the length of source array plus `i` exceeds the target array length), the method throws an error.
-   If provided a typed array which shares an [`ArrayBuffer`][@stdlib/array/buffer] with the target array, the method will intelligently copy the source range to the destination range.

<a name="method-to-string"></a>

#### TypedArrayLE.prototype.toString()

Serializes an array as a string.

```javascript
var Float64ArrayLE = littleEndianFactory( 'float64' );

var arr = new Float64ArrayLE( [ 1.0, 2.0, 3.0 ] );

var str = arr.toString();
// returns '1,2,3'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   While returned constructors _strive_ to maintain (but do not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

    -   Constructors **not** require the `new` operator.
    -   Accessing array elements using bracket syntax (e.g., `X[i]`) is **not** supported. Instead, one **must** use the `.get()` method.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@esm/index.mjs';
import littleEndianFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-little-endian-factory@esm/index.mjs';

var Float64ArrayLE = littleEndianFactory( 'float64' );

// Create a typed array by specifying a length:
var out = new Float64ArrayLE( 3 );
logEach( '%s', out );

// Create a typed array from an array:
var arr = [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ];
out = new Float64ArrayLE( arr );
logEach( '%s', out );

// Create a typed array from an array buffer:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float64ArrayLE( arr.buffer );
logEach( '%s', out );

// Create a typed array from an array buffer view:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float64ArrayLE( arr.buffer, 8, 2 );
logEach( '%s', out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-little-endian-factory.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-little-endian-factory

[test-image]: https://github.com/stdlib-js/array-little-endian-factory/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-little-endian-factory/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-little-endian-factory/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-little-endian-factory?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-little-endian-factory.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-little-endian-factory/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-little-endian-factory/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-little-endian-factory/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-little-endian-factory/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-little-endian-factory/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-little-endian-factory/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-little-endian-factory/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-little-endian-factory/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-little-endian-factory/main/LICENSE

[@stdlib/array/typed]: https://github.com/stdlib-js/array-typed/tree/esm

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer/tree/esm

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory/tree/esm

[@stdlib/array/typed-dtypes]: https://github.com/stdlib-js/array-typed-dtypes/tree/esm

</section>

<!-- /.links -->
