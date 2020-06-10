import React from 'react';

function Info(props) {
  const { dog, setDogName } = props;
  return (
    <div className='card-content'>
      <p className='title'>{dog.name}</p>
      <p className='subtitle mb-2'>{dog.breed}</p>
      <input
        onChange={e => {
          setDogName(e);
        }}
        className='input'
        type='text'
        placeholder='Me dê um nome!'
      />
    </div>
  );
}

export default Info;
