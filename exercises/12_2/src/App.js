import React from 'react';
import pokemons from './data';

import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon'

import './style.css'

function App() {
  return (
    <Pokedex>
      {pokemons.map(p => (
        <Pokemon
          key={p.id}
          name={p.name}
          type={p.type}
          weight={p.averageWeight.value}
          unit={p.averageWeight.measurementUnit}
          img={p.image}
          info={p.moreInfo}
        />
      ))}
    </Pokedex>
  );
}

export default App;
