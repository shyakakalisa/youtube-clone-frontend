// Get video ID from URL parameter
const params = new URLSearchParams(window.location.search);
const videoId = params.get("id");

// Find the video from the data
const video = videos.find(v => v.id === videoId);

// Safety check
if (!video) {
  document.body.innerHTML = "<h2 style='color:white; padding:20px;'>Video not found</h2>";
} else {
  // Set the YouTube embed
  document.getElementById("player").src =
    `https://www.youtube.com/embed/${video.id}`;

  // Set video title and channel
  document.getElementById("videoTitle").textContent = video.title;
  document.getElementById("videoChannel").textContent = video.channel;
}
