console.log('OK');

gsap.to(.globe-one", {
    duration: 2,
    rotation: 360,
    repeat: -1,
    ease: "none"
})

gsap.registerPlugin(Draggable);

Draggable.create(".food", {
    bounds: "#stage",
    onDrag: function(){
      if (this.hitTest(".trashcan")) {
        gsap.to(this.target, {
            duration: 0.7, opacity: 0, scale: 0, })
      }
    }
});