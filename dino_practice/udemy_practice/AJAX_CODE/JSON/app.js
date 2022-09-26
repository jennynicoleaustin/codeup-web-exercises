//:::: JSON ::::

//java script object notation
    // keys must be double quoted
// json.org for help

// data comes back from json as a string.
// so we need to turn the string into an object

//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// THIS IS A JS OBJECT

// Turn the data from Json into an object
const parsedData = JSON.parse(data);

// Turn an object into a string to send to JSON

JSON.stringify(objectName)
// all object values that are undefined are replaced with 'null'