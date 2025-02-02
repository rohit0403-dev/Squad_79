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

function addChocolates(candies, color, count) {
  for (let i = 0; i < count; i++) {
    candies.push(color);
  }
  return candies;
}
function dispenseChocolates(candies, count) {
  if (candies.length < count) {
    return "Insufficient chocolates in the dispensers";
  }
  let ans = candies.splice(candies.length - count, count);
  return ans;
}

function dispenseChocolatesOfColor(candies, count, color) {
  if (candies.length < count) {
    return "Insufficient chocolates in the dispensers";
  }
  let ans = candies.splice(candies.length - count, count);
  return ans;
}

function noOfChocolates(candies) {
  let obj = {};
  for (let i = 0; i < candies.length; i++) {
    if (obj[candies[i]] == undefined) {
      obj[candies[i]] = 1;
    } else {
      obj[candies[i]] += 1;
    }
  }
  return Object.values(obj);
}


function sortChocolateBasedOnCount(candies) {
    let obj = {};
    for (let i = 0; i < candies.length; i++) {
      if (obj[candies[i]] == undefined) {
        obj[candies[i]] = 1;
      } else {
        obj[candies[i]] += 1;
      }
    }
let ans=candies.sort(
    (a, b) => obj[b] - obj[a] || a.localeCompare(b)
  );
return ans;
}
