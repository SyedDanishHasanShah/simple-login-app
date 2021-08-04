const submitButton = document.querySelector('.submit-button');
const modalWindow = document.querySelector('.main__modal');
const modalClose = document.querySelector('.modal__close');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

submitButton.addEventListener('click', function() {
    const emailValue = email.value.toLowerCase();
    const passwordValue = password.value;
    const isValidEmail = validateEmail(emailValue);
    const isValidPassword = validatePassword(passwordValue);
    if (validateEmail(emailValue) && validatePassword(passwordValue)) {
        alert('Login Successful');
    }
    else {
        alert('Invalid input(s)! Please try again!');
        if (!isValidEmail) {
            email.style.border = "3px solid red";
        }
        if (!isValidPassword) {
            password.style.border = "3px solid red";
        }
    }
    email.value = '';
    password.value = '';
})

email.addEventListener('keydown', () => changeBorderToNormal(email));

password.addEventListener('keydown', () => changeBorderToNormal(password));


function changeBorderToNormal(element) {
    if (element.style.border === '3px solid red') element.style.border = "2px solid black";
}

function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validatePassword(password) {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
