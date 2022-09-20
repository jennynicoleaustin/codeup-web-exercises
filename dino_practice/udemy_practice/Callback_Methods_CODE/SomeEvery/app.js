// ::: SOME & EVERY ::::

// boolean methods - will return either true of false

// Every -- does every element in the array return true, if so, the return value is true. If any element returns false, the entire every will return false

//SOME -- does some of the elements in the array return true, (at least one) - the some will return true.
// does not return which element in the array is true, you would need to use filter for that

//Some/Every Exercise
// Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.  Use some or every to help you do this!  (only one of them is actually useful here)
//
// allEvens([2,4,6,8]) //true
// allEvens([1,4,6,8]) //false
// allEvens([1,2,3]) //false

const allEvens = (numbers) => {
    return numbers.every(number => number % 2 === 0)
};
// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]
//
// exams.every(score => score >= 75)
//
// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2010
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]
//
//
// movies.some(movie => movie.year > 2015)`