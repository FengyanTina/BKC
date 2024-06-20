import React from 'react';

import './App.css';

function App() {
    const date = new Date();
    const time = date.toLocaleTimeString()
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          BKC App
        </p>
        <h1>{new Date().toLocaleDateString()}</h1>
        <h1>{new Date().toLocaleTimeString()}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='container'>
      
      <div className='card'>
        <div className='contentbef'>    
        </div>
        <div className='content'>
          <h3>Card One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <a href='/'>Read More</a>
        </div>
      </div>
      
      <div className='card'>
        <div className='content'>
          
          <h3>Card Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <a href='/'>Read More</a>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
          <h2>03</h2>
          <h3>Card Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <a href='/'>Read More</a>
        </div>
      </div>
    </div>
    </div>
 
  );
  
}

export default App;
