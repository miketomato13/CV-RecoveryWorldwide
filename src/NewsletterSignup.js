import React from 'react';


const NewsletterSignup = ({first_name, last_name, email}) => {
  
  
  return (
    <form action="/action_page.php" onsubmit="myFunction()">
      <input type="text" className="first_name" placeholder="First Name" required minlength="3"></input><br/>
      <input type="text" className="last_name" placeholder="Last Name" required minlength="2"></input><br/>
      <input type="email" className="email"placeholder="Email address"></input><br/>
      <button type="primary" onclick="document.getElementById().style.display='block'">Submit</button>      
    </form>
  );
}


export default NewsletterSignup;