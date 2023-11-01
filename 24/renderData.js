import getData from "./getData.js";

const renderData = async () => {
  const tableBody = document.querySelector("tbody");
  const btn = document.querySelector("button");
  const paginateStep = 5; // 5 нагляднее чем 50
  let currentStep = paginateStep;
  let currentSortColumn = "";
  let currentSortOrder = 1;
  const data = await getData();

  const sortData = (data, type) => {
    return data.sort((a, b) => {
      if (a[type] > b[type]) return currentSortOrder;
      if (a[type] < b[type]) return -currentSortOrder;
    });
  };
  const displayData = (dataToDisplay, append = false) => {
    const rendered = dataToDisplay
      .map(
        (str) => `
      <tr> 
        <td>${str.address}</td>
        <td>${str.city}</td>
        <td>${str.fname}</td>
        <td>${str.lname}</td>
        <td>${str.state}</td>
        <td>${str.tel}</td>
        <td>${str.zip}</td>
      </tr>
    `
      )
      .join("");
    if (append) {
      tableBody.innerHTML += rendered;
    } else {
      tableBody.innerHTML = rendered;
    }
  };

  const currentPartData = data.slice(currentStep, currentStep + paginateStep);
  displayData(currentPartData);

  btn.addEventListener("click", () => {
    currentStep += paginateStep;
    displayData(data.slice(currentStep, currentStep + paginateStep), true);
    console.log(currentStep);
  });

  document.querySelectorAll(".sort").forEach((sortBtn) => {
    sortBtn.addEventListener("click", (event) => {
      const type = event.target.parentNode.innerText.split(" ")[0];
      if (currentSortColumn === type) {
        currentSortOrder = -currentSortOrder;
      } else {
        currentSortColumn = type;
        currentSortOrder = 1;
      }
      const sortedData = sortData(
        data.slice(0, currentStep),
        currentSortColumn
      );
      displayData(sortedData);
    });
  });
};

export default renderData;
