const API_KEY = "1aeb6115-3940-407e-9824-d7c4d0570da3";
const input = document.querySelector(".geo-input");
const geoList = document.querySelector(".geo-list");

const debounce = (func, interval) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, interval);
  };
};

const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (inThrottle) return;
    func.apply(this, args);
    inThrottle = true;
    setTimeout(() => (inThrottle = false), limit);
  };
};

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

const debouncedFunc = debounce((e) => {
  getGeo(e.target.value);
}, 300);
input.addEventListener("input", debouncedFunc);

/*input.addEventListener("input", throttle((e) => {
    getGeo(e.target.value);
}, 300)); 
*/

input.addEventListener("click", (e) => {
  input.value = "";
});

geoList.addEventListener("click", (e) => {
  if (e.target && e.target.matches(".geo-list-item")) {
    input.value = e.target.innerText;
    getGeo();
  }
});
