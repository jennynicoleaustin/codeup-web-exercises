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

