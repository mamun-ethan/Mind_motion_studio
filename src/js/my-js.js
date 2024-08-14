// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.to("#hero_content", {
//     x: "-150%",

//     scrollTrigger: {
//       trigger: "#hero_contnet",
//       scrub: true,
//     },
//   });
// });document.addEventListener("DOMContentLoaded", () => {
const heroContent = document.getElementById("hero_content");
const featureSection = document.querySelector(".feature_section");

// Initial opacity and transform setup for the feature section
featureSection.style.opacity = "0";
featureSection.style.transform = "scale(1.5)";
featureSection.style.height = "100vh"; // Set the feature section height to viewport height

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const maxScroll = windowHeight * 0.05;

  if (scrollPosition <= maxScroll) {
    const translateX = Math.min(0, -scrollPosition * 3);
    heroContent.style.transform = `translateX(${translateX}%)`;
  } else {
    heroContent.style.transform = `translateX(-150%)`;
  }

  if (scrollPosition > maxScroll) {
    featureSection.style.opacity = "1";
    featureSection.style.transform = "scale(1)";
  } else {
    featureSection.style.opacity = "0";
    featureSection.style.transform = "scale(1.5)";
  }
});
