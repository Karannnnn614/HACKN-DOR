const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signUpForm');

const loginLink = document.querySelector('#loginForm a');
const signUpLink = document.querySelector('#signUpForm a');

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'flex';
  signUpForm.style.display = 'none';
});

signUpLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signUpForm.style.display = 'flex';
});

const signUpButton = document.querySelector('#signUpForm button[type="submit"]');
signUpButton.addEventListener('click', handleSignUp);