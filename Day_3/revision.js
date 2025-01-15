// let ,var and const
// scopes
// template literas
// destructure
// arrow function
// spread
let box = ["pen", "pencil", "scale"];
let x = box[1];
// console.log(x);
let y = box[0];
// console.log(y);
// I want print all the values by using on line .
/**
 * symbol = ...
 */
let newBag = [...box, "notebook"];
console.log(newBag);
// Rest operator is opposite to spread operator ?
// it will packed the values
function dummy(a,b,...kalvium){
     console.log(...kalvium)
}
dummy(1,2,3,4,5)

// let arr=[1,2];
// let arr2=[...arr];
// arr2.push(5);
// console.log(arr);
// console.log(arr2)