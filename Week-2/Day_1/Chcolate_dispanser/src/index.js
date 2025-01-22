var candies = ["green", "green", "green", "green", "red", "red", "Arnav", "red"];
// splice
// let count=3;
// let ans=candies.splice(candies.length-count,count);
// console.log(ans);
let obj = {};

for (let i = 0; i < candies.length; i++) {
  if (obj[candies[i]] == undefined) {
    obj[candies[i]] == 1;
  } else {
    obj[candies[i]] = obj[candies[i]] + 1;
  }
}
console.log(obj);
