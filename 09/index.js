const jsonData = JSON.stringify([{ name: "Анна", age: 25 }, 5, [1, 2, 3, 4]]);

const jsonToString = (json) => {
  const data = JSON.parse(json);
  const newArr = [];
  data.forEach((item) => {
    if (item && typeof item === "object" && !Array.isArray(item)) {
      for (let key in item) {
        newArr.push(key, String(item[key]));
      }
    } else if (Array.isArray(item)) {
      newArr.push(item.map(String).join(""));
    } else if (item) {
      newArr.push(String(item));
    }
  });

  console.log(newArr.join(","));
};

jsonToString(jsonData);
