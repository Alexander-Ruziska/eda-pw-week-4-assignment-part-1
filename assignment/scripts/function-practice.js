console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return `Hello, ${name}!`;
}
console.log(helloName('Alexander Ruziska'));

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  console.log('Numbers are...', firstNumber,'and', secondNumber);
  return answer;
  
  // return firstNumber + secondNumber;
}
console.log( '5 + 3 =', addNumbers(5,3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
let answer = firstNumber * secondNumber * thirdNumber;
console.log('Numbers are...', firstNumber,'and', secondNumber, 'and', thirdNumber)
return answer;
}
console.log('5 * 3 * 4 =', multiplyThree(5,3,4));
console.log('9 * 7 * 3 =', multiplyThree(9,7,3));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Is 6 positive?', isPositive(6));
console.log('Is -6 positive?', isPositive(-6));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array = [8, 12, 32, 45]) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[array.length -1];
  }
}
console.log('The last item is', getLast());

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array = [7, 19, 12, 14]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } // <--Ask why this needs to be here and not below return false;.
      return false;
}
console.log('Is 6 in the array?',find(6)); // To output the number selected, 6 in this case, do i need to set variables for each number in array or is there a different way?
console.log('Is 19 in the array?',find(19));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
