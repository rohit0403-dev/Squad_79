// What is recursion ?

/**
 * Defination
 */
// Recursion in JavaScript (or any programming language) is a technique where a function calls itself to solve smaller instances
//  of the same problem.

/**
 * Point To Be Remember
 */

// 1 . Base Case: This is the condition that stops the recursion to prevent it from going into an infinite loop.
// 2 . Recursive Case: This is where the function calls itself with a smaller or simpler input to work towards the base case.

/**
 * Question 1 . Find Factorial ;
 */
// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1; // Base case
//     } else {
//       return n * factorial(n - 1); // Recursive case
//     }
//   }

//   console.log(factorial(5));

/**
 * 2 . Print Array
 */
// let arr = [1, 2, 3, 4, 5, 7];
// function printArray(arr, N) {
//   if (N > arr.length - 1) {
//     return;
//   }
//   console.log(arr[N]);
//   printArray(arr, N + 1); // Corrected the order of arguments
// }

// printArray(arr, 0);

/**
 * 2 Print Reverse Array
 */

// function printReverseArray(N,arr){
//
// }
// let arr=[1,2,3,4];
// let n=arr.length-1;
// printReverseArray(n,arr)

// function evenArray(n, arr){
//     if (n>=arr.length){
//     	return;
//     }
// }

// let arr=[1,2,3,4];
// let n=arr.length-1;
// evenArray(n,arr)

// function oddArray(n, arr){
//     if (n>=arr.length){
//     	return;
//     }

// }

// let arr=[1,2,3,4];
// let n=arr.length-1;
// oddArray(n,arr)

// ---------------------------------------- ----------------------------------------------

// function printName(){
//     console.log("Raman")
//     printName();
// }


// for(let i=0;i<1000;i++){
//     console.log("Raman")
// }
// --------------
// Question 1 - Print all values .
// function printName(arr, n) {
//   if (n > arr.length - 1) {
//     return;
//   }
//     console.log(arr[n]);
//   printName(arr, n + 1);
// }
// let arr = [1, 2, 3, 4];
// printName(arr, 0);


// --------------
// Question 2 - Print all values reverse order.
// function printName(arr, n) {
//   if (n<0) {
//     return;
//   }
//     console.log(arr[n]);
//   printName(arr, n - 1);
// }
// let arr = [1, 2, 3, 4];
// let n=arr.length-1;
// printName(arr, n);


// --------------
// Question 3- print even element ;
// function printName(arr, n) {
//   if (n > arr.length - 1) {
//     return;
//   }
//   if (arr[n] % 2 == 0) {
//     console.log(arr[n]);
//   }
//   printName(arr, n + 1);
// }
// let arr = [1, 2, 3, 4];
// printName(arr, 0);


// --------------
// Question 4 - find factorial
// function fact(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   }
//   return n * fact(n - 1);
// }
// let ans = fact(5);
// console.log(ans);
