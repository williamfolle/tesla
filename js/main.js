let header = document.getElementById("header");
let ms = document.getElementById("models");
let m3 = document.getElementById("model3");
let mx = document.getElementById("modelx");
let my = document.getElementById("modely");
let model = document.getElementById("model");

ms.onclick = () => {
  header.style.backgroundImage = "url(/img/image-1.png)";
  model.innerHTML = "Model S";
};

m3.onclick = () => {
  header.style.backgroundImage = "url(/img/image-2.png)";
  model.innerHTML = "Model 3";
};

mx.onclick = () => {
  header.style.backgroundImage = "url(/img/image-3.png)";
  model.innerHTML = "Model X";
};

my.onclick = () => {
  header.style.backgroundImage = "url(/img/image-4.png)";
  model.innerHTML = "Model Y";
};

// menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("show");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("show");
    menuOpen = false;
  }
});
