// Generate flying hearts
const flyingHeartsContainer = document.querySelector(".flying-hearts");
const numHearts = 20; // Number of hearts

for (let i = 0; i < numHearts; i++) {
  const heart = document.createElement("div");
  heart.classList.add("flying-heart");
  heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  heart.style.animationDuration = `${5 + Math.random() * 10}s`; // Random duration
  heart.style.animationDelay = `${Math.random() * 5}s`; // Random delay
  flyingHeartsContainer.appendChild(heart);
}
// Get all images in the slider
const images = document.querySelectorAll(".slider .item img");

// Get the template overlay and elements
const templateOverlay = document.querySelector(".template-overlay");
const templateLeftImg = document.getElementById("template-left-img");
const templateRightImg = document.getElementById("template-right-img");
const templateText = document.getElementById("template-text");
const closeBtn = document.querySelector(".close-btn");

// Add click event to each image
images.forEach((image) => {
  image.addEventListener("click", () => {
    // Set the left image, text, and right image in the template
    templateLeftImg.src = image.src;
    templateText.textContent = image.getAttribute("data-text");
    templateRightImg.src = image.getAttribute("data-right-image");

    // Show the template overlay
    templateOverlay.classList.add("active");
  });
});

// Close the template overlay
closeBtn.addEventListener("click", () => {
  templateOverlay.classList.remove("active");
});

// Close the template overlay when clicking outside
templateOverlay.addEventListener("click", (e) => {
  if (e.target === templateOverlay) {
    templateOverlay.classList.remove("active");
  }
});
// Example JavaScript to display the data-text content
document.getElementById("template-text").innerHTML =
  selectedImage.getAttribute("data-text");
