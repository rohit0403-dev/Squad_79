var chocolates = [
  "green",
  "green",
  "green",
  "silver",
  "blue",
  "crimson",
  "purple",
  "red",
  "crimson",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "silver",
  "crimson",
  "purple",
  "silver",
  "silver",
  "red",
  "green",
  "red",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "silver",
  "crimson",
  "pink",
  "silver",
  "blue",
  "pink",
  "crimson",
  "crimson",
  "crimson",
  "red",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "crimson",
  "silver",
  "purple",
  "purple",
  "purple",
  "red",
  "purple",
  "red",
  "blue",
  "silver",
  "green",
  "crimson",
  "silver",
  "blue",
  "crimson",
  "purple",
  "green",
  "pink",
  "green",
  "red",
  "silver",
  "crimson",
  "blue",
  "green",
  "red",
  "red",
  "pink",
  "blue",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "blue",
  "red",
  "purple",
  "silver",
  "blue",
  "pink",
  "silver",
  "crimson",
  "silver",
  "blue",
  "purple",
  "purple",
  "green",
  "blue",
  "blue",
  "red",
  "red",
  "silver",
  "purple",
  "silver",
  "crimson",
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color;
// function addChocolates(candies, color, number) {
//   for (let i = 0; i < number; i++) {
//     candies.push(color);
//   }
// }

function addChocolates(candies, color, count) {
  for (let i = 0; i < count; i++) {
    candies.push(color);
  }
}

function dispenseChocolates(candies, count) {
  if (candies.length < count) {
    return "Insufficient chocolates in the dispensers";
  }
  let ans = candies.splice(candies.length - count, count);
  return ans;
}

function dispenseChocolatesOfColor(candies, count, color) {
  let ans = candies.splice(candies.length - count, count);
  return ans;
}
function noOfChocolates(candies) {
  let obj = {};

  for (let i = 0; i < candies.length; i++) {
    if (obj[candies[i]] == undefined) {
      obj[candies[i]] = 1;
    } else {
      obj[candies[i]] = obj[candies[i]] + 1;
    }
  }
  return Object.values(obj);
}
//Progression 2: Remove z chocolates from the top the dispenser
// function dispenseChocolates(candies, count) {
//   if(candies.length<count){
//     return "Insufficient chocolates in the dispensers"
//   }
//   let ans = candies.splice(candies.length - count, count);
//   return ans;
// }
//  function noOfChocolates(candies){
//   let obj = {};

//   for (let i = 0; i < candies.length; i++) {
//     if (obj[candies[i]] == undefined) {
//       obj[candies[i]] = 1;
//     } else {
//       obj[candies[i]] = obj[candies[i]] + 1;
//     }
//   }
//   let ans=Object.values(obj);
//   return ans;
//  }
//Progression 3: Dispense z chocolates

// function dispenseChocolatesOfColor(candies, count, color) {
//   const result = [];
//   for (let i = candies.length - 1; i >= 0; i--) {
//     if (candies[i] === color) {
//       result.push(candies.splice(i, 1)[0]);
//       if (result.length === count) break;
//     }
//   }
//   if (result.length < count) {
//     return 'Insufficient chocolates of the specified color in the dispenser';
//   }
//   return result.reverse();
// }

//Progression 4: Dispense z chocolates of x color

// function noOfChocolates(candies) {
//   const colorCount = {};
//   candies.forEach((color) => {
//     colorCount[color] = (colorCount[color] || 0) + 1;
//   });
//   return Object.values(colorCount);
// }

// function sortChocolateBasedOnCount(candies){
//   let ans=candies.sort();
//   return ans;
// }

// function sortChocolateBasedOnCount(candies) {
//   const colorCount = {};
//   candies.forEach((color) => {
//     colorCount[color] = (colorCount[color] || 0) + 1;
//   });
//   return candies.sort(
//     (a, b) => colorCount[b] - colorCount[a] || a.localeCompare(b)
//   );
// }
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

//Progression 6: Sort chocolates based on count in each color. Return array of colors

// These are optional Challenges
//Progression 7: Change z chocolates of x color to y color

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

//Challenge 1: Remove one chocolate of x color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
