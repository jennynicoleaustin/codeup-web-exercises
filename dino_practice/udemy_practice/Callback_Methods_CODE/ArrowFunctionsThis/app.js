//::: ARROW FUNCTIONS WITH THIS :::::::

// The value of THIS inside of an arrow function differs from the value of THIS in other places.

// this used in a traditional function, remember this refers to whatever is to the left of the ::this:: keyword.
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    // return will display 'Viggo Mortensen'

// inside of an arrow function the THIS keyword refers to the scope that the function was written in, so in this case it is the window
// the THIS inside the function setTimeout is the same this inside of shoutname
    shoutName: function () {
        setTimeout(() => { // setTimeout is a method in the window
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}