const registerBtn = document.getElementById('registerBtn');
const popup = document.getElementById('popup');
const popup1 = document.getElementById('popup1');
const okBtn = document.querySelector('.popup button'); 
const okBtn1 = document.querySelector('.popup1 button'); 

const usernameInput = document.querySelector('input[placeholder="USERNAME"]');
const genderSelect = document.querySelector('select[name="gender"]');
const emailInput = document.querySelector('input[placeholder="EMAIL"]');
const passwordInput = document.querySelector('input[placeholder="PASSWORD"]');

registerBtn.addEventListener('click', function () {
    // Check if any input fields are empty
    if (
        usernameInput.value.trim() === '' ||
        genderSelect.value === '' ||
        emailInput.value.trim() === '' ||
        passwordInput.value.trim() === ''
    ) {
        // Display the error popup
        popup1.style.display = 'block';
    } else {
        // Display the success popup
        popup.style.display = 'block';
    }
});

okBtn.addEventListener('click', function () {
    // Hide the success popup
    popup.style.display = 'none';
});

okBtn1.addEventListener('click', function () {
    // Hide the error popup
    popup1.style.display = 'none';
});
