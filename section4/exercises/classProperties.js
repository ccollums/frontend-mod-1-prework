/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
}

var goldenDoodle = new Dog();
var poodle = new Dog();

console.log(goldenDoodle);
console.log(poodle);


// Prompt 2: Snack
class Snack {

}

var popcorn = new Snack();
var crackers = new Snack();

console.log(popcorn);
console.log(crackers);

// Prompt 3: Shirt
class Shirt {

}

var shortSleeve = new Shirt();
var longSleeve = new Shirt();

console.log(shortSleeve);
console.log(longSleeve);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog2 {
  constructor() {
    this.color = 'red';
    this.size = 'medium';
    this.age = 3;
  }
}

var goldenDoodle = new Dog2();
console.log(goldenDoodle);

// Prompt 2: Snack
class Snack2 {
  constructor() {
    this.brand = 'SkinnyPop';
    this.flavor = 'Kettle';
    this.price = '$5';
  }
}

var popcorn = new Snack2();
console.log(popcorn);

// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.brand = 'Ralph Lauren';
    this.color = 'blue';
    this.size = 'small';
  }
}

var shortSleeve = new Shirt2();
console.log(shortSleeve);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog3 {
  constructor(color, size, age) {
    this.color = color;
    this.size = size;
    this.age = age;
  }
}

var goldenDoodle = new Dog3('white', 'mini', 5);
var poodle = new Dog3('black', 'standard', 2);
console.log(goldenDoodle);
console.log(poodle);

// Prompt 2: Snack
class Snack3 {
  constructor(brand, flavor, price) {
    this.brand = brand;
    this.flavor = flavor;
    this.price = price;
  }
}

var popcorn = new Snack3('Smart', 'white chedder', '$4');
var crackers = new Snack3('Club', 'Original', '$2');
console.log(popcorn);
console.log(crackers);

// Prompt 3: Shirt
class Shirt3 {
  constructor(brand, color, size) {
    this.brand = brand;
    this.color = color;
    this.size = size;
  }
}

var shortSleeve = new Shirt3('Express', 'pink', 'small');
var longSleeve = new Shirt3('Madewell', 'yellow', 'medium');
console.log(shortSleeve);
console.log(longSleeve); 
