//::: FOREACH METHOD :::::

// calls the function 1x per item in the array. Each item in the array is passed in automatically.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usually seen when... defining a function inline (can also just be used with a predefined function passed as its argument)
numbers.forEach(function (el) { // anoyomous function passed in and defined within the foreach method
    if (el % 2 === 0) { // prints the even numbers
        console.log(el)
    }
})
// This forEach method can be simplified using the for of loop (in this instance)
// for (let el of numbers) {
//     console.log(el);
// }

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

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

