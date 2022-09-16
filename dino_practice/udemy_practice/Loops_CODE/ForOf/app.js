// // ::::FOR OF LOOPS:::: ( not supported in internet explorer) **cannot be used to iterate over objects
// // used as an easy way to iterate over arrays or other iterable objects
//
// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];
//
// //Using a traditional for loop the syntax to iterate over the array subreddits would look like this...
// // for (let i = 0; i < subreddits.length; i++) {
// //     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// // }
//
// //allows you to avoid the i ad denoted the i range etc.
// // For Of syntax ... you are creating a variable that represents the individual items in the array
// // for (let variableName of theObjectYouWantToIterateOver) {
// //      code you want to execute
// //}
//
// // :::::FOR OF Loop to iterate over the array subreddits
// for (let subreddit of subreddits) {
//     console.log(`Visit reddit.com/r/${subreddit}`)
// }



// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
//
// //The following two blocks of code execute the same result but the latter for of loop allows you to indicate a variable that relates to the actual value inside that specific item, not just the index of that item.
//
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }
//
// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// ::: OTHER ITERABLE OBJECTS
// other objects, like strings can be iterated over with a for of look too like...
let thisString = "You're the coolest ever"

for (let char of thisString) {
    console.log(char)
}



