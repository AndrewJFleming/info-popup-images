// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { animals } from './animals';
import React from 'react';
import './App.css';

const showBackground = true;
const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

function displayBG(e) {
  const selectedAnimal = e.target.alt;

}

const images = [];
for (const animal in animals) {
   images.push(<img onClick={displayFact} key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button'/>)
}


const title = ""

function App() {
  return (
    <div>
    <h1>{!title && "Click an animal for a fun fact"}</h1>
    {showBackground && background}
    <p id='fact'></p>
    <div className='animals'>{images}</div>
    <input type='button' value="Click me" onClick={displayBG}/>
  </div>
  );
}

export default App;