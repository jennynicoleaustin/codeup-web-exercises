// ASYNC FUNCTIONS ::::::
// -- new way to do JS promises

// the async keyword declares a function as an asynchronous function
    // async will always AUTOMATICALLY return a promise
    // if the function throws an exception the promise is rejected 

// async function hello() {
// }



const sing = async () => {
    throw "OH NO, PROBLEM!"
    return 'LA LA LA LA'
}

sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH:", data)
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!")
        console.log(err)
    })




const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('todd', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })


// AWAIT KEYWORD ::::::::

//



const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

//await says "wait until the promise is resolved"
async function rainbow() {
    await delayedColorChange('red', 1000) // adding the await keyword says "wait for this code to finish before running the next line.
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

// rainbow().then(() => console.log("END OF RAINBOW!"))
//Rewrite the above code to simplify the code more.

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!")
}

printRainbow();


//
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


async function makeTwoRequests() {
    try { // This is what we want to attempt
        let data1 = await fakeRequest('/page1'); // you can await the value of the promise and save it in a variable for you to use later.
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) { // this is where we catch the error.
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e) // When we have a parameter for our error we can collect the data to see the error
    }

}


//What happens when a promise we are awaiting is rejected
//-- when a promise is rejected then the code below is not executed.

// we use try and catch to