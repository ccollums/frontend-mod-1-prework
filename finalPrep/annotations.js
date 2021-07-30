// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//create a function to build a bear with parameters name, age, fur, clothes, SpecialPower
function buildABear(name, age, fur, clothes, specialPower) {
// create variable for greeting including name parameter
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//create variable for the demographics of the bear (name and age parameters)
  var demographics = [name, age];
// create variable for powerSaying including specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//create an object for the bear
  var builtBear = {
//add basicInfo key to object assigned to demograhics variable
    basicInfo: demographics,
//add clothes key to object assigned to clothes parameter
    clothes: clothes,
// add exterior key to object assigned to fur parameter
    exterior: fur,
//add cost key to object assigned to value of 49.99
    cost: 49.99,
//add sayings key to object assigned to an array with greeting variable, powerSaying variable and string 'Goodnight my friend!'
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// add isCuddly key assigned to a boolean of true
    isCuddly: true,
  };
  // print to console
  return builtBear
}
//enter values to buildABear function to return bear results
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//enter values to buildABear function to return results for a second bear
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//create a function called fissBuzz with parameters num1, num2, and range
function fizzBuzz(num1, num2, range) {
//create loop that uses range parameter for amoount of loops the function will commit
  for (var i = 0; i <= range; i++) {
//create if statement for when num1 is 0 and num2 is 0 the result will return "fizzbuzz"
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// or else if just num1 is 0 then log 'fizz'
    } else if (i % num1 === 0) {
      console.log('fizz');
// or else if just num2 is 0 log 'buzz'
    } else if (i % num2 === 0) {
      console.log('buzz');
//anything else will result in the loop
    } else {
      console.log(i);
    }
  }
}
//log the numbers 3,5,100 in fizzbuzz function
fizzBuzz(3, 5, 100);
//log the numbers 5,8, 400 in fizzbuzz function 
fizzbuzz(5, 8, 400);
