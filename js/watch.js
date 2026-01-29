const params = new URLSearchParams(window.location.search);
const videoId = params.get("id");

const video = videos.find(v => v.id === videoId);

if (!video) {
  document.body.innerHTML = "<h2 style='color:white; padding:20px;'>Video not found</h2>";
} else {
  document.getElementById("player").src =
    `https://www.youtube.com/embed/${video.id}`;

  document.getElementById("videoTitle").textContent = video.title;
  document.getElementById("videoChannel").textContent = video.channel;
}
