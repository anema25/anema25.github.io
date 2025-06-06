// Typing effect for hero heading
const text = "Hello! I'm Apoorva";
let index = 0;
const typingText = document.querySelector(".typing-text");

function type() {
  if (index < text.length) {
    typingText.textContent += text[index];
    index++;
    setTimeout(type, 70);
  }
}
typingText.textContent = "";
type();

// Reveal on scroll effect
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (const reveal of reveals) {
    const top = reveal.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      reveal.classList.add("visible");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
