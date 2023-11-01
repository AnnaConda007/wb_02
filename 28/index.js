const body = document.querySelector("body");
const arr = [1, 2, 3, 4, 5, 6];

// template
const template = document.querySelector(".my-template");
const container = document.querySelector(".container");
for (item of arr) {
  const clone = document.importNode(template.content, true);
  clone.querySelector("span").textContent = clone.textContent + item;
  container.appendChild(clone);
}

//решение через шаблонные строки
const ol = document.createElement("ol");
body.appendChild(ol);
const liElements = arr.map((item) => ` <ul>${item}</ul>`).join("");
ol.innerHTML = liElements;
