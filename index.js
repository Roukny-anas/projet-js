const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event) => {

    validateForm();
    console.log(isFormValid());
    if (isFormValid() == true) {
        form.submit();
    } else {
        event.preventDefault();
    }

});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}

function validateForm() {

    //USERNAME
    if (usernameInput.value.trim() == '') {
        setError(usernameInput, 'Le nom ne peut pas être vide');
    } else if (usernameInput.value.trim().length < 3 || usernameInput.value.trim().length > 25) {
        setError(usernameInput, 'Le nom doit contenir au moins 3 et au maximum 25 caractères');
    } else {
        setSuccess(usernameInput);
    }

    //EMAIL
    if (emailInput.value.trim() == '') {
        setError(emailInput, 'Fournir une adresse e-mail');
    } else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput);
    } else {
        setError(emailInput, 'Fournir une adresse e-mail valide');
    }

    //PASSWORD


    if (passwordInput.value.trim() == '') {
        setError(passwordInput, 'Le mot de passe ne peut pas être vide');
    } else if (passwordRule(passwordInput.value)) {
        setSuccess(passwordInput);
    } else {
        setError(passwordInput, 'Le mot de passe doit comporter au moins 8 caractères, dont au moins 1 caractère minuscule, 1 caractère majuscule, 1 chiffre et 1 caractère spécial dans (!@#$%^&*)');
    }


    //CONFIRM PASSWORD
    if (confirmPasswordInput.value.trim() == '') {
        setError(confirmPasswordInput, 'Le mot de passe ne peut pas être vide');
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput, 'Le mot de passe ne correspond pas');
    } else {
        setSuccess(confirmPasswordInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}
function passwordRule(password) {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};





