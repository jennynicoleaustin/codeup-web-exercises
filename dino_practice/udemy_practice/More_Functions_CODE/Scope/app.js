// ==============
// FUNCTION SCOPE
// ==============

// Scope refers to the "visibility" of the variable

// defining a variable inside the function will mean you cannot access it outside of the function, like the example below

// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// When a variable is defined outside of the function, and then inside of the function we define another variable with the same name... within the function, the variable that was defined inside the function will take precedence.
// const bird = 'Scarlet Macaw';
// function birdWatch() {
//     const bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch()

// ==============
// BLOCK SCOPE
// ==============

// Block refers to {} outside a function (ex: conditionals or loops, etc)
// var VS let -- var will allow you to access the variable outside the block of code, let will not allow you to access the variable outside the block

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!'
// }
// console.log(radius);
// console.log(msg)

// for (let i = 0; i < 5; i++) {
//     let msg = "ASKLDJAKLSJD";
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)

// ==============
// LEXICAL SCOPE
// ==============

// Outer and Inner functions
// an inner function will have access to variables defined within its parent or grandparent function
// outer functions will NOT have access to the variables defined within the inner function.


function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}