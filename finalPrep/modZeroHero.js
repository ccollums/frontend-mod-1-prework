// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = 'Super Sonic';
var specialAbility = 'Lightening Speed';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = ('Hello ' + heroName);
var catchphrase = (`The ${specialAbility} hero you need!`);

// Declare two variables - power AND energy - set to integers
var power = 40;
var energy = 150;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = (power*500);
var fullEnergy = (energy+150);

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;


// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ['Laser Guy', 'Racoon Man', 'Geese'];
var sidekicks = ['Mighty Hedgehog', 'Hot Hamster', 'Flying Squirral'];

// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('Banana Peels');

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

function assessSituation(dangerLevel, saveTheDay, badExcuse)  {
  console.log(dangerLevel, saveTheDay, badExcuse);

  if(dangerLevel > 50) {
    console.log(badExcuse);
  }
  else if(dangerLevel < 10) {
    console.log('Meh. Hard pass.');
  }
  else{
    console.log(saveTheDay);
  }

}
assessSituation(3, 'The battle has been won!', 'I did not eat breakfast this morning')

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

function assessSituation(dangerLevel, announcement, excuse) {
if (dangerLevel > 50) {
  console.log(excuse);
}
else if(dangerLevel < 10) {
  console.log('Meh. Hard pass.');
}
else {
  console.log(announcement);
}
}
assessSituation(99, announcement, excuse)
assessSituation(21, announcement, excuse)
assessSituation(3, announcement, excuse)

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = [
  {
  name: 'Sully',
  smell: 'Apples',
  weight: 150,
  citiesDestroyed: ['Denver', 'Houston', 'Dallas'],
  luckyNumbers: [2,4,14]
},
{
  number: 45,
  street: 'Reynolds',
  state: 'Colorado',
  zip: '56789',
}
]

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superPower, age) {
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemesis = 'The Syntax Error';
    this.powerLevel = 100;
    this.energyLevel = 50;
  }


  sayName() {
    this.name = heroName;
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower() {
    this.powerLevel = this.powerLevel+100;
  }

}


// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

var mightyHedgehog = new SuperHero('Mighty Hedgehog', 'super strength', 5);
console.log(mightyHedgehog);
var geese = new SuperHero('Geese', 'flying solo', 10);
console.log(geese);

geese.gainPower();
console.log(geese);

// Reflection
// What parts were most difficult about this exerise?
//For me I think that classes are still the most difficult because they have the nost parts involved.
// What parts felt most comfortable to you?
//everything up until classes felt pretty comfortable, other than putting an object within another object.

// What skills do you need to continue to practice before starting Mod 1?
//I need to practice classes and objects.
