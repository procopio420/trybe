import React from 'react';

function Buttons(props) {
  return (
    <footer className='card-footer'>
      <p
        className='card-footer-item'
        onClick={() => {
          props.getANewAndRandomDog();
        }}
      >
        <span>Próximo</span>
      </p>
      <p
        className='card-footer-item'
        onClick={() => {
          props.saveDogToArray(props.dog);
        }}
      >
        <span>Salvar</span>
      </p>
    </footer>
  );
}

export default Buttons;
