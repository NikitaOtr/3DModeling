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

export default calc;
