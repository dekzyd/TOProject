const repeatString = function(string, num) {
    if(num < 0) return 'ERROR'
    const repeatedString = []
    for(let i = 0; i < num; i++) {
        repeatedString.push(string)
    }
    return repeatedString.join('')
};

// Do not edit below this line
module.exports = repeatString;
