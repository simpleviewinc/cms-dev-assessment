// Timeout promise
const setTimeoutPromise = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

async function Slider(slider) {
  // Variables for Slides Control
  let prev;
  let current;
  let next;
  // Wait 1 second for data fetch
  await setTimeoutPromise(1000);
  // Select Slides and controls
  const slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");

  // Start Slider
  function startSlider() {
    // Slide with the class current OR first slide
    current = slider.querySelector(".current") || slides.firstElementChild;
    // Previous slide if first slide get last slide
    prev = current.previousElementSibling || slides.lastElementChild;
    // Next slide if last slide get first slide
    next = current.nextElementSibling || slides.firstElementChild;
    console.log(current, prev, next);
  }

  // Apply classes to slides
  function toggleClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  // Move Slides
  function move(direction) {
    // Remove classes from current slides
    const classesToRemove = ["prev", "current", "next"];
    // Spread classes to remove
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    // If direction is previous
    if (direction == "back") {
      // New array of new values, destructure into corresponding variables
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    // Apply classess
    toggleClasses();
  }

  // When loaded run slider and apply classes
  startSlider();
  toggleClasses();

  // Controls Event listeners
  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", move);
}

const mainSlider = Slider(document.querySelector(".slider"));
