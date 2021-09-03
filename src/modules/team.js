const team = () => {
    const command = document.getElementById('command');

    const changeImgFromDataset = elem => [elem.src, elem.dataset.img] = [elem.dataset.img, elem.src];

    command.addEventListener('mouseover', event => {
        const target = event.target;
        if (target.matches('.command__photo')) {
            changeImgFromDataset(target);
        }
    });

    command.addEventListener('mouseout', event => {
        const target = event.target;
        if (target.matches('.command__photo')) {
            changeImgFromDataset(target);
        }
    });
};

export default team;
