const submitButton = document.querySelector('.submit-button');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalHeading = document.querySelector('.modal__heading');
const modalClose = document.querySelector('.modal__close');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

submitButton.addEventListener('click', function() {
    const emailValue = email.value.toLowerCase();
    const passwordValue = password.value;
    const isValidEmail = validateEmail(emailValue);
    const isValidPassword = validatePassword(passwordValue);
    if (validateEmail(emailValue) && validatePassword(passwordValue)) {
        // alert('Login Successful');
        modalHeading.innerHTML = "Login successful!";
        openModal();

    }
    else {
        // alert('Invalid input(s)! Please try again!');
        modalHeading.innerHTML = 'Login failed!';
        openModal();
        if (!isValidEmail) {
            email.classList.add('input--invalid');
        }
        if (!isValidPassword) {
            console.log("hello");
            password.classList.add('input--invalid');
        }
    }
    email.value = '';
    password.value = '';
})

email.addEventListener('keydown', () => changeBorderToNormal(email));

password.addEventListener('keydown', () => changeBorderToNormal(password));

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modalHeading.classList.contains('hidden')) closeModal();
});


function changeBorderToNormal(element) {
    if (element.classList.contains('input--invalid')) element.classList.remove('input--invalid');
};

function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

function validatePassword(password) {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
};

function openModal() {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

function closeModal() {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
};