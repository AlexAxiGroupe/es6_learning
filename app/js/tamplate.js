'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', '! How are you?'], ['Hello ', '! How are you?']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function great(name, surName) {
	document.write(upperName(_templateObject, name + " " + surName));
}

great('Alexander', 'Plakhotenko');

function createEmail(from, to, subject, message) {
	var text = '\n\t\tfrom : ' + from + '\n\t\tto : ' + to + '\n\t\tsubject : ' + subject + '\n\t\tmessage : ' + message;
	console.log(text);
}

var email = ['Me', 'You', 'Hello', 'Hello! How are you?'];

createEmail.apply(undefined, email);

function add(x, y) {
	console.log(x + ' + ' + y + ' = ' + (+x + +y));
}

add('5', '6');

function upperName(literals, value) {
	console.log(literals, value);
	return literals[0] + value.toUpperCase() + literals.slice(1, literals.length).join();
}