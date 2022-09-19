//::::: FUNCTIONS :::::

// What is a function? a reusable block of code that we're wrapped up to be used (executed) later.
// Why functions? code is contains less duplications, is easier to use and look at
// Goal is to be able to pass in an input that alters the output based on the values of the input

//Writing a function... Two steps, 1. register the function, AND 2. run the function
// SYNTAX
// function functionName (parameterHere) {
//  code you want executed goes here
// }

function doSomething () {
    console.log('something happened');
    console.log('another thing happened');
    console.log('one more thing happens')
}
// until you call this function js ignores all the code inside the curly braces
// to run the function, just type the function name ()
doSomething();

// Generally you should call your function after you define it (hoisting, the term for calling the function first... if you want to look into that

// ::: ARGUMENTS ::::: -- actual value inside the ()
// the type of input you want inside the ()... the input that impacts the output
// inside the () you place the parameter - this is basically a variable that hold the value of the argument later to be passed.

function greet (name) {
    console.log(`Howdy, ${name}!`)
}
// if you specify a parameter then you need to add in the parameter as an argument, or if you reference the ${name} - it will return as undefined

greet('Jenny');

function rant(message) {
    let upperMessage = message.toUpperCase();
    console.log(upperMessage);
    console.log(upperMessage);
    console.log(upperMessage);
}

rant('I hate beets!')

// Multiple arguments
// JS cares about the order of the arguments. when defined as parameters you must keep the arguments in the call in the same order.

// write a function that accepts a string and a number and then prints out the string that number of times
// we need to concatenate msg numTimes.

// function repeat (msg, numTimes) {
//     let result = ''; // give a variable an empty string so that the below code can add to it
//     for (i = 0; i < numTimes; i++) { // loop through the result += msg process numTimes
//         result += msg; // take that empty string and add the msg
//     }
//     console.log(result) // log the result -- which is the msg numTimes
// }
// repeat('howdy', 3)

//Multiple Args Exercise
// In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"
//
// isSnakeEyes(1,1) //Snake Eyes!
// isSnakeEyes(1,5) //Not Snake Eyes!
// isSnakeEyes(4,5) //Not Snake Eyes!
// Hint: Normally a function will return a value, but for the sake of having this work with the Udemy interpreter we will be using console.log() instead of return, to print the output.

function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log('Snake Eyes!')
    } else {
        console.log('Not Snake Eyes!')
    }
}

// RETURN -- how to capture the output values of functions... return keyword

// return exp
// function add(x,y) {
//     return x + y; // return ends the code execution, no code after the return statement will run
// }
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}
// You can only return a single value. (value can be an array or oject)

// It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).  Make sure to return the value instead of printing it!
//
// multiply(2,3) // 6
// multiply(9,9) // 81
// multiply(5,4) // 20

function multiply (x, y) {
    let sum = x * y;
    return sum;
}

multiply(1,3)

// I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather.
//
// It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course).
// If temperature is greater than or equal to 75, return true.
// Otherwise, return false.
// This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!
//
// isShortsWeather(80) //true
// isShortsWeather(48) //false
// isShortsWeather(75) //true
function isShortsWeather (temp) {
    if (temp >= 75) {
        return true;
    }
    return false
}

// Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.
//
// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null

function lastElement (array) {
    let lastEl = (array.length - 1)
    if (lastEl === -1) {
        return null
    } else
        return array[lastEl]
}

let myArray = ['jenny', 'billy', 'nikki', 'petey']

let emptyArray = []

// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:
//
// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"

// Hints:
// Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  You will need to make a new string that you return
// Single out the first letter and capitalize it. (use a string method to help!)
// Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)
//
// For example: 'eggplant' becomes 'E' + 'ggplant'

function capitalize (string) {
    let firstLetter = string[0].toUpperCase();
    let lastIndex = (string.length + 1);
    let restString = string.substring(1, lastIndex).toLowerCase();
    let newString = `${firstLetter}${restString}`;
    return newString;
}

// Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.
//
// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101
// Hints:
// You'll need a variable to keep track of the total.  It should start out as zero.
// Loop over the array and for each element, add it to the total variable.
// After you have added every number to total, return total.

function sumArray(numArray) {
    let total = 0
    for (let i = 0; i <= (numArray.length -1); i++) {
        total += numArray[i]
        // console.log(numArray[i])
    } return total
}
let testArray = [1, 2, 3, 4]

// Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.
//
// Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.
// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null
//
// const theWeek = [
//     {name: 'Monday', number: 1},
//     {name: 'Tuesday', number: 2},
//     {name: 'Wednesday', number: 3},
//     {name: 'Thursday', number: 4},
//     {name: 'Thursday', number: 4},
//     {name: 'Thursday', number: 4},
//     {name: 'Sunday', number: 7}
//     ]
const theWeek =
    {1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday', 7:'Sunday'}
function returnDay (num) {
    if (num < 1 || num > 7) {
        return null;
    }
    return (theWeek[num])
}






// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }
//
// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }
//
// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }
//
//





// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

