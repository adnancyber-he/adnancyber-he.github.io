// Hide loading screen once page is fully loaded
window.addEventListener('load', () => {
  const loader = document.getElementById('site-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 500); // Short delay to ensure smooth transition
  }
});

// Scroll animations using Intersection Observer
const animateOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: '-50px' // Slight offset for better timing
  });

  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
};

// Initialize animations
animateOnScroll();

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

function viewDetails(id) {
  window.location.href = `details.html?id=${id}`;
}
