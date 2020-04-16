let brasil = document.querySelector('#Estados');

function mostraEstados() {
  var estados = ['AC', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  for (let i = 0; i < estados.length; i++) {
    let opcoes = document.createElement('option');
    opcoes.innerHTML = estados[i];
    brasil.appendChild(opcoes);
  }
}
mostraEstados(); 