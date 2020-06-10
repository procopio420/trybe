import React from 'react';

function Image(props) {
  const { dog, loading } = props;
  return (
    <div className='card-image'>
      {loading ? (
        <div className='columns is-centered is-vcentered w-100'>
          Loading...
        </div>
      ) : (
        <figure className='image is-4by3'>
          <img src={dog.image} alt={'b'} />
        </figure>
      )}
    </div>
  );
}

export default Image;
