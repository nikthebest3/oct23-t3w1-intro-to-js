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















