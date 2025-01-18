// it is used for to unpacked the values;
// let fruits = ["apple", "mango", "orange"];
// let apple = fruits[0];
// let orange = fruits[2];
// console.log(apple,orange)
// if I want to print all values in singl lines .


/**
 * Spread Operator - ...
 */
// console.log(...fruits)
// let vegetable = ["onion", "chilli"];
// let anotherBag = [...fruits, ...vegetable, "pineapple"];
// console.log(anotherBag)



/***
 * Rest Operator - ...
 * it is used for to packed values
 *
 */

// function print(a, ...kalvium) {
//   console.log(a,kalvium) // kalvium works as a rest operaotr 
// }
// print(1, 2, 3, 4);



/**
 * Classes
 * 
 */

// let stu1={
//     name:"dev",
//     age:"20",
//     city:"Kanpur"
// }

// let stu2={
//     name:"gunnet",
//     age:"20",
//     city:"punjab"
// }
// let stu3={
//     name:"arnav",
//     age:"20",
//     city:"rajsthan"
// }

// class Student {
//     constructor(name, age, city) {
//       this.name = name;
//       this.age = age;
//       this.location = city;
//     }
  
//   }
//   let stu4=new Student("Dev","200","Nagaland");
//   let stu5=new Student("Jhon","21","korea");
//   console.log(stu5)
  

/**
 * Set
 */

// Create a new Set
// let arr=[1,2,3,1,1,1];
// let set = new Set(arr);

// Add values
// set.add(4);
// console.log(set)
// set.add('Hello');
// set.add(1);  // Duplicate value, won't be added
// set.add({ name: 'Rohit' });

// Check size
// console.log(set.size);  // Output: 3

// Check if a value exists
// console.log(set.has(1));        // Output: true
// console.log(set.has('World'));  // Output: false

// Iterate over the Set


// Delete a value
// set.delete(1);

// Clear all values
// set.clear();
// console.log(set,"kuch nahi hai")
// console.log(set.size);  // Output: 0


/**
 * Map
 */
// let map = new Map([
//   ['name', 'John'],
//   ['age', 30]
// ]);

// // Adding entries: You can add key-value pairs using the .set() method.


// map.set('name', 'Alice');
// map.set('age', 25);
// // Accessing values: To get a value by key, use .get():

// console.log(map.get('name')); // 'Alice'
// // Checking existence: To check if a key exists in the map, use .has():


// console.log(map.has('age')); // true
// // Removing entries: You can remove a key-value pair with .delete():


// map.delete('age');
// // Size of the Map: You can get the number of key-value pairs with the .size property:


// console.log(map.size); // 1
// // Clearing the Map: To remove all key-value pairs from the Map, use .clear():
// map.clear();


/**
 * functional Programming
 */