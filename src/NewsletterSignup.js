import React, { Compoment } from 'react';


export default class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      firstNameError: '',
      lastNameError: '',
      emailError: '',
    };
  };

  handleFirstNameChange = e => {
    this.setState({firstName: e.target.value}, () => {
      this.validateFirstName();
    });
  };

  handleLastNameChange = e => {
    this.setState({lastName: e.target.value}, () => {
      this.validateLastName();
    });
  };

  handleEmailChange = e => {
    this.setState({email: e.target.value}, () => {
      this.validateEmail();
    });
  };

  validateFirstName = () => {
    const { firstName } = this.state;
    this.setState({
      firstNameError: firstName.length > 3 ? null : "First name must be at least 3 characters"
    });
  };

  validateLastName = () => {
    const { lastName } = this.state;
    this.setState({
      lastNameError: lastName.length > 2 ? null : "Last name must be at least 2 characters"
    });
  };
  
  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError: email.length > 3 ? null : "Email must be at least 3 characters"
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email } = this.state;
    alert(`firstName: ${firstName} lastName: ${lastName} email: ${email}`)
  }

  render (){
    return (
      <form onSubmit={this.handleSubmit()}>
        <input 
          type="text" 
          className={`form-control ${this.state.firstNameError ? 'is-invalid' : ''}`} 
          value={this.state.firstName} 
          onChange={this.handlefirstNameChange} 
          onBlur={this.validateFirstName} 
          placeholder="First Name" 
          required >
        </input><br/>
        <input 
          type="text" 
          className={`form-control ${this.state.lastNameError ? 'is-invalid' : ''}`} 
          value={this.state.lastName} 
          onChange={this.handleLastNameChange} 
          onBlur={this.validateLastName} 
          placeholder="Last Name" 
          required >
        </input><br/>        
        <input 
          type="email" 
          className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`} 
          value={this.state.email} 
          onChange={this.handleEmailChange} 
          onBlur={this.validateEmail}
          placeholder="Email address"
          required >
        </input><br/>
        <button type="primary" onclick="document.getElementById().style.display='block'">Submit</button>      
      </form>
    );
  };
};