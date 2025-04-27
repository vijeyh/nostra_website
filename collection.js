// var sideNav = document.querySelector(".side-nav");

// function show() {
//   sideNav.style.left = "0%";
// }
// function hide() {
//   sideNav.style.left = "-60%";
// }

import { products } from "./product.js";

/* Offer section */

var offer = document.querySelector(".offer");
document.getElementById("offer-close").addEventListener("click", function () {
  offer.style.display = "none";
});

/* Navigation section */

var sideNavMenu = document.querySelector(".navbar-menu-toggle");
var sidenavbar = document.querySelector(".side-nav");
sideNavMenu.addEventListener("click", function () {
  sidenavbar.style.marginLeft = "0px";
});

document.getElementById("side-navbar-close").addEventListener("click", () => {
  document.querySelector(".side-nav").style.marginLeft = "-60%";
});

/* Products */

var container = document.querySelector(".products");
products.forEach((product) => {
  var createItem = document.createElement("div");
  createItem.classList.add("product");
  createItem.innerHTML = ` <img style="width: 20vw;" src="images/${product.src}">
        <h1>${product.name}</h1>
        <p>₹${product.price}</p>
        <tags style="visibility:hidden;">${product.tags}</tags>`;

  container.append(createItem);
});

var filterList = [];
var tags = document.getElementsByName("tags");
console.log(tags);

tags.forEach((tag) => {
  tag.addEventListener("change", (e) => {
    if (e.target.checked) {
      filterList.push(e.target.value);
      console.log(filterList);
      update();
    } else {
      filterList = filterList.filter((item) => item !== e.target.value);
      update();
    }
  });
});

// var searchInput = document.getElementById("searchInput")
// searchInput.addEventListener("keyup",function(){
//     update()
// })

function update() {
  var productList = document.querySelectorAll(".product");
  for (var i = 0; i < productList.length; i++) {
    var check = false;
    var product = productList[i];
    console.log(product);
    var temp = product.querySelector("tags").innerHTML;

    console.log("elemen" + temp);

    const tempFilterArray = temp.split(",");

    console.log("tempfilterarray" + tempFilterArray);
    console.log("filterlist" + filterList);

    filterList.forEach((j) => {
      tempFilterArray.forEach((i) => {
        if (j == i) {
          check = true;
        }
      });
    });

    if (!check && filterList.length > 0) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  }
}
