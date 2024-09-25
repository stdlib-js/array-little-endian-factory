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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var Float64Array = require( '@stdlib/array-float64' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol-iterator' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( ITERATOR_SYMBOL === null )
};
var Float64ArrayLE = factory( 'float64' );


// MAIN //

bench( pkg+'::typed_array:from', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Float64Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Float64ArrayLE.from( buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array:from:len=5', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Float64Array( 5 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Float64ArrayLE.from( buf );
		if ( arr.length !== 5 ) {
			b.fail( 'should have length 5' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array,clbk:from:len=5', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Float64Array( 5 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Float64ArrayLE.from( buf, clbk );
		if ( arr.length !== 5 ) {
			b.fail( 'should have length 5' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk( v ) {
		return v * 2.0;
	}
});

bench( pkg+'::array:from', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Float64ArrayLE.from( buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array:from:len=5', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Float64ArrayLE.from( buf );
		if ( arr.length !== 5 ) {
			b.fail( 'should have length 5' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,clbk:from:len=5', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Float64ArrayLE.from( buf, clbk );
		if ( arr.length !== 5 ) {
			b.fail( 'should have length 5' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk( v ) {
		return v * 2.0;
	}
});

bench( pkg+'::iterable:from', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Float64ArrayLE.from( createIterable() );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function createIterable() {
		var out = {};
		out[ ITERATOR_SYMBOL ] = iterator;
		return out;

		function iterator() {
			return {
				'next': next
			};
		}

		function next() {
			return {
				'done': true
			};
		}
	}
});

bench( pkg+'::iterable:from:len=5', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Float64ArrayLE.from( createIterable() );
		if ( arr.length !== 5 ) {
			b.fail( 'should have length 5' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function createIterable() {
		var out = {};
		out[ ITERATOR_SYMBOL ] = iterator;
		return out;

		function iterator() {
			var it = {
				'next': next,
				'i': 0,
				'N': 5
			};
			return it;

			function next() {
				it.i += 1;
				if ( it.i <= it.N ) {
					return {
						'value': 1.0
					};
				}
				return {
					'done': true
				};
			}
		}
	}
});

bench( pkg+'::iterable,clbk:from:len=5', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Float64ArrayLE.from( createIterable(), clbk );
		if ( arr.length !== 5 ) {
			b.fail( 'should have length 5' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function createIterable() {
		var out = {};
		out[ ITERATOR_SYMBOL ] = iterator;
		return out;

		function iterator() {
			var it = {
				'next': next,
				'i': 0,
				'N': 5
			};
			return it;

			function next() {
				it.i += 1;
				if ( it.i <= it.N ) {
					return {
						'value': 1.0
					};
				}
				return {
					'done': true
				};
			}
		}
	}

	function clbk( v ) {
		return v * 2.0;
	}
});
