// ======================
// FUNCTIONS AS ARGUMENTS
// ======================

// Functions that work with other functions or operate on functions
//1. functions that accept other functions as arguments
//2. functions that return a function


//
// function callTwice(func) {
//     func();
//     func();
// }
//
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }
//
// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }
//
// // For passing a function as an argument to work you must only input the value (without the ())
//
// //:::dont do this:::
// //callTwice(rollDie()) --- If you do this you are essentially saying
// // -- rollDie() ::: return value = 5
// //callTwice(5)
//
// //DO THIS INSTEAD
// callTwice(rollDie)

// ====================
// RETURNING FUNCTIONS
// ====================



// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!")
//             console.log("YOU WIN A MILLION DOLLARS!!")
//         }
//     } else {
//         return function () {
//             alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//         }
//     }
// }

//This function returns a new function that checks if a number is between a min and max

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// When you run this function it will return a function with the parameter min and max inputted into the function
// ie makeBetweenFunc(10, 100) :::: returns ::: function (num) { return num >= 10 && num <= max }

// if you declare a variable = to the function, then you have access to the function

// example

let isTall = makeBetweenFunc(70, 200)
// then pass the number you want to check into isTall
isTall(72)
// return should be a boolean value 


