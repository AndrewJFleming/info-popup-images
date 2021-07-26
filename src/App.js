import { animals } from './animals';
import React from 'react';
import './App.css';

const showBackground = true;
const background = <img className="background" alt="ocean" src="/images/backgroundImage.png"/>

const title = ""

const images = [];
for (const animal in animals) {
   images.push(
    <img 
      onClick={displayFact} 
      key={animal} 
      className='animal' 
      alt={animal} 
      src={animals[animal].image} 
      aria-label={animal} 
      role='button'
    />
  )
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
};

function App() {
  return (
    <div className="pageWrapper">
      <h1 className="pageTitle">{!title && "Click an animal for a fun fact"}</h1>
      <div className='animals'>{images}</div>
      <p id='fact'></p>
    </div>
  );
};

export default App;