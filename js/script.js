let clkbtn = document.getElementById("main").firstElementChild;
let popup = document.getElementById("popup");
let clsbtn = popup.firstElementChild;

clkbtn.addEventListener("click", () => {
  popup.style.cssText = "opacity:1;transition:all 1s;";
  document.body.style.cssText =
    "box-shadow: inset 1000px 1000px rgba(0, 0, 0, 0.5);z-index:100;transition:all 1s;";
});
clsbtn.addEventListener("click", () => {
  popup.style.cssText = "opacity:0;transition:all 1s;";
  document.body.style.cssText = "background-color:;transition:all 1s";
});
