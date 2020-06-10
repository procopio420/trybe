import React from 'react';
import './App.css';
import Card from './components/Card.jsx'

function App() {
  return (
    <div className='columns is-mobile is-centered is-vcentered full-height'>
      <div className='column is-one-third'>
        <Card />
      </div>
    </div>
  );
}

export default App;
