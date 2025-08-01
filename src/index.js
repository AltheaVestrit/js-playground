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
import './styles.css';


const dropdownContent = document.querySelector(".dropdown-content");
const dropBtn = document.querySelector(".dropbtn");
const dropArrow = document.querySelector(".drop-arrow");

dropBtn.addEventListener("click", e => {
    if (dropBtn.dataset.active === "true") {
        dropBtn.dataset.active = "false";
        dropdownContent.classList.add("hidden");
        dropArrow.innerText = ">";
    } else {
        dropBtn.dataset.active = "true";
        dropdownContent.classList.remove("hidden");
        dropArrow.innerText = "v";
    }
})