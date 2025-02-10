console.log('OK');

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