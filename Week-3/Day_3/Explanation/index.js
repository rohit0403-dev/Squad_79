function makeCounter() {
    let count = 0;
    return function() {
      return count++; // count is remembered even after makeCounter() finishes
    };
  }
  
  let counter = makeCounter();
  console.log(counter()); // 0
  console.log(counter()); // 1
  console.log(counter()); // 2



/**
 *What is a closure?
 A closure is a function that "remembers" the environment in which it was created,
 even after the function has been executed outside of that environment. This means 
 that a function can access variables from its outer (lexical) scope, even if it's
 called from a different context.

 */

function outerFunction() {
  let outerVariable = 'I am from the outer scope!';
  
  // innerFunction is a closure
  function innerFunction() {
    console.log(outerVariable);  // innerFunction can access outerVariable
  }
  
  return innerFunction;
}

const myClosure = outerFunction();  // outerFunction is executed
myClosure();  // innerFunction is executed, and it still has access to outerVariable
// Explanation:
// outerFunction is called, and inside it, there’s a function innerFunction that tries to access the variable 
// outerVariable from the outer scope.

// outerFunction returns innerFunction, but even after outerFunction has finished executing, innerFunction
//  still has access to outerVariable because of the closure.

// When we execute myClosure(), which is the innerFunction returned by outerFunction, it still has access 
// to outerVariable, even though outerFunction has already finished running.

// Key points:
// innerFunction is a closure because it "remembers" the environment (the variable outerVariable) where it was
//  created.

// Even though myClosure() is called after outerFunction() has finished, it can still
//  access variables from the scope in which it was created.