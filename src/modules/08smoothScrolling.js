const smoothScrolling = () => {
    let anchors = document.querySelectorAll('menu li>a');
    anchors = Array.from(anchors);
    anchors.push(document.querySelector('main>a'));

    for (const anchor of anchors) {
        anchor.addEventListener("click", event => {
            event.preventDefault();
            const goto = anchor.getAttribute('href');
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
};

export default smoothScrolling;
