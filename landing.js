    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, i) => {
  const bg = char.dataset.bgColor
  const fg = char.dataset.fgColor

  const text = new SplitType(char, { types: 'chars' });

  // ✅ Set initial style: light gray with low opacity
  gsap.set(text.chars, {
    opacity: 0.4,
    color: "#222222" // <-- light gray
  });

  // ✅ Animate to teal on scroll
  gsap.to(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      markers: false
    },
    opacity: 1,
    color: fg,
    stagger: 0.1
  });
});

// Initialize Lenis
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
    AOS.init({ duration: 800, once: true });