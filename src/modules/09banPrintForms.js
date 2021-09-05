const banPrintForms = () => {
    const calculatorForms = document.querySelector('.calc-block');
    calculatorForms.addEventListener('input', event => {
        const target = event.target;
        target.value = target.value.replace(/\D/, '');
    });

    const banPrintForm = form => {
        form.addEventListener('input', event => {
            const target = event.target;
            if (target.name === 'user_name') {
                target.value = target.value.replace(/[^а-яА-ЯёЁ\s]/, '');
            } else if (target.name === 'user_email') {
                target.value = target.value.replace(/[^-\w!_.~*@]/, '');
            } else if (target.name === 'user_phone') {
                target.value = target.value.replace(/[^\d+]/, '');
            } else if (target.name === 'user_message') {
                target.value = target.value.replace(/[^а-яА-ЯёЁ\s.!-?1-9]/, '');
            }
        });
    };
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');
    banPrintForm(form1);
    banPrintForm(form2);
    banPrintForm(form3);
};

export default banPrintForms;
