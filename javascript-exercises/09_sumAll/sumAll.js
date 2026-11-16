const sumAll = function(a, b) {
let sum = 0;
if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'

let minNum = a;
let highNum = b;
if(a > b) {
    [minNum, highNum] = [highNum, minNum]
}
    
for(let i = minNum; i <= highNum; i++) {
    sum += i
}
return sum
};

// Do not edit below this line
module.exports = sumAll;
