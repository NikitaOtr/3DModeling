const tabs = () => {
    const tabHeader = document.querySelector('.service-header');
    const tabButtons = tabHeader.querySelectorAll('.service-header-tab');
    const tabContend = document.querySelectorAll('.service-tab');

    const toggleTabContent = elem => {
        tabButtons.forEach((item, index) => {
            if (item === elem) {
                tabButtons[index].classList.add('active');
                tabContend[index].classList.remove('d-none');
            } else {
                tabButtons[index].classList.remove('active');
                tabContend[index].classList.add('d-none');
            }
        });
    };

    tabHeader.addEventListener('click', event => {
        const target = event.target.closest('.service-header-tab');
        if (target) {
            toggleTabContent(target);
        }
    });
};

export default tabs;
