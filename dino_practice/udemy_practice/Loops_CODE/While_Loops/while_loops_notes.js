"use strict"

// ::::::WHILE LOOPS:::::

//Continue running as long as the condition evaluates to true

// logs count as long as the while condition is less than 10

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// } // for these types where we are iterating over a set a certain amount of times a for loop is preferred

// //while loops are more useful when iterating over something an unknown amount of times.
//
// const SECRET = "BabyHippo";
//
// let guess = prompt("enter the secret code..."); // ask user to guess
// while (guess !== SECRET) { // condition to evaluate t or f
//     guess = prompt("enter the secret code..."); // this codes continues to execute until the condition above is false
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!") // could outside the {} will execute after the while condition evaluates to false
//
// //break keyword -- the execution of the code stops immediately
//
// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break; // break says that as soon as the if condition is met the loop stops
// }
// console.log("OK YOU WIN!")

//Guessing Game

// Prompt the user to enter a maximum number, continue to prompt user if the data entered is NaN
let maxNum = parseInt(prompt('Enter your maximum number'));
while (!maxNum) {
    maxNum = parseInt(prompt('Enter a valid Number'));
}
// Create the random number
let randomNum = Math.floor((Math.random() * maxNum) + 1);
console.log(`Magic Number is ${randomNum}`);

// prompt user to enter a guess and then tell them if the guess is too high or too low
let guess = parseInt(prompt('Enter a number to guess'));
console.log(`guess = ${guess}`)

//log the number of attempts
let attempts = 1

// create a loop that will continue to prompt the user for a guess until they guess correctly, but allow them to enter quit to quit the game
while (parseInt(guess) !== randomNum) {
    if (guess === 'quit') break;
    attempts++;
    if (guess > randomNum) {
        guess = prompt('guess again, your number is too high');
    } else {
        guess = prompt('guess again your number is too low');
    }
}
if (guess === 'quit') {
    console.log('you quit!');
} else {
    console.log(`You finally got it, it only took you ${attempts} tries`)
};

