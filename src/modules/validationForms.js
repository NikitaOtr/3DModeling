const validationForms = inputs => {
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

export default validationForms;
