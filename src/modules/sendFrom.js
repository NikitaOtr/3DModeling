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

    //ToDo
    const checkCorrectForm = inputs => {
        const setSuccessInput = input => {
            input.classList.remove('error-input');
            input.classList.add('success-input');
        };

        const setErrorInput = input => {
            input.classList.remove('success-input');
            input.classList.add('error-input');
        };

        const Arrayinputs = Array.from(inputs);
        const userName = Arrayinputs.find(item => item.matches('.form-name'));
        const userEmail = Arrayinputs.find(item => item.matches('.form-email'));
        const userPhone = Arrayinputs.find(item => item.matches('.form-phone'));

        inputs.forEach(item => setSuccessInput(item));
        let rez = true;

        if (!(userName.value.length >= 2)) {
            setErrorInput(userName);
            rez = false;
        }
        if (!(userEmail.value.match(/[-\d\w\W]+@[\w\d]+\.\w{2,4}/))) {
            setErrorInput(userEmail);
            rez = false;
        }
        if (!(userPhone.value.match(/[\d]{11}/) && userPhone.value.length <= 12)) {
            setErrorInput(userPhone);
            rez = false;
        }
        return rez;
    };

    const submitForm = form => {
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: white;';
        form.append(statusMessage);

        const inputs = form.querySelectorAll('input');

        const resetForm = () => {
            form.reset();
            inputs.forEach(item => item.classList.remove('success-input'));
        };

        form.addEventListener('submit', event => {
            event.preventDefault();

            if (!checkCorrectForm(inputs)) {
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
                    resetForm();
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
