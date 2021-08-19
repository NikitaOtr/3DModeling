window.addEventListener('DOMContentLoaded', () => {
    // 'use strict';
    function countTimer(deadLine) {
        const timerSeconds = document.querySelector('#timer-seconds');
        const timerMinutes = document.querySelector('#timer-minutes');
        const timerHours = document.querySelector('#timer-hours');
        const timerDays = document.querySelector('#timer-days');

        function getTimeRemaining() {
            const dateStop = new Date(deadLine).getTime();
            const dateNow = new Date().getTime();
            const timeReamining = (dateStop - dateNow) / 1000;

            const seconds = Math.floor(timeReamining) % 60;
            const minutes = Math.floor((timeReamining / 60) % 60);
            const hours = Math.floor(timeReamining / 3600 % 24);
            const days = Math.floor(timeReamining / 3600 / 24);
            return { days, hours, minutes, seconds };
        }

        function getСorrectTime(num) {
            if (num <= 0) { return '00'; }
            if (num < 10) { return '0' + num; }
            return num;
        }

        function appdateClock() {
            const timer = getTimeRemaining();

            timerDays.textContent = getСorrectTime(timer.days);
            timerHours.textContent = getСorrectTime(timer.hours);
            timerMinutes.textContent = getСorrectTime(timer.minutes);
            timerSeconds.textContent = getСorrectTime(timer.seconds);
        }

        appdateClock();
        setInterval(appdateClock, 1000);
    }

    countTimer('1 sep 2021');
});
