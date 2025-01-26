// let shoe={color:"white",hasOwnProperty        :"Nike"};
// let s1=Object.create(shoe);
// s1.price="Rs 2999"/

// console.log(s1)
// constructroe
// function shoe(color,brand){
//     this.color=color;
//     this.brand=brand;
// }

// let s1=new shoe("White","Nike")
// console.log(s1)

// let obj = {};
// console.log(obj);

// function shoe(brand, color) {
//   this.brand = brand;
//   this.color = color;
// }
// shoe.prototype.print = function () {
//   console.log(this.color);
// };
// let s1 = new shoe("Nike", "White");
// let s2 = new shoe("RedTape", "White");
// console.log(s1.print());
// console.log(s2);

function student(name, age) {
  this.age = age;
  this.name = name;

}
student.prototype.greet=function(){
    console.log(this.name+"Hello")
}
let s1 = new student("Aman", 21);
let s2 = new student("Raman", 21);
console.log(s1)
s2.greet()
// console.log(s1)

// let shoe={color:"white",brand:"Nike"};
// let s1=Object.create(shoe)
// console.log(s1.color)
