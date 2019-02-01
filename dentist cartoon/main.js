const logIn = document.querySelector('#login-form-link');
const register = document.querySelector('#register-form-link');
let switcher = true; // var for Log In or Register

// LOGIN FORM
const loginForm = document.querySelector('.loginForm');

const userName = document.querySelector('#inputUsername');
const password = document.querySelector('#inputPassword');
const rememberMe = document.querySelector('#checkRemember');
const logInBtn = document.querySelector('#logInBtn');
const forgotPass = document.querySelector('#forgotPass');

// REGISTER FORM
const registerForm = document.querySelector('.registerForm');

const regEmail = document.querySelector('#regEmail');
const regUserName = document.querySelector('#regUserName');
const regPassword = document.querySelector('#regPassword');
const regConfirmPassword = document.querySelector('#regConfirmPassword');
const gridCheck = document.querySelector('#gridCheck');
const signUp = document.querySelector('#signUp');

signUp.addEventListener('click', postData);
//
let point = 'https://reqres.in/api/';

register.addEventListener('click', showRegister);
logIn.addEventListener('click', showLogin);
logInBtn.addEventListener('click', allUsers)

function showLogin() {
    registerForm.classList.add('hide');
    loginForm.classList.remove('hide');
    this.classList.add('activeUnderline');
    register.classList.remove('activeUnderline');
    console.log();
}

function showRegister() {
    loginForm.classList.add('hide');
    registerForm.classList.remove('hide');
    this.classList.add('activeUnderline');
    logIn.classList.remove('activeUnderline');
}

function allUsers() {
    fetch(`${point}users?page=2`)
        .then(response => response.json())
        .then(data => console.log(data))
}

//

function postData(event) {
    event.preventDefault();

    let emailNewUser = regEmail.value;
    let userNameNewUser = regUserName.value;
    let passNewUser = regPassword.value;
    let confPassNewUser = regConfirmPassword.value;

    fetch("https://reqres.in/api/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailNewUser,
                // username : userNameNewUser,
                password: passNewUser,
                // confirm : confPassNewUser

            })
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err, data))
}