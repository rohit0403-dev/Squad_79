// global , block and function ;
// global
// let name ;

// block
// if(true){
//     let ans="Hello world"

// }

// function
// function dummy(){
//     let ans="Hello world"
// }

// In other words, a closure gives a function access to its outer scope
// function outer() {
//   let ans = "Hello World";
//   return function () {
//     console.log(ans);
//   };
// }
// let myClosure = outer();
// myClosure();

// indexOf
//
let arr = [1, 2, 3, 4, 5, 6];
let num = 9;
// false : number is not present
// true : number is present at index [index];

function present(arr, item) {
  let n = arr.indexOf(item);
  return function () {
    if (n !== -1) {
      return `number is present at index ${n}`;
    } else {
      return `number is not present`;
    }
  };
}
let a=present(arr,num);
console.log(a())
