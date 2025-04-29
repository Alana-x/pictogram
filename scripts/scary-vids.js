 // Function to filter videos based on the search input
 function filterVideos() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const videoItems = document.querySelectorAll(".video-item");

    videoItems.forEach((item) => {
      const keywords = item.getAttribute("data-keywords").toLowerCase();
      if (keywords.includes(searchQuery)) {
        item.style.display = "block"; // Show the video if it matches the search query
      } else {
        item.style.display = "none"; // Hide the video if it doesn't match
      }
    });

    // Adjust layout for single column view when searching
    const videoContainer = document.getElementById("video-container");
    if (searchQuery.trim() !== "") {
      videoContainer.classList.add("single-column");
    } else {
      videoContainer.classList.remove("single-column");
    }
  }