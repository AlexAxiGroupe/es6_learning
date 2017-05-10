function great (greating='Hey', name='friend'){
	console.log(`${greating} ${name}!`);
}

great();
great('Hi','Bill')


function add (...values){
	let sum = 0;
	values.forEach(function(value){
		sum+=+value;
	});
	
	console.log(sum);
}

function add (...values){
	let summ = values.reduce(function(sum, current){
		return +sum + +current;
	});
	console.log(summ);
}

add('12','8','-12', '15', '-18');