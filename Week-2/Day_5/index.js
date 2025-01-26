// Object-Oriented Programming (OOP) in JavaScript refers to a programming paradigm where objects are the
// central concept for organizing code.
let name;

/**
 * Objects
 */
let car = {
  brand: "Tesla",
  model: "Model S",
  year: 2023,
  startEngine: function () {
    console.log(`${this.brand} ${this.model} is starting...`);
  }, // object Method
};
car.startEngine(); // Output: "Tesla Model S is starting..."

//  --------------------------------------------------
/**
 * this keyboard
 */

// console.log(this);
// print the global object ;

// this inside obj

// In the given code, this inside the printObj method refers to the object itself (obj).
//  When console.log(this) is called inside the method, it will print the entire object.
let obj1 = {
  name: "Rohit Gupta",
  class: "12th",
  printObj: () => {
    this.name = "Google"; // obj1
    console.log(this); //  refer to Global Object
  },
};
// obj1.printObj();
// console.log(obj1)
// console.log(obj1.name);

/**
 *  Normal function vs arrow function in the conetext of obj
 */
// let obj = {
//   name: "Rohit Gupta",
//   class: "12th",
//   printGlo:()=> {
//       console.log(this.name)
//  },  // it prints undefined because this refers to global ojbect 
// printObj:function()=>{
//   console.log(this.name) // it prints Rohit Gupta becuase this refers to local obj .
// }

// };
// obj.printObj();
// console.log(obj)


/**
 * Classes
 * 
 */

// class Vehicle {
//     constructor(brand, type) {
//       this.brand = brand;
//       this.type = type;
//     }

//     getDetails() {
//       console.log(`${this.brand} is a ${this.type}.`); 
//     }

//     static identify() {
//       console.log("This is a vehicle class.");   // only call by  class itself not by instace ;
//     }
//   }

//   const bike = new Vehicle("Harley Davidson", "bike");
// console.log(bike)
// bike.getDetails(); // Output: "Harley Davidson is a bike."
// Vehicle.identify();
//  Vehicle.identify(); // Output: "This is a vehicle class."

/**
 * Inheritance 
 * When we inherit the properties from parent .
 * In this example we have brand , type in parent so in electric vehicle we only add batteryCapacity . brand  and type
 * add by super keyword it is very special keyword it always call inside the contructor and pass the value which
 * you want to inherits
 */

// class ElectricVehicle extends Vehicle {
//     constructor(brand, type, batteryCapacity) {
//       super(brand, type);
//       this.batteryCapacity = batteryCapacity;
//     }

//     getDetails() {
//       super.getDetails();
//       console.log(`It has a battery capacity of ${this.batteryCapacity} kWh.`);
//     }
//   }

//   const tesla = new ElectricVehicle("Tesla", "car", 100);
//   tesla.getDetails();
// Output:
// ("Tesla is a car.");
// ("It has a battery capacity of 100 kWh.");


/**
 * Private variable .
 * Some time we want secure variable which can not be modified from outside the class scope they only access
 * inside the class then we create a private variable by adding # ,
 */



// class Person {
//    #name
//   constructor(name, fullName) {
//     this.#name = name;
//     this.fullName = fullName;
//   }

//   getName() {
//     return this.#name;
//   }

// get fullName() {   // Getter for fullName
//   return this.#name;
// }

// set fullName(name) {   // Setter for fullName
//   this.fullName = name;
// }
// }

// const person = new Person("Rohit", "Rohit Gupta");
// // person.fullName="Google"
// // console.log(person.fullName); // This should now print "Rohit Gupta"

// console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

// class Student {
//   #name;
//   constructor(id, name, sub) {
//     this.id = id;
//     this.#name = name;
//     this.sub = sub;
//   }
//   get name() {
//     return this.#name;
//   }
//   set changeName(name){
//     this.#name=name;
//   }
// }
// let s1 = new Student(1, "Rohit", "English");
// // s1.#name="Avni"
// // s1.printName();
// s1.changeName="Google"
// console.log(s1.name);
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class SpecialStudent extends Student {
//   constructor(name, age, position) {
//     super(name, age);
//     this.position = position;
// }
//   print() {
//     console.log("I am a normal function call by instace");
//   }
//   static x() {
//     console.log("I am a static function only call by main class");
//   }
// }
// let Instance1 = new SpecialStudent("x", 21, "Monitor");
// let Instance2 = new SpecialStudent("x", 21, "Monitor");
// console.log(SpecialStudent.x());

