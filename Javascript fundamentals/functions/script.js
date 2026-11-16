function add7(num) {
    return num + 7;
}

console.log('add7', add7(5));

let multiply = function(a, b) {
    return a * b;
}

console.log('multiply', multiply(3, 5));

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

console.log('capitalize', capitalize('AbCd'));

const lastLetter = str => str.charAt(str.length - 1);
console.log('lastLetter', lastLetter('Embezzled'));



