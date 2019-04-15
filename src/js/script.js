"use strict";
/* global TweenMax, TimelineMax, Sine */
document.addEventListener("DOMContentLoaded", () => {
  let shopImages = document.querySelectorAll(".item-image");
  for (let image of shopImages) {
    let sibling = image.previousElementSibling;
    if (sibling != null && sibling.classList.contains("item-image-alt")) {
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

  let navButton = document.querySelectorAll(".nav-button")[0];
  navButton.addEventListener("click", (e) => {
    e.preventDefault();
    navButton.classList.toggle("fa-bars");
    navButton.classList.toggle("fa-times");
    let nav = document.querySelectorAll("nav")[0];

    nav.classList.toggle("active");
  });

  animatePage();
});

function animatePage() {
  let tl = new TimelineMax();
  tl.from('.logo .logo-name', 1, { opacity: 0 });
  tl.from('.column.background-image', 2, { opacity: 0 });

  TweenMax.staggerFrom('.item', 2, { opacity: 0, scale: 0.75 }, 0.5);

  document.querySelectorAll('.item').forEach(item => {
    let animation = new TimelineMax();
    animation.pause(); // don't auto play
    animation.to(item, 2, { scale: 0.8 });
    animation.to(item, 2, { scale: 1 });
    item.addEventListener('click', () => {
      animation.restart();
    });
  });

  document.querySelectorAll('.member-info').forEach(item => {
    item.addEventListener('mousemove', () => {
      TweenMax.to(item, 1, { borderRadius: "2rem" });
    });
  });
}
