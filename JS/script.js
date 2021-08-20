window.addEventListener('DOMContentLoaded', () => {

    // Таймер
    const countTimer = deadLine => {
        const timerSeconds = document.querySelector('#timer-seconds');
        const timerMinutes = document.querySelector('#timer-minutes');
        const timerHours = document.querySelector('#timer-hours');
        const timerDays = document.querySelector('#timer-days');

        const getTimeRemaining = () => {
            const dateStop = new Date(deadLine).getTime();
            const dateNow = new Date().getTime();
            const timeReamining = (dateStop - dateNow) / 1000;

            const seconds = Math.floor(timeReamining) % 60;
            const minutes = Math.floor((timeReamining / 60) % 60);
            const hours = Math.floor(timeReamining / 3600 % 24);
            const days = Math.floor(timeReamining / 3600 / 24);
            return { days, hours, minutes, seconds };
        };

        const getСorrectTime = num => {
            if (num < 0) { return '00'; }
            if (num < 10) { return '0' + num; }
            return num;
        };

        const appdateClock = () => {
            const timer = getTimeRemaining();

            timerDays.textContent = getСorrectTime(timer.days);
            timerHours.textContent = getСorrectTime(timer.hours);
            timerMinutes.textContent = getСorrectTime(timer.minutes);
            timerSeconds.textContent = getСorrectTime(timer.seconds);
        };

        appdateClock();
        setInterval(appdateClock, 1000);
    };
    countTimer('1 sep 2021');

    // Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const btnClose = document.querySelector('.close-btn');

        const menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        btnClose.addEventListener('click', handlerMenu);

        menuItems.forEach(item => item.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    const togglePopup = () => {
        const popup = document.querySelector('.popup');
        const btnsPopup = document.querySelectorAll('.popup-btn');
        const btnClose = document.querySelector('.popup-close');
        const popupContent = document.querySelector('.popup-content');

        let left;
        const animation = () => {
            popupContent.style.left = left + '%';
            left++;
            const move = requestAnimationFrame(animation);
            if (left > 38) {
                cancelAnimationFrame(move);
            }
        };

        btnsPopup.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                if (window.screen.width > 768) {
                    left = 0;
                    animation();
                }
            });
        });

        btnClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });

    };
    togglePopup();
});
