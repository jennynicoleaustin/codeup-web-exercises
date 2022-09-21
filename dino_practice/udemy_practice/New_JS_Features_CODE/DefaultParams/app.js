// :::: DEFAULT PARAMETER ::::::

// for functions where a user can pass in a parameter, however they can also leave it blank
//we can create a default parameter - the argument used if no parameter is passed in by the user

// ==========================================
// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE
// ==========================================

// function rollDie(numSides) {
//     if (numSides === undefined) { // you need to check if it's undefined first and then if it is assign the value of the parameter to be 6
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// ============
// THE NEW WAY!
// ============
function rollDie(numSides = 6) { // parameter = default value
    return Math.floor(Math.random() * numSides) + 1
}

function greet(person, msg = "Hey there", punc = '!') { // if you have a parameter with no default parameter then that needs to come AFTER the parameter without a default parameter.
    console.log(`${msg}, ${person}${punc}`)
}

