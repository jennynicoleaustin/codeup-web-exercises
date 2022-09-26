// AXIOS :::::::

// library for making http requests

// not native to JS so it needs to be imported.


// axios
//   .get("https://swapi.dev/api/people/1/") // basically the same as fetch, by returning a promise
//   .then((res) => {
//     console.log("RESPONSE: ", res); // returns the data with the parsed data (string from JSON and returns an object for you)
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);
