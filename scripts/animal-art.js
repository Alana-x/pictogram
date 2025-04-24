// Get all filter buttons
const buttons = document.querySelectorAll('.filter-btn');
      
// Function to filter art based on button click
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const animal = this.getAttribute('data-animal');
    
   
    // Toggle visibility for the selected animal
    document.querySelectorAll('.art').forEach(art => {
      if (art.classList.contains(animal)) {
        art.style.display = 'block';
      } else {
        art.style.display = 'none';
      }
    });
  });
});

function scrollButtons(direction) {
  const buttonContainer = document.querySelector('.buttons');
  const scrollAmount = 200; // Amount to scroll each time
  if (direction === 'left') {
    buttonContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    buttonContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
// Keep track of the current filter status
let activeFilter = null;

function scrollButtons(direction) {
  const buttonContainer = document.querySelector('.buttons');
  const scrollAmount = 200; // Amount to scroll each time
  if (direction === 'left') {
    buttonContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    buttonContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Toggle animal filter when a button is clicked
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const animal = button.getAttribute('data-animal');

    // Check if the clicked button is the same as the active filter
    if (activeFilter === animal) {
      // If the same button is clicked again, show all animals
      document.querySelectorAll('.art').forEach(art => art.style.display = 'block');
      activeFilter = null;
      button.style.backgroundColor = '#4CAF50'; // Reset button color
    } else {
      // Apply filter for the selected animal
      document.querySelectorAll('.art').forEach(art => {
        if (art.classList.contains(animal)) {
          art.style.display = 'block'; // Show filtered animals
        } else {
          art.style.display = 'none'; // Hide others
        }
      });
      activeFilter = animal;
      // Update button color to indicate it's active
      filterButtons.forEach(b => b.style.backgroundColor = '#4CAF50');
      button.style.backgroundColor = '#45a049'; // Active filter button
    }
  });
});