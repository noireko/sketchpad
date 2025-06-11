const main_div = document.getElementById("main_div");
const body = document.querySelector("body");
for (div_child = 0; div_child < 256; div_child++) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "white";
  newDiv.style.height = "50px";
  newDiv.style.width = "50px";
  newDiv.style.border = "1px solid black";
  main_div.appendChild(newDiv);
  newDiv.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "black";
  });
}

const btn = document.getElementById("button");
btn.style.padding = "10px 20px";
btn.style.color = "black";
btn.style.border = "1px solid black";
btn.textContent = "Grid";

const popup = document.getElementById("popup");

function showPopup() {
  popup.style.display = "block";
}

btn.addEventListener("click", showPopup);
