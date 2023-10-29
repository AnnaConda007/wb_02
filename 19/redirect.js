 
 const url = new URL(window.location.href);
const code = url.searchParams.get("code");

 
if (code) {
  fetch('http://localhost:3000/get-token?code=' + code)
      .then(response => response.json())
      .then(data => {
          const accessToken = data.accessToken;
          if (accessToken) {
              localStorage.setItem('vkAccessToken', accessToken);
              window.location.href = "http://127.0.0.1:5500/19/index.html";
          } else {
              console.error('Failed to get access token');
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
}
