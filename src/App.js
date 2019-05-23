import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Newsletter Sign-up</h1>
      <form class="signup">
        <input type="text" class="first_name" placeholder="First Name"></input>
        <input type="text" class="last_name" placeholder="Last Name"></input>
        <input type="text" class="email"placeholder="Email address"></input>
      </form>
      
    </div>
  );
}

export default App;
