import React, { useState, useEffect } from 'react';

import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';

import api from './services/api';

import './style.css';

function App() {
  const [pokemon, setPokemon] = useState({});

  const getPokemonsData = async () => {
    const random = Math.floor(Math.random() * 722);
    const res = await api.get(`pokemon/${random}`);
    const newPokemon = {
      id: res.data.id,
      name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
      image: res.data.sprites.front_default,
      types: res.data.types,
      weight: res.data.weight,
    };
    return newPokemon;
  };

  useEffect(() => {
    getPokemonsData().then(res => setPokemon(res));
  }, []);

  // useEffect(() => {
  //   console.log(pokemons);
  // }, [pokemons]);

  // useEffect(() => {
  //   setPokemonIndex(0);
  //   if (type === 'All') setPokemons(data);
  //   else setPokemons(data.filter(pokemon => pokemon.type === type));
  // }, [type]);

  // useEffect(() => {
  //   if (pokemonIndex !== -1) setPokemon(pokemons[pokemonIndex]);
  //   else setPokemon(pokemons[0]);
  // }, [pokemons, pokemonIndex]);

  const handleNextPokemon = () => {
    getPokemonsData().then(res => setPokemon(res));
  };

  // useEffect(() => {
  //   console.log(pokemons);
  // }, [pokemons]);

  // const handleFilterPokemons = event => {
  //   setType(event.target.innerHTML);
  // };

  // const getAllTypes = () =>
  // data
  //   .map(pokemon => pokemon.type)
  //   .filter((type, index, array) => array.indexOf(type) === index);

  return (
    <Pokedex handleNextPokemon={handleNextPokemon}>
      {pokemon && (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          weight={pokemon.weight}
          img={pokemon.image}
        />
      )}
    </Pokedex>
  );
}

export default App;
