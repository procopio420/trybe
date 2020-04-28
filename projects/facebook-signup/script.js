const userInput = document.getElementById('user-email-phone');
const userPass = document.getElementById('user-password');

function loginHandler() {
  alert(userInput.value);
  userInput.value = '';
  userPass.value = '';
}

const loginBtn = document.getElementById('button-login');
const loginForm = document.getElementById('login-form');
loginBtn.addEventListener('click', loginHandler);
loginForm.addEventListener('submit', (e) => { e.preventDefault(); });

const registerName = document.getElementById('name');
const registerSurname = document.getElementById('surname');
const registerEmail = document.getElementById('email');
const registerPassword = document.getElementById('password');
const registerDate = document.getElementById('date');
const registerRadioFem = document.getElementById('radioFem');
const registerRadioMas = document.getElementById('radioMas');
const registerRadioPer = document.getElementById('radioPer');

function validateForm() {
  if (registerName.value.length < 3 ||
    registerSurname.value.length < 3 ||
    registerEmail.value.length < 3 ||
    registerPassword.value.length < 6 ||
    registerDate.value.length < 10) {
    return false;
  }
  if (!(registerRadioPer.checked ||
      registerRadioFem.checked ||
      registerRadioMas.checked)) {
    return false;
  }

  return true;
}

function cleanForm() {
  registerName.value = '';
  registerSurname.value = '';
  registerEmail.value = '';
  registerPassword.value = '';
  registerDate.value = '';
  registerRadioFem.checked = false;
  registerRadioMas.checked = false;
  registerRadioPer.checked = false;
}

function registerHandler() {
  if (!validateForm()) {
    alert('Dados inválidos');
    return 0;
  }
  let genero = '';
  if (registerRadioFem.checked) {
    genero = 'Feminino';
  }
  if (registerRadioMas.checked) {
    genero = 'Masculino';
  }
  if (registerRadioPer.checked) {
    genero = 'Personalizado';
  }
  const response = `${registerName.value} - ${genero}`;
  alert(response);
  cleanForm();
  return 0;
}

const registerBtn = document.getElementById('facebook-register');
const registerForm = document.getElementById('register-form');

registerBtn.addEventListener('click', registerHandler);
registerForm.addEventListener('submit', (e) => { e.preventDefault(); });
