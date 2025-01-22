const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

function slice(start, end) {
  let ans = [];
  for (let i = start; i < end; i++) {
    if (i < foods.length) {
      ans.push(foods[i]);
    }
  }
  return ans;
}

// Progression 2:

function spliced() {
  let ans = foods.splice(2, 0, "noodles", "icecream");
  return foods;
}

// Progression 3:

function isEven(number) {
  let ans = number.filter((item) => item % 2 == 0);
  return ans;
}

function checkPrime(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
    }
  }
  return flag;
}

function isPrime(number) {
  let ans = number.filter((item) => {
    if (checkPrime(item)) {
      return item;
    }
  });
  return ans;
}

function checkNumber(numberArray, operation) {
  return operation(numberArray);
}

// Progression 4:

function reject(numberArray) {
  console.log(numberArray);
  // let ans=numberArray.filter((item)=>{
  //     if(!(checkPrime(item))){
  //         return item;
  //     }
  // });
  // console.log(ans)
}

function nonPrime(numberArray) {
  let ans = numberArray.filter((item) => {
    if (!checkPrime(item)) {
      return item;
    }
  });
  return ans;
}

// Progression 5:

const isEvenUsingLambda = (number) => {
      let ans=[];
      for(let i=0;i<number.length;i++){
        if(number[i]%2==0){
            ans.push(number[i])
        }
      }
      return ans;
};

// Progression 6:

function square(number) {
  console.log(number);
}

function findSquareOfNumbers(myArray) {
  let ans = myArray.map((item) => item * item);
  return ans;
}

// Progression 7:

function multiply(myArray) {
  let ans = myArray.reduce((acc, item) => acc * item, 1);
  return ans;
}

function sumOfSquares(myArray) {
  let ans = myArray
    .map((item) => item * item)
    .reduce((acc, item) => acc + item);
  return ans;
}