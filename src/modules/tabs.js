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

export default tabs;