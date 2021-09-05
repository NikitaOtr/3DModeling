import validationForms from './101validationForms';
const popup = document.querySelector('.popup');

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так.';
    const warningMessage = 'Введите корректные данные';
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

        const inputs = form.querySelectorAll('input');

        const reset = () => {
            form.reset();
            inputs.forEach(item => item.classList.remove('success-input'));

            setTimeout(() => {
                statusMessage.innerHTML = '';
                popup.style.display = 'none';
            }, 5000);
        };

        form.addEventListener('submit', event => {
            event.preventDefault();

            if (!validationForms(inputs)) {
                statusMessage.textContent = warningMessage;
                return;
            }

            statusMessage.innerHTML = loadMessage;

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => data[key] = value);

            postData(data)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error(response.statusText);
                    }
                    reset();
                    statusMessage.textContent = successMessage;
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
