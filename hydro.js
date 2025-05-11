let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Loop through all slides and hide them
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Loop through all dots and remove the active class
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and add active class to corresponding dot
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}
