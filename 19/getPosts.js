const API_URL = "https://api.vk.com/method/wall.get";
const owner_id = "-115594337";
const COUNT = 5;
const ACCESS_TOKEN =
  "vk1.a.j8F2FqQavdRvtUvGjr6AzUNDdiTaeUclNu0qYj0rQGfTANV9klWxr5oFQ-_iXpAKgkzhoxX50cNasgHzdoNmXs5E0PU-yr5TUmxZgPPkXUDfsDoGdT0gC3hbfHF1B8owmFo_kLzGYHU1y_PWnxAEewX7DMw6En7-3zJJY7038cS8blo5xP3NwxSFCEVqmro3";
const OWNER_ID = "-115594337";

const VERSION = "5.154";

fetch(
  `${API_URL}?access_token=${ACCESS_TOKEN}&owner_id=${OWNER_ID}&count=${COUNT}&v=${VERSION}`
)
  .then((response) => response.json())
  .then((data) => {
    if (data.error) {
      console.error("Ошибка API:", data.error.error_msg);
    } else {
      console.log("Данные:", data.response);
    }
  })
  .catch((error) => {
    console.error("Ошибка сети:", error);
  });
