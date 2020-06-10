import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Buttons from './Buttons';
import Image from './Image';
import Info from './Info';

function Card() {
  const [dog, setDog] = useState({});
  const [dogArray, setDogArray] = useState(() => {
    const dogArrayLocal = localStorage.getItem('DogArray');
    const dogArrayParsed = JSON.parse(dogArrayLocal);
    if (dogArrayParsed) if (dogArrayParsed.length) return dogArrayParsed;
    return [];
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dogArray.length) {
      localStorage.setItem('DogArray', JSON.stringify(dogArray));
    }
  }, [dogArray]);
  const saveDogToArray = dog => {
    console.log(dog);
    setDogArray([...dogArray, dog]);
  };
  const changeDogName = event => {
    setDog({ ...dog, name: event.target.value });
  };

  const getANewAndRandomDog = () => {
    setLoading(true);
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        const urlInArray = res.data.message.split('/');
        const breed = urlInArray[4].split('-');
        const newDog = { name: 'Dog Sem Nome', image: res.data.message, breed };
        return setDog(newDog);
      })
      .then(res =>
        setTimeout(() => {
          setLoading(false);
        }, 500),
      );
  };

  useEffect(() => {
    getANewAndRandomDog();
  }, []);

  return (
    <div className='card'>
      <Image dog={dog} loading={loading} />
      <Info dog={dog} setDogName={changeDogName} />
      <Buttons
        dog={dog}
        getANewAndRandomDog={getANewAndRandomDog}
        saveDogToArray={saveDogToArray}
      />
    </div>
  );
}

export default Card;
