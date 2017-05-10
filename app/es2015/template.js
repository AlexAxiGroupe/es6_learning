function great (name, surName) {
	document.write(upperName`Hello ${name + " " + surName}! How are you?`);
}

great('Alexander', 'Plakhotenko');

function createEmail (from, to, subject, message){
	let text =`
		from : ${from}
		to : ${to}
		subject : ${subject}
		message : ${message}`;
	console.log(text);
}

let email = ['Me', 'You', 'Hello', 'Hello! How are you?'];

createEmail(...email);

function add (x, y) {
	console.log(`${x} + ${y} = ${+x + +y}`);
}

add('5','6');

function upperName (literals, value){
	console.log(literals, value);
	return literals[0] + value.toUpperCase() + literals.slice(1, literals.length).join();
}