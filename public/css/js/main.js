// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};



let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.scrollY || window.pageYOffset;
  if (currentScroll > lastScrollTop) {
    // Desplazamiento hacia abajo
    document.querySelector(".search-bar").classList.add("hidden");
  } else {
    // Desplazamiento hacia arriba
    document.querySelector(".search-bar").classList.remove("hidden");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
