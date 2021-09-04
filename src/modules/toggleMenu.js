const toggleMenu = () => {
    const menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('a')) { handlerMenu(); }

        if (target.closest('menu') === menu) { return; }

        const buttonGetMenu = target.closest('.menu');
        if (buttonGetMenu || menu.matches('.active-menu')) {
            handlerMenu();
        }
    });
};

export default toggleMenu;
