// ::: SELECTING DOM ELEMENTS ::::::

// methods that help us single out elements of a certain class/id/type
// to selectively apply js
// 1. select, once selected we can then 2. modify

// if you attempt to "get" and element by id of an id that doesn't exist the console will return null

//::: What can we select by?:::

// getElementById

// When we "get" element we are asking for the DOM object with that particular ID
// saving it to a variable allows us to access it in its object form, aka do something with it.

// If you want to see the contents of an object you retrieved use console.dir(objectname)

// ::: getElementsByTagName ::::


//Example
const allImages = document.getElementsByTagName('img');
// Doing this returns HTMLcollection (looks like an array but it is not an array) can access it in a similar way to an array allImages[0] etc.
// Since it is not an array we are not able to use array methods on it.

//use this to manipulate the object values, ex. we are changing the source of all images to be ""
for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

// ::: getElementsByClassName :::::

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

//:::: QUERY SELECTOR ::::
// newer way to select elements BETTER

// all in one method to select a single element

// uses the same selector methods as css .class #id element
// able to chain on multiple selectors to get more specific.
document.querySelector('a[title="Java"]'); // the [] select by attribute -- this selects by the type and then attribute

//ex
const paragraphs = document.querySelector('p') // selects the first paragraph in the html

// querySelectorAll:::: returns a collection(array like) of all elements that match the selector
const links = document.querySelectorAll('p a'); // -- select all anchor tags within a paragraph

for (let link of links) {
    console.log(link.href)
}