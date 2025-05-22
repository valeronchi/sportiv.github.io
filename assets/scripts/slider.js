document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slider-slide');
    let currentSlide = 0;
    const slideInterval = 3000; // 3 секунды
    let isReturning = false;
    
    function moveSlider() {
        if (!isReturning) {
            // Движение вперед
            currentSlide++;
            
            // Если достигли последнего слайда
            if (currentSlide >= slides.length - 1) {
                isReturning = true;
            }
        } else {
            // Движение назад
            currentSlide--;
            
            // Если вернулись к первому слайду
            if (currentSlide <= 0) {
                isReturning = false;
            }
        }
        
        // Обновляем позицию
        updateSliderPosition();
    }
    
    function updateSliderPosition() {
        const slideWidth = 100 / slides.length;
        track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }
    
    // Запускаем автоматическую смену слайдов
    setInterval(moveSlider, slideInterval);
    
    // Инициализация позиции
    updateSliderPosition();
});