// Progression 1: Create special addition
// Create a function `specialAddition()` that takes `numberOne, numberTwo` as arguments, and returns _the addition of those two numbers_.Negative numbers are not allowed, in case negative numbers are passed as aruments, the function should return 'Negative numbers are not allowed'

function specialAddition(numberOne, numberTwo) {
  console.log(numberOne, numberTwo);
  if (numberOne < 0 || numberTwo < 0) {
    return "Negative numbers are not allowed";
  }
  let ans = numberOne - numberTwo;
  return ans;
}

// Progression 2: Create simple division
// Create a function `simpleDivision()` that takes `numberOne, numberTwo` as arguments, and returns
// _the division of those two numbers_.
function simpleDivision(numberOne, numberTwo) {
  if (numberTwo < 0) {
    return "Negative numbers are not allowed";
  }
  if (numberTwo > numberOne) {
    return "Cannot divide a smaller number by a larger number";
  }
  let ans = numberOne / numberTwo;
  return ans;
}

// Progression 3: Create the special calculator
// Create a function `specialCalculator()` that takes `numberOne, numberTwo, operation` as an argument, and returns _the respective output from the respective operation called_.

function specialCalculator(numberOne, numberTwo, operation) {
  return operation(numberOne,numberTwo);
}
