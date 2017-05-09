'use strict';

var abc = ['a', 'b', 'c'];

function concatA(x, y, z) {
	var result;
	result = x + y + z;
	console.log(result);
};

concatA.apply(undefined, abc);
