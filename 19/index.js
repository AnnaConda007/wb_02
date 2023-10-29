const accessToken = localStorage.getItem("vkAccessToken");
if (!accessToken) {
  const baseUrl = "https://oauth.vk.com/authorize";
  const clientId = "51780688";
  const redirectUri = "http://127.0.0.1:5500/19/redirect.html";
  const authUrl = `${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUri}`;
  window.location.href = authUrl;
} else {
  console.log(accessToken);
  




  fetch(`http://localhost:3000/vkdata?access_token=${accessToken}`)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error("Ошибка API:", data.error.error_msg);
        } else {
            console.log("Данные:", data.response);
        }
    })
    .catch(error => {
        console.error("Ошибка сети:", error);
    });



}
