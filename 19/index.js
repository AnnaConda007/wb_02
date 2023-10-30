const postsContainer = document.querySelector(".vk-widget");
const COUNT = 10;
let offset = localStorage.getItem("offset") || 0;
let loading = false;

const loadPosts = async (offset) => {
  const loadedPosts = JSON.parse(localStorage.getItem("loadedPosts") || "[]");
  const postsData = await fetch(
    `http://localhost:3000/vkdata?access_token=${localStorage.getItem(
      "vkAccessToken"
    )}&offset=${offset}`
  );
  const postsResponse = await postsData.json();
  const posts = postsResponse.response.items;
  const texts = posts.map((post) => post.text);
  const prevAndNewTexts = [...loadedPosts, ...texts];
  const renderedPosts = prevAndNewTexts
    .map((post) => `<div class="vk-post"> ${post} </div>`)
    .join("");
  postsContainer.innerHTML += renderedPosts;
  localStorage.setItem("loadedPosts", JSON.stringify(texts));
  localStorage.setItem("offset", offset);
  loading = false;
  const scrollToElement = document.querySelectorAll(".vk-post")[COUNT / 2];
  if (scrollToElement) {
    scrollToElement.scrollIntoView({ behavior: "smooth" });
  }
};

const accessToken = localStorage.getItem("vkAccessToken");
if (!accessToken) {
  const baseUrl = "https://oauth.vk.com/authorize";
  const clientId = "51780688";
  const redirectUri = "http://127.0.0.1:5500/19/redirect.html";
  const authUrl = `${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUri}`;
  window.location.href = authUrl;
} else {
  loadPosts(offset);
}

postsContainer.addEventListener("scroll", function () {
  if (
    !loading &&
    postsContainer.scrollTop + postsContainer.clientHeight + 5 >=
      postsContainer.scrollHeight
  ) {
    loading = true;
    offset = parseInt(offset) + COUNT;
    loadPosts(offset)
      .then(() => {
        loading = false;
      })
      .catch((error) => {
        console.error(error);
        loading = false;
      });
  }
});
