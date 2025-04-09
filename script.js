// Get all envelope icons
const envelopeLinks = document.querySelectorAll(".fa-envelope");
const modal = document.getElementById("formModal");
const closeBtn = document.querySelector(".close-btn");
var img = document.getElementById("img");

// Add click event to all envelope icons
envelopeLinks.forEach((link) => 
{
  link.parentElement.addEventListener("click", function (e) 
  {
    e.preventDefault();

    // Find the closest pet card and its image
    const petCard = this.closest(".pet-cards");
    const petImage = petCard.querySelector("img");

    // Update the modal image source
    img.src = petImage.src;

    // Show the modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling while modal is open
  });
});

// Close modal when clicking the X button
closeBtn.addEventListener("click", function () 
{
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
});

// Handle form submission
const form = document.getElementById("adoptionForm");
form.addEventListener("submit", function (e) 
{
  e.preventDefault();
  alert("Thank you for your interest! We will contact you soon.");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
});
