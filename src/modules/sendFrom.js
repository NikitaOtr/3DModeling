const sendForm = () => {
    const errorMessage = 'Что-то пошло не так.';
    const loadMessage = '<div class="sk-rotating-plane"></div>';
    const successMessage = 'Спасибо! Мы скоро вам перезвоним.';

    const postData = data => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const submitForm = form => {
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: white;';
        form.append(statusMessage);

        form.addEventListener('submit', event => {
            event.preventDefault();
            statusMessage.innerHTML = loadMessage;

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => data[key] = value);

            postData(data)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error(response.statusText);
                    }
                    statusMessage.textContent = successMessage;
                    form.reset();
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        });
    };

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');
    submitForm(form1);
    submitForm(form2);
    submitForm(form3);
};

export default sendForm;
