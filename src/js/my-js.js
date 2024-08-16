// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.to("#hero_content", {
//     x: "-150%",

//     scrollTrigger: {
//       trigger: "#hero_contnet",
//       scrub: true,
//     },
//   });

const heroContent = document.getElementById("hero_content");
const featureSection = document.querySelector(".feature_section");
const children_of_parent = document.querySelectorAll(
  ".feature_section #parent_div > div"
);
console.dir(children_of_parent);

// Function to animate the hero section
function animateHeroSection(scrollPosition, maxScroll) {
  if (scrollPosition <= maxScroll) {
    const translateX = Math.min(0, -scrollPosition * 3); // Speed up the movement
    heroContent.style.transform = `translateX(${translateX}%)`;
  } else {
    heroContent.style.transform = `translateX(-150%)`; // Keep off-screen
  }
}

// Function to animate the feature section
function animateFeatureSection(scrollPosition, maxScroll) {
  if (scrollPosition > maxScroll) {
    featureSection.style.opacity = "1";
    featureSection.style.transform = "scale(1) translateX(0)";
    children_of_parent.forEach((child) => {
      setTimeout(() => {
        child.style.transform = "translateX(0)";
      });
    });
  } else {
    featureSection.style.opacity = "0";
    featureSection.style.transform = "scale(1.2) translateX(5%)";
    children_of_parent.forEach((child, index) => {
      child.style.transform = `translateX(${8 * index}%)`;
    });
  }
}

// Main scroll event listener
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const maxScroll = windowHeight * 0.02; // 5% of viewport height

  // Call the animation functions for each section
  animateHeroSection(scrollPosition, maxScroll);
  animateFeatureSection(scrollPosition, maxScroll);

  // Add more animations for other sections here
});
