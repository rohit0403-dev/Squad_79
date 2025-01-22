// // slice vs splice ;
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let ans=foods.splice(2,1);
console.log(foods)
console.log(ans)
// let ans=foods.slice(2,3);

// function mySlice(start,end){
//     let ans=[];
//   for(let i=start;i<end;i++){
//     ans.push(foods[i])
//   };
//   console.log(ans,"Hamara function")
// }
// mySlice(2,3)

// // index , count , ...values
// foods.splice(2,1,"Laviza");
// console.log(foods)

// let arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.filter((item) => {
//   if (item % 2 == 1) {
//     return item;
//   }
// });
// console.log(ans);

// function checkPrime(num) {
//   let flag = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       flag = false;
//     }
//   }
//   console.log(flag);
// }
// checkPrime(5);


const myArray = [11, 34, 20, 5, 53, 16];
let evenArray=myArray.filter((item)=>item%2==0);
console.log(evenArray);