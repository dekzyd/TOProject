const fibonacci = function(n) {
    // decide base cases
    if(n < 0) return 'OOPS'
    if(n == 0) return 0
    if(n === 1 || n === 2) return 1

    let prev = 1;
    let curr = 1;
    let next;

    for(let i = 0; i < (n - 2); i++){
        next = prev + curr
        prev = curr
        curr = next
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
