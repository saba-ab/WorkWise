let drop = document.getElementById("dropdawnBox");
let talent = document.getElementById("talentDropdawn");
talent.addEventListener("click", function () {
  if ((drop.style.opacity === "0") & (drop.style.display === "none")) {
    drop.style.opacity = "1";
    drop.style.display = "block";
  } else {
    drop.style.opacity = "0";
    drop.style.display = "none";
  }
});
let filter = document.getElementById("filter");
let filterBlock = document.getElementById("filterBlock");
filter.addEventListener("click", function () {
  if (
    (filterBlock.style.opacity === "0") &
    (filterBlock.style.display === "none")
  ) {
    filterBlock.style.opacity = "1";
    filterBlock.style.display = "block";
  } else {
    filterBlock.style.opacity = "0";
    filterBlock.style.display = "none";
  }
});

let category = document.querySelectorAll(".category");
category.forEach((category) => {
  let clicked = false;
  category.addEventListener("click", () => {
    if (!clicked) {
      category.style.backgroundColor = "#087DBF";
      category.style.color = "white";
      clicked = true;
    } else {
      category.style.backgroundColor = "";
      category.style.color = "";
      clicked = false;
    }
  });
});

let rate = document.querySelectorAll(".rate");
rate.forEach((rate) => {
  let clicked = false;
  rate.addEventListener("click", () => {
    if (!clicked) {
      rate.style.backgroundColor = "#087DBF";
      rate.style.color = "white";
      clicked = true;
    } else {
      rate.style.backgroundColor = "";
      rate.style.color = "";
      clicked = false;
    }
  });
});

let loc = document.querySelectorAll(".location");
loc.forEach((loc) => {
  let clicked = false;
  loc.addEventListener("click", () => {
    if (!clicked) {
      loc.style.backgroundColor = "#087DBF";
      loc.style.color = "white";
      clicked = true;
    } else {
      loc.style.backgroundColor = "";
      loc.style.color = "";
      clicked = false;
    }
  });
});
