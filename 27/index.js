const div = document.querySelector("div");

setInterval(function () {
  if (div.classList.contains("animated")) {
    div.classList.remove("animated");
  } else {
    div.classList.add("animated");
  }

  animateMargin();
}, 1000);

 