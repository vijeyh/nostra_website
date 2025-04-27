/* Offer section */
var offer = document.querySelector(".offer");
document.getElementById("offer-close").addEventListener("click", function () {
  offer.style.display = "none";
});

/* Navigation section */

// var sideNav = document.querySelector(".side-nav");

// function show() {
//   sideNav.style.left = "0%";
// }
// function hide() {
//   sideNav.style.left = "-60%";
// }

var sideNavMenu = document.querySelector(".navbar-menu-toggle");
var sidenavbar = document.querySelector(".side-nav");
sideNavMenu.addEventListener("click", function () {
  sidenavbar.style.marginLeft = "0px";
});

document.getElementById("side-navbar-close").addEventListener("click", () => {
  document.querySelector(".side-nav").style.marginLeft = "-60%";
});
