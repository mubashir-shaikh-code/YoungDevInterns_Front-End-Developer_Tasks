let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.head');
let line = document.querySelector('.movingline');
let psin = document.querySelector('.psin');
let psup = document.querySelector('.psup');
let inputs = document.querySelectorAll('.input2 input'); 


signinbtn.addEventListener('click', () => {

    nameField.classList.add('hidden');
    title.innerHTML = 'SIGN IN';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    line.style.transform = 'translateX(35px)';
    psup.style.display = 'none';
    psin.style.display = 'block';
    inputs.forEach(input => input.value = '');

});

signupbtn.addEventListener('click', () => {
   
    nameField.classList.remove('hidden');
    title.innerHTML = 'SIGN UP';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    line.style.transform = 'translateY(0.5px)';
    psup.style.display = 'block';
    psin.style.display = 'none';
    inputs.forEach(input => input.value = '');
});