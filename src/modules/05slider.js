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

export default slider;
