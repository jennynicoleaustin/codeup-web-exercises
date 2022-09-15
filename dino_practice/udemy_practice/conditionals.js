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
// you don't need to specific between ages 11-64, because the code for the else if for someone that is 3 would run first and the conditional would stop checking down the line.

// Else statements
// When you want code to execute for one condition, but a different code to execute for all other conditions, use else statements.
// else does not have a condition to be specified it is a catch all.

// else syntax
// if (condition) {
//      code you want executed
//      } else {
//      code you want executed if condition is false
//      };

// else example

let dayOfWeek = 'sunday'

if (dayOfWeek === 'monday') {
    console.log('monday is my favorite day of the week')
} else if (dayOfWeek === 'friday') {
    console.log('friday is my second favorite day of the week')
} else { //else stmts work either right after the if statement or after else if stmts
    console.log('all the other days are fine')
}

// a caveat... the else statement does not check to see if it is a valid day of the week. the else statement will run when any condition other than those defined in if and else ifs are true.

// Nesting conditionals!
// You can nest conditionals inside of other conditionals

// Nesting example

const password = prompt('please enter a new password');

// password requirements = 6+ characters & no spaces
// for above we should... check length; if >= 6,
// then pw is ok - index of. we want no space, so indexOf returns -1 then YAY

// Not a nested conditional but does work if you want two conditions to be true to execute a single code statement
// if (password.length >= 6 && (password.indexOf(' ') === -1)) {
//     console.log('Great password!')
// } else {
//     console.log('password does not meet minimum requirements')
// }

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('password contains no spaces')
    }
    console.log('password is great')
} else {
    console.log('password does not meet minimum requirements')
}

