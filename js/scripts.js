document.addEventListener('DOMContentLoaded', function() {
  console.log('OK');

  // Array of possible flower colors
  const flowerColors = [
    '#fbb26d',
    '#f57d62', 
    '#e15b64', 
    '#abbd83', 
    '#E05263', 
    '#681C42', 
    '#D20074', 
    '#F7A814', 
    '#DF253C', 
    '#C84D8E', 
    '#DC6EA8', 
    '#FCC6E9', 
  ];

  // Apply a random color to each flower
  document.querySelectorAll('.flower').forEach(flower => {
    const getRandNum = Math.floor(Math.random() * flowerColors.length);
    const selectedColor = flowerColors[getRandNum];
    flower.setAttribute('fill', selectedColor);
    flower.setAttribute('stroke', '#000'); // Ensure the stroke is visible
  });
  
  gsap.from(".letter", {
    y: -30,
    duration: 1,
    ease: "bounce.out",
    stagger: 0.2,
    repeat: -1,
    repeatDelay: 3,
  });
  
  
  gsap.to("#flower-one", {
    scale: 1.8, // Reduced scale
    duration: 4,
    transformOrigin: "50% 50%",
    rotate: 15, // Just a small tilt
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

  gsap.to("#flower-three", {
    scale: 1.8,
    duration: 4.5,
    transformOrigin: "50% 50%",
    rotate: -15,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  gsap.to("#flower-four", {
    scale: 1.6,  // Adjusted scale
    duration: 4.2,  // Duration of the animation
    transformOrigin: "50% 50%",
    rotate: 20,  // Rotate by 20 degrees
    opacity: 0.8,  // Make it slightly less opaque
    yoyo: true,  // The animation will reverse at the end
    repeat: -1,  // Infinite loop
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
        gsap.to("#handle-lid", {
          rotate: 90,
          transformOrigin: "right top",
          duration: 0.5,
        });

        // Close Lid after 1 second
        gsap.to("#handle-lid", {
          rotate: 0,
          duration: 0.5,
          delay: 1,
        });
      }
    }
  });

});