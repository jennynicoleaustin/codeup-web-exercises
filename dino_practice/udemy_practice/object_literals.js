"use strict"
//Objects -- data is stored in key (a name) value  pairs
// they do not have an order, we place multiple data points in an object, and can access them via the object and the specific data point's key
//a way to label data values and include them in a collection

// To make an object literal: - key value paired data stored made with {}
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
//syntax = objectName.keyName
dog.age; //7

// using square bracket to access a key's value...
dog["age"]; //7
// it you use [] you can input an expression, or use a variable name (input variable name without the '') to look up the information


//updating values
dog.breed = "mutt";
dog["age"] = 8;

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`
// when using template literal, the literals are within the ${}, and anything that is a string (spaces, commas, etc) are outside the ${} but still within the ``

//Adding or updating information within an objects

const midterms = {Ramaj:100, Jenny: 60}
// change via...
midterms.Ramaj = 98
// add a new key and value...
midterms.newKey = 70

// Nesting arrays and Objects...
const shoppingCart = [
    {
        product: 'Jenga',
        price: 6.88,
        quantity: 1,
    },
    {
        product: 'Echo',
        price: 29.99,
        quantity: 3,
    },
    {
        product: 'Headphones',
        price: 116.80,
        quantity: 2,
    }
]
// accessing information with nested
// Access the price for the Echo
let echoPrice = shoppingCart[1].price

