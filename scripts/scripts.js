const toggleButton = document.getElementById('darkModeToggle');

// Check if dark mode is already saved in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Light Mode ☀️';
}

toggleButton.addEventListener('click', () => {
    // Toggle dark mode
    document.body.classList.toggle('dark-mode');

    // Change the button text
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode ☀️';
        localStorage.setItem('darkMode', 'enabled');  // Save dark mode preference
    } else {
        toggleButton.textContent = 'Dark Mode 🌙';
        localStorage.setItem('darkMode', 'disabled');  // Save light mode preference
    }
});
