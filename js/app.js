// Show features
let showAbtn = document.querySelector("#showA");
showAbtn.addEventListener("click", function () {
  document.getElementById("featureA").style.visibility = "visible";
});

let showBbtn = document.querySelector("#showB");
showBbtn.addEventListener("click", function () {
  document.getElementById("featureB").style.visibility = "visible";
});

let showCbtn = document.querySelector("#showC");
showCbtn.addEventListener("click", function () {
  document.getElementById("featureC").style.visibility = "visible";
});

// Hide features
let hideAbtn = document.querySelector("#hideA");
hideAbtn.addEventListener("click", function () {
  document.getElementById("featureA").style.visibility = "hidden";
});

let hideBbtn = document.querySelector("#hideB");
hideBbtn.addEventListener("click", function () {
  document.getElementById("featureB").style.visibility = "hidden";
});

let hideCbtn = document.querySelector("#hideC");
hideCbtn.addEventListener("click", function () {
  document.getElementById("featureC").style.visibility = "hidden";
});
