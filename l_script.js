document
  .getElementById("heart-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    document.body.classList.add("fade-out"); // Add fade-out animation
    setTimeout(() => {
      window.location.href = this.href; // Navigate to the next page after animation
    }, 500); // Match the duration of the fade-out animation
  });

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
