const removeFromArray = function (arr, ...ele) {
    for (let j = 0; j < ele.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            const eleIndex = arr.indexOf(ele[j])
            arr.splice(eleIndex, 1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
