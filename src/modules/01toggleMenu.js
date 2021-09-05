const toggleMenu = () => {
    const menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('menu a')) { return handlerMenu(); }

        if (target.closest('menu') === menu) { return; }

        if (target.closest('.menu') || menu.matches('.active-menu')) {
            handlerMenu();
        }
    });
};

export default toggleMenu;
