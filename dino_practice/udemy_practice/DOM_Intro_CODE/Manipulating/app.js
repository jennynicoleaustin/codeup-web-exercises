//:::: MANIPULATION OF THE DOM::::

// innerHTML - shows all the html tags included in the element -- this is what we want if we plan to change the html within an element.
// textContent - will some all the text including the hidden text (innerText would not show hidden items)
// innerText - the content between the opening and closing tag, does not include all of the html elements within the element
    //can not change html elements with this one



const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// you can also do += to keep all the original html and add additional html
//ex
document.querySelector('h1').innerHTML += '<sup>extra stuff on top</sup' // --- would add the superscript to the current html and text in the h1
// = will eliminate everything inside while += will add the new stuff into the dom

// Changing the attribute of an element

document.querySelector('#banner').src = "https://newsource" // -- updates the src attribute to what is on the right of the =

// There is another way to get attributes

const firstLink = document.querySelector('a')
firstLink.getAttribute('href') // -- gives you the html found within this attribute
// you can use this to check if an element has a particular attribute

//Wanna change something?
firstLink.setAttribute('href', 'http://newhrefinfo') // -- requires two arguments to be passed, the name of the attribute and then the new value


//Changing styles with js
// JS has an object called style -- the biggest difference with js style and css style is js style properties are camelCase and not dashed

// The style object in JS does NOT contain any styles from an external style sheet only styles that are inline
// You can use this to change the styles via inline styles in the style property (better to change the class and assign class values)

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// you can find the computer styles (aka the current styles for elements) by using
window.getComputedStyle(element);
