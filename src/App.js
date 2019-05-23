import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsletterSignup from './NewsletterSignup';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Newsletter Sign-up</h1>
        <NewsletterSignup 
          first_name={this.state.first_name} 
          last_name={this.state.last_name} 
          email={this.state.email} 
        />
      </div>
    );
  }
}


