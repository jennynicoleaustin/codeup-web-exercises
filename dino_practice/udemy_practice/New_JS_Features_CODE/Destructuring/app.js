// ===================
// ARRAY DESTRUCTURING
// ===================

// nice way to unpack, or single out values from an arrays or properties from objects - and place them into distinct variables.
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0]; // taking the first score and assigning it to a variable.
// const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores; // within array brackets assign each item in the array to a specific variable by following the same order as the original array and setting it equal to the original array.
// gold = 929321, etc
// You are not removing the data from the original array, you leave the original array intact
// you can ignore the rest of the array by simply not indicating the ones you do not want assigned.
// using ...withAName will assign all the rest to a variable named withAName

// ===================
// OBJECT DESTRUCTURING
// ===================

// More useful that destructing an array because it is not dependent on the order of the array

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}
// long way to get the information out...
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// destructuring syntax
const { email, firstName, lastName, city, bio } = user;
// this makes 5 new variables based on the property name
// The above makes variables with the same name as the property key


// In order to name them something different use this syntax
// const { born: birthYear, died: deathYear = 'N/A' } = user;

// ADD DEFAULT VALUES ::::::

// For cases where there is not a value for the property listed the default value will be assigned to that variable.
// const { city, state, died = 'N/A' } = user2;

// In instances where there is a value assigned to the property, but you have assigned a default value, the ACTUAL value will be assigned instead of the default.

// ===================
// PARAM DESTRUCTURING
// ===================


// long way
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// destructuring syntax
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// If you do not need any of the other information from the object you can destructure the object directly within the parameters
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}


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


// movies.filter((movie) => movie.score >= 90) // Old way
// movies.filter(({ score }) => score >= 90) // destructure the score directly in the parameters

// What if you want to destructure multiple properties

// Original way to do it...
// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

//Destructured version
movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})