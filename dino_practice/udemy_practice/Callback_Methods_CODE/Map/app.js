//::::::: MAP ::::::::::

// Creates a new array with the results of calling a callback on every element in the array
// similar to the forEach, as it does something for EACH item in an array BUT it creates a new array with the return value, so it allows up to MAP the changes in the array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles = numbers.map(function (num) { // to be able to get the new array, dont forget to save it to a variable.
    return num * 2;
})


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
// Make a new array of just the movie titles.

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

//::Map example::
//Map Practice

// Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.
//
// e.g.,
// console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']
//
// Please note:
// The fullNames array is an array of objects with each object containing properties for the first and last names of each character. You may need to click the "Reset code" link if you do not see the fullNames array pre-loaded into the exercise's index.js file.
// This exercise has been updated, you may see Q&A threads from this lecture that relate to the original exercise which no longer exists. They can be ignored.

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here

let firstNames = fullNames.map (function (nam) {
    return nam.first
})