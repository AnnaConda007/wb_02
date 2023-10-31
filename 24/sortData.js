import renderData from "./renderData";

let currentSortOrder = 1;
const sortData = (data, type) => {
  if (!type) return data;
  return data.sort((a, b) => {
    if (a[type] > b[type]) return currentSortOrder;
    if (a[type] < b[type]) return -currentSortOrder;
    return 0;
  });
};

export default sortData;
