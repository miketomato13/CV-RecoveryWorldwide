import React from 'react';

export default class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email: '',
    }
  }

  handleFirstNameChange = (event) => {
    this.setState({firstName: event.target.value});
  }
  
  handleLastNameChange = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    const { firstName, lastName, email } = this.state
    alert(`Thank you ${firstName} ${lastName} for signing up!\nA confirmation has been sent to ${email}!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name: </label>
          <input name="name" className="form-control" id="name" placeholder="Enter first name" value={this.state.firstName} onChange={this.handleFirstNameChange} required minlength="3" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Last Name: </label>
          <input name="name" className="form-control" id="name" placeholder="Enter last name" value={this.state.lastName} onChange={this.handleLastNameChange} required minlength="2" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} required />
        </div>
        <button type="submit" className="btn btn-success btn-block">Submit</button>
      </form>
    )
  }
}