function add (a, b) {
		return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (numList) {
	if (numList.length == 0) {
		return 0;
	}

	const numTotal = numList.reduce((total, x) => {
		return total += x;
	}, 0);

	return numTotal;
}

function multiply (numList) {
	if (numList.length == 0) {
		return 0;
	}

	const numTotal = numList.reduce((total, x) => {
		return total *= x;
	}, 1);

	return numTotal;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(x) {
	let fact = 1;
	let currentNum = 1;
	
	if (x == 0) {
		return 1;
	} else {
		while (currentNum <= x) {
			fact *= currentNum;
			currentNum +=1
		}
	}

	return fact
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}