const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

//Fetch a new joke
const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI"); // create new elemennt of li with the new joke
  newLI.append(jokeText);
  jokes.append(newLI);
};
// Get joke from server
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
