import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsletterSignup from './NewsletterSignup';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Newsletter">
          <h1>Newsletter Sign-up</h1>
          <div className="Newsletter-form">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    )
  }
}


