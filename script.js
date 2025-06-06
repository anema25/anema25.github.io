// Typing Effect
const text = "Hi, I'm Apoorva 👋";
let index = 0;
const typingText = document.querySelector('.typing-text');

function type() {
  if (index < text.length) {
    typingText.textContent += text[index++];
    setTimeout(type, 60);
  }
}

typingText.textContent = "";
type();

// Reveal on scroll - sections are visible by default now, so this is optional
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const top = reveals[i].getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      reveals[i].classList.add("visible");
    }
  }
});

// Add dark-mode class on body (optional if already set in HTML)
document.body.classList.add("dark-mode");


