var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  delay: 0.5,
  duration: 0.9,
});
tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    let h5timer = document.querySelector("#line1-part1 h5");
    let grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 45);
  },
});
tl.to(".line h2", {
  opacity: 1,
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 4,
});
tl.from(".page1", {
  delay: 0.2,
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease: Power4,
});
tl.to("#loader", {
  display: "none",
});
