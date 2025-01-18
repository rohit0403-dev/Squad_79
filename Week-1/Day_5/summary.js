//1. A programming language is said to have First-class functions when functions in that language
//  are treated like any other variable.

/**
 * In JavaScript, a first-class function means that functions are treated as first-class citizens .
 * first-class citizens == same rights
 */


/**
 * 1 -- In JavaScript, a first-class function means that functions are treated as first-class citizens
 */
// const greet = function() {
//     console.log("Hello!");
//   };
//   greet(); // Outputs: Hello!



/**
 * 2 -- Return from other functions: Functions can be returned from other functions.
*/

// function outer() {
//     return function inner() {
//       console.log("Inner function");
//     };
//   }

//   const innerFunc = outer();
//   innerFunc(); // Outputs: Inner function



/**
 * 3 --  Be stored in data structures: Functions can be stored in arrays, objects, or other data structures.
*/
let x=1;
let y=2;
let arr=[x,y]
// const functions = [
//     function() { console.log("First function"); },
//     function() { console.log("Second function"); }
//   ];

//   functions[0](); // Outputs: First function
//   functions[1](); // Outputs: Second function



/**
 * --------------------- Higher Order Function  ------------------------------
 */


/**
 * 
In JavaScript, a higher-order function is a function that either:
1 . Takes one or more functions as arguments, or

2 . Returns a function as its result.
 */

// 1 . Takes one or more functions as arguments, or

// Higher-order function that takes two functions
// function applyOperations(number, operation1, operation2) {
//     let result = operation1(number);
//     result = operation2(result);
//     return result;
//   }

//   // Functions to be passed as arguments
//   function addFive(num) {
//     return num + 5;
//   }

//   function multiplyByTwo(num) {
//     return num * 2;
//   }

//   // Pass both functions as arguments
//   let result = applyOperations(10, addFive, multiplyByTwo);
//   console.log(result); // Output: 30 (10 + 5 = 15, 15 * 2 = 30)



// 2. A function that returns another function:

// function multiply(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const multiplyBy2 = multiply(2);
// console.log(multiplyBy2(5)); // Output: 10


/**
 * Map
 * filter
 * reduce
 * forEach
 */


/**
 * 1 . Map 
 */
// In JavaScript, the map() method allows you to transform each element 
// of an array based on a provided function.

// let arr = [1, 2, 3, 4];
// item  (the first parameter): This is the value of the current element being processed in the array.
// i     (the second parameter): This is the index of the current element in the 
// array (i.e., its position in the array).

// let ans = arr.map((item ,i) => item + i);
// console.log(ans)

/**
 * 2. For Each
 */

// In JavaScript, forEach() is an array method that allows you to iterate over each element of
//  an array and execute a provided function for each element.  

// const fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach(function (fruit, i) {

//     console.log(fruit);
// });


/**
 * 3 filter
 */
// Usage: Useful when you need to filter elements from an array based on certain criteria.
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]


/**
 * 4 Reduce
 */
// Purpose: Executes a reducer function on each element of the array, resulting in a single output value.
// Usage: Used for scenarios where you need to accumulate a result based on the array's 
// elements, like summing numbers or concatenating strings.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15


// 5. some()
// Purpose: Checks if at least one element in the array passes the test implemented by the provided function.
// Usage: Useful for checking if any element meets a condition.
// const numbers = [1, 2, 3, 4, 5];
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven); // Output: true


// 6. every()
// Purpose: Tests whether all elements in the array pass the test implemented by the provided function.
// Usage: Useful for verifying that all elements satisfy a condition.

// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); // Output: true