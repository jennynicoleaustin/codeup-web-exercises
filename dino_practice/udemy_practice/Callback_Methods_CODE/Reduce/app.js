//:::: REDUCE :::::
// executes a reducer function on each element of the array resulting in a single value

//reducer function accepts 2 parameter
//  1 = accumulator (what you're reducing the array down to, holds the sum) -- this value is used each iteration to add to
// 2 = current value

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
//Find the total without the use of reduce
// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

// Very usful for sum, product, etc but can be used for many more ways.
const total = prices.reduce((total, price) => total + price)  // total = the accumulator, price represents each item in the array

// Find the min (or max) value in an array
const minPrice = prices.reduce((min, price) => { //for the accumulator (min) we are not accumulating but rather holds the smallest value as it cycles through the array.
    if (price < min) { // for this, we return the price if the price is not less than the new min, and we return the new min if it is less (because the min becomes that new smaller price) we return price if not so that we can continue to cycle through
        return price;
    }
    return min;
})

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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})


// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num) //20
evens.reduce((sum, num) => sum + num, 100) //120
