do {
    var oddNumber = prompt('Enter an odd number between 1 and 50');
    for(var i = 1; i<= 50; i++){
        if(i % 2 !== 0 && i === Number(number)){
            prompt('That is not an odd number,again');
        }
    }
}