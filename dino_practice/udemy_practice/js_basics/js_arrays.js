"use strict";
//
// // Arrays are a collection of data
//
// // array Syntax variableName = ['array string item', 1,
//
// // .length can tell you the number of entries in an array
// // is JS the array can be heterogeneous.
//
// // Getting data out of an array
//
// // example
//
// let days = ['sunday', 'monday', 'tuesday', 'wednesday'];
// //to find length of array
// console.log(days.length);
// //to find what value is at a particular index
// console.log(days[1]);
// // if you try to get the value for an index position that does not exist in that particular array you will get a value of 'undefined'
// console.log(days[4]);
//
// //modify arrays. You can modify an array via indexOf (unlike strings, which do not update)
//
// days[0] = 'Sunday'
// console.log(days[0])
//
// // If you update an array with an indexOf that is higher than the number of indexes present it will add empty array items in between the last original array item and the new array item.
//
// days[7] = 'Saturday'
// console.log(days)
// //indexOf an empty array item will return undefined.
//
// // Built in functions (methods) for arrays exist (.length, .indexOf) just like for strings.
//
// // PUSH & POP ---alter the END of an array!
//
// // PUSH - preserves the original order of the area.
// // methods require () after the keyword and inside the () you include what you want to add to the array
//
// // ex
// days.push('caturday')
// console.log(days)
//
// // POP - returns and removes the last item in the array.
//
// days.pop() // pop does not require an argument since it just takes away the last item in the array.
// console.log(days)
//
// // SHIFT & UNSHIFT
//
// // SHIFT -- removes from the beginning of an array (shifts the start of the array)
//
// days.shift()
// console.log(days)
//
// // UNSHIFT -- adds to the beginning of the array.
//
// days.unshift('sunday');
// console.log(days)
//
// // More methods worth noting....
//
// let cats = ['Lola']
// let dogs = ['Penny', 'Bam Bam']
//
// let catDog = cats.concat(dogs); //concat does not alter the original arrays but rather creates a new array with all the values from both arrays combined.
// console.log(catDog) // whichever array you specify first will have their items first in the array.
//
// // INCLUDES -- returns a boolean value indicated whether the array includes the specified value.
//
// // ex
// console.log(cats.includes('Thumbs'));
//
// // indexOf -- useful to find if the array includes a particular string
//
// console.log(catDog.indexOf('Thumbs'));
// // value returned of -1 = the item is not present
//
// // Reverse = a destructive method. It alters the original array by reversing it
//
// console.log(catDog.reverse());
//
// // SLICE
// // syntax array.slice(start, end); -- if you leave start and end blank it will give you a new array with all array items
// // if you specify only a start it will return a new array with the first item to the end of the items.
// // does not change the original array, rather creates a new array
// // using negative numbers
//
// // ex
// let shortCatDog = catDog.slice(1,2); // exclusive 2, meaning not including two.
// console.log(shortCatDog)
//
// // SPLICE -- remove and replace and array item based on the index
// // syntax array.splice(start, how many things are we deleting, what we are inserting)
// // is destructive! alters the original array
//
// // ex
// let plants = ['snake plant', 'monstera', 'arrowhead', 'pothos', 'rose', 'ivy']
//
// plants.splice(4, 2, 'philo')
//
// console.log(plants);
//
// // Comparison operators and arrays...
// // js does not compare the contents of two arrays to see if they match, they are comparing the references in memory.
// // each new array, regardless if contents are identical is not stored in the js memory the same way, it is stored as its own specific reference point in the memory.
//
// // Arrays and CONST
// // a CONST can be used to store an array AND the array can still be altered - this works because the intital const is still defined as a shell of an array.
//
// const nums = [1,2,3]
// nums.push(4);
// console.log(nums)
//
// // Multidimensional arrays -- you can have an array or arrays
// //ex
//  const board = [
//      ['x', 'o', x]
//      ['o', null, 'x']
//      ['x', 'o', 'x']
//  ];
//
// // how do you access the null element?
// board[1][1] // chain indexOf

// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];