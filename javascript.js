const main_div = document.getElementById("main_div");

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
