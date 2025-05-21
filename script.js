document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.nav-button');
  const typedTextElement = document.querySelector('.typed-text');

  // Text to type
  const text = "Welcome to my portfolio!";
  let index = 0;

  // Clear existing text and start typing effect
  typedTextElement.textContent = '';

  function type() {
    if (index < text.length) {
      typedTextElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // typing speed (ms)
    }
  }
  type();

  // Fade in buttons with delay after typing
  buttons.forEach((button, i) => {
    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
      button.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    }, 3500 + i * 200); // starts after typing finishes (~3.5s)
  });

  // Button click handlers
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      alert(`Navigating to ${this.id} page`);
      // Example: window.location.href = `${this.id}.html`;
    });
  });
});
