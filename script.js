function exampleStuff(){
  let exampleEmptyVariable = null;
let anotherEmptyVariable = undefined;

console.log(exampleEmptyVariable, anotherEmptyVariable);

let message = "hello from the script.js file!";

console.log(message);

// no keyword = declared with var
// world = "Earth"

// console.log(`Hello ${world}, I am Nik!`);

// console.log("Hello " + world + ", I am Nik!");

// let world = "Mars";

// console.log(`Hello ${world}, I am Nik!`);

// {

//   //let world = "Mars";

//   console.log(`Hello ${world}, I am Nik!`);

// }







// List in Python is Array in JS

let favouriteFruits = [
  "mango",
  "banana",
  "grapes",
  "passionfruit",
  "pear",
  "strawberry",
  "watermelon",
  "lychee",
  "cherry",
  "blueberry",
  "tomato",
  "papaya",
  "dragon fruit",
  "kiwi"
];

console.log(favouriteFruits[12]);

console.log("The class' favourite fruits are: " + favouriteFruits);


// favouriteFruits.forEach(fruit => {
//   console.log("Someone in the class loves " + fruit);
// });

for (fruitIndex in favouriteFruits) {
  console.log("Someone in the class loves " + favouriteFruits[fruitIndex]);
}


console.log(Array.isArray(favouriteFruits));


// Array.prototype.sort()
let sortedFavouriteFruits = favouriteFruits.sort();

console.log(sortedFavouriteFruits);

let someNewArray = new Array(10);

someNewArray.push("mango");

console.log(someNewArray);














// Dictionary in Python is Object in JS

let nik = {
  name: "nik",
  "codingLanguages": ["JavaScript", "HTML", "CSS"],
  hobbies: [
    {
      "name": "motorcycling",
      "skill": 100,
    },
    {
      "name": "coding",
      "favouriteCodes": ["Javascript", "python"],
      "skill": 80,
    }
  ],
};

nik.hobbies[1]["favouriteCodes"][0] = "coffeescript";

nik.hobbies[1].favouriteCodes[0] = "typescript";

console.log(nik);

/**
 * Status of weather manually Set
 */


let weather = "rainy";

switch (weather) {
  case "sunny":
    console.log("sunny weather is nice when it's not hot!");
    break;
  case "rainy":
    console.log("Rain is nice when it's not torrential!");
    break;
  case "hail":
    console.log("Man, that hail is wild");
    // break;
  case "storm":
  case "snowy":
  default:
    console.log("Crazy weather, am i right?");
    break;
}

if (weather == "sunny") {
  console.log("sunny weather is nice when it's not hot!");
} else if (weather == "rainy") {
  console.log("Rain is nice when it's not torrential!");
} else {
  console.log("Crazy weather, am i right?");
}
}


let pokemonTeam = [
  "pikachu",
  "squirtle",
  "charmander",
  "mew",
];

function logTheTeam () {
  sortedTeam = pokemonTeam.sort();

  let [firstPokemon, ...otherPokemon] = sortedTeam;

  console.log(firstPokemon);
  console.log(otherPokemon);
   
  do {
    console.log(sortedTeam.pop());
  } while (sortedTeam.length);

  sortedTeam.push("blastoise");

  for (let index = 0; index < sortedTeam.length; index++) {
    console.log("Pokemon at index " + index + " is " + sortedTeam[index]);
  }
}

// logTheTeam();

const logTheTeamAlternate = (targetSize = 4) => {
	// double equals is checking for value
	// type coercion happens where possible automatically
	if (pokemonTeam.length == targetSize){
		console.log("There are + " + targetSize + " pokemon in the team");
	}

	// triple equals is checking for value AND data type
	if (pokemonTeam.length === targetSize){
		console.log("There are " +  targetSize  + " Pokemon in the team, this is from the strict equals comparison");
	}
}
logTheTeamAlternate();
logTheTeamAlternate(2);

var smellStrength;

function someSmellyFunction(){
	smellStrength = 1;

	let smellTotalStrength = (baseStrength, multiplier) => {
		return baseStrength * multiplier;
	}

	return smellTotalStrength(smellStrength, 10);
	// equivalent to:
	// return 100;
}

console.log(smellStrength);
console.log(someSmellyFunction());
console.log(smellStrength);




