const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, item) => acc + item, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => acc * item, 1)
};

const power = function(base, exp) {
  return base ** exp
	
};

const factorial = function(n) {

  if (n <= 1) return 1
 let result = 1
 while(n > 1){
  result *= n
  n--
 }
 return result;
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
