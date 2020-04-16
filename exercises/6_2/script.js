const emailInput = document.getElementById('input_email');
const stateInput = document.getElementById('input_state');
const dateInput = document.getElementById('input_date');
const nameInput = document.getElementById('input_name');
const cpfInput = document.getElementById('input_cpf');
const cityInput = document.getElementById('input_city');
const typeHouseInput = document.getElementById('input_type_house');
const typeAptInput = document.getElementById('input_type_apartment');
const resumeInput = document.getElementById('input_resume');
const roleInput = document.getElementById('input_role');
const descriptionInput = document.getElementById('input_description');

const form = document.getElementsByTagName('form')[0];

const cv = document.getElementById('cv');

const createButton = document.getElementById('btn_submit');
const cleanButton = document.getElementById('btn_clean');

const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/

function validateDate(date) {
  if (date === '') return 0;
  let sD = sM = sY = '';
  let d = m = y = 0;
  if (date[2] !== '/' || date[5] !== '/') {
    alert('Formato inválido.\nFormato aceito: DD/MM/YYYY');
    return 'invalid format';
  }
  sD += date[0] + date[1];
  sM += date[3] + date[4];
  sY += date[6] + date[7] + date[8] + date[9];
  d = Number(sD);
  m = Number(sM);
  y = Number(sY);
  if (Number.isNaN(d) || Number.isNaN(m) || Number.isNaN(y)) {
    alert('Letras e caracteres não aceitos')
    return 'nao numero';
  }
  if (d < 1 || d > 31) {
    alert('Dia deve estar entre 1 e 31');
    return 'dia';
  }
  if (m < 1 || m > 12) {
    alert('Mes deve estar entre 1 e 12');
    return 'mes';
  }
  if (y < 0) {
    alert('Ano deve ser positivo');
    return 'ano';
  }
  return 'ok';
}

function validateEmail(email) {
  if (email === '') return 0;

  if (emailRegex.test(email)) return true;

  alert('Email inválido.\nFormato válido: exemplo@dominio.com');
  return false;
}

function createStates() {
  const states = [
    { AC: 'Acre' },
    { AL: 'Alagoas' },
    { AP: 'Amapá' },
    { AM: 'Amazonas' },
    { BA: 'Bahia' },
    { CE: 'Ceará' },
    { DF: 'Distrito Federal' },
    { ES: 'Espírito Santo' },
    { GO: 'Goías' },
    { MA: 'Maranhão' },
    { MT: 'Mato Grosso' },
    { MS: 'Mato Grosso do Sul' },
    { MG: 'Minas Gerais' },
    { PA: 'Pará' },
    { PB: 'Paraíba' },
    { PR: 'Paraná' },
    { PE: 'Pernambuco' },
    { PI: 'Piauí' },
    { RJ: 'Rio de Janeiro' },
    { RN: 'Rio Grande do Norte' },
    { RS: 'Rio Grande do Sul' },
    { RO: 'Rondônia' },
    { RR: 'Roraíma' },
    { SC: 'Santa Catarina' },
    { SP: 'São Paulo' },
    { SE: 'Sergipe' },
    { TO: 'Tocantins' },
  ]
  for (let i in states) {
    const opt = document.createElement('option');
    opt.value = Object.keys(states[i])[0];
    opt.innerHTML = Object.values(states[i])[0];
    stateInput.appendChild(opt);
  }
}

function createHandler() {
  if (validateDate(dateInput.value) === 'ok' && validateEmail(emailInput.value)) {
    cv.style.display = 'inline';
    const pName = document.getElementById('cv-name');
    pName.innerHTML = "Nome: " + nameInput.value;
    const pEmail = document.getElementById('cv-email');
    pEmail.innerHTML = "Email: " + emailInput.value;
    const pCPF = document.getElementById('cv-cpf');
    pCPF.innerHTML = "CPF: " + cpfInput.value;
    const pCity = document.getElementById('cv-city');
    pCity.innerHTML = "Cidade: " + cityInput.value;
    const pState = document.getElementById('cv-state');
    for (let i of document.getElementsByTagName('option')) {
      if (i.selected) {
        pState.innerHTML = "Estado: " + i.innerHTML;
        break;
      }
    }
    const pType = document.getElementById('cv-type');
    for (let i of document.getElementsByName('type')) {
      if (i.checked) {
        pType.innerHTML = "Tipo: " + i.value;
        break;
      }
    }
    const pResume = document.getElementById('cv-resume')
    pResume.innerHTML = resumeInput.value;
    const pRole = document.getElementById('cv-role')
    pRole.innerHTML = "Cargo: " + roleInput.value;
    const pDesc = document.getElementById('cv-description')
    pDesc.innerHTML = "Descrição do cargo: " + descriptionInput.value;
    const pDate = document.getElementById('cv-date')
    pDate.innerHTML = "Data de início no cargo: " + dateInput.value;
  }

}

function cleanHandler() {
  nameInput.value = '';
  emailInput.value = '';
  stateInput.value = '';
  dateInput.value = '';
  cpfInput.value = '';
  cityInput.value = '';
  typeAptInput.checked = false;
  typeHouseInput.checked = false;
  resumeInput.value = '';
  roleInput.value = '';
  descriptionInput.value = '';
  cv.style.display = 'none';
}

window.onload = function () {
  createStates();
  createButton.addEventListener('click', createHandler);
  cleanButton.addEventListener('click', cleanHandler);
  form.addEventListener('submit', (e) => { e.preventDefault() });
  cv.style.display = 'none';
}

