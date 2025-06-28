// Observer animace pro všechny .fade elementy
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1 // spustí se, když je 10% viditelné
});

// Vyber všechny elementy s třídou .fade
document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
