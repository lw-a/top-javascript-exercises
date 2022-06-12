const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(x) {
	let total = 0;

    for (let i = 0; i < x.length; i++) {
      total += x[i];
    }
    return total;

};

const multiply = function(x) {
  let total = 1;

    for (let i = 0; i < x.length; i++) {
      total *= x[i];
    }
    
  return total;
};

const power = function(x,y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	let total = 1;

  for (i = x; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
