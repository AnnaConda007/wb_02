const loadImg = (URL) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL;
    img.onload = () => resolve(img);
    img.onerror = () => {
      reject(new Error`Ошибка при загрузке изображ`());
    };
  });
};
const newImg = loadImg("./smartphone-4103051_1280.jpg");
newImg.then((imgData) => {
  const height = imgData.naturalHeight;
  const width = imgData.naturalWidth;
  const url = imgData.src;
  console.log(
    `Изображение хранится по адресу ${url}, его ширина:  ${width}, высота: ${height}`
  );
  document.body.appendChild(imgData);
});
