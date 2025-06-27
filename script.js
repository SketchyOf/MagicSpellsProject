const faders = document.querySelectorAll('.fade');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -30px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, appearOptions);

faders.forEach(fade => {
  appearOnScroll.observe(fade);
});
