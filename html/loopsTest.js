"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
function isNegative(num) {
    if (num < 0) {
        return true
    } else {
        return false
    }
}

//2. Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
function isTen(num) {
    if (num === 10) {
        return true
    } else {
        return false
    }
}

//3. Write a function named double that accepts a number and returns the number doubled.
function double(num) {
    return num * 2
}

//4. Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.

function remove9s(arr) {
    var no9s = arr.filter(function(n) {
        return n!== 9;
    })
    return no9s;
}


//5. Write a function named average that accepts an array of numbers and returns the average of those numbers.
function average (arr) {
    const sum = arr.reduce((currentSum, currentNum) => {
        return currentSum + currentNum;
    }, 0 )
    const average = sum / arr.length;
    return average
}


// 6. Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
function countOdds (arr) {
    const oddArr = arr.filter((n) => n % 2 === 1)
    return oddArr.length
}

//7. Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property. The function should return the average of every object's sales property.
function averageSales (arr) { const sum =
    arr.reduce((total, person)=> {
        return total + person.sales;
    }, 0);
    const divider = arr.length
    return sum / divider
}


//8. Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character, and returns an object with properties firstName and lastName.
function convertNameToObject (firstLast) {
    const spaceIndex = firstLast.indexOf(' ')
    const fName = firstLast.slice(0,(spaceIndex))
    const lName = firstLast.slice((spaceIndex+1), (firstLast.length + 1))
    const object = {firstName:fName, lastName:lName}
    return object
}


//9. Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
function countVowels (string) {
    const lettersArr = [...string]
    const onlyVowels =  lettersArr.filter(function(n) {
        return n === 'a' || n ===  'e' || n === 'i' || n === 'o' || n ===  'u';
    })
    console.log(onlyVowels.length)
    return onlyVowels.length
}



//10. Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
//
// word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word

function analyzeWord (string) {
    const numL = string.length
    const w = string
    const numV = countVowels(w)
    const object = {word:`${w}`, numberOfLetters:`${numL}`, numberOfVowels:`${numV}`}
    console.log(object)
    return object

}


//11. Write a function named capitalizeName that accepts a string that is a first and last name separated by a space, and returns a string that that has the first and last names capitalized.
//
// For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.


function capitalizeName (firstLast) {
    const spaceIndex = firstLast.indexOf(' ')
    const firstLetter = firstLast[0].toUpperCase()
    const restFirst = firstLast.slice(1,spaceIndex)
    const lastLetter = firstLast[(spaceIndex+1)].toUpperCase()
    const restLast = firstLast.slice((spaceIndex+2), (firstLast.length+1))
    const capitalized = `${firstLetter}${restFirst} ${lastLetter}${restLast}`
    console.log(capitalized)
    return capitalized
}

capitalizeName('jennifer austin')