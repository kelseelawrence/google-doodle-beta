document.addEventListener('DOMContentLoaded', function() {
  console.log('OK');

  gsap.to("#flower-one", {
    scale: 1.8, // Reduced scale
    duration: 4,
    transformOrigin: "50% 50%",
    rotate: 15, // Just a small tilt
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  gsap.to("#flower-three", {
    scale: 1.8,
    duration: 4.5,
    transformOrigin: "50% 50%",
    rotate: -15,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  gsap.to("#flower-two", {
    scale: 1.5,
    duration: 5,
    transformOrigin: "50% 50%",
    opacity: 0.7, // Adding a subtle fade
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  gsap.to("#sun", {
    rotate: 360,
    transformOrigin: "50% 50%",
    duration: 8, // Slowed down
    repeat: -1,
    ease: "linear",
  });

  gsap.to("#right-globe", {
    rotate: 360,
    duration: 6,
    transformOrigin: "50% 50%",
    repeat: -1,
    ease: "linear",
  });

  gsap.to("#left-globe", {
    rotate: -360,
    duration: 6,
    transformOrigin: "50% 50%",
    repeat: -1,
    ease: "linear",
  });

  Draggable.create(".food", {
    bounds: "svg",
    onDrag: function() {
      if (this.hitTest(".trashcan")) {
        gsap.to(this.target, {
          duration: 1.0,
          opacity: 0.5,
          scale: 0
        });

        // Open Lid
        gsap.to("#lid, #handle", {
          rotate: -90,
          transformOrigin: "right top",
          duration: 0.5,
        });

        // Close Lid after 1 second
        gsap.to("#lid, #handle", {
          rotate: 0,
          duration: 0.5,
          delay: 1,
        });
      }
    }
  });

});
