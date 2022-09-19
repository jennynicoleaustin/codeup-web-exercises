// :::: HOW FUNCTIONS AND METHODS INTERSECT :::::

// A METHOD is a function that has been defined as a property of an object. Methods are usually those that are accessed using .theMethodGoesHere
//Every method is a function, but not every function is a value.
// BUT we can define an object property as a function -- basically you are storing the function as a value for your property


// Creating an object that has a method as a property.

// This example is shorthand compared to the way he types it in the video, however it still works the same way...
const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
// What it looked like on the video and might make sense.... the above code is js accepted shorthard since this is such a common this to do.
// square: function (num) {
//              return num * num

// ::: METHODS EXERCISE :::::
//Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter
//
// area should accept the length of a side (all sides are the same in a square) and then return the side squared.
// perimeter should accept the length of a side and return that side multiplied by 4.
//
// square.area(10) //100
// square.perimeter(10) //40

const square = {
    area(side) {
        return side * side
    },
    perimeter(side) {
        return side * 4
    }
}

// :::: THIS (essentials of this)::::::

// Usually used inside of an object in a method...

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() { //method meow
        console.log("THIS IS:", this) // this refers to THIS object, it allows us to have acces to the data in the object
        console.log(`${this.name} says MEOWWWW`);
        console.log(this.breed)
    }
}
// The value of this will depend on the way in which we call it (invoke it)

// In this example the "this" refers to the window object since this refers to the object that is to the left of it. (so window.meow2) since all functions are added to the window object
const meow2 = cat.meow;

// Exercise
//Egg Laying Exercise
// Define an object called hen.  It should have three properties:
// name should be set to 'Helen'
// eggCount should be set to 0
// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.
//
// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount = (this.eggCount += 1)
        return 'EGG'
    }
}