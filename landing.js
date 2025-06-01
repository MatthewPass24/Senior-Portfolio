  // Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate all elements with .reveal-type
const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((element) => {
  const bg = element.dataset.bgColor;
  const fg = element.dataset.fgColor;

  // Split into words instead of characters
  const text = new SplitType(element, { types: 'words' });

  // Set initial style
  gsap.set(text.words, {
    opacity: 0.3,
    y: 10,
    color: "#222222" // light gray
  });

  // Animate on scroll
  gsap.to(text.words, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      markers: false
    },
    opacity: 1,
    y: 0,
    color: fg,
    stagger: 0.05,
    ease: "power2.out"
  });
});

// Initialize Lenis for smooth scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // Optional: console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);