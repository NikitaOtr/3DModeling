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

export default countTimer;