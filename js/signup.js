const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector('.error-main');
    const check = formControl.querySelector('.fa-check');

    errorDisplay.innerText = message;
    formControl.classList.add('error');
    check.style.visibility="hidden"; 
    formControl.classList.remove('success');
}

const setSuccess = element => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector('.error-main');
    const check = formControl.querySelector('.fa-check');

    errorDisplay.innerText = '';
    formControl.classList.add('success');
    check.style.visibility="visible"; 
    formControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullnameValue =fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    
    if(fullnameValue === '') {
        setError(fullname, 'Name is required');
        return
    } else {
        setSuccess(fullname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        return
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        return
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        return
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
        return
    } else {
        setSuccess(password);
    }

    window.location.href = "../login/login.html";
};
