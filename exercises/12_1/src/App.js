import React from 'react';
import './App.css';

const task = value => {
  return <li>{value}</li>;
};

const tasks = ['Nada', 'Dormir', 'Fumar', 'Codar', 'Dormir'];

function App() {
  return (
    <>
      <h1>Minha lista de tarefas</h1>
      <ol>{tasks.map(e => task(e))}</ol>
    </>
  );
}

export default App;
