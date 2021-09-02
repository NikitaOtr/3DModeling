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

            const seconds = Math.floor(timeRemaining % 60);
            const minutes = Math.floor(timeRemaining / 60 % 60);
            const hours = Math.floor(timeRemaining / 3600 % 24);
            const days = Math.floor(timeRemaining / 3600 / 24);
            return { days, hours, minutes, seconds };
        };

        const getCorrectTime = num => {
            if (num < 0) { return '00'; }
            if (num < 10) { return '0' + num; }
            return num;
        };

        const appDateClock = () => {
            const timer = getTimeRemaining();
            timerDays.textContent = getCorrectTime(timer.days);
            timerHours.textContent = getCorrectTime(timer.hours);
            timerMinutes.textContent = getCorrectTime(timer.minutes);
            timerSeconds.textContent = getCorrectTime(timer.seconds);
        };
        appDateClock();
        setInterval(appDateClock, 1000);
    };
    countTimer('30 sept 2021');

    // Меню ToDo document
    const toggleMenu = () => {
        const menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        document.addEventListener('click', event => {
            const target = event.target;
            if (target === menu) { return; }

            const buttonGetMenu = target.closest('.menu');
            if (buttonGetMenu || menu.classList.contains('active-menu')) {
                handlerMenu();
            }
        });
    };
    toggleMenu();

    //Всплывающее окно ToDo forEach buttonsGetPopup
    const togglePopup = () => {
        const popup = document.querySelector('.popup');
        const buttonsGetPopup = document.querySelectorAll('.popup-btn');
        const popupContent = document.querySelector('.popup-content');

        const animationPopup = () => {
            let left = 0;
            popupContent.style.left = 0 + '%';
            const animation = () => {
                left += 2;
                popupContent.style.left = left + '%';
                if (left < 38) {
                    requestAnimationFrame(animation);
                }
            };
            return animation();
        };

        buttonsGetPopup.forEach(item => {
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

    //Плавная прокрутка для всех якорных ссылок
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

    // Табы ToDo
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tabButtons = tabHeader.querySelectorAll('.service-header-tab');
        const tabContend = document.querySelectorAll('.service-tab');

        const toggleTabContent = elem => {
            for (let i = 0; i < tabButtons.length; i++) {
                if (tabButtons[i] === elem) {
                    tabButtons[i].classList.add('active');
                    tabContend[i].classList.remove('d-none');
                } else {
                    tabButtons[i].classList.remove('active');
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
                dots.forEach((item, index) => ((target === item) ? currentSlide = index : false));
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
            const target = event.target;
            if (target.matches('.portfolio-btn') || target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', event => {
            const target = event.target;
            if (target.matches('.portfolio-btn') || target.matches('.dot')) {
                startSlide();
            }
        });
    };
    slider();

    // Блок с командой
    const team = () => {
        const command = document.getElementById('command');

        const changeImgFromDataset = elem => [elem.src, elem.dataset.img] = [elem.dataset.img, elem.src];

        command.addEventListener('mouseover', event => {
            const target = event.target;
            if (target.matches('.command__photo')) {
                changeImgFromDataset(target);
            }
        });

        command.addEventListener('mouseout', event => {
            const target = event.target;
            if (target.matches('.command__photo')) {
                changeImgFromDataset(target);
            }
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

        const validationForm = form => {
            form.addEventListener('input', event => {
                const target = event.target;
                if (target.name === 'user_name') {
                    target.value = target.value.replace(/[^а-яА-ЯёЁ\s]/, '');
                } else if (target.name === 'user_email') {
                    target.value = target.value.replace(/[^-\w!_.~*@]/, '');
                } else if (target.name === 'user_phone') {
                    target.value = target.value.replace(/[^\d+]/, '');
                } else if (target.name === 'user_message') {
                    target.value = target.value.replace(/[^а-яА-ЯёЁ\s.!-?1-9]/, '');
                }
            });
        };

        const form1 = document.getElementById('form1');
        const form2 = document.getElementById('form2');
        const form3 = document.getElementById('form3');
        validationForm(form1);
        validationForm(form2);
        validationForm(form3);
    };
    validationForms();

    // Калькулятор
    const calc = (prise = 100) => {
        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcCountRooms = document.querySelector('.calc-count');
        const calcDays = document.querySelector('.calc-day');
        const totalValue = document.getElementById('total');

        const animationTotal = newTotal => {
            const countStep = 31;

            const nowTotal = +totalValue.textContent;
            const way = newTotal - nowTotal;
            const step = way > 0 ? Math.floor(way / countStep) : Math.ceil(way / countStep);

            let nowPosition = nowTotal + (way % countStep);
            const animation = () => {
                nowPosition += step;
                totalValue.textContent = nowPosition;
                if (nowPosition !== newTotal) {
                    requestAnimationFrame(animation);
                }
            };
            return animation();
        };

        const countTotal = () => {
            const typeValue = +calcType.value / 10;
            const squareValue = +calcSquare.value;
            let countRoomsValue = 1;
            let daysValue = 1;

            if (+calcCountRooms.value > 1) {
                countRoomsValue += (+calcCountRooms.value - 1) / 10;
            }
            if (calcDays.value) {
                if (+calcDays.value < 5) {
                    daysValue = 2;
                } else if (+calcDays.value < 10) {
                    daysValue = 1.5;
                }
            }
            const total = prise * typeValue * squareValue * countRoomsValue * daysValue;
            animationTotal(Math.round(total));
        };

        calcBlock.addEventListener('input', event => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countTotal();
            }
        });

        countTotal();
    };
    calc();

    //Send ajax forms
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так.';
        const loadMessage = '<div class="sk-rotating-plane"></div>';
        const successMessage = 'Спасибо! Мы скоро вам перезвоним.';

        const postData = data => fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const submitForm = form => {
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'font-size: 2rem; color: white;';
            form.append(statusMessage);

            form.addEventListener('submit', event => {
                event.preventDefault();
                statusMessage.innerHTML = loadMessage;

                const formData = new FormData(form);
                const data = {};
                formData.forEach((value, key) => data[key] = value);

                postData(data)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error(response.statusText);
                        }
                        statusMessage.textContent = successMessage;
                        form.reset();
                    })
                    .catch(error => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
            });
        };

        const form1 = document.getElementById('form1');
        const form2 = document.getElementById('form2');
        const form3 = document.getElementById('form3');
        submitForm(form1);
        submitForm(form2);
        submitForm(form3);
    };
    sendForm();
});
