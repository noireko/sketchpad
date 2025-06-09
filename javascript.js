const main_div = document.getElementById("main_div");

for (div_child = 0; div_child < 256; div_child++) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "red";
  newDiv.style.height = "50px";
  newDiv.style.width = "50px";
  main_div.appendChild(newDiv);
}
