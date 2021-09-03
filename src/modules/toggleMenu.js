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

export default toggleMenu;
