console.log("Hello form external JavaScript");
alert('Welcome to my Website!');
var userInput = prompt('What is your favorite color?');
alert(userInput + ', that\'s my favorite color too!')
// Movie Rentals
var littlemermaid = Number(prompt('How many days do you want to rent The Little Mermaid for?'));
var brotherbear = Number(prompt('How many days would you like to rent Brother Bear for?'));
var hercules = Number(prompt('How many days would you like to rent Hercules for?'));
var priceperday = 3
var totalprice = (littlemermaid + brotherbear + hercules) * priceperday
alert('Your total is $' + totalprice + '.')
// Weekly Pay
var googlehrs = Number(prompt('How many hours did you work at Google this week?'));
var amazonhrs = Number(prompt('How many hours did you work at Amazon this week?'));
var fbhrs = Number(prompt('How many hours did you work at Amazon this week?'));
var googlepay = 400, amazonpay = 380, fbpay = 350;
var weeklypay = (googlehrs * googlepay) + (amazonhrs * amazonpay) + (fbhrs * fbpay);
alert('Your total weekly pay is $' + weeklypay + '!')
// Class enrollment
var conflict = confirm('Confirm you schedule does not conflict with CHM101.');
if (conflict == true){
    var full = confirm('Confirm the class is not full.');

    if (full == true)
    {
        alert('You have successfully enrolled in CHM101');
    }
    else
    {
        alert('Sorry, you are ineligible to enroll in CHM101.');
    }
}
else
{
 alert('Sorry, you are ineligible to enroll in CHM101.');
}
// Product Offer
// NOT COMPLETE
var expire = confirm('Is the offer expired?');
    if (expire == true)
    {
        alert('We are unable to add the product offer.');
    } else {
        var howmany = Number(prompt('How many items are you purchasing today?'));
        if (howmany < 2){
            var premium = confirm('Are you a premium member?');
        }
    }
