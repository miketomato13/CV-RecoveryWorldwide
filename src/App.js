import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewsletterSignup from './NewsletterSignup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Newsletter Sign-up</h1>
      <NewsletterSignup />
    </div>
  );
}

export default App;
