class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
 const card=document.querySelector(".card-text")
 const h1=document.createElement("h1");
 h1.id="blog-title";
 h1.innerHTML=this.title;
 card.append(h1)

  }

  addDescription() {
    const card=document.querySelector(".card-text")
    const h1=document.createElement("p");
    h1.id="blog-description";
    h1.innerHTML=this.detail;
    card.append(h1)
  }
}
let toggle;
function helperAddPost() {
  if (toggle == 1) {
    document.getElementById("popupContact").style.display = "inline";
    return (toggle = 0);
  } else {
    document.getElementById("popupContact").style.display = "none";
    return (toggle = 1);
  }
}

function helperPost() {}
