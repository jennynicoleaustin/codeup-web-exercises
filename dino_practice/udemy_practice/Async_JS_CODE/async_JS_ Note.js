// ::: WEB APIs and SINGLE THREADED ::::

// JS is single threaded
    // JS is running one line of code (AT MOST) at a time. -- JS is NOT a multi-tasker

// What happens in between the time it takes to retrieve data from server... while JS is waiting
    // setTimeout - running code after a set delay.
        //--- The browser is not written in JS and can do things JS cant do. So JS hands off things to the browser for it to do while JS is stuck waiting for data

// Web API functions are recognized by the call stack and handed off to the browser for execution.
    // Once the browser completes the web API function is hands the data back to JS (returns to JS) as a callback
//