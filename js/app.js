let email_val = document.getElementById('emailField');
let password_val = document.getElementById('passwordField');
let submitbtn = document.getElementById('signin');

submitbtn.addEventListener('click', () => {
  console.log('====================================');
  console.log(email_val.value);
  console.log(password_val.value);
  console.log('====================================');
});
