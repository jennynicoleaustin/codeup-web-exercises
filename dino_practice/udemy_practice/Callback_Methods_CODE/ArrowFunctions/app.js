//:::: ARROW FUNCTIONS :::::

// more compact, allows us to write a function without the function keyword. useful for when you just need a function one time.
// used to create function expression

//The following 2 blocks are functionally identical
// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// Arrow functions must be defined as a declared variable.
// ex below = an implicit return
const add = (a, b) => a + b;


const square = num => { // when you have a SINGLE parameter the () are optional
    return num * num;
}

// const rollDie = () => { // if no parameters, you still need to include empty ()
//     return Math.floor(Math.random() * 6) + 1
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)




const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// Arrow Function Exercise
// Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:
//
// greet("Hagrid") //"Hey Hagrid!"
// greet("Luna") //"Hey Luna!"
// Be sure to use arrow function syntax!

const greet = string => {
    return `Hey ${string}`;
}


// IMPLICIT RETURN

// You can leave off the return value for certain situations
// only works when you only have one value to evaluate and return

const newMovies = movies.map(movie => ( //no curly braces = an implicit return
    `${movie.title} - ${movie.score / 10}`
))

// Arrow Functions wrap up

