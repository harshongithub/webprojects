var tl = gsap.timeline({scrollTrigger:{
    trigger: "#icon-grid",
    start: "0% 40%", // When the top of the #doc hits the top of the viewport
    end: "25% 50%", // When the bottom of the #doc hits the top of the viewport
    scrub: true, // Smoothly animate based on scroll position
     markers: true, // Optional: Show start and end markers for debugging
}});

tl.to("#doc", {
  top: "120%", // Move to the bottom of the container
  rotation: "-45deg", // Rotate -45 degrees
  ease: "power1.out"
}, 0) // Set the start time to 0, so it starts at the beginning of the timeline
.to("#az", {
  top: "120%", // Move to the bottom of the container

  ease: "power1.out"
}, 1) // Start at the same time as #doc
.to("#fg", {
  top: "120%", // Move to the bottom of the container

  ease: "power1.out"
}, 1) // Start at the same time as #doc
.to("#css", {
  top: "120%", // Move to the bottom of the container

  ease: "power1.out"
}, 2) // Start at the same time as #doc
.to("#c", {
  top: "120%", // Move to the bottom of the container

  ease: "power1.out"
}, 2) // Start at the same time as #doc
.to("#dj", {
  top: "120%", // Move to the bottom of the container
  ease: "power1.out"
}, 0) // Start at the same time as #doc
.to("#py", {
  top: "120%", // Move to the bottom of the container
  ease: "power1.out"
}, 0);
tl.to("#bg", {
  top: "120%", // Move to the bottom of the container
  ease: "power1.out"
}, 3);

