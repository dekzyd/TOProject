const palindromes = function (str) {
    
// accept str input
// remove punctuation and spaces
const splitStr = str.split(/[\s\p{P}]+/u)
const filteredWords = splitStr.filter((word) => word.length > 0)
// split each word into strings
const strChars = []
filteredWords.map((str) => strChars.push(...str.split('')))
// compare chars depending on str length
let len = strChars.length
for (let i = 0; i < len; i++) {
    // return false where char dont match
     if (strChars[i].toLowerCase() != strChars[len - (1 + i)].toLowerCase()) return false
}
// return true
return true

};

// Do not edit below this line
module.exports = palindromes;
