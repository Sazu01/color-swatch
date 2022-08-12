"use strict";
const btn = document.getElementsByClassName("btn");
const box = document.getElementsByClassName("box");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    for (let i = 0; i < box.length; i++) {
      box[i].classList.remove("view");

      if (e.target === btn[i]) {
        box[i].classList.add("view");
      }
    }
  });
}
