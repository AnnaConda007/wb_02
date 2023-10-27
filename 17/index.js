const API_KEY = "1aeb6115-3940-407e-9824-d7c4d0570da3";
const input = document.querySelector(".geo-input");
const geoList = document.querySelector(".geo-list");
const listItem = document.querySelector(".geo-list-item");

const getGeo = async (address) => {
  geoList.innerHTML = "";
  if (!address) return;
  const geoRes = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${address}`
  );
  try {
    const geoData = await geoRes.json();
    const adressObj = geoData.response.GeoObjectCollection.featureMember;
    const adress = adressObj.map(
      (item) =>
        `${
          item.GeoObject.description ? item.GeoObject.description + "," : ""
        } ${item.GeoObject.name}`
    );
    const adressLi = adress.map(
      (adres, index) =>
        `<li class = "geo-list-item" data-key=${index}> ${adres}</li>`
    );
    geoList.innerHTML = adressLi.join("");
  } catch (error) {
    console.log(error);
    alert("Возникла ошибка , попробуйте позже");
  }
};

input.addEventListener("input", (e) => {
  getGeo(e.target.value);
});
input.addEventListener("click", (e) => {
  input.value = "";
});

geoList.addEventListener("click", (e) => {
  if (e.target && e.target.matches(".geo-list-item")) {
    input.value = e.target.innerText;
    getGeo();
  }
});
