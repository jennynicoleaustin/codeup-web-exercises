// :::: FILTER METHOD ::::::

// Creates a NEW array with the filtered values.
// --- must set a boolean statement, if that statement evaluates true for an item in the original array it is included in the new filtered array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n < 10
})

let bigNums = numbers.filter (n => n > 10)


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]



const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 2000)

// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)

// Combine map and filter to create a new array of only the movie titles with a score greater than 80
movies.filter(m => m.score > 80).map(m => m.title);
// first you filter the movies with the score you want, then map only the titles


// Filter exercise
//  For example:
//
// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// // => ["mark", "carrie98", "MoanaFan"]
//
// Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,
//
// function validUserNames(usernames) {
//   // your code here
// }

// or if you want to get fancy with an arrow function:
// const validUserNames = usernames => // your code here;

// There is no need to define an actual array of usernames, that part is done for you behind the scenes.
// If you get stuck on this exercise, please see here for a quick video walkthrough.

//Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters.

const validUserNames = usernames => usernames.filter (username => username.length < 10);