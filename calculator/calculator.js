function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (input = []) {
	let answer = 0;
	for(x = 0; x < input.length; x++) {
		answer += input[x];
	}
	return answer;
}

function multiply (input = []) {
	let answer = 1;
	for(x = 0; x < input.length; x++) {
		answer = answer * input[x];
	}
	return answer;
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	if (a < 0) return 'ERROR';
	if (a == 0) return 1;
	return (a * factorial(a - 1));
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}