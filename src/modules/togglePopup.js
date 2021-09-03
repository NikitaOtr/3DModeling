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

export default togglePopup;
