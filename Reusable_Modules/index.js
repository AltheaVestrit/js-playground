/*
// import from packages:
import _ from 'lodash';

// import data:
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

// import additional js files:
import myModule from './myModule.js';
*/

// import css:
import "./styles.css";

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const dropdownContent = dropdown.querySelector(".dropdown-content");
  const dropBtn = dropdown.querySelector(".dropdown__btn");
  const dropArrow = dropdown.querySelector(".drop-arrow");

  dropBtn.addEventListener("click", (e) => {
    if (dropBtn.dataset.active === "true") {
      dropBtn.dataset.active = "false";
      dropdownContent.classList.add("hidden");
      dropArrow.innerText = ">";
    } else {
      dropBtn.dataset.active = "true";
      dropdownContent.classList.remove("hidden");
      dropArrow.innerText = "v";
    }
  });
});

const carousels = document.querySelectorAll(".carousel");
carousels.forEach((carousel) => {
  const leftArrow = carousel.querySelector(".left");
  const rightArrow = carousel.querySelector(".right");
  const photos = carousel.querySelector(".carousel__photos");
  const carouselNav = carousel.querySelector(".carousel__nav");
  const nrOfPhotos = photos.childElementCount;
  const photoArray = photos.querySelectorAll("img");

  const goToSlide = (slideNr) => {
    photos.dataset.nr = parseInt(slideNr);
    photos.style.right = `${(slideNr - 1) * 200}px`;
    carousel
      .querySelectorAll(".circle")
      .forEach((el) => (el.classList = "circle"));
    carousel
      .querySelector(`.circle[data-nr="${slideNr}"]`)
      .classList.add("selected");
  };

  photoArray.forEach((photo) => {
    const navCircle = document.createElement("button");
    navCircle.classList.add("circle");
    navCircle.dataset.nr = photo.dataset.nr;
    carouselNav.appendChild(navCircle);
    navCircle.addEventListener("click", () => goToSlide(navCircle.dataset.nr));
  });
  carouselNav.firstChild.classList.add("selected");

  const nextSlide = () => {
    leftArrow.disabled = false;
    if (parseInt(photos.dataset.nr) === nrOfPhotos) {
      goToSlide(1);
    } else {
      goToSlide(parseInt(photos.dataset.nr) + 1);
    }
  };

  const prevSlide = () => {
    rightArrow.disabled = false;
    if (parseInt(photos.dataset.nr) === 1) {
      goToSlide(nrOfPhotos);
    } else {
      goToSlide(parseInt(photos.dataset.nr) - 1);
    }
  };

  rightArrow.addEventListener("click", nextSlide);
  leftArrow.addEventListener("click", prevSlide);

  const refreshRate = 5000;
  function slideShow() {
    nextSlide();
    setTimeout(slideShow, refreshRate);
  }
  setTimeout(slideShow, refreshRate);
});
