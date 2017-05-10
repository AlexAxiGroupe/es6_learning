'use strict';

function great() {
	var greating = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hey';
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

	console.log(greating + ' ' + name + '!');
}

great();
great('Hi', 'Bill');

function add() {
	var sum = 0;

	for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
		values[_key] = arguments[_key];
	}

	values.forEach(function (value) {
		sum += +value;
	});

	console.log(sum);
}

function add() {
	for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		values[_key2] = arguments[_key2];
	}

	var summ = values.reduce(function (sum, current) {
		return +sum + +current;
	});
	console.log(summ);
}

add('12', '8', '-12', '15', '-18');