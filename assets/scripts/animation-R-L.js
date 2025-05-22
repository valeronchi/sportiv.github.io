 // JS для активации анимации
 document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('scroll-animate-left')) {
            entry.target.classList.add('animate-slide-in-left');
          } else {
            entry.target.classList.add('animate-slide-in-right');
          }
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.scroll-animate-left, .scroll-animate-right').forEach(el => {
      observer.observe(el);
    });
  });