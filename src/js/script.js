"use strict";
document.addEventListener("DOMContentLoaded", () => {
  let shopImages = document.querySelectorAll(".item-image");
  for(let image of shopImages) {
    let sibling = image.previousElementSibling;
    if(sibling != null && sibling.classList.contains("item-image-alt")) {
      image.addEventListener("mouseover", () => {
        image.classList.add("hovered");
        sibling.classList.remove("hovered");
      });

      sibling.addEventListener("mouseout", () => {
        image.classList.remove("hovered");
        sibling.classList.add("hovered");
      });
    }
  }
});