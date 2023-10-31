import getData from "./getData.js";

const renderData = async () => {
   const tableBody = document.querySelector("table tbody");
  const paginateStep = 50;
  let currentStep = 0;
  let currentSortType = "";
  let currentSortOrder = 1;
  
  const data = await getData();
  const sortData = (data, type) => {
    if (!type) return data;
    return data.sort((a, b) => {
      if (a[type] > b[type]) return currentSortOrder;
      if (a[type] < b[type]) return -currentSortOrder;
      return 0;
    });
  };

  const displayData = (dataToDisplay) => {
    const ren = dataToDisplay
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
    tableBody.innerHTML = ren;
  };

  const sortedData = sortData(data, currentSortType);
  const currentPartData = sortedData.slice(
    currentStep,
    currentStep + paginateStep
  );
  displayData(currentPartData);

  const btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    currentStep += 50;
    displayData(sortedData.slice(currentStep, currentStep + paginateStep));
  });

  document.querySelectorAll(".sort").forEach((sortBtn) => {
    sortBtn.addEventListener("click", (event) => {
      const type = event.target.parentNode.innerText
        .split(" ")[0]
        .toLowerCase();
      if (currentSortType === type) {
        currentSortOrder = -currentSortOrder;
      } else {
        currentSortType = type;
        currentSortOrder = 1;
      }

      const sortedData = sortData(data, currentSortType);
      const currentPartData = sortedData.slice(0, currentStep + paginateStep);
      displayData(currentPartData);
    });
  });
};

export default renderData;
