const card = document.querySelector(".card");
// tag Name -> div -> "div"
// className -> card - > ".card"
// id -> popup -> "#popup"
let arr=["raju","farhan","rancho"];

for (let i = 0; i < arr.length; i++) {
  const h1 = document.createElement("h1");
  h1.innerHTML = arr[i]
  h1.id = "name";
  h1.style.color = "blue";

  card.append(h1);
}
