// Optionally, use JavaScript to handle project card interactions
document.querySelectorAll('.project-card a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Display project details here!');
  });
});

// Function to open the sidebar
function openSidebar() {
  document.getElementById("sidebar").style.left = "0"; // Shift sidebar to the left
  document.getElementById("main-content").style.marginLeft = "250px"; // Move main content to the right
}

// Function to close the sidebar
function closeSidebar() {
  document.getElementById("sidebar").style.left = "-250px"; // Hide sidebar
  document.getElementById("main-content").style.marginLeft = "0"; // Reset main content position
}
