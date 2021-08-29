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
            const timeRemaining = (dateStop - dateNow) / 1000;

            const seconds = Math.floor(timeRemaining) % 60;
            const minutes = Math.floor(timeRemaining / 60 % 60);
            const hours = Math.floor(timeRemaining / 3600 % 24);
            const days = Math.floor(timeRemaining / 3600 / 24);
            return { days, hours, minutes, seconds };
        };

        const correctTime = num => {
            if (num < 0) { return '00'; }
            if (num < 10) { return '0' + num; }
            return num;
        };

        const appDateClock = () => {
            const timer = getTimeRemaining();
            timerDays.textContent = correctTime(timer.days);
            timerHours.textContent = correctTime(timer.hours);
            timerMinutes.textContent = correctTime(timer.minutes);
            timerSeconds.textContent = correctTime(timer.seconds);
        };

        appDateClock();
        setInterval(appDateClock, 1000);
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

    //Всплывающее окно ToDo forEach
    const togglePopup = () => {
        const popup = document.querySelector('.popup');
        const btnsGetPopup = document.querySelectorAll('.popup-btn');
        const popupContent = document.querySelector('.popup-content');

        const animationPopup = () => {
            let left = 0;
            const animation = () => {
                popupContent.style.left = left + '%';
                left++;
                if (left < 38) {
                    requestAnimationFrame(animation);
                }
            };
            return animation();
        };

        btnsGetPopup.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                if (window.screen.width > 768) {
                    animationPopup();
                }
            });
        });

        popup.addEventListener('click', event => {
            const target = event.target;
            if (target.matches('.popup-close')) {
                return popup.style.display = 'none';
            }
            if (target.closest('.popup-content')) {
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

        const nameInput = connectFormInputs[0];
        nameInput.addEventListener('blur', () => {
            if (nameInput.value === '') { return; }
            nameInput.value = nameInput.value[0].toUpperCase() +
            nameInput.value.slice(1).toLowerCase();
        });
    };
    validationForms();

    // Калькулятор
    const calc = (prise = 100) => {
        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcCount = document.querySelector('.calc-count');
        const calcDay = document.querySelector('.calc-day');
        const totalValue = document.getElementById('total');

        const animationTotal = total => {
            const step = Math.floor(total / 31);
            let nowPosition = total % 31;
            const animation = () => {
                nowPosition += step;
                totalValue.textContent = nowPosition;
                if (nowPosition < total) {
                    requestAnimationFrame(animation);
                }
            };
            return animation();
        };

        const countTotal = () => {
            const typeValue = +calcType.value / 10;
            const squareValue = +calcSquare.value;
            let countValue = 1;
            let dayValue = 1;

            if (calcCount.value > 1) {
                countValue += (+calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue = 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue = 1.5;
            }
            const total = prise * typeValue * squareValue * countValue * dayValue;
            animationTotal(Math.round(total));
        };

        calcBlock.addEventListener('input', event => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countTotal();
            }
        });
    };
    calc();
});
