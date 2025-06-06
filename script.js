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

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const top = reveals[i].getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      reveals[i].classList.add("visible");
    }
  }
});

// Auto dark mode
document.body.classList.add("dark-mode");
