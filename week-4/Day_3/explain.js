// console.log("Before Promise");

// let promise = new Promise((res, rej) => {

//   setTimeout(() => {
//     if (true) {
//       res("Promise Resolved");
//     } else {
//       rej("Promise Failed");
//     }
//   }),2000;
// });
// promise.then((res)=>console.log(res))
// console.log("After Promise");

// let promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (5 == 5) {
//       res("Promise Resolved");
//     } else {
//       rej("Promise failed");
//     }
//   });
// }, 2000);

// promise.then((kunal) => console.log(kunal)).catch((err) => console.log(err));

// promise.then((res) => console.log(res)).catch((err)=>console.log(err))

function fetchData() {
  let promise = fetch("https://jsonplaceholder.typicode.com/users");
  promise
    .then((res) => res.json())
    .then((res) => printData(res?.data))
    .catch((err) => console.log(err));
}
fetchData();
// let products = document.getElementById("products");
// function printData(data) {
//   console.log(data);
//   data.forEach((item) => {
//     let img = document.createElement("img");
//     img.src = item.avatar;
//     let h1 = document.createElement("h1");
//     h1.style.color="blue";
//     let id=document.createElement("p");
//     id.innerHTML=item.id
//     h1.innerHTML = item.first_name+" "+item.last_name;
//     let p=document.createElement("p");
//     p.innerHTML=item.email
//     products.append(id,img);
//     products.append(h1,p);
//   });
// }
// console.log("after Promise")

// let a=null;
// console.log(a)
console.log("Before");
let promise = new Promise((res, rej) => {
  setTimeout(() => {
    if (5 == 4) {
      res("Promise Resolved");
    } else {
      rej("Promise Rejected");
    }
  }, 2000);
});
/**
 * then catch
 */
promise.then((res) => console.log(res)).catch((err) => console.log(err));
console.log("After");
