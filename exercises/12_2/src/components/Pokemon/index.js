import React from 'react';
import './style.css';

const Pokemon = props => {
  return (
    <a className='pokemon-container' href={props.info}>
      <img src={props.img} alt='img' />
      <div>
        <h2>{props.name}</h2>
        <p>
          <b>{props.type}</b>
        </p>
        <p>
          {props.weight} {props.unit}
        </p>
      </div>
    </a>
  );
};

export default Pokemon;
