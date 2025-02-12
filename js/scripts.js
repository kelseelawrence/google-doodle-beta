Document.addEventListener('DOMContentLoaded', function() {
  console.log('OK');
}

gsap.to("#flower-one", {
  scale : 2.5,
  duration : 3,
  transformOrigin : "50% 50%",
  rotate: 360,
  repeat : -1,
  yoyoEase : true,
});

gsap.to("#flower-three", {
  scale : 2.5,
  duration : 3,
  transformOrigin : "50% 50%",
  rotate: 360,
  repeat : -1,
  yoyoEase : true,
});

gsap.to("#flower-two", {
  scale : 2.5,
  duration : 3,
  transformOrigin : "50% 50%",
  rotate: -360,
  repeat : -1,
  yoyoEase : true,
});

gsap.to("#flower-four", {
  scale : 2.5,
  duration : 3,
  transformOrigin : "50% 50%",
  rotate: -360,
  repeat : -1,
  yoyoEase : true,
});

gsap.to("#sun", {
  rotate: 360,
  transformOrigin: "50% 50%",
  duration: 3,
  repeat: -1,
})

gsap.to("#right-globe", {
  rotate: 360,
  duration: 5,
  transformOrigin: "50% 50%",
  repeat: -1,
 })

gsap.to("#left-globe", {
  rotate: -360,
  duration: 5,
  transformOrigin: "50% 50%",
  repeat: -1,
 })


Draggable.create(".food", {
  bounds: "svg",
  onDrag: function() {
    if(this.hitTest("#trashcan")) {
      gsap.to(this.target, {duration: 1.0, opacity:0.5, scale:0 })
    }
  }
});