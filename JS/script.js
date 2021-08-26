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
            const minutes = Math.floor(timeReamining / 60 % 60);
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

            const btnGetMenu = target.closest('.menu');
            if (btnGetMenu || menu.classList.contains('active-menu')) {
                handlerMenu();
            }
        });
    };
    toggleMenu();

    //Всплывающее окно //ToDo forEach ToDo
    const togglePopup = () => {
        const popup = document.querySelector('.popup');
        const btnsGetPopup = document.querySelectorAll('.popup-btn');
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

        btnsGetPopup.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                if (window.screen.width > 768) {
                    animation();
                }
            });
        });

        //ToDo
        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.addEventListener.contains('popup-close')) {
                popup.style.display = 'none';
            }
            target = target.closest('.popup-content');
            if (target) {
                return;
            }
            popup.style.display = 'none';
        });
    };
    togglePopup();

    //Плавная прокрутка для всех якорных ссылок ToDo
    const smoothScrolling = () => {
        let anchors = document.querySelectorAll('menu a');
        anchors = Array.from(anchors);
        anchors.push(document.querySelector('main>a'));

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
        const tabButton = tabHeader.querySelectorAll('.service-header-tab');
        const tabContend = document.querySelectorAll('.service-tab');

        const toggleTabContent = elem => {
            for (let i = 0; i < tabButton.length; i++) {
                if (tabButton[i] === elem) {
                    tabButton[i].classList.add('active');
                    tabContend[i].classList.remove('d-none');
                } else {
                    tabButton[i].classList.remove('active');
                    tabContend[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            const target = event.target.closest('.service-header-tab');
            if (target) {
                toggleTabContent(target);
            }
        });
    };
    tabs();

    // Слайдер
    const slider = () => {
        const slider = document.querySelector('.portfolio-content');
        const slides = slider.querySelectorAll('.portfolio-item');

        const dots = [];
        const portfolioDots = slider.querySelector('.portfolio-dots');
        slides.forEach(() => {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            dots.push(dot);
            portfolioDots.append(dot);
        });
        dots[0].classList.add('dot-active');

        const removePrevSlide = index => {
            slides[index].classList.remove('portfolio-item-active');
            dots[index].classList.remove('dot-active');
        };

        const setNextSlide = index => {
            slides[index].classList.add('portfolio-item-active');
            dots[index].classList.add('dot-active');
        };

        let currentSlide = 0;

        slider.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;
            if (target.matches('.dot')) {
                removePrevSlide(currentSlide);
                dots.forEach((item, index) => ((target === item) ? currentSlide = index : 1));
                setNextSlide(currentSlide);
            } else if (target.matches('#arrow-right')) {
                removePrevSlide(currentSlide);
                currentSlide = (currentSlide + 1) % slides.length;
                setNextSlide(currentSlide);
            } else if (target.matches('#arrow-left')) {
                removePrevSlide(currentSlide);
                currentSlide = (currentSlide + (slides.length - 1)) % slides.length;
                setNextSlide(currentSlide);
            }
        });

        const autoPlaySlide = () => {
            removePrevSlide(currentSlide);
            currentSlide = (currentSlide + 1) % slides.length;
            setNextSlide(currentSlide);
        };
        let interval;
        const startSlide = (time = 5000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };
        startSlide();

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });
    };
    slider();

    // Блок с командой
    const team = () => {
        const command = document.getElementById('command');
        const imgs = command.querySelectorAll('.row img');

        const changeImgFromDataset = elem => {
            imgs.forEach(item => {
                if (elem === item) {
                    [item.src, item.dataset.img] = [item.dataset.img, item.src];
                }
            });
        };

        command.addEventListener('mouseover', event => {
            changeImgFromDataset(event.target);
        });

        command.addEventListener('mouseout', event => {
            changeImgFromDataset(event.target);
        });
    };
    team();

    // Валидация форм ToDo blur
    const validationForms = () => {
        const calculatorForms = document.querySelector('.calc-block');
        calculatorForms.addEventListener('input', event => {
            const target = event.target;
            target.value = target.value.replace(/\D/, '');
        });

        const connectForm = document.getElementById('form2');
        connectForm.addEventListener('input', event => {
            const target = event.target;
            if (target.id === 'form2-name' || target.id === 'form2-message') {
                target.value = target.value.replace(/[^а-яА-ЯёЁ\s-]/, '');
            } else if (target.id === 'form2-email') {
                target.value = target.value.replace(/[^\w!-_.~*@']/, '');
            } else if (target.id === 'form2-phone') {
                target.value = target.value.replace(/[^\d()-]/, '');
            }
        });

        const connectFormInputs = connectForm.querySelectorAll('input');
        connectFormInputs.forEach(item => {
            item.addEventListener('blur', () => {
                item.value = item.value.replace(/\s{2,}/g, ' ');
                item.value = item.value.replace(/-{2,}/g, '-');
                item.value = item.value.replace(/^[\s-]/, '');
                item.value = item.value.replace(/[\s-]$/, '');
            });
        });

        const NameInput = connectFormInputs[0];
        NameInput.addEventListener('blur', () => {
            if (NameInput.value === '') { return; }
            NameInput.value = NameInput.value[0].toUpperCase() +
            NameInput.value.slice(1).toLowerCase();
        });
    };
    validationForms();

});
