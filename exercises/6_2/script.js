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

let picker = new Pikaday({ field: dateInput, format: 'DD/MM/YYYY' });

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
    opt.value = Object.values(states[i])[0];
    opt.innerHTML = Object.values(states[i])[0];
    stateInput.appendChild(opt);
  }
}
function validate(){
  new JustValidate('#form', {
    rules: {
      radio: {
        required: true,
      },
      select: {
        required: true,
      },
      required: {
        required: true,
      },
      required2: {
        required: true,
      },
      required3: {
        required: true,
      },
      required4: {
        required: true,
      },
      required5: {
        required: true,
      },
      required6: {
        required: true,
      },
    },
    submitHandler: () => {
      return createHandler();
    }
  });
}

function createHandler() {
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
  form.addEventListener('submit', (e) => { e.preventDefault() });
  createButton.addEventListener('click', validate);
  cleanButton.addEventListener('click', cleanHandler);

  cv.style.display = 'none';
}
