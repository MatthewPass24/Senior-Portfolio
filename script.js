const text = "Welcome to my portfolio!";
let index = 0;
const speed = 100;
const typedText = document.getElementById("typed-text");

function typeWriter() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;