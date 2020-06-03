import React from 'react';
import './style.css';

const Pokedex = props => {
  return (
    <div className='pokedex-container'>
      <h1>My Pokedex</h1>
      {props.children}
      <button className='btn btn-primary mt-5' onClick={props.handleNextPokemon}>Next Pokemon</button>
    </div>
  );
};

export default Pokedex;
