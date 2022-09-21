// ::: REST ::::

// Looks like spread ... but
// not available inside arrow functions

// The arguments object within a function stores all the values passed when the function is called.

// arguments -- is not actually an area so you can not use array methods like below.
// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }


// Rest parameters, collects all the remaining arguments passed in a function and puts them in an array.
// (...sums) -- basically states that all the values passed as arguments are accepted and turned into an array.
// COLLECT THE "REST" IN NUMS:
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

// you can define specific parameters in the function and use ...rest to collect all the other data passed in the function.
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
