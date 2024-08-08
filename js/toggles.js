"use strict";

document.querySelector("#checkboxPremultipliedToggle").addEventListener('input', (e) => {
  premultipliedAlphaValue = e.target.checked

  if (current_spine !== "") {
    reloadSpine()
  }
})

document.querySelector("#colorPickerBackgroundColorToggle").addEventListener("input", (e) => {
  let root=document.querySelector(":root")
  root.style.setProperty("--alt-dark-theme", e.target.value); 

  if (current_spine !=""){
    current_spine.config.backgroundColor = getComputedStyle(root).getPropertyValue("--alt-dark-theme");
  }
})