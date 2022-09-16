"use strict"
//
// // SYNTAX
// // for (initialExpression; condition(boolean value - expression continues as long as value is true); incrementExpression) {
// //      code you want to execute;
// //      }
// for (let i = 1; i<=10; i++) { // initialexpression: let i be equal to 1, condition: as long as i is less than or equal to 10, keep doing the incrementexpression, incrementexpression: set the new value of i to i+1)
//     console.log(i); // code I want to execute based on the forLoop
//     console.log('You can add as much code as you want') // just separate them by a semicolon
// }
//
// //Practice Exercise
// // Print out "Da ba dee da ba daa" 6 times, using a for loop
//
// for (let song = 1; song<= 6; song++) {
//     console.log('Da ba dee da ba daa');
// }

// // Print out even numbers only
//
// for (let i = 0; i<=20; i+=2) {
//     console.log(i)
// }

//Count down from 100 by 10s

for (let i = 100; i>=0; i-=10) {
    console.log(i)
}
