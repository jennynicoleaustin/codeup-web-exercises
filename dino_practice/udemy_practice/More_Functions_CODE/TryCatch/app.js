// :::::::: TRY/CATCH :::::::
// preventing errors from breaking the execution of your code

// anticipate an error, you can wrap the code in a try statement, and also a catch code.



// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!")
// }
// hello.toUpperCase();

// console.log("AFTER!")

function yell(msg) {
    try { //code you want to try goes in here
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) { // passing (e) as the argument prints out the error in the console for you.
        console.log("Please pass a string next time!") // code you want to execute if try code fails
    }
}