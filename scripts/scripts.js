const toggleButton = document.getElementById('darkModeToggle');

// Check if dark mode is already saved in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Light Mode ☀️';
} 

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}



// Get the button element
const followBtn = document.getElementById('follow-btn');

// Add event listener for button click
followBtn.addEventListener('click', function() {
  // Toggle the 'following' class to change color and text
  if (followBtn.classList.contains('following')) {
    followBtn.classList.remove('following');
    followBtn.textContent = 'Follow';
  } else {
    followBtn.classList.add('following');
    followBtn.textContent = 'Unfollow';
  }
});

// JavaScript to toggle the editing state
document.getElementById('edit-profile-btn').addEventListener('click', function() {
  let username = document.getElementById('profile-username');
  let bio = document.getElementById('profile-bio');
  let fileInput = document.getElementById('profile-pic-input');

  // Make text editable
  username.contentEditable = true;
  bio.contentEditable = true;
  fileInput.style.display = 'block'; // Show file input for profile picture
});




// Background Change Toggle
const backgroundButton = document.getElementById('background-button');
const backgroundOptions = document.getElementById('background-options');

backgroundButton.addEventListener('click', () => {
  backgroundOptions.classList.toggle('show');
  if (backgroundOptions.classList.contains('show')) {
    backgroundButton.innerHTML = 'Choose Background &#8593;';
  } else {
    backgroundButton.innerHTML = 'Choose Background &#8595;';
  }
});

// Apply the selected background to the body
const options = document.querySelectorAll('.background-option');
options.forEach(option => {
  option.addEventListener('click', () => {
    const backgroundClass = option.getAttribute('data-background');
    document.body.className = backgroundClass; // Apply background class to the body
    backgroundOptions.classList.remove('show'); // Hide the background options
    backgroundButton.innerHTML = 'Choose Background &#8595;'; // Reset button text
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // your whole code goes here
});