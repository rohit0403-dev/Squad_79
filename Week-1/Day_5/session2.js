// let name="value";
// let printName=function(){
//     console.log("Hello World")
// }
// printName();

// function dummy(name){
//  return name;
// }
// let name="sqaud";
// dummy(name)

// function outer() {
//     return function inner() {
//       console.log("Inner function");
//     };
//   }

//   const innerFunc = outer();
//   innerFunc(); // Outputs: Inner function

// let x="punjab";
// let arr=[x]

// const functions = [
//   function () {
//     console.log("First function");
//   },
//   function () {
//     console.log("Second function");
//   },
// ];

// functions[0](); // Outputs: First function
// functions[1](); // Outputs: Second function
// function dummy() {
//   console.log("Hello");
// }
// let x = dummy();
// console.log(x);

// Higher order function

// function parent(a) {
//   console.log("parent");
//   return function (b) {
//     return function(c){
//       console.log("grand child");
//       console.log(a+b+c)
//     }
//   };
// };
// // currying ----;
// parent(5)(5)(5);

// Inbuilt Higer Order function ;
let arr=[1,2,3]; // 3 ,4, ,5;

/**
 * Normal way
 */
let ans=[];
for(let i=0;i<arr.length;i++){
  ans.push(arr[i]+2)
};

let ans2=arr.map((e,i,a)=>{
  return a})
console.log(ans2)