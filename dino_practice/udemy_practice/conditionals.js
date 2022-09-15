console.log('It works!');

// if(condition) {
// what you want to happen when condition is true
//}

// condition within parenthesis evaluates to either true or false, when condition evaluates to true, then the code will execute the information within the { }
let randomNum = Math.random();
if (randomNum < 0.5) {
    console.log('your number is less than 0.5')
}

//Else If - check if its the first thing, if true run code; if false check for the next condition.
//Syntax
// if (condition) {
//     code you want executed
//     } else if (next condition to check) {
//     code you want executed
//     }

// Else if example
let puppyName = 'female'
if (puppyName === 'male') {
    console.log("you're a good boy")
} else if (puppyName === 'female') {
    console.log("you're a good girl!")
}

// if, else if statements can be chained if; else if; else if.
//when chaining remember that the else if statement only runs if the previous code did not execute.

// Chained Example
let age = Math.floor(Math.random()*101) + 1 // remember Math.random give you a random decimal so if you want an integer you have to multiply by the range of integers you want and add 1
if (age < 5) {
    console.log('Ticket price is $0')
} else if (age < 10) {
    console.log('Ticket price is $5')
} else if (age < 65) {
    console.log('Ticket price is $10')
} else if (age >= 65) {
    console.log('ticket price is $5')
}
// you dont need to specific between ages 11-64, because the code for the else if for someone that is 3 would run first and the conditional would stop checking down the line.

