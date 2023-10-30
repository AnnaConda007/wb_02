const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3000;

const CLIENT_ID = "51780688";
const CLIENT_SECRET = "b1bwhzPGfiF2fN1f8FwE";
const REDIRECT_URI = "http://127.0.0.1:5500/19/redirect.html";


app.get("/get-token", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "Code is required" });
  }

  try {
    const response = await axios.get("https://oauth.vk.com/access_token", {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code: code,
      },
    });

    const accessToken = response.data.access_token;
    res.json({ accessToken: accessToken });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch access token" });
  }
});

app.get('/vkdata', async (req, res) => {
  const API_URL = "https://api.vk.com/method/wall.get";
  const ACCESS_TOKEN = req.query.access_token;
  const OWNER_ID = "-34215577";
  const VERSION = "5.154";
  const COUNT = 5;
  const OFFSET = req.query.offset || 0;
  try {
      const response = await fetch(
        `${API_URL}?access_token=${ACCESS_TOKEN}&owner_id=${OWNER_ID}&count=${COUNT}&offset=${OFFSET}&v=${VERSION}`
        );
      const data = await response.json();
      res.json(data);
  } catch (error) {
      console.error("Ошибка:", error);
      res.status(500).send('Ошибка при получении данных из VK API.');
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
