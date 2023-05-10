// Get the liquid element and the button element
const liquidElement = document.querySelector(".coffee-medium__liquid");
const liquidButton = document.querySelector(".coffee-button");

// Add event listener to the button
liquidButton.addEventListener("click", function () {
  // Toggle the class to pause or play the animation
  if (liquidElement.classList.contains("coffee-medium__liquid--paused")) {
    liquidElement.classList.remove("coffee-medium__liquid--paused");
  } else {
    liquidElement.classList.add("coffee-medium__liquid--paused");
  }
});
