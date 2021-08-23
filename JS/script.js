'use strict';
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
        const menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        document.addEventListener('click', event => {
            const target = event.target;
            if (target === menu) { return; }

            const btnMenu = target.closest('.menu');
            if (btnMenu) {
                handlerMenu();
            } else if (menu.classList.contains('active-menu')) {
                handlerMenu();
            }
        });
    };
    toggleMenu();

    //Всплывающее окно
    const togglePopup = () => {
        const popup = document.querySelector('.popup');
        const btnsPopup = document.querySelectorAll('.popup-btn');
        const popupContent = document.querySelector('.popup-content');

        let left = 0;
        const animation = () => {
            popupContent.style.left = left + '%';
            left++;
            const move = requestAnimationFrame(animation);
            if (left > 38) {
                cancelAnimationFrame(move);
                left = 0;
            }
        };

        btnsPopup.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                if (window.screen.width > 768) {
                    animation();
                }
            });
        });

        popup.addEventListener('click', event => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });
    };
    togglePopup();

    //Плавная прокрутка для всех якорных ссылок
    const smoothScrolling = () => {
        // Найти все ссылки начинающиеся на #
        const anchors = document.querySelectorAll('a[href^="#"]');

        for (const anchor of anchors) {
            anchor.addEventListener("click", event => {
                event.preventDefault();

                const goto = anchor.getAttribute('href');
                if (goto === '#close') { return; }
                document.querySelector(goto).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        }
    };
    smoothScrolling();

    // Табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContend = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tab.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContend[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContend[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, index) => {
                    if (item === target) {
                        toggleTabContent(index);
                    }
                });
            }
        });

    };
    tabs();

});
