//:::: ITERATING OVER OBJECTS:::::

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// for of cannot be used to iterate over an object literal since it is not technically an object. instead we use the FOR IN loop

// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

//for in only gives up the key of an object.
// for (let key in testScores) {
//     console.log(key)
// } // this gives only the key, not the key and value...
//
// // One option to get both the key and the value to print out is...
// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

// Object.values turns the values of the associated keys into an array
// Object.keys turns the keys into an array
//Object.entries gives in array, each item in the array is [key, value]

// sum up all the scores and average them. save the average to a variable

// need to get all the values
// add all values together
// divide sum by number of values

let total = 0 // make a variable for your for of to add to
let scores = Object.values(testScores)
for (let score of scores) {
    total += score;
}
let average = total/scores.length





// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length)

