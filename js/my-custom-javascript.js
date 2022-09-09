"use strict";
$(function () {

})
// Introduction Exercise
// $(function() {
//     alert( 'The DOM has finished loading!');
// });

//Selectors Exercise

//id Selectors
//#3
// let contents = $('#lorem').html();
// alert(contents);

//#4
// let contentsFour = $('#goodlist').html();
// alert(contentsFour);

//#5
// let contentsFive = $('#goodlist').html();
// alert(contentsFive);
//How does it change the selection, it does not work, each id should be unique

//Class Selectors

//#3
// $('.codeup').css('border', '1px solid red');

//Element Selectors

//#2
// $('li').css('font-size', '20px');

//#3
// $('h1, p, li').css('background-color', 'yellow');

//#4
// let contentsH = $('h1').html();
//     alert(contentsH);

//JQuery Events

//Mouse Events

//#2

$('h1').click(function () {
    $('h1').css('background-color', 'pink');
});

//#3
$('p').dblclick(function () {
    $('p').css('font-size', '18px')
});

//#4
// let hoverOut = function() {
//     $('li').css('text-color', 'black')
// };
//
// let hoverIn = function() {
//     $('li').css('text-color', 'red')
// };
//
// $('li').hover(hoverIn(),hoverOut());
$('#goodlist').hover(
    function() {
        $(this).css('color', 'red');
    },
    function () {
        $(this).css('color', 'black');
    }
);







