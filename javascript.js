const main_div = document.getElementById("mainx16");
const body = document.querySelector("body");
const btn = document.getElementById("button");
const popup = document.getElementById("popup");
const cross = document.getElementById("cruz");
const btn_pop16 = document.getElementById("btn-popup0");
const btn_pop32 = document.getElementById("btn-popup1");
const btn_pop64 = document.getElementById("btn-popup2");
const btn_pop96 = document.getElementById("btn-popup3");

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

btn.style.padding = "10px 20px";
btn.style.color = "black";
btn.style.border = "1px solid black";
btn.textContent = "Grid";

btn.addEventListener("click", function (e) {
  popup.style.display = "block";
});

cross.addEventListener("click", function (e) {
  popup.style.display = "none";
});

btn_pop16.addEventListener("click", function (e) {
  main_div.innerHTML = "";
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
});

btn_pop32.addEventListener("click", function (e) {
  main_div.innerHTML = "";
  for (div_child = 0; div_child < 1024; div_child++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "white";
    newDiv.style.height = "25px";
    newDiv.style.width = "25px";
    newDiv.style.border = "0.5px solid black";
    main_div.appendChild(newDiv);
    newDiv.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
});

btn_pop64.addEventListener("click", function (e) {
  main_div.innerHTML = "";
  for (div_child = 0; div_child < 4096; div_child++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "white";
    newDiv.style.height = "12.5px";
    newDiv.style.width = "12.5px";
    newDiv.style.border = "0.5px solid black";
    main_div.appendChild(newDiv);
    newDiv.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
});

btn_pop96.addEventListener("click", function (e) {
  main_div.innerHTML = "";
  for (div_child = 0; div_child < 9216; div_child++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "white";
    newDiv.style.height = "8.4px";
    newDiv.style.width = "8.3px";
    newDiv.style.border = "0.5px solid black";
    main_div.appendChild(newDiv);
    newDiv.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
});
