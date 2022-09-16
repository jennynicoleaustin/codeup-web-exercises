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
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;