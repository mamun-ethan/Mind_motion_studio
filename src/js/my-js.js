document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#hero_content", {
    x: "-150%",

    scrollTrigger: {
      trigger: "#hero_contnet",
      scrub: true,
    },
  });
});
