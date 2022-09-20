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



if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('password contains no spaces')
    }
    console.log('password is great')
} else {
    console.log('password does not meet minimum requirements')
}

//Truthiness and Falsiness
//all values in JS are inherently true or false - aka they have an inherent true or false value assigned to them.
// All values are TRUE except the following; '' (empty string), null, undefined, 0, NaN, false

//Example to test truthy or Falsy

const userInput = prompt('enter something');

if (userInput) {
    console.log('TRUTHY!')
} else {
    console.log('FALSY!')
}

//userInput will be converted (forced) into a boolean value
//thus the code after if will run if the value (or condition) is inherently true. else = inherently false values

//LOGICAL OPERATORS

// && AND operator - both statements must be true for the overall statement to evalate to true. If the first statement is false than js does not check statement 2, if first statement is true and second statement is false the overall statement is FALSE

if (password.length >= 6 && (password.indexOf(' ') === -1)) {
    console.log('Great password!')
} else {
    console.log('password does not meet minimum requirements')
}

// && Can be used to compare numbers and combined with ||

// || OR Operator
// only cares if one of the statements is true.

// && runs before ||
// If you want || to run before && remember pmdos and add parenthesis around the || statement

// ! BANG aka NOT
//example
// let firstName = prompt('enter your first name');
//     if(!firstName) {
//         firstName = prompt('Try again!');
//     }
//
// let ageNum = 8;
//     if (!(age >= 0 && age < 5 || age >= 65)) { // if the value of age is not greater than or equal to 0 OR age is not greater than or equal to 65;
//         console.log("you're right in the middle!") // then log that shit
//     }

// SWITCH STMT
// Control-flow statement that can replace multiple if statements

//Switch Stmt SYNTAX
// switch (variable name) {
//      case value:
//            code you want to execute;
//            break; // if you do not include the break stmt you will see all the code after the first true value executed
//      case next value:
//            code you want to execute;
//            break; // and so on with the cases you want to check
//      default:
//            code you want to execute if none of the above situations are true