// :::: setTimeout :::::

//built-in functions, the purpose is to schedule a function, or set when you want a function to run or to quit


console.log("HELLO!!!...")

// setTimeout expects a 1. callback function 2. a delay in milliseconds
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

// code after the setTimeout will run instantly - it will not wait until the delay is complete
console.log("GOODBYE!!")

// in order to stop the setInterval timer we must be able to grab the id of setInterval, so we save the setInterval function to a variable.
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

//stops the setInterval timer
// the id is specified inside the ()
// clearInterval(id);