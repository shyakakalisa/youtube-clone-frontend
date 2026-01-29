const grid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");

// Render the list of videos
function renderVideos(list) {
  grid.innerHTML = "";

  list.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
      <div class="thumbnail"></div>
      <h4>${video.title}</h4>
      <p>${video.channel}</p>
    `;

    // Go to watch page with URL parameter
    card.onclick = () => {
      window.location.href = `watch.html?id=${video.id}`;
    };

    grid.appendChild(card);
  });
}

// Search functionality
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(value)
  );
  renderVideos(filtered);
});

// Initial render
renderVideos(videos);
