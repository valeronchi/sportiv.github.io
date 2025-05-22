const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const burgerLines = document.querySelectorAll('.burger-line');

        menuToggle.addEventListener('click', function() {
            // Переключение класса open для меню
            mobileMenu.classList.toggle('open');
            
            // Анимация бургер-кнопки в крестик и обратно
            if (mobileMenu.classList.contains('open')) {
                // Превращаем в крестик
                burgerLines[0].style.transform = 'translateY(9.5px) rotate(45deg) translateX(1px)';
                burgerLines[0].style.width = '28px';
                burgerLines[1].style.opacity = '0';
                burgerLines[2].style.transform = 'translateY(-9.5px) rotate(-45deg) translateX(1px)';
                burgerLines[2].style.width = '28px';
            } else {
                // Возвращаем в лесенку
                burgerLines.forEach(line => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateY(0) rotate(0) translateX(0)';
                });
                burgerLines[0].style.width = '19px';
                burgerLines[1].style.width = '28px';
                burgerLines[2].style.width = '37px';
            }
        });