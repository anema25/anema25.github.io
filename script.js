// Dark mode toggle
const toggle = document.getElementById('toggle-mode');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Typing effect
const text = "Hi, I'm Apoorva 👋";
let index = 0;
const typingText = document.querySelector('.typing-text');
function type() {
  if (index < text.length) {
    typingText.textContent += text[index++];
    setTimeout(type, 80);
  }
}
typingText.textContent = "";
type();

// Scroll animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 100) {
      reveals[i].classList.add("visible");
    }
  }
});
