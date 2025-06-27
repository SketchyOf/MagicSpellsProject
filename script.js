const faders = document.querySelectorAll('.fade');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, appearOptions);

faders.forEach(fade => appearOnScroll.observe(fade));
