const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");

const validate = () => {
  let resValid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("redBorder");
      resValid = false;
    }
  });
  return resValid;
};

const getData = () => {
  const data = {};
  inputs.forEach((input) => {
    data[input.id] = input.value;
  });
  return data;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const validateres = validate();
  if (!validateres) return;
  const data = getData();
  console.log(data);
});

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.classList.remove("redBorder");
  });
});
