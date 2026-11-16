const findTheOldest = function(arr) {
// create an oldest person var
let oldest_age = 0
let oldest = {}
//    go through each person
arr.forEach(function(person){
    // find their age
    const endYear = (person.yearOfDeath ?? new Date().getFullYear())
    const age = endYear - person.yearOfBirth

    // compare prev oldest person to current persons age, assign oldest if curr > prev
    if(age > oldest_age) {
        oldest_age = age
        oldest = person
    }
})
// return oldest person var
return oldest;


};

// Do not edit below this line
module.exports = findTheOldest;
