import React from 'react';
import './style.css';

const Pokemon = props => {
  return (
    <div className='card w'>
      <div className='row no-gutters justify-content-center align-items-center'>
        <div className='col-md-5'>
          <img src={props.img} className='card-img w-100 h-100' alt='...' />
        </div>
        <div className='col-md-7'>
          <div className='card-body'>
            <h4 className='card-title'>
              <strong>{props.name}</strong>
            </h4>

            <h5>
              Type(s):{' '}
              {props.types &&
                props.types.map(a => (
                  <span key={a.slot} className='badge badge-secondary mr-2'>
                    {a.type.name.charAt(0).toUpperCase() + a.type.name.slice(1)}
                  </span>
                ))}
            </h5>
            <h5>Weight: {props.weight} kg</h5>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* <a className='pokemon-container' href={props.info}>
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
    </a> */
  }
};

export default Pokemon;
