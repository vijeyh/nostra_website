/* Offer section  */

var offer = document.querySelector(".offer");
document.getElementById("offer-close").addEventListener("click", function () {
  offer.style.display = "none";
});

/* Nav section */

var sideNavMenu = document.querySelector(".navbar-menu-toggle");
var sidenavbar = document.querySelector(".side-nav");
sideNavMenu.addEventListener("click", function () {
  sidenavbar.style.marginLeft = "0px";
});

document.getElementById("side-navbar-close").addEventListener("click", () => {
  document.querySelector(".side-nav").style.marginLeft = "-60%";
});
