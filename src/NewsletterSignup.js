import React from 'react';

const NewsletterSignup = () => {
  return (
    <form class="signup">
      <input type="text" class="first_name" placeholder="First Name" required minlength="3"></input><br/>
      <input type="text" class="last_name" placeholder="Last Name" required minlength="2"></input><br/>
      <input type="email" class="email"placeholder="Email address"></input><br/>
      <button type="primary" onclick="document.getElementById().style.display='block'">Submit</button>      
    </form>
  );
}

export default NewsletterSignup;