"use strict"
//
// // SYNTAX
// // for (initialExpression; condition(boolean value - expression continues as long as value is true); incrementExpression) {
// //      code you want to execute;
// //      }
// for (let i = 1; i<=10; i++) { // initialexpression: let i be equal to 1, condition: as long as i is less than or equal to 10, keep doing the incrementexpression, incrementexpression: set the new value of i to i+1)
//     console.log(i); // code I want to execute based on the forLoop
//     console.log('You can add as much code as you want') // just separate them by a semicolon
// }
//
// //Practice Exercise
// // Print out "Da ba dee da ba daa" 6 times, using a for loop
//
// for (let song = 1; song<= 6; song++) {
//     console.log('Da ba dee da ba daa');
// }

// // Print out even numbers only
//
// for (let i = 0; i<=20; i+=2) {
//     console.log(i)
// }

// // Count down from 100 by 10s

// for (let i = 100; i>=0; i-=10) {
//     console.log(i)
// }

// Infinite Loops and how to avoid them
// back sure the condition will eventually reach a value that will return false

// ===================================
// ITERATING OVER ARRAYS!
// ===================================

// If you want to do something to each item within an array you can use a for loop
// in these cases the number (i) refers to an index within the array....

const animals = [
    "Aardvark",
    "Aardwolf",
    "African Elephant",
    "African Tree Pangolin",
    "Alligator",
    "Alpaca",
    "Anteater",
    "Antelope",
    "Ape(s)",
    "Arabian Horse",
    "Armadillo",
    "Arthropod(s)",
    "Asian Elephant",
    "Aye-Aye",
    "Baboon",
    "Badger",
    "Bandicoot",
    "Bangle Tiger",
    "Bat(s)",
    "Bearded Dragon",
    "Beaver",
    "Beluga Whale",
    "Bengal Tiger",
    "Big-Horned Sheep",
    "Billy Goat",
    "Bird(s)",
    "Bison",
    "Black Bear",
    "Black Footed Rhino",
    "Black Howler Monkey",
    "Black Rhino",
    "Blacktip Reef Shark",
    "Blue Shark",
    "Blue Whale",
    "Boar",
    "Bob-Cat",
    "Bonobo",
    "Bottlenose Dolphin",
    "Bottlenose Whale",
    "Brown Bear",
    "Buffalo",
    "Bull",
    "Bull frog",
    "Caiman Lizard",
    "Camel",
    "Capuchin Monkey",
    "Capybara",
    "Caribou",
    "Cat(s)",
    "Cattle",
    "Cheetah",
    "Chimpanzee",
    "Chinchilla",
    "Chipmunk",
    "Common Dolphin",
    "Common Seal",
    "Coral(s) and Anemone(s)",
    "Cougar",
    "Cow(s)",
    "Coyote",
    "Crocodile",
    "Crustacean(s)",
    "Dart Frog",
    "Deer",
    "Degus",
    "Dik-Dik",
    "Dingo",
    "Dog(s)",
    "Dogfish Shark",
    "Dolphin",
    "Donkey",
    "Door Mouse",
    "Dormouse",
    "Draft Horse",
    "Duckbill Platypus",
    "Dugong",
    "Dusky Shark",
    "Elephant",
    "Elephant Seal",
    "Elk",
    "Ermine",
    "Eurasian Lynx",
    "Ferret",
    "Fish(es)",
    "Florida Panther",
    "Flying Fox",
    "Fox",
    "Fresh Water Crocodile",
    "Frog",
    "Fur Seal",
    "Galapagos Land Iguana",
    "Galapagos Shark",
    "Galapagos Tortoise",
    "Gazelle",
    "Gecko",
    "Giant Anteater",
    "Giant Panda",
    "Gibbon",
    "Giraffe",
    "Goat",
    "Gopher",
    "Gorilla",
    "Gray Fox",
    "Gray Nurse Shark",
    "Gray Reef Shark",
    "Gray Whale",
    "Great White Shark",
    "Green Poison Dart Frog",
    "Green Sea Turtle",
    "Grizzly Bear",
    "Groundhog",
    "Guinea Pig",
    "Hairy-Nosed Wombat",
    "Hammerhead Shark",
    "Harbor Porpoise",
    "Harbor Seal",
    "Hare",
    "Harp Seal",
    "Hawaiian Monk Seal",
    "Hedgehog",
    "Hippopotamus",
    "Horn Shark",
    "Horse(s)",
    "Howler Monkey",
    "Humpback Whale",
    "Hyena",
    "Hyrax",
    "Iguana",
    "Iguanodon",
    "Impala",
    "Insect(s)",
    "Irrawaddy Dolphin",
    "Jackal",
    "Jackrabbit",
    "Jaguar",
    "Jellyfish",
    "Kangaroo",
    "Kermode Bear",
    "Killer Whale",
    "Koala",
    "Komodo Dragon",
    "Kookaburra",
    "Lama",
    "Lamb",
    "Lancelet",
    "Least Weasel",
    "Leatherback Sea Turtle",
    "Lemming",
    "Lemon Shark",
    "Lemur",
    "Leopard",
    "Leopard Gecko",
    "Leopard Seal",
    "Leopard Shark",
    "Lion",
    "Llama",
    "Loggerhead Turtles",
    "Lynx",
    "Mako Shark",
    "Manatee",
    "Manta Ray",
    "Mantis",
    "Marbled Salamander",
    "Marmot",
    "Marsupial(s)",
    "Meerkat",
    "Megamouth Shark",
    "Melon-Headed Whale",
    "Miniature Donkey",
    "Mink",
    "Minke Whale",
    "Mole",
    "Mole Salamander",
    "Mollusk(s)",
    "Mongoose",
    "Monitor Lizard",
    "Monk Seal",
    "Monkey",
    "Moose",
    "Mountain Lion",
    "Mouse",
    "Mule",
    "Muskox",
    "Muskrat",
    "Naked Mole Rat",
    "Narwhal",
    "Nautilus",
    "Newt",
    "Northern Right Whale",
    "Nurse Shark",
    "Nutria",
    "Nyala",
    "Ocelot",
    "Octopus",
    "Okapi",
    "Opossum",
    "Orangutan",
    "Orca",
    "Otter",
    "Ox",
    "Panda",
    "Panther",
    "Pig",
    "Pilot Whale",
    "Pine Marten",
    "Platypus",
    "Polar Bear",
    "Porcupine",
    "Porpoise",
    "Possum",
    "Potbellied Pig",
    "Potto",
    "Prairie Dog",
    "Proboscis Monkey",
    "Przewalski's Wild horse",
    "Puma",
    "Pygmy Hippopotamus",
    "Pygmy Right Whale",
    "Pygmy Sperm Whale",
    "Quokkas",
    "Quolls",
    "Rabbit",
    "Raccoon",
    "Rat",
    "Ray",
    "Red Fox",
    "Red Kangaroo",
    "Red Panda",
    "Red-Eyed Tree Frog",
    "Reef Shark",
    "Reindeer",
    "Rhino",
    "Rhinoceros",
    "Right Whale",
    "Ringed Seal",
    "Risso's Dolphin",
    "River Dolphin",
    "Salamander",
    "Sandbar Shark",
    "Scalloped Hammerhead Shark",
    "Sea Lion",
    "Sea Turtles",
    "Seal",
    "Sei Whale",
    "Shark",
    "Sheep",
    "Shortfin Mako Shark",
    "Siberian Tiger",
    "Silky Shark",
    "Skink",
    "Skunk",
    "Slender Loris",
    "Sloth",
    "Sloth Bear",
    "Snake(s)",
    "Snow Fox",
    "Snow Hare",
    "Snow Leopard",
    "Snow Monkey",
    "Somali Wild Ass",
    "Spectacled Bear",
    "Sperm Whale",
    "Spider Monkey",
    "Spiny Dogfish Shark",
    "Spotted Dolphin",
    "Squirrel",
    "Star-Nosed Mole",
    "Stellar Sea Lion",
    "Striped Dolphin",
    "Sun Bear",
    "Takin",
    "Tamarin",
    "Tapir",
    "Tasmanian Devil",
    "Tasmanian Tiger",
    "Terrapin",
    "Thresher Shark",
    "Tiger",
    "Tiger Salamander",
    "Tiger Shark",
    "Topi",
    "Tortoise",
    "Tree Frog",
    "Turtle",
    "Uakari",
    "Vampire Bat",
    "Vancouver Island Marmot",
    "Vervet Monkey",
    "Vicuna",
    "Vole",
    "Wallaby",
    "Walrus",
    "Warthog",
    "Water Buffalo",
    "Weasel",
    "Whale Shark",
    "Whale(s)",
    "White Rhino",
    "White Tailed Deer",
    "White-Beaked Dolphin",
    "Whitetip Reef Shark",
    "Wildcat",
    "Wildebeest",
    "Wobbegong Shark",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodchuck",
    "Yak",
    "Yellow-Bellied Marmot",
    "Zebra",
    "Zebu",
    "Zorilla"
]
// from beginning of the array
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]) // must include the [i] to tell it what to print.
}
// Iterate over an array from the last index to first
// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i])
// }

//Exercise

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

// for (let i=0; i < people.length; i++) {
//     console.log(people[i].toUpperCase())
// }
//
// ===================================
// NESTED FOR LOOP EXAMPLES
// ===================================
//
// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`     j is: ${j}`)
//     }
// }
//The outer (first) for loop runs 1x and then the inner for look will run completely for that first for loop value, after the inner is done the outer runs the second time and so on and so forth

// ===================================
// NESTED ARRAY ITERATION
// ===================================


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
// Goal here is to get it to print out the entire seating chart

// this only prints out each row it doesnt include the row details
for (let i = 0; i < seatingChart.length; i++) {
    console.log(seatingChart[i])
}
// so you need a nested for loop
for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}










// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i]; // assigning the first iteration a variable that represents where it is can be helpful
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }