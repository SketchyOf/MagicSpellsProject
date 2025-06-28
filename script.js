// Navbar hide/show
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Appear on scroll
const appearElements = document.querySelectorAll('.appear');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

appearElements.forEach(el => observer.observe(el));
