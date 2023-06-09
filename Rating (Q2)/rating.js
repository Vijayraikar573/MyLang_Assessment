// Get the parent div element
const rating = document.getElementById('rating');

// Add a click event listener to the parent div element
rating.addEventListener('click', (event) => {
  // Get all the span elements within the parent div
  const stars = rating.getElementsByTagName('span');
  
  // Get the index of the clicked span element
  const clickedIndex = Array.from(stars).indexOf(event.target);
  
  // Add the 'active' class to the clicked span element and all the previous span elements
  for (let i = 0; i <= clickedIndex; i++) {
    stars[i].classList.add('active');
  }
  
  // Remove the 'active' class from all the span elements after the clicked span element
  for (let i = clickedIndex + 1; i < stars.length; i++) {
    stars[i].classList.remove('active');
  }
});
