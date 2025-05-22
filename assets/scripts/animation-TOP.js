document.addEventListener('DOMContentLoaded', () => {
    const springObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-spring-up');
            entry.target.classList.remove('opacity-0');
            springObserver.unobserve(entry.target);
        }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.spring-animate').forEach(el => {
        springObserver.observe(el);
    });
    });