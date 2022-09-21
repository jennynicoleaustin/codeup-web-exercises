//:::: SPREAD ::::::

// spread out (expand) iterables...


const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// ::::::: SPREAD IN FUNCTIONS ::::::::
// Math.max - expects multiple arguments and finds the maximum value within the array (Math.min works the same way)

Math.max(nums) //Returns NaN --- Why? nums is a SINGLE array of numbers (one parameter, not multiple)

// Spread syntax = ...iterableArrayOrObject
// it takes the array and separates each element into separate arguments.
// ...nums = 13 4 5 21 3 3 1 2 7 6 4 2 53456 -- no array brackets.
Math.max(...nums) //Returns 53456

// you can spread a string -- ex
const hello = 'hello'
console.log(...hello)
// or how about spreading that string into a new array of letters
const helloArray = [...hello]


// ::::::: SPREAD IN ARRAYS :::::::::
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

// Makes a new array with all elements from both original arrays
// take 2 (or more) arrays, and spread it into a new array
const allPets = [...cats, ...dogs];


// :::::: SPREAD IN OBJECTS ::::::

// Copies properties from one object into another object literal
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

// In order to add more properties to an object... creates a new object with the original data and the new information
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

// If you try to spread an array into an object the indecices will be the key and the value = the element.