const div = document.querySelector("div");

setInterval(() => {
  if (div.classList.contains("animated")) {
    div.classList.remove("animated");
  } else {
    div.classList.add("animated");
  }
}, 500);
