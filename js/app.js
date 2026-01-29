const grid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");

function renderVideos(list) {
  grid.innerHTML = "";

  list.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
      <div class="thumbnail"><img src="${video.thumbnail}" alt="${video.title}"></div>
      <h4>${video.title}</h4>
      <p>${video.channel}</p>
    `;

    card.onclick = () => {
      window.location.href = `watch.html?id=${video.id}`;
    };

    grid.appendChild(card);
  });
}

// Search videos dynamically
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(value)
  );
  renderVideos(filtered);
});

renderVideos(videos);
